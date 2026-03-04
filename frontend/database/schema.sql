-- Tabela de Planos de Assinatura
-- Ex: Gratuito (100 links, 1000 cliques), Pro ($9.99, ilimitado)
create table plans (
  id int primary key generated always as identity,
  name text not null,                    -- Nome do plano (ex: "Gratuito", "Básico", "Pro")
  price numeric(10, 2) not null,         -- Preço mensal
  max_links int not null,                -- Máximo de links permitidos
  max_clicks int not null                -- Máximo de cliques por link
);

-- Tabela de Usuários
create table users (
  id bigint primary key generated always as identity,
  email text not null unique,            -- Email único para login
  password_hash text not null,           -- Senha criptografada
  created_at timestamptz default now(),  -- Data de cadastro
  plan_id bigint,                        -- Plano do usuário
  foreign key (plan_id) references plans (id)
);

-- Tabela de Links Curtos
create table short_links (
  id bigint primary key generated always as identity,
  user_id bigint not null,               -- Dono do link
  original_url text not null,            -- URL longa original
  short_code text not null unique,       -- Código curto (ex: "abc123")
  created_at timestamptz default now(),  -- Data de criação
  foreign key (user_id) references users (id)
);

-- Tabela de Rastreamento de Cliques
create table click_tracking (
  id bigint primary key generated always as identity,
  short_link_id bigint not null,         -- Qual link foi clicado
  clicked_at timestamptz default now(),  -- Quando foi clicado
  referrer text,                         -- De onde veio (ex: "twitter.com")
  user_agent text,                       -- Navegador/dispositivo
  foreign key (short_link_id) references short_links (id)
);

-- Tabela de Relatórios (dados em JSON)
create table reports (
  id bigint primary key generated always as identity,
  user_id bigint not null,               -- Dono do relatório
  report_type text not null,             -- Tipo (ex: "clicks_by_day")
  generated_at timestamptz default now(),-- Data de geração
  data jsonb,                            -- Dados flexíveis em JSON
  foreign key (user_id) references users (id)
);

--atualizar tabela plans
ALTER TABLE plans
ALTER COLUMN id TYPE bigint;



-- Inserir planos
insert into plans (name, price, max_links, max_clicks) values
('Gratuito', 0.00, 10, 1000),
('Básico', 9.99, 100, 10000),
('Profissional', 29.99, 1000, 100000),
('Empresarial', 99.99, -1, -1);  -- -1 = ilimitado

-- Inserir usuários
insert into users (email, password_hash, plan_id) values
('joao@email.com', 'hash_da_senha_123', 1),
('maria@email.com', 'hash_da_senha_456', 2);

-- Inserir links curtos
insert into short_links (user_id, original_url, short_code) values
(1, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'xyz123'),
(1, 'https://github.com/nodejs/node', 'abc456'),
(2, 'https://postgresql.org/docs/', 'def789');

-- Registrar cliques
insert into click_tracking (short_link_id, referrer, user_agent) values
(1, 'twitter.com', 'Mozilla/5.0...'),
(1, 'facebook.com', 'Mozilla/5.0...'),
(2, 'google.com', 'Chrome/120...');

-- Criar relatório com dados JSON
insert into reports (user_id, report_type, data) values
(1, 'clicks_summary', '{"total_clicks": 150, "unique_visitors": 89, "top_referrer": "twitter.com"}'::jsonb);



-- Listar todos os planos
select * from plans;

-- Buscar usuário por email
select * from users where email = 'joao@email.com';

-- Contar quantos links cada usuário criou
select
  u.email,
  count(sl.id) as total_links
from users u
left join short_links sl on u.id = sl.user_id
group by u.id, u.email;

-- Top 5 links mais clicados
select
  sl.short_code,
  sl.original_url,
  count(ct.id) as total_clicks
from short_links sl
left join click_tracking ct on sl.id = ct.short_link_id
group by sl.id, sl.short_code, sl.original_url
order by total_clicks desc
limit 5;

-- Estatísticas por dia (últimos 7 dias)
select
  date(clicked_at) as data,
  count(*) as cliques
from click_tracking
where clicked_at >= now() - interval '7 days'
group by date(clicked_at)
order by data desc;

-- Buscar dados JSON no relatório
select
  report_type,
  data->>'total_clicks' as cliques,
  data->>'top_referrer' as principal_fonte
from reports
where user_id = 1;

-- Consultar todos os cliques de um link específico
select
  ct.clicked_at,
  ct.referrer,
  ct.user_agent
from click_tracking ct
join short_links sl on ct.short_link_id = sl.id
where sl.short_code = 'xyz123'
order by ct.clicked_at desc;



-- Atualizar plano do usuário
update users
set plan_id = 2
where email = 'joao@email.com';

-- Corrigir URL de um link
update short_links
set original_url = 'https://novo-link.com'
where short_code = 'xyz123';

-- Atualizar dados JSON de um relatório
update reports
set data = data || '{"updated": true}'::jsonb
where id = 1;



-- Remover cliques antigos (mais de 90 dias)
delete from click_tracking
where clicked_at < now() - interval '90 days';

-- Remover link (cliques serão removidos automaticamente via CASCADE)
delete from short_links where short_code = 'abc456';