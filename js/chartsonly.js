// JavaScript Document
    latestData();

    //Pulling & Generating Data for Charts
    var caseNumbers = countiesData.features[24].properties.history;
    var deathNumbers = countiesData.features[24].properties.historydeaths;
    var recoveryNumbers = countiesData.features[24].properties.historyrecoveries;

    // Timeline data (dates) to use for x-axes
    var caseTimeline = countiesData.features[24].properties.dates;


    // Function to calculate sequential difference between values in array
    function diff(ary) {
      var newA = [];
      for (var i = 1; i < ary.length; i++)  newA.push(ary[i] - ary[i - 1])
      return newA;
    }
    
      // Calculating daily change in Recoveries
      var dailyCaseChange = diff(caseNumbers);
      var adjDailyCaseChange = dailyCaseChange.unshift(1);
      
      // Calculating daily change in deaths
      var dailyDeathChange = diff(deathNumbers);
      var adjDailyDeathChange = dailyDeathChange.unshift(1);
      
      // Calculating daily change in Recoveries
      var dailyRecoveryChange = diff(recoveryNumbers);
      var adjDailyRecoveryChange = dailyRecoveryChange.unshift(1);


    // Checking window width and changing parameters accordingly
    if($(window).width() <= 575) {
      //window.aspect = 1.25;
      window.legendFontSize = 12;
      window.titleFontSize = 18;
      window.xAxisFontSize = 12;
      window.yAxisFontSize = 12;
    } else {
      //window.aspect = 1.5;
      window.legendFontSize = 14;
      window.titleFontSize = 22;
      window.xAxisFontSize = 14;
      window.yAxisFontSize = 14;
    }

    //Linechart 1 Config		
    var config = {
			type: 'line',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'Cases',
					backgroundColor: "rgba(255, 107, 105, 0.5)",
					borderColor: "rgba(255, 107, 105, 0.9)",
					data: caseNumbers,
          pointRadius: 2,
					pointHitRadius: 5,
          hoverRadius: 5,
          hoverBorderWidth:3,
          hoverBorderColor:"rgba(255, 127, 125, 1)",
					fill: true,
          lineTension: 0.1,
				},
        {
					label: 'Deaths',
					backgroundColor: "rgba(245,153,34,.6)",
					borderColor: "rgba(245,153,34,.9)",
					data: deathNumbers,
          pointRadius: 2,
					pointHitRadius: 5,
          hoverRadius: 5,
          hoverBorderWidth:3,
          hoverBorderColor:"rgba(255,173,54,1.00)",
					fill: true,
          lineTension: 0.1,
				},
        {
					label: 'Recoveries',
					backgroundColor: "rgba(31,173,37,.7)",
					borderColor: "rgba(31,173,37,1.00)",
					data: recoveryNumbers,         
          pointRadius: 2,
					pointHitRadius: 5,
          hoverRadius: 5,
          hoverBorderWidth:3,
          hoverBorderColor:"rgba(51,193,57,1.00)",
          fill: true,
          lineTension: 0.1,
				}]
			},
			options: {
				responsive: true,
        maintainAspectRatio: false,  
        //aspectRatio: window.aspect,     
        legend: {
          display: true,
          position: "top",
          align: "center",
          fullWidth: true,
          labels:{
           boxWidth: 13,
           boxHeight: 11,
           fontColor: "#fafafa",
           fontSize: window.legendFontSize,
          },
        },
				title: {
					display: true,
					text: 'Cumulative Cases in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
				},
				tooltips: {
          enabled: true, 
          mode: 'label',
          displayColors:false,
          titleFontSize: 14,
          bodyFontSize: 14,
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
                  unitStepSize: 4,          
              },
						display: true,
						scaleLabel: {
							display: false,
							labelString: 'Date'
						},
            ticks:{
              fontColor: "#fff",
              fontSize: window.xAxisFontSize,
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
              fontSize: window.yAxisFontSize,
            },
            gridLines:{
              color:"rgba(255,255,255,0.1)"
            }
					}],

				}
			}
		};

    //Barchart Daily Cases Config
    var config2 = {
			type: 'bar',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'Cases per Day',
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
          display: true,
          position: "top",
          align: "center",
          fullWidth: true,
          labels:{
           boxWidth: 13,
           boxHeight: 11,
           fontColor: "#fafafa",
           fontSize: window.legendFontSize,
          },
        },
				title: {
					display: true,
					text: 'Daily New Cases in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
				},
        tooltips: {
          enabled: true, 
          mode: 'label',
          displayColors:false,
          titleFontSize: 14,
          bodyFontSize: 14,
          position:'average',
          xalign: 'right',
          yalign:'none',
          intersect:false,
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
                  unit: 'day',
                  unitStepSize: 4,          
              },
						display: true,
            scaleLabel: {
							display: false,
							labelString: 'Date'
						},
            ticks:{
              fontColor: "#fff",
              fontSize: window.xAxisFontSize,
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
              fontSize: window.yAxisFontSize,
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

    //Bar Chart Daily Deaths Config
    var configDth = {
			type: 'bar',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'Deaths per Day',
          pointRadius: 0,
					backgroundColor: "rgba(245,153,34,.9)",
					borderColor: "rgba(245,153,34,.9)",
					data: dailyDeathChange,
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
          align: "center",
          fullWidth: true,
          labels:{
           boxWidth: 13,
           boxHeight: 11,
           fontColor: "#fafafa",
           fontSize: window.legendFontSize,
          },
        },
				title: {
					display: true,
					text: 'Daily New Deaths in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
				},
				tooltips: {
          enabled: true, 
          mode: 'label',
          displayColors:false,
          titleFontSize: 14,
          bodyFontSize: 14,
          position:'average',
          xalign: 'right',
          yalign:'none',
          intersect:false,
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
                  unit: 'day',
                  unitStepSize: 4,          
              },
						display: true,
            scaleLabel: {
							display: false,
							labelString: 'Date'
						},
            ticks:{
              fontColor: "#fff",
              fontSize: window.xAxisFontSize,
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
              fontSize: window.yAxisFontSize,
              //stepSize:"1000",
            },
            gridLines:{
              color:"rgba(255,255,255,0.1)"
            }
					}],

				}
			}
		};
    
    //Bar Chart Daily Recoveries Config
    var configRec = {
			type: 'bar',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'Recoveries per Day',
          pointRadius: 0,
					backgroundColor: "rgba(31,173,37,0.8)",
					borderColor: "rgba(31,173,37,0.8)",
					data: dailyRecoveryChange,
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
          align: "center",
          fullWidth: true,
          labels:{
           boxWidth: 13,
           boxHeight: 11,
           fontColor: "#fafafa",
           fontSize: window.legendFontSize,
          },
        },
				title: {
					display: true,
					text: 'Daily New Recoveries in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
				},
        tooltips: {
          enabled: true, 
          mode: 'label',
          displayColors:false,
          titleFontSize: 14,
          bodyFontSize: 14,
          position:'average',
          xalign: 'right',
          yalign:'none',
          intersect:false,
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
                  unit: 'day',
                  unitStepSize: 4,          
              },
						display: true,
            scaleLabel: {
							display: false,
							labelString: 'Date'
						},
            ticks:{
              fontColor: "#fff",
              fontSize: window.xAxisFontSize,
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
              fontSize: window.yAxisFontSize,
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
      var ctx = document.getElementById('canvasDth').getContext('2d');
			window.myBar = new Chart(ctx, configDth);
      var ctx = document.getElementById('canvasRec').getContext('2d');
			window.myBar = new Chart(ctx, configRec);
		};


    

    
