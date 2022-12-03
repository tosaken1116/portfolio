import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

type artifacts = {
    title: string;
    github: string;
    role: string;
    thumbnail: string;
};
export default function Artifacts() {
    let dammyData = [
        {
            title: "test1",
            github: "testurl",
            role: "role1",
            thumbnail: "/cat.png",
        },
        {
            title: "test2",
            github: "testurl",
            role: "role2",
            thumbnail: "/cat.png",
        },
        {
            title: "test2",
            github: "testurl",
            role: "role2",
            thumbnail: "/cat.png",
        },
        {
            title: "test2",
            github: "testurl",
            role: "role2",
            thumbnail: "/cat.png",
        },
        {
            title: "test2",
            github: "testurl",
            role: "role2",
            thumbnail: "/cat.png",
        },
        {
            title: "test2",
            github: "testurl",
            role: "role2",
            thumbnail: "/cat.png",
        },
        {
            title: "test2",
            github: "testurl",
            role: "role2",
            thumbnail: "/cat.png",
        },
        {
            title: "test2",
            github: "testurl",
            role: "role2",
            thumbnail: "/cat.png",
        },
        {
            title: "test2",
            github: "testurl",
            role: "role2",
            thumbnail: "/cat.png",
        },
    ];
    const [artifacts, setArtifacts] = useState<artifacts[]>(dammyData);

    return (
        <div>
            <div className="grid md:grid-cols-3 xl:grid-cols-6 m-4 ">
                {artifacts.map((artifact, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="md:w-32 xl:w-64 shadow-md shadow-slate-500  hover:shadow-slate-400 m-3 h-40 hover:scale-110 duration-300 bg-gradient-to-bl border-gradient-to-br rounded-md from-green-900 to-cyan-900 hover:from-green-800 hover:to-cyan-800 bg-white border-[1px] border-yellow-100">
                            <Link
                                href="./"
                                className=" text-center w-24 h-100 md:text-sm xl:text-xl  text-yellow-100"
                            >
                                <div className="flex justify-center">
                                    <Image
                                        className="rounded-md border-[1px] border-stone-400"
                                        src={artifact.thumbnail}
                                        width="128"
                                        height="72"
                                        alt="test"
                                    />
                                </div>
                                <div>title:{artifact.title}</div>
                                <div>role:{artifact.role}</div>
                            </Link>
                            <div className="flex justify-center mt-3">
                                <Link
                                    href={artifact.github}
                                    className="md:text-[15px] xl:text-[20px] w-6"
                                >
                                    <FaGithub className="scale-150" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
