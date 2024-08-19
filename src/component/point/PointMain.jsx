import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

function PointMain(props) {
  useEffect(() => {
    // Component가 렌더링된 후 MaterializeCSS 초기화
    const elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);
  }, []);

  return (
    <>
      <div className="faq app-pages app-section">
        <div className="container">
          <div className="pages-title">
            <h2 style={{ textAlign: "left", lineHeight: 1.5 }}>
              양준성님의 포인트는
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  color: "#007FFF",
                  fontSize: "1.2em",
                }}
              >
                1000P
              </span>{" "}
              입니다.
            </h2>
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
              <li>
                <div
                  className="collapsible-header faq-collapsible"
                  style={{ display: "block" }}
                >
                  <div>신규가입 포인트</div>
                  <div style={{ alignItems: "center" }}>
                    <span style={{ color: "#007FFF", fontSize: "1.2em" }}>
                      + 1000P
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                </div>

                <div className="collapsible-body">
                  <p style={{ margin: "-15px 0" }}> 신규가입 포인트</p>
                  <p style={{ margin: "-15px 0" }}>2024.08.08 17:30:13</p>
                </div>
              </li>
              <li>
                <div
                  className="collapsible-header faq-collapsible"
                  style={{ display: "block" }}
                >
                  <div>레이드 리워드 보상</div>
                  <div>
                    <span style={{ color: "#007FFF", fontSize: "1.2em" }}>
                      + 490P
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                </div>

                <div className="collapsible-body">
                  <p style={{ margin: "-15px 0" }}>레이드 리워드 보상</p>
                  <p style={{ margin: "-15px 0" }}>2024.04.08 17:30:13</p>
                </div>
              </li>
              <li>
                <div
                  className="collapsible-header faq-collapsible"
                  style={{ display: "block" }}
                >
                  <div>샐러디</div>
                  <div>
                    <span style={{ color: "#ff0000", fontSize: "1.2em" }}>
                      - 800P
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                </div>

                <div className="collapsible-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate illum, accusamus vel dolorem et veritatis. Ab
                    odit quasi libero asperiores at vitae eveniet facere, ea
                    nesciunt, aperiam magnam incidunt delectus!
                  </p>
                </div>
              </li>
              <li>
                <div
                  className="collapsible-header faq-collapsible"
                  style={{ display: "block" }}
                >
                  <div>스탬프 랜덤 포인트 보상</div>
                  <div>
                    <span style={{ color: "#007FFF", fontSize: "1.2em" }}>
                      + 900P
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                </div>

                <div className="collapsible-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate illum, accusamus vel dolorem et veritatis. Ab
                    odit quasi libero asperiores at vitae eveniet facere, ea
                    nesciunt, aperiam magnam incidunt delectus!
                  </p>
                </div>
              </li>
              <li>
                <div
                  className="collapsible-header faq-collapsible"
                  style={{ display: "block" }}
                >
                  <div>자가비 기프티콘</div>
                  <div>
                    <span style={{ color: "#ff0000", fontSize: "1.2em" }}>
                      - 600P
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                </div>

                <div className="collapsible-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate illum, accusamus vel dolorem et veritatis. Ab
                    odit quasi libero asperiores at vitae eveniet facere, ea
                    nesciunt, aperiam magnam incidunt delectus!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PointMain;
