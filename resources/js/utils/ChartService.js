import addAlpha, {colors} from "./helpers";

export default class ChartService {
    static async get(name) {
        const chart = await window.axios.get(`/api/charts/${name}`);

        return chart.data;
    }

    static generate(data, color = '#1D8CF8', type = 'line') {
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
                                color: addAlpha(color, 0.1),
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
                                suggestedMin: 0,
                                padding: 20,
                                fontColor: "#9e9e9e",
                                callback: function (value) {
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
                segmentShowStroke: true,
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
                let gradientStroke = ctx.createLinearGradient(0, (screen.height / 3) - 100, 0, 0);
                gradientStroke.addColorStop(1, addAlpha(color, 0.2));
                gradientStroke.addColorStop(0.2, "transparent");

                if (type === 'pie') {
                    gradientStroke = colors;
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
