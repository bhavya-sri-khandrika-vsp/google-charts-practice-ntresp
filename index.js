// <!--Displaying the selected option in the select tag starts here  -->

function disp() {
  var e = document.getElementById("chart-type");
  var strUser = e.options[e.selectedIndex].text;
  document.getElementById("res").textContent = strUser;
}

// <!--Displaying the selected option in the select tag ends here  -->

// adding google charts here
function dispchart(){

var e = document.getElementById("chart-type");
var strUser = e.options[e.selectedIndex].text;
switch (strUser) {
  case "Pie Chart":
    const pieChart = {
        chart: null,
        data: [
          ['BTS Member', 'Followers in IG(in k'],
          ['RM', 174],
          ['JIN', 197],
          ['SUGA', 220],
          ['JHOPE', 197],
          ['JIMIN', 423],
          ['V', 768],
          ['JK', 982]
        ],
        element: '#chart-disp',
        options: {
          title: 'BTS Members IG followers : 2022',
          width: 1500,
              height: 900
        }
      };
    
      const init = () => {
        pieChart.chart = new google.visualization.PieChart(
          document.querySelector(pieChart.element)
        );
        pieChart.chart.draw(
          google.visualization.arrayToDataTable(pieChart.data),
          pieChart.options
        );  
    
        };
    
        google.charts.load('current', {
            packages: ['corechart'],
            callback: init
          });



    break;
  case "Bar Chart":
    const barChart = {
        chart: null,
        data: [
            ['BTS Member', 'Followers in IG(in k'],
            ['RM', 174],
            ['JIN', 197],
            ['SUGA', 220],
            ['JHOPE', 197],
            ['JIMIN', 423],
            ['V', 768],
            ['JK', 982]
        ],
        element: '#chart-disp',
        options:  {
          title: '2019 Units Sold',
          width: 1500,
              height: 900
        }
      };

      const init2 = () => {
        
        barChart.chart = new google.visualization.BarChart(
          document.querySelector(barChart.element)
        );
        barChart.chart.draw(
          google.visualization.arrayToDataTable(barChart.data),
          barChart.options
        );
      };

      google.charts.load('current', {
        packages: ['corechart'],
        callback: init2
      });

    break;
    case "Line Chart":
        const lineChart = {
            chart: null,
            data: [
                ['BTS Member', 'Followers in IG(in k'],
                ['RM', 174],
                ['JIN', 197],
                ['SUGA', 220],
                ['JHOPE', 197],
                ['JIMIN', 423],
                ['V', 768],
                ['JK', 982]
            ],
            element: '#chart-disp',
            options: {
              title: 'Total Units Sold History',
              width: 1500,
              height: 900
            }
          };
    
          const init6 = () => {
       
            lineChart.chart = new google.visualization.LineChart(
              document.querySelector(lineChart.element)
            );
            lineChart.chart.draw(
              google.visualization.arrayToDataTable(lineChart.data),
              lineChart.options
            );
          };

          google.charts.load('current', {
            packages: ['corechart'],
            callback: init6
          });
          break;

  default: alert("Select a chart type and please try again");
    // code block
}
}





      


      