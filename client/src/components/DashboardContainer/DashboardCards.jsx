import React, { useState } from "react";
import "./Styles/DashboardCards.css";
import { useNavigate } from "react-router-dom";

const DashboardCards = () => {
  const navigate = useNavigate();
  const cardsData = [
    { id: 1, title: "BasketHunt Academy", content: "Content for Card 1", image: "./image_cloud.png" },
    { id: 2, title: "BasketHunt Work", content: "Content for Card 2", image: "./image_cloud.png" },
    { id: 3, title: "BasketHunt office", content: "Content for Card 3", image: "./image_cloud.png" },
    { id: 4, title: "Basekthunt Traning", content: "Content for Card 4", image: "./image_cloud.png" },
    { id: 5, title: "BasketHunt wiki", content: "Content for Card 5", image: "./image_cloud.png" },
    { id: 6, title: "Baskethunt work", content: "Content for Card 6", image: "./image_cloud.png" },
    { id: 7, title: "BasketHunt careers", content: "Content for Card 7", image: "./image_cloud.png" },
    { id: 8, title: "zoho cliq", content: "Content for Card 8", image: "./image_cloud.png" },
  ];

  const openApp = () => {
    navigate("/appdashboard");
  };

  return (
    <div className="body-middle">
      <div className="card-grid">
        {cardsData.map((card) => (
          <div onClick={openApp} className="card cursor-pointer" key={card.id}>
            <img className="imgc" src={card.image} alt="img" />
            <h2>{card.title}</h2>
            {/* <p>{card.content}</p> */}
          </div>
        ))}
        <img className="img" src="./circle image.png" alt="img" />
      </div>
    </div>
  );
};

export default DashboardCards;
