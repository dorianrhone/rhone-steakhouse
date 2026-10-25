import Hero from "../../components/hero/Hero";
import Intro from "../../components/intro/Intro";
import Features from "../../components/features/Features";
import Contact from "../../components/contact/Contact";
import Location from "../../components/location/Location";


const Home = () => {
    return (
        <div id="home" className="page">
            <Hero />
            <Intro />
            <Features />
            <Contact />
            <Location />
        </div>
    );
};

export default Home;