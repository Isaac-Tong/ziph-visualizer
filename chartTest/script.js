var ctx = document.getElementById('displayData').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',


    // The data for our dataset
    data: {
        labels: ['January', 'Feburary', 'Feburary', 'Feburary', 'Feburary', 'saturday'],
        datasets: [{
            label: 'My First dataset',
            data: [6, 5, 4, 3, 2, 4],
            backgroundColor: "rgb(52,206,154, 0.6)",
            borderColor: "rgb(79,218,159, 0.8)",
            borderWidth: 5,
            hoverBorderColor: "rgb(0,144,158)"


        }],


    },

    // Configuration options go here
    options: {
      legend: {
        display: false,
        },
      tooltips: {
        enabled: false
      },
      scales:{
        xAxes:[{
          ticks: {
            fontFamily: "Jost",

          },
          gridLines:{
            borderDash: [8, 4],
            color:"rgb(158,158,158, 0.7)",
            zeroLineColor:"rgb(158,158,158, 0.7)"
          }

        }],

        yAxes:[{
          ticks: {
            fontFamily: "Jost",
            beginAtZero: true
          },
          gridLines:{
            borderDash: [8, 4],
            color: "rgb(158,158,158, 0.7)",
            zeroLineColor:"rgb(158,158,158, 0.7)",
          }
        }],
      }
    }
});
