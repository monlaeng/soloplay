import React from 'react';
import raidBackground from "asset/image/raidBackground.jpg";
import coffeeMonster from "asset/image/coffeeMonster.png";

function RaidBattle(props) {

    return (
        <div>
            <div className="raidDisplay">
                <img src={raidBackground} alt="Raid Background" className="background"></img>
                <img src={coffeeMonster} alt="Monster" className="monster"></img>
            </div>
        </div>
    );
}

export default RaidBattle;