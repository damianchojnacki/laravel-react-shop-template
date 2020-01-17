import React from "react";

function Cart() {
    return (
        <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Cart;
