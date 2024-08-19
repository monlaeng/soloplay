import React, { useEffect, useState } from "react";
import NavBar from "component/common/NavBar";
import M from "materialize-css";

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/card/list")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error("Error fetching cards:", error));
  }, []);

  useEffect(() => {
    const elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);
  }, [cards]); // This useEffect runs again whenever the 'cards' state updates

  return (
    <>
      <NavBar />
      <div className="accordion app-pages app-section">
        <div className="container">
          <div className="pages-title">
            <h2 style={{ textAlign: "left", lineHeight: 1.5 }}>
              신한카드 목록
            </h2>
            <hr />
          </div>
          <div className="entry">
            <ul className="collapsible" data-collapsible="accordion">
              {cards.map((card) => (
                <li key={card.cardId}>
                  <div className="collapsible-header acc-collapsible">
                    {card.cardName}
                  </div>
                  <div className="collapsible-body">
                    <p>{card.cardBenefit}</p>
                    <a
                      href={card.cardLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                        신한카드 홈페이지에서 확인
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
