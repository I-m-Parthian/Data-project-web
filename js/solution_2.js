fetch('../json/result_2.json')
  .then(response => response.json())
  .then(function(data){
      let runs = Object.entries(data);
      const chart = Highcharts.chart('container', {    
        title: {
            text: 'Top batsman for Royal Challengers Bangalore'
        },
        subtitle: {
            text: 'Problem 2'
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
            name: 'Players',
            data: runs,
            showInLegend: true
        }]
    });

  })
  .catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});
