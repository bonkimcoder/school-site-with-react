import "./hero.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero container" id="home">
      <div className="hero-text">
        <h1>We offer better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis,
          repellendus excepturi delectus iste laboriosam fugit veniam quas
          repellat consectetur vel quod voluptatibus fugiat. Aspernatur, esse.
          Nisi velit earum accusamus.
        </p>
        <button className="btn btn-hero">
          Learn More
          <FaArrowRight size={20} className="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
