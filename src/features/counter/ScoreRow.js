import React from "react";
import styles from "./scorerow.module.css";

export function ScoreRow(props) {
    // Inte snyggaste conditional className. Kunde använt tillägget className.
    return (
        <li
            className={
                props.description == "Summa"
                    ? styles.boldy
                    : "" || props.description == "Bonus"
                    ? styles.bonus
                    : ""
            }
        >
            <div>{props.description}</div>
            <div onClick={props.clickAction}>{props.value}</div>
        </li>
    );
}
