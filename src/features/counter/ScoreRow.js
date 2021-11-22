import React from "react";

export function ScoreRow(props) {
    return (
        <li>
            <div>{props.description}</div>
            <div onClick={props.clickAction}>{props.value}</div>
        </li>
    );
}
