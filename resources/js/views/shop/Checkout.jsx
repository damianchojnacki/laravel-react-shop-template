import React, {useEffect, useState} from "react";
import {
     Form, Alert, FormGroup, InputGroup, InputGroupAddon, FormInput, Button
} from "shards-react";
import {CartContext} from "../../utils/CartContext";
import ProductService from "../../utils/ProductService";
import {notify} from "react-notify-toast";
import {Helmet} from "react-helmet";
import ProductsList from "../../components/shop/ProductsList";
import {Redirect} from "react-router-dom";

function Checkout(props) {
    const {state, dispatch} = React.useContext(CartContext);
    const [products, setProducts] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        async function get() {
            const products = await ProductService.cart(state.cart);
            products.length ? setProducts(products) : setRedirect(true);
        }

        get();
    }, [state]);

    const changeQuantity = (product, action) => {
        action ? dispatch({type: "add", payload: product.id}) : dispatch({type: "remove", payload: product.id});

        notify.show(`Cart has been updated!.`, 'success', 1500);
    };

    const getSumOfProducts = () => {
        if(products.length) {
            let sum = 0;

            products.map(product => {
                sum += parseFloat(product.price_final) * product.quantity;
            });

            return sum.toFixed(2);
        }
    };

    return (
        <>
            {redirect && <Redirect to="/"/>}
            <Helmet>
                <title>Shop | Checkout</title>
            </Helmet>
            <div className="row w-100 align-items-center">
                <h1 className="col-12 text-center pb-5 mb-5">Checkout</h1>
                <div className="col-lg-6 col-12">
                    <ProductsList
                        data={products}
                        fields={{
                            name: true,
                            price: true,
                        }}
                        changeQuantity={changeQuantity}
                        sum={getSumOfProducts()}
                    />
                </div>
                <div className="col-lg-6 col-12 text-center">
                    <Button size="lg" color="success">Proceed to payment</Button>
                </div>
            </div>
        </>
    );
}

export default Checkout;
