// solution 4


fetch('../json/result_4.json')
  .then(response => response.json())
  .then(function(matches){
    //   let matches = Object.entries(data);
      let seasons = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'];
      let seriesData = [];
      for (let team in matches){
        seriesData.push({
            name:team,
            data: matches[team]
        })
        }   

      Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked chart of matches played by team by season'
        },
        xAxis: {
            categories: seasons
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Games Played'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -10,
            verticalAlign: 'top',
            y: 20,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: seriesData
    });

  })
  .catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});