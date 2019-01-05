import React from "react";
import { PaymentBox } from "./PaymentBox";

const sockImageUrl = {
  bitcoin: "https://i.imgsafe.org/ba/ba67f81418.png",
  digibyte: "https://i.imgsafe.org/ba/ba680067f8.png",
  monero: "https://i.imgsafe.org/ba/ba68393c34.png"
};

const sockDesc = {
  bitcoin: "Show how awesome you are with these Bitcoin socks!",
  digibyte: "Show your love for Altcoins with these Digibyte socks!",
  monero: "Show your passion for privacy with these Monero socks!"
};

export const SockCard = ({ title, coin, price }) => (
  <div
    style={{
      width: "400px",
      margin: "0 auto",
      background: "#fff",
      padding: "10px",
      textAlign: "center",
      borderRadius: "5px",
      marginBottom: "10px"
    }}
  >
    <h1>{title}</h1>
    <img src={sockImageUrl[coin]} alt={"sockImage"} width={'350px'} />
    <h3>{sockDesc[coin]}</h3>
    <PaymentBox price={price} coin={coin}/>
  </div>
);
