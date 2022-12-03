import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Profile from "./Profile";

export default function MainPageButton() {
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
        <div className=" grid grid-cols-2 grid-rows-4 mx-12 mt-12">
            <div className={styles.test}>
                {Buttons.map((button, index) => [
                    <div key={index}>
                        <Link
                            href={button.url}
                            className={
                                " px-0.5 py-1 text-white hover:scale-110 hover:bg-amber-500 bg-slate-800 block duration-300 delay-100 first:-rotate-0 last:rotate-0 mt-1 rounded-r-sm hover:text-black"
                            }
                        >
                            {button.text}
                        </Link>
                    </div>,
                ])}
            </div>
            <Profile />
        </div>
    );
}
