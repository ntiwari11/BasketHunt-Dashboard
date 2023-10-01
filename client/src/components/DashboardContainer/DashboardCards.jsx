import React, { useEffect, useState } from "react";
import "./Styles/DashboardCards.css";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
const DashboardCards = ({
  setAppTabs,
  appTabs,
  windowWidth,
  query,
  setQuery,
  cardsData,
}) => {
  const navigate = useNavigate();
  // let cardsData = [
  //   // { id: 1, title: "BasketHunt Academy", content: "Content for Card 1" },
  //   {
  //     id: 1,
  //     appName: "BasketHunt Academy",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  //   {
  //     id: 2,
  //     appName: "BasketHunt Atlas",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  //   {
  //     id: 3,
  //     appName: "BasketHunt Career",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  //   {
  //     id: 4,
  //     appName: "BasketHunt Office",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  //   {
  //     id: 5,
  //     appName: "BasketHunt Training",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  //   {
  //     id: 6,
  //     appName: "BasketHunt Wiki",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  //   {
  //     id: 7,
  //     appName: "BasketHunt WorkPlace",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  //   {
  //     id: 8,
  //     appName: "BasketHunt Zoho Cliq",
  //     appLogo: "https://via.placeholder.com/40",
  //   },
  // ];

  const [searchResult, setSearchResult] = useState(cardsData);
  const filterResult = () => {
    const SearchedData = cardsData.filter((item) =>
      item.appName.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResult(SearchedData);
  };
  useEffect(() => {
    filterResult(query);
  }, [query]);

  useEffect(() => {
    // console.log(searchResult);
    cardsData = searchResult;
  }, [searchResult]);
  // useEffect(() => {
  //   console.log(cardsData);
  // }, [cardsData]);
  const addTab = (item) => {
    if (appTabs !== 0) {
      setAppTabs((prev) => {
        const presentData = prev.find((data) => data.id === item.id);
        if (!presentData) {
          if (windowWidth >= 1280) {
            if (prev.length === 3) prev.pop();
            return [item, ...prev];
          } else if (windowWidth < 640) {
            return [item];
          } else if (windowWidth < 1280) {
            if (prev.length === 2) prev.pop();
            return [item, ...prev];
          }
          return prev;
        }
        return prev;
      });
    }
  };
  const openApp = (card) => {
    addTab(card);
    navigate("/appdashboard");
  };

  return (
    <div className="body-middle  ">
      <div className="card-grid ">
        {searchResult.map((card, index) => (
          <div
            onClick={() => openApp(card)}
            className="card cursor-pointer"
            key={card.id}
          >
            {/* <img className="imgc" src={card.image} alt="img" /> */}
            <FaCircle className="imgc" color="#e5e7eb" />
            <h2>{card.appName}</h2>
            {/* <p>{card.content}</p> */}
          </div>
        ))}
        <img className="img" src="./circle image.png" alt="img" />
      </div>
    </div>
  );
};

export default DashboardCards;
