import Artifacts from "./components/Artifacts";
import Header from "./components/Header";

export default function Hackathon() {
    return (
        <div className="lg:text-7xl md:text-3xl">
            <Header></Header>
            <div className="mt-2 ml-2">Hackathon</div>
            <div className=" xl:h-[3px] md:h-[2px] sm:h-[1px] xs:h-[1px] bg-white bg-gradient-to-r from-slate-200 to-black ml-2 xl:w-96 md:w-48  sm:w-24 xs:w-20 rounded-full"></div>
            <Artifacts />
        </div>
    );
}
