import React, {useState, useEffect} from "react";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";
import {separateHundreds} from "../utils/helpers";
import ChartService from "../utils/ChartService";

function Chart(props){
    const [chart, setChart] = useState(null);

    useEffect(() => {
        async function gen(){
            const chart = await ChartService.get(props.api);

            setChart(ChartService.generate(chart, props.color, props.type));
        }
        gen();
    }, []);

    return (
        <Card className="card-chart">
            <CardHeader>
                <h5 className="card-category">{chart ? chart.title : null}</h5>
                <CardTitle tag="h2">
                    <i className={props.icon} />{" "}
                    {chart ? separateHundreds(chart.total) + ' ' +  chart.sign : null}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <div className="chart-area">
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

export default Chart;
