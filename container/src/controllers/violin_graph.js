Plotly.d3.csv("daily_moods.csv", function(err, rows){
  
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
  }

var data = [{
  type: 'violin',
  x: unpack(rows, 'day'),
  y: unpack(rows, 'total_bill'),
  points: 'none',
  box: {
    visible: true
  },
  line: {
    color: 'green',
  },
  meanline: {
    visible: true
  },
  transforms: [{
     type: 'groupby',
     groups: unpack(rows, 'day'),
     styles: [
        {target: 'Sun', value: {line: {color: 'blue'}}},
        {target: 'Sat', value: {line: {color: 'orange'}}},
        {target: 'Thur', value: {line: {color: 'green'}}},
        {target: 'Fri', value: {line: {color: 'red'}}}
     ]
    }]
}]

var layout = {
  title: "Multiple Traces Violin Plot",
  yaxis: {
    zeroline: false
  }
}

Plotly.plot('graph', data, layout, {showSendToCloud: true});
});  