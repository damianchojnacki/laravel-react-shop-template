import React, {useEffect, useState} from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Row,
    Col
} from "reactstrap";
import ChartService from "../../utils/ChartService";
import ChartDynamic from "../../components/admin/ChartDynamic";
import {Helmet} from "react-helmet";

function Analytics(props) {
    const [data, setData] = useState(null);
    const [range, setRange] = useState(null);
    const [group, setGroup] = useState(null);
    const [resource, setResource] = useState(null);

    const getThemeColor = theme => {
        const style = getComputedStyle(document.body);
        let color;

        theme === 'green' ? color = style.getPropertyValue('--success') :
        theme === 'green' ? color = style.getPropertyValue('--info') :
        color = style.getPropertyValue('--primary');

        return color;
    };

    useEffect(() => {
        async function gen(){
            const chart = await ChartService.dynamic(resource, group, range);

            setData(ChartService.generate(chart, getThemeColor(props.bgColor), 'line'));
        }

        (range && group && resource) && gen();
    }, [range, group, resource]);

    return (
        <>
            <Helmet>
                <title>Shop | Admin - Analytics</title>
            </Helmet>
            <div className="content">
                <Row>
                    <Col>
                        {data && <ChartDynamic data={data}/>}
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Card>
                            <CardHeader>
                                <h2 className="card-title text-center">Resource</h2>
                            </CardHeader>
                            <CardBody>
                                <Button color="secondary" onClick={() => setResource('orders')} block disabled={resource === 'orders'}>
                                    <i className="tim-icons icon-cart"></i>
                                    <p>Orders made</p>
                                </Button>

                                <Button color="secondary" onClick={() => setResource('orders-value')} block disabled={resource === 'orders-value'}>
                                    <i className="tim-icons icon-money-coins"></i>
                                    <p>Value of orders</p>
                                </Button>

                                <Button color="secondary" onClick={() => setResource('orders-productsCount')} block disabled={resource === 'orders-products'}>
                                    <i className="tim-icons icon-laptop"></i>
                                    <p>Purchased products</p>
                                </Button>

                                <Button color="secondary" onClick={() => setResource('users')} block disabled={resource === 'users'}>
                                    <i className="tim-icons icon-single-02"></i>
                                    <p>New users</p>
                                </Button>

                                <Button color="secondary" onClick={() => setResource('views-views')} block disabled={resource === 'views-views'}>
                                    <i className="tim-icons icon-tap-02"></i>
                                    <p>Views</p>
                                </Button>

                                <Button color="secondary" onClick={() => setResource('views-views_unique')} block disabled={resource === 'views-views_unique'}>
                                    <i className="tim-icons icon-tap-02"></i>
                                    <p>Unique views</p>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardHeader>
                                <h2 className="card-title text-center">Range</h2>
                            </CardHeader>
                            <CardBody>
                                <Button color="secondary" onClick={() => setRange('week')} block disabled={range === 'week'}>
                                    Week
                                </Button>

                                <Button color="secondary" onClick={() => setRange('month')} block disabled={range === 'month'}>
                                    Month
                                </Button>

                                <Button color="secondary" onClick={() => setRange('year')} block disabled={range === 'year'}>
                                    Year
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardHeader>
                                <h2 className="card-title text-center">Group by</h2>
                            </CardHeader>
                            <CardBody>
                                <Button color="secondary" onClick={() => setGroup('day')} block disabled={group === 'day'}>
                                    Day
                                </Button>

                                <Button color="secondary" onClick={() => setGroup('week')} block disabled={group === 'week'}>
                                    Week
                                </Button>

                                <Button color="secondary" onClick={() => setGroup('month')} block disabled={group === 'month'}>
                                    Month
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Analytics;
