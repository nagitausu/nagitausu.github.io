var loadedData = [{x:0, y:0}];
var chart;

function getCSV(){
    var req = new XMLHttpRequest();
    req.open("get", "data.csv", true);
    req.send(null);
	
    req.onload = function(){
        return convertCSVtoArray(req.responseText);
    }
    return true;
}
 
function convertCSVtoArray(str){
    var tmp = str.split("\n");
 
    for(var i=0;i<tmp.length;++i){
        var row = tmp[i].split(',');
        row_x = Number(row[0]);
        row_y = Number(row[1]);
        loadedData.push({x:row_x, y:row_y});
    }
    return true;
}

function loadCharts() {
  const ctx = document.createElement('canvas');
  document.getElementById('chart-area').appendChild(ctx);

  var chartDataSet = {
    type: 'scatter',
    data: {
      datasets: [{
        label: "A",
        data: loadedData,
        backgroundColor: 'rgba(60, 160, 220, 0.15)',
        borderColor: 'rgba(60, 160, 220, 0.3)',
        pointRadius: 2
      }]
    },
    options: {
        animation: false,
        scales:{
            yAxes: [{
                ticks: {
                    max: 4000,
                    min: 0
                }
            }],
            xAxes: [{
                ticks: {
                    max: 500000,
                    min: 0
                }
            }]
        }
    }
  };

  chart = new Chart(ctx, chartDataSet);
};

getCSV();
loadCharts();
