import React from "react";
import "./about.scss";

import { useTranslation } from "react-i18next";
import ReadMoreButton from "../../constants/readMore/ReadMore";

const About = () => {
  const { t } = useTranslation();
  const paragraphs = [
    `${t("aboutText")}`,
    `${t("aboutText2")}`,
    `${t("aboutText3")}`,
    `${t("aboutText4")}`,
    `${t("aboutText5")}`,
    `${t("aboutText6")}`,
    `${t("aboutText7")}`,
    `${t("aboutText8")}`,
    `${t("aboutText9")}`,
  ];
  return (
    <div className="about" id="about">
      <h2>{t("about")}</h2>
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
      <p data-aos="fade-up">
        <ReadMoreButton paragraphs={paragraphs} />
      </p>
      
    </div>
  );
};

export default About;
