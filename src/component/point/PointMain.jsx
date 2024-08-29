import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import "asset/css/point.css";

function PointMain(props) {
  const [totalPoints, setTotalPoints] = useState(0);
  const [pointList, setPointList] = useState([]);
  const [userName, setUserName] = useState("");

  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "bar",
      stacked: true,
      stackType: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    xaxis: {
      categories: ["포인트 리포트"], // X축 카테고리
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: "테마 포인트",
      data: [30], // 예시 데이터
    },
    {
      name: "레이드 포인트",
      data: [65], // 예시 데이터
    },
    {
      name: "기타",
      data: [5],
    },
  ]);

  useEffect(() => {
    // Component가 렌더링된 후 MaterializeCSS 초기화
    const elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    fetchUserInfo();
    fetchPointList();
    fetchTotalPoints();
  }, []);

  const fetchTotalPoints = async () => {
    try {
      const response = await axios.get(`/point/total`);
      setTotalPoints(response.data); // 응답 데이터에서 총 포인트 설정
    } catch (error) {
      console.error("총 포인트 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  const fetchPointList = async () => {
    try {
      const response = await axios.get(`/point/all`);
      setPointList(response.data); // 응답 데이터에서 포인트 리스트 설정
    } catch (error) {
      console.error("포인트 리스트 데이터를 가져오는 중 오류 발생:", error);
    }
  };
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`/point/info`);
      setUserName(response.data.userName);
    } catch (error) {
      console.error("사용자 정보를 가져오는 중 오류 발생:", error);
    }
  };

  return (
    <>
      <div className="faq app-pages app-section">
        <div className="container">
          <div className="point-pages-title">
            <h2 className="point-h2">
              {userName}님의 포인트는
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  color: "#007FFF",
                  fontSize: "1.2em",
                }}
              >
                {totalPoints.toLocaleString()}P
              </span>{" "}
              입니다
            </h2>
            <br></br>
            <div id="chart" style={{ width: "100%", height: "200px" }}>
              <ReactApexChart
                options={chartOptions}
                series={chartSeries}
                type="bar"
                height={200}
              />
            </div>
            <br></br>
            <h4 style={{ textAlign: "left", fontSize: 15 }}>
              <Link
                to="/point/transfer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                포인트 전환 &gt;
              </Link>
            </h4>
            <hr></hr>
          </div>
          <div className="entry">
            <ul className="collapsible" data-collapsible="accordion">
              {pointList.length > 0 ? (
                pointList.map((point, index) => (
                  <li key={index}>
                    <div
                      className="collapsible-header faq-collapsible"
                      style={{ display: "block" }}
                    >
                      <div>{point.pointName}</div>
                      <div style={{ alignItems: "center" }}>
                        <span
                          style={{
                            color: point.isAdd === 1 ? "#007FFF" : "#ff0000",
                            fontSize: "1.2em",
                          }}
                        >
                          {point.isAdd === 1 ? "+" : "-"}{" "}
                          {point.amount.toLocaleString()}P
                        </span>
                        <i className="fa fa-plus"></i>
                      </div>
                    </div>

                    <div className="collapsible-body">
                      <p style={{ margin: "-15px 0" }}>{point.pointName}</p>
                      <p style={{ margin: "-15px 0" }}>
                        {new Date(point.createDate).toLocaleString()}
                      </p>
                    </div>
                  </li>
                ))
              ) : (
                <li>
                  <div className="collapsible-header faq-collapsible">
                    <div>포인트 내역이 없습니다.</div>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PointMain;
