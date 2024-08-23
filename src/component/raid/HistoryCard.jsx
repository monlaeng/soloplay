import React from 'react';
import 'asset/css/RaidHistory.css'

function HistoryCard({ image, merchantName, contribution, percentage, isSuccess, startTime, endTime, isRewarded }) {
    const today =new Date();

    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);
    
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
    
        return `${month}/${day} ${hours}:${minutes}`;
    }
    function formatNumber(number) {
        return number.toLocaleString("ko-KR");
    }

    const raidStatus = 
    isSuccess === 1 
        ? "성공" : new Date(endTime) > today
            ? "진행중": "실패";
    
    return (
        <div className="raid-card">
            <div className="raid-card-content">
                <div className="raid-card-header">
                    <img src={image} alt={merchantName} className="raid-card-image" />
                    <h3>{merchantName}</h3>
                    <button onClick={(e) => console.log("click!")} className={`raid-card-button ${isRewarded===0 ? 'fail' : isRewarded===1?'':'received'}`} disabled={isRewarded===1?'':'disabled'}>
                        {isRewarded===0 ? '대상 아님' : isRewarded===1?"보상 받기":"수령 완료"}
                    </button>
                </div>
                <div className="raid-card-info">
                    <div>
                        <p>기여도</p>
                        <p className="raid-info-detail">{formatNumber(contribution)}({percentage}%)</p>
                    </div>
                    <div>
                        <p>결과</p>
                        <p className="raid-info-detail">{raidStatus}</p>
                    </div>
                    <div>
                        <p>기간</p>
                        <p className="raid-info-detail">{formatTimestamp(startTime)} <br/>{formatTimestamp(endTime)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HistoryCard;
