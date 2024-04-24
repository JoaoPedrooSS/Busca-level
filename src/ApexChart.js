import React from "react";
import ReactApexChart from "react-apexcharts";

function ApexCharts({ pesquisa }) {
  // Contagem de cidades por nível
  const counts = pesquisa.reduce((acc, cidade) => {
    acc[cidade.level] = (acc[cidade.level] || 0) + 1;
    return acc;
  }, {});

  // Preparação dos dados para o gráfico
  const series = Object.values(counts);
  const labels = Object.keys(counts).map((level) => `Level ${level}`);

  // Opções do gráfico
  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="pie" width={380} />
    </div>
  );
}

export default ApexCharts;
