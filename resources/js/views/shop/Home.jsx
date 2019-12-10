import React from 'react';
import { Helmet } from 'react-helmet';

function Home(props){

    return (
        <>
            <Helmet>
                <title>Shop | Homepage</title>
            </Helmet>
            <main className="main">
                Homepage content
            </main>
        </>
    )
}

export default Home;
