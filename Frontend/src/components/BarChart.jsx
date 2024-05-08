import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import "../App.css";

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const xValues = ["Users", "Teachers", "Students", "Courses", "Income"];
        const yValues = [55, 49, 44, 24, 15];
        const barColors = [
            "#F30D0D",
            "#4CE615",
            "#DDCB01",
            "#00C4D2",
            "#0F9600",
        ];

        let myChart = null;

        if (chartRef.current) {
            if (myChart) {
                myChart.destroy();
            }

            myChart = new Chart(chartRef.current, {
                type: "bar",
                data: {
                    labels: xValues,
                    datasets: [
                        {
                            backgroundColor: barColors,
                            data: yValues,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false },
                        title: {
                            display: true,
                            text: "Total Activity of Ganj EDU",
                        },
                    },
                },
            });
        }

        return () => {
            if (myChart) {
                myChart.destroy(); 
            }
        };
    }, []);
    return (
        <div className="sub_canvas2">
            <canvas ref={chartRef} />
            <hr />
        </div>
    );
};

export default BarChart;
