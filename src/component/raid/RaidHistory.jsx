import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HistoryCard from './HistoryCard';
import monster from "asset/image/coffeeMonster.png";
import slime100 from "asset/image/slime100.png";
import king100 from "asset/image/king100.png";
function RaidHistory(props) {
    const [history, setHistory] = useState([]);



    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const historyData = [];
                
                // 1차 데이터 가져오기
                const response = await axios.get('/api/raid/raidHistory');
                
                // 2차 데이터 가져오기 (모든 데이터 가져올 때까지 대기)
                const promises = response.data.map(async (item) => {
                    var contribution = item.contribution;
                    var isRewarded = item.isRewarded;
                    const params = { raidId: item.raidId };
                    const detailResponse = await axios.get('/api/raid/raidHistory/detail', { params });
                    var data = detailResponse.data;
                    historyData.push({
                        merchantName: data.merchantName,
                        contribution: contribution,
                        percentage: Math.floor((contribution/data.totalHitPoint)*100),
                        startTime: data.startTime,
                        endTime: data.endTime,
                        isRewarded: isRewarded,
                        image: data.totalHitPoint > 100000 ? king100 : slime100,
                        isSuccess: data.isSuccess,
                        raidId : data.raidId,
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
            <h5 className='history-title'>[레이드 참여내역 조회]</h5>
            <div className="card-list">
                {history.map((item, index) => (
                    <HistoryCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

export default RaidHistory;
