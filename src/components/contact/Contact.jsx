import "./Contact.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "6de9fc3c-7f69-4a22-a32c-98341e29db0d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
      toast.error("Error");
    }
  };

  return (
    <div className="contact">
      <Toaster position="bottom-right" />
        <h1>Contact Us</h1>
        <h3>We would love to hear from you!</h3>
        <form onSubmit={onSubmit}>
        <p>
        <label>Name: </label>
        <input type="text" name="name" required/>
        </p>
        <p>
        <label>Email: </label>
        <input type="email" name="email" required/>
        </p>
        <p>
        <label>Message: </label>
        <textarea name="message" required></textarea>
        </p>
        <button type="submit">SEND MESSAGE</button>
        <span>{result}</span>
        </form>
    </div>
  );
}

           