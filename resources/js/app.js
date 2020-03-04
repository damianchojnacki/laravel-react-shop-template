import { InertiaApp } from '@inertiajs/inertia-react';
import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = document.getElementById('app');

render(
    <InertiaApp
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={name => require(`./views/${name}`).default}
    />,
    app
);
