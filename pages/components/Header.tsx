import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerMenu from "./HamburgerMenu";
export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <div className="bg-slate-900  flex">
            <Link href="./">土佐犬のポートフォリオ</Link>
            <button
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                className="absolute right-5 top-2"
            >
                <GiHamburgerMenu />
            </button>
            <div
                className={
                    "absolute mt-4 right-5 lg:top-16 md:top-4  " +
                    (menuIsOpen ? " " : " hidden")
                }
            >
                <HamburgerMenu />
            </div>
        </div>
    );
}
