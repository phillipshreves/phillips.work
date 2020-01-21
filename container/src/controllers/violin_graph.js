Plotly.d3.csv("export/entry.csv", function(err, rows){
  
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

var mood_categories = ['Irritability','Anxiety','Depressed','Elevated']
var irritability_data = unpack(rows, 'IRRITABILITY')
var anxiety_data = unpack(rows, 'ANXIETY')
var depressed_data = unpack(rows, 'DEPRESSED')
var elevated_data = unpack(rows, 'ELEVATED')
var dates = unpack(rows, 'DATE (YYYY-MM-DD)')

var irritability_bars = {
  type: 'bar',
  x: irritability_data,
  y: dates,
  orientation: 'h',
  marker: {
	color: 'rgba(255,100,100,1.0)',
	width: 1
  }
}
var anxiety_bars = {
  type: 'bar',
  x: anxiety_data,
  y: dates,
  orientation: 'h',
  marker: {
	color: 'rgba(100,255,100,1.0)',
	width: 1
  }
}
var depressed_bars = {
  type: 'bar',
  x: depressed_data,
  y: dates,
  orientation: 'h',
  marker: {
	color: 'rgba(100,100,255,1.0)',
	width: 1
  }
}
var elevated_bars = {
  type: 'bar',
  x: elevated_data,
  y: dates,
  orientation: 'h',
  marker: {
	color: 'rgba(10,10,10,1.0)',
	width: 1
  }
}

var data = [irritability_bars, anxiety_bars, depressed_bars, elevated_bars];

var layout = {
  title: "Daily Moods",
  yaxis: {
    zeroline: false,
	type: 'date',
	tickmode: 'linear',
	tick0: '2019-08-21',
	dtick: 86400000.0
  },
  xaxis: {
	type: 'linear',
	range: [0,12]
  },
  barmode: 'stack'
}

Plotly.plot('graph', data, layout, {showSendToCloud: false});
});  
