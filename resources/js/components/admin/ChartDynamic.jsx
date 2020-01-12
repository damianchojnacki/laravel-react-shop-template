import React, {useState, useEffect} from "react";
import {Card, CardBody, CardHeader, CardTitle} from "reactstrap";
import {separateHundreds} from "../../utils/helpers";
import ChartService from "../../utils/ChartService";
import {Line} from "react-chartjs-2";

function ChartDynamic(props){
    return (
        <Card className="card-chart">
            <CardHeader>
                <h5 className="card-category">{props.data ? props.data.title : null}</h5>
                <CardTitle tag="h2">
                    {props.data ? separateHundreds(props.data.total) + ' ' +  props.data.sign : null}
                </CardTitle>
            </CardHeader>
            <CardBody>
                <div className="chart-area">
                    {props.data &&
                    <Line
                        data={props.data.data}
                        options={props.data.options}
                    />
                    }
                </div>
            </CardBody>
        </Card>
    );
}

export default ChartDynamic;
