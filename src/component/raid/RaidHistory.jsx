import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HistoryCard from './HistoryCard';
import monster from "asset/image/coffeeMonster.png";

function RaidHistory(props) {
    const [history, setHistory] = useState([]);



    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const historyData = [];
                var params = { userId: "user_1" };
                
                // 1차 데이터 가져오기
                const response = await axios.get('/api/raid/raidHistory', { params });
                
                // 2차 데이터 가져오기 (모든 데이터 가져올 때까지 대기)
                const promises = response.data.map(async (item) => {
                    var contribution = item.contribution;
                    var isRewarded = item.isRewarded;
                    params = { raidId: item.raidId };
                    const detailResponse = await axios.get('/api/raid/raidHistory/detail', { params });
                    var data = detailResponse.data;
                    historyData.push({
                        merchantName: data.merchantName,
                        contribution: contribution,
                        percentage: data.hitPoint*contribution,
                        startTime: data.startTime,
                        endTime: data.endTime,
                        isRewarded: isRewarded,
                        image: monster,
                        isSuccess: data.isSuccess,
                    });
                });

                // 모든 비동기 작업이 완료될 때까지 기다림
                await Promise.all(promises);
                
                // 상태 업데이트
                setHistory(historyData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div>
            <div className="card-list">
                {history.map((item, index) => (
                    <HistoryCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export default RaidHistory;
