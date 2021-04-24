function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
async function getInfo() {
  const cityRequest = await fetch("/api/city");
  const cityData = await cityRequest.json();
  return cityData;
}



async function map(){
var map = L.map('map').setView([37.8, -96], 4);
const data = await getInfo();


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ3NhbXJhIiwiYSI6ImNrbnBsbWUyNDFneXoydnB1YnEyODRoenIifQ.jy9pfKpWoMpdCnyHBXOvPQ' , {
    id: 'mapbox/light-v9',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

L.geoJson(data).addTo(map);
// control that shows state info on hover
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>US Population Pollution</h4>' +  (props ?
        '<b>' + props.city_name + '</b><br />' + props.pop_denstiy + ' people / mi<sup>2</sup>'
        : 'Hover over a state');
};
info.addTo(map);


// get color depending on population density value
function getColor(d) {
    return d > 100 ? '#800026' :
            d > 60  ? '#BD0026' :
            d > 50  ? '#E31A1C' :
            d > 40  ? '#FC4E2A' :
            d > 30   ? '#FD8D3C' :
            d > 20   ? '#FEB24C' :
            d > 10   ? '#FED976' :
                        '#FFEDA0';
}

function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.pop_denstiy)
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			mouseout: resetHighlight,
			click: zoomToFeature
		});
	}


//	map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');


	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 10, 20, 30, 40, 50, 60, 100],
			labels = [],
			from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);
}



// Database
//Bar Chart
async function windowActions() {
    await map()
  const data = await getInfo();

  const cityArray = [1, 2, 3, 4, 5,6,7,8,9,10];
  const selected = cityArray.map((element) => {
    const random = getRandom(0, data.length - 1);
    return data[random];
  });
  console.table(selected);
  selected.forEach((check) => {
    console.log(check);
  });

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    title: {
      text: "Cities Based On Population Density",
    },
    axisX: {
      axisX: "City",
    },
    axisY: {
      title: "Population Density",
    },
    data: [
      {
        type: "column",
        name: "City Name",
        dataPoints: [
          { label: selected[0].city_name, y: selected[0].pop_denstiy },
          { label: selected[1].city_name, y: selected[1].pop_denstiy },
          { label: selected[2].city_name, y: selected[2].pop_denstiy },
          { label: selected[3].city_name, y: selected[3].pop_denstiy },
          { label: selected[4].city_name, y: selected[4].pop_denstiy },
          { label: selected[5].city_name, y: selected[5].pop_denstiy },
          { label: selected[6].city_name, y: selected[6].pop_denstiy },
          { label: selected[7].city_name, y: selected[7].pop_denstiy },
          { label: selected[8].city_name, y: selected[8].pop_denstiy },
          { label: selected[9].city_name, y: selected[9].pop_denstiy },


        ],
      },
    ],
  });
  chart.render();
}


window.onload = windowActions;
