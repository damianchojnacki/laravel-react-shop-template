import React from "react";
import {Badge} from "shards-react";

function Footer() {
    return (
        <footer className="py-4 bg-secondary text-light" style={{zIndex: 3}}>
            <p className="text-center m-0">© 2020 Copyright <Badge tag="a" href="#">Damian Chojnacki</Badge></p>
        </footer>
    );
}

export default Footer;
