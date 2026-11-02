import "./Reservations.css";
import Intro from "../../components/intro/Intro";
import Reserve from "../../components/reserve/Reserve";

const Reservations = () => {
    return (
        <div id="reservations" className="page">
            <Intro 
                title="RESERVATIONS"
                description="RESERVE YOUR TABLE AT RHONE STEAKHOUSE"
            />
            <Reserve />
        </div>
    );
};

export default Reservations;