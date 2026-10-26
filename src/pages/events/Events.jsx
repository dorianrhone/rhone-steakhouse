import "./Events.css";
import Contact from "../../components/contact/Contact";
import Intro from "../../components/intro/Intro";
import EventCard from "../../components/eventCard/EventCard";
import wineImg from "./images/wine1.png";
import steakhouseImg from "./images/steakhouse.png";
import cakeImg from "./images/cake1.png";


const eventsData = [
    {id: 1, img: wineImg, title: "Live Jazz Night", date: "Every Friday, 7 PM - 10 PM", description: "Join us for an evening of live jazz music while enjoying our exquisite menu."},
    {id: 2, img: steakhouseImg, title: "Wine Tasting Event", date: "First Saturday of Every Month, 6 PM - 9 PM", description: "Experience a curated selection of fine wines paired with gourmet appetizers."},
    {id: 3, img: cakeImg, title: "Chef's Special Dinner", date: "Last Thursday of Every Month, 6 PM - 9 PM", description: "Indulge in a special multi-course dinner prepared by our head chef."},
]

const Events = () => {
    return (
        <div id="events" className="page">
            <Intro
                title="EVENTS"
                description="WEEKLY EVENTS AT RHONE STEAKHOUSE"
            />

            <div className="events-list">
                {eventsData.map(event => (
                    <EventCard
                        key={event.id}
                        img={event.img}
                        title={event.title}
                        date={event.date}
                        description={event.description}
                    />
                ))}
            </div>

            <Contact />
        </div>
    );
};

export default Events;