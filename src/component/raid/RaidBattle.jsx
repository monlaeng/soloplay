import React, { useEffect, useRef, useState } from 'react';
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
    const attackLogRef = useRef(null);

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

    useEffect(() => {
        // battleData가 변경될 때마다 스크롤을 가장 아래로 이동
        if (attackLogRef.current) {
          attackLogRef.current.scrollTop = attackLogRef.current.scrollHeight;
        }
      }, [battleData]);

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

                if (data.participants && data.participants.length > 0) {
                    setParticipantId(data.participants[data.participants.length-1].participantId);
                }
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
                        style={{ width: `${battleData.raid.hitPoint/100000*100}%` }}
                    ></div>
                </div>
                HP : {battleData.raid.hitPoint} / 100000
            </div>
            <div className="monsterDisplay">
                <img src={raidBackground} alt='Raid Background' className='raidBackground'/>
                <img src={monster} alt="Monster" className='monster'/>
            </div>
            <div className="raidUserContribution">
                <p>『내 정보』</p>
                <p>⚔️ 내가 준 피해량: {battleData.contribution}</p>
                <p>✨ 테마 달성 보너스: x1</p>
                <p>💰 성공 시 보상: {Math.floor(battleData.raid.reward * battleData.contribution / 100000)}P</p>
            </div>
            <div className="attackLog" ref={attackLogRef}>
                {battleData.participants.map((participant, index) => (
                    <p key={index}>
                        🗡️ {participant.userId} 님이 {participant.contribution} 피해를 입혔습니다. 
                    </p>
                ))}
            </div>
        </div>   
    );
}

export default RaidBattle;
