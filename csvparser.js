function getCSV(){
    var req = new XMLHttpRequest();
    req.open("get", "data.csv", true);
    req.send(null);
	
    req.onload = function(){
	convertCSVtoArray(req.responseText);
    }
}
 
function convertCSVtoArray(str){
    var result = [];
    var tmp = str.split("\n");
 
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
	// result.map(function(element){return Number(element);});
    alert(result[0][1]);
}
 
getCSV();
