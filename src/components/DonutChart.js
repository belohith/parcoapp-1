import React, { useRef } from "react";
import { Doughnut } from "react-chartjs-2";

function DonutChart({ items }) {
  const chartRef = useRef(null);
  const defaultText = { title: "TSP Total", value: "$210,230", background: "none" };
  const [centerText, setCenterText] = React.useState(defaultText);

  const data = {
    labels: items.map((item) => item.name),
    datasets: [
      {
        data: items.map((item) => item.value),
        backgroundColor: items.map((item) => item.color),
        borderWidth: 6,
        hoverOffset: 15, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      tooltip: {
        enabled: false,
        external: (context) => {
          const { tooltip } = context;
          if (tooltip?.opacity === 0) {
            setCenterText(defaultText);
            return;
          }
          const index = tooltip.dataPoints[0].dataIndex;
          const hoveredItem = items[index];
          setCenterText({
            title: hoveredItem.name,
            value: `$${hoveredItem.value.toLocaleString()}`,
            background: hoveredItem.color,
          });
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chart-container" style={{ position: "relative" }}>
      <Doughnut ref={chartRef} data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "5px 10px",
            background: centerText.background === "none" ? "none" : centerText.background,
            color: centerText.background === "none" ? "#333" : "#fff",
            borderRadius: "5px",
            fontSize: "18px",
            fontWeight: "bold",
            transition: "background 0.3s ease",
          }}
        >
          {centerText.title}
        </div>
        <div
          style={{
            color: "#333",
            marginTop: "5px",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          {centerText.value}
        </div>
      </div>
    </div>
  );
}

export default DonutChart;
