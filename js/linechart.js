// JavaScript Document

    var caseNumbers = countiesData.features[24].properties.history;
    var caseTimeline = countiesData.features[24].properties.dates;

    //alert(caseTimeline);

    if($(window).width() <= 767) {
      window.aspect = 2;
    } else {
      window.aspect = 1.5;
    }


    //alert(window.aspect);
		
    var config = {
			type: 'line',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'Total Cases in Maryland',
          pointRadius: 0,
					backgroundColor: "rgba(255, 107, 105, 0.5)",
					borderColor: "rgba(255, 107, 105, 0.9)",
					data: caseNumbers,
					fill: true,
				}]
			},
			options: {
				responsive: false,
        maintainAspectRation: false,
        aspectRatio: window.aspect,     
        legend: {
          display: false
        },
				title: {
					display: true,
					text: 'Total Cases in Maryland',
          fontColor: "#fff",
          fontFamily: "Work Sans",
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
            type: 'time',
              time: {
                  unit: 'day'
              },
						display: true,
						scaleLabel: {
							display: false,
							labelString: 'Date'
						},
            ticks:{
              fontColor: "#fff",
              fontSize: "9"
            },
            gridLines:{
              color:"rgba(255,255,255,0.1)"
            }
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: false,
							labelString: 'Cases',
              fontColor: "#fff",
              fontSize: "10",
						},
            ticks:{
              fontColor: "#fff",
              fontSize: "9",
              //stepSize:"1000",
            },
            //afterFit: function(scale) {
            //   scale.height = 80  //<-- set value as you wish 
            //},
            gridLines:{
              color:"rgba(255,255,255,0.1)"
            }
					}],

				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};

		var colorNames = Object.keys(window.chartColors);
    

    
