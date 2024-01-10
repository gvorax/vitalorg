import React, { useState } from "react";
import "./promotion.scss";
import Image1 from "../../assets/tasdiw.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.png";

import drop from "../../assets/drop.png";
import VitalWater from "../../assets/vitalWater.png";
import { useTranslation } from "react-i18next";
import ReadMoreButton from "../../constants/readMore/ReadMore";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";

const Promotion = () => {
  const { t } = useTranslation();

  const paragraphs = [`${t("confirmedText")}`, `${t("confirmedText1")}`];
  const paragraphsa = [`${t("confirmedTexta")}`, `${t("confirmedTexta1")}`];
  const paragraphsb = [`${t("confirmedTextb")}`, `${t("confirmedTextb1")}`];
  const paragraphsc = [`${t("confirmedTextc")}`, `${t("confirmedTextc1")}`];
  const paragraphsd = [`${t("confirmedTextd")}`, `${t("confirmedTextd1")}`];

  return (
    <div className="promotion" id="promotion">
      <div className="container">
        <h2 className="pro_title" data-aos="fade-up">
          {t("forFamily")}
          <span className="subTitle"> {t("forFamilyText")} </span>
        </h2>
        <span data-aos="fade-up">
          <svg
            width="46"
            height="12"
            viewBox="0 0 46 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6.91579C5.5 3.18778 9.5 0.743381 13.5 6.12117C17.2352 11.1429 22.3333 8.56566 23.5 6.12114C25.3607 2.22236 31.5 2.22236 34 5.64481C37.6316 10.6164 41.5 9.55628 43 5.64481"
              stroke="#F5A93F"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <div className="promotion_box">
          <div className="box_item" data-aos="fade-right" data-aos-delay="200">
            <div className="box_item_img">
              <img src={Image1} alt="" />
            </div>
            <h3>{t("confirmed")}</h3>
            <ReadMoreButton paragraphs={paragraphs} class1={true} />
          </div>
          <div className="box_item_wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="64"
              viewBox="0 0 16 64"
              fill="none"
            >
              <path
                d="M8.27864 1C15.2786 9.5 17.4786 23 8.27864 33C-0.921359 43 0.778641 52.5 8.27864 63"
                stroke="#E3E3E3"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="box_item" data-aos="fade-right" data-aos-delay="400">
            <div className="box_item_img">
              <img src={Image2} alt="" />
            </div>
            <h3>{t("confirmed")}</h3>
            <ReadMoreButton paragraphs={paragraphsa} class1={true} />
          </div>
          <div className="box_item_wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="64"
              viewBox="0 0 16 64"
              fill="none"
            >
              <path
                d="M8.27864 1C15.2786 9.5 17.4786 23 8.27864 33C-0.921359 43 0.778641 52.5 8.27864 63"
                stroke="#E3E3E3"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="box_item" data-aos="fade-right" data-aos-delay="600">
            <div className="box_item_img">
              <img src={Image3} alt="" />
            </div>
            <h3>{t("confirmed")}</h3>
            <ReadMoreButton paragraphs={paragraphsb} class1={true} />
          </div>
          <div className="box_item_wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="64"
              viewBox="0 0 16 64"
              fill="none"
            >
              <path
                d="M8.27864 1C15.2786 9.5 17.4786 23 8.27864 33C-0.921359 43 0.778641 52.5 8.27864 63"
                stroke="#E3E3E3"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="box_item" data-aos="fade-right" data-aos-delay="800">
            <div className="box_item_img">
              <img src={Image4} alt="" />
            </div>
            <h3>{t("confirmed")}</h3>
            <ReadMoreButton paragraphs={paragraphsc} class1={true} />
          </div>
          <div className="box_item_wave">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="64"
              viewBox="0 0 16 64"
              fill="none"
            >
              <path
                d="M8.27864 1C15.2786 9.5 17.4786 23 8.27864 33C-0.921359 43 0.778641 52.5 8.27864 63"
                stroke="#E3E3E3"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div className="box_item" data-aos="fade-right" data-aos-delay="1000">
            <div className="box_item_img">
              <img src={Image5} alt="" />
            </div>
            <h3>{t("confirmed")}</h3>
            <ReadMoreButton paragraphs={paragraphsd} class1={true} />
          </div>
        </div>

        <div className="mobile_promotion">
          <div className="video_container">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              autoplay={false}
              navigation={true}
              modules={[FreeMode, Navigation, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className="box_item"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="box_item_img">
                    <img src={Image1} alt="" />
                  </div>
                  <h3>{t("confirmed")}</h3>
                  <ReadMoreButton paragraphs={paragraphs} class1={true} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="box_item"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <div className="box_item_img">
                    <img src={Image2} alt="" />
                  </div>
                  <h3>{t("confirmed")}</h3>
                  <ReadMoreButton paragraphs={paragraphsa} class1={true} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="box_item"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  <div className="box_item_img">
                    <img src={Image3} alt="" />
                  </div>
                  <h3>{t("confirmed")}</h3>
                  <ReadMoreButton paragraphs={paragraphsb} class1={true} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="box_item"
                  data-aos="fade-right"
                  data-aos-delay="800"
                >
                  <div className="box_item_img">
                    <img src={Image4} alt="" />
                  </div>
                  <h3>{t("confirmed")}</h3>
                  <ReadMoreButton paragraphs={paragraphsc} class1={true} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="box_item"
                  data-aos="fade-right"
                  data-aos-delay="1000"
                >
                  <div className="box_item_img">
                    <img src={Image5} alt="" />
                  </div>
                  <h3>{t("confirmed")}</h3>
                  <ReadMoreButton paragraphs={paragraphsd} class1={true} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="water">
          <div className="water_title" data-aos="fade-right">
            <h2>{t("composition")}</h2>
            <span>
              <svg
                width="46"
                height="12"
                viewBox="0 0 46 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6.91579C5.5 3.18778 9.5 0.743381 13.5 6.12117C17.2352 11.1429 22.3333 8.56566 23.5 6.12114C25.3607 2.22236 31.5 2.22236 34 5.64481C37.6316 10.6164 41.5 9.55628 43 5.64481"
                  stroke="#F5A93F"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <span className="line_blue" data-aos="fade-right"></span>
          <p data-aos="fade-right">{t("motive")}</p>
        </div>

        <div className="water_property">
          <div className="property1">
            <div className="proBox" data-aos="fade-left" data-aos-delay="">
              <h3>{t("sulfat")}</h3>
              <h4>7-12 {t("g")}</h4>
              <p>
                {" "}
                <span></span> {t("sulfatText")}
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="proBox" data-aos="fade-left" data-aos-delay="400">
              <h3>{t("bikorbanat")}</h3>
              <h4>25-70 {t("g")}</h4>
              <p>
                {" "}
                <span></span> {t("bikorbanatText")}
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="proBox" data-aos="fade-left" data-aos-delay="800">
              <h3>{t("gidrogen")}</h3>
              <h4>7-12 {t("g")}</h4>
              <p>
                {" "}
                <span></span> {t("gidrogenText")}
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
          </div>
          <div className="property2">
            <div className="property2_img">
              <img src={VitalWater} alt="" />
            </div>
          </div>
          <div className="property1 property3">
            <div className="proBox" data-aos="fade-right" data-aos-delay="200">
              <h3>{t("magniy")}</h3>
              <h4>5-10 {t("magniy")}</h4>
              <p>
                {" "}
                <span></span> {t("magniyText")}
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="proBox" data-aos="fade-right" data-aos-delay="600">
              <h3>{t("kalsiy")}</h3>
              <h4>10-25 {t("g")}</h4>
              <p>
                {" "}
                <span></span> {t("kalsiyText")}
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
            <div className="proBox" data-aos="fade-right" data-aos-delay="1000">
              <h3>{t("xlorid")}</h3>
              <h4>5-8 {t("g")}</h4>
              <p>
                {" "}
                <span></span> {t("xloridText")}
              </p>
              <div className="pro_img">
                <img src={drop} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
