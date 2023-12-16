import React, { useState } from "react";
import "./ReadMore.scss"; // Create a CSS file for styling
import { useTranslation } from "react-i18next";

const ReadMoreButton = ({ paragraphs, class1 }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const { t } = useTranslation();

  return (
    <div className="read-more-container">
      <div className={` text ${showFullText ? "show-full-text" : ""}`}>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div
        className={` subLink  `}
        data-aos="fade-up"
        onClick={toggleText}
      >
        <h5 className={`${class1 ? "link underline" : " link"}`} >{!showFullText ? t("more") : t("less")} </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="10"
          viewBox="0 0 22 10"
          fill="none"
        >
          <path d="M17 1L21 5L17 9M1 5H21H1Z" fill="#F5A93F" />
          <path
            d="M17 1L21 5M21 5L17 9M21 5H1"
            stroke="#F5A93F"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ReadMoreButton;
