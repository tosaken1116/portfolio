import Link from "next/link";

export default function HamburgerMenu() {
    return (
        <nav className="text-xs  grid grid-cols-1">
            <Link
                href="./"
                className="duration-300 bg-slate-500 animate-slideIn3 hover:bg-slate-400 p-1 w-16 "
            >
                test
            </Link>
            <Link
                href="./"
                className="duration-300 bg-slate-500 animate-slideIn4 hover:bg-slate-400 p-1 w-16 "
            >
                test
            </Link>
            <Link
                href="./"
                className="duration-300 bg-slate-500 animate-slideIn5 hover:bg-slate-400 p-1 w-16 "
            >
                test
            </Link>
            <Link
                href="./"
                className="duration-300 bg-slate-500 animate-slideIn6 hover:bg-slate-400 p-1 w-16 "
            >
                test
            </Link>
        </nav>
    );
}
