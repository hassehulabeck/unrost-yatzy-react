import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { roll, lock, selectDice, selectSum } from "./yatzySlice";
import styles from "./Yatzy.module.css";

export function Dice() {
    const sum = useSelector(selectSum);
    const dice = useSelector(selectDice);
    const dispatch = useDispatch();

    // Do things once - "ComponentDidMount"
    useEffect(() => {
        dispatch(roll());
        // Listener for keyboard events - 1-5 for toggling dice state
        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            if (e.key >= 1 && e.key <= 5) {
                dispatch(lock(e.key - 1)); // Toggle index 0-4
            }
            if (e.key === "Enter") {
                dispatch(roll());
            }
        });
    }, []);

    let dies = dice.map((die, index) => {
        // let dieIcon = 2680 + die.value;
        // dieIcon = `&#${dieIcon};`;
        return (
            <div
                key={index}
                onClick={() => dispatch(lock(index))}
                className={die.isLocked ? styles.locked : styles.active}
            >
                {die.value}
            </div>
        );
    });

    return (
        <section className="styles.actionContainer">
            <section className={styles.dies}> {dies}</section>
            <button className={styles.roller} onClick={() => dispatch(roll())}>
                Roll
            </button>
            <p>Summa: {sum}</p>
        </section>
    );
}
