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

    componentDidMount() {
        OrderService.recent().then(orders => {
            this.setState({
                orders: orders,
                loading: false,
            });
        });
    }

    render() {

        const ordersTable = this.state.orders.map((order, index) =>
            <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.created_at}</td>
                <td>{order.user.email}</td>
                <td className="text-center">{order.value} USD</td>
                <td className="text-right"><Link className={`btn btn-${this.props.bgColor}`} to={`/admin/orders/${order.id}`}>Details</Link>
                </td>
            </tr>
        );

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
                                type="pie"
                                chart={Pie}
                                api="orders/countries"
                                icon="tim-icons icon-map-big text-info"
                                color="#000000"
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
                                        <table className="table">
                                            <thead className="text-primary">
                                            <tr>
                                                <th>#</th>
                                                <th>Purchase date</th>
                                                <th>Customer email</th>
                                                <th className="text-center">Value</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {!this.state.loading ? ordersTable : null}
                                            </tbody>
                                        </table>
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
