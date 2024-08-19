import React from 'react';
import ReactModal from 'react-modal';
import dayjs from 'dayjs';

const customModalStyles = {
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
    },
    content: {
        width: "360px",
        height: "180px",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
    },
};

function RaidModal({ isOpen, onRequestClose, selectedData }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customModalStyles}
            ariaHideApp={false}
            contentLabel="Pop up Message"
        >
            {selectedData && (
                <div>
                    <h3>{selectedData.merchantName}</h3>
                    <p>{selectedData.merchantAddress}</p>
                    <p>Start Time: {dayjs(selectedData.startTime).format('YYYY-MM-DD HH:mm:ss')}</p>
                    <p>End Time: {dayjs(selectedData.endTime).format('YYYY-MM-DD HH:mm:ss')}</p>
                    <p>Hit Points: {selectedData.hitPoint}</p>
                    <p>Reward: {selectedData.reward}</p>
                </div>
            )}

            <button>참가하기</button>
            <button onClick={onRequestClose}>x</button>
        </ReactModal>
    );
}

export default RaidModal;
