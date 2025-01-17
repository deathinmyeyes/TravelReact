import MainTitle from "../components/home/title";
import MainSlider from "../components/home/slider";
import MainMap from "../components/home/map";
import MainModalsCard from "../components/home/modalCard";

export default function HomePage () {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="main__wrapper">
                        <div className="main__title-wrapper">
                            <MainTitle />
                            <MainSlider />
                        </div>
                        <MainModalsCard />
                        <MainMap />
                    </div>
                </div>
            </div>
        </>
    )
}