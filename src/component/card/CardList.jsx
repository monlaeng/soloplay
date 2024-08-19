import React, { useEffect, useState } from "react";
import NavBar from "component/common/NavBar";

function CardList() {
  const [cards, setCards] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch("http://localhost:8800/card/list")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error("Error fetching cards:", error));
  }, []);

  return (
    <>
      <NavBar />
      <div className="cardlist app-pages app-section">
        <div className="container">
          <div className="pages-title">
            <h2 style={{ textAlign: "left", lineHeight: 1.5 }}>
              신한카드 목록
            </h2>
            <hr />
          </div>
          <div className="entry">
            <ul className="card-list">
              {cards.map((card) => (
                <li key={card.cardId} className="card-item">
                  <div className="card-header">
                    <h3>{card.cardName}</h3>
                  </div>
                  <div className="card-body">
                    <p>{card.cardBenefit}</p>
                    <a href={card.cardLink} target="_blank" rel="noopener noreferrer">
                      카드 상세 보기
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardList;
