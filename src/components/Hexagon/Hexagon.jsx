import styles from "./Hexagon.module.css";

const Hexagon = ({ event, isCentral, onClick, style }) => {
    return (
        <div
            className={`${styles.hexagon} ${isCentral ? styles.central : ""}`}
            onClick={onClick}
            style={style}
        >
            <div className={styles.hexagonContent}>
                <p>{event.date}</p>
                {isCentral && (
                    <>
                        <h2>{event.match}</h2>
                        <p>{event.time}</p>
                        <button className={styles.buyButton}>Купить билет</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Hexagon;
