import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function CouponMain(props) {
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
            <h2 style={{ textAlign: "center", lineHeight: 1.5 }}>
              쿠폰조회
              <br />
            </h2>
            <br></br>
            <h4 style={{ textAlign: "left", fontSize: 15 }}>
              받은 쿠폰{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                2장
              </span>
            </h4>
            <hr></hr>
          </div>
          <div className="entry">
            <div style={{ textAlign: "center", marginBottom: 15 }}>
              <span
                style={{
                  fontWeight: "normal",
                  fontSize: "15px",
                  marginRight: 30,
                  color: "black",
                }}
              >
                쿠폰 등록{" "}
              </span>
              <input
                type="text"
                id="coupon-number"
                name="coupon-number"
                placeholder="쿠폰 코드를 입력해주세요"
                style={{
                  width: "60%",
                  height: "35px",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid black",
                }}
              />
            </div>

            <ul className="collapsible" data-collapsible="accordion">
              <li>
                <div
                  className="collapsible-header faq-collapsible"
                  style={{ display: "block" }}
                >
                  <div>배스킨라빈스</div>

                  <div>
                    <span style={{ color: "#007FFF", fontSize: "1.2em" }}>
                      4000원 할인
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                </div>

                <div className="collapsible-body">
                  <p style={{ margin: "-15px 0" }}>배스킨라빈스 4000원 할인</p>
                  <p style={{ margin: "-15px 0" }}>2024.08.08 17:30:13</p>
                </div>
              </li>
              <li>
                <div
                  className="collapsible-header faq-collapsible"
                  style={{ display: "block" }}
                >
                  <div>CU 편의점</div>
                  <div>
                    <span style={{ color: "#007FFF", fontSize: "1.2em" }}>
                      500원 할인
                    </span>
                    <i className="fa fa-plus"></i>
                  </div>
                </div>

                <div className="collapsible-body">
                  <p style={{ margin: "-15px 0" }}>CU 편의점 500원 할인</p>
                  <p style={{ margin: "-15px 0" }}>2024.08.08 17:30:13</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CouponMain;
