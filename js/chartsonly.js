// JavaScript Document
    latestData();

  // Checking window width and changing parameters accordingly (still can't get this to work dynamically on resize - only page load)
  if($(window).width() <= 575) {
    window.legendFontSize = 14;
    window.titleFontSize = 18;
    window.xAxisFontSize = 12;
    window.xAxisMinRotation = 89.9;
    window.xAxisMaxRotation = 90;
    window.xAxisGridColor = "rgba(255,255,255,0.1)";
    window.yAxisFontSize = 12;
    window.yAxisTickDisplay = false;
    window.yAxisTickMirror = true;
    window.yAxisTickMarkLengthA = 0;
    window.yAxisGridColor = "rgba(255,255,255,0.1)";
    window.legendFontSizeCnty = 15;
    window.legendBoxSizeCnty = 15;
    window.legendPaddingCnty = 13;
    window.legendPositionCnty = "bottom";
    window.legendAlignCnty = "start";
    window.pointRadiusLine = .75;
    window.pointHitRadiusLine = 4;
    window.borderWidthLine = 2;
    window.hoverRadiusLine = 3;
    window.hoverBorderWidthLine = 2;
    
  } 
  else {
    window.legendFontSize = 15;
    window.titleFontSize = 22;
    window.xAxisFontSize = 12;
    window.xAxisMinRotation = -0.1;
    window.xAxisMaxRotation = 0;
    window.xAxisGridColor = "rgba(255,255,255,0.1)";
    window.yAxisFontSize = 12;
    window.yAxisTickDisplay = true;
    window.yAxisTickMirror = false;
    window.yAxisTickMarkLengthA = 3;
    window.yAxisGridColor = "rgba(255,255,255,0.1)";
    window.legendFontSizeCnty = 15;
    window.legendBoxSizeCnty = 13;
    window.legendPaddingCnty = 10;
    window.legendPositionCnty = "left";
    window.legendAlignCnty = "center";
    window.pointRadiusLine = 1.5;
    window.pointHitRadiusLine = 4;
    window.borderWidthLine = 2;
    window.hoverRadiusLine = 4;
    window.hoverBorderWidthLine =2;
    
  }

  
  //Linechart 1 Config		
  var configCumul = {
    type: 'line',
    data: {
      labels: caseTimeline,
      datasets: [
      {
        label: 'Cases',
        backgroundColor: colorCaseBackgroundLineLight,
        borderColor: colorCaseBorderLine,
        data: caseNumbers,
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorCaseHoverLine,
        hoverBackgroundColor:colorCaseHoverLine,
        fill: true,
        lineTension: 0.1,
        //order:3,
      },
      {
        label: 'Deaths',
        backgroundColor: colorDeathBackgroundLine,
        borderColor: colorDeathBorderLine,
        data: deathNumbers,
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorDeathHoverLine,
        hoverBackgroundColor:colorDeathHoverLine,
        fill: false,
        lineTension: 0.1,
        //order:2,
      },
      {
        label: 'Recoveries',
        backgroundColor: colorRecoveryBackgroundLine,
        borderColor: colorRecoveryBorderLine,
        data: recoveryNumbers,         
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorRecoveryHoverLine,
        hoverBackgroundColor:colorRecoveryHoverLine,
        fill: false,
        lineTension: 0.1,
        //order:1,
      },
      {
        label: 'Neg Tests',
        backgroundColor: colorNegTestBackground,
        borderColor: colorNegTestBorder,
        data: negTestNumbers,         
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorNegTestHover,
        hoverBackgroundColor:colorNegTestHover,
        fill: false,
        hidden:true,
        lineTension:0.1,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      legend: {display: false,},
      legendCallback: 
        function(chart) { 
          var text = []; 
          
          text.push('<ul class="' + chart.id + '-legend">'); 
          for (var i = 0; i < chart.data.datasets.length; i++) { 
            //text.push('<li><span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>'); 
            if (chart.data.datasets[i].label) { 
              text.push('<li class="chart-legend-label-text legendItemCumul hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetCumul(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDatasetCumul(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendSquareCumul" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
            } 
            text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join(''); 
      },
      title: {
        display: false,
        text: 'Cumulative Cases in MD',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      tooltips: {
        enabled: true, 
        mode: 'index',
        displayColors:true,
        multiKeyBackground:'rgba(0,0,0,0)',
        titleFontSize: 14,
        bodyFontSize: 14,
        footerFontSize:14,
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
          //offset:false,
          offset:true,
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
            color:window.xAxisGridColor,
            //zeroLineColor: "rgba(255,255,255,0.02)",
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
            //Callback to replace "000" with "K" for larger numbers
            callback : function(value,index,array) { 
              return (value < 1000000) ? value/1000 + 'K' : value/1000000 + 'M'; 
            },
          },
          afterTickToLabelConversion: function(scaleInstance) { // set the first tick (0) to null so it does not display
            scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;
            scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
          },
          gridLines:{
            color:window.yAxisGridColor,
            drawTicks: window.yAxisTickDisplay,
            drawBorder:false,
            tickMarkLength:window.yAxisTickMarkLengthA,
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
  

  //Barchart Daily Cases Config
  var configDaily = {
    type: 'bar',
    data: {
      labels: caseTimeline,
      datasets: [
      {
        type:'line',
        label: 'Avg (C)',
        data: avgMovingCaseChange,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorCaseAvgLine,
        backgroundColor: colorCaseAvgLine,
        fill:false,
        lineTension:0.3,
        hidden: false,
      },
      {
        type:'line',
        label: 'Avg (D)',
        data: avgMovingDeathChange,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorDeathAvgLine,
        backgroundColor: colorDeathAvgLine,
        fill:false,
        lineTension:0.3,
        hidden: true,
      },
      {
        type:'line',
        label: 'Avg (R)',
        data: avgMovingRecoveryChange,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorRecoveryAvgLine,
        backgroundColor: colorRecoveryAvgLine,
        fill:false,
        lineTension:0.3,
        hidden: true,
      },
      {
        type:'line',
        label: 'Avg (NT)',
        data: avgMovingNegTestChange,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorNegTestAvgLine,
        backgroundColor: colorNegTestAvgLine,
        fill:false,
        lineTension:0.3,
        hidden: true,
      },
      {
        label: 'Cases',
        data: dailyCaseChange,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorCaseBorder,
        backgroundColor: colorCaseBackground,
        hoverBackgroundColor:colorCaseBackgroundHover,
        hoverBorderColor:"",
        barPercentage: 1,
        categoryPercentage: 0.9,
        hidden:false,
      },
      {
        label: 'Deaths',
        data: dailyDeathChange,
        pointRadius: 10,
        borderWidth: 2,
        borderColor: colorDeathBorder,
        backgroundColor: colorDeathBackground,
        barPercentage: 1,
        categoryPercentage: 0.9,
        hidden: true,
      },
      {
        label: 'Recoveries',
        data: dailyRecoveryChange,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorRecoveryBorder,
        backgroundColor: colorRecoveryBackground,
        barPercentage: 1,
        categoryPercentage: 0.9,
        hidden: true,
      },
      {
        label: 'Neg Tests',
        data: dailyNegTestChange,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorNegTestBorder,
        backgroundColor: colorNegTestBorder,
        barPercentage: 1,
        categoryPercentage: 0.9,
        hidden: true,
      }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      title: {
        display: false,
        text: 'Daily New Counts in MD',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      legend: {display: false,},
      legendCallback: 
        function(chart) { 
        var text = []; 

        text.push('<ul class="' + chart.id + '-legend">'); 
        for (var i = 0; i < chart.data.datasets.length; i++) { 
          //text.push('<li><span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>'); 
          if (chart.data.datasets[i].label) { 
            text.push('<li class="chart-legend-label-text legendItemDaily hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetDaily(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDatasetDaily(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendSquareDaily" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
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
        titleFontSize: 14,
        bodyFontSize: 14,
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
        intersect: true,
      },
      scales: {
        xAxes: [{
          offset:true,
          type: 'time',
          time: {
            unit: 'day',
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
          gridLines:{color:window.xAxisGridColor}
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
            color:window.yAxisGridColor,
            drawBorder:false,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:window.yAxisTickMarkLengthA,
          },
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
  //Function to update the length of the moving average line for Daily Change chart
  updateDatasetAvgDaily = function(){
    
    var avgMenuVal = $('#avgLengthMenu').val();

    if ($('#avgLengthMenu').val() == "7") {
      window.myBarDaily.data.datasets[0].data = avgMov(dailyCaseChange)
      window.myBarDaily.data.datasets[1].data = avgMov(dailyDeathChange)
      window.myBarDaily.data.datasets[2].data = avgMov(dailyRecoveryChange)
      window.myBarDaily.data.datasets[3].data = avgMov(dailyNegTestChange)
      //alert(avgMov(dailyCaseChange));
    } else if ($('#avgLengthMenu').val() == "3") {
      window.myBarDaily.data.datasets[0].data = avgMov3(dailyCaseChange)
      window.myBarDaily.data.datasets[1].data = avgMov3(dailyDeathChange)
      window.myBarDaily.data.datasets[2].data = avgMov3(dailyRecoveryChange)
      window.myBarDaily.data.datasets[3].data = avgMov3(dailyNegTestChange)
      //alert(avgMov3(dailyCaseChange));
    } else if ($('#avgLengthMenu').val() == "10") {
      window.myBarDaily.data.datasets[0].data = avgMov10(dailyCaseChange)
      window.myBarDaily.data.datasets[1].data = avgMov10(dailyDeathChange)
      window.myBarDaily.data.datasets[2].data = avgMov10(dailyRecoveryChange)
      window.myBarDaily.data.datasets[3].data = avgMov10(dailyNegTestChange)
      //alert(avgMov10(dailyCaseChange));
    } else if ($('#avgLengthMenu').val() == "14") {
      window.myBarDaily.data.datasets[0].data = avgMov14(dailyCaseChange)
      window.myBarDaily.data.datasets[1].data = avgMov14(dailyDeathChange)
      window.myBarDaily.data.datasets[2].data = avgMov14(dailyRecoveryChange)
      window.myBarDaily.data.datasets[3].data = avgMov14(dailyNegTestChange)
      //alert(avgMov14(dailyCaseChange));
    }
    
    window.myBarDaily.update();
  }; 


  //Bar Chart For Cases by County
  var configCnty = {
    type: 'line',
    data: {
      labels: caseTimeline,
      datasets: [
      {data: caseCnty0,
        label: nameCnty0,
        borderColor: colorCnty0,
        hoverBorderColor: colorCnty0,
        backgroundColor: colorCnty0,
        backgroundColor: colorCnty0,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty1,
        label: nameCnty1,
        borderColor: colorCnty1,
        hoverBorderColor:colorCnty1,
        backgroundColor:colorCnty1,
        backgroundColor:colorCnty1,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty2,
        label: nameCnty2,
        borderColor: colorCnty2,
        hoverBorderColor:colorCnty2,
        backgroundColor:colorCnty2,
        backgroundColor:colorCnty2,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty3,
        label: nameCnty3,
        borderColor: colorCnty3,
        hoverBorderColor:colorCnty3,
        backgroundColor:colorCnty3,
        backgroundColor:colorCnty3,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty4,
        label: nameCnty4,
        borderColor: colorCnty4,
        hoverBorderColor:colorCnty4,
        backgroundColor:colorCnty4,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty5,
        label: nameCnty5,
        borderColor: colorCnty5,
        hoverBorderColor:colorCnty5,
        backgroundColor:colorCnty5,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty6,
        label: nameCnty6,
        borderColor: colorCnty6,
        hoverBorderColor:colorCnty6,
        backgroundColor:colorCnty6,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty7,
        label: nameCnty7,
        borderColor: colorCnty7,
        hoverBorderColor:colorCnty7,
        backgroundColor:colorCnty7,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty8,
        label: nameCnty8,
        borderColor: colorCnty8,
        hoverBorderColor:colorCnty8,
        backgroundColor:colorCnty8,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty9,
        label: nameCnty9,
        borderColor: colorCnty9,
        hoverBorderColor:colorCnty9,
        backgroundColor:colorCnty9,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty10,
        label: nameCnty10,
        borderColor: colorCnty10,
        hoverBorderColor:colorCnty10,
        backgroundColor:colorCnty10,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty11,
        label: nameCnty11,
        borderColor: colorCnty11,
        hoverBorderColor:colorCnty11,
        backgroundColor:colorCnty11,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty12,
        label: nameCnty12,
        borderColor: colorCnty12,
        hoverBorderColor:colorCnty12,
        backgroundColor:colorCnty12,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty13,
        label: nameCnty13,
        borderColor: colorCnty13,
        hoverBorderColor:colorCnty13,
        backgroundColor:colorCnty13,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty14,
        label: nameCnty14,
        borderColor: colorCnty14,
        hoverBorderColor:colorCnty14,
        backgroundColor:colorCnty14,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty15,
        label: nameCnty15,
        borderColor: colorCnty15,
        hoverBorderColor:colorCnty15,
        backgroundColor:colorCnty15,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty16,
        label: nameCnty16,
        borderColor: colorCnty16,
        hoverBorderColor:colorCnty16,
        backgroundColor:colorCnty16,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty17,
        label: nameCnty17,
        borderColor: colorCnty17,
        hoverBorderColor:colorCnty17,
        backgroundColor:colorCnty17,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty18,
        label: nameCnty18,
        borderColor: colorCnty18,
        hoverBorderColor:colorCnty18,
        backgroundColor:colorCnty18,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty19,
        label: nameCnty19,
        borderColor: colorCnty19,
        hoverBorderColor:colorCnty19,
        backgroundColor:colorCnty19,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty20,
        label: nameCnty20,
        borderColor: colorCnty20,
        hoverBorderColor:colorCnty20,
        backgroundColor:colorCnty20,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCnty21,
        label: nameCnty21,
        borderColor: colorCnty21,
        hoverBorderColor:colorCnty21,
        backgroundColor:colorCnty21,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty22,
        label: nameCnty22,
        borderColor: colorCnty22,
        hoverBorderColor:colorCnty22,
        backgroundColor:colorCnty22,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCnty23,
        label: nameCnty23,
        borderColor: colorCnty23,
        hoverBorderColor:colorCnty23,
        backgroundColor:colorCnty23,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill: false, lineTension: 0.1,
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
              text.push('<li class="chart-legend-label-text legendItemCnty hidden' + chart.data.datasets[i].hidden + '" onclick="updateDataset(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDataset(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendCircleCnty" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
            } 
            text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join(''); 
      },
      title: {
        display: false,
        text: 'Cumulative Cases per County',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      tooltips: {
        enabled: true, 
        mode: 'nearest',
        position:'nearest',
        displayColors:true,
        multiKeyBackground:'rgba(0,0,0,0)',
        titleFontSize: 14,
        bodyFontSize: 14,
        footerFontSize:14,
        xalign: 'right',
        yalign:'top',
        intersect:false,
        callbacks: {
          labelColor: function(tooltipItem, chart) {
            var dataset = chart.config.data.datasets[tooltipItem.datasetIndex];

            return {
              borderColor: 'rgba(0, 0, 0, 0)',
              backgroundColor : dataset.backgroundColor
            }
          },
        }
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
          gridLines:{color:window.xAxisGridColor}
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
            //Callback to replace "000" with "K" for larger numbers
            callback : function(value,index,array) { 
              return (value < 1000000) ? value/1000 + 'K' : value/1000000 + 'M'; 
            },
          },
          afterTickToLabelConversion: function(scaleInstance) { // set the first tick (0) to null so it does not display
            scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;
            scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
          },
          gridLines:{
            color:window.yAxisGridColor,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:window.yAxisTickMarkLengthA,
            drawBorder:false,
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
      datasets: [
      {data: caseCntyDth0,
        label: nameCnty0,
        borderColor: colorCnty0,
        hoverBorderColor:colorCnty0,
        backgroundColor:colorCnty0,
        backgroundColor:colorCnty0,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },
      {data: caseCntyDth1,
        label: nameCnty1,
        borderColor: colorCnty1,
        hoverBorderColor:colorCnty1,
        backgroundColor:colorCnty1,
        backgroundColor:colorCnty1,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth2,
        label: nameCnty2,
        borderColor: colorCnty2,
        hoverBorderColor:colorCnty2,
        backgroundColor:colorCnty2,
        backgroundColor:colorCnty2,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth3,
        label: nameCnty3,
        borderColor: colorCnty3,
        hoverBorderColor:colorCnty3,
        backgroundColor:colorCnty3,
        backgroundColor:colorCnty3,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth4,
        label: nameCnty4,
        borderColor: colorCnty4,
        hoverBorderColor:colorCnty4,
        backgroundColor:colorCnty4,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth5,
        label: nameCnty5,
        borderColor: colorCnty5,
        hoverBorderColor:colorCnty5,
        backgroundColor:colorCnty5,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth6,
        label: nameCnty6,
        borderColor: colorCnty6,
        hoverBorderColor:colorCnty6,
        backgroundColor:colorCnty6,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth7,
        label: nameCnty7,
        borderColor: colorCnty7,
        hoverBorderColor:colorCnty7,
        backgroundColor:colorCnty7,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth8,
        label: nameCnty8,
        borderColor: colorCnty8,
        hoverBorderColor:colorCnty8,
        backgroundColor:colorCnty8,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth9,
        label: nameCnty9,
        borderColor: colorCnty9,
        hoverBorderColor:colorCnty9,
        backgroundColor:colorCnty9,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth10,
        label: nameCnty10,
        borderColor: colorCnty10,
        hoverBorderColor:colorCnty10,
        backgroundColor:colorCnty10,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth11,
        label: nameCnty11,
        borderColor: colorCnty11,
        hoverBorderColor:colorCnty11,
        backgroundColor:colorCnty11,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth12,
        label: nameCnty12,
        borderColor: colorCnty12,
        hoverBorderColor:colorCnty12,
        backgroundColor:colorCnty12,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth13,
        label: nameCnty13,
        borderColor: colorCnty13,
        hoverBorderColor:colorCnty13,
        backgroundColor:colorCnty13,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth14,
        label: nameCnty14,
        borderColor: colorCnty14,
        hoverBorderColor:colorCnty14,
        backgroundColor:colorCnty14,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth15,
        label: nameCnty15,
        borderColor: colorCnty15,
        hoverBorderColor:colorCnty15,
        backgroundColor:colorCnty15,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth16,
        label: nameCnty16,
        borderColor: colorCnty16,
        hoverBorderColor:colorCnty16,
        backgroundColor:colorCnty16,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth17,
        label: nameCnty17,
        borderColor: colorCnty17,
        hoverBorderColor:colorCnty17,
        backgroundColor:colorCnty17,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth18,
        label: nameCnty18,
        borderColor: colorCnty18,
        hoverBorderColor:colorCnty18,
        backgroundColor:colorCnty18,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth19,
        label: nameCnty19,
        borderColor: colorCnty19,
        hoverBorderColor:colorCnty19,
        backgroundColor:colorCnty19,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth20,
        label: nameCnty20,
        borderColor: colorCnty20,
        hoverBorderColor:colorCnty20,
        backgroundColor:colorCnty20,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
        //hidden: true,
      },{data: caseCntyDth21,
        label: nameCnty21,
        borderColor: colorCnty21,
        hoverBorderColor:colorCnty21,
        backgroundColor:colorCnty21,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth22,
        label: nameCnty22,
        borderColor: colorCnty22,
        hoverBorderColor:colorCnty22,
        backgroundColor:colorCnty22,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill:false, lineTension: 0.1,
      },{data: caseCntyDth23,
        label: nameCnty23,
        borderColor: colorCnty23,
        hoverBorderColor:colorCnty23,
        backgroundColor:colorCnty23,
        pointRadius: window.pointRadiusLine, pointHitRadius: window.pointHitRadiusLine, borderWidth: window.borderWidthLine, hoverRadius: window.hoverRadiusLine, hoverBorderWidth:window.hoverBorderWidthLine, fill: false, lineTension: 0.1,
      },
      ]
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
              text.push('<li class="chart-legend-label-text legendItemCnty hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetDth(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDatasetDth(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendCircleCnty" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
            } 
            text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join(''); 
      },
      title: {
        display: false,
        text: 'Cumulative Deaths per County',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      tooltips: {
        enabled: true, 
        mode: 'nearest',
        position:'nearest',
        displayColors:true,
        multiKeyBackground:'rgba(0,0,0,0)',
        titleFontSize: 14,
        bodyFontSize: 14,
        footerFontSize:14,
        xalign: 'right',
        yalign:'top',
        intersect:false,
        callbacks: {
          labelColor: function(tooltipItem, chart) {
            var dataset = chart.config.data.datasets[tooltipItem.datasetIndex];

            return {
              borderColor: 'rgba(0, 0, 0, 0)',
              backgroundColor : dataset.backgroundColor
            }
          },
        }
      },        
      hover: {
        mode: 'nearest',
        intersect: true
      },
      layout: {padding: {left: 0,right: 0,top: 0,bottom: 0,}},
      scales: {
        xAxes: [{
          display:true,
          offset:true,
          //offsetGridlines:true,
          type: 'time',
          time: {
            unit: 'day',
            //unitStepSize: 4,
          },
          scaleLabel: {display: false,},
          ticks:{
            fontColor: "#fff",
            fontSize: window.xAxisFontSize,
            autoSkip: true,
            minRotation:window.xAxisMinRotation,
            maxRotation:window.xAxisMaxRotation,
            autoSkipPadding: 60,
          },
          gridLines:{color:window.xAxisGridColor}
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
            color:window.yAxisGridColor,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:window.yAxisTickMarkLengthA,
            drawBorder:false,
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
        pointBackgroundColor: colorIntensiveBorder,
        data: historyIntensive,         
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorIntensiveHover,
        fill: true,
        lineTension: 0.1,
        //order:1,
      },      
      {
        label: 'Acute Care',
        backgroundColor: colorAcuteBackground,
        borderColor: colorAcuteBorder,
        pointBackgroundColor: colorIntensiveBorder,
        data: historyAcute,
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorAcuteHover,
        fill: true,
        lineTension: 0.1,
        //order:2,
      }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      legend: {display: false,},
      legendCallback: 
        function(chart) { 
          var text = []; 
          text.push('<ul class="' + chart.id + '-legend">'); 
          for (var i = 0; i < chart.data.datasets.length; i++) { 
            if (chart.data.datasets[i].label) { 
              text.push('<li class="chart-legend-label-text legendItemHosp hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetHosp(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDatasetHosp(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendSquareHosp" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
            } 
            text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join(''); 
      },
      title: {
        display: false,
        text: 'Current Hospitalizations in MD (Stacked)',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      tooltips: {
        enabled: true, 
        mode: 'index',
        displayColors:true,
        multiKeyBackground:'rgba(0,0,0,0)',
        titleFontSize: 14,
        bodyFontSize: 14,
        footerFontSize:14,
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
        intersect: false
      },
      scales: {
        xAxes: [{
          display:true,
          offset:true,
          type: 'time',
          time: {
            unit: 'day',
          },
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
            color:window.xAxisGridColor,
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
            color:window.yAxisGridColor,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:window.yAxisTickMarkLengthA,
            drawBorder:false,
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
  
  
//Barchart Daily Hospitalizations Config
  var configDailyHosp = {
    type: 'bar',
    data: {
      labels: caseTimeline,
      datasets: [
      /*{
        type:'line',
        label: 'Avg (7d) Total',
        data: avgMovingNowHospChange,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: "rgba(255,255,255,1)",
        backgroundColor: "rgba(255,255,255,1)",
        fill:false,
        lineTension:0.3,
        hidden: false,
      },*/
      {
        label: 'Intensive Care',
        data: dailyIntensiveChange,
        pointRadius: 0,
        borderWidth: 2,
        backgroundColor: colorIntensiveBorder,
        borderColor: colorIntensiveBorder,
        categoryPercentage:1,
        hidden: false,
      },
      {
        label: 'Acute Care',
        data: dailyAcuteChange,
        pointRadius: 0,
        borderWidth: 2,
        backgroundColor: colorAcuteBorder,
        borderColor: colorAcuteBorder,
        categoryPercentage:1,
        hidden: false,
      },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      title: {
        display: false,
        text: 'Daily Change in Hospitalizations (Stacked)',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      legend: {display: false,},
      legendCallback: 
        function(chart) { 
        var text = []; 
        text.push('<ul class="' + chart.id + '-legend">'); 
        for (var i = 0; i < chart.data.datasets.length; i++) { 
          if (chart.data.datasets[i].label) { 
            text.push('<li class="chart-legend-label-text legendItemDailyHosp hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetDailyHosp(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDatasetDailyHosp(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendSquareDailyHosp" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
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
        titleFontSize: 14,
        bodyFontSize: 14,
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
        intersect: true,
      },
      scales: {
        xAxes: [{
          display:true,
          offset:true,
          stacked: true,
          type: 'time',
          time: {
            unit: 'day',
          },
          scaleLabel: {display: false,},
          ticks:{
            fontColor: "#fff",
            fontSize: window.xAxisFontSize,
            autoSkip: true,
            minRotation:window.xAxisMinRotation,
            maxRotation:window.xAxisMaxRotation,
            autoSkipPadding: 60,
          },
          gridLines:{color:window.xAxisGridColor}
        }],
        yAxes: [{
          display: true,
          stacked: true,
          scaleLabel: {display: false,},
          ticks:{
            mirror: window.yAxisTickMirror,
            fontColor: "#fff",
            fontSize: window.yAxisFontSize,
            autoSkip: false,
            //autoSkipPadding: 10,
            min:-100,
            max:250,
            stepSize: 50,
            maxRotation: 0,
          },
          afterTickToLabelConversion: function(scaleInstance) { // set the first tick (0) to null so it does not display
            scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;
            scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
          },
          gridLines:{
            color:window.yAxisGridColor,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:window.yAxisTickMarkLengthA,
            drawBorder:false,
            zeroLineColor:"rgba(255,255,255,0.4)",
            zeroLineWidth:2,
          },
        }],

      }
    }
  };
 
  updateDatasetDailyHosp = function(e, datasetIndex) {
    var index = datasetIndex;
    var ciDailyHosp = e.view.myBarDailyHosp;
    var meta = ciDailyHosp.getDatasetMeta(index);
    $('#legendContainerDailyHosp li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");

    meta.hidden = meta.hidden === null? !ciDailyHosp.data.datasets[index].hidden : null;

    // After hiding dataset, rerender the chart
    ciDailyHosp.update();
  }; 

  
  //Linechart Test Cumul Config		
  var configTest = {
    type: 'line',
    data: {
      labels: caseTimeline,
      datasets: [
      {
        label: 'Positive Tests',
        backgroundColor: colorCaseBackgroundSolid,
        borderColor: colorCaseBorderLine,
        data: caseNumbers,
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorCaseHoverLine,
        hoverBackgroundColor:colorCaseHoverLine,
        fill: true,
        lineTension: 0.1,
        //order:3,
      },
      {
        label: 'Negative Tests',
        backgroundColor: colorNegTestBackgroundSolid,
        borderColor: colorNegTestBorder,
        data: negTestNumbers,         
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorNegTestHover,
        hoverBackgroundColor:colorNegTestHover,
        fill: true,
        hidden:false,
        lineTension:0.1,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      legend: {display: false,},
      legendCallback: 
        function(chart) { 
          var text = []; 
          text.push('<ul class="' + chart.id + '-legend">'); 
          for (var i = 0; i < chart.data.datasets.length; i++) { 
            //text.push('<li><span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>'); 
            if (chart.data.datasets[i].label) { 
              text.push('<li class="chart-legend-label-text legendItemTest hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetTest(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDatasetTest(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendSquareTest" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
            } 
            text.push('</li>'); 
          } 
          text.push('</ul>'); 
          return text.join(''); 
      },
      title: {
        display: false,
        text: 'Cumulative Tests in MD (Stacked)',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      //tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + ' %' %>",
      tooltips: {
        enabled: true, 
        mode: 'index',
        displayColors:true,
        multiKeyBackground:'rgba(0,0,0,0)',
        titleFontSize: 14,
        bodyFontSize: 14,
        footerFontSize:14,
        xalign: 'right',
        yalign:'top',
        intersect:false,
        itemSort: function(a, b) {
            return b.datasetIndex - a.datasetIndex
        },
        callbacks: {
          labelColor: function(tooltipItem, chart) {
            var dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
            return {
                borderColor: 'rgba(255, 0, 0, 0)',
                backgroundColor : dataset.borderColor
            }
          },
          // Set footer to the sum of the dataset values for each discrete point
          footer: function(tooltipItems, data) {
            var total = 0;
            tooltipItems.forEach(function(tooltipItem) {
              total += data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            });
            return "Total Tests: " + total;
          }
        },
      },       
      hover: {
        //mode: 'average',
        intersect: false
      },
      scales: {
        xAxes: [{
          display: true,
          offset:true,
          type: 'time',
          time: {
            unit: 'day',
            //unitStepSize: 4,
          },
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
            color:window.xAxisGridColor,
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
            //Callback to replace "000" with "K" for larger numbers
            callback : function(value,index,array) { 
              return (value < 1000000) ? value/1000 + 'K' : value/1000000 + 'M'; 
            },
          },
          afterTickToLabelConversion: function(scaleInstance) { // set the first tick (0) to null so it does not display
            scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;
            scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
          },
          gridLines:{
            color:window.yAxisGridColor,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:window.yAxisTickMarkLengthA,
            drawBorder:false,
          }
        }],
      }
    }
  };
  
  updateDatasetTest = function(e, datasetIndex) {
    var index = datasetIndex;
    var ciTest = e.view.myLineTest;
    var meta = ciTest.getDatasetMeta(index);
    $('#legendContainerTest li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");

    meta.hidden = meta.hidden === null? !ciTest.data.datasets[index].hidden : null;

    // After hiding dataset, rerender the chart
    ciTest.update();
  };


  //Positivity Rate Config
  var configPosRate = {
    type: 'line',
    data: {
      labels: caseTimeline,
      datasets: [
      {
        label: 'Positivity Rate (7d Avg)',
        data: posRateNumbers,
        borderColor: colorPosRateBorderLine,
        backgroundColor: colorPosRateBorderLine,
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorPosRateHoverLine,
        hoverBackgroundColor:colorPosRateHoverLine,
        fill: false,
        lineTension: 0.1,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      title: {
        display: false,
        text: 'Positivity Rate; 7 Day Average ',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      legend: {display: false,},
      legendCallback: 
        function(chart) { 
          var text = []; 
          text.push('<ul class="' + chart.id + '-legend">'); 
          for (var i = 0; i < chart.data.datasets.length; i++) { 
            //text.push('<li><span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>'); 
            if (chart.data.datasets[i].label) { 
              text.push('<li class="chart-legend-label-text legendItemPosRate hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetPosRate(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDatasetPosRate(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendSquarePosRate" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
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
        titleFontSize: 14,
        bodyFontSize: 14,
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
        intersect: true,
      },
      scales: {
        xAxes: [{
          display:true,
          offset:true,
          type: 'time',
          time: {
            unit: 'day',
          },
          scaleLabel: {display: false,},
          ticks:{
            fontColor: "#fff",
            fontSize: window.xAxisFontSize,
            autoSkip: true,
            minRotation:window.xAxisMinRotation,
            maxRotation:window.xAxisMaxRotation,
            autoSkipPadding: 60,
          },
          gridLines:{color:window.xAxisGridColor}
        }],
        yAxes: [{
          display: true,
          //type: 'logarithmic',
          scaleLabel: {display: false,},
          ticks:{
            callback: function(tick) {
              return tick.toString() + '%';
            },
            mirror: window.yAxisTickMirror,
            fontColor: "#fff",
            fontSize: window.yAxisFontSize,
            autoSkip: true,
            maxRotation: 0,
            autoSkipPadding: 40,
            min:0,
            max:30,
            //stepSize: 2,
          },

          afterTickToLabelConversion: function(scaleInstance) { // set the first tick (0) to null so it does not display
            scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;
            scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
          },
          gridLines:{
            color:window.yAxisGridColor,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:window.yAxisTickMarkLengthA,
            drawBorder:false,
          },
        }],

      }
    }
  };
  
  // In Progress config for combo of cases & positivity rate
  /*var configPosRate = {
    type: 'line',
    data: {
      labels: caseTimeline,
      datasets: [
      {
        label: 'Positivity Rate (7d Avg)',
        yAxisID: 'A',
        data: posRateNumbers,
        borderColor: colorPosRateBorderLine,
        backgroundColor: colorPosRateBorderLine,
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorPosRateHoverLine,
        hoverBackgroundColor:colorPosRateHoverLine,
        fill: false,
        lineTension: 0.1,
      },
      {
        label: 'Cases',
        yAxisID: 'B',
        data: dailyCaseChange,
        type:"bar",
        pointRadius: 0,
        borderWidth: 2,
        borderColor: colorCaseBorder,
        backgroundColor: colorCaseBackground,
        hoverBackgroundColor:colorCaseBackgroundHover,
        hoverBorderColor:"",
        barPercentage: 1,
        categoryPercentage: 0.9,
        hidden:false,
      }
      
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      title: {
        display: false,
        text: 'Positivity Rate; 7 Day Average ',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
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
              text.push('<li class="chart-legend-label-text legendItemPosRate hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetPosRate(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDatasetPosRate(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendSquarePosRate" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
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
        titleFontSize: 14,
        bodyFontSize: 14,
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
        intersect: true,
      },
      scales: {
        xAxes: [{
          display: true,
          offset:true,
          type: 'time',
          time: {
            unit: 'day',
          },
          scaleLabel: {display: false,},
          ticks:{
            fontColor: "#fff",
            fontSize: window.xAxisFontSize,
            autoSkip: true,
            minRotation:window.xAxisMinRotation,
            maxRotation:window.xAxisMaxRotation,
            autoSkipPadding: 60,
          },
          gridLines:{color:window.xAxisGridColor}
        }],
        yAxes: [
          {
            id: 'A',
            type: 'linear',
            position: 'left',
            min:0,
            max:30,
            stepSize:10,
            gridLines:{
              color:window.yAxisGridColor,
              drawTicks: window.yAxisTickDisplay,
              tickMarkLength:window.yAxisTickMarkLengthA,
              drawBorder:false,
            },
          }, {
            id: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
              max: 1800,
              min: 0,
              stepSize:300,
            },
            gridLines:{
            color:window.yAxisGridColor,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:window.yAxisTickMarkLengthA,
            drawBorder:false,
           },
          },
        ],
      }
    }
  };*/
  
  updateDatasetPosRate = function(e, datasetIndex) {
    var index = datasetIndex;
    var ciPosRate = e.view.myLinePosRate;
    var meta = ciPosRate.getDatasetMeta(index);
    $('#legendContainerPosRate li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");

    meta.hidden = meta.hidden === null? !ciPosRate.data.datasets[index].hidden : null;

    // After hiding dataset, rerender the chart
    ciPosRate.update();
  };


  //Positivity Rate Config
  var configPosRate90 = {
    type: 'line',
    data: {
      labels: caseTimeline90,
      datasets: [
      {
        label: 'Positivity Rate (7d Avg)',
        data: posRateNumbers90,
        borderColor: colorPosRateBorderLine,
        backgroundColor: colorPosRateBorderLine,
        pointRadius: window.pointRadiusLine,
        pointHitRadius: window.pointHitRadiusLine,
        borderWidth: window.borderWidthLine,
        hoverRadius: window.hoverRadiusLine,
        hoverBorderWidth:window.hoverBorderWidthLine,
        hoverBorderColor:colorPosRateHoverLine,
        hoverBackgroundColor:colorPosRateHoverLine,
        fill: false,
        lineTension: 0.1,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  
      //aspectRatio: window.aspect,     
      title: {
        display: false,
        text: 'Positivity Rate; 7 Day Average ',
        fontColor: "#fff",
        fontFamily: "Work Sans",
        fontSize: window.titleFontSize,
      },
      legend: {display: false,},
      legendCallback: 
        function(chart) { 
          var text = []; 
          text.push('<ul class="' + chart.id + '-legend">'); 
          for (var i = 0; i < chart.data.datasets.length; i++) { 
            if (chart.data.datasets[i].label) { 
              text.push('<li class="chart-legend-label-text legendItemPosRate90 hidden' + chart.data.datasets[i].hidden + '" onclick="updateDatasetPosRate90(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" onkeypress="updateDatasetPosRate90(event, ' + '\'' + chart.legend.legendItems[i].datasetIndex + '\'' + ')" data-legend="' + chart.legend.legendItems[i].datasetIndex + '" tabindex="0"><span class="legendSquarePosRate90" style="background-color:' + chart.data.datasets[i].borderColor + '; border-color:' + chart.data.datasets[i].borderColor + '"></span>' + chart.data.datasets[i].label + '</li>');
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
        titleFontSize: 14,
        bodyFontSize: 14,
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
        intersect: true,
      },
      scales: {
        xAxes: [{
          display:true,
          offset:true,
          type: 'time',
          time: {
            unit: 'day',
          },
          scaleLabel: {display: false,},
          ticks:{
            fontColor: "#fff",
            fontSize: window.xAxisFontSize,
            autoSkip: true,
            minRotation:window.xAxisMinRotation,
            maxRotation:window.xAxisMaxRotation,
            autoSkipPadding: 60,
          },
          gridLines:{color:window.xAxisGridColor}
        }],
        yAxes: [{
          display: true,
          //type: 'logarithmic',
          scaleLabel: {display: false,},
          ticks:{
            callback: function(tick) {
              return tick.toString() + '%';
            },
            mirror: window.yAxisTickMirror,
            fontColor: "#fff",
            fontSize: window.yAxisFontSize,
            autoSkip: true,
            maxRotation: 0,
            autoSkipPadding: 40,
            min:0,
            //max:30,
            //stepSize: 2,
          },

          afterTickToLabelConversion: function(scaleInstance) { // set the first tick (0) to null so it does not display
            scaleInstance.ticks[scaleInstance.ticks.length - 1] = null;
            scaleInstance.ticksAsNumbers[scaleInstance.ticksAsNumbers.length - 1] = null;
          },
          gridLines:{
            color:window.yAxisGridColor,
            drawTicks: window.yAxisTickDisplay,
            tickMarkLength:window.yAxisTickMarkLengthA,
            drawBorder:false,
          },
        }],

      }
    }
  };

  updateDatasetPosRate90 = function(e, datasetIndex) {
    var index = datasetIndex;
    var ciPosRate90 = e.view.myLinePosRate90;
    var meta = ciPosRate90.getDatasetMeta(index);
    $('#legendContainerPosRate90 li[data-legend='+index+']').toggleClass("hiddentrue").toggleClass("hiddenundefined");

    meta.hidden = meta.hidden === null? !ciPosRate90.data.datasets[index].hidden : null;

    // After hiding dataset, rerender the chart
    ciPosRate90.update();
  };



		window.onload = function() {
			var ctx = document.getElementById('canvasCumul').getContext('2d');
			window.myLineCumul = new Chart(ctx, configCumul);
      document.getElementById("legendContainerCumul").innerHTML = myLineCumul.generateLegend();
      var legendItems = legendContainerCumul.getElementsByTagName('li');
      
      // Daily new cases bar graph initiation & custom legend generation
      var ctx = document.getElementById('canvasDaily').getContext('2d');
			window.myBarDaily = new Chart(ctx, configDaily);
      document.getElementById("legendContainerDaily").innerHTML = myBarDaily.generateLegend();
      var legendItems = legendContainerDaily.getElementsByTagName('li');
      
      // Hospitalizations line graph initiation
      var ctx = document.getElementById('canvasHosp').getContext('2d');
			window.myLineHosp = new Chart(ctx, configHosp);
      document.getElementById("legendContainerHosp").innerHTML = myLineHosp.generateLegend();
      var legendItems = legendContainerHosp.getElementsByTagName('li');
      
      // Daily Hospitalizations Bar graph initiation
      var ctx = document.getElementById('canvasDailyHosp').getContext('2d');
      window.myBarDailyHosp = new Chart(ctx, configDailyHosp);
      document.getElementById("legendContainerDailyHosp").innerHTML = myBarDailyHosp.generateLegend();
      var legendItems = legendContainerDailyHosp.getElementsByTagName('li');
      
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

      // Total tests stacked line graph & custom legend generation
      var ctx = document.getElementById('canvasTest').getContext('2d');
			window.myLineTest = new Chart(ctx, configTest);
      document.getElementById("legendContainerTest").innerHTML = myLineTest.generateLegend();
      var legendItems = legendContainerTest.getElementsByTagName('li');

      // Positivity rate graph & custom legend generation
      var ctx = document.getElementById('canvasPosRate').getContext('2d');
			window.myLinePosRate = new Chart(ctx, configPosRate);
      document.getElementById("legendContainerPosRate").innerHTML = myLinePosRate.generateLegend();
      var legendItems = legendContainerPosRate.getElementsByTagName('li');
       
      var ctx = document.getElementById('canvasPosRate90').getContext('2d');
			window.myLinePosRate90 = new Chart(ctx, configPosRate90);
      document.getElementById("legendContainerPosRate90").innerHTML = myLinePosRate90.generateLegend();
      var legendItems = legendContainerPosRate90.getElementsByTagName('li'); 
       
      //var ctx = document.getElementById('canvasPop').getContext('2d');
			//window.myBarPop = new Chart(ctx, configPop);
		};

