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

import { Line, Bar, Pie } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import {Helmet} from "react-helmet";
import ChartService from "../../utils/ChartService";
import {separateHundreds} from "../../utils/helpers";
import ProductService from "../../utils/ProductService";
import OrderService from "../../utils/OrderService";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: null,
      smallChartsData: [],
      orders: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setBigChartData('orders');

    this.setSmallChartData(0, 'orders/countries', '#ffffff', 'pie');
    this.setSmallChartData(1, 'orders/values', '#fd5d93', 'bar');

    OrderService.recent().then(orders => {
      this.setState({
        orders: orders,
        loading: false,
      });
    });
  }

  async setBigChartData(name, color) {
    const chart = await ChartService.get(name);

    this.setState({
      bigChartData: ChartService.generate(chart, color, 'line'),
    });
  }

  async setSmallChartData(index, name, color, type) {
    const chart = await ChartService.get(name);

    const smallChartsData = this.state.smallChartsData;

    smallChartsData[index] = ChartService.generate(chart, color, type);

    this.setState({
      smallChartsData: smallChartsData,
    });
  }

  render() {

    const ordersTable = this.state.orders.map((order, index) =>
        <tr key={order.id}>
          <td>{ index + 1 }</td>
          <td>{ order.created_at }</td>
          <td>{ order.user.email }</td>
          <td className="text-center">{ order.value } USD</td>
          <td className="text-right"><a className="btn btn-primary" href={`/admin/orders/${order.id}`}>Details</a></td>
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
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">{this.state.bigChartData ? this.state.bigChartData.title : null}</h5>
                      <CardTitle tag="h2">{this.state.bigChartData ? separateHundreds(this.state.bigChartData.total) : null}</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-md-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          color="info"
                          id="0"
                          size="sm"
                          className="btn-simple"
                          onClick={() => this.setBigChartData("orders")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Orders
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-delivery-fast" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className="btn-simple"
                          onClick={() => this.setBigChartData("views", '#ffee00')}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Views
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                        <Button
                            color="info"
                            id="1"
                            size="sm"
                            tag="label"
                            className="btn-simple"
                            onClick={() => this.setBigChartData("views-unique", '#00ddcc')}
                        >
                          <input
                              className="d-none"
                              name="options"
                              type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Unique views
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.bigChartData &&
                      <Line
                          data={this.state.bigChartData.data}
                          options={this.state.bigChartData.options}
                      />
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">{this.state.smallChartsData[0] ? this.state.smallChartsData[0].title : null}</h5>
                  <CardTitle tag="h2">
                      <i className="tim-icons icon-map-big text-info" />{" "}
                      {this.state.smallChartsData[0] ? separateHundreds(this.state.smallChartsData[0].total) : null}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.smallChartsData[0] &&
                      <Pie
                          data={this.state.smallChartsData[0].data}
                          options={this.state.smallChartsData[0].options}
                      />
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">{this.state.smallChartsData[1] ? this.state.smallChartsData[1].title : null}</h5>
                  <CardTitle tag="h2">
                      <i className="tim-icons icon-money-coins text-danger" />{" "}
                      {this.state.smallChartsData[1] ? `${separateHundreds(this.state.smallChartsData[1].total)} $` : null}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.smallChartsData[1] &&
                    <Bar
                        data={this.state.smallChartsData[1].data}
                        options={this.state.smallChartsData[1].options}
                    />
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <div className="col-md-12">
              <div className="card-plain card">
                <div className="card-header">
                  <h2 className="card-title">Recent orders</h2>
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
