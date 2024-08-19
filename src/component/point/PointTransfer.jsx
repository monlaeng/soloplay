import React from "react";
import { Link } from "react-router-dom";

function PointTransfer(props) {
  return (
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
          <hr></hr>
          <br></br>
          <h4 style={{ textAlign: "left" }}> 계좌 번호를 입력해주세요 </h4>
          <br></br>
          <form>
            <div className="form-group">
              <select
                id="bank"
                name="bank"
                defaultValue="신한"
                style={{
                  width: "100%",
                  height: "60px",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <option value="신한">신한은행</option>
                <option value="국민">국민은행</option>
                <option value="우리">우리은행</option>
                <option value="NH농협">NH농협은행</option>
                <option value="하나">하나은행</option>
                <option value="새마을">새마을은행</option>
                <option value="카카오뱅크">카카오뱅크</option>
                <option value="토스뱅크">토스뱅크</option>
              </select>
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ width: "100px" }}>
                <label htmlFor="account-number" style={{ marginRight: "10px" }}>
                  계좌 번호
                </label>
              </div>

              <input
                type="text"
                id="account-number"
                name="account-number"
                placeholder="'-' 없이 입력"
                style={{
                  width: "90%",
                  height: "43px",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ width: "100px" }}>
                <label htmlFor="account-holder" style={{ marginRight: "10px" }}>
                  예금주
                </label>
              </div>

              <input
                type="text"
                id="account-holder"
                name="account-holder"
                style={{
                  width: "90%",
                  height: "43px",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <div
              className="form-group"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div style={{ width: "100px" }}>
                <label htmlFor="account-holder" style={{ marginRight: "10px" }}>
                  전환신청 포인트
                </label>
              </div>

              <input
                type="text"
                id="account-holder"
                name="account-holder"
                style={{
                  width: "30%",
                  height: "43px",
                  padding: "8px",
                  margin: "8px 0",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>
            <br />
            <button
              type="button"
              style={{
                width: "100%",
                height: "60px",
                padding: "10px 20px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#007FFF",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <Link to={"/point/transfer/complete"} style={{ color: "#fff" }}>
                전환하기
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PointTransfer;
