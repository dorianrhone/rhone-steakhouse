import "./Hero.css";
import background1 from ".images/background1.png";

const Hero = () => {
    return (
        <section className="hero">
            <img src={background1} alt="Rhone Steakhouse" className="hero-image" />
        </section>
    );
};

export default Hero;
