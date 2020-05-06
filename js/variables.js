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


var historyNowHosp = countiesData.features[24].properties.historyNowHospitalized;
var historyAcute = countiesData.features[24].properties.historyAcuteCare;
var historyIntensive = countiesData.features[24].properties.historyIntensiveCare;
var historyEverHosp = countiesData.features[24].properties.historyEverHospitalized;


// Todays Cases per County + Population per County  
var allCase = [];
var allPop = [];
var allCountyNames = [];
var stateCase = countiesData.features[24].properties.statecases;
for (var i = 0; i < countiesData.features.length; i ++){
  var casesToday = countiesData.features[i].properties.cases;
  var popCounties = countiesData.features[i].properties.population;
  var countyNames = countiesData.features[i].properties.name;
  allCase.push(casesToday);
  allPop.push([popCounties]);
  allCountyNames.push([countyNames]);
}

// Function to divide sequential values of two arrays then mult by 100 (i.e. get percent)
function prctg(A, B) {
  var newPrctg = [];
  for (var i = 0; i < A.length; i++) {
    newPrctg.push((A[i] / B[i])*100);
  }
  return newPrctg;
}

  // Calculating percent cases out of population per county
  var casePrctgCounties = prctg(allCase, allPop);
  // Rounding percent value to 3 decimal places
  casePrctgCountiesRnd = casePrctgCounties.map(function(each_element){
      return Number(each_element.toFixed(3));
  });
  //alert(allPop);



// Case Data for County Cases Line Chart
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

// Case Data for County Cases Line Chart
var caseCntyDth0 = countiesData.features[0].properties.historydeaths;
var caseCntyDth1 = countiesData.features[1].properties.historydeaths;
var caseCntyDth2 = countiesData.features[2].properties.historydeaths;
var caseCntyDth3 = countiesData.features[3].properties.historydeaths;
var caseCntyDth4 = countiesData.features[4].properties.historydeaths;
var caseCntyDth5 = countiesData.features[5].properties.historydeaths;
var caseCntyDth6 = countiesData.features[6].properties.historydeaths;
var caseCntyDth7 = countiesData.features[7].properties.historydeaths;
var caseCntyDth8 = countiesData.features[8].properties.historydeaths;
var caseCntyDth9 = countiesData.features[9].properties.historydeaths;
var caseCntyDth10 = countiesData.features[10].properties.historydeaths;
var caseCntyDth11 = countiesData.features[11].properties.historydeaths;
var caseCntyDth12 = countiesData.features[12].properties.historydeaths;
var caseCntyDth13 = countiesData.features[13].properties.historydeaths;
var caseCntyDth14 = countiesData.features[14].properties.historydeaths;
var caseCntyDth15 = countiesData.features[15].properties.historydeaths;
var caseCntyDth16 = countiesData.features[16].properties.historydeaths;
var caseCntyDth17 = countiesData.features[17].properties.historydeaths;
var caseCntyDth18 = countiesData.features[18].properties.historydeaths;
var caseCntyDth19 = countiesData.features[19].properties.historydeaths;
var caseCntyDth20 = countiesData.features[20].properties.historydeaths;
var caseCntyDth21 = countiesData.features[21].properties.historydeaths;
var caseCntyDth22 = countiesData.features[22].properties.historydeaths;
var caseCntyDth23 = countiesData.features[23].properties.historydeaths;

// Names for County Cases Line Chart
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




// Colors for County Cases Line Chart (Randomized + New Contrasting)
var colorCnty0 = '#C45256';
var colorCnty1 = '#4DC9C9';
var colorCnty2 = '#3F5BAE';
var colorCnty3 = '#5DA522';
var colorCnty4 = '#6D3293';
var colorCnty5 = '#54D7AB';
var colorCnty6 = '#4A38A1';
var colorCnty7 = '#5CE47F';
var colorCnty8 = '#CBC3ff';
var colorCnty9 = '#737373';
var colorCnty10 = '#FF8D51';
var colorCnty11 = '#FFE65A';
var colorCnty12 = '#ECCDCD';
var colorCnty13 = '#FF4973';
var colorCnty14 = '#862C86';
var colorCnty15 = '#F79F40';
var colorCnty16 = '#ff6666';
var colorCnty17 = '#792669';
var colorCnty18 = '#4694BC';
var colorCnty19 = '#D6E8AF';
var colorCnty20 = '#77F264';
var colorCnty21 = '#E6B64E';
var colorCnty22 = '#AAAAAA';
var colorCnty23 = '#6B213D';

// Original non-randomized colors
//var colorCnty0 = '#6B213D';
//var colorCnty1 = '#792669';
//var colorCnty2 = '#862C86';
//var colorCnty3 = '#6D3293';
//var colorCnty4 = '#4A38A1';
//var colorCnty5 = '#3F5BAE';
//var colorCnty6 = '#4694BC';
//var colorCnty7 = '#4DC9C9';
//var colorCnty8 = '#54D7AB';
//var colorCnty9 = '#5CE47F';
//var colorCnty10 = '#77F264';
//var colorCnty11 = '#B7FF6C';
//var colorCnty12 = '#D0FF68';
//var colorCnty13 = '#EBFF65';
//var colorCnty14 = '#FFFF61';
//var colorCnty15 = '#FFFF5E';
//var colorCnty16 = '#FFE65A';
//var colorCnty17 = '#FFCA57';
//var colorCnty18 = '#FFAD54';
//var colorCnty19 = '#FF8D51';
//var colorCnty20 = '#FF6A4F';
//var colorCnty21 = '#FF4C52';
//var colorCnty22 = '#FF4973';
//var colorCnty23 = '#FF4973';


// Colors for Daily State Bar Charts
var colorCaseBorder = "rgba(223, 97, 95, .95)";
var colorCaseBackground = "rgba(223, 97, 95, 0.9)";
var colorCaseBackgroundHover = "rgba(255, 107, 105, 1.0)";
var colorCaseBorderLine = "rgba(255, 107, 105, 0.9)";
var colorCaseBackgroundLine = "rgba(255, 107, 105, 0.5)";

var colorDeathBorder = "rgba(219,149,61,1)";
var colorDeathBackground = "rgba(239,161,63,0.9)";
var colorDeathBorderLine = "rgba(245,153,34,.9)";
var colorDeathBackgroundLine = "rgba(245,153,34,.6)";

var colorRecoveryBorder = "rgba(66,170,71,.95)";
var colorRecoveryBackground = "rgba(64,171,69,0.9)";
var colorRecoveryBorderLine = "rgba(31,173,37,1.00)";
var colorRecoveryBackgroundLine = "rgba(31,173,37,.7)";


var colorNowHospBorder = "rgba(81,174,181,1.00)";
var colorNowHospBackground = "rgba(81,174,181,0.6)";
var colorNowHospHover = "rgba(81,174,181,1.00)";

var colorAcuteBorder = "rgba(221,122,176,1.00)";
var colorAcuteBackground = "rgba(161,96,131,1.00)";
//"rgba(221,122,176,0.6)";
var colorAcuteHover = "rgba(221,122,176,1.00)";

var colorIntensiveBorder = "rgba(179,119,191,1.00)";
var colorIntensiveBackground = "rgba(137,93,150,1.0)";
//"rgba(157,111,171,0.6)";
var colorIntensiveHover = "rgba(157,111,171,1.00)";

var colorEverHospBorder = "rgba(86,80,132,1.00)";
var colorEverHospBackground = "rgba(86,80,132,0.6)";
var colorEverHospHover = "rgba(86,80,132,1.00)";



