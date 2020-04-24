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


    if($(window).width() <= 575) {
      window.aspect = 1.25;
      window.legendFontSize = 12;
      window.titleFontSize = 15;
    } else {
      window.aspect = 1.5;
      window.legendFontSize = 14;
      window.titleFontSize = 16;
    }
   
   //if($(window).width() <= 575) {} else if($(window).width() > 575 && $(window).width() <= 767) { } else{ }

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
                  unitStepSize: 5,          
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
					label: 'Cases',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: "rgba(230, 84, 83, 0.9)",
					//backgroundColor: "rgba(255, 107, 105, 0.8)",
          backgroundColor: "rgba(230, 84, 83, 0.9)",
					data: dailyCaseChange,
          barPercentage: 1,
          categoryPercentage: 0.9,
          //barThickness: 'flex',
				},
        {
					label: 'Deaths',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: "rgba(245,153,34,.9)",
					backgroundColor: "rgba(245,153,34,.9)",
					data: dailyDeathChange,
          barPercentage: 1,
          categoryPercentage: 0.9,
          hidden: false,
				},
        {
					label: 'Recoveries',
          pointRadius: 0,
          borderWidth: 2,
          borderColor: "rgba(31,173,37,0.9)",
					backgroundColor: "rgba(31,173,37,0.9)",
					data: dailyRecoveryChange,
          barPercentage: 1,
          categoryPercentage: 0.9,
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
                  unitStepSize: 5,          
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

		//var colorNames = Object.keys(window.chartColors);
    

    
