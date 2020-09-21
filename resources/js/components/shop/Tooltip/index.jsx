import React from "react";
import "./style.scss";

export default function Tooltip(props) {
    return (
        <div className={`tooltip ${props.className}`} {...props}>
            {props.children}
        </div>
    );
}
