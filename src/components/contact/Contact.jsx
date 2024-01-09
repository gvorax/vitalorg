import { t } from "i18next";
import React from "react";
import Telegram from "../../assets/telegram.png";
import Facebook from "../../assets/facebook.png";
import "./contact.scss";
import { useState } from "react";

const Contact = () => {
  const [shows, setShows] = useState(false);
  return (
    <div className="contact" id="contact">
      <h2 data-aos="fade-up" data-aos-delay="0">
        {t("contactTitle")} <span> {t("contactSubtitle")} </span>
      </h2>
      <div className="contact_info">
        <div className="info_day" data-aos="zoom-out" data-aos-delay="400">
          <div className="building">
            <h3>
              {" "}
              <span></span> {t("headOffice")}{" "}
            </h3>
            <div className="building_info">
              <div className="location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                >
                  <path
                    d="M10 2.1608C7.93721 2.1608 5.9589 2.95759 4.50028 4.37589C3.04166 5.79419 2.22222 7.71782 2.22222 9.7236C2.22222 12.8157 4.20222 15.7987 6.37556 18.1097C7.48742 19.2863 8.69991 20.3692 10 21.3465C11.3001 20.3699 12.5126 19.2878 13.6244 18.1118C15.7978 15.7987 17.7778 12.8168 17.7778 9.7236C17.7778 7.71782 16.9583 5.79419 15.4997 4.37589C14.0411 2.95759 12.0628 2.1608 10 2.1608ZM10 24L9.37 23.5786L9.36667 23.5765L9.36 23.5711L9.33778 23.556L9.25445 23.4987C8.79437 23.1735 8.34453 22.8348 7.90556 22.4831C6.78042 21.5844 5.72117 20.6104 4.73556 19.5682C2.46444 17.1524 0 13.653 0 9.7236C3.95203e-08 7.14474 1.05357 4.6715 2.92893 2.84798C4.8043 1.02445 7.34784 0 10 0C12.6522 0 15.1957 1.02445 17.0711 2.84798C18.9464 4.6715 20 7.14474 20 9.7236C20 13.653 17.5356 17.1535 15.2644 19.5682C13.9776 20.9292 12.5659 22.1732 11.0467 23.2848C10.9201 23.3767 10.7923 23.4671 10.6633 23.556L10.64 23.5711L10.6333 23.5765L10.6311 23.5776L10 23.9989V24ZM10 7.5628C9.41063 7.5628 8.8454 7.79045 8.42865 8.19568C8.0119 8.60091 7.77778 9.15052 7.77778 9.7236C7.77778 10.2967 8.0119 10.8463 8.42865 11.2515C8.8454 11.6567 9.41063 11.8844 10 11.8844C10.5894 11.8844 11.1546 11.6567 11.5713 11.2515C11.9881 10.8463 12.2222 10.2967 12.2222 9.7236C12.2222 9.15052 11.9881 8.60091 11.5713 8.19568C11.1546 7.79045 10.5894 7.5628 10 7.5628ZM5.55556 9.7236C5.55556 8.57744 6.02381 7.47822 6.8573 6.66777C7.6908 5.85731 8.82126 5.402 10 5.402C11.1787 5.402 12.3092 5.85731 13.1427 6.66777C13.9762 7.47822 14.4444 8.57744 14.4444 9.7236C14.4444 10.8698 13.9762 11.969 13.1427 12.7794C12.3092 13.5899 11.1787 14.0452 10 14.0452C8.82126 14.0452 7.6908 13.5899 6.8573 12.7794C6.02381 11.969 5.55556 10.8698 5.55556 9.7236Z"
                    fill="black"
                  />
                </svg>
              </div>
              <a> {t("locationHead")} </a>
            </div>
            <div className="building_info" style={{ alignItems: "start" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.05577 0.986242C4.55349 -0.518054 7.01973 -0.250761 8.27378 1.4425L9.82688 3.53609C10.8483 4.91357 10.7573 6.83808 9.54505 8.05519L9.25216 8.35108C9.21908 8.47531 9.21571 8.6057 9.24231 8.7315C9.31984 9.23874 9.7395 10.3129 11.4969 12.0783C13.2543 13.8436 14.3249 14.2663 14.8344 14.3459C14.9627 14.3734 15.0956 14.3696 15.2221 14.3347L15.7242 13.8299C16.8023 12.7483 18.4563 12.5457 19.7903 13.278L22.1409 14.5709C24.1555 15.6749 24.6637 18.4398 23.0147 20.097L21.2659 21.8525C20.7146 22.4057 19.9737 22.8669 19.0704 22.9527C16.8429 23.1628 11.6532 22.8943 6.19765 17.4154C1.1064 12.3008 0.129253 7.84012 0.00495589 5.6421C-0.0565773 4.53066 0.462763 3.59079 1.12486 2.92691L3.05577 0.986242ZM6.79698 2.56016C6.17304 1.7185 5.01129 1.65137 4.35658 2.30903L2.42444 4.24845C2.01832 4.65623 1.82388 5.10627 1.84849 5.53643C1.94694 7.28315 2.73457 11.3075 7.49969 16.0939C12.4986 21.114 17.1149 21.2644 18.8993 21.0953C19.2636 21.0618 19.6254 20.8703 19.9638 20.5309L21.7114 18.7742C22.4227 18.0606 22.2664 16.7602 21.2597 16.2082L18.9092 14.9165C18.2594 14.561 17.4988 14.6778 17.0263 15.1527L16.4663 15.7159L15.8141 15.0545C16.4663 15.7159 16.4651 15.7172 16.4638 15.7172L16.4626 15.7196L16.4589 15.7234L16.4503 15.7308L16.4318 15.7482C16.3795 15.7965 16.3236 15.8405 16.2645 15.88C16.166 15.9459 16.0356 16.0193 15.8719 16.0802C15.5396 16.2057 15.099 16.2729 14.5551 16.1883C13.4881 16.023 12.0741 15.2882 10.1948 13.401C8.31685 11.5138 7.58338 10.0941 7.41847 9.01745C7.33355 8.46794 7.40124 8.02287 7.52677 7.6872C7.59638 7.49856 7.69524 7.32231 7.81967 7.16505L7.85905 7.12153L7.87628 7.10289L7.88366 7.09543L7.88735 7.0917L7.88981 7.08921L8.24424 6.73365C8.77097 6.20279 8.84481 5.32384 8.34885 4.65374L6.79698 2.56016Z"
                  fill="black"
                />
              </svg>
              <div className={`lessPhone ${shows ? "long" : null} `}>
                <a href="tel:+998998058080">+998 99 805-80-80</a>
                <a href="tel:+998998048080">+998 99 804-80-80</a>
                <a href="tel:+998999048080">+998 99 904-80-80</a>
                <a href="tel:+998999148080">+998 99 914-80-80</a>
                <a href="tel:+998999038080">+998 99 903-80-80</a>
                <a href="tel:+998702028080">+998 70 202-80-80</a>
                <a href="tel:+998555010033">+998 55 501-00-33</a>
              </div>
              <div onClick={() => setShows(!shows)} className="morePhone">
                {shows ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                    // width={18}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="building_info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 0C8.7435 0 8.334 0.015 7.0545 0.072C5.775 0.132 4.9035 0.333 4.14 0.63C3.33914 0.931229 2.61374 1.40374 2.0145 2.0145C1.40411 2.61404 0.931661 3.33936 0.63 4.14C0.333 4.902 0.1305 5.775 0.072 7.05C0.015 8.3325 0 8.7405 0 12.0015C0 15.2595 0.015 15.6675 0.072 16.947C0.132 18.225 0.333 19.0965 0.63 19.86C0.9375 20.649 1.347 21.318 2.0145 21.9855C2.6805 22.653 3.3495 23.064 4.1385 23.37C4.9035 23.667 5.7735 23.8695 7.0515 23.928C8.3325 23.985 8.7405 24 12 24C15.2595 24 15.666 23.985 16.947 23.928C18.2235 23.868 19.098 23.667 19.8615 23.37C20.6618 23.0686 21.3867 22.5961 21.9855 21.9855C22.653 21.318 23.0625 20.649 23.37 19.86C23.6655 19.0965 23.868 18.225 23.928 16.947C23.985 15.6675 24 15.2595 24 12C24 8.7405 23.985 8.3325 23.928 7.0515C23.868 5.775 23.6655 4.902 23.37 4.14C23.0684 3.33934 22.5959 2.61401 21.9855 2.0145C21.3864 1.40351 20.661 0.930968 19.86 0.63C19.095 0.333 18.222 0.1305 16.9455 0.072C15.6645 0.015 15.258 0 11.997 0H12.0015H12ZM10.9245 2.163H12.0015C15.2055 2.163 15.585 2.1735 16.8495 2.232C18.0195 2.2845 18.6555 2.481 19.0785 2.6445C19.638 2.862 20.0385 3.123 20.4585 3.543C20.8785 3.963 21.138 4.362 21.3555 4.923C21.5205 5.3445 21.7155 5.9805 21.768 7.1505C21.8265 8.415 21.8385 8.7945 21.8385 11.997C21.8385 15.1995 21.8265 15.5805 21.768 16.845C21.7155 18.015 21.519 18.6495 21.3555 19.0725C21.1631 19.5935 20.856 20.0647 20.457 20.451C20.037 20.871 19.638 21.1305 19.077 21.348C18.657 21.513 18.021 21.708 16.8495 21.762C15.585 21.819 15.2055 21.8325 12.0015 21.8325C8.7975 21.8325 8.4165 21.819 7.152 21.762C5.982 21.708 5.3475 21.513 4.9245 21.348C4.40325 21.1559 3.93169 20.8494 3.5445 20.451C3.14513 20.0641 2.83758 19.5925 2.6445 19.071C2.481 18.6495 2.2845 18.0135 2.232 16.8435C2.175 15.579 2.163 15.1995 2.163 11.994C2.163 8.79 2.175 8.412 2.232 7.1475C2.286 5.9775 2.481 5.3415 2.646 4.9185C2.8635 4.359 3.1245 3.9585 3.5445 3.5385C3.9645 3.1185 4.3635 2.859 4.9245 2.6415C5.3475 2.4765 5.982 2.2815 7.152 2.2275C8.259 2.1765 8.688 2.1615 10.9245 2.16V2.163ZM18.4065 4.155C18.2174 4.155 18.0301 4.19225 17.8554 4.26461C17.6807 4.33698 17.522 4.44305 17.3883 4.57677C17.2545 4.71048 17.1485 4.86923 17.0761 5.04394C17.0037 5.21864 16.9665 5.4059 16.9665 5.595C16.9665 5.7841 17.0037 5.97135 17.0761 6.14606C17.1485 6.32077 17.2545 6.47952 17.3883 6.61323C17.522 6.74695 17.6807 6.85302 17.8554 6.92539C18.0301 6.99775 18.2174 7.035 18.4065 7.035C18.7884 7.035 19.1547 6.88329 19.4247 6.61323C19.6948 6.34318 19.8465 5.97691 19.8465 5.595C19.8465 5.21309 19.6948 4.84682 19.4247 4.57677C19.1547 4.30671 18.7884 4.155 18.4065 4.155ZM12.0015 5.838C11.1841 5.82525 10.3723 5.97523 9.61347 6.27921C8.85459 6.58319 8.16377 7.03511 7.58123 7.60863C6.99868 8.18216 6.53605 8.86585 6.22026 9.61989C5.90448 10.3739 5.74185 11.1833 5.74185 12.0007C5.74185 12.8182 5.90448 13.6276 6.22026 14.3816C6.53605 15.1356 6.99868 15.8193 7.58123 16.3929C8.16377 16.9664 8.85459 17.4183 9.61347 17.7223C10.3723 18.0263 11.1841 18.1763 12.0015 18.1635C13.6193 18.1383 15.1623 17.4779 16.2975 16.3249C17.4326 15.1719 18.0689 13.6188 18.0689 12.0007C18.0689 10.3827 17.4326 8.82962 16.2975 7.67662C15.1623 6.52363 13.6193 5.86324 12.0015 5.838ZM12.0015 7.9995C13.0625 7.9995 14.08 8.42098 14.8303 9.17122C15.5805 9.92146 16.002 10.939 16.002 12C16.002 13.061 15.5805 14.0785 14.8303 14.8288C14.08 15.579 13.0625 16.0005 12.0015 16.0005C10.9405 16.0005 9.92296 15.579 9.17272 14.8288C8.42248 14.0785 8.001 13.061 8.001 12C8.001 10.939 8.42248 9.92146 9.17272 9.17122C9.92296 8.42098 10.9405 7.9995 12.0015 7.9995Z"
                  fill="black"
                />
              </svg>
              <a href="https://instagram.com/vital.uzb">vital.uzb</a>
            </div>
            <div className="building_info">
              <img src={Telegram} alt="" />
              <a href="https://t.me/Vitaluzbekistan">VitalUzbekistan</a>
            </div>
            <div className="building_info">
              <img src={Facebook} alt="" />
              <a href="https://www.facebook.com/Vital.uzb/">Vital</a>
            </div>
          </div>
          <div className="days">
            <h3>
              {" "}
              <span></span> {t("time")}
            </h3>
            <div className="time">
              <p>
                {" "}
                <span> {t("monday")} </span> 9:00-18:00{" "}
              </p>
              <p>
                {" "}
                <span> {t("tuesday")}</span> 9:00-18:00{" "}
              </p>
              <p>
                {" "}
                <span> {t("wednesday")}</span> 9:00-18:00{" "}
              </p>
              <p>
                {" "}
                <span> {t("thursday")}</span> 9:00-18:00{" "}
              </p>
              <p>
                {" "}
                <span> {t("friday")}</span> 9:00-18:00{" "}
              </p>
              <p>
                {" "}
                <span> {t("saturday")}</span> 9:00-18:00{" "}
              </p>
              <p>
                {" "}
                <span> {t("sunday")}</span> Yopiq{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="info_map" data-aos="zoom-out" data-aos-delay="400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2995.7083194359907!2d69.27340573115647!3d41.336955571261434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2s!4v1702231318380!5m2!1sen!2s"
            width="600"
            height="450"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
