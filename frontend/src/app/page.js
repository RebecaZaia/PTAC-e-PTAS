import { Tabela } from "@/components/ui/tabela";

export default function Home() {
  return (
    <div className="w-full items-center justify-center gap-4 py-8 px-4">
      <div className=" flex flex-col items-center py-4">

        <div className="flex flex-col items-center py-1.5">
          <h1 className="text-3xl font-extrabold">Encurte. Personalize. Domine.</h1>
          <h2 className="text-lg font-semibold">O encurtador de links mais confiável da internet</h2>
        </div>

        <p className="px-2">Transformamos URLs longos e confusos em atalhos poderosos para o seu sucesso. Milhões de profissionais já descobriram como um link bem criado pode aumentar cliques, fortalecer marcas e impulsionar resultados.</p>

      </div>
        
      <div className="w-full items-center justify-center py-6 ">
        <Tabela />
      </div>

      <text className="flex justify-center mt-5">Cadastre-se. Seu plano gratuito inclui:</text>
      <div className="flex flex-row items-center justify-center gap-4">
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">🔗50 links curtos/mês</a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">🔗Links personalizadas/mês</a>
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">🔗Cliques ilimitados em links</a>
      </div>

    </div>
  );
} 

/**/