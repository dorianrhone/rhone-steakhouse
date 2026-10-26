import "./Events.css";
import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";

const Events = () => {
    return (
        <div id="events" className="page">
            <Intro
                title="EVENTS"
                description="WEEKLY EVENTS AT RHONE STEAKHOUSE"
            />

            <section className="events-card">
                <div className="card-image">
                    <img src="path/to/image.jpg" alt="Event" />
                </div>

                <div className="card-content">
                    <h2>Event Title</h2>
                    <p>Event Description</p>
                </div>
                
                <p className="description">Event Description</p>
                <button className="RESERVE-btn">RESERVE</button>
            </section>

            <Contact />
        </div>
    );
};

export default Events;