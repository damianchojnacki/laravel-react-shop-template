import React, {useEffect} from "react";

import Notifications, {notify} from 'react-notify-toast';
import "shards-ui/dist/css/shards.min.css";

import Menu from "../components/shop/Menu";
import Footer from "../components/shop/Footer";
import Cart from "../components/shop/Cart";
import {usePage} from "@inertiajs/inertia-react";
import {Helmet} from "react-helmet";

function Shop({children}) {
    const { flash, app } = usePage();

    useEffect(() => {
        flash.success && notify.show(flash.success, 'success', 1500);
        flash.error && notify.show(flash.error, 'error', 1500);
    }, [flash]);

    return (
        <div className="overflow-hidden">
            <Helmet>
                <title>{app.name + " - " + app.page}</title>
            </Helmet>
            <Notifications/>
            <main className="p-0 container d-flex flex-column" style={{minHeight: "100vh"}}>
                <Cart/>
                <Menu/>
                <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                    {children}
                </div>
                <Footer/>
            </main>
        </div>
    );
}

export default Shop;
