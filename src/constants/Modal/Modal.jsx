import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./modal.scss";
import { ProductContext } from "../../context/context";

const Modal = ({ setModal }) => {
  const { pro_id, setPro_id } = useContext(ProductContext);

  const [data, setData] = useState({
    name: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const getWater = async () => {
    if (!!pro_id) {
      const res = await axios.get("https://vital.zirapcha.uz/api/product/all");

      let data1 = res.data.data.products.filter(
        (item) => item?.type == "water"
      );
      let id = data1[0]._id;
      setPro_id(id);
    } else {
      return;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    getWater();

    if (data.name && data.phone_number && pro_id) {
      let res = await axios.post(`https://vital.zirapcha.uz/api/order/create`, {
        name: data.name,
        phone_number: data.phone_number,
        product_id: pro_id,
      });

      if (res.status == 201) {
        toast.success("Tez orada biz siz bilan bog'lanamiz...", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setModal(false);
      } else {
        toast.warning(
          "Biz bilan muammo sodir bo'ldi, Iltimos bizga qo'ng'iroq qiling!",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      }
      setModal(false);
      document.body.style.overflowY = "auto";
    } else {
      toast.warn("Ma'lumotlarni to'liq to'ldiring...", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div
      className="modal"
      onClick={() => {
        document.body.style.overflowY = "auto";
        setModal(false);
      }}
    >
      <div className="connect" onClick={(e) => e.stopPropagation()}>
        <h3>
          {" "}
          <span></span> Bog'lanish
        </h3>
        <h2>Biz siz bilan albatta bog'lanamiz</h2>
        <p>
          {" "}
          Mijoz nechanchi qavvatda istiqomat qilishidan qat'iy nazar, suvni
          uyning eshigigacha yetkazib beriladi.
        </p>
        <form>
          <input
            type="text"
            placeholder="Ismingizni kiriting"
            required
            value={data.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Telefon raqamingizni kiriting"
            required
            maxLength={9}
            value={data.phone_number}
            name="phone_number"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={handleSubmit}>yuborish</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
