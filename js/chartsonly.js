// JavaScript Document
    latestData();


  

  // Checking window width and changing parameters accordingly (still can't get this to work dynamically on resize - only page load)
  if($(window).width() <= 575) {
    window.legendFontSize = 14;
    window.titleFontSize = 18;
    window.xAxisFontSize = 12;
    window.xAxisMinRotation = 89.9;
    window.xAxisMaxRotation = 90;
    window.yAxisFontSize = 12;
    window.yAxisTickDisplay = false;
    window.yAxisTickMirror = true;
    window.legendPaddingCnty = 14;
    window.legendPositionCnty = "bottom";
    window.legendAlignCnty = "start";
  } else {
    window.legendFontSize = 15;
    window.titleFontSize = 22;
    window.xAxisFontSize = 14;
    window.xAxisMinRotation = -0.1;
    window.xAxisMaxRotation = 0;
    window.yAxisFontSize = 14;
    window.yAxisTickDisplay = true;
    window.yAxisTickMirror = false;
    window.legendPaddingCnty = 10;
    window.legendPositionCnty = "left";
    window.legendAlignCnty = "center";
  }
    
    



  //Linechart 1 Config		
  var config = {
    type: 'line',
    data: {
      labels: caseTimeline,
      datasets: [{
        label: 'Cases',
        backgroundColor: colorCaseBackgroundLine,
        borderColor: colorCaseBorderLine,
        data: caseNumbers,
        pointRadius: 2,
        pointHitRadius: 5,
        borderWidth: 2,
        hoverRadius: 5,
        hoverBorderWidth:3,
        hoverBorderColor:"rgba(255, 127, 125, 1)",
        fill: true,
        lineTension: 0.1,
        //order:3,
      },
      {
        label: 'Deaths',
        backgroundColor: colorDeathBackgroundLine,
        borderColor: colorDeathBorderLine,
        data: deathNumbers,
        pointRadius: 2,
        pointHitRadius: 5,
        borderWidth: 2,
        hoverRadius: 5,
        hoverBorderWidth:3,
        hoverBorderColor:"rgba(255,173,54,1.00)",
        fill: true,
        lineTension: 0.1,
        //order:2,
      },
      {
        label: 'Recoveries',
        backgroundColor: colorRecoveryBackgroundLine,
        borderColor: colorRecoveryBorderLine,
        data: recoveryNumbers,         
        pointRadius: 2,
        pointHitRadius: 5,
        borderWidth: 2,
        hoverRadius: 5,
        hoverBorderWidth:3,
        hoverBorderColor:"rgba(51,193,57,1.00)",
        fill: true,
        lineTension: 0.1,
        //order:1,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      legend: {
        display: true,
        //reverse:true,
        position: "top",
        align: "center",
        fullWidth: true,
        labels:{
          usePointStyle: true,
          boxWidth: 10,
          fontColor: "#fafafa",
          fontSize: window.legendFontSize,
          fontStyle: 'bold',
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

  //Barchart Daily Cases Config
  var config2 = {
    type: 'bar',
    data: {
      labels: caseTimeline,
      datasets: [{
        label: 'Cases',
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorCaseBorder,
        backgroundColor: colorCaseBackground,
        hoverBackgroundColor:"",
        hoverBorderColor:"",
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
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      title: {
        display: true,
        text: 'Daily New Cases in MD',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      legend: {
        display: true,
        position: "top",
        align: "center",
        fullWidth: true,
        labels:{
         boxWidth: 13,
         //boxHeight: 16,
         fontColor: "#fafafa",
         fontSize: window.legendFontSize,
        },
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
          //offsetGridlines:true,
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
            autoSkipPadding: 60,
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
            drawBorder:false,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:0,
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
        label: 'Deaths',
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorDeathBorder,
        backgroundColor: colorDeathBackground,
        data: dailyDeathChange,
        fill: true,
        barPercentage: 1,
        categoryPercentage: 0.85,
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
          //offsetGridlines:true,
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
            autoSkipPadding: 60,
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
            drawBorder:false,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:0,
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
        label: 'Recoveries',
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorRecoveryBorder,
        backgroundColor: colorRecoveryBackground,
        data: dailyRecoveryChange,
        fill: true,
        barPercentage: 1,
        categoryPercentage: 0.85,
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
          //offsetGridlines:true,
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
            autoSkipPadding: 60,
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
            drawBorder:false,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:0,
          }
        }],

      }
    }
  };

  //Bar Chart For Cases by County
  var configCnty = {
    type: 'line',
    data: {
      labels: caseTimeline,
      datasets: 
      [{data: caseCnty0,
        label: nameCnty0,
        borderColor: colorCnty0,
        hoverBorderColor:colorCnty0,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty1,
        label: nameCnty1,
        borderColor: colorCnty1,
        hoverBorderColor:colorCnty1,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty2,
        label: nameCnty2,
        borderColor: colorCnty2,
        hoverBorderColor:colorCnty2,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty3,
        label: nameCnty3,
        borderColor: colorCnty3,
        hoverBorderColor:colorCnty3,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty4,
        label: nameCnty4,
        borderColor: colorCnty4,
        hoverBorderColor:colorCnty4,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty5,
        label: nameCnty5,
        borderColor: colorCnty5,
        hoverBorderColor:colorCnty5,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty6,
        label: nameCnty6,
        borderColor: colorCnty6,
        hoverBorderColor:colorCnty6,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty7,
        label: nameCnty7,
        borderColor: colorCnty7,
        hoverBorderColor:colorCnty7,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty8,
        label: nameCnty8,
        borderColor: colorCnty8,
        hoverBorderColor:colorCnty8,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty9,
        label: nameCnty9,
        borderColor: colorCnty9,
        hoverBorderColor:colorCnty9,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty10,
        label: nameCnty10,
        borderColor: colorCnty10,
        hoverBorderColor:colorCnty10,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty11,
        label: nameCnty11,
        borderColor: colorCnty11,
        hoverBorderColor:colorCnty11,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty12,
        label: nameCnty12,
        borderColor: colorCnty12,
        hoverBorderColor:colorCnty12,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty13,
        label: nameCnty13,
        borderColor: colorCnty13,
        hoverBorderColor:colorCnty13,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty14,
        label: nameCnty14,
        borderColor: colorCnty14,
        hoverBorderColor:colorCnty14,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty15,
        label: nameCnty15,
        borderColor: colorCnty15,
        hoverBorderColor:colorCnty15,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty16,
        label: nameCnty16,
        borderColor: colorCnty16,
        hoverBorderColor:colorCnty16,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty17,
        label: nameCnty17,
        borderColor: colorCnty17,
        hoverBorderColor:colorCnty17,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty18,
        label: nameCnty18,
        borderColor: colorCnty18,
        hoverBorderColor:colorCnty18,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty19,
        label: nameCnty19,
        borderColor: colorCnty19,
        hoverBorderColor:colorCnty19,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty20,
        label: nameCnty20,
        borderColor: colorCnty20,
        hoverBorderColor:colorCnty20,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        hidden: true,
      },{data: caseCnty21,
        label: nameCnty21,
        borderColor: colorCnty21,
        hoverBorderColor:colorCnty21,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty22,
        label: nameCnty22,
        borderColor: colorCnty22,
        hoverBorderColor:colorCnty22,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty23,
        label: nameCnty23,
        borderColor: colorCnty23,
        hoverBorderColor:colorCnty23,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill: false, lineTension: 0.1,
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
        align: window.legendAlignCnty,
        fullWidth: true,
        labels:{
         boxWidth: 13,
         fontColor: "#fafafa",
         fontSize: window.legendFontSize,
         padding:window.legendPaddingCnty,
         textDirection:'right',
        },
      },
      title: {
        display: true,
        text: 'Cumulative Cases per County',
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
        intersect:true,
       },       
      hover: {
        mode: 'nearest',
        intersect: true
      },
      layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }
      },
      scales: {
        xAxes: [{
          offset:true,
          //offsetGridlines:true,
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
            autoSkipPadding: 60,
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
            drawBorder:false,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:0,
          }
        }],

      }
    }
  };
    
    
    
    //Barchart Case Percent of Pop Config
    var configPop = {
			type: 'bar',
			data: {
				labels: allCountyNames,
				datasets: [{
					label: 'Percent',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: "rgba(255, 107, 105, 0.8)",
					backgroundColor: "rgba(255, 107, 105, 0.8)",
					data: casePrctgCountiesRnd,
          barPercentage: 1,
          categoryPercentage: 0.85,
				}]
			},
			options: {
				responsive: true,
        maintainAspectRatio: false,  
        //aspectRatio: window.aspect,     
        title: {
					display: true,
					text: 'Daily New Cases in MD',
          fontColor: "#fff",
          fontFamily: "Work Sans",
          fontSize: window.titleFontSize,
				},
        legend: {
          display: true,
          position: "top",
          align: "center",
          fullWidth: true,
          labels:{
           boxWidth: 13,
           //boxHeight: 16,
           fontColor: "#fafafa",
           fontSize: window.legendFontSize,
          },
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
          intersect:true,
          callbacks: {
            label: function(tooltipItem, data) { 
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var currentValue = dataset.data[tooltipItem.index];
              return currentValue + '%';
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
            type: 'category',
						display: true,
						scaleLabel: {display: false,},
            ticks:{
              fontColor: "#fff",
              fontSize: window.xAxisFontSize,
              autoSkip: false,
              minRotation:89,
              maxRotation:91,
              autoSkipPadding: 60,
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
              callback: function(value, index, values) {
                          return value + '%';
                        },
            },
            afterTickToLabelConversion: function(scaleInstance) { // set the first tick (0) to null so it does not display
              scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;
              scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
            },
            gridLines:{
              color:"rgba(255,255,255,0.1)",
              drawBorder:false,
              drawTicks: window.yAxisTickDisplay,
              tickMarkLength:0,
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
      
      //var ctx = document.getElementById('canvasPop').getContext('2d');
			//window.myBarPop = new Chart(ctx, configPop);

		};
    
  

 
// Saving if needed because this works well
//          labels:{
//            generateLabels: function(chart) {
//              labels = Chart.defaults.global.legend.labels.generateLabels(chart);
//              labels[0].fillStyle = "rgba(255, 107, 105, 0.9)";
//              labels[1].fillStyle = "rgba(245,153,34,1.00)";
//              labels[2].fillStyle = "rgba(31,173,37,1.00)";
//              return labels;
//            },

    

    
