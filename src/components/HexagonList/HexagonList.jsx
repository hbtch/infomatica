import React from "react";
import Hexagon from "../Hexagon/Hexagon";
import styles from "./HexagonList.module.css";

const HexagonList = ({ events, centerIndex, setCenterIndex, handleScroll }) => {
    return (
        <div className={styles.hexagonList}>
            {events.map((event, index) => (
                <Hexagon
                    key={event.id}
                    event={event}
                    isCentral={index === centerIndex}
                    onClick={() => setCenterIndex(index)}
                />
            ))}
            <div className={styles.scrollButtons}>
                <button onClick={() => handleScroll("up")}>Вверх</button>
                <button onClick={() => handleScroll("down")}>Вниз</button>
            </div>
        </div>
    );
};

export default HexagonList;
