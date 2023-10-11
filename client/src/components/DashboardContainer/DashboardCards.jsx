import React, { useEffect, useState } from "react";
import "./Styles/DashboardCards.css";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Menu } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../../store/cardListAction";
const DashboardCards = ({
  setAppTabs,
  appTabs,
  windowWidth,
  query,
  setQuery,
}) => {
  const navigate = useNavigate();

  const { role } = useSelector((state) => state.authReducer.authData?.user);
  const cardsData = useSelector(
    (state) => state.cardListReducer.cards?.cardsData
  );

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

  useEffect(() => {
    setSearchResult(cardsData);
  }, [cardsData]);

  return (
    <div className="body-middle  ">
      <div className="card-grid ">
        {searchResult.map((card, index) => (
          <div className="card relative" key={card.id}>
            <div
              className="flex justify-center flex-col items-center cursor-pointer"
              onClick={() => openApp(card)}
            >
              {/* <img className="imgc" src={card.image} alt="img" /> */}
              <FaCircle className="imgc" color="#e5e7eb" />
              <h2>{card.appName}</h2>
            </div>
            {role === "admin" && <Dropdown componentId={card.id} />}
          </div>
        ))}
        <img className="img" src="./circle image.png" alt="img" />
      </div>
    </div>
  );
};

export default DashboardCards;

//logic of three dots where display dropdown delete option
function Dropdown({ componentId }) {
  const dispatch = useDispatch();
  return (
    <Menu as="div" className="absolute top-3 right-3 flex flex-col items-end">
      <Menu.Button>
        <HiOutlineDotsVertical />
      </Menu.Button>
      <Menu.Items className="right-0 mt-1 w-[60px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-1">
        <Menu.Item className="">
          {({ active }) => (
            <span
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-1 py-[1px] text-sm cursor-pointer`}
              onClick={() => {
                dispatch(removeCard(componentId));
              }}
            >
              Delete
            </span>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
