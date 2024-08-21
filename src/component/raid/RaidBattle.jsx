import React, { useEffect, useMemo, useState } from 'react';
import raidBackground from "asset/image/raidBackground.jpg";
import coffeeMonster from "asset/image/coffeeMonster.png";
import "asset/css/raidBattle.css";
import axios from 'axios';

function RaidBattle(props) {
    const BattleInfo = ({ raidId, participantId }) => {
        const [battleData, setBattleData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchBattleData = async () => {
                try {
                    // 백엔드 API의 URL
                    const response = await axios.get(`/battle/${raidId}/${participantId}`);
                    setBattleData(response.data); // API 응답 데이터 저장
                } catch (err) {
                    setError(err); // 에러 처리
                } finally {
                    setLoading(false); // 로딩 상태 해제
                }
            };
    
            fetchBattleData();
        }, [raidId, participantId]); // 의존성 배열에 raidId와 participantId 추가
    
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <div className="monsterDisplay">
                <img src={raidBackground} alt='Raid Background' className='raidBackground'/>
                <img src={coffeeMonster} alt="Monster" className='monster'/>
            </div>
            <div className="userContribution">
                <p>내가 준 대미지: 10000</p>
            </div>
            <div className="attackLog">
                <p></p>
            </div>
        </div>
        
    );
}

export default RaidBattle;