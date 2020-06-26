import {Progress} from "shards-react";
import React from "react";

const PaymentProgress = React.forwardRef(({pendingState}, ref) => {
    function getProgressText() {
        switch (pendingState) {
            case 3:
                return "Creating the order...";
            case 4:
                return "Loading the payment options...";
            case 5:
                return "Processing the payment...";
            default:
                return "Trasaction in process...";
        }
    }

    return (
        <div className="animated fadeInDown fast col-9 col-md-6 text-center" style={{zIndex: 1}}>
            <Progress value={pendingState} max={4} className="my-4"/>
            {getProgressText()}
            <div ref={ref} className="mt-4"/>
        </div>
    );
});

export default PaymentProgress;
