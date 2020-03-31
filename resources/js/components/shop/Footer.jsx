import React from "react";
import {Badge} from "shards-react";
import LanguageSelect from "./LanguageSelect";

function Footer() {
    return (
        <footer className="mt-4 py-4 bg-secondary text-light" style={{zIndex: 2}}>
            <p className="text-center m-0">© 2020 Copyright <Badge tag="a" href="#">Damian Chojnacki</Badge></p>
        </footer>
    );
}

export default Footer;
