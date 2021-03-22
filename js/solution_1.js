fetch('../json/result_1.json')
  .then(response => response.json())
  .then(function(data){
      let runs = Object.entries(data);
      const chart = Highcharts.chart('container', {    
        title: {
            text: 'Total runs scored by team'
        },
        subtitle: {
            text: 'Problem 1'
        },
        xAxis: {
            type: "category"
        },      
        yAxis: {
            min: 0,
            title: {
              text: "Runs"
            }
          }, 
      
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            type: 'column',
            colorByPoint: true,
            name: 'Teams',
            data: runs,
            showInLegend: true
        }]
    });

  })
  .catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});
