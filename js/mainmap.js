// JavaScript Document

//Calls the latest data from latest.js and updates the JSON objects in us-counties.js
  latestData();

  //Instantiates the Leaflet.js map

    //if (L.Browser.mobile) {
    if($(window).width() <= 767) {
      var mainmap = L.map('mapMain', {zoomControl: false}).setView([36.9, -77.28], 7);
    } else {
      var mainmap = L.map('mapMain', {zoomControl: false}).setView([38.73, -76.34], 8);
    }
    
  //var mainmap = L.map('mapMain', {zoomDelta: .5}).setView([38.63, -77.34], 8);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 9,
    minZoom: 7,
    id: 'srirachachacha/ck8euy9qf24bu1is385v3gca4',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3JpcmFjaGFjaGFjaGEiLCJhIjoiY2ltdGhpeGpiMDIxM3dibHVic3N2OGt3dyJ9.GCpLXlY3H4rUnodkF073WA'
  }).addTo(mainmap);
  

  // Instantiates the infoPane container
  var info = L.control();

  info.onAdd = function(mainmap) {
    this._div = L.DomUtil.create('div', 'info reorderWorker'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  
  // Pulling case data from JSON, calculating when needed, and setting as variables
  var stateCasesVal = countiesData.features[24].properties.history[countiesData.features[24].properties.history.length-1];
  var stateCasesChg = stateCasesVal - countiesData.features[24].properties.history[countiesData.features[24].properties.history.length-2];
  var stateDeathsVal = countiesData.features[24].properties.historydeaths[countiesData.features[24].properties.historydeaths.length-1];
  var stateDeathsChg = stateDeathsVal - countiesData.features[24].properties.historydeaths[countiesData.features[24].properties.historydeaths.length-2];
  var statePopVal = countiesData.features[24].properties.population;
  

  // Updates the info box (control) based on the feature properties passed from JSON
  info.update = function(props) {
    this._div.innerHTML =
      '<div id="title"><h1>COVID-19 Maryland</h1></div><div id="statecases"><h2>State Totals</h2><p><small>Cases: </small>' + stateCasesVal + '<b class="diff"> (+' + stateCasesChg + ')</b></p><span class="sep"></span><p><small>Deaths: </small>' + stateDeathsVal + '<b class="diff"> (+' + stateDeathsChg + ')</b></p></div>' +

      '<div id="countycases"><div id="boxChartIcon1"><a href="charts#casesbycounty" id="chartIconLine1" aria-label="Link to chart of county data over time" title="View graph of county data"></a></div>' + 
      //Backup of County panel with "!" note about recoveries data
      //'<div id="countycases"><div id="noteExclA" tabindex="0">!</div><a href="charts#casesbycounty" id="chartIconLine1" aria-label="Link to chart of county data over time" title="View graph of county data"></a>' +
      (props ?
      
      // Content displayed on county hover
        '<h3>' + props.name + '</h3>' + '<p><small>Cases: </small>' + props.cases + '<b class="diff"> (+' + [props.cases - props.prevcases] + ')</b></p><span class="sep"></span><p><small>Deaths: </small>' + props.deaths + '<b class="diff"> (+' + [props.deaths - props.prevdeaths] + ')</b></p>'
        
        // Default content without county hover
        :'<h3><i>County <span>(Hover/Tap)</span></i></h3>' + '<p><small>Cases: </small><i> ___</i></p><span class="sep"></span>' + '<p><small>Deaths: </small><i> ___</i></p>'); +
       
      //End of constant panel container
      '</div>'
  };
  
  // Adds info control to map
  info.addTo(mainmap);
  
  // Info control has been created, now we want to move it to the desired parent container (#infoPane)
  // Find the container that info box was inserted into
  var infoContainer = info.getContainer();
  
  // Choose the new parent container (node) that we want to move info box to
  var a = document.getElementById('infoPane');
 
  // Append info node to new parent container
  function setParent(el, newParent){newParent.appendChild(el);}
  setParent(infoContainer, a);

  // Disable dragging when user's cursor enters the info pane
  a.addEventListener('mouseover', function () {mainmap.dragging.disable(); mainmap.scrollWheelZoom.disable();});
  a.addEventListener('touchstart', function () {mainmap.dragging.disable();});
  // Re-enable dragging when user's cursor leaves the info pane
  a.addEventListener('mouseout', function () {mainmap.dragging.enable(); mainmap.scrollWheelZoom.enable();}); 
  a.addEventListener('touchend', function () {mainmap.dragging.enable();}); 



  
  // Calculating the maximum and minimum case values for use in color scale  
  var countiesData, i, caseNumbers = "";
  for (i in countiesData.features) {
    caseNumbers += countiesData.features[i].properties.cases + " ";
  }
  
  //TEST CODE FOR CASES PER 100k BY COUNTY 
  //for (i in countiesData.features) {
  //  var countyCasesValA = countiesData.features[i].properties.history[countiesData.features[i].properties.history.length-1];
  //  var countyCasesPer100KA = countyCasesValA /  countiesData.features[i].properties.population * 100000;
  //  var countyCasesPer100KRoundA = countyCasesPer100KA.toFixed(0);
  //  caseNumbers += countyCasesPer100KRoundA + " ";
  //}
    
  var caseString = caseNumbers.split(" ");
  var caseMax = caseString.reduce(function(a, b) {
    return Math.max(a, b);
  });

  // Color scale of shading depending on case count value
  function getColor(d) {
  
    return d >= caseMax ? '#A60000' :
           d > caseMax / 1.25 ? '#cc2212' :
           d > caseMax / 1.50 ? '#d93b23' :
           d > caseMax / 2.50 ? '#e23e11' :
           d > caseMax / 3.00 ? '#eb5409' :
           d > caseMax / 5.00 ? '#EB6E09' :
           d > caseMax / 8.00 ? '#eb8209' :
           d > caseMax / 11.0 ? '#F39A00' :
           d > caseMax / 20.0 ? '#f7b12e' :
           d > 0 ? '#f7cb57' :
          '#aaaaaa';
  }
  
  
  //Styles for general county polygon features
  function style(feature) {
    return {
      weight: 1.5,
      opacity: .5,
      color: 'white',
      dashArray: '',
      fillOpacity: 0.8,
      fillColor: getColor(feature.properties.cases)
      //TEST CODE FOR CASES PER 100k BY COUNTY 
      //fillColor: getColor(feature.properties.history[feature.properties.history.length-1] / feature.properties.population * 100000)
    };
  }

  function highlightFeature(e) {
    var layer = e.target;
    
    layer.setStyle({
      weight: 3,
      opacity: .8,
      color: '#fff',
      dashArray: '',
      fillOpacity: 1,
  });

  // Checks for browser compatibility (not chrome or firefox)
  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge && !L.Browser.mobile) {
    layer.bringToFront();
  }

  // Updates the data in the .info container
  info.update(layer.feature.properties);
    $(".info").addClass("infoActive");
  }

	var geojson;

	function resetHighlight(e) {
		//geojson.resetStyle(e.target);
    geojson.resetStyle();
		info.update();
    $(".info").removeClass("infoActive");
	}

	function zoomToFeature(e) {
		mainmap.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({      
			mouseover: highlightFeature,
			mouseout: resetHighlight,
      mouseup: highlightFeature,
      mousedown: resetHighlight,
      //click: zoomToFeature
  });

  // Setting variable for latest case value of each county from its JSON history array
  var countyCasesVal = feature.properties.history[feature.properties.history.length-1];
   
  // TEST CODE FOR CASES BY COUNTY PER 100K
  //var countyCasesPer100K = countyCasesVal /  feature.properties.population * 100000;
  //var countyCasesPer100KRound = countyCasesPer100K.toFixed(0);
  //layer.bindTooltip('<h5>' + feature.properties.name + '</h5>' + '<p class="mapCases">' + countyCasesPer100KRound + '</p><p class="mapCases" style="font-size:10px; margin:-2px 0 0 0 !important;">per 100K</p>',{ 
   
   // WORKING CODE FOR STANDARD RAW CASES BELOW
   layer.bindTooltip('<h5>' + feature.properties.name + '</h5>' + '<p class="mapCases">' + countyCasesVal + '</p>',{ 
    permanent: true, 
    interactive: false,
    opacity: 1, 
    offset: L.point(0, 0),
    direction: 'center' });
  }

	geojson = L.geoJson(countiesData, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(mainmap);

  mainmap.on('zoomend', function () {
    var zoomLevel = mainmap.getZoom();
    var countyName = $('.leaflet-tooltip h5');
    var countyNumber = $('.leaflet-tooltip p.mapCases');
    if (L.Browser.mobile) {
      switch (zoomLevel) {
        case 7:
          countyNumber.css('font-size', 14);
          break;
        case 8:
          countyNumber.css('font-size', 18);
          break;
        case 9:
          countyNumber.css('font-size', 24);
          break;
      }
    } else
      switch (zoomLevel) {
        case 7:
          countyName.css('opacity', 0);
          countyName.css('margin-top', 0);
          countyNumber.css('font-size', 12);
          countyNumber.css('margin-top', -4);
          break;
        case 8:
          countyName.css('opacity', 1);
          countyName.css('font-size', 12);
          countyName.css('margin-top', 0);
          countyNumber.css('font-size', 15);
          countyNumber.css('margin-top', 1);
          break;
        case 9:
          countyName.css('font-size', 18);
          countyName.css('margin-top', -6);
          countyNumber.css('margin-top', 0);
          countyNumber.css('font-size', 24);
          break;
      }
    //alert(zoomLevel);
  });
  

