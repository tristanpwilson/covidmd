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


    var caseCnty0 = countiesData.features[0].properties.history;
    var caseCnty1 = countiesData.features[1].properties.history;
    var caseCnty2 = countiesData.features[2].properties.history;
    var caseCnty3 = countiesData.features[3].properties.history;
    var caseCnty4 = countiesData.features[4].properties.history;
    var caseCnty5 = countiesData.features[5].properties.history;
    var caseCnty6 = countiesData.features[6].properties.history;
    var caseCnty7 = countiesData.features[7].properties.history;
    var caseCnty8 = countiesData.features[8].properties.history;
    var caseCnty9 = countiesData.features[9].properties.history;
    var caseCnty10 = countiesData.features[10].properties.history;
    var caseCnty11 = countiesData.features[11].properties.history;
    var caseCnty12 = countiesData.features[12].properties.history;
    var caseCnty13 = countiesData.features[13].properties.history;
    var caseCnty14 = countiesData.features[14].properties.history;
    var caseCnty15 = countiesData.features[15].properties.history;
    var caseCnty16 = countiesData.features[16].properties.history;
    var caseCnty17 = countiesData.features[17].properties.history;
    var caseCnty18 = countiesData.features[18].properties.history;
    var caseCnty19 = countiesData.features[19].properties.history;
    var caseCnty20 = countiesData.features[20].properties.history;
    var caseCnty21 = countiesData.features[21].properties.history;
    var caseCnty22 = countiesData.features[22].properties.history;
    var caseCnty23 = countiesData.features[23].properties.history;

    var nameCnty0 = countiesData.features[0].properties.name;
    var nameCnty1 = countiesData.features[1].properties.name;
    var nameCnty2 = countiesData.features[2].properties.name;
    var nameCnty3 = countiesData.features[3].properties.name;
    var nameCnty4 = countiesData.features[4].properties.name;
    var nameCnty5 = countiesData.features[5].properties.name;
    var nameCnty6 = countiesData.features[6].properties.name;
    var nameCnty7 = countiesData.features[7].properties.name;
    var nameCnty8 = countiesData.features[8].properties.name;
    var nameCnty9 = countiesData.features[9].properties.name;
    var nameCnty10 = countiesData.features[10].properties.name;
    var nameCnty11 = countiesData.features[11].properties.name;
    var nameCnty12 = countiesData.features[12].properties.name;
    var nameCnty13 = countiesData.features[13].properties.name;
    var nameCnty14 = countiesData.features[14].properties.name;
    var nameCnty15 = countiesData.features[15].properties.name;
    var nameCnty16 = countiesData.features[16].properties.name;
    var nameCnty17 = countiesData.features[17].properties.name;
    var nameCnty18 = countiesData.features[18].properties.name;
    var nameCnty19 = countiesData.features[19].properties.name;
    var nameCnty20 = countiesData.features[20].properties.name;
    var nameCnty21 = countiesData.features[21].properties.name;
    var nameCnty22 = countiesData.features[22].properties.name;
    var nameCnty23 = countiesData.features[23].properties.name;

    var colorCnty0 = '#6B213D';
    var colorCnty1 = '#792669';
    var colorCnty2 = '#862C86';
    var colorCnty3 = '#6D3293';
    var colorCnty4 = '#4A38A1';
    var colorCnty5 = '#3F5BAE';
    var colorCnty6 = '#4694BC';
    var colorCnty7 = '#4DC9C9';
    var colorCnty8 = '#54D7AB';
    var colorCnty9 = '#5CE47F';
    var colorCnty10 = '#77F264';
    var colorCnty11 = '#B7FF6C';
    var colorCnty12 = '#D0FF68';
    var colorCnty13 = '#EBFF65';
    var colorCnty14 = '#FFFF61';
    var colorCnty15 = '#FFFF5E';
    var colorCnty16 = '#FFE65A';
    var colorCnty17 = '#FFCA57';
    var colorCnty18 = '#FFAD54';
    var colorCnty19 = '#FF8D51';
    var colorCnty20 = '#FF6A4F';
    var colorCnty21 = '#FF4C52';
    var colorCnty22 = '#FF4973';
    var colorCnty23 = '#FF4973';

    // Checking window width and changing parameters accordingly
    if($(window).width() <= 575) {
      window.legendFontSize = 12;
      window.titleFontSize = 18;
      window.xAxisFontSize = 12;
      window.yAxisFontSize = 12;
      window.legendPaddingCnty = 14;
      window.legendPositionCnty = "bottom";
    } else {
      window.legendFontSize = 14;
      window.titleFontSize = 22;
      window.xAxisFontSize = 14;
      window.yAxisFontSize = 14;
      window.legendPaddingCnty = 5;
      window.legendPositionCnty = "left";
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
					data: dailyCaseChange,
          barPercentage: 1,
          categoryPercentage: 0.8,
				},
        {
					label: 'Deaths',
          pointRadius: 0,
					backgroundColor: "rgba(245,153,34,.9)",
					data: dailyDeathChange,
          barPercentage: 1,
          categoryPercentage: 0.8,
          hidden: true,
				},
        {
					label: 'Recoveries',
          pointRadius: 0,
					backgroundColor: "rgba(31,173,37,0.8)",
					data: dailyRecoveryChange,
          barPercentage: 1,
          categoryPercentage: 0.8,
          hidden: true,
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


    
//                                                        pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill: true, lineTension: 0.1,
//                                                      };

    //Bar Chart For Cases by County
    var configCnty = {
			type: 'line',
			data: {
				labels: caseTimeline,
				datasets: 
        [{
          data: caseCnty0,
					label: nameCnty0,
					borderColor: colorCnty0,
          hoverBorderColor:colorCnty0,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
					data: caseCnty1,
					label: nameCnty1,
					borderColor: colorCnty1,
          hoverBorderColor:colorCnty1,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
          data: caseCnty2,
					label: nameCnty2,
					borderColor: colorCnty2,
          hoverBorderColor:colorCnty2,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty3,
					label: nameCnty3,
					borderColor: colorCnty3,
          hoverBorderColor:colorCnty3,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty4,
					label: nameCnty4,
					borderColor: colorCnty4,
          hoverBorderColor:colorCnty4,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
          data: caseCnty5,
					label: nameCnty5,
					borderColor: colorCnty5,
          hoverBorderColor:colorCnty5,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
					data: caseCnty6,
					label: nameCnty6,
					borderColor: colorCnty6,
          hoverBorderColor:colorCnty6,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty7,
					label: nameCnty7,
					borderColor: colorCnty7,
          hoverBorderColor:colorCnty7,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
          data: caseCnty8,
					label: nameCnty8,
					borderColor: colorCnty8,
          hoverBorderColor:colorCnty8,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty9,
					label: nameCnty9,
					borderColor: colorCnty9,
          hoverBorderColor:colorCnty9,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
					data: caseCnty10,
					label: nameCnty10,
					borderColor: colorCnty10,
          hoverBorderColor:colorCnty10,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty11,
					label: nameCnty11,
					borderColor: colorCnty11,
          hoverBorderColor:colorCnty11,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
					data: caseCnty12,
					label: nameCnty12,
					borderColor: colorCnty12,
          hoverBorderColor:colorCnty12,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty13,
					label: nameCnty13,
					borderColor: colorCnty13,
          hoverBorderColor:colorCnty13,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty14,
					label: nameCnty14,
					borderColor: colorCnty14,
          hoverBorderColor:colorCnty14,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
					data: caseCnty15,
					label: nameCnty15,
					borderColor: colorCnty15,
          hoverBorderColor:colorCnty15,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty16,
					label: nameCnty16,
					borderColor: colorCnty16,
          hoverBorderColor:colorCnty16,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty17,
					label: nameCnty17,
					borderColor: colorCnty17,
          hoverBorderColor:colorCnty17,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
					data: caseCnty18,
					label: nameCnty18,
					borderColor: colorCnty18,
          hoverBorderColor:colorCnty18,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty19,
					label: nameCnty19,
					borderColor: colorCnty19,
          hoverBorderColor:colorCnty19,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
					data: caseCnty20,
					label: nameCnty20,
					borderColor: colorCnty20,
          hoverBorderColor:colorCnty20,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
          hidden: true,
				},
        {
					data: caseCnty21,
					label: nameCnty21,
					borderColor: colorCnty21,
          hoverBorderColor:colorCnty21,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty22,
					label: nameCnty22,
					borderColor: colorCnty22,
          hoverBorderColor:colorCnty22,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
				},
        {
					data: caseCnty23,
					label: nameCnty23,
					borderColor: colorCnty23,
          hoverBorderColor:colorCnty23,
          pointRadius: 2, pointHitRadius: 5, hoverRadius: 5, hoverBorderWidth:3, fill: false, lineTension: 0.1,
          hidden: true,
				},]
			},
			options: {
				responsive: true,
        maintainAspectRatio: false,  
        //aspectRatio: window.aspectCnty,     
        legend: {
          display: true,
          position: window.legendPositionCnty,
          align: "start",
          fullWidth: true,
          labels:{
           boxWidth: 13,
           boxHeight: 11,
           fontColor: "#fafafa",
           fontSize: window.legendFontSize,
           padding:window.legendPaddingCnty,
          },
        },
				title: {
					display: true,
					text: 'Cumulative Cases per County',
          //text: ['Cumulative Cases per County', '(Select to Show/Hide)'],
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
				},
				tooltips: {
          enabled: true, 
          mode: 'nearest',
          displayColors:true,
          titleFontSize: 14,
          bodyFontSize: 14,
          position:'nearest',
          xalign: 'right',
          yalign:'none',
          intersect:false,
         },       
				hover: {
					mode: 'nearest',
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

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
      var ctx = document.getElementById('canvas2').getContext('2d');
			window.myBar = new Chart(ctx, config2);
      var ctx = document.getElementById('canvasDth').getContext('2d');
			window.myBar = new Chart(ctx, configDth);
      var ctx = document.getElementById('canvasRec').getContext('2d');
			window.myBar = new Chart(ctx, configRec);
      
      var ctx = document.getElementById('canvasCnty').getContext('2d');
			window.myLineMulti = new Chart(ctx, configCnty);
		};
    
//window.myLineMulti.defaults.data.datasets.line.fill = false;
//window.configCnty.defaults.data.datasets.line.lineTension = 0.1;
//window.configCnty.defaults.global.data.datasets.pointRadius = 2;
//window.configCnty.defaults.global.data.datasets.pointHitRadius = 5;
//window.myLineMulti.defaults.global.datasets.line.hoverRadius = 5;
//window.myLineMulti.defaults.global.data.datasets.hoverBorderWidth = 3;

    

    
