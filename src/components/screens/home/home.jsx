import MainTitle from "./homeComps/title";
import MainSlider from "./homeComps/slider";
import MainMap from "./homeComps/map";
import MainModalsCard from "./homeComps/modalCard";

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