/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import {Link} from "react-router-dom";
import {Line, Bar, Pie} from "react-chartjs-2";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

import {Helmet} from "react-helmet";
import ChartService from "../../utils/ChartService";
import {separateHundreds} from "../../utils/helpers";
import OrderService from "../../utils/OrderService";
import Chart from "../../components/Chart";
import ChartMultiple from "../../components/ChartMultiple";
import OrdersList from "../../components/OrdersList";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: true,
        };

        this.chartMultiple = [
            {
                title: 'Orders',
                url: 'orders',
                color:'#1D8CF8',
                icon: 'tim-icons icon-delivery-fast',
            },
            {
                title: 'Views',
                url: 'views',
                color:'#ffee00',
                icon: 'tim-icons icon-tap-02',
            },
            {
                title: 'Unique views',
                url: 'views-unique',
                color:'#00ddcc',
                icon: 'tim-icons icon-single-02',
            }
        ];
    }

    async componentDidMount() {
        const orders = await OrderService.recent();

        this.setState({
            orders: orders,
            loading: false,
        });
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Shop | Admin - Dashboard</title>
                </Helmet>
                <div className="content">
                    <Row>
                        <Col xs="12">
                            <ChartMultiple
                                type="line"
                                chart={Line}
                                api={this.chartMultiple}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <Chart
                                type="bar"
                                chart={Bar}
                                api="orders/countries"
                                icon="tim-icons icon-map-big text-warning"
                                color="#ff8d72"
                            />
                        </Col>
                        <Col lg="6">
                            <Chart
                                type="bar"
                                chart={Bar}
                                api="orders/values"
                                icon="tim-icons icon-money-coins text-danger"
                                color="#fd5d93"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <div className="col-md-12">
                            <div className="card-plain card">
                                <div className="card-header">
                                    <h2 className="card-title">Recent orders</h2>
                                    <h5 className="card-category">(only after payment)</h5>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive ps">
                                        <OrdersList
                                            orders={this.state.orders}
                                            bgColor={this.props.bgColor}
                                            fields={{
                                                id: true,
                                                index: false,
                                                date: true,
                                                email: true,
                                                value: true,
                                                status: false,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </>
        );
    }
}

export default Dashboard;
