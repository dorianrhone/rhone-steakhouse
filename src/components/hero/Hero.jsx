import "./Hero.css";
import {useState} from "react";

const Hero = () => {

    const[slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    }

    const images = importAll(
        require.context("./images", false, /\.(png|jpe?g|svg)$/)
    );

    const slideForward = () => {
        setSlideIndex((currentIndex) =>
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
        );
    };

    const slideBackward = () => {
        setSlideIndex((currentIndex) =>
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
        );
    };

    return (
        <section className="hero">
            <img src={images[slideIndex]} alt="Rhone Steakhouse" className="hero-image" />
            <button id="next-arrow" type="button" className="arrow" onClick={slideForward} aria-label="Next image">&rsaquo;</button>
            <button id="prev-arrow" type="button" className="arrow" onClick={slideBackward} aria-label="Previous image">&lsaquo;</button>
        </section>
    );
};

export default Hero;
