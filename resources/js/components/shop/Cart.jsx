import React, {useState} from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, InputGroupText
} from "shards-react";
import {CartContext} from "../../utils/CartContext";
import "./cart.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

function Cart(props) {
    const {state, dispatch} = React.useContext(CartContext);
    const [opened, setOpened] = useState(false);

    return (
        <Dropdown nav open={opened} toggle={() => setOpened(!opened)}>
            <DropdownToggle>
                <FontAwesomeIcon icon={faShoppingCart}/>
            </DropdownToggle>
        <DropdownMenu className="cart">
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
        </Dropdown>
    );
}

export default Cart;
