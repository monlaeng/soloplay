import React, { useEffect, useState } from "react";
import NavBar from "component/common/NavBar";

function CardUsageHistory({ userId }) {
  const [usageHistory, setUsageHistory] = useState({});

  // Fetch data from the API
  useEffect(() => {
    fetch(`http://localhost:8800/card/userCardsAndUsageHistory?userId=${userId}`)
      .then(response => response.json())
      .then(data => setUsageHistory(data))
      .catch(error => console.error("Error fetching usage history:", error));
  }, [userId]);

  return (
    <>
      <NavBar />
      <div className="usage-history app-pages app-section">
        <div className="container">
          <div className="pages-title">
            <h2 style={{ textAlign: "left", lineHeight: 1.5 }}>
              카드 결제 내역
            </h2>
            <hr />
          </div>
          <div className="entry">
            {Object.keys(usageHistory).map((cardNum) => (
              <div key={cardNum} className="card-usage-section">
                <h3>카드 번호: {cardNum}</h3>
                <ul className="usage-list">
                  {usageHistory[cardNum].map((usage) => (
                    <li key={usage.usageId} className="usage-item">
                      <div>
                        <strong>거래 날짜:</strong> {new Date(usage.transactionDate).toLocaleDateString()}
                      </div>
                      <div>
                        <strong>거래 금액:</strong> {usage.amount.toLocaleString()} 원
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardUsageHistory;
