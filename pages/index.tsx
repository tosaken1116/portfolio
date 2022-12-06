import Header from "./components/Header";
import MainPageButton from "./components/MainPageButtons";
export default function Home() {
    return (
        <div className="lg:text-7xl md:text-3xl">
            <Header></Header>
            <MainPageButton />
        </div>
    );
}
