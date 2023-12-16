import { useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/main/Main";
import CertificateModal from "./constants/Modal/CertificateModal";
import Modal from "./constants/Modal/Modal";
import { ToastContainer } from "react-toastify";
AOS.init();

function App() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  return (
    <div className="app">
      <Main setModal={setModal} setModal1={setModal1}/>
      {modal && <Modal setModal={setModal} />}
      {modal1 && <CertificateModal setModal={setModal1} />}
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
