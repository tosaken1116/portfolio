import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export default function Profile() {
    return (
        <div className="m-4 grid grid-cols-1 border-[1px] lg:w-[600px] md:w-64 rounded-lg hover:bg-gray-900 hover:scale-105 duration-300">
            <Link href="./ProfileDetail">
                <div>Name:土佐犬</div>
                <div>Age:20</div>
                <div>Profession:Student</div>
            </Link>
            <div className="mx-4 mb-8 ">
                <Link
                    href="https://github.com/tosaken1116"
                    className="w-[16px] scale-130 absolute "
                >
                    <FaGithub />
                </Link>
                <Link
                    href="https://twitter.com/Tosaken_kit_e"
                    className="w-[16px] scale-150 mt-0.4 xs:ml-6 sm:ml-8 md:ml-16 lg:ml-28 absolute"
                >
                    <AiFillTwitterCircle />
                </Link>
            </div>
        </div>
    );
}
