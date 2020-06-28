import React from "react";
import { Button } from "shards-react";
import { useEffect, useState } from "react";
import OrderService from "../../utils/OrderService";
import { useLanguage } from "../../utils/LanguageContext";
import Translate from "../Translate";

function ShippingForm({ pendingState, shippingAddress, setShippingAddress}) {
    const language = useLanguage();

    const [display, setDisplay] = useState("block");

    useEffect(() => {
        pendingState == 2 && OrderService.loadGeowidget(language.state, setShippingAddress, setDisplay);
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
                </p>
            :
                <>
                    <h4 className="my-4">
                        <Translate id="checkout-shipping-header"/>
                    </h4>
                </>
            }
            <div id="geowidget" style={{display: display, paddingBottom: "2rem"}}/>
            <Button block size="lg" className="mt-4">
                <Translate id="checkout-shipping-button"/>
            </Button>
        </>
    );
}

export default ShippingForm;
