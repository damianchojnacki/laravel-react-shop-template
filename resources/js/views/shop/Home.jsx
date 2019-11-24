import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from '../../components/Menu';

class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            logged: !!localStorage.getItem('access_token'),
        }
    }

    render(){
        return (
            <div className="content">
                <Helmet>
                    <title>Shop | Homepage</title>
                </Helmet>
                <Menu logged={this.state.logged}/>
                <main className="main">
                    Homepage content
                </main>
            </div>
        )
    }
}

export default Home;
