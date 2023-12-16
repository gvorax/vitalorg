import React, { useState } from "react";
import Image from "../../assets/vital_logo.png";
import PhoneIcon from "../../assets/phone_icon.png";
import English from "../../assets/eng.png";
import Russian from "../../assets/rus.png";
import Uzbek from "../../assets/uzb.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import "../../i18next/i18n";
import logo from "../../assets/Hamburger_icon.svg";
import "./navbar.scss";
import uy from "../../assets/uy.png";
import about from "../../assets/about.png";
import storage from "../../assets/storage.png";
import circle from "../../assets/circle.png";
import account from "../../assets/account.png";
import hamburger from "../../assets/Component 65 (1).png";

import { Drawer } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/context";
import ProductModal from "../../constants/Modal/productModal";

const Navbar = ({setModal}) => {
  const [info, setInfo] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [product, setProduct] = useState([])
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const {setPro_id} = useContext(ProductContext)
  const [disable, setDisable] = useState(false)
  const [disable1, setDisable1] = useState(false)
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    // location.reload();
  };

  const getOrders = async () => {
    const res = await axios.get("https://vital.zirapcha.uz/api/product/all");
    let data = Object.assign(res.data.data.products);

    await setProduct(data);
    // setLoading(false);
  };

  useEffect(()=>{
    getOrders()
  },[])


  const handleSearch = (query) => {
    const filtered =
      query === ''
        ? product
        : product.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          );
    setFilteredItems(filtered);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleClick = (item)=>{
    setPro_id(item._id)
    // setModal(true)
    setInfo(true)
  }

  return (
    <React.Fragment>
      <Drawer
        style={{ backgroundColor: "#24AFE0" }}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <nav className="sider-nav">
          <ul className="sider-ul">
            <li>
              <span>
                <img src={uy} alt="" />
              </span>
              <Link onClick={onClose} to="home">
                HOME
              </Link>
            </li>
            <li>
              <span>
                <img src={about} alt="" />
              </span>
              <Link onClick={onClose} to="about">
                BIZ HAQIMIZDA
              </Link>
            </li>
            <li>
              <span>
                <img src={storage} alt="" />
              </span>
              <Link onClick={onClose} to="shop">
                MAXSULOTLAR
              </Link>
            </li>
            <li>
              <span>
                <img src={circle} alt="" />
              </span>
              <Link onClick={onClose} to="delivery">
                XIZMATLAR
              </Link>
              <span></span>
            </li>
            <li>
              <span>
                <img src={account} alt="" />
              </span>
              <Link onClick={onClose} to="contact">
                BOG'LANISH
              </Link>
              <span></span>
            </li>
          </ul>
        </nav>
      </Drawer>
      <div className="wrapper">
        <div className="container">
          <div className="navbar">
            <div className="navbar_logo">
              <div className="logo_box" data-aos="fade-right">
                <img src={Image} alt="logo" />
              </div>
              <div className="logo_contact" data-aos="fade-right">
                <div className="logo_img_box">
                  <img src={PhoneIcon} alt="logo" />
                </div>
                <span></span>
                <div className="contact_text">
                  <p className="logo_title">{t("forContact")}:</p>
                  <a className="logo_subtitle" href="+998998058080">
                    +998 99 805-80-80
                  </a>
                </div>
              </div>
            </div>
            <div className="nav_item">
              <nav>
                <ul>
                  <li>
                    <Link to="home">{t("home")}</Link>
                    <span></span>
                  </li>
                  <li>
                    <Link to="about">{t("about")}</Link>
                    <span></span>
                  </li>
                  <li>
                    <Link to="shop">{t("product")}</Link>
                    <span></span>
                  </li>
                  <li>
                    <Link to="delivery">{t("services")}</Link>
                    <span></span>
                  </li>
                  <li>
                    <Link to="contact">{t("contact")}</Link>
                    <span></span>
                  </li>
                </ul>
              </nav>
              <div className="nav_lan">
                <div className="search_box">
                  <div className={`search`} onClick={()=>setDisable(!disable)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </div>
                  <div className={`${disable ? `block`: ``} search_place`} >
                    <div className="search_input">
                      <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleChange}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                      </svg>
                    </div>
                    {/* <div className="result_item">
                      <ul>
                        {filteredItems.map((item) => (
                          <li onClick={()=>handleClick(item)} key={item.id}>{item.name}</li>
                        ))}
                      </ul>
                    </div> */}
                  </div>
                </div>

                {/* dropdown for language button  */}
                <div className="dropdown">
                  <div className="lan" onClick={()=>setDisable1(!disable1)}>
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 26.6667C11.5111 26.6667 9.78889 26.3164 8.16667 25.616C6.54445 24.9156 5.12756 23.96 3.916 22.7493C2.70533 21.5387 1.74978 20.1222 1.04934 18.5C0.34889 16.8778 -0.000887199 15.1556 1.6899e-06 13.3333C1.6899e-06 11.4889 0.350224 9.76089 1.05067 8.14933C1.75111 6.53778 2.70667 5.12711 3.91734 3.91733C5.128 2.70578 6.544 1.75022 8.16533 1.05067C9.78667 0.351111 11.5093 0.000888889 13.3333 0C15.1778 0 16.9058 0.350222 18.5173 1.05067C20.1289 1.75111 21.5396 2.70667 22.7493 3.91733C23.9609 5.128 24.9164 6.53911 25.616 8.15067C26.3156 9.76222 26.6658 11.4898 26.6667 13.3333C26.6667 15.1556 26.3164 16.8778 25.616 18.5C24.9156 20.1222 23.96 21.5391 22.7493 22.7507C21.5387 23.9613 20.1276 24.9169 18.516 25.6173C16.9044 26.3178 15.1769 26.6676 13.3333 26.6667ZM13.3333 23.9333C13.9111 23.1333 14.4111 22.3 14.8333 21.4333C15.2556 20.5667 15.6 19.6444 15.8667 18.6667H10.8C11.0667 19.6444 11.4111 20.5667 11.8333 21.4333C12.2556 22.3 12.7556 23.1333 13.3333 23.9333ZM9.86667 23.4C9.46667 22.6667 9.11645 21.9053 8.816 21.116C8.51556 20.3267 8.26578 19.5102 8.06667 18.6667H4.13334C4.77778 19.7778 5.58356 20.7444 6.55067 21.5667C7.51778 22.3889 8.62311 23 9.86667 23.4ZM16.8 23.4C18.0444 23 19.1502 22.3889 20.1173 21.5667C21.0844 20.7444 21.8898 19.7778 22.5333 18.6667H18.6C18.4 19.5111 18.1502 20.328 17.8507 21.1173C17.5511 21.9067 17.2009 22.6676 16.8 23.4ZM3 16H7.53334C7.46667 15.5556 7.41645 15.1164 7.38267 14.6827C7.34889 14.2489 7.33245 13.7991 7.33334 13.3333C7.33334 12.8667 7.35022 12.4169 7.384 11.984C7.41778 11.5511 7.46756 11.112 7.53334 10.6667H3C2.88889 11.1111 2.80533 11.5502 2.74933 11.984C2.69333 12.4178 2.66578 12.8676 2.66667 13.3333C2.66667 13.8 2.69467 14.2498 2.75067 14.6827C2.80667 15.1156 2.88978 15.5547 3 16ZM10.2 16H16.4667C16.5333 15.5556 16.5836 15.1164 16.6173 14.6827C16.6511 14.2489 16.6676 13.7991 16.6667 13.3333C16.6667 12.8667 16.6498 12.4169 16.616 11.984C16.5822 11.5511 16.5324 11.112 16.4667 10.6667H10.2C10.1333 11.1111 10.0831 11.5502 10.0493 11.984C10.0156 12.4178 9.99911 12.8676 10 13.3333C10 13.8 10.0169 14.2498 10.0507 14.6827C10.0844 15.1156 10.1342 15.5547 10.2 16ZM19.1333 16H23.6667C23.7778 15.5556 23.8613 15.1164 23.9173 14.6827C23.9733 14.2489 24.0009 13.7991 24 13.3333C24 12.8667 23.972 12.4169 23.916 11.984C23.86 11.5511 23.7769 11.112 23.6667 10.6667H19.1333C19.2 11.1111 19.2502 11.5502 19.284 11.984C19.3178 12.4178 19.3342 12.8676 19.3333 13.3333C19.3333 13.8 19.3164 14.2498 19.2827 14.6827C19.2489 15.1156 19.1991 15.5547 19.1333 16ZM18.6 8H22.5333C21.8889 6.88889 21.0836 5.92222 20.1173 5.1C19.1511 4.27778 18.0453 3.66667 16.8 3.26667C17.2 4 17.5502 4.76133 17.8507 5.55067C18.1511 6.34 18.4009 7.15644 18.6 8ZM10.8 8H15.8667C15.6 7.02222 15.2556 6.1 14.8333 5.23333C14.4111 4.36667 13.9111 3.53333 13.3333 2.73333C12.7556 3.53333 12.2556 4.36667 11.8333 5.23333C11.4111 6.1 11.0667 7.02222 10.8 8ZM4.13334 8H8.06667C8.26667 7.15556 8.51689 6.33867 8.81734 5.54933C9.11778 4.76 9.46756 3.99911 9.86667 3.26667C8.62222 3.66667 7.51645 4.27778 6.54934 5.1C5.58222 5.92222 4.77689 6.88889 4.13334 8Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className={`${disable1 ? `block`: ``} dropdown-content`}>
                    <div className="flag">
                      <img src={English} alt="" />
                      <a
                        href="#"
                        onClick={(e) => {
                          changeLanguage("eng");
                        }}
                      >
                        English
                      </a>
                    </div>
                    <div className="flag">
                      <img src={Uzbek} alt="" />
                      <a
                        href="#"
                        onClick={(e) => {
                          changeLanguage("uzb");
                        }}
                      >
                        Uzbek
                      </a>
                    </div>
                    <div className="flag">
                      <img src={Russian} alt="" />
                      <a
                        href="#"
                        onClick={(e) => {
                          changeLanguage("rus");
                        }}
                      >
                        Русский
                      </a>
                    </div>
                  </div>
                </div>
                <div onClick={showDrawer} className="logo">
                  <img src={hamburger} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {info && <ProductModal setModal={setModal} setInfo={setInfo}/>}
    </React.Fragment>
  );
};

export default Navbar;
