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
          mode: 'index',
          displayColors:true,
          multiKeyBackground:'rgba(0,0,0,0)',
          titleFontSize: 12,
          bodyFontSize: 12,
          footerFontSize:12,
          xalign: 'right',
          yalign:'top',
          intersect:false,
          callbacks: {
            labelColor: function(tooltipItem, chart) {
              var dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
              return {
                  borderColor: 'rgba(255, 0, 0, 0)',
                  backgroundColor : dataset.borderColor
              }
            },
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
				datasets: [
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
//        },
        {
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
        }]
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
          mode: 'index',
          displayColors:true,
          multiKeyBackground:'rgba(0,0,0,0)',
          titleFontSize: 12,
          bodyFontSize: 12,
          xalign: 'right',
          yalign:'top',
          intersect:false,
          callbacks: {
            labelColor: function(tooltipItem, chart) {
              var dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
              return {
                  borderColor: 'rgba(255, 0, 0, 0)',
                  backgroundColor : dataset.backgroundColor
              }
            },
          },
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
      //var indexPlusThree = datasetIndex + 3;
      var ciDaily = e.view.myBarDaily;
      var meta = ciDaily.getDatasetMeta(index);
      
      //Chack data-legend value (index) and then toggle that dataset
      $('#legendContainerDaily li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");
      
      //if( $('#legendContainerDaily li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");){
      //}
      //alert(indexPlusThree);
      
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
          //order:1,
        },
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
          //order:2,
        }
        ]
      },
      options: {
        responsive: true,
        aspectRatio: window.aspectTemp,
        //maintainAspectRatio: false,  //seems to break everything with the second chart for some reason 
        legend: {
          display: false,
        },
        legendCallback: 
          function(chart) { 
            var text = []; 
            text.push('<ul class="' + chart.id + '-legend">'); 
            for (var i = 0; i < chart.data.datasets.length; i++) { 
              if (chart.data.datasets[i].label) { 
                text.push('<li class="chart-legend-label-text legendItemHosp hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetHosp(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '"><span class="legendSquareHosp" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
              } 
              text.push('</li>'); 
            } 
            text.push('</ul>'); 
            return text.join(''); 
        },
        title: {
          display: false,
          text: 'Current Hospitalizations in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
          lineHeight: 1,
          padding:0,
        },   
        tooltips: {
          enabled: true, 
          mode: 'index',
          displayColors:true,
          multiKeyBackground:'rgba(0,0,0,0)',
          titleFontSize: 12,
          bodyFontSize: 12,
          footerFontSize:12,
          xalign: 'right',
          yalign:'top',
          intersect:false,
          callbacks: {
            title: function(tooltipItem, data) {
              return data['labels'][tooltipItem[0]['index']];
            },
            labelColor: function(tooltipItem, chart) {
              var dataset = chart.config.data.datasets[tooltipItem.datasetIndex];

              return {
                  borderColor: 'rgba(255, 0, 0, 0)',
                  backgroundColor : dataset.borderColor
              }
            },
            footer: function(tooltipItems, data) {
              var total = 0;
              tooltipItems.forEach(function(tooltipItem) {
                total += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
              });
              return "Current Total: " + total;
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

    updateDatasetHosp = function(e, datasetIndex) {
      var index = datasetIndex;
      //var indexPlusThree = datasetIndex + 3;
      var ciHosp = e.view.myLineHosp;
      var meta = ciHosp.getDatasetMeta(index);
      
      //Chack data-legend value (index) and then toggle that dataset
      $('#legendContainerHosp li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");
      
      meta.hidden = meta.hidden === null? !ciHosp.data.datasets[index].hidden : null;
      
      // After hiding dataset, rerender the chart
      ciHosp.update();
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
			window.myLineHosp = new Chart(ctx, configHosp);
      document.getElementById("legendContainerHosp").innerHTML = myLineHosp.generateLegend();
      var legendItems = legendContainerHosp.getElementsByTagName('li');
		};
		

    
   

		//var colorNames = Object.keys(window.chartColors);
    

    
