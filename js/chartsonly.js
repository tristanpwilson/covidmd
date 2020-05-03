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
    window.legendFontSizeCnty = 15;
    window.legendBoxSizeCnty = 15;
    window.legendPaddingCnty = 13;
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
    window.legendFontSizeCnty = 15;
    window.legendBoxSizeCnty = 13;
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
        hoverBorderColor:colorCaseBackgroundHover,
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
        fill: false,
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
        fill: false,
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
        hoverBackgroundColor:colorCaseBackgroundHover,
        hoverBorderColor:"",
        data: dailyCaseChange,
        barPercentage: 1,
        categoryPercentage: 0.9,
      },
      {
        label: 'Deaths',
        pointRadius: 10,
        borderWidth: 2,
        borderColor: colorDeathBorder,
        backgroundColor: colorDeathBackground,
        data: dailyDeathChange,
        barPercentage: 1,
        categoryPercentage: 0.9,
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
        categoryPercentage: 0.9,
        hidden: true,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      title: {
        display: true,
        text: 'Daily New Counts in MD',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      legend: {
        display: true,
        position: "top",
        align: "center",
        fullWidth: true,
        onHover:function(){
          config2.options.tooltips.enabled= false
        },
        labels:{
         boxWidth: 13,
         //boxHeight: 16,
         fontColor: "#fafafa",
         fontSize: window.legendFontSize,
        },
      },
      tooltips: {
        enabled: false, 
        mode: 'label',
        displayColors:false,
        titleFontSize: 14,
        bodyFontSize: 14,
        xPadding:5,
        yPadding:5,
        position:'average',
        caretSize:5,
        cornerRadius:3,
        caretPadding:10,
        xAlign: 'center',
        yAlign: 'bottom',
        intersect:false,
      },
      hover: {
        mode: 'nearest',
        intersect: true,
        onHover:function(){
         config2.options.tooltips.enabled= true
        },
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
          },

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
        xPadding:5,
        yPadding:5,
        position:'average',
        caretSize:5,
        cornerRadius:3,
        caretPadding:10,
        xAlign: 'center',
        yAlign: 'bottom',
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
        xPadding:5,
        yPadding:5,
        position:'average',
        caretSize:5,
        cornerRadius:3,
        caretPadding:10,
        xAlign: 'center',
        yAlign: 'bottom',
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
        backgroundColor:colorCnty0,
        backgroundColor:colorCnty0,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty1,
        label: nameCnty1,
        borderColor: colorCnty1,
        hoverBorderColor:colorCnty1,
        backgroundColor:colorCnty1,
        backgroundColor:colorCnty1,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty2,
        label: nameCnty2,
        borderColor: colorCnty2,
        hoverBorderColor:colorCnty2,
        backgroundColor:colorCnty2,
        backgroundColor:colorCnty2,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty3,
        label: nameCnty3,
        borderColor: colorCnty3,
        hoverBorderColor:colorCnty3,
        backgroundColor:colorCnty3,
        backgroundColor:colorCnty3,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty4,
        label: nameCnty4,
        borderColor: colorCnty4,
        hoverBorderColor:colorCnty4,
        backgroundColor:colorCnty4,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty5,
        label: nameCnty5,
        borderColor: colorCnty5,
        hoverBorderColor:colorCnty5,
        backgroundColor:colorCnty5,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty6,
        label: nameCnty6,
        borderColor: colorCnty6,
        hoverBorderColor:colorCnty6,
        backgroundColor:colorCnty6,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty7,
        label: nameCnty7,
        borderColor: colorCnty7,
        hoverBorderColor:colorCnty7,
        backgroundColor:colorCnty7,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty8,
        label: nameCnty8,
        borderColor: colorCnty8,
        hoverBorderColor:colorCnty8,
        backgroundColor:colorCnty8,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty9,
        label: nameCnty9,
        borderColor: colorCnty9,
        hoverBorderColor:colorCnty9,
        backgroundColor:colorCnty9,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty10,
        label: nameCnty10,
        borderColor: colorCnty10,
        hoverBorderColor:colorCnty10,
        backgroundColor:colorCnty10,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty11,
        label: nameCnty11,
        borderColor: colorCnty11,
        hoverBorderColor:colorCnty11,
        backgroundColor:colorCnty11,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty12,
        label: nameCnty12,
        borderColor: colorCnty12,
        hoverBorderColor:colorCnty12,
        backgroundColor:colorCnty12,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty13,
        label: nameCnty13,
        borderColor: colorCnty13,
        hoverBorderColor:colorCnty13,
        backgroundColor:colorCnty13,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty14,
        label: nameCnty14,
        borderColor: colorCnty14,
        hoverBorderColor:colorCnty14,
        backgroundColor:colorCnty14,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty15,
        label: nameCnty15,
        borderColor: colorCnty15,
        hoverBorderColor:colorCnty15,
        backgroundColor:colorCnty15,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty16,
        label: nameCnty16,
        borderColor: colorCnty16,
        hoverBorderColor:colorCnty16,
        backgroundColor:colorCnty16,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty17,
        label: nameCnty17,
        borderColor: colorCnty17,
        hoverBorderColor:colorCnty17,
        backgroundColor:colorCnty17,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty18,
        label: nameCnty18,
        borderColor: colorCnty18,
        hoverBorderColor:colorCnty18,
        backgroundColor:colorCnty18,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty19,
        label: nameCnty19,
        borderColor: colorCnty19,
        hoverBorderColor:colorCnty19,
        backgroundColor:colorCnty19,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty20,
        label: nameCnty20,
        borderColor: colorCnty20,
        hoverBorderColor:colorCnty20,
        backgroundColor:colorCnty20,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty21,
        label: nameCnty21,
        borderColor: colorCnty21,
        hoverBorderColor:colorCnty21,
        backgroundColor:colorCnty21,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty22,
        label: nameCnty22,
        borderColor: colorCnty22,
        hoverBorderColor:colorCnty22,
        backgroundColor:colorCnty22,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCnty23,
        label: nameCnty23,
        borderColor: colorCnty23,
        hoverBorderColor:colorCnty23,
        backgroundColor:colorCnty23,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill: false, lineTension: 0.1,
        //hidden: true,
      },]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspectCnty,     
      legend: {
        display: false,
      },
      legendCallback: 
        function(chart) { 
          var text = []; 
          text.push('<div id="boxToggleCntyOff"><a id="toggleCntyOff" href="javascript:void(0);" onclick="updateDatasets(event)">All Off</a></div><ul class="' + chart.id + '-legend">'); 
          for (var i = 0; i < chart.data.datasets.length; i++) { 
            //text.push('<li><span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>'); 
            if (chart.data.datasets[i].label) { 
              text.push('<li class="chart-legend-label-text legendItemCnty hidden' + chart.data.datasets[i].hidden + '" onclick="updateDataset(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '"><span class="legendCircleCnty" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
            } 
            text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join(''); 
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
      layout: {padding: {left: 0,right: 0,top: 0,bottom: 0,}},
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
  
  // onClick Function for County Line Legend; Enable show/hide for custom legend options
  // This is NOT called in the legend.onClick option; it's added to each li in the legend
  updateDataset = function(e, datasetIndex) {
    var index = datasetIndex;
    var ci = e.view.myLineMulti;
    var meta = ci.getDatasetMeta(index);
    $('#legendContainerCnty li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");
    // See controller.isDatasetVisible comment
    meta.hidden = meta.hidden === null? !ci.data.datasets[index].hidden : null;

    // We hid a dataset ... rerender the chart
    ci.update();
  };
  updateDatasets = function(e) {
    //$('li[data-legend='+index+']').toggleClass("hiddentrue");
    for(var i=0, n=window.myLineMulti.data.datasets.length;i<n;i++) {
      var ci = e.view.myLineMulti;
      var meta = ci.getDatasetMeta(i);

      // See controller.isDatasetVisible comment

       meta.hidden = meta.hidden === false? !ci.data.datasets[i].hidden : true;
    }

    // We hid a dataset ... rerender the chart
    ci.update();
    
    if($('#legendContainerCnty .legendItemCnty').hasClass("hiddenundefined")){
      $('#legendContainerCnty .legendItemCnty').removeClass("hiddenundefined");
      $('#legendContainerCnty .legendItemCnty').addClass("hiddentrue");
    }else{
    }
  };
  
  
  
  //Bar Chart For Deaths by County
  var configCntyDth = {
    type: 'line',
    data: {
      labels: caseTimeline,
      datasets: 
      [{data: caseCntyDth0,
        label: nameCnty0,
        borderColor: colorCnty0,
        hoverBorderColor:colorCnty0,
        backgroundColor:colorCnty0,
        backgroundColor:colorCnty0,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth1,
        label: nameCnty1,
        borderColor: colorCnty1,
        hoverBorderColor:colorCnty1,
        backgroundColor:colorCnty1,
        backgroundColor:colorCnty1,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth2,
        label: nameCnty2,
        borderColor: colorCnty2,
        hoverBorderColor:colorCnty2,
        backgroundColor:colorCnty2,
        backgroundColor:colorCnty2,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth3,
        label: nameCnty3,
        borderColor: colorCnty3,
        hoverBorderColor:colorCnty3,
        backgroundColor:colorCnty3,
        backgroundColor:colorCnty3,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth4,
        label: nameCnty4,
        borderColor: colorCnty4,
        hoverBorderColor:colorCnty4,
        backgroundColor:colorCnty4,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth5,
        label: nameCnty5,
        borderColor: colorCnty5,
        hoverBorderColor:colorCnty5,
        backgroundColor:colorCnty5,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth6,
        label: nameCnty6,
        borderColor: colorCnty6,
        hoverBorderColor:colorCnty6,
        backgroundColor:colorCnty6,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth7,
        label: nameCnty7,
        borderColor: colorCnty7,
        hoverBorderColor:colorCnty7,
        backgroundColor:colorCnty7,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth8,
        label: nameCnty8,
        borderColor: colorCnty8,
        hoverBorderColor:colorCnty8,
        backgroundColor:colorCnty8,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth9,
        label: nameCnty9,
        borderColor: colorCnty9,
        hoverBorderColor:colorCnty9,
        backgroundColor:colorCnty9,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth10,
        label: nameCnty10,
        borderColor: colorCnty10,
        hoverBorderColor:colorCnty10,
        backgroundColor:colorCnty10,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth11,
        label: nameCnty11,
        borderColor: colorCnty11,
        hoverBorderColor:colorCnty11,
        backgroundColor:colorCnty11,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth12,
        label: nameCnty12,
        borderColor: colorCnty12,
        hoverBorderColor:colorCnty12,
        backgroundColor:colorCnty12,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth13,
        label: nameCnty13,
        borderColor: colorCnty13,
        hoverBorderColor:colorCnty13,
        backgroundColor:colorCnty13,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth14,
        label: nameCnty14,
        borderColor: colorCnty14,
        hoverBorderColor:colorCnty14,
        backgroundColor:colorCnty14,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth15,
        label: nameCnty15,
        borderColor: colorCnty15,
        hoverBorderColor:colorCnty15,
        backgroundColor:colorCnty15,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth16,
        label: nameCnty16,
        borderColor: colorCnty16,
        hoverBorderColor:colorCnty16,
        backgroundColor:colorCnty16,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth17,
        label: nameCnty17,
        borderColor: colorCnty17,
        hoverBorderColor:colorCnty17,
        backgroundColor:colorCnty17,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth18,
        label: nameCnty18,
        borderColor: colorCnty18,
        hoverBorderColor:colorCnty18,
        backgroundColor:colorCnty18,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth19,
        label: nameCnty19,
        borderColor: colorCnty19,
        hoverBorderColor:colorCnty19,
        backgroundColor:colorCnty19,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth20,
        label: nameCnty20,
        borderColor: colorCnty20,
        hoverBorderColor:colorCnty20,
        backgroundColor:colorCnty20,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth21,
        label: nameCnty21,
        borderColor: colorCnty21,
        hoverBorderColor:colorCnty21,
        backgroundColor:colorCnty21,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth22,
        label: nameCnty22,
        borderColor: colorCnty22,
        hoverBorderColor:colorCnty22,
        backgroundColor:colorCnty22,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill:false, lineTension: 0.1,
      },{data: caseCntyDth23,
        label: nameCnty23,
        borderColor: colorCnty23,
        hoverBorderColor:colorCnty23,
        backgroundColor:colorCnty23,
        pointRadius: 2, pointHitRadius: 5, borderWidth:2, hoverRadius: 5, hoverBorderWidth:3, fill: false, lineTension: 0.1,
        //hidden: true,
      },]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspectCnty,     
      legend: {
        display: false,
      },
      legendCallback: 
        function(chart) { 
          var text = []; 
          text.push('<div id="boxToggleCntyDthOff"><a id="toggleCntyDthOff" href="javascript:void(0);" onclick="updateDatasetsDth(event)">All Off</a></div><ul class="' + chart.id + '-legend">'); 
          for (var i = 0; i < chart.data.datasets.length; i++) { 
            //text.push('<li><span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>'); 
            if (chart.data.datasets[i].label) { 
              text.push('<li class="chart-legend-label-text legendItemCnty hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetDth(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '"><span class="legendCircleCnty" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
            } 
            text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join(''); 
      },
      title: {
        display: true,
        text: 'Cumulative Deaths per County',
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
      layout: {padding: {left: 0,right: 0,top: 0,bottom: 0,}},
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

  // onClick Function for County Death Line Legend; Enable show/hide for custom legend options
  // This is NOT called in the legend.onClick option; it's added to each li in the legend
  updateDatasetDth = function(e, datasetIndex) {
    var index = datasetIndex;
    var ciD = e.view.myLineMultiDth;
    var meta = ciD.getDatasetMeta(index);
    $('#legendContainerCntyDth li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");
    // See controller.isDatasetVisible comment
    meta.hidden = meta.hidden === null? !ciD.data.datasets[index].hidden : null;

    // We hid a dataset ... rerender the chart
    ciD.update();
  };
  updateDatasetsDth = function(e) {
    //$('li[data-legend='+index+']').toggleClass("hiddentrue");
    for(var i=0, n=window.myLineMultiDth.data.datasets.length;i<n;i++) {
      var ciD = e.view.myLineMultiDth;
      var meta = ciD.getDatasetMeta(i);

      // See controller.isDatasetVisible comment

       meta.hidden = meta.hidden === false? !ciD.data.datasets[i].hidden : true;
    }

    // We hid a dataset ... rerender the chart
    ciD.update();
    
    if($('#legendContainerCntyDth .legendItemCnty').hasClass("hiddenundefined")){
      $('#legendContainerCntyDth .legendItemCnty').removeClass("hiddenundefined");
      $('#legendContainerCntyDth .legendItemCnty').addClass("hiddentrue");
    }else{
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
//        pointRadius: 2,
//        pointHitRadius: 5,
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
        pointRadius: 2,
        pointHitRadius: 5,
        borderWidth: 2,
        hoverRadius: 5,
        hoverBorderWidth:3,
        hoverBorderColor:colorAcuteHover,
        fill: true,
        lineTension: 0.1,
        //order:2,
      },
      {
        label: 'Intensive Care',
        backgroundColor: colorIntensiveBackground,
        borderColor: colorIntensiveBorder,
        data: historyIntensive,         
        pointRadius: 2,
        pointHitRadius: 5,
        borderWidth: 2,
        hoverRadius: 5,
        hoverBorderWidth:3,
        hoverBorderColor:colorIntensiveHover,
        fill: true,
        lineTension: 0.1,
        //order:1,
      },
//      {
//        label: 'Ever Hospitalized',
//        backgroundColor: colorEverHospBackground,
//        borderColor: colorEverHospBorder,
//        data: historyEverHosp,         
//        pointRadius: 2,
//        pointHitRadius: 5,
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
        text: 'Current Hospitalizations in MD (Stacked)',
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





		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
      var ctx = document.getElementById('canvas2').getContext('2d');
			window.myBar = new Chart(ctx, config2);
      //var ctx = document.getElementById('canvasDth').getContext('2d');
			//window.myBar = new Chart(ctx, configDth);
      //var ctx = document.getElementById('canvasRec').getContext('2d');
			//window.myBar = new Chart(ctx, configRec);
      var ctx = document.getElementById('canvasHosp').getContext('2d');
			window.myLineHosp = new Chart(ctx, configHosp);
      
      // County cases multi line graph initiation & custom legend generation
      var ctx = document.getElementById('canvasCnty').getContext('2d');
			window.myLineMulti = new Chart(ctx, configCnty);
      document.getElementById("legendContainerCnty").innerHTML = myLineMulti.generateLegend();
      var legendItems = legendContainerCnty.getElementsByTagName('li');
      
      // County deaths multi line graph initiation & custom legend generation
      var ctx = document.getElementById('canvasCntyDth').getContext('2d');
			window.myLineMultiDth = new Chart(ctx, configCntyDth);
      document.getElementById("legendContainerCntyDth").innerHTML = myLineMultiDth.generateLegend();
      var legendItems = legendContainerCntyDth.getElementsByTagName('li');

      //var ctx = document.getElementById('canvasPop').getContext('2d');
			//window.myBarPop = new Chart(ctx, configPop);
		};

