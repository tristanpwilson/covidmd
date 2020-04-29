// JavaScript Document


    //Pulling & Generating Data for Charts
    var caseNumbers = countiesData.features[24].properties.history;
    var deathNumbers = countiesData.features[24].properties.historydeaths;
    var recoveryNumbers = countiesData.features[24].properties.historyrecoveries;
    
    var caseTimeline = countiesData.features[24].properties.dates;
    
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
    
    var nowHospNumbers = countiesData.features[24].properties.nowHospitalized;
    var everHospNumbers = countiesData.features[24].properties.everHospitalized;
    var intensiveHospNumbers = countiesData.features[24].properties.acuteCare;
    var acuteHospNumbers = countiesData.features[24].properties.intensiveCare;



    if($(window).width() <= 575) {
      window.aspect = 1.25;
      window.legendFontSize = 12;
      window.titleFontSize = 15;
      window.xAxisFontSize = 9;
      window.xAxisMinRotation = 89.9;
      window.xAxisMaxRotation = 90;
      window.xAxisPosition = 'top';
      window.xAxisMirror = true;
      window.yAxisFontSize = 9;
      window.yAxisTickDisplay = false;
      window.yAxisTickMirror = true;
    } else {
      window.aspect = 1.5;
      window.legendFontSize = 14;
      window.titleFontSize = 16;
      window.xAxisFontSize = 9;
      window.xAxisMinRotation = -0.1;
      window.xAxisMaxRotation = 0;
      window.xAxisPosition = 'bottom';
      window.xAxisMirror = false;
      window.yAxisFontSize = 9;
      window.yAxisTickDisplay = true;
      window.yAxisTickMirror = false;
    }


    //Linechart 1 Config		
    var config = {
			type: 'line',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'Cases',
					backgroundColor: "rgba(230, 84, 83, 0.4)",
					//borderColor: "rgba(255, 107, 105, 0.9)",
          borderColor: "rgba(230, 84, 83, 0.9)",
					data: caseNumbers,
          pointRadius: 2,
					pointHitRadius: 4,
          hoverRadius: 3,
          hoverBorderWidth:2,
          hoverBorderColor:"rgba(255, 127, 125, 1)",
					fill: true,
				},
        {
					label: 'Deaths',
					backgroundColor: "rgba(245,153,34,.5)",
					borderColor: "rgba(245,153,34,.9)",
					data: deathNumbers,
          pointRadius: 2,
					pointHitRadius: 4,
          hoverRadius: 3,
          hoverBorderWidth:2,
          hoverBorderColor:"rgba(255,173,54,1.00)",
					fill: true,
				},
        {
					label: 'Recoveries',
					backgroundColor: "rgba(31,173,37,.5)",
					borderColor: "rgba(31,173,37,1.00)",
					data: recoveryNumbers,         
          pointRadius: 2,
					pointHitRadius: 4,
          hoverRadius: 3,
          hoverBorderWidth:2,
          hoverBorderColor:"rgba(51,193,57,1.00)",
          fill: true,
				}]
			},
			options: {
				responsive: true,
        //maintainAspectRatio: false, 
        aspectRatio: window.aspect, 
        title: {
					display: true,
					text: 'Cumulative Cases in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
          lineHeight: 1,
          padding:0,
				},   
        legend: {
          display: true,
          position: "top",
          align: "center",
          fullWidth: true,
          labels:{
           usePointStyle: true,
           boxWidth: 8,
           //boxHeight: 8,
           fontColor: "#fafafa",
           fontSize: window.legendFontSize,
          },
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
              //unitStepSize: 4,
            },
						display: true,
						scaleLabel: {display: false,},
            ticks:{
              fontColor: "#fff",
              fontSize: window.xAxisFontSize,
              autoSkip: true,
              minRotation:window.xAxisMinRotation,
              maxRotation:window.xAxisMaxRotation,
              autoSkipPadding: 40,
            },
            gridLines:{color:"rgba(255,255,255,0.1)"}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {display: false,},
            ticks:{
              mirror: window.yAxisTickMirror,
              fontColor: "#fff",
              fontSize: window.yAxisFontSize,
              autoSkip: true,
              maxRotation: 0,
              autoSkipPadding: 30,
            },
            afterTickToLabelConversion: function(scaleInstance) { // set the first tick (0) to null so it does not display
              scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;
              scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
            },
            gridLines:{
              color:"rgba(255,255,255,0.1)",
              drawTicks: window.yAxisTickDisplay,
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
					label: 'Cases',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: "rgba(255, 107, 105, 0.8)",
					backgroundColor: "rgba(255, 107, 105, 0.8)",
					data: dailyCaseChange,
          barPercentage: 1,
          categoryPercentage: 0.85,
				},
        {
					label: 'Deaths',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: "rgba(245,153,34,.9)",
					backgroundColor: "rgba(245,153,34,.9)",
					data: dailyDeathChange,
          barPercentage: 1,
          categoryPercentage: 0.85,
          hidden: true,
				},
        {
					label: 'Recoveries',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: "rgba(31,173,37,0.8)",
					backgroundColor: "rgba(31,173,37,0.8)",
					data: dailyRecoveryChange,
          barPercentage: 1,
          categoryPercentage: 0.85,
          hidden: true,
        }]
			},
			options: {
				responsive: true,
        aspectRatio: window.aspect,
        //maintainAspectRatio: false,  //seems to break everything with the second chart for some reason
        title: {
					display: true,
					text: 'Daily New Cases in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
          lineHeight: 1,
          padding: 0,
				},
        legend: {
          display: true,
          position: "top",
          align: "center",
          fullWidth: true,
          labels:{
           boxWidth: 12,
           boxHeight: 4,
           fontColor: "#fafafa",
           fontSize: window.legendFontSize,
          },
        },
				tooltips: {
          enabled: true, 
          mode: 'label',
          displayColors:false,
          position:'average',
          xalign: 'right',
          yalign:'none',
          intersect:true,
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
              //unitStepSize: 4,
            },
						display: true,
						scaleLabel: {display: false,},
            ticks:{
              fontColor: "#fff",
              fontSize: window.xAxisFontSize,
              autoSkip: true,
              minRotation:window.xAxisMinRotation,
              maxRotation:window.xAxisMaxRotation,
              autoSkipPadding: 40,
            },
            gridLines:{
              color:"rgba(255,255,255,0.1)",
            }
					}],
					yAxes: [{
						display: true,
						scaleLabel: {display: false,},
            ticks:{
              mirror: window.yAxisTickMirror,
              fontColor: "#fff",
              fontSize: window.yAxisFontSize,
              autoSkip: true,
              maxRotation: 0,
              autoSkipPadding: 30,
            },
            afterTickToLabelConversion: function(scaleInstance) { // set the first tick (0) to null so it does not display
              scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;
              scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
            },
            gridLines:{
              color:"rgba(255,255,255,0.1)",
              drawBorder:false,
              drawTicks: window.yAxisTickDisplay,
            }
					}],

				}
			}
		};

//    Barchart Hospitalizations Config
//    var configHosp = {
//			type: 'bar',
//			data: {
//				labels: ['Current Hospitalizations', 'Total Hospitalizations', 'Intensive Care', 'Acute Care'],
//				datasets: [{
//					label: 'Currently Hospitalized',
//          pointRadius: 0,
//          borderWidth: 2,
//          borderColor: "rgba(255, 107, 105, 0.8)",
//					backgroundColor: "rgba(255, 107, 105, 0.8)",
//					data: [nowHospNumbers, everHospNumbers, intensiveHospNumbers, acuteHospNumbers],
//          barPercentage: 1,
//          categoryPercentage: 0.85,
//				}]
//			},    
//			options: {
//				responsive: true,
//        aspectRatio: window.aspect, 
//        //aspectRatio: window.aspect,     
//        title: {
//					display: true,
//					text: 'Daily New Cases in MD',
//          fontColor: "#fff",
//          fontFamily: "Work Sans",
//          fontSize: 12,
//				},
//        legend: {
//          display: true,
//          position: "top",
//          align: "center",
//          fullWidth: true,
//          labels:{
//           boxWidth: 13,
//           //boxHeight: 16,
//           fontColor: "#fafafa",
//           fontSize: 12,
//          },
//        },
//        tooltips: {
//          enabled: true, 
//          mode: 'label',
//          displayColors:false,
//          titleFontSize: 14,
//          bodyFontSize: 14,
//          position:'average',
//          xalign: 'right',
//          yalign:'none',
//          intersect:true,
//        },
//				hover: {
//					mode: 'nearest',
//					intersect: true
//				},
//				scales: {
//					xAxes: [{
//            offset:true,
//            type: 'category',
//						display: true,
//						scaleLabel: {display: false,},
//            ticks:{
//              fontColor: "#fff",
//              fontSize: 12,
//              autoSkip: false,
//              maxRotation:0,
//              autoSkipPadding: 60,
//            },
//            gridLines:{color:"rgba(255,255,255,0.1)"}
//					}],
//					yAxes: [{
//						display: true,
//						scaleLabel: {display: false,},
//            ticks:{
//              mirror: false,
//              fontColor: "#fff",
//              fontSize: 12,
//              autoSkip: true,
//              maxRotation: 0,
//              autoSkipPadding: 30,
//            },
//            gridLines:{
//              color:"rgba(255,255,255,0.1)",
//              drawBorder:false,
//              drawTicks: true,
//              tickMarkLength:0,
//            }
//					}],
//
//				}
//			}
//		};


    window.onload = function generateCharts() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
      var ctx = document.getElementById('canvas2').getContext('2d');
			window.myBar = new Chart(ctx, config2);
      //var ctx = document.getElementById('canvasHosp').getContext('2d');
			//window.myBar2 = new Chart(ctx, configHosp);
		};
		

    
   

		//var colorNames = Object.keys(window.chartColors);
    

    
