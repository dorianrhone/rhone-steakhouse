import "./Location.css";

const Location = () => {
  return (
    <section className="location">
      <h2>VISIT US</h2>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4306.648486703239!2d-79.9288089!3d32.779832199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a0ddbd276b5%3A0x5070ddea667dd59a!2sCumberland%20St%2C%20Charleston%2C%20SC%2029401!5e1!3m2!1sen!2sus!4v1790569111475!5m2!1sen!2sus"
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Rhone Steakhouse Location Map"
        ></iframe>
      </div>
      <p className="location-address">Cumberland St, Charleston, SC 29401</p>
      <h3>HOURS</h3>
      <div className="location-hours">
        <p>Monday - Thursday: 4:00 PM - 10:00 PM</p>
        <p>Friday - Saturday: 4:00 PM - 11:00 PM</p>
        <p>Sunday: 4:00 PM - 9:00 PM</p>
      </div>
    </section>
  );
};

export default Location;