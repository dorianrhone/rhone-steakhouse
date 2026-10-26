import "./Reservations.css";
import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";

const Reservations = () => {
    return (
        <div id="reservations" className="page">
            <Intro 
                title="RESERVATIONS"
                description="RESERVE YOUR TABLE AT RHONE STEAKHOUSE"
            />
            <h1>Reservation Form</h1>
            <Contact />
        </div>
    );
};

export default Reservations;