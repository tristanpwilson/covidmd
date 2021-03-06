// JavaScript Document

latestData();

//--------------------------------------------------------//
//---- Section for Parsing & Readying Data for Charts ----//
//--------------------------------------------------------//

//Pulling & Cleaning Case Data
var caseNumbers = countiesData.features[24].properties.history;
var deathNumbers = countiesData.features[24].properties.historydeaths;
var recoveryNumbers = countiesData.features[24].properties.historyrecoveries;
var negTestNumbers = countiesData.features[24].properties.historynegativetests;
var posRateNumbers = countiesData.features[24].properties.historyPositivityRateAvg;
var posRateNumbers90 = posRateNumbers.slice(-90);

//Pulling & Cleaning Hospitalization Data
var historyNowHosp = countiesData.features[24].properties.historyNowHospitalized;
var historyAcute = countiesData.features[24].properties.historyAcuteCare;
var historyIntensive = countiesData.features[24].properties.historyIntensiveCare;
var historyEverHosp = countiesData.features[24].properties.historyEverHospitalized;

// Timeline data (dates) to use for x-axes
var caseTimeline = countiesData.features[24].properties.dates;
var caseTimeline90 = caseTimeline.slice(-90);

// Function to calculate sequential difference between values in array
function diff(ary) {
  var newA = [];
  for (var i = 1; i < ary.length; i++)  newA.push(ary[i] - ary[i - 1])
  return newA;
}

  // Calculating daily change in Cases
  var dailyCaseChange = diff(caseNumbers);
  var adjDailyCaseChange = dailyCaseChange.unshift(1);
  
  // Calculating daily change in deaths
  var dailyDeathChange = diff(deathNumbers);
  var adjDailyDeathChange = dailyDeathChange.unshift(1);
  
  // Calculating daily change in Recoveries
  var dailyRecoveryChange = diff(recoveryNumbers);
  var adjDailyRecoveryChange = dailyRecoveryChange.unshift(1);
  
  // Calculating daily change in Negative Tests
  var dailyNegTestChange = diff(negTestNumbers);
  var adjDailyNegTestChange = dailyNegTestChange.unshift(1);
  
  // Calculating daily change in Intensive Hospitalizations
  var dailyNowHospChange = diff(historyNowHosp);
  var adjDailyNowHospChange = dailyNowHospChange.unshift(1);
  
  // Calculating daily change in Intensive Hospitalizations
  var dailyIntensiveChange = diff(historyIntensive);
  var adjDailyIntensiveChange = dailyIntensiveChange.unshift(1);
  
  // Calculating daily change in Acute Hospitalizations
  var dailyAcuteChange = diff(historyAcute);
  var adjDailyAcuteChange = dailyAcuteChange.unshift(1);



// Function to calculate 7 day moving average of values in an array
function avgMov(ary2) {
  var newB = [];
  for (var i = 0; i < ary2.length; i++) newB.push(((ary2[i] + ary2[i-1] + ary2[i-2] + ary2[i-3] + ary2[i-4] + ary2[i-5] + ary2[i-6])/7.0).toFixed(1))
  // /3.0)
  return newB;
}

// Function to calculate 3 day moving average of values in an array
function avgMov3(ary3) {
  var newC = [];
  for (var i = 0; i < ary3.length; i++) newC.push(((ary3[i] + ary3[i-1] + ary3[i-2])/3.0).toFixed(1))
  return newC;
}

// Function to calculate 10 day moving average of values in an array
function avgMov10(ary4) {
  var newD = [];
  for (var i = 0; i < ary4.length; i++) newD.push(((ary4[i] + ary4[i-1] + ary4[i-2] + ary4[i-3] + ary4[i-4] + ary4[i-5] + ary4[i-6] + ary4[i-7] + ary4[i-8] + ary4[i-9])/10.0).toFixed(1))
  return newD;
}

// Function to calculate 14 day moving average of values in an array
function avgMov14(ary5) {
  var newE = [];
  for (var i = 0; i < ary5.length; i++) newE.push(((ary5[i] + ary5[i-1] + ary5[i-2] + ary5[i-3] + ary5[i-4] + ary5[i-5] + ary5[i-6] + ary5[i-7] + ary5[i-8] + ary5[i-9] + ary5[i-10] + ary5[i-11] + ary5[i-12] + ary5[i-13])/14.0).toFixed(1))
  return newE;
}

  // Calculating moving average of daily change in Cases
  window.avgMovingCaseChange = avgMov(dailyCaseChange);

  // Calculating moving average of daily change in deaths
  var avgMovingDeathChange = avgMov(dailyDeathChange);
  var avgMoving14DeathChange = avgMov14(dailyDeathChange);
  
  // Calculating moving average of daily change in Recoveries
  var avgMovingRecoveryChange = avgMov(dailyRecoveryChange);
  var avgMoving14RecoveryChange = avgMov14(dailyRecoveryChange);
  
  // Calculating moving average of daily change in Negative Tests
  var avgMovingNegTestChange = avgMov(dailyNegTestChange);
  //var avgMoving14NegTestChange = avgMov14(dailyRecoveryChange);
  
  // Calculating moving average of daily change in Total Current Hospitalizations
  var avgMovingNowHospChange = avgMov(dailyNowHospChange);



//IN PROGRESS - DAILY CASES PER 100K POPULATION
//THIS WORKS; JUST NEED TO CHART (AND DECIDED WHY IT'S EVEN IMPORTANT)

  // Calculating daily change in Cases for 100K Calc
    //var caseNumbersB = countiesData.features[24].properties.history;
    //var dailyCaseChangeB = diff(caseNumbersB);
    //var adjDailyCaseChangeB = dailyCaseChangeB.unshift(1);

  // Function to calculate value per 100K population across array
    //function popCalc(ary6) {
    //  var newP = [];
    //  for (var i = 0; i < ary6.length; i++) newP.push(ary6[i] *= 0.0165407)
    //  return newP;
    //}

  // Calculating per 100K of daily change in total cases
    //var dailyPerHunThou = popCalc(dailyCaseChangeB);

  //alert(dailyPerHunThou);



//    Function and variables to graph value per 1000 county population across array
//    function popCalc(ary6, population) {
//      var newP = [];
//      for (var i = 0; i < ary6.length; i++) newP.push(ary6[i] *= 1000 / population)
//      return newP.map(a => a.toFixed(2));
//    }
//
//var caseCnty0 = popCalc(countiesData.features[0].properties.history, countiesData.features[0].properties.population);
//var caseCnty1 = popCalc(countiesData.features[1].properties.history, countiesData.features[1].properties.population);
//var caseCnty2 = popCalc(countiesData.features[2].properties.history, countiesData.features[2].properties.population);
//var caseCnty3 = popCalc(countiesData.features[3].properties.history, countiesData.features[3].properties.population);
//var caseCnty4 = popCalc(countiesData.features[4].properties.history, countiesData.features[4].properties.population);
//var caseCnty5 = popCalc(countiesData.features[5].properties.history, countiesData.features[5].properties.population);
//var caseCnty6 = popCalc(countiesData.features[6].properties.history, countiesData.features[6].properties.population);
//var caseCnty7 = popCalc(countiesData.features[7].properties.history, countiesData.features[7].properties.population);
//var caseCnty8 = popCalc(countiesData.features[8].properties.history, countiesData.features[8].properties.population);
//var caseCnty9 = popCalc(countiesData.features[9].properties.history, countiesData.features[9].properties.population);
//var caseCnty10 = popCalc(countiesData.features[10].properties.history, countiesData.features[10].properties.population);
//var caseCnty11 = popCalc(countiesData.features[11].properties.history, countiesData.features[11].properties.population);
//var caseCnty12 = popCalc(countiesData.features[12].properties.history, countiesData.features[12].properties.population);
//var caseCnty13 = popCalc(countiesData.features[13].properties.history, countiesData.features[13].properties.population);
//var caseCnty14 = popCalc(countiesData.features[14].properties.history, countiesData.features[14].properties.population);
//var caseCnty15 = popCalc(countiesData.features[15].properties.history, countiesData.features[15].properties.population);
//var caseCnty16 = popCalc(countiesData.features[16].properties.history, countiesData.features[16].properties.population);
//var caseCnty17 = popCalc(countiesData.features[17].properties.history, countiesData.features[17].properties.population);
//var caseCnty18 = popCalc(countiesData.features[18].properties.history, countiesData.features[18].properties.population);
//var caseCnty19 = popCalc(countiesData.features[19].properties.history, countiesData.features[19].properties.population);
//var caseCnty20 = popCalc(countiesData.features[20].properties.history, countiesData.features[20].properties.population);
//var caseCnty21 = popCalc(countiesData.features[21].properties.history, countiesData.features[21].properties.population);
//var caseCnty22 = popCalc(countiesData.features[22].properties.history, countiesData.features[22].properties.population);
//var caseCnty23 = popCalc(countiesData.features[23].properties.history, countiesData.features[23].properties.population);

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

//// Todays Cases per County + Population per County  
//var allCase = [];
//var allPop = [];
//var allCountyNames = [];
//var stateCase = countiesData.features[24].properties.statecases;
//for (var i = 0; i < countiesData.features.length; i ++){
//  var casesToday = countiesData.features[i].properties.cases;
//  var popCounties = countiesData.features[i].properties.population;
//  var countyNames = countiesData.features[i].properties.name;
//  allCase.push(casesToday);
//  allPop.push([popCounties]);
//  allCountyNames.push([countyNames]);
//}
//// Function to divide sequential values of two arrays then mult by 100 (i.e. get percent)
//function prctg(A, B) {
//  var newPrctg = [];
//  for (var i = 0; i < A.length; i++) {
//    newPrctg.push((A[i] / B[i])*100);
//  }
//  return newPrctg;
//}
//// Calculating percent cases out of population per county
//var casePrctgCounties = prctg(allCase, allPop);
//// Rounding percent value to 3 decimal places
//var casePrctgCountiesRnd = casePrctgCounties.map(function(each_element){
//    return Number(each_element.toFixed(3));
//});





//--------------------------------------------------------//
//--- Section for Assigning Color Variables for Charts ---//
//--------------------------------------------------------//

// Color Variables for All Charts (Used in "linechart.js")
var colorCaseBorder = "rgba(223, 97, 95, .95)";
var colorCaseBackground = "rgba(223, 97, 95, 0.9)";
var colorCaseBackgroundSolid = "rgba(160,87,83,1.00)";
var colorCaseBackgroundHover = "rgba(255, 107, 105, 1.0)";
var colorCaseBorderLine = "rgba(223, 97, 95, 1)";
var colorCaseBackgroundLine = "rgba(235,121,121, .2)";
var colorCaseBackgroundLineLight = "rgba(235,121,121, .1)";
var colorCaseHoverLine = "rgba(223, 97, 95, 1)";
var colorCaseAvgLine = "rgba(245, 170, 169, 1)";

var colorDeathBorder = "rgba(219,149,61,1)";
var colorDeathBackground = "rgba(239,161,63,0.9)";
var colorDeathBorderLine = "rgba(245,153,34,1.0)";
var colorDeathBackgroundLine = "rgba(245,153,34,0.5)";
var colorDeathHoverLine = "rgba(245,153,34,.9)";
var colorDeathAvgLine = "rgba(255, 213, 158, 1)"

var colorRecoveryBorder = "rgba(66,170,71,.95)";
var colorRecoveryBackground = "rgba(64,171,69,0.9)";
var colorRecoveryBorderLine = "rgba(31,173,37,1.00)";
var colorRecoveryBackgroundLine = "rgba(31,173,37,0.5)";
var colorRecoveryHoverLine = "rgba(31,173,37,1.00)";
var colorRecoveryAvgLine = "rgba(187, 242, 189, 1)"

var colorNowHospBorder = "rgba(81,174,181,1.00)";
var colorNowHospBackground = "rgba(81,174,181,0.6)";
var colorNowHospHover = "rgba(81,174,181,1.00)";

var colorAcuteBorder = "rgba(221,122,176,1.00)";
var colorAcuteBackground = "rgba(161,96,131,1.00)";
var colorAcuteHover = "rgba(221,122,176,1.00)";

var colorIntensiveBorder = "rgba(179,119,191,1.00)";
var colorIntensiveBackground = "rgba(137,93,150,1.0)";
var colorIntensiveHover = "rgba(157,111,171,1.00)";

var colorEverHospBorder = "rgba(86,80,132,1.00)";
var colorEverHospBackground = "rgba(86,80,132,0.6)";
var colorEverHospHover = "rgba(86,80,132,1.00)";

var colorNegTestBorder = "rgba(110,169,225,1.00)";
var colorNegTestBackground = "rgba(110,169,225,0.4)";
var colorNegTestBackgroundSolid = "rgba(81,114,147,1.00)";
var colorNegTestHover = "rgba(109,188,245,1.00)";
var colorNegTestAvgLine = "rgba(166,210,251,1.00)";

var colorPosRateBorderLine = "rgba(239,220,121,1.00)";
var colorPosRateBackgroundLine = "rgba(239,220,121,.2)";
var colorPosRateHoverLine = "rgba(244,232,173,1.00)";


// Color variables for County Charts (Randomized + New Contrasting)
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


