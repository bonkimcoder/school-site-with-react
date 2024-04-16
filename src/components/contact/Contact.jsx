import { useState } from "react";
import "./contact.css";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    phone: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8b44d584-4cf4-4542-a822-e1fba5e13a12");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <FaEnvelope size={20} className="message-icon" />
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            dicta, numquam molestias neque a dolores perferendis corporis,
            laudantium sunt nam magni deserunt qui, rem accusantium voluptatibus
            consequuntur soluta laboriosam omnis?
          </p>
          <ul>
            <li>
              <FaEnvelope className="contact-icon" /> contact@example.com
            </li>
            <li>
              <FaPhone className="contact-icon" /> +254 73654563456
            </li>
            <li>
              <FaLocationDot className="contact-icon" /> Kasarani, Nairobi
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                name="fname"
                placeholder="Enter Your Name"
                required
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your phone No"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-control button">
              <button className="btn dark-btn">Submit</button>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.747614531505!2d36.83013129581131!3d-1.2043693804648237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1621a101da39%3A0x67699e4c3da7235c!2sThindigua%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1713175175078!5m2!1sen!2ske"
          width="600"
          height="450"
          style={{ border: "0", marginBottom: "80px" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
