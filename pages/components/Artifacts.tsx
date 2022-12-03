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
            <div className="grid grid-cols-3 m-4 ">
                {artifacts.map((artifact, index) => (
                    <div key={index} className="flex justify-center">
                        <div className="w-24 shadow-md shadow-slate-500  hover:shadow-slate-400 m-3 h-40 hover:scale-110 duration-300 bg-gradient-to-bl border-gradient-to-br rounded-md from-green-900 to-cyan-900 hover:from-green-800 hover:to-cyan-800 bg-white border-[1px] border-yellow-100">
                            <Link
                                href="./"
                                className=" text-center m-3 w-24 h-100 text-xs  text-yellow-100"
                            >
                                <div className="flex  justify-center">
                                    <Image
                                        className="rounded-md border-[1px] border-stone-400"
                                        src={artifact.thumbnail}
                                        width="72"
                                        height="72"
                                        alt="test"
                                    />
                                </div>
                                <div>title:{artifact.title}</div>
                                <div>role:{artifact.role}</div>
                            </Link>
                            <div className="flex  justify-center">
                                <Link
                                    href={artifact.github}
                                    className="text-[10px] w-2"
                                >
                                    <FaGithub className="scale-150 mt-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
