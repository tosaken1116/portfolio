import Artifacts from "./components/Artifacts";
import Header from "./components/Header";

export default function Hackathon() {
    return (
        <div>
            <Header></Header>
            <div className="text-xl mt-2 ml-2">Hackathon</div>
            <div className=" h-[1px] bg-white bg-gradient-to-r from-slate-200 to-black ml-2 w-32 rounded-full"></div>
            <Artifacts />
            <iframe
                src="https://azu.github.io/github-issue-widget/?owner=tosaken1116&repo=Backs-of-seniors-hackathon&limit=10"
                allowTransparency={true}
                frameBorder="0"
                scrolling="0"
                width="100%"
            ></iframe>
        </div>
    );
}
