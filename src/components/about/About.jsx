import "./about.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlaying }) => {
  const playVideo = () => {
    setPlaying(true);
  };
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="about image" className="about-img" />
        <img
          src={play_icon}
          alt="play icon"
          className="about-icon"
          onClick={playVideo}
        />
      </div>
      <div className="about-right">
        <h3>About Our University</h3>
        <h2>Nurturing Tomorroe's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          numquam! Repellendus cum sed temporibus tenetur expedita reiciendis
          esse maxime. Ab placeat nihil inventore ut ipsum sed corrupti nesciunt
          odio architecto id atque tempore aut fuga at corporis similique libero
          modi, eius neque? Recusandae maiores molestias culpa repellat labore
          neque? Ullam neque voluptatem, animi quia natus
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit labore
          provident, ea eligendi illo esse veritatis perspiciatis autem soluta
          obcaecati incidunt, repellendus minima, non unde neque distinctio!
          Quae aut, quisquam eos saepe impedit, earum ut, est maxime veritatis
          blanditiis doloribus illum qui odit perferendis nemo iure nulla ea
          dolorem harum minus officiis dignissimos esse! Mollitia quod
          asperiores reprehenderit nulla veniam molestiae ullam sequi, illum, at
          ipsa atque corporis nesciunt, temporibus voluptates repudiandae quo
          molestias doloremque amet quisquam earum qui eum?
        </p>
      </div>
    </div>
  );
};

export default About;
