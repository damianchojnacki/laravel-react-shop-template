import React from "react";

export default function Step({ handleKeyDown, children }) {
    return <div onKeyDown={handleKeyDown}>{children}</div>;
}
