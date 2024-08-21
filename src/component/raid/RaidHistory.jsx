import axios from 'axios';
import React, { useEffect, useState } from 'react';

function RaidHistory(props) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const historyData = [];
                var params = { userId: "user_1" };
                
                // 1차 데이터 가져오기
                const response = await axios.get('/raid/raidHistory', { params });
                
                // 2차 데이터 가져오기 (모든 데이터 가져올 때까지 대기)
                const promises = response.data.map(async (item) => {
                    var contribution = item.contribution;
                    params = { raidId: item.raidId };
                    const detailResponse = await axios.get('/raid/raidHistory/detail', { params });
                    var data = detailResponse.data;
                    historyData.push({
                        merchantName: data.merchantName,
                        merchantAddress: data.merchantAddress,
                        merchantID: data.merchantID,
                        hitPoint: data.hitPoint,
                        contribution: contribution,
                        totalReward: data.reward,
                        startTime: data.startTime,
                        endTime: data.endTime
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
            <h1>RaidHistory</h1>
            {history.map((item, index) => (
                <div key={index}>
                    <p>{item.merchantName}</p>
                    <p>{item.merchantAddress}</p>
                    <p>{item.merchantID}</p>
                    <p>{item.hitPoint}</p>
                    <p>{item.contribution}</p>
                    <p>{item.totalReward}</p>
                    <p>{item.startTime}</p>
                    <p>{item.endTime}</p>
                </div>
            ))}
        </div>
    );
}

export default RaidHistory;
