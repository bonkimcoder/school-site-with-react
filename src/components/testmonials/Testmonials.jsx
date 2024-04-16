import "./testmonials.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testmonials = () => {
  const slider = useRef();
  //   const nextBtn = useRef();
  //   const prevBtn = useRef();

  let tx = 0;

  const slideRight = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideLeft = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testmonials">
      <GrNext className="next-btn" onClick={slideRight} />
      <GrPrevious className="prev-btn" onClick={slideLeft} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, dolores vero! Similique quas nesciunt mollitia iste
                facere eius deleniti distinctio quod unde! Nulla tempore
                temporibus, nam ullam illum aliquam maxime.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, dolores vero! Similique quas nesciunt mollitia iste
                facere eius deleniti distinctio quod unde! Nulla tempore
                temporibus, nam ullam illum aliquam maxime.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, dolores vero! Similique quas nesciunt mollitia iste
                facere eius deleniti distinctio quod unde! Nulla tempore
                temporibus, nam ullam illum aliquam maxime.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, dolores vero! Similique quas nesciunt mollitia iste
                facere eius deleniti distinctio quod unde! Nulla tempore
                temporibus, nam ullam illum aliquam maxime.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testmonials;
