import React from "react";
import { useSelector } from "react-redux";
import { selectScoresheet } from "./yatzySlice";
import styles from "./scoresheet.module.css";
import { ScoreRow } from "./ScoreRow";

export function Scoresheet() {
    const scoresheet = useSelector(selectScoresheet);

    function clicker(e) {
        console.log(e.target.id);
    }

    let scoreRows = scoresheet.map((row, index) => {
        return (
            <ScoreRow
                description={row.name}
                value={row.value}
                key={index}
                clickAction={() => clicker()}
            />
        );
    });

    return (
        <section>
            <ul className={styles.scorelist}>{scoreRows}</ul>
        </section>
    );
}
