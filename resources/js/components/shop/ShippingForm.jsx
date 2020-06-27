import React from "react";
import { Button } from "shards-react";
import { useEffect, useState } from "react";
import OrderService from "../../utils/OrderService";
import { useLanguage } from "../../utils/LanguageContext";

function ShippingForm({ pendingState, shippingAddress, setShippingAddress}) {
    const language = useLanguage();
    
    const [forceOpen, setForceOpen] = useState(false);

    useEffect(() => {
        pendingState == 2 && OrderService.loadGeowidget(language.state, setShippingAddress);
    }, [pendingState]);

    return (
        <>
            <h4 className="my-4">Please select shipment:</h4>
            <div id="geowidget"></div>
            <p>{shippingAddress && "Your package will be delivered to " + shippingAddress}</p>
            <Button block size="lg" color="success" className="mt-4">Proceed to payment</Button>
        </>
    );
}

export default ShippingForm;
