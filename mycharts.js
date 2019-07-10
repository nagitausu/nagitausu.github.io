const sampleData = {
  x: [1.9, 2.32, 1.52, 0.79, 1.37, 1.28, 1.92, 1.44, 2.58, -0.01, 0.71, 4.25],
  y: [7.01, -2.15, -7.29, 1.71, 0.72, -4.83, 2.75, 4.11, 3.08, -2.45, 3.05, -3.93]
};

const loadCharts = function () {
  const chartDataSet = {
    type: 'scatter',
    data: {
      labels: sampleData.labels,
      datasets: [{
        label: 'x',
        data: sampleData.x,
        backgroundColor: 'rgba(60, 160, 220, 0.3)',
        borderColor: 'rgba(60, 160, 220, 0.8)'
      }, {
        label: 'y',
        data: sampleData.y,
        backgroundColor: 'rgba(60, 190, 20, 0.3)',
        borderColor: 'rgba(60, 190, 20, 0.8)'
      }]
    },
    options: {
        animation: false
    }
  };

  const ctx = document.createElement('canvas');
  document.getElementById('chart-area').appendChild(ctx);
  new Chart(ctx, chartDataSet);
};

loadCharts();
