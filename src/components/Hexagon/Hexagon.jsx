import React from "react";
import styles from "./Hexagon.module.css";

const Hexagon = ({ event, isCentral, onClick }) => {
    return (
        <div
            className={`${styles.hexagon} ${isCentral ? styles.central : ""}`}
            onClick={onClick}
        >
            <div className={styles.hexagonContent}>
                <p>{event.date}</p>
                {isCentral && (
                    <>
                        <h2>{event.match}</h2>
                        <p>{event.time}</p>
                        <button>{event.button}</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Hexagon;
