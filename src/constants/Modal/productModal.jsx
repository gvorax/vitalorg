import React, { useEffect, useState } from "react";
import "./productModal.scss";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../../context/context";
import { t } from "i18next";

const ProductModal = ({ setModal, setInfo }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const {pro_id} = useContext(ProductContext)

  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      const res = await axios.get(`https://vital.zirapcha.uz/api/product/${pro_id}`);
      setLoading(false);
      setData(res.data.data.product);
    };

    getProduct();
  }, []);


  const { setPro_id } = useContext(ProductContext);

  const onBuy = (id) => {
    setPro_id(id);
  };

  return (
    <div className="product_model" onClick={() => setInfo(false)}>
      <div className="product_box" onClick={(e) => e.stopPropagation()}>
        {loading ? (
          <p>Yuklanyapti...</p>
        ) : (
          <div className="product_container">
            <div className="product_img">
              <img
                src={`https://vital.zirapcha.uz/api/api/file/${data.images[0]}`}
                alt=""
              />
            </div>
            <div className="product_desc">
              <h2>{data?.name}</h2>
              {localStorage.getItem("language") == "uz" ||
              localStorage.getItem("language") == null ? (
                <p>{data?.description?.uzb}</p>
              ) : null}

              {localStorage.getItem("language") == "rus" ? (
                <p>{data?.description?.rus}</p>
              ) : null}

              {localStorage.getItem("language") == "eng" ? (
                <p>{data?.description?.eng}</p>
              ) : null}

              <p className="bold">{data?.price} so'm</p>
              <button
                onClick={() => {
                  onBuy(data._id);
                  setInfo(false);
                  setModal(true);
                }}
              >
               {t("order")}
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default ProductModal;
