import "./EventCard.css";

const EventCard = ({ img, title, date, description }) => {
    return (
        <div className="event-card">
            <img src={img} alt={title} />
            <div className="event-content">
                <h2 className="event-title">{title}</h2>
                <span className="event-date">{date}</span>
                <p className="event-description">{description}</p>
                <button className="reserve-btn">RESERVE</button>
            </div>
        </div>
    );
};

export default EventCard;