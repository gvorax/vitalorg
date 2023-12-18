import React from "react";
import "./certificate.scss";

const CertificateModal = ({setModal}) => {
  return (
    <div className="modal1" onClick={() => {setModal(false); document.body.style.overflowY = "auto"}}>
      <div className="connect1" onClick={(e) => e.stopPropagation()}>
        <div className="modal_title">
          <h2>Tasdiqlangan</h2>
          <div className="close" onClick={()=>setModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z"
                fill="#9FABAE"
              />
            </svg>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et odio sed est pellentesque gravida sit amet at orci. Phasellus eget
          iaculis tortor, quis lobortis augue. Proin semper congue libero a
          efficitur. Nunc molestie efficitur urna, ac imperdiet sapien volutpat
          non. Sed sed elementum elit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque et odio sed est pellentesque gravida sit
          amet at orci. Phasellus eget iaculis tortor, quis lobortis augue.
          Proin semper congue libero a efficitur. Nunc molestie efficitur urna,
          ac imperdiet sapien volutpat non. Sed sed elementum elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Pellentesque et odio sed
          est pellentesque gravida sit amet at orci. Phasellus eget iaculis
          tortor, quis lobortis augue. Proin semper congue libero a efficitur.
          Nunc molestie efficitur urna, ac imperdiet sapien volutpat non. Sed
          sed elementum elit.
        </p>
      </div>
    </div>
  );
};

export default CertificateModal;
