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
import React, {useState, useEffect} from "react";
import {Bar, Line} from "react-chartjs-2";
// reactstrap components
import {Col, Row,} from "reactstrap";

import Admin from '../../layouts/Admin';
import OrderService from "../../utils/OrderService";
import Chart from "../../components/admin/Chart";
import ChartMultiple from "../../components/admin/ChartMultiple";
import OrdersList from "../../components/admin/OrdersList";

function Dashboard(props){

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const chartMultiple = [
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

    useEffect(() => {
        (async function(){
            const orders = await OrderService.recent();

            setOrders(orders).then(() => setLoading(false));
        })();
    }, []);

    return (
        <Admin>
            <div className="content">
                <Row>
                    <Col xs="12">
                        <ChartMultiple
                            type="line"
                            chart={Line}
                            api={chartMultiple}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg="12">
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
                                        data={orders}
                                        bgColor={props.bgColor}
                                        fields={{
                                            id: true,
                                            date: true,
                                            email: true,
                                            value: true,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </Admin>
    );
}

export default Dashboard;
