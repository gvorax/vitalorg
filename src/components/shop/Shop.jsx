import React, { useContext, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "../../assets/item.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import "./shop.scss";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { ProductContext } from "../../context/context";
import ProductModal from "../../constants/Modal/productModal";
// import { FreeMode, Autoplay } from "swiper/modules";

const Shop = ({ setModal }) => {
  const { setPro_id } = useContext(ProductContext);
  const { t } = useTranslation();
  const [data1, setData1] = useState([]);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://vital.zirapcha.uz/api/product/all");

      setData1(res.data.data.products);
    };

    fetchData();
  }, []);

  return (
    <div className="shop" id="shop">
      <h2 data-aos="fade-up">{t("ourProduct")}</h2>
      <span data-aos="fade-up" data-aos-delay="300">
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
            stroke-linecap="round"
          />
        </svg>
      </span>

      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper"
      >
        {data1.map((item, index) => {
          return (
            <SwiperSlide key={index} onClick={() => {
              setInfo(true);
              setPro_id(item?._id);
              document.body.style.overflowY = "hidden"
            }}>
              <div className="item_img">
                <img
                  src={`https://vital.zirapcha.uz/api/api/file/${item?.images[0]}`}
                  alt=""
                />
              </div>
              <h5>{item?.name}</h5>

              {localStorage.getItem("language") == "uz" ||
              localStorage.getItem("language") == null ? (
                <p>{item?.description?.uzb}</p>
              ) : null}

              {localStorage.getItem("language") == "rus" ? (
                <p>{item?.description?.rus}</p>
              ) : null}

              {localStorage.getItem("language") == "eng" ? (
                <p>{item?.description?.eng}</p>
              ) : null}
              <p className="more_link">{t('more')}</p>
              <span>
                {item?.price} {t("sum")}
              </span>
              <button
                // onClick={() => {
                //   (e) => e.stopPropagation()
                //   setInfo(false)
                //   setModal(true);
                //   setPro_id(item?._id);
                // }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                >
                  <path
                    d="M1 4.077e-05C0.45 4.077e-05 0 0.450041 0 1.00004C0 1.55004 0.45 2.00004 1 2.00004H3.219L5.844 12.5C6.066 13.39 6.864 14 7.781 14H19.25C20.152 14 20.918 13.402 21.156 12.531L23.75 3.00004H7L7.5 5.00004H21.156L19.25 12H7.781L5.156 1.50004C5.04785 1.06935 4.79827 0.687425 4.44724 0.41545C4.09621 0.143476 3.66405 -0.00280573 3.22 4.077e-05H1ZM18 14C16.355 14 15 15.355 15 17C15 18.645 16.355 20 18 20C19.645 20 21 18.645 21 17C21 15.355 19.645 14 18 14ZM9 14C7.355 14 6 15.355 6 17C6 18.645 7.355 20 9 20C10.645 20 12 18.645 12 17C12 15.355 10.645 14 9 14ZM9 16C9.563 16 10 16.438 10 17C10 17.563 9.562 18 9 18C8.437 18 8 17.562 8 17C8 16.437 8.438 16 9 16ZM18 16C18.563 16 19 16.438 19 17C19 17.563 18.562 18 18 18C17.437 18 17 17.562 17 17C17 16.437 17.438 16 18 16Z"
                    fill="#222222"
                  />
                </svg>
                {t("buy")}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {info && <ProductModal setInfo={setInfo} setModal={setModal}  />}
    </div>
  );
};

export default Shop;
