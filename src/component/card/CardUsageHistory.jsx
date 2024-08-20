import React, { useEffect, useState } from "react";
import NavBar from "component/common/NavBar";

function CardUsageHistory({ userId }) {
  const [usageHistory, setUsageHistory] = useState({});

  useEffect(() => {
    fetch(
      `http://localhost:8800/card/userCardsAndUsageHistory?userId=${userId}`
    )
      .then((response) => response.json())
      .then((data) => setUsageHistory(data))
      .catch((error) => console.error("Error fetching usage history:", error));
  }, [userId]);

  return (
    <>
      <NavBar />
      <div className="usage-history app-pages app-section">
        <div className="container">
          <div className="pages-title">
            <h2 style={{ textAlign: "left", lineHeight: 1.5 }}>
              결제 내역
            </h2>
            <hr />
          </div>
          <div className="entry">
            {Object.keys(usageHistory).length === 0 ? (
              <p>데이터를 불러오는 중입니다...</p>
            ) : (
              Object.keys(usageHistory).map((cardNum) => (
                <div key={cardNum} className="card-usage-section">
                  <h3>{usageHistory[cardNum].cardName}</h3>
                  <h5>{cardNum}</h5>
                  <div className="order">
                    {usageHistory[cardNum].usageHistory.map((usage) => (
                      <div key={usage.usageId} className="row">
                        <div className="col s8">
                          <p><strong>{new Date(usage.transactionDate).toLocaleDateString()}</strong></p>
                        </div> 
                        <div className="col s12">
                          <p>
                            <span>{usage.merchantName}</span>
                            <span style={{ float: "right" }}>{usage.amount.toLocaleString()} 원</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardUsageHistory;