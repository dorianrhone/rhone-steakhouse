import "./EventCard.css";
import {Link} from "react-router-dom";

const EventCard = ({ img, title, date, description }) => {
    return (
        <div className="event-card">
            <img src={img} alt={title} />
            <div className="event-content">
                <h2 className="event-title">{title}</h2>
                <span className="event-date">{date}</span>
                <p className="event-description">{description}</p>
                <Link to="/reservations" className="reserve-btn">RESERVE</Link>
            </div>
        </div>
    );
};

export default EventCard;