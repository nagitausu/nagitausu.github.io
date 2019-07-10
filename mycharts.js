
function getCSV(){
    var req = new XMLHttpRequest();
    req.open("get", "data.csv", true);
    req.send(null);
	
    req.onload = function(){
        var loadedData = convertCSVtoArray(req.responseText);
    }
    return loadedData;
}
 
function convertCSVtoArray(str){
    var tmp = str.split("\n");
    var loadedData = [];
 
    for(var i=0;i<tmp.length;++i){
        var row = tmp[i].split(',');
        row_x = Number(row[0]);
        row_y = Number(row[1]);
        loadedData.push({
            x:row_x, 
            y:row_y
        });
    }
    return loadedData;
}
 
const loadCharts = function (loadedData) {
  const chartDataSet = {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'groupA',
        data: loadedData,
        backgroundColor: 'rgba(60, 160, 220, 0.15)',
        borderColor: 'rgba(60, 160, 220, 0.3)',
        pointRadius: 2,
      }]
    },
    options: {
        animation: false
    }
  };

  const ctx = document.createElement('canvas');
  document.getElementById('chart-area').appendChild(ctx);
  var myChart = new Chart(ctx, chartDataSet);
  myChart.update();
};

var loadedData = getCSV();
loadCharts(loadedData);
