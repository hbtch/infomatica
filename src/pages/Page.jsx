import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import HexagonList from "../components/HexagonList/HexagonList.jsx"; 
import './Page.module.css'; 

const events = [
    { id: 1, date: "30 мая", match: "" },
    { id: 2, date: "17 июня", match: "" },
    { id: 3, date: "26 ИЮНЯ", match: "Стадион", time: "19:00", button: "Купить билет" },
    { id: 4, date: "16 июля", match: "" },
    { id: 5, date: "30 сентября", match: "" },
];

const App = () => {
    const [centerIndex, setCenterIndex] = useState(2); 

    const handleScroll = (event) => {
        event.preventDefault();

        if (event.deltaY > 0 && centerIndex < events.length - 1) {
            setCenterIndex(centerIndex + 1); 
        } else if (event.deltaY < 0 && centerIndex > 0) {
            setCenterIndex(centerIndex - 1); 
        }
    };

    const handleClick = (index) => {
        setCenterIndex(index);
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [centerIndex]);

    return (
        <div className="app">
            <Header />
            <HexagonList
                events={events}
                centerIndex={centerIndex}
                onHexagonClick={handleClick} 
            />
        </div>
    );
};

export default App;
