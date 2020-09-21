import React from "react";

export default function Loading({ fullscreen }) {
    return (
        <div
            style={
                fullscreen && {
                    position: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100vw",
                    height: "100vh",
                }
            }
        >
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
