import "./Reserve.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Reserve() {
  const [result, setResult] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "6de9fc3c-7f69-4a22-a32c-98341e29db0d");
    formData.append("date", selectedDate.toLocaleDateString());

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Reservation Submitted Successfully!");
      event.target.reset();
    } else {
      setResult("Error");
      toast.error("Error submitting reservation.");
    }
  };

  return (
    <div className="reserve">
      <Toaster position="bottom-right" />

      <div className="reserve">
        <h1>RESERVE YOUR TABLE</h1>
        <form onSubmit={onSubmit}>
          <p>
            <label>Full Name:</label>
            <input type="text" name="name" required />
          </p>
          <p>
            <label>Email:</label>
            <input type="email" name="email" required />
          </p>
          <p>
            <label>Phone Number:</label>
            <input type="tel" name="phone" required />
          </p>
          
          <p>
            <label>Date:</label>
            <DatePicker 
                selected={selectedDate} onChange={(date) => setSelectedDate(date)} 
                minDate={new Date()} dateFormat="MM/dd/yyyy" className="gold-date-input"
            />
          </p>

          <p>
            <label>Time:</label>
            <input type="time" name="time" required />
          </p>
          <p>
            <label>Number of Guests:</label>
            <input type="number" name="guests" min="1" required />
          </p>
          <p>
            <label>Special Requests:</label>
            <textarea name="message" rows="3"></textarea>
          </p>

          <button type="submit">CONFIRM RESERVATION</button>
          {result && <span className="reserve-status">{result}</span>}
        </form>
      </div>
    </div>
  );
}