import { Separator } from "./separator";

 export default function TopbarMenu() {
    return (
        <header className="flex">
            <h1 className="text-5xl font-extrabold">minURL</h1>
            <nav className="flex">
                <div className="flex items-center gap-2 text-sm md:gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="font-medium">Settings</span>
                        <span className="text-muted-foreground text-xs">Manage preferences</span>
                    </div>
                    <Separator orientation="vertical" />
                    <div className="flex flex-col gap-1">
                        <span className="font-medium">Account</span>
                        <span className="text-muted-foreground text-xs">Profile & security</span>
                    </div>
                </div>
                <button>register</button>
                <button>login</button>
            </nav>
        </header>
    );
 }