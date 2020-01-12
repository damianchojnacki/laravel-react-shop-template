import React from 'react';
import { Helmet } from 'react-helmet';
import {Alert} from 'shards-react';

function Home(props){

    const result = props.match.params.result;

    return (
        <>
            <Helmet>
                <title>Shop | Homepage</title>
            </Helmet>
            <main className="main">
                {result === "success" &&
                    <Alert theme="success">
                        You've successfully registered and logged in. You can start shopping right now!
                    </Alert>
                }
                Homepage content
            </main>
        </>
    )
}

export default Home;
