import React, {useState} from "react";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    FormGroup,
    Button
} from "shards-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPercentage } from "@fortawesome/free-solid-svg-icons/faPercentage";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import OrderService from "../../utils/OrderService";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

function Coupon({coupon}) {
    const [code, setCode] = useState();

    return (
        <div className="float-right">
            {coupon.code ?
                <FormGroup>
                    <label htmlFor="coupon" className="d-block">Coupon:</label>
                    <InputGroup seamless className="w-auto d-inline-block">
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faPercentage}/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput type="text"
                                   id="coupon"
                                   defaultValue={coupon.code}
                                   className="d-inline-block"
                                   disabled
                        />
                        <InputGroupAddon type="append">
                            <Button theme="danger" onClick={() => OrderService.removeCoupon()}><FontAwesomeIcon
                                icon={faTimes}/></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            :
                <FormGroup>
                    <label htmlFor="coupon" className="d-block">Have a coupon code?</label>
                    <InputGroup seamless className="w-auto d-inline-block">
                        <InputGroupAddon type="prepend">
                            <InputGroupText>
                                <FontAwesomeIcon icon={faPercentage}/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <FormInput type="text"
                                   id="coupon"
                                   onChange={e => setCode(e.target.value)}
                                   defaultValue={coupon.code}
                                   className="d-inline-block"
                        />
                        <InputGroupAddon type="append">
                            <Button theme="secondary" onClick={() => OrderService.appendCoupon(code)}><FontAwesomeIcon
                                icon={faArrowRight}/></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            }
        </div>
    );
}

export default Coupon;
