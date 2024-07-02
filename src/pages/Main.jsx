import BannerSlider from "../components/BannerSlider";
import FieldSection from "../components/FieldSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadMap from "../components/LoadMap";
import Point from "../components/Point";

const Main = () => {
    return (
        <>
            <Header />
            <BannerSlider />
            <FieldSection />
            <LoadMap />
            <Point />
            <Footer />
        </>
    );
}
export default Main;