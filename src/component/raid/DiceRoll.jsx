import React from 'react';

function DiceRoll({isOpen, children, closeModal}) {
    return (
        <div style={{display:isOpen?"block":"none"}}>
            <div>{children}</div>
            <button onClick={closeModal}>Close</button>
        </div>
    );
}

export default DiceRoll;