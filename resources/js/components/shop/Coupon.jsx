import React, {useState} from "react";
import {Button, FormGroup, FormInput, InputGroup, InputGroupAddon, InputGroupText} from "shards-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPercentage} from "@fortawesome/free-solid-svg-icons/faPercentage";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons/faArrowRight";
import OrderService from "../../utils/OrderService";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {useCart} from "../../utils/CartContext";
import {notify} from "react-notify-toast";
import Translate from "../Translate";

function Coupon() {
    const [code, setCode] = useState();
    const [wrongCode, setWrongCode] = useState(false);

    const cart = useCart();

    const coupon = cart.state.coupon;

    function append(){
        code && OrderService.appendCoupon(code)
            .then(response => {
                response && cart.dispatch({type: "appendCoupon", payload: response.data});
            })
            .catch(error => {
                error.response.status === 429 && notify.show("Too many attempts, make sure you have correct coupon.", 'error', 1500);
                setWrongCode(true);
            });
    }

    return (
        <div className="float-right">
            {coupon.code ?
                <FormGroup>
                    <label htmlFor="coupon" className="d-block">
                        <Translate id="coupon-applied"/>
                    </label>
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
                    <label htmlFor="coupon" className="d-block">
                        <Translate id="coupon-none"/>
                    </label>
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
