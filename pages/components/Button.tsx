import Link from "next/link";

type PropsType = {
    text: string;
    locate: string;
    url: string;
};
export default function Button(props: PropsType) {
    return (
        <div>
            <Link
                href={props.url}
                className={
                    " px-0.5 py-1 text-white hover:scale-110 hover:bg-amber-500 bg-slate-800 block duration-300 delay-100 first:-rotate-0 last:rotate-0 mt-1 rounded-r-sm hover:text-black"
                    //     props.locate ==
                    // "1"
                    //     ? styles.lt1
                    //     : props.locate == "2"
                    //     ? styles.lt2
                    //     : props.locate == "3"
                    //     ? styles.lt3
                    //     : styles.lt4
                }
            >
                {props.text}
                <div></div>
            </Link>
        </div>
    );
}
