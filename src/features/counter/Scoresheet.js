import React from "react";
import { useSelector } from "react-redux";
import { selectBonus, selectUpperSum, selectSum } from "./yatzySlice";
import styles from "./scoresheet.module.css";

export function Scoresheet() {
    const upperSum = useSelector(selectUpperSum);
    const bonus = useSelector(selectBonus);
    const sum = useSelector(selectSum);
    // const dispatch = useDispatch();

    return (
        <section>
            <ul className={styles.scorelist}>
                <li>Ettor</li>
                <button>Text</button>
                <li>Tvåor</li>
                <button>Text</button>
                <li>Treor</li>
                <button>Text</button>
                <li>Fyror</li>
                <button>Text</button>
                <li>Femmor</li>
                <button>Text</button>
                <li>Sexor</li>
                <li>Summa</li>
                <div>{upperSum}</div>
                <li>Bonus</li>
                <div>{bonus}</div>
                <li>Ett par</li>
                <button>Text</button>
                <li>Två par</li>
                <button>Text</button>
                <li>Tretal</li>
                <button>Text</button>
                <li>Fyrtal</li>
                <button>Text</button>
                <li>Liten stege</li>
                <button>Text</button>
                <li>Stor stege</li>
                <button>Text</button>
                <li>Kåk</li>
                <button>Text</button>
                <li>Chans</li>
                <button>Text</button>
                <li>Yatzy</li>
                <button>Text</button>
                <li>Summa</li>
                <div>{sum}</div>
            </ul>
        </section>
    );
}
