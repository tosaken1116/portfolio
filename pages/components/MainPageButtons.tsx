import styles from "../../styles/Home.module.css";
import Button from "./Button";
import Profile from "./Profile";

export default function MainPageButton() {
    return (
        <div className=" grid grid-cols-2 grid-rows-4 mx-12 mt-12">
            <div className={styles.test}>
                <Button locate={"1"} text="Hackathon" url="./Hackathon" />
                <Button locate={"2"} text="python" url="./Hackathon" />
                <Button locate={"3"} text="CG" url="./Hackathon" />
                <Button locate={"4"} text="coming soon..." url="./Hackathon" />
            </div>
            <Profile />
        </div>
    );
}
