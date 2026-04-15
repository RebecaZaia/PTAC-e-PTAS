import { Separator } from "./separator";
import { Button } from "./button";
import Link from "next/link";

 export default function TopbarMenu() {
    return (
        <header className="flex items-center h-20 gap-9 ">
            <h1 className="text-5xl font-extrabold">minURL</h1>
            <nav className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2 text-sm md:gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-medium">Planos</span>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex flex-col gap-1">
                        <span className="font-medium">Recursos</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="px-2" size='ms' ><a href="/login">Login</a></Button>
                    <Button><Link href="/register">Cadastrar-se</Link></Button>
                    </div>
            </nav>
        </header>
    );
 }