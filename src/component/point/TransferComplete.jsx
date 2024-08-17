import React from 'react';
import completeIcon from "asset/image/completeIcon.png"
import "asset/css/point.css"
import { Link } from 'react-router-dom';

function TransferComplete(props) {
    return (
        <div className="faq app-pages app-section">
      <div className="container">
        <div className="pages-title">

            <h2 style={{ textAlign: "center", lineHeight: 1.5, fontSize:30, fontWeight:"bold" }}>
                포인트 전환이 완료되었습니다. 
                <br />            
            </h2>
            <h2 style={{ textAlign: "center", lineHeight: 1.5, fontSize:15, fontWeight:"normal" }}>
                잔여 포인트 : 456P
                <br />            
            </h2>

            <div className="image-container">
                <img src={completeIcon}/>
            </div>
            
            <br></br>
            <br></br>         

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
                <Link to="/" style={{
                color: "#fff",
                }}>메인 화면으로 이동</Link>
            </button>

        </div>
      </div>
    </div>
    );
}

export default TransferComplete;
