import React, { useState } from 'react';
import raidBackground from "asset/image/raidBackground.jpg";
import coffeeMonster from "asset/image/coffeeMonster.png";
import attack from "asset/sound/attack.mp3";
import "asset/css/raidBattle.css";


function RaidBattle(props) {
    const [isBlinking, setIsBlinking] = useState(false);
    const [showNumber, setShowNumber] = useState(false);

    const monsterAttack = () => {
        setIsBlinking(true);
        setShowNumber(true);

        const sound = new Audio(attack);
        sound.play();

        setTimeout(() => {
            setIsBlinking(false);
        }, 200);

        setTimeout(() => {
            setShowNumber(false);
        }, 500);

        console.log("공격");
    };
    return (
        <div>
            <div className="raidDisplay">
                <img 
                    src={raidBackground} 
                    alt='Raid Background'
                    className='raidBackground'
                />
                <img 
                    src={coffeeMonster} 
                    alt="Monster" 
                    className={isBlinking?'monster blink':'monster'}
                    onClick={monsterAttack}
                />
                {showNumber && (
                    <div className="number-overlay">
                        100
                    </div>
                )}
            </div>
        </div>
    );
}

export default RaidBattle;