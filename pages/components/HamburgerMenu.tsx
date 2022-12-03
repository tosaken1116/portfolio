import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu() {
    const dammyButton = [
        {
            url: "./Hackathon",
            text: "Hackathon",
        },
        {
            url: "./Python",
            text: "Python",
        },
        {
            url: "./CG",
            text: "CG",
        },
        {
            url: "./others",
            text: "others",
        },
    ];
    const [Buttons, setButtons] = useState(dammyButton);
    return (
        <nav className="grid grid-cols-1 lg:text-5xl md:text-lg">
            {Buttons.map((button, index) => (
                <Link
                    key={index}
                    href={button.url}
                    className="duration-300 bg-slate-500 animate-slideIn3 hover:bg-slate-400 p-1 lg:w-60 md:w-24 "
                >
                    {button.text}
                </Link>
            ))}
        </nav>
    );
}
