import addAlpha from "./helpers";

export default class ChartService{
    static async get(name){
        return window.axios.get(`/api/charts/${name}`);
    }

    static generate(data, color = 'rgb(29,140,248)'){
        return {
            total: data.total,
            title: data.title,
            data: canvas => {
                let ctx = canvas.getContext("2d");

                let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

                gradientStroke.addColorStop(1, addAlpha(color, '0.1'));
                gradientStroke.addColorStop(0.2, "transparent");

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
            options: {
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
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a",
                                min: 0
                            }
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
        };
    }
}