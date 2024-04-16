import "./campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="gallery 1" />
        <img src={gallery_2} alt="gallery 2" />
        <img src={gallery_3} alt="gallery 3" />
        <img src={gallery_4} alt="gallery 4" />
      </div>
      <button className="btn dark-btn">See More </button>
    </div>
  );
};

export default Campus;
