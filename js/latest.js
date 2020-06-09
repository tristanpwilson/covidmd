// JavaScript Document

//Function to be called in main js
function latestData () {

countiesData.features[24].properties.dates = ["3/16/2020","3/17/2020","3/18/2020","3/19/2020","3/20/2020","3/21/2020","3/22/2020","3/23/2020","3/24/2020","3/25/2020","3/26/2020","3/27/2020","3/28/2020","3/29/2020","3/30/2020","3/31/2020","4/1/2020","4/2/2020","4/3/2020","4/4/2020","4/5/2020","4/6/2020","4/7/2020","4/8/2020","4/9/2020","4/10/2020","4/11/2020","4/12/2020","4/13/2020","4/14/2020","4/15/2020","4/16/2020","4/17/2020","4/18/2020","4/19/2020","4/20/2020","4/21/2020","4/22/2020","4/23/2020","4/24/2020","4/25/2020","4/26/2020","4/27/2020","4/28/2020","4/29/2020","4/30/2020","5/1/2020","5/2/2020","5/3/2020","5/4/2020","5/5/2020","5/6/2020","5/7/2020","5/8/2020","5/9/2020","5/10/2020","5/11/2020","5/12/2020","5/13/2020","5/14/2020","5/15/2020","5/16/2020","5/17/2020","5/18/2020","5/19/2020","5/20/2020","5/21/2020","5/22/2020","5/23/2020","5/24/2020","5/25/2020","5/26/2020","5/27/2020","5/28/2020","5/29/2020","5/30/2020","5/31/2020","6/1/2020","6/2/2020","6/3/2020","6/4/2020","6/5/2020","6/6/2020","6/7/2020","6/8/2020","6/9/2020"];

// History Arrays for State
countiesData.features[24].properties.history = [37,57,85,107,149,190,244,288,349,423,580,774,992,1239,1413,1660,1985,2331,2758,3125,3609,4045,4371,5529,6185,6968,7694,8225,8936,9472,10032,10784,11572,12308,12830,13684,14193,14775,15737,16616,17766,18581,19487,20113,20849,21742,23472,24473,25462,26408,27117,28163,29374,30485,31534,32587,33373,34061,34812,35903,36986,37968,38804,39762,41546,42323,43531,44424,45495,46313,47152,47687,48423,49709,50988,52015,52778,53327,54175,54982,55858,56770,57482,57973,58404,58904,];
countiesData.features[24].properties.historydeaths = [0,0,0,2,2,3,3,4,4,5,5,7,10,17,24,35,43,52,64,84,101,122,138,160,191,221,255,298,335,384,421,469,499,541,582,626,683,732,779,831,899,948,1001,1045,1099,1168,1226,1276,1323,1372,1424,1476,1520,1580,1643,1692,1739,1788,1834,1881,1935,1991,2040,2091,2125,2166,2200,2223,2277,2310,2345,2383,2423,2464,2507,2545,2569,2605,2636,2660,2690,2720,2744,2755,2776,2811,];
countiesData.features[24].properties.historyrecoveries = [3,3,3,3,3,3,3,3,3,3,3,25,32,39,43,53,69,81,159,159,159,184,288,365,365,365,431,456,603,607,607,736,736,771,914,917,930,981,1040,1108,1165,1177,1263,1295,1361,1432,1517,1590,1666,1695,1810,1903,2029,2041,2159,2293,2298,2394,2456,2569,2685,2806,2816,2817,2868,2993,3099,3243,3283,3319,3329,3334,3401,3468,3571,3649,3764,3782,3855,3970,3985,4159,4175,4240,4240,4279,];

// Case History Arrays Per County
countiesData.features[0].properties.history = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,6,6,7,6,8,10,11,13,15,17,17,20,26,33,33,32,56,58,77,90,105,113,114,115,116,118,118,121,124,126,129,129,143,143,144,146,146,148,149,150,151,160,161,164,166,166,166,168,168,170,176,176,177,178,177,177,178,180,181,182,182,183,184,184,185,186,];
countiesData.features[1].properties.history = [1,3,4,5,10,15,18,20,24,31,41,63,88,99,110,127,158,206,249,289,319,343,370,466,505,554,615,659,724,783,845,896,966,1005,1047,1098,1157,1190,1294,1373,1430,1510,1544,1571,1662,1725,1807,1885,1959,2018,2045,2085,2194,2290,2372,2463,2492,2520,2596,2661,2752,2801,2856,2893,2981,3033,3132,3207,3282,3307,3357,3394,3448,3556,3643,3743,3785,3842,3924,4009,4080,4150,4210,4236,4267,4309,];
countiesData.features[2].properties.history = [4,6,10,12,13,19,28,35,42,51,81,103,141,162,186,227,289,353,427,491,590,648,652,866,979,1072,1173,1257,1361,1377,1485,1516,1569,1664,1733,1875,1925,2012,2132,2234,2387,2509,2548,2631,2740,2831,3013,3183,3301,3448,3430,3527,3662,3763,3737,3862,3948,4051,4160,4290,4399,4549,4624,4749,4920,5025,5135,5170,5290,5373,5476,5498,5562,5678,5819,5955,6065,6299,6385,6457,6476,6590,6696,6753,6814,6852,];
countiesData.features[3].properties.history = [1,1,4,8,11,15,24,31,41,53,72,88,112,129,152,187,221,265,313,343,394,435,459,571,638,689,756,812,873,962,1060,1160,1273,1378,1392,1511,1542,1602,1672,1728,1791,1866,1933,1977,2014,2068,2162,2237,2319,2411,2609,2752,2856,2941,3208,3317,3353,3404,3476,3505,3606,3719,3798,3830,4002,4152,4339,4492,4673,4782,4888,4997,5054,5203,5426,5564,5664,5604,5688,5801,5906,6038,6141,6229,6296,6355,];
countiesData.features[4].properties.history = [0,0,0,1,1,1,2,2,3,3,7,9,8,10,12,15,18,22,30,33,39,40,41,56,66,76,82,90,94,99,102,103,109,109,113,114,116,118,121,125,130,134,138,139,142,150,161,160,162,171,174,184,188,191,202,206,209,211,214,225,228,237,241,245,255,259,278,291,298,304,307,308,314,320,329,334,341,349,352,348,352,353,354,358,362,363,];
countiesData.features[5].properties.history = [0,0,0,0,0,0,1,1,1,1,1,1,1,3,4,4,4,4,4,4,4,6,11,11,12,12,15,17,21,21,22,23,28,33,33,39,41,41,50,55,61,63,68,69,69,71,74,79,95,98,99,101,105,107,110,133,167,174,177,183,190,200,191,200,208,210,216,223,231,240,241,243,243,245,248,253,259,260,263,265,268,268,270,272,272,273,];
countiesData.features[6].properties.history = [1,1,1,2,3,3,4,5,5,5,7,9,10,82,82,92,96,105,129,134,142,150,159,186,203,214,214,236,250,259,262,283,288,308,313,335,330,344,355,372,384,391,403,416,421,436,460,480,494,506,513,521,534,542,551,560,583,589,595,619,635,633,646,703,712,720,733,755,765,783,802,811,817,840,861,880,913,914,927,940,947,960,950,952,954,963,];
countiesData.features[7].properties.history = [0,0,0,0,0,0,1,1,3,4,4,9,13,13,13,14,16,20,25,33,36,37,41,49,54,64,66,74,83,85,90,101,127,131,131,134,134,134,140,144,146,154,163,163,164,167,176,187,188,194,195,200,208,211,219,242,267,270,271,291,300,308,308,318,323,328,331,339,342,345,348,353,354,356,364,366,371,369,377,381,388,393,399,404,408,417,];
countiesData.features[8].properties.history = [1,1,2,2,2,4,4,5,5,8,10,17,21,28,33,40,56,69,90,95,111,129,136,164,180,220,235,253,274,292,310,327,337,347,370,392,401,427,442,459,483,504,529,539,551,564,611,622,637,651,660,670,698,716,729,748,756,761,778,796,829,844,859,867,895,921,943,956,969,989,997,1001,1008,1027,1056,1085,1108,1120,1133,1152,1174,1185,1196,1202,1211,1216,];
countiesData.features[9].properties.history = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,3,4,7,7,8,9,12,14,16,18,20,20,21,23,25,28,31,32,38,46,51,52,51,51,54,59,71,75,76,79,85,86,91,95,98,102,102,104,107,111,111,122,122,122,124,126,126,127,128,130,133,136,140,141,142,142,144,147,152,153,154,155,156,157,];
countiesData.features[10].properties.history = [0,1,1,1,1,1,1,2,4,7,14,15,22,24,26,33,35,45,54,73,112,138,151,199,233,289,341,368,417,441,442,497,525,557,591,616,632,658,690,765,814,834,865,870,893,918,942,976,1004,1038,1071,1108,1151,1182,1213,1251,1267,1282,1302,1325,1364,1402,1423,1460,1491,1533,1568,1625,1661,1696,1731,1746,1786,1824,1856,1890,1911,1928,1961,2005,2041,2069,2100,2114,2135,2152,];
countiesData.features[11].properties.history = [0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,6,6,6,6,6,6,7,6,7,7,7,7,7,7,7,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,];
countiesData.features[12].properties.history = [2,2,3,3,5,5,5,5,5,5,9,18,21,23,24,25,34,37,41,44,52,55,59,86,101,110,120,129,142,147,152,161,176,195,210,226,232,267,280,289,302,319,352,358,371,414,437,468,479,491,499,532,552,572,589,605,605,614,629,663,671,678,687,695,709,721,737,746,764,780,789,795,801,827,854,861,882,881,891,901,920,939,947,957,961,969,];
countiesData.features[13].properties.history = [1,3,8,16,18,19,24,26,30,35,49,62,73,81,96,117,142,152,166,180,199,214,236,274,299,319,351,371,386,403,424,451,475,508,515,538,565,592,618,642,686,707,778,802,831,867,896,931,969,992,1010,1061,1098,1138,1170,1205,1223,1234,1258,1285,1313,1352,1378,1416,1465,1494,1548,1586,1638,1667,1716,1732,1760,1815,1868,1905,1928,1944,1975,2004,2033,2074,2094,2125,2156,2191,];
countiesData.features[14].properties.history = [0,0,0,0,0,0,0,0,0,1,1,2,2,3,3,3,3,5,5,5,5,5,8,9,9,9,10,11,11,11,11,11,14,16,18,28,29,36,64,67,67,68,70,73,73,79,86,80,91,95,95,94,98,98,102,113,116,120,123,125,131,138,137,140,144,145,143,146,148,152,155,158,160,165,167,170,173,174,174,178,180,184,185,187,187,188,];
countiesData.features[15].properties.history = [10,24,31,33,51,68,83,93,107,127,164,208,255,301,341,388,447,498,566,640,693,793,871,1088,1214,1388,1537,1631,1756,1883,1933,2133,2280,2404,2507,2647,2768,2868,3060,3227,3483,3645,3843,4003,4152,4300,4754,4919,5150,5384,5541,5790,6032,6316,6555,6762,6909,7130,7283,7548,7759,7988,8206,8417,8950,9052,9260,9432,9699,9922,10111,10291,10467,10752,11035,11251,11361,11476,11731,11924,12226,12434,12624,12734,12818,12968,];
countiesData.features[16].properties.history = [15,14,20,23,31,36,40,47,63,76,101,148,196,247,294,341,403,473,563,653,785,916,1020,1310,1476,1716,1923,2035,2205,2356,2516,2722,2966,3160,3345,3583,3734,3875,4141,4403,4795,4987,5263,5496,5738,6043,6735,7041,7333,7598,7831,8135,8516,8901,9205,9496,9687,9892,10072,10449,10791,11031,11316,11608,12240,12446,12830,13077,13324,13521,13726,13819,14100,14508,14773,15022,15220,15353,15553,15738,15940,16169,16316,16434,16523,16636,];
countiesData.features[17].properties.history = [0,0,0,0,0,0,0,1,1,1,1,1,1,4,4,4,7,8,12,13,13,15,15,16,17,17,19,19,19,19,19,19,19,24,25,26,27,31,33,43,52,53,54,55,55,52,52,57,60,63,65,67,68,70,72,80,100,103,104,106,108,112,125,129,133,135,141,141,146,146,151,151,151,152,160,159,160,161,161,162,161,163,168,170,177,177,];
countiesData.features[18].properties.history = [0,0,0,0,0,0,1,1,2,2,4,4,8,8,9,15,19,27,30,34,40,41,46,62,65,71,73,82,95,98,99,98,100,101,105,107,107,112,115,119,124,133,144,145,145,150,159,164,165,168,170,186,193,207,234,241,244,246,254,271,299,306,313,326,338,340,357,370,379,393,395,400,400,417,460,471,499,505,518,536,542,547,548,553,553,561,];
countiesData.features[19].properties.history = [0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,6,5,5,6,9,10,10,11,11,11,12,13,14,16,19,20,21,26,30,32,33,35,37,39,40,41,42,43,50,51,51,51,54,55,57,61,62,64,71,71,71,72,72,73,73,73,73,73,73,73,74,75,76,76,76,76,77,77,];
countiesData.features[20].properties.history = [1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,3,3,4,5,6,7,8,8,10,13,13,13,14,16,16,14,14,14,16,19,22,22,23,25,23,28,34,34,34,34,35,35,39,44,45,45,45,52,55,58,60,61,61,62,64,65,68,68,68,68,69,70,73,77,79,86,86,84,87,91,96,99,101,101,103,106,106,108,108,108,108,];
countiesData.features[21].properties.history = [0,0,0,0,0,0,1,2,2,2,2,5,6,6,7,11,15,17,27,29,34,37,44,57,60,66,72,75,93,96,106,109,116,116,117,123,126,127,139,143,154,173,181,187,197,206,216,225,232,237,238,251,260,259,265,276,283,284,287,305,320,332,338,343,352,364,377,389,398,408,413,413,418,423,441,456,469,472,480,486,516,529,545,548,551,545,];
countiesData.features[22].properties.history = [0,0,0,0,1,2,2,4,4,4,5,5,6,6,6,7,7,7,7,8,11,11,17,20,21,28,33,42,58,63,76,87,103,138,145,166,176,183,203,222,242,270,336,340,350,406,425,452,473,480,500,517,541,553,558,571,690,694,738,754,777,801,818,837,839,848,844,854,859,867,892,908,910,919,931,943,953,955,955,959,959,967,975,977,984,990,];
countiesData.features[23].properties.history = [0,0,0,0,1,1,2,2,2,2,2,2,2,2,3,3,4,5,5,7,9,10,10,10,16,16,19,20,21,21,22,25,28,31,33,34,33,34,39,44,46,48,53,54,55,61,65,72,75,80,81,86,96,98,102,106,113,114,125,127,131,136,137,164,164,169,181,180,180,183,185,194,193,198,206,210,214,215,217,219,223,230,232,235,239,241,];

// Deaths History Arrays Per County
countiesData.features[0].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,3,3,3,3,3,4,5,6,7,7,8,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,15,15,16,16,17,17,17,17,16,16,16,16,16,17,];
countiesData.features[1].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,4,6,6,8,8,11,12,16,19,27,29,32,30,35,40,41,46,48,52,56,61,63,62,71,74,78,83,91,90,94,96,101,107,108,111,115,117,121,124,127,133,135,136,141,142,142,145,145,147,149,150,153,157,159,163,163,167,172,174,175,178,178,179,182,185,185,185,186,];
countiesData.features[2].properties.historydeaths = [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,4,6,11,11,13,16,21,26,30,31,32,32,37,44,45,50,50,59,64,66,71,69,81,98,107,118,123,129,139,147,151,157,163,169,177,185,191,194,204,218,223,234,240,250,255,263,277,286,292,299,300,307,312,320,323,336,340,344,349,358,366,371,376,384,386,388,398,];
countiesData.features[3].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,4,6,7,8,9,10,13,17,22,24,26,29,27,35,42,43,51,54,58,67,71,74,72,79,88,90,101,112,115,126,129,129,133,140,149,155,163,169,171,178,186,192,192,200,203,208,210,215,218,220,229,231,234,236,236,240,248,254,258,261,263,266,269,272,276,281,282,287,];
countiesData.features[4].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,1,1,1,1,1,1,2,2,3,3,4,5,6,6,7,7,7,8,8,8,9,10,10,11,11,11,11,11,11,11,11,13,13,13,13,13,13,13,13,14,15,15,15,15,16,16,18,17,17,18,18,18,18,20,20,20,21,21,21,21,];
countiesData.features[5].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,];
countiesData.features[6].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,5,5,5,6,8,10,16,18,18,19,25,25,28,29,22,23,27,28,28,31,31,32,34,34,36,36,37,44,45,46,46,46,46,47,52,55,54,56,58,58,58,60,61,62,64,66,67,68,69,71,70,73,76,76,79,80,86,85,85,90,90,92,93,96,98,98,101,101,101,102,];
countiesData.features[7].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,5,5,5,5,5,5,6,8,8,8,8,9,10,13,13,13,13,13,13,13,15,15,17,17,17,17,17,18,20,20,20,20,21,21,21,21,22,22,22,23,23,24,24,24,24,24,24,24,25,];
countiesData.features[8].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,3,4,5,9,10,12,11,13,15,16,17,20,23,30,32,34,34,35,37,39,42,44,46,47,50,50,50,52,51,54,53,54,54,55,57,59,61,62,62,62,63,64,65,67,69,69,69,70,71,72,72,72,72,73,73,75,79,79,81,80,80,82,];
countiesData.features[9].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,];
countiesData.features[10].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,3,4,4,4,4,9,11,12,12,14,27,29,30,31,30,30,33,35,36,41,39,45,48,48,51,56,56,59,61,62,66,68,70,70,72,74,74,77,80,84,88,89,90,90,90,93,94,95,96,98,99,101,103,104,105,105,105,106,107,109,109,110,111,111,111,111,];
countiesData.features[11].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[12].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,3,4,6,6,6,6,7,8,8,9,9,11,11,13,13,13,15,16,16,16,19,21,22,24,25,25,25,27,28,32,32,33,34,34,35,39,40,46,46,48,48,48,49,49,49,49,51,51,51,51,51,51,52,53,53,55,];
countiesData.features[13].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,3,3,3,3,3,4,5,6,6,8,9,10,11,11,12,12,13,13,14,15,15,15,16,17,18,19,19,19,20,20,22,23,25,27,27,29,29,31,35,38,40,40,43,43,45,49,50,49,50,52,52,52,53,54,56,58,58,58,61,61,61,65,65,65,67,68,71,];
countiesData.features[14].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,3,3,4,4,4,5,4,4,6,7,7,8,8,8,10,13,13,13,13,14,14,14,14,14,14,14,14,15,15,14,14,15,15,15,17,19,19,19,19,19,19,19,19,19,19,19,];
countiesData.features[15].properties.historydeaths = [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,6,9,9,13,19,21,26,29,34,36,42,48,54,58,70,78,86,96,106,116,126,139,154,171,180,210,221,242,255,262,282,295,301,320,333,345,355,369,382,388,407,422,437,449,461,475,480,503,515,528,540,550,558,562,567,572,581,595,605,612,616,624,633,636,645,652,656,659,667,];
countiesData.features[16].properties.historydeaths = [0,0,1,1,1,1,1,1,2,2,2,2,3,3,6,7,7,7,9,13,16,23,26,32,35,42,50,55,63,72,76,80,87,95,105,112,118,132,150,158,173,174,198,206,224,240,243,269,277,284,295,311,324,339,349,353,359,373,389,398,413,420,429,436,445,453,466,477,484,490,497,506,520,530,530,539,541,545,552,565,580,587,595,598,602,607,];
countiesData.features[17].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,2,3,3,3,3,4,4,6,7,7,8,8,8,8,8,9,9,9,9,9,9,9,9,9,10,10,11,11,11,12,12,12,12,12,12,12,12,12,13,12,12,12,12,12,12,12,12,12,];
countiesData.features[18].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,1,1,1,1,2,2,3,3,4,6,6,6,6,7,8,8,8,7,7,7,7,7,8,8,8,8,9,9,9,9,9,10,11,11,12,12,13,13,14,14,15,15,16,19,20,20,22,23,24,27,28,30,33,34,34,34,];
countiesData.features[19].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,4,4,4,4,3,];
countiesData.features[20].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,3,3,3,4,4,4,4,4,];
countiesData.features[21].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,3,3,3,3,3,3,3,3,3,3,3,3,4,4,6,6,6,6,7,7,7,8,9,9,9,9,9,9,9,8,8,8,9,10,10,10,11,11,12,12,12,13,13,14,14,15,16,16,16,16,16,16,17,];
countiesData.features[22].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,3,2,2,3,3,4,4,5,5,7,7,7,10,10,10,11,11,13,15,15,15,16,16,17,17,19,20,21,21,21,21,22,22,22,22,22,22,25,27,30,30,30,30,30,30,32,32,32,32,32,33,];
countiesData.features[23].properties.historydeaths = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,5,5,5,6,6,6,8,8,8,8,10,11,11,11,11,13,13,13,13,13,13,14,14,16,16,16,15,];

// Recoveries History Arrays Per County
countiesData.features[0].properties.historyrecoveries = [1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[1].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[2].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[3].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[4].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[5].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[6].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,];
countiesData.features[7].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[8].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[9].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[10].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,20,20,20,20,20,20,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,152,];
countiesData.features[11].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[12].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[13].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,36,];
countiesData.features[14].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[15].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,];
countiesData.features[16].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[17].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[18].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[19].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[20].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[21].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
countiesData.features[22].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,];
countiesData.features[23].properties.historyrecoveries = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];

// Hospitalization History on State Level
countiesData.features[24].properties.historyNowHospitalized = [,,,,,,,,,,108,146,185,212,260,308,402,423,447,605,559,770,801,848,924,918,1020,1019,1071,1079,1156,1219,1201,1288,1289,1340,1433,1432,1405,1405,1408,1463,1513,1528,1645,1645,1668,1657,1635,1649,1693,1707,1683,1674,1665,1640,1544,1563,1550,1538,1496,1500,1500,1447,1421,1410,1374,1329,1320,1290,1279,1315,1338,1334,1296,1239,1183,1174,1148,1109,1096,1076,1059,1003,979,970,];
countiesData.features[24].properties.historyAcuteCare = [,,,,,,,,,,68,76,113,118,150,177,257,260,263,369,305,498,499,539,581,560,641,633,657,631,718,788,762,800,791,829,907,905,890,878,870,933,978,977,1060,1060,1100,1091,1070,1086,1156,1123,1099,1103,1090,1029,959,973,978,969,898,902,902,892,884,871,848,823,796,787,762,795,818,823,789,747,704,695,667,638,640,621,641,599,587,584,];
countiesData.features[24].properties.historyIntensiveCare = [,,,,,,,,,,40,70,72,94,110,131,145,163,180,236,254,272,302,309,343,358,379,386,414,448,438,431,439,488,498,511,526,527,515,547,538,530,534,551,585,590,568,566,565,563,537,584,584,571,575,611,585,590,572,569,598,598,598,555,537,539,526,506,524,503,517,520,520,511,507,492,479,479,481,471,456,455,418,404,392,386,];
countiesData.features[24].properties.historyEverHospitalized = [2,2,2,2,2,2,2,2,2,2,132,173,193,212,353,429,522,593,664,821,940,1059,1106,1210,1348,1413,1637,1860,1975,1975,2231,2451,2612,2757,2886,2886,3104,3325,3477,3618,3760,3962,4101,4268,4402,4402,4718,4910,5051,5199,5337,5497,5663,5811,5932,5955,6183,6287,6404,6553,6679,6755,6993,7086,7199,7393,7485,7634,7825,7939,8092,8179,8281,8392,8479,8619,8738,8886,8957,9111,9217,9346,9451,9546,9629,9676,];

// Negative Test History on State Level
countiesData.features[24].properties.historynegativetests = [,,,,,,,,,,,,11516,12354,13316,14868,17233,18890,20932,22485,24728,25572,27256,32933,35344,37480,39544,41539,42815,44261,45731,48059,50437,53062,55061,57713,59442,61754,64363,68100,71357,78084,85489,87672,90080,92617,97511,101049,107332,110587,112986,115849,119226,121702,124494,127344,131407,135422,138762,142551,145840,152207,156122,161744,167112,173007,176702,183478,186832,194049,202425,206800,213632,225149,233530,241931,249103,255403,261640,272643,281160,290956,299894,306830,313099,319178,];




// ------------------------------------------------------------------------------------------------------- 

// ------------------------------------------------------------------------------------------------------- 

// ------------------------------------------------------------------------------------------------------- 

// ------------------------------------------------------------------------------------------------------- 

// ------------------------------------------------------------------------------------------------------- 




// Hospitalization Totals on State Level
countiesData.features[24].properties.nowHospitalized = 1649;
countiesData.features[24].properties.acuteCare = 1086;
countiesData.features[24].properties.intensiveCare = 563;
countiesData.features[24].properties.everHospitalized = 5199; 

// Population Totals per County + State Aggregate
countiesData.features[0].properties.population = 70416;
countiesData.features[1].properties.population = 579234;
countiesData.features[2].properties.population = 827370;
countiesData.features[3].properties.population = 593490;
countiesData.features[4].properties.population = 92525;
countiesData.features[5].properties.population = 33406;
countiesData.features[6].properties.population = 168447;
countiesData.features[7].properties.population = 102855;
countiesData.features[8].properties.population = 163257;
countiesData.features[9].properties.population = 31929;
countiesData.features[10].properties.population = 259547;
countiesData.features[11].properties.population = 29014;
countiesData.features[12].properties.population = 255441;
countiesData.features[13].properties.population = 325690;
countiesData.features[14].properties.population = 19422;
countiesData.features[15].properties.population = 1050688;
countiesData.features[16].properties.population = 909327;
countiesData.features[17].properties.population = 50381;
countiesData.features[18].properties.population = 113510;
countiesData.features[19].properties.population = 26616;
countiesData.features[20].properties.population = 37181;
countiesData.features[21].properties.population = 151049;
countiesData.features[22].properties.population = 103609;
countiesData.features[23].properties.population = 52276;
countiesData.features[24].properties.population = 6045680;



// ----------------------------------------------------------------------------------------------
// Nothing below this point needs to be changed - just autocalculates based upon the arrays above
// ----------------------------------------------------------------------------------------------

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

// Deaths
// Populating Todays 'deaths' JSON by taking the last value in the 'historydeaths' JSON array
countiesData.features[0].properties.deaths = countiesData.features[0].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[1].properties.deaths = countiesData.features[1].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[2].properties.deaths = countiesData.features[2].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[3].properties.deaths = countiesData.features[3].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[4].properties.deaths = countiesData.features[4].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[5].properties.deaths = countiesData.features[5].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[6].properties.deaths = countiesData.features[6].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[7].properties.deaths = countiesData.features[7].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[8].properties.deaths = countiesData.features[8].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[9].properties.deaths = countiesData.features[9].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[10].properties.deaths = countiesData.features[10].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[11].properties.deaths = countiesData.features[11].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[12].properties.deaths = countiesData.features[12].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[13].properties.deaths = countiesData.features[13].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[14].properties.deaths = countiesData.features[14].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[15].properties.deaths = countiesData.features[15].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[16].properties.deaths = countiesData.features[16].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[17].properties.deaths = countiesData.features[17].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[18].properties.deaths = countiesData.features[18].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[19].properties.deaths = countiesData.features[19].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[20].properties.deaths = countiesData.features[20].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[21].properties.deaths = countiesData.features[21].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[22].properties.deaths = countiesData.features[22].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[23].properties.deaths = countiesData.features[23].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];
countiesData.features[24].properties.deaths = countiesData.features[24].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-1];

// Prevdeaths
// Populating yesterdays 'prevdeaths' JSON by taking the 2nd to last value in the 'historydeaths' JSON array
countiesData.features[0].properties.prevdeaths = countiesData.features[0].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[1].properties.prevdeaths = countiesData.features[1].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[2].properties.prevdeaths = countiesData.features[2].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[3].properties.prevdeaths = countiesData.features[3].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[4].properties.prevdeaths = countiesData.features[4].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[5].properties.prevdeaths = countiesData.features[5].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[6].properties.prevdeaths = countiesData.features[6].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[7].properties.prevdeaths = countiesData.features[7].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[8].properties.prevdeaths = countiesData.features[8].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[9].properties.prevdeaths = countiesData.features[9].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[10].properties.prevdeaths = countiesData.features[10].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[11].properties.prevdeaths = countiesData.features[11].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[12].properties.prevdeaths = countiesData.features[12].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[13].properties.prevdeaths = countiesData.features[13].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[14].properties.prevdeaths = countiesData.features[14].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[15].properties.prevdeaths = countiesData.features[15].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[16].properties.prevdeaths = countiesData.features[16].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[17].properties.prevdeaths = countiesData.features[17].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[18].properties.prevdeaths = countiesData.features[18].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[19].properties.prevdeaths = countiesData.features[19].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[20].properties.prevdeaths = countiesData.features[20].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[21].properties.prevdeaths = countiesData.features[21].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[22].properties.prevdeaths = countiesData.features[22].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[23].properties.prevdeaths = countiesData.features[23].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];
countiesData.features[24].properties.prevdeaths = countiesData.features[24].properties.historydeaths[countiesData.features[0].properties.historydeaths.length-2];

// Recoveries
// Populating todays 'recoveries' JSON by taking the last value in the 'historyrecoveries' JSON array
countiesData.features[0].properties.recoveries = countiesData.features[0].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[1].properties.recoveries = countiesData.features[1].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[2].properties.recoveries = countiesData.features[2].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[3].properties.recoveries = countiesData.features[3].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[4].properties.recoveries = countiesData.features[4].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[5].properties.recoveries = countiesData.features[5].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[6].properties.recoveries = countiesData.features[6].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[7].properties.recoveries = countiesData.features[7].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[8].properties.recoveries = countiesData.features[8].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[9].properties.recoveries = countiesData.features[9].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[10].properties.recoveries = countiesData.features[10].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[11].properties.recoveries = countiesData.features[11].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[12].properties.recoveries = countiesData.features[12].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[13].properties.recoveries = countiesData.features[13].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[14].properties.recoveries = countiesData.features[14].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[15].properties.recoveries = countiesData.features[15].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[16].properties.recoveries = countiesData.features[16].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[17].properties.recoveries = countiesData.features[17].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[18].properties.recoveries = countiesData.features[18].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[19].properties.recoveries = countiesData.features[19].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[20].properties.recoveries = countiesData.features[20].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[21].properties.recoveries = countiesData.features[21].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[22].properties.recoveries = countiesData.features[22].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[23].properties.recoveries = countiesData.features[23].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];
countiesData.features[24].properties.recoveries = countiesData.features[24].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-1];

// Prevrecoveries
// Populating yesterdays 'prevrecoveries' JSON by taking the 2nd to last value in the 'historyrecoveries' JSON array
// Note: Reporting on recoveries is so sparse that I'm currently not including change in recovery per day values, and thus have commented out the counties below
// Still reporting total change in recoveries though, so [24] is not commented
//countiesData.features[0].properties.prevrecoveries = countiesData.features[0].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[1].properties.prevrecoveries = countiesData.features[1].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[2].properties.prevrecoveries = countiesData.features[2].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[3].properties.prevrecoveries = countiesData.features[3].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[4].properties.prevrecoveries = countiesData.features[4].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[5].properties.prevrecoveries = countiesData.features[5].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[6].properties.prevrecoveries = countiesData.features[6].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[7].properties.prevrecoveries = countiesData.features[7].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[8].properties.prevrecoveries = countiesData.features[8].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[9].properties.prevrecoveries = countiesData.features[9].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[10].properties.prevrecoveries = countiesData.features[10].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[11].properties.prevrecoveries = countiesData.features[11].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[12].properties.prevrecoveries = countiesData.features[12].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[13].properties.prevrecoveries = countiesData.features[13].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[14].properties.prevrecoveries = countiesData.features[14].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[15].properties.prevrecoveries = countiesData.features[15].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[16].properties.prevrecoveries = countiesData.features[16].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[17].properties.prevrecoveries = countiesData.features[17].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[18].properties.prevrecoveries = countiesData.features[18].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[19].properties.prevrecoveries = countiesData.features[19].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[20].properties.prevrecoveries = countiesData.features[20].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[21].properties.prevrecoveries = countiesData.features[21].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[22].properties.prevrecoveries = countiesData.features[22].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
//countiesData.features[23].properties.prevrecoveries = countiesData.features[23].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];
countiesData.features[24].properties.prevrecoveries = countiesData.features[24].properties.historyrecoveries[countiesData.features[0].properties.historyrecoveries.length-2];

}  
