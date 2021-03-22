fetch('../json/result_3.json')
  .then(response => response.json())
  .then(function(data){
      let runs = Object.entries(data);
      const chart = Highcharts.chart('container', {    
        title: {
            text: 'Foreign umpire analysis'
        },
        subtitle: {
            text: 'Problem 3'
        },
        xAxis: {
            type: "category"
        },      
        yAxis: {
            min: 0,
            title: {
              text: "Number of Umpires"
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
            name: 'Countries',
            data: runs,
            showInLegend: true
        }]
    });

  })
  .catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});
