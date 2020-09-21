import React from "react";
import Ripples from "react-ripples";
import { Button } from "shards-react";

export default function RippledButton(props) {
    return (
        <Ripples
            className={`${props.className} ${props.block && "w-100"}`}
            during={props.during ?? (props.block ? 2000 : 1000)}
            color={props.color}
            style={props.style}
        >
            <Button {...props}>{props.children}</Button>
        </Ripples>
    );
}
