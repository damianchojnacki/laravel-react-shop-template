import React from "react";
import {faMoneyBill} from "@fortawesome/free-solid-svg-icons/faMoneyBill";
import {faBoxOpen} from "@fortawesome/free-solid-svg-icons/faBoxOpen";
import {faTruck} from "@fortawesome/free-solid-svg-icons/faTruck";
import {faCheck} from "@fortawesome/free-solid-svg-icons/faCheck";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Text from "../Text";

function OrderStatus({status}) {
    const icon = function () {
        switch(status.id){
            case 1:
                return faMoneyBill;
            case 2:
                return faBoxOpen;
            case 3:
                return faTruck;
            case 4:
                return faCheck;
        }
    };

    return (
        <span className={status.id === 1 ? "text-danger" : status.id === 4 ? "text-success" : ""}>
            <FontAwesomeIcon icon={icon()} className="mr-2"/>
            <Text id={"order-status-" + status.id}/>
        </span>
    );
}

export default OrderStatus;
