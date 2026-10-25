import Hero from "../../components/hero/Hero";
import Intro from "../../components/intro/Intro";
import Features from "../../components/features/Features";

const Home = () => {
    return (
        <div id="home" className="page">
            <Hero />
            <Intro />
            <Features />

            <main>
                <div className="contact-container">
                    <section className="contact-section">
                        <h2>CONTACT US</h2>
                        <p>Have a question or special request? We'd love to hear from you.</p>
                    </section>

                    <section className="location-section">
                            <h2>VISIT US</h2>
                            <p>Cumberland St, Charleston, SC 29401</p>
                            <h3>HOURS</h3>
                            <p>Monday - Thursday: 4:00 PM - 10:00 PM</p>
                            <p>Friday - Saturday: 4:00 PM - 11:00 PM</p>
                            <p>Sunday: 4:00 PM - 9:00 PM</p>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Home;