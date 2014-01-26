function drawChart(arr) {
  console.log(arr);
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Letter Grade');
  data.addColumn('number', 'Number of Students');
  data.addRows([
    ['A', arr[0]],
    ['B', arr[1]],
    ['C', arr[2]], 
    ['D', arr[3]],
    ['F', arr[4]]
  ]);

  // Set chart options
  var options = {'title':'Expected Grade',
                 'width':400,
                 'height':400,
                 'slices': {
                  0: { color: '#27DE55'},
                  1: { color: '#5757FF'},
                  2: { color: '#FFFF84'},
                  3: { color: 'rgb(255,165,0)'},
                  4: { color: '#FF4848'},
                 }};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
  chart.draw(data, options);

  // draw_1();
  // draw_2();
}

function draw_1(percentages) {
  var xLabel = ['Workload', 'Much Lighter', 'Somewhat Lighter', 'Average', 'Somewhat Heavier', 'Much Heavier'];
  // var percentages = [.6, .1, .1, 0, .2];

  var data = google.visualization.arrayToDataTable([
    [xLabel[0], 'Percentage of Responses', { role: 'style'}],
    [xLabel[1],  percentages[0], '#27DE55'],
    [xLabel[2],  percentages[1], '#5757FF'],
    [xLabel[3],  percentages[2], '#FFFF84'],
    [xLabel[4],  percentages[3], 'rgb(255,165,0)'],
    [xLabel[5],  percentages[4], '#FF4848']
  ]);

  var options = {title:xLabel[0].concat(' compared to all Rice courses'),
                  legend:'none',
                  vAxis:{title:'Percentage of Responses',
                          format:'###%'},
                 width:370,
                 height:300};

  var chart = new google.visualization.ColumnChart(document.getElementById('bar_chart_1'));
  chart.draw(data, options);
}

function draw_2(percentages) {
  var xLabel = ['Course Quality', 'Outstanding', 'Good', 'Average', 'Fair', 'Poor'];
  // var percentages = [.9, .1, .0, .0, .0];

  var data = google.visualization.arrayToDataTable([
    [xLabel[0], 'Percentage of Responses', { role: 'style'}],
    [xLabel[1],  percentages[0], '#27DE55'],
    [xLabel[2],  percentages[1], '#5757FF'],
    [xLabel[3],  percentages[2], '#FFFF84'],
    [xLabel[4],  percentages[3], 'rgb(255,165,0)'],
    [xLabel[5],  percentages[4], '#FF4848']
  ]);

  var options = {title:xLabel[0].concat(' compared to all Rice courses'),
                  legend:'none',
                  vAxis:{title:'Percentage of Responses',
                          format:'###%'},
                 width:370,
                 height:300};

  var chart = new google.visualization.ColumnChart(document.getElementById('bar_chart_2'));
  chart.draw(data, options);

}