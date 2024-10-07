import styles from "./Trapezium.module.css";

const Trapezium = ({ text, position }) => {
    return (
        <div className={`${styles.trapezium} ${position === 'left' ? styles.left : styles.right}`}>
            <p>{text}</p>
        </div>
    );
};

export default Trapezium;
