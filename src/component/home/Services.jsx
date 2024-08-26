import React from "react";
import { Link } from "react-router-dom";
import point from "asset/image/point.png";
import recommand from "asset/image/recommand.png";
import card from "asset/image/card.png";
import test from "asset/image/test.jpg";

function Services() {
  return (
    <div className="service app-section app-bg-dark">
      <div className="container">
        <div className="app-title">
          <h4>OUR SERVICES</h4>
          <div className="line"></div>
        </div>
        <div className="row">
          <div className="col s6">
            <div className="entry">
              <Link to="/raidHistory">
                <img src={point} alt="Point Icon" style={{ width: '50px', height: '50px' }} />
                <h5>레이드</h5>
                <p>진행중인 레이드</p>
              </Link>
            </div>
          </div>
          <div className="col s6">
            <div className="entry">
              <Link to="/startBucket">
                <img src={recommand} alt="Recommand Icon" style={{ width: '50px', height: '50px' }} />
                <h5>테마 추천</h5>
                <p>테마</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <div className="entry">
              <Link to="/cardRecommend">
                <img src={card} alt="Card Icon" style={{ width: '50px', height: '50px' }} />
                <h5>카드 추천</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </Link>
            </div>
          </div>
          <div className="col s6">
            <div className="entry">
              <Link to="/point">
                <img src={test} alt="Test Icon" style={{ width: '50px', height: '50px' }} />
                <h5>리워드</h5>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
