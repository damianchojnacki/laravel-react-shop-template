import {InertiaApp} from "@inertiajs/inertia-react";
import React from "react";
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

require("./bootstrap");

const app = document.getElementById("app");

render(<InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name => require(`./views/${name}`).default}
/>, app);

//TODO change isMobile to CSS rules in whole project
