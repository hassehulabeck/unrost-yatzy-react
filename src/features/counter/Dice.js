import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { roll, lock, selectDice, selectSum, selectRoll } from "./yatzySlice";
import styles from "./Yatzy.module.css";

export function Dice() {
    const dice = useSelector(selectDice);
    const dispatch = useDispatch();
    const rolls = useSelector(selectRoll);

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
        const icons = [
            "\u2680",
            "\u2681",
            "\u2682",
            "\u2683",
            "\u2684",
            "\u2685",
        ];
        return (
            <div
                key={index}
                onClick={() => dispatch(lock(index))}
                className={die.isLocked ? styles.locked : styles.active}
            >
                {icons[die.value - 1]}
            </div>
        );
    });

    return (
        <section className="styles.actionContainer">
            <section className={styles.dies}> {dies}</section>
            <button
                className={styles.roller && rolls === 0 ? styles.inactive : ""}
                onClick={() => dispatch(roll())}
                disabled={rolls < 1 ? "disabled" : ""}
            >
                Roll
            </button>
        </section>
    );
}
