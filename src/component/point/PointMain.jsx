import React from "react";
import { Link } from "react-router-dom";

function PointMain(props) {
  return (
      <>      
      <div className="faq app-pages app-section">
        <div className="container">
          <div className="pages-title">
            <h2 style={{ textAlign: "left", lineHeight: 1.5 }}>
              양승건님의 포인트는
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
                to="/transfer"
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
                <div className="collapsible-header faq-collapsible">
                  <div>신규가입 포인트</div>

                  <div>
                    <span style={{ color: "#007FFF", fontSize: "1.2em" }}>
                      + 1000P
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
                <div className="collapsible-header faq-collapsible">
                  <div>레이드 리워드 보상</div>
                  <div>
                    <span style={{ color: "#007FFF", fontSize: "1.2em" }}>
                      + 490P
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
                <div className="collapsible-header faq-collapsible">
                  <div>몽쉘 기프티콘</div>
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
                <div className="collapsible-header faq-collapsible">
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
                <div className="collapsible-header faq-collapsible">
                  <div>달콤 군고구마바</div>
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
