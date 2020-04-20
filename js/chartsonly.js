// JavaScript Document
    latestData();

    //Pulling & Generating Data for Charts
    var caseNumbers = countiesData.features[24].properties.history;
    var deathNumbers = countiesData.features[24].properties.historydeaths;
    var recoveryNumbers = countiesData.features[24].properties.historyrecoveries;
    function diff(ary) {
      var newA = [];
      for (var i = 1; i < ary.length; i++)  newA.push(ary[i] - ary[i - 1])
      return newA;
    }
    var dailyCaseChange = diff(caseNumbers);
    var adjDailyCaseChange = dailyCaseChange.unshift(1);
    var caseTimeline = countiesData.features[24].properties.dates;

    //if($(window).width() <= 767) {
    //  window.aspect = 2;
    //} else {
    //  window.aspect = 1.5;
    //}


    //Linechart 1 Config		
    var config = {
			type: 'line',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'Total Cases',
					backgroundColor: "rgba(255, 107, 105, 0.5)",
					borderColor: "rgba(255, 107, 105, 0.9)",
					data: caseNumbers,
          pointRadius: 3,
					pointHitRadius: 5,
					fill: true,
				},
        {
					label: 'Total Deaths',
					backgroundColor: "rgba(247,183,104,.5)",
					borderColor: "rgba(245,153,34,.9)",
					data: deathNumbers,
          pointRadius: 3,
					pointHitRadius: 5,
					fill: true,
				},
        {
					label: 'Total Recoveries',
					backgroundColor: "rgba(31,173,37,.7)",
					borderColor: "rgba(31,173,37,1.00)",
					data: recoveryNumbers,
          pointRadius: 3,
					pointHitRadius: 5,
					fill: true,
				}]
			},
			options: {
				responsive: true,
        maintainAspectRatio: false,  
        //aspectRatio: window.aspect,     
        legend: {
          display: true,
          position: "top",
          align: "end",
          labels:{
           boxWidth: 12,
           boxHeight: 10,
           fontColor: "#eee",
           //padding:30,
          },
          //fullWidth: false,
        },
				title: {
					display: true,
					text: 'Total Cases in Maryland',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: 18,
				},
				tooltips: {
          enabled: true, 
          mode: 'label',
          displayColors:false,
          position:'average',
          xalign: 'right',
          yalign:'none',
          intersect:false,
         },       
				hover: {
					//mode: 'average',
					intersect: false
				},
				scales: {
					xAxes: [{
            type: 'time',
              time: {
                  unit: 'day',
                  //unitStepSize: 2,          
              },
						display: true,
						scaleLabel: {
							display: false,
							labelString: 'Date'
						},
            ticks:{
              fontColor: "#fff",
              fontSize: 10,
              //autoSkip: true,
              //maxRotation: 0,
              //maxTicksLimit: 16,
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
            },
            gridLines:{
              color:"rgba(255,255,255,0.1)"
            }
					}],

				}
			}
		};

    //Barchart 1 Config
    var config2 = {
			type: 'bar',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'New Cases',
          pointRadius: 0,
					backgroundColor: "rgba(255, 107, 105, 0.7)",
					borderColor: "rgba(255, 107, 105, 0.9)",
					data: dailyCaseChange,
					fill: true,
				}]
			},
			options: {
				responsive: true,
        maintainAspectRatio: false,  
        //aspectRatio: window.aspect,     
        legend: {
          display: false
        },
				title: {
					display: true,
					text: 'Daily New Cases in Maryland',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: 18,
				},
								tooltips: {
					mode: 'index',
					intersect: false,
          displayColors: false,
          titleFontSize: 16,
          bodyFontSize: 16,
          callbacks: {
            title: function(tooltipItem, data) {
              return data['labels'][tooltipItem[0]['index']];
            },
            label: function(tooltipItem, data) {
              return data['datasets'][0]['data'][tooltipItem['index']] + " new cases";
            }
          }
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
            offset:true,
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
              offsetGridLines: false,
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
      var ctx = document.getElementById('canvas2').getContext('2d');
			window.myBar = new Chart(ctx, config2);
		};

		var colorNames = Object.keys(window.chartColors);
    

    
