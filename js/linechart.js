// JavaScript Document


    //Pulling & Generating Data for Charts
    var caseNumbers = countiesData.features[24].properties.history;
    var deathNumbers = countiesData.features[24].properties.historydeaths;
    var recoveryNumbers = countiesData.features[24].properties.historyrecoveries;
    var negTestNumbers = countiesData.features[24].properties.historynegativetests;
    
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
    var intensiveHospNumbers = countiesData.features[24].properties.intensiveCare;
    var acuteHospNumbers = countiesData.features[24].properties.acuteCare;



    if($(window).width() <= 575) {
      window.aspect = 1.25;
      window.aspectShort = 1.25;
      window.aspectTemp = 1.43;
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
      window.barPercentStacked = .2;
      window.yAxisPaddingStacked = 0;
    } else {
      window.aspect = 1.5;
      window.aspectShort = 3.75;
      window.aspectTemp = 1.85;
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
      window.barPercentStacked = 1;
      window.yAxisPaddingStacked = 20;
    }


    //Linechart State Cumulative Config		
    var configCumul = {
			type: 'line',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'Cases',
					backgroundColor: colorCaseBackgroundLine,
          //"rgba(230, 84, 83, 0.4)",
          //"rgba(230, 84, 83, 1)",
					//borderColor: "rgba(255, 107, 105, 0.9)",
          borderColor: colorCaseBorderLine,
					data: caseNumbers,
          pointRadius: 1,
					pointHitRadius: 4,
          borderWidth: 2,
          hoverRadius: 3,
          hoverBorderWidth:2,
        hoverBorderColor:colorCaseHoverLine,
        hoverBackgroundColor:colorCaseHoverLine,
					fill: true,
				},
        {
					label: 'Deaths',
					backgroundColor: colorDeathBackgroundLine,
					borderColor: colorDeathBorderLine,
					data: deathNumbers,
          pointRadius: 1,
					pointHitRadius: 4,
          borderWidth: 2,
          hoverRadius: 3,
          hoverBorderWidth:2,
        hoverBorderColor:colorDeathHoverLine,
        hoverBackgroundColor:colorDeathHoverLine,
					fill: false,
				},
        {
					label: 'Recoveries',
					backgroundColor: colorRecoveryBackgroundLine,
					borderColor: colorRecoveryBorderLine,
					data: recoveryNumbers,         
          pointRadius: 1,
					pointHitRadius: 4,
          borderWidth: 2,
          hoverRadius: 3,
          hoverBorderWidth:2,
        hoverBorderColor:colorRecoveryHoverLine,
        hoverBackgroundColor:colorRecoveryHoverLine,
          fill: false,
				},
        {
					label: 'Neg Tests',
        backgroundColor: colorNegTestBackground,
        borderColor: colorNegTestBorder,
					data: negTestNumbers,         
          pointRadius: 1,
          borderWidth: 2,
					pointHitRadius: 4,
          hoverRadius: 3,
          hoverBorderWidth:2,
        hoverBorderColor:colorNegTestHover,
        hoverBackgroundColor:colorNegTestHover,
          fill: false,
          hidden:true,
				}]
			},
			options: {
				responsive: true,
        //maintainAspectRatio: false, 
        aspectRatio: window.aspectTemp, 
        title: {
					display: false,
					text: 'Cumulative Cases in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
          lineHeight: 1,
          padding:0,
				},   
        legend: {
          display: false,
        },
        legendCallback: 
          function(chart) { 
            var text = []; 
            text.push('<ul class="' + chart.id + '-legend">'); 
            for (var i = 0; i < chart.data.datasets.length; i++) { 
              //text.push('<li><span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>'); 
              if (chart.data.datasets[i].label) { 
                text.push('<li class="chart-legend-label-text legendItemCumul hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetCumul(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '"><span class="legendSquareCumul" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
              } 
              text.push('</li>'); 
            } 
            text.push('</ul>'); 
            return text.join(''); 
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
    
    updateDatasetCumul = function(e, datasetIndex) {
      var index = datasetIndex;
      var ciCumul = e.view.myLineCumul;
      var meta = ciCumul.getDatasetMeta(index);
      $('#legendContainerCumul li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");

      meta.hidden = meta.hidden === null? !ciCumul.data.datasets[index].hidden : null;

      // After hiding dataset, rerender the chart
      ciCumul.update();
    };
    
    

    //Barchart 1 Config
    var configDaily = {
			type: 'bar',
			data: {
				labels: caseTimeline,
				datasets: [{
					label: 'Cases',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: colorCaseBorder,
					backgroundColor: colorCaseBackground,
					data: dailyCaseChange,
          barPercentage: 1,
          categoryPercentage: 0.85,
				},
        {
					label: 'Deaths',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: colorDeathBorder,
					backgroundColor: colorDeathBackground,
					data: dailyDeathChange,
          barPercentage: 1,
          categoryPercentage: 0.85,
          hidden: true,
				},
        {
					label: 'Recoveries',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: colorRecoveryBorder,
					backgroundColor: colorRecoveryBackground,
					data: dailyRecoveryChange,
          barPercentage: 1,
          categoryPercentage: 0.85,
          hidden: true,
        },
//        {
//          type:'line',
//          label: '7 Day Avg',
//          data: avgMovingCaseChange,
//          pointRadius: 0,
//          borderWidth: 2,
//          borderColor: colorCaseAvgLine,
//          backgroundColor: colorCaseAvgLine,
//          fill:false,
//          lineTension:0.3,
//          hidden: true,
//        },
//        {
//          type:'line',
//          label: '7 Day Avg',
//          data: avgMovingDeathChange,
//          pointRadius: 0,
//          borderWidth: 2,
//          borderColor: colorDeathAvgLine,
//          backgroundColor: colorDeathAvgLine,
//          fill:false,
//          lineTension:0.3,
//          hidden: true,
//        },
//        {
//          type:'line',
//          label: '7 Day Avg',
//          data: avgMovingRecoveryChange,
//          pointRadius: 0,
//          borderWidth: 2,
//          borderColor: colorRecoveryAvgLine,
//          backgroundColor: colorRecoveryAvgLine,
//          fill:false,
//          lineTension:0.3,
//          hidden: true,
//        }
        ]
			},
			options: {
				responsive: true,
        aspectRatio: window.aspectTemp,
        //maintainAspectRatio: false,  //seems to break everything with the second chart for some reason
        title: {
					display: false,
					text: 'Daily New Cases in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
          lineHeight: 2,
          padding: 0,
				},
        legend: {
          display: false,
        },
        legendCallback: 
          function(chart) { 
            var text = []; 
            //text.push('<div id="boxToggleCntyDthOff"><a id="toggleCntyDthOff" href="javascript:void(0);" onclick="updateDatasetsDth(event)">All Off</a></div><ul class="' + chart.id + '-legend">'); 
            text.push('<ul class="' + chart.id + '-legend">'); 
            for (var i = 0; i < chart.data.datasets.length; i++) { 
              //text.push('<li><span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>'); 
              if (chart.data.datasets[i].label) { 
                text.push('<li class="chart-legend-label-text legendItemDaily hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetDaily(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '"><span class="legendSquareDaily" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
              } 
              text.push('</li>'); 
            } 
            text.push('</ul>'); 
            return text.join(''); 
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

    updateDatasetDaily = function(e, datasetIndex) {
      var index = datasetIndex;
      var ciDaily = e.view.myBarDaily;
      var meta = ciDaily.getDatasetMeta(index);
      $('#legendContainerDaily li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");

      meta.hidden = meta.hidden === null? !ciDaily.data.datasets[index].hidden : null;

      // After hiding dataset, rerender the chart
      ciDaily.update();
    };

    //Linechart Hospitalizations Config		
    var configHosp = {
      type: 'line',
      data: {
        labels: caseTimeline,
        datasets: [
  //      {
  //        label: 'Now Hospitalized',
  //        backgroundColor: colorNowHospBackground,
  //        borderColor: colorNowHospBorder,
  //        data: historyNowHosp,
  //        pointRadius: 1,
  //        pointHitRadius: 4,
  //        borderWidth: 2,
  //        hoverRadius: 5,
  //        hoverBorderWidth:3,
  //        hoverBorderColor:colorNowHospHover,
  //        fill: true,
  //        lineTension: 0.1,
  //        //order:3,
  //      },
        {
          label: 'Acute Care',
          backgroundColor: colorAcuteBackground,
          borderColor: colorAcuteBorder,
          data: historyAcute,
          pointRadius: 1,
					pointHitRadius: 4,
          borderWidth: 2,
          hoverRadius: 3,
          hoverBorderWidth:2,
          hoverBorderColor:colorAcuteHover,
          fill: true,
          lineTension: 0.1,
          order:2,
        },
        {
          label: 'Intensive Care',
          backgroundColor: colorIntensiveBackground,
          borderColor: colorIntensiveBorder,
          data: historyIntensive,         
          pointRadius: 1,
					pointHitRadius: 4,
          borderWidth: 1.5,
          hoverRadius: 3,
          hoverBorderWidth:2,
          hoverBorderColor:colorIntensiveHover,
          fill: true,
          lineTension: 0.1,
          order:1,
        },
  //      {
  //        label: 'Ever Hospitalized',
  //        backgroundColor: colorEverHospBackground,
  //        borderColor: colorEverHospBorder,
  //        data: historyEverHosp,         
  //        pointRadius: 1,
  //        pointHitRadius: 4,
  //        borderWidth: 2,
  //        hoverRadius: 5,
  //        hoverBorderWidth:3,
  //        hoverBorderColor:colorEverHospHover,
  //        fill: true,
  //        lineTension: 0.1,
  //        //order:1,
  //      }
        ]
      },
      options: {
        responsive: true,
        aspectRatio: window.aspect,
        //maintainAspectRatio: false,  //seems to break everything with the second chart for some reason 
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
        title: {
          display: true,
          text: 'Current Hospitalizations in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
          lineHeight: 1,
          padding:0,
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
          callbacks: {
            title: function() {},
            label: function(tooltipItem, data) {
              // Thanks to Tektiv on SO for this callback (https://stackoverflow.com/questions/39373561/how-get-sum-of-total-values-in-stackedbar-chartjs)
              var count = data.datasets[tooltipItem.datasetIndex].label;
              var index = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

              // Loop through all datasets to get the actual total of the index
              var total = 0;
              for (var i = 0; i < data.datasets.length; i++)
                  total += data.datasets[i].data[tooltipItem.index];

              // If it is not the last dataset, you display it as you usually do
              if (tooltipItem.datasetIndex != data.datasets.length - 1) {
                  return count + ": " + index;
              } else { // .. else, you display the dataset and the total, using an array
                  return [count + ": " + index, "Total: " + total];
              }
            }
          },
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
            offset:false,
            scaleLabel: {display: false,},
            ticks:{
              fontColor: "#fff",
              fontSize: window.xAxisFontSize,
              autoSkip: true,
              minRotation:window.xAxisMinRotation,
              maxRotation:window.xAxisMaxRotation,
              autoSkipPadding: 60,
            },
            gridLines:{
              color:"rgba(255,255,255,0.1)",
              zeroLineColor: "rgba(255,255,255,0.02)",
            }
          }],
          yAxes: [{
            display: true,
            stacked: true,
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


    window.onload = function generateCharts() {
			var ctx = document.getElementById('canvasCumul').getContext('2d');
			window.myLineCumul = new Chart(ctx, configCumul);
      document.getElementById("legendContainerCumul").innerHTML = myLineCumul.generateLegend();
      var legendItems = legendContainerCumul.getElementsByTagName('li');
      
      var ctx = document.getElementById('canvasDaily').getContext('2d');
			window.myBarDaily = new Chart(ctx, configDaily);
      document.getElementById("legendContainerDaily").innerHTML = myBarDaily.generateLegend();
      var legendItems = legendContainerDaily.getElementsByTagName('li');
      
      var ctx = document.getElementById('canvasHosp').getContext('2d');
			window.myBar2 = new Chart(ctx, configHosp);
		};
		

    
   

		//var colorNames = Object.keys(window.chartColors);
    

    
