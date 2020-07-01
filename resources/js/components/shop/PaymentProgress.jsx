import {Progress, Tooltip} from "shards-react";
import React, {useState} from "react";
import {useCurrency} from "../../utils/CurrencyContext";
import Translate from "../Translate";

const PaymentProgress = React.forwardRef(({pendingState, sum, shippingCost}, ref) => {
    const currency = useCurrency();

    const [tooltipOpened, setTooltipOpened] = useState(false);

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
            <h3 id="price" className="pt-4"><Translate id="checkout-total"/> {parseFloat(sum) + parseFloat(shippingCost)} {currency.state.symbol}</h3>
            <Tooltip
                open={tooltipOpened}
                target="#price"
                placement="right"
                toggle={() => setTooltipOpened(!tooltipOpened)}
            >
                <span className="font-weight-light">
                    <div>
                        <Translate id="checkout-tooltip-order"/> <pre>{sum} {currency.state.symbol}</pre>
                    </div>
                    <div>
                        <Translate id="checkout-tooltip-shipping"/> <pre>{shippingCost} {currency.state.symbol}</pre>
                    </div>
                </span>
            </Tooltip>
            <Progress value={pendingState} max={4} className="my-4"/>
            {getProgressText()}
            <div ref={ref} className="mt-4"/>
        </div>
    );
});

export default PaymentProgress;
