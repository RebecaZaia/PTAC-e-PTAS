import Image from "next/image";
import TabsDemo from "@/components/TabsDemo";

export default function Home() {
  return (
    <div>
      <div className=" flex flex-col items-center">

        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-extrabold">Encurte. Personalize. Domine.</h1>
          <h2 className="text-lg font-semibold">O encurtador de links mais confiável da internet</h2>
        </div>

        <p>Transformamos URLs longos e confusos em atalhos poderosos para o seu sucesso. Milhões de profissionais já descobriram como um link bem criado pode aumentar cliques, fortalecer marcas e impulsionar resultados.</p>

      </div>
        
      <div>
        <TabsDemo />
      </div>

    </div>
  );
} 

/**/