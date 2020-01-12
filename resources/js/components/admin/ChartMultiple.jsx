import React, {useState, useEffect} from "react";
import {Button, ButtonGroup, Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap";
import {separateHundreds} from "../../utils/helpers";
import ChartService from "../../utils/ChartService";

function ChartMultiple(props){
    const [chart, setChart] = useState(null);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        async function gen(){
            const chart = await ChartService.get(props.api[0].url);

            setChart(ChartService.generate(chart, props.color, props.type));
        }

        gen();
    }, []);

    async function changeData(url, color, index){
        const chart = await ChartService.get(url);

        setChart(ChartService.generate(chart, color, props.type));
        setCurrent(index);
    }

    const buttons = props.api.map((button, index) => {
        return <Button
            key={index}
            tag="label"
            color="info"
            id="0"
            size="sm"
            className="btn-simple"
            onClick={() => changeData(button.url, button.color, index)}
            active={current === index}
        >
            <input
                defaultChecked
                className="d-none"
                name="options"
                type="radio"
            />
            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                {button.title}
            </span>
            <span className="d-block d-sm-none">
                <i className={button.icon}/>
            </span>
        </Button>
    });

    return (
        <Card className="card-chart">
            <CardHeader>
                <Row>
                    <Col className="text-left" sm="6">
                        <h5 className="card-category">{chart ? chart.title : null}</h5>
                        <CardTitle tag="h2">
                            <i className={props.api[current].icon} style={{color: props.api[current].color}}/>{" "}
                            {chart ? separateHundreds(chart.total) + ' ' +  chart.sign : null}
                        </CardTitle>
                    </Col>
                    <Col sm="6">
                        <ButtonGroup
                            className="btn-group-toggle float-md-right"
                            data-toggle="buttons"
                        >
                            {buttons}
                        </ButtonGroup>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <div className="chart-area" style={props.height && {height: props.height}}>
                    {chart &&
                    <props.chart
                        data={chart.data}
                        options={chart.options}
                    />
                    }
                </div>
            </CardBody>
        </Card>
    );
}

export default ChartMultiple;
