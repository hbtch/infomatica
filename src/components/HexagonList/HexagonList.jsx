import Hexagon from "../Hexagon/Hexagon";
import Trapezium from "../Trapezium/Trapezium"; 
import styles from "./HexagonList.module.css";

const HexagonList = ({ events, centerIndex, onHexagonClick }) => {
    const handleClick = (index) => {
        onHexagonClick(index);
    };

    const isMobile = window.innerWidth <= 768;

    return (
        <div className={styles.container}>
            <div className={styles.hexagonListContainer}>
                {events.map((event, index) => {
                    const positionOffset = index - centerIndex;

                    const translateX = isMobile ? 0 : -positionOffset * 150;
                    const translateY = isMobile ? 0 : positionOffset * 150;

                    return (
                        <Hexagon
                            key={event.id}
                            event={event}
                            isCentral={index === centerIndex}
                            onClick={() => handleClick(index)}
                            style={{
                                transform: isMobile ? "none" : `translate(${translateX}px, ${translateY}px) scale(${index === centerIndex ? 1.2 : 1})`,
                                opacity: index === centerIndex ? 1 : 0.6,
                                zIndex: index === centerIndex ? 10 : 1,
                            }}
                        />
                    );
                })}

                {centerIndex >= 0 && (
                    <Trapezium 
                        text="Соперник 1" 
                        position="left" 
                        style={{ top: `${centerIndex * 150 + 50}px` }}
                    />
                )}
                {centerIndex <= events.length - 1 && (
                    <Trapezium 
                        text="Соперник 2" 
                        position="right" 
                        style={{ top: `${(centerIndex + 1) * 150 + 50}px` }}
                    />
                )}
            </div>
        </div>
    );
};

export default HexagonList;
