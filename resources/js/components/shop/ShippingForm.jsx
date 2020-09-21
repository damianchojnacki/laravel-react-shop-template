import React, {useEffect, useState} from "react";
import {Button} from "shards-react";
import OrderService from "../../utils/services/OrderService";
import Translate from "../Translate";

function ShippingForm({pendingState, shippingAddress, setShippingAddress, address}) {
    const [display, setDisplay] = useState("block");

    useEffect(() => {
        pendingState == 2 && OrderService.loadGeowidget(address, setShippingAddress, setDisplay);
    }, [pendingState]);

    function show() {
        setShippingAddress(null);
        setDisplay("block");
    }

    return (
        <>
            {shippingAddress ?
                <p>
                    <Translate id="checkout-shipping-confirmation"/>
                    <span className="h5 my-4">{shippingAddress}</span>
                    <Button block size="sm" theme="secondary" onClick={() => show()}>
                        <Translate id="checkout-shipping-change"/>
                    </Button>
                    <Button block size="lg" className="mt-4">
                        <Translate id="checkout-shipping-button"/>
                    </Button>
                </p>
            :
                <>
                    <h4 className="my-4">
                        <Translate id="checkout-shipping-header"/>
                    </h4>
                </>
            }
            <div id="geowidget" style={{display: shippingAddress ? "none" : display, paddingBottom: "4rem"}}/>
        </>
    );
}

export default ShippingForm;
