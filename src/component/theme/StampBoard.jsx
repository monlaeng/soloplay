import React, { useState } from "react";
import "asset/css/StampBoard.css";
import shoppingImage from "asset/image/shopping.jpg"; // 예시 이미지
import travelImage from "asset/image/travel.jpg";
import dailyLifeImage from "asset/image/life.jpg";
import diningImage from "asset/image/dining.jpg";
import cultureImage from "asset/image/culture.jpg";

function StampBoard() {
  const themes = [
    {
      name: "쇼핑",
      color: "black",
      backgroundImage: shoppingImage,
      icon: "🛍️",
      missions: [
        { name: "마트에서 쇼핑" },
        { name: "전통시장 쇼핑" },
        { name: "서점에서 도서 구매" },
        { name: "가구점에서 쇼핑" },
        { name: "가전제품 구매" },
      ],
    },
    {
      name: "여행/교통",
      color: "black",
      backgroundImage: travelImage,
      icon: "✈️",
      missions: [
        { name: "여행 중 편의점 이용" },
        { name: "여행 중 카페 방문" },
        { name: "여행 중 마트 이용" },
        { name: "여행 중 술집 방문" },
        { name: "택시 이용" },
      ],
    },
    {
      name: "생활",
      color: "black",
      backgroundImage: dailyLifeImage,
      icon: "🏠",
      missions: [
        { name: "편의점 이용" },
        { name: "마트 방문" },
        { name: "전통시장 방문" },
        { name: "택시 이용" },
        { name: "병원 방문" },
      ],
    },
    {
      name: "외식/카페",
      color: "black",
      backgroundImage: diningImage,
      icon: "☕",
      missions: [
        { name: "카페 방문" },
        { name: "베이커리 방문" },
        { name: "한식당에서 식사" },
        { name: "일식당에서 식사" },
        { name: "중식당에서 식사" },
      ],
    },
    {
      name: "문화/교육",
      color: "black",
      backgroundImage: cultureImage,
      icon: "📚",
      missions: [
        { name: "스터디카페 방문" },
        { name: "서점에서 도서 구입" },
        { name: "노래방 방문" },
        { name: "독서실 방문" },
        { name: "문구점에서 쇼핑" },
      ],
    },
  ];

  const [stamps, setStamps] = useState({});

  const handleStamp = (themeName, missionName) => {
    setStamps((prev) => ({
      ...prev,
      [themeName]: {
        ...prev[themeName],
        [missionName]: true,
      },
    }));
  };

  return (
    <div className="stamp-board">
      {themes.map((theme, index) => (
        <div key={index} className="theme-section">
          <img
            src={theme.backgroundImage}
            alt={`${theme.name} background`}
            className="background-image"
          />
          <h2 className="theme-header" style={{ color: theme.color }}>
            {theme.name}
          </h2>
          {/**/}
          <div className="theme-path">
            {theme.missions.map((mission, idx) => (
              <div
                key={idx}
                className={`mission-node ${
                  stamps[theme.name]?.[mission.name] ? "stamped" : ""
                }`}
                onClick={() => handleStamp(theme.name, mission.name)}
              >
                <div className="mission-icon">{theme.icon}</div>
                <div className="mission-name">{mission.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StampBoard;
