import LrThemeSwitch from "./LrThemeSwitch";

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center p-4 pb-6 pt-8 backdrop-blur-2xl dark:bg-black bg-white">
        
        <div className="flex justify-between flex-1">
            <div>Lucacel Development
            </div>
            <div><LrThemeSwitch/></div>
        </div>

        </nav>
    );
}