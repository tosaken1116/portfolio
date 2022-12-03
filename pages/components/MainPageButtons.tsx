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
        <div className="flex justify-center ">
            <div className=" grid md:grid-cols-2 sm:grid-cols-1 grid-rows-4 mx-12 mt-12">
                <div className={styles.test}>
                    {Buttons.map((button, index) => [
                        <div key={index} className="">
                            <Link
                                href={button.url}
                                className={
                                    " p-3 text-white hover:scale-110 hover:bg-amber-500 bg-slate-800 block duration-300 delay-100  mt-1 rounded-r-sm hover:text-black"
                                }
                            >
                                {button.text}
                            </Link>
                        </div>,
                    ])}
                </div>
                <Profile />
            </div>
        </div>
    );
}
