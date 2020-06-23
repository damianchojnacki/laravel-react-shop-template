import React, {useState, useContext} from "react";
import {Button, FormGroup, FormInput, InputGroup, InputGroupAddon, InputGroupText} from "shards-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPercentage} from "@fortawesome/free-solid-svg-icons/faPercentage";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import OrderService from "../../utils/OrderService";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {CartContext} from "../../utils/CartContext";

function Coupon({coupon}) {
    const [code, setCode] = useState();
    const [wrongCode, setWrongCode] = useState(false);

    const cart = useContext(CartContext);

    function append(){
        code && OrderService.appendCoupon(code)
            .then(response => {
                response && cart.dispatch({type: "appendCoupon", payload: response.data});
            })
            .catch(() => setWrongCode(true));
    }

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
                            <Button theme="danger" onClick={() => cart.dispatch({type: "removeCoupon"})}><FontAwesomeIcon
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
                                   invalid={wrongCode}
                        />
                        <InputGroupAddon type="append">
                            <Button theme="secondary" onClick={() => append()}><FontAwesomeIcon
                                icon={faArrowRight}/></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            }
        </div>
    );
}

export default Coupon;
