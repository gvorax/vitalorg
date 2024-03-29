import { t } from "i18next";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import "./footer.scss";

// useEffect(() => {
// window.


// }, [])

// useEffect(()=>{
//   console.log(window.scrollY,"Y")
// },[])



const Footer = ({ setModal }) => {
  return (
    <div className="footer">
      <div className="top_button">
        <Link to="home">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <circle cx="32" cy="32" r="32" fill="#13BBEA" />
              <g clipPath="url(#clip0_11_20)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.5867 26.5865C30.9617 26.212 31.47 26.0016 32 26.0016C32.53 26.0016 33.0384 26.212 33.4134 26.5865L40.9574 34.1278C41.3324 34.503 41.543 35.0118 41.5429 35.5423C41.5428 36.0728 41.3319 36.5815 40.9567 36.9565C40.5815 37.3315 40.0727 37.5421 39.5422 37.542C39.0118 37.5419 38.5031 37.331 38.128 36.9558L32 30.8278L25.872 36.9558C25.495 37.3203 24.9899 37.5222 24.4655 37.5178C23.9411 37.5135 23.4394 37.3034 23.0684 36.9328C22.6974 36.5621 22.4868 36.0606 22.482 35.5362C22.4772 35.0118 22.6786 34.5065 23.0427 34.1292L30.5854 26.5852L30.5867 26.5865Z"
                  fill="white"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_11_20">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="matrix(0 -1 1 0 16 48)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>
      </div>

      <div className="footer_bg">
        <div className="bg_wave1"></div>
        <div className="bg_wave2"></div>
        <div className="bg_wave3"></div>
      </div>

      <div className="footer_info">
        <button onClick={() => setModal(true)}> {t("contact")} </button>

        <div className="navlinks">
          <ul>
            <li>
              <Link to="home"> {t("home")} </Link>
            </li>
            <li>
              <Link to="about"> {t("about")} </Link>
            </li>
            <li>
              <Link to="shop">{t("product")}</Link>
            </li>
            <li>
              <Link to="delivery">{t("services")}</Link>
            </li>
            <li>
              <Link to="contact">{t("contact")}</Link>
            </li>
          </ul>
        </div>
        <div className="links">
          <a href="https://t.me/Vitaluzbekistan">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M25 1L12 14"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25 1L16.6 25L11.8 14.2L1 9.4L25 1Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/Vital.uzb/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029V3.00029Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://instagram.com/vital.uzb">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.28582 1.07129C3.40605 1.07129 1.07153 3.4058 1.07153 6.28557V17.7141C1.07153 20.5939 3.40605 22.9284 6.28582 22.9284H17.7144C20.5942 22.9284 22.9287 20.5939 22.9287 17.7141V6.28557C22.9287 3.4058 20.5942 1.07129 17.7144 1.07129H6.28582ZM0.0715332 6.28557C0.0715332 2.85352 2.85376 0.0712891 6.28582 0.0712891H17.7144C21.1464 0.0712891 23.9287 2.85352 23.9287 6.28557V17.7141C23.9287 21.1462 21.1464 23.9284 17.7144 23.9284H6.28582C2.85376 23.9284 0.0715332 21.1462 0.0715332 17.7141V6.28557ZM12.6468 7.92281C11.7997 7.79719 10.9345 7.94189 10.1744 8.33631C9.41423 8.73073 8.79782 9.35479 8.41281 10.1197C8.02779 10.8847 7.89378 11.7515 8.02983 12.597C8.16588 13.4425 8.56507 14.2236 9.17061 14.8291C9.77616 15.4347 10.5572 15.8339 11.4027 15.9699C12.2482 16.106 13.1151 15.972 13.88 15.5869C14.645 15.2019 15.269 14.5855 15.6634 13.8254C16.0579 13.0652 16.2026 12.2001 16.0769 11.353C15.9488 10.4889 15.5462 9.68894 14.9285 9.07127C14.3108 8.45359 13.5108 8.05094 12.6468 7.92281ZM9.7138 7.44868C10.6606 6.95739 11.7383 6.77716 12.7934 6.93363C13.8698 7.09323 14.8662 7.59477 15.6356 8.36416C16.405 9.13355 16.9065 10.13 17.0661 11.2063C17.2226 12.2615 17.0424 13.3391 16.5511 14.2859C16.0598 15.2328 15.2824 16.0006 14.3296 16.4802C13.3768 16.9598 12.297 17.1267 11.2439 16.9572C10.1907 16.7878 9.21778 16.2905 8.46351 15.5362C7.70923 14.782 7.212 13.8091 7.04253 12.7559C6.87306 11.7027 7.03999 10.623 7.51957 9.67014C7.99915 8.71732 8.76696 7.93998 9.7138 7.44868ZM18.2858 5.21415C18.0097 5.21415 17.7858 5.438 17.7858 5.71415C17.7858 5.99029 18.0097 6.21415 18.2858 6.21415H18.2967C18.5729 6.21415 18.7967 5.99029 18.7967 5.71415C18.7967 5.438 18.5729 5.21415 18.2967 5.21415H18.2858Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="footer_bottom">
        <p>© 2023 All Rights Reserved</p>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Sales and Refunds</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
        <a href="tel:+9988058080">+998 99 805-80-80</a>
      </div>
    </div>
  );
};

export default Footer;
