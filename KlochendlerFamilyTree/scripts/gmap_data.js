	var gMap = new Object();
	var gMapOptions = new Object();
	gMap.types = ["Roads","Terrain"];
	gMap.places = L.markerClusterGroup();
	gMap.road =	L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
				{attribution: '<a href="www.genopro.com">GenoPro&reg;</a> | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
				subdomains: ['a','b','c']});
	gMap.terrain = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', 
				{attribution: '<a href="www.genopro.com">GenoPro&reg;</a> | Map display © <a href="https://opentopomap.org/about#details">OpenTopoMap</a>, under <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>. Data by © <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://www.openstreetmap.org/copyright">ODbL</a>.', 
				maxZoom:17});
	gMap.bases = {"Roads": gMap.road, "Terrain":gMap.terrain};
	gMap.overlay = {"Places":gMap.places};
	gMap.base1=gMap.bases[gMap.types[1]];
