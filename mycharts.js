var loadedData = [];

function getCSV(){
    var req = new XMLHttpRequest();
    req.open("get", "data.csv", true);
    req.send(null);
	
    req.onload = function(){
	convertCSVtoArray(req.responseText);
    }
}
 
function convertCSVtoArray(str){
    var tmp = str.split("\n");
 
    for(var i=0;i<tmp.length;++i){
        var row = tmp[i].split(',');
        row_x = Number(row[0]);
        row_y = Number(row[1]);
        loadedData.push({
            x:row_x, 
            y:row_y
        });
    }
}
 
const sampleData = {
    groupA: [{x:1.9, y:2.32}, {x:1.52, y:0.79}, {x:1.37, y:1.28}, 
             {x:1.92, y:1.44}, {x:2.58, y:-0.01}, {x:0.71, y:4.25}],
    groupB: [{x:7.01, y:-2.15}, {x:-7.29, y:1.71}, {x:0.72, y:-4.83}, 
             {x:2.75, y:4.11}, {x:3.08, y:-2.45}, {x:3.05, y:-3.93}]
};

const loadCharts = function () {
  const chartDataSet = {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'groupA',
        data: loadedData,
        backgroundColor: 'rgba(60, 160, 220, 0.3)',
        borderColor: 'rgba(60, 160, 220, 0.8)'
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

getCSV();
loadCharts();
