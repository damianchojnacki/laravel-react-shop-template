import addAlpha from "./helpers";

export default class ChartService{
    static async get(name){
        const chart = await window.axios.get(`/api/charts/${name}`);

        return chart.data;
    }

    static generate(data, color = 'rgb(29,140,248)', type = 'line'){
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
                    position: "nearest"
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
                                fontColor: "#9e9e9e"
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
                                fontColor: "#9e9e9e"
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
            data: canvas => {
                let ctx = canvas.getContext("2d");
                let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
                gradientStroke.addColorStop(1, addAlpha(color, '0.1'));
                gradientStroke.addColorStop(0.2, "transparent");

                if(type === 'pie') {
                    gradientStroke = [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#CCFF56',
                        '#00FFCC',
                        '#FF00CC',
                    ];

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
