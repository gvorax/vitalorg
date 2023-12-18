import React from "react";
import Navbar from "../navbar/Navbar";
import video from "../../assets/bg.mp4";
import "./main.scss";
import Button from "../../constants/Button";
import About from "../about/About";
import Promotion from "../promotion/Promotion";
import Shop from "../shop/Shop";
import Delivery from "../delivery/Delivery";
import Video from "../video/Video";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

const Main = ({ setModal, setModal1 }) => {
  const { t } = useTranslation();
  return (
    <div className="main" id="home">
      <div className="bg_video">
        {/* video for background width fullscreen and it is located background */}
        <video className="bg_video-content" autoplay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        
      </div>
      <Navbar setModal={setModal}/>
      <div className="main_content">
        <div className="container">
          <div className="main_content-text" data-aos="fade-down">
            <svg
              width="44"
              height="10"
              viewBox="0 0 44 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6.00468C4.5 2.19205 8.5 -0.30784 12.5 5.19202C16.2352 10.3277 21.3333 7.69199 22.5 5.19199C24.3607 1.20471 30.5 1.20471 33 4.70485C36.6316 9.78926 40.5 8.7051 42 4.70484"
                stroke="#E3E3E3"
                strokeWidth="3"
                stroke-linecap="round"
              />
            </svg>
            <p>{t("forComford")}</p>
          </div>
          <h1 data-aos="fade-right">{t("clean")}</h1>
          <div className="main_btns" data-aos="fade-up">
            <Button title={`${t("order")}`} setModal={setModal} />
            <Button
              title={`${t("advice")}`}
              color={"colored"}
              setModal={setModal1}
            />
          </div>
        </div>
      </div>
      <About />
      <Promotion />
      <Shop setModal={setModal} />
      <Delivery setModal={setModal} />
      <Video />
      <Contact />
      <Footer setModal={setModal} />
    </div>
  );
};

export default Main;
