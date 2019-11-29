import addAlpha from "./helpers";

export default class ChartService{
    static async get(name){
        const chart = await window.axios.get(`/api/charts/${name}`);

        return chart.data;
    }

    static generate(data, color = '#1D8CF8', type = 'line'){
        const options = {
            line: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a",
                                min: 0
                            },
                        }
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: addAlpha(color, '0.1'),
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a"
                            }
                        }
                    ]
                }
            },

            bar: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(225,78,202,0.1)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                suggestedMin: 60,
                                suggestedMax: 120,
                                padding: 20,
                                fontColor: "#9e9e9e",
                                callback: function(value) {
                                    return data.sign ? value + ' ' + data.sign : value;
                                }
                            }
                        }
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(225,78,202,0.1)",
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9e9e9e",
                            }
                        }
                    ]
                }
            },

            pie: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: "#f5f5f5",
                    titleFontColor: "#333",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest"
                },
                responsive: true,
            }
        };

        return {
            total: data.total,
            title: data.title,
            sign: data.sign ? data.sign : '',
            data: canvas => {
                let ctx = canvas.getContext("2d");
                let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                gradientStroke.addColorStop(1, addAlpha(color, '0.2'));
                gradientStroke.addColorStop(0.2, "transparent");

                if(type === 'pie') {
                    gradientStroke = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D', '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC', '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399', '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933', '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
                    color = 'transparent';
                }

                return {
                    labels: data.labels,
                    datasets: [
                        {
                            label: data.title,
                            fill: true,
                            backgroundColor: gradientStroke,
                            borderColor: color,
                            borderWidth: 2,
                            borderDash: [],
                            borderDashOffset: 0.0,
                            pointBackgroundColor: color,
                            pointHoverRadius: 6,
                            pointHoverBorderWidth: 15,
                            pointRadius: 4,
                            data: data.values
                        }
                    ]
                };
            },
            options: options[type],
        };
    }
}
