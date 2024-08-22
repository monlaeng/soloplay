import React, { useEffect, useState } from 'react';
import raidBackground from "asset/image/raidBackground.jpg";
import monster from "asset/image/coffeeMonster.png";
import "asset/css/raidBattle.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RaidBattle() {
    const { raidId } = useParams();
    const [battleData, setBattleData] = useState(null);
    const [participantId, setParticipantId] = useState(0);
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

    // 최초 로드 시 배틀 데이터 요청
    useEffect(() => {
        const fetchBattleData = async () => {
            try {
                const response = await axios.get(`/api/raid/battle/${raidId}`);
                const data = response.data;
                setBattleData(data);
                
                // 배틀 데이터에서 participantId를 추출하여 상태를 업데이트
                if (data.participants && data.participants.length > 0) {
                    setParticipantId(data.participants[data.participants.length-1].participantId);
                }
                setIsLoading(false); // 데이터 로드 후 로딩 상태 해제
            } catch (error) {
                console.error('Error fetching battle data:', error);
            }
        };

        fetchBattleData();
    }, [raidId]);

    // 주기적으로 알림 데이터 요청
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`/api/raid/notification/${raidId}/${participantId}`);
                const data = response.data;

                // 기존 battleData.participants에 알림 데이터를 추가하여 병합
                setBattleData(prevData => ({
                    ...prevData,
                    participants: [
                        ...prevData.participants,
                        ...data.participants
                    ]
                }));
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        const intervalId = setInterval(fetchNotifications, 5000); // 5초마다 알림 요청

        // 컴포넌트 언마운트 시 클린업
        return () => clearInterval(intervalId);
    }, [raidId, participantId]);

    if (isLoading) {
        return <p>Loading battle data...</p>; // 데이터 로드 중일 때 로딩 메시지 표시
    }

    return (
        <div className="raidContainer">
            <div className="healthInformation">
                <div className="healthBarContainer">
                    <div
                        className="healthBar"
                        // style={{ width: `${healthPercentage}%` }}
                        style={{ width: "70%" }}
                    ></div>
                </div>
                HP: 70000/100000
            </div>
            <div className="monsterDisplay">
                <img src={raidBackground} alt='Raid Background' className='raidBackground'/>
                <img src={monster} alt="Monster" className='monster'/>
            </div>
            <div className="userContribution">
                <p>내가 준 대미지: {battleData.contribution}</p>
            </div>
            <div className="attackLog">
                {battleData.participants.map((participant, index) => (
                    <p key={index}>
                        {participant.userId} 님이 {participant.contribution} 대미지를 입혔습니다.
                    </p>
                ))}
            </div>
        </div>   
    );
}

export default RaidBattle;
