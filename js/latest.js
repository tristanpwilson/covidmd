// JavaScript Document

//Function to be called in main js
function latestData () {
  
countiesData.features[24].properties.history = [39,57,85,108,150,195,245,290,349,423,581,790,1066,1244,1415,1662,1985,2331,2758,3125,3609,4045,4371,5529,6185,6968,7694,8228,8936,9472,10032,10734,11572,12308,12830,13684,14193,14775,15737,16616,17766,18581,19487,20113,];
countiesData.features[24].properties.historydeaths = [0,0,1,1,2,3,3,3,4,4,4,5,10,11,15,18,24,29,42,54,68,92,104,124,139,172,207,236,262,302,351,372,408,463,486,516,584,631,748,798,875,910,945,1016,];
countiesData.features[24].properties.historyrecoveries = [3,3,3,3,3,3,3,3,3,3,3,25,32,39,43,53,69,81,159,159,159,184,288,365,365,365,431,456,603,607,607,736,736,771,914,917,930,981,1040,1108,1165,1177,1263,1295,];
countiesData.features[24].properties.dates = ["3/16/2020", "3/17/2020", "3/18/2020", "3/19/2020", "3/20/2020", "3/21/2020", "3/22/2020", "3/23/2020", "3/24/2020", "3/25/2020", "3/26/2020", "3/27/2020", "3/28/2020", "3/29/2020", "3/30/2020", "3/31/2020", "4/1/2020", "4/2/2020", "4/3/2020", "4/4/2020", "4/5/2020", "4/6/2020", "4/7/2020", "4/8/2020","4/9/2020","4/10/2020","4/11/2020","4/12/2020","4/13/2020","4/14/2020","4/15/2020","4/16/2020","4/17/2020","4/18/2020","4/19/2020","4/20/2020","4/21/2020","4/22/2020","4/23/2020","4/24/2020","4/25/2020","4/26/2020","4/27/2020","4/28/2020"];

//Per County Case History Arrays
countiesData.features[0].properties.history = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,6,6,7,6,8,10,11,13,15,17,17,20,26,33,33,32,56,58,77,90,105,113,114,115,];
countiesData.features[1].properties.history = [2,3,4,5,10,16,19,20,24,31,42,63,88,99,110,127,158,206,249,289,319,343,370,466,505,554,615,659,724,783,845,896,966,1005,1047,1098,1157,1190,1294,1373,1430,1510,1544,1571,];
countiesData.features[2].properties.history = [4,4,7,13,13,19,28,35,42,51,81,103,141,162,186,227,289,353,427,491,590,648,652,866,979,1072,1173,1257,1361,1377,1485,1516,1569,1664,1733,1875,1925,2012,2132,2234,2387,2509,2548,2631,];
countiesData.features[3].properties.history = [1,3,7,7,11,15,24,31,41,53,72,103,112,129,152,187,221,265,313,343,394,435,459,571,638,689,756,812,873,962,1060,1060,1273,1378,1392,1511,1542,1602,1672,1728,1791,1866,1933,1977,];
countiesData.features[4].properties.history = [0,0,0,1,1,1,2,2,3,3,7,9,9,14,12,15,18,22,30,33,39,40,41,56,66,76,82,90,94,99,102,103,109,109,113,114,116,118,121,125,130,134,138,139,];
countiesData.features[5].properties.history = [0,0,0,0,0,1,1,1,1,1,1,1,1,3,4,4,4,4,4,4,4,6,11,11,12,12,15,17,21,21,22,23,28,33,33,39,41,41,50,55,61,63,68,69,];
countiesData.features[6].properties.history = [1,1,1,2,4,4,4,5,5,5,7,9,83,83,83,94,96,105,129,134,142,150,159,186,203,214,214,236,250,259,262,283,288,308,313,335,330,344,355,372,384,391,403,416,];
countiesData.features[7].properties.history = [0,0,0,0,0,0,1,1,3,4,4,9,13,13,13,14,16,20,25,33,36,37,41,49,54,64,66,74,83,85,90,101,127,131,131,134,134,134,140,144,146,154,163,163,];
countiesData.features[8].properties.history = [1,1,2,2,2,4,5,5,5,8,10,17,21,28,33,40,56,69,90,95,111,129,136,164,180,220,235,253,274,292,310,327,337,347,370,392,401,427,442,459,483,504,529,539,];
countiesData.features[9].properties.history = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,3,4,7,7,8,12,12,14,16,18,20,20,21,23,25,28,31,32,38,46,51,52,];
countiesData.features[10].properties.history = [1,1,1,1,1,1,1,4,4,7,14,15,22,24,26,33,35,45,54,73,112,138,151,199,233,289,341,368,417,441,442,497,525,557,591,616,632,658,690,765,814,834,865,870,];
countiesData.features[11].properties.history = [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,];
countiesData.features[12].properties.history = [2,2,3,3,5,5,5,5,5,5,9,18,21,23,24,25,34,37,41,44,52,55,59,86,101,110,120,129,142,147,152,161,176,195,210,226,232,267,280,289,302,319,352,358,];
countiesData.features[13].properties.history = [1,3,8,16,18,19,24,26,30,35,49,62,73,81,96,117,142,152,166,180,199,214,236,274,299,319,351,371,386,403,424,451,475,508,515,538,565,592,618,642,686,707,778,802,];
countiesData.features[14].properties.history = [0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,3,3,5,5,5,5,5,8,9,9,9,10,11,11,11,11,11,14,16,18,28,29,36,64,67,67,68,70,73,];
countiesData.features[15].properties.history = [15,24,31,33,51,68,83,93,107,127,164,208,255,301,341,388,447,498,566,640,693,793,871,1088,1214,1388,1537,1631,1756,1883,1933,2133,2280,2404,2507,2647,2768,2868,3060,3227,3483,3645,3843,4003,];
countiesData.features[16].properties.history = [10,14,20,23,31,36,40,47,63,76,101,148,196,247,294,341,403,473,563,653,785,916,1020,1310,1476,1716,1923,2035,2205,2356,2516,2772,2966,3160,3345,3583,3734,3875,4141,4403,4795,4987,5263,5496,];
countiesData.features[17].properties.history = [0,0,0,0,0,0,0,1,1,1,1,1,1,4,4,4,7,8,12,13,13,15,15,16,17,17,19,19,19,19,19,19,19,24,25,26,27,31,33,43,52,53,54,55,];
countiesData.features[18].properties.history = [0,0,0,0,0,0,1,1,2,2,4,4,8,9,9,15,19,27,30,34,40,41,46,62,65,71,73,82,95,98,99,98,100,101,105,107,107,112,115,119,124,133,144,145,];
countiesData.features[19].properties.history = [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,6,5,5,6,9,10,10,11,11,11,12,13,14,16,19,20,];
countiesData.features[20].properties.history = [1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,3,3,4,5,6,7,8,8,10,13,13,13,14,16,16,14,14,14,16,19,22,22,23,25,23,28,34,34,34,];
countiesData.features[21].properties.history = [0,0,0,0,0,1,1,2,2,2,2,5,6,6,7,11,15,17,27,29,34,37,44,57,60,66,72,75,93,96,106,109,116,116,117,123,126,127,139,143,154,173,181,187,];
countiesData.features[22].properties.history = [0,0,0,1,1,2,2,4,4,4,5,6,6,6,7,7,7,7,7,8,11,11,17,20,21,28,33,42,58,63,76,87,103,138,145,166,176,183,203,222,242,270,336,340,];
countiesData.features[23].properties.history = [0,0,0,0,1,1,2,2,2,2,2,2,2,2,3,3,4,5,5,7,9,10,10,10,16,16,19,20,21,21,22,25,28,31,33,34,33,34,39,44,46,48,53,54,];


// Cases
// Populating Todays 'cases' JSON by taking the last value in the 'history' JSON array
countiesData.features[0].properties.cases = countiesData.features[0].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[1].properties.cases = countiesData.features[1].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[2].properties.cases = countiesData.features[2].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[3].properties.cases = countiesData.features[3].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[4].properties.cases = countiesData.features[4].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[5].properties.cases = countiesData.features[5].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[6].properties.cases = countiesData.features[6].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[7].properties.cases = countiesData.features[7].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[8].properties.cases = countiesData.features[8].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[9].properties.cases = countiesData.features[9].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[10].properties.cases = countiesData.features[10].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[11].properties.cases = countiesData.features[11].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[12].properties.cases = countiesData.features[12].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[13].properties.cases = countiesData.features[13].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[14].properties.cases = countiesData.features[14].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[15].properties.cases = countiesData.features[15].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[16].properties.cases = countiesData.features[16].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[17].properties.cases = countiesData.features[17].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[18].properties.cases = countiesData.features[18].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[19].properties.cases = countiesData.features[19].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[20].properties.cases = countiesData.features[20].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[21].properties.cases = countiesData.features[21].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[22].properties.cases = countiesData.features[22].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[23].properties.cases = countiesData.features[23].properties.history[countiesData.features[0].properties.history.length-1];
countiesData.features[24].properties.statecases = countiesData.features[24].properties.history[countiesData.features[0].properties.history.length-1];

// Prevcases
// Populating yesterdays 'prevcases' JSON by taking the 2nd from last value in the 'history' JSON array
countiesData.features[0].properties.prevcases = countiesData.features[0].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[1].properties.prevcases = countiesData.features[1].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[2].properties.prevcases = countiesData.features[2].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[3].properties.prevcases = countiesData.features[3].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[4].properties.prevcases = countiesData.features[4].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[5].properties.prevcases = countiesData.features[5].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[6].properties.prevcases = countiesData.features[6].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[7].properties.prevcases = countiesData.features[7].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[8].properties.prevcases = countiesData.features[8].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[9].properties.prevcases = countiesData.features[9].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[10].properties.prevcases = countiesData.features[10].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[11].properties.prevcases = countiesData.features[11].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[12].properties.prevcases = countiesData.features[12].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[13].properties.prevcases = countiesData.features[13].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[14].properties.prevcases = countiesData.features[14].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[15].properties.prevcases = countiesData.features[15].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[16].properties.prevcases = countiesData.features[16].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[17].properties.prevcases = countiesData.features[17].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[18].properties.prevcases = countiesData.features[18].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[19].properties.prevcases = countiesData.features[19].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[20].properties.prevcases = countiesData.features[20].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[21].properties.prevcases = countiesData.features[21].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[22].properties.prevcases = countiesData.features[22].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[23].properties.prevcases = countiesData.features[23].properties.history[countiesData.features[0].properties.history.length-2];
countiesData.features[24].properties.prevstatecases = countiesData.features[24].properties.history[countiesData.features[0].properties.history.length-2];

//deaths
countiesData.features[0].properties.deaths = 5;
countiesData.features[1].properties.deaths = 78;
countiesData.features[2].properties.deaths = 107;
countiesData.features[3].properties.deaths = 90;
countiesData.features[4].properties.deaths = 8;
countiesData.features[5].properties.deaths = 0;
countiesData.features[6].properties.deaths = 44;
countiesData.features[7].properties.deaths = 6;
countiesData.features[8].properties.deaths = 39;
countiesData.features[9].properties.deaths = 2;
countiesData.features[10].properties.deaths = 48;
countiesData.features[11].properties.deaths = 0;
countiesData.features[12].properties.deaths = 13;
countiesData.features[13].properties.deaths = 18;
countiesData.features[14].properties.deaths = 4;
countiesData.features[15].properties.deaths = 221;
countiesData.features[16].properties.deaths = 206;
countiesData.features[17].properties.deaths = 4;
countiesData.features[18].properties.deaths = 7;
countiesData.features[19].properties.deaths = 0;
countiesData.features[20].properties.deaths = 1;
countiesData.features[21].properties.deaths = 3;
countiesData.features[22].properties.deaths = 5;
countiesData.features[23].properties.deaths = 1;
countiesData.features[24].properties.deaths = 1016;

//prevdeaths
countiesData.features[0].properties.prevdeaths = 4;
countiesData.features[1].properties.prevdeaths = 74;
countiesData.features[2].properties.prevdeaths = 98;
countiesData.features[3].properties.prevdeaths = 88;
countiesData.features[4].properties.prevdeaths = 7;
countiesData.features[5].properties.prevdeaths = 0;
countiesData.features[6].properties.prevdeaths = 37;
countiesData.features[7].properties.prevdeaths = 5;
countiesData.features[8].properties.prevdeaths = 37;
countiesData.features[9].properties.prevdeaths = 2;
countiesData.features[10].properties.prevdeaths = 48;
countiesData.features[11].properties.prevdeaths = 0;
countiesData.features[12].properties.prevdeaths = 11;
countiesData.features[13].properties.prevdeaths = 17;
countiesData.features[14].properties.prevdeaths = 4;
countiesData.features[15].properties.prevdeaths = 210;
countiesData.features[16].properties.prevdeaths = 198;
countiesData.features[17].properties.prevdeaths = 3;
countiesData.features[18].properties.prevdeaths = 6;
countiesData.features[19].properties.prevdeaths = 0;
countiesData.features[20].properties.prevdeaths = 1;
countiesData.features[21].properties.prevdeaths = 3;
countiesData.features[22].properties.prevdeaths = 5;
countiesData.features[23].properties.prevdeaths = 0;
countiesData.features[24].properties.prevdeaths = 945;

//recoveries
countiesData.features[0].properties.recoveries = 0;
countiesData.features[1].properties.recoveries = 8;
countiesData.features[2].properties.recoveries = 6;
countiesData.features[3].properties.recoveries = 11;
countiesData.features[4].properties.recoveries = 0;
countiesData.features[5].properties.recoveries = 0;
countiesData.features[6].properties.recoveries = 0;
countiesData.features[7].properties.recoveries = 0;
countiesData.features[8].properties.recoveries = 1;
countiesData.features[9].properties.recoveries = 0;
countiesData.features[10].properties.recoveries = 6;
countiesData.features[11].properties.recoveries = 0;
countiesData.features[12].properties.recoveries = 7;
countiesData.features[13].properties.recoveries = 1;
countiesData.features[14].properties.recoveries = 0;
countiesData.features[15].properties.recoveries = 20;
countiesData.features[16].properties.recoveries = 11;
countiesData.features[17].properties.recoveries = 0;
countiesData.features[18].properties.recoveries = 0;
countiesData.features[19].properties.recoveries = 0;
countiesData.features[20].properties.recoveries = 0;
countiesData.features[21].properties.recoveries = 0;
countiesData.features[22].properties.recoveries = 0;
countiesData.features[23].properties.recoveries = 0;
countiesData.features[24].properties.recoveries = 1295;

//prevrecoveries
countiesData.features[24].properties.prevrecoveries = 1263;

}  
