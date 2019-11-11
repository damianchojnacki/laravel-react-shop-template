import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from './Menu';

class Home extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="content">
                <Helmet>
                    <title>Shop | Homepage</title>
                </Helmet>
                <Menu />
                <main className="main">
                    Homepage content
                </main>
            </div>
        )
    }
}

export default Home;
