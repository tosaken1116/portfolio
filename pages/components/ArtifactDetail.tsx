import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type propsType = {
    title: string;
    text: string;
    githuburl: string;
};
export default function ArtifactsDetail(props: propsType) {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.text}</div>
            <Link href={props.githuburl}>
                <FaGithub />
            </Link>
        </div>
    );
}
