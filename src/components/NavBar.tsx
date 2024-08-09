import { Switch } from "@headlessui/react";
import LrSwitch from "./LrSwitch";

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center p-4 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit">
        
        <div className="flex">
            <div>Lucacel Razvan Cristian</div>
            <div><LrSwitch/></div>
        </div>

        </nav>
    );
}