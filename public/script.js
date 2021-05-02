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
async function getPollution() {
  const pollutionRequest = await fetch("/api/pollution");
  const pollutionData = await pollutionRequest.json();
  return pollutionData;
}

// Database
//Bar Chart
async function windowActions() {
  const data = await getInfo();
  //const polldata = await getPollution();
  const cityArray = [1, 2, 3, 4, 5,6,7,8,9,10];
  const selected = cityArray.map((element) => {
    const random = getRandom(0, data.length - 1);
    return data[random];
  });
  console.table(selected);
  selected.forEach((check) => {
    console.log(check);
  });

  const polldata = await getPollution();
  const pollArray = [1, 2, 3, 4, 5,6,7,8,9,10];
  const pselected = pollArray.map((air) => {
    const random = getRandom(0, polldata.length - 1);
    return polldata[random];
  });
  console.table(pselected);
  pselected.forEach((check2) => {
    console.log(check2);
  });


  var chart1 = new CanvasJS.Chart("chartContainer1", {
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

  var chart2 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    title:{
      text: "Pollution"
    },
    axisX: {
      valueFormatString: ""
    },
    axisY: {
      prefix: ""
    },
    toolTip: {
      shared: true
    },
    data: [{
      type: "stackedBar",
      name: "O3",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "",
      dataPoints: [
        { x: pselected[0].pollution_id, y: pselected[0].O3 },
        { x: pselected[1].pollution_id, y: pselected[1].O3},
        { x: pselected[2].pollution_id, y: pselected[2].O3},
        { x: pselected[3].pollution_id, y: pselected[3].O3},
        { x: pselected[4].pollution_id, y: pselected[4].O3},
        { x: pselected[5].pollution_id, y: pselected[5].O3},
        { x: pselected[6].pollution_id, y: pselected[6].O3},
        { x: pselected[7].pollution_id, y: pselected[7].O3 },
        { x: pselected[8].pollution_id, y: pselected[8].O3 },
        { x: pselected[9].pollution_id, y: pselected[9].O3},
      ]
    },
    {
      type: "stackedBar",
      name: "PM10",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "",
      dataPoints: [
        { x: pselected[0].pollution_id, y: pselected[0].PM10 },
        { x: pselected[1].pollution_id, y: pselected[1].PM10 },
        { x: pselected[2].pollution_id, y: pselected[2].PM10 },
        { x: pselected[3].pollution_id, y: pselected[3].PM10 },
        { x: pselected[4].pollution_id, y: pselected[4].PM10 },
        { x: pselected[5].pollution_id, y: pselected[5].PM10 },
        { x: pselected[6].pollution_id, y: pselected[6].PM10 },
        { x: pselected[7].pollution_id, y: pselected[7].PM10 },
        { x: pselected[8].pollution_id, y: pselected[8].PM10 },
        { x: pselected[9].pollution_id, y: pselected[9].PM10 },
      ]
    },
    {
      type: "stackedBar",
      name: "SO2",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "",
      dataPoints: [
        { x: pselected[0].pollution_id, y: pselected[0].SO2 },
        { x: pselected[1].pollution_id, y: pselected[1].SO2 },
        { x: pselected[2].pollution_id, y: pselected[2].SO2 },
        { x: pselected[3].pollution_id, y: pselected[3].SO2 },
        { x: pselected[4].pollution_id, y: pselected[4].SO2 },
        { x: pselected[5].pollution_id, y: pselected[5].SO2 },
        { x: pselected[6].pollution_id, y: pselected[6].SO2 },
        { x: pselected[7].pollution_id, y: pselected[7].SO2 },
        { x: pselected[8].pollution_id, y: pselected[8].SO2 },
        { x: pselected[9].pollution_id, y: pselected[9].SO2 },
      ]
    },
    {
      type: "stackedBar",
      name: "NO2",
      showInLegend: "true",
      xValueFormatString: "",
      yValueFormatString: "",
      dataPoints: [
        { x: pselected[0].pollution_id, y: pselected[0].NO2 },
        { x: pselected[1].pollution_id, y: pselected[1].NO2 },
        { x: pselected[2].pollution_id, y: pselected[2].NO2 },
        { x: pselected[3].pollution_id, y: pselected[3].NO2 },
        { x: pselected[4].pollution_id, y: pselected[4].NO2 },
        { x: pselected[5].pollution_id, y: pselected[5].NO2 },
        { x: pselected[6].pollution_id, y: pselected[6].NO2 },
        { x: pselected[7].pollution_id, y: pselected[7].NO2 },
        { x: pselected[8].pollution_id, y: pselected[8].NO2 },
        { x: pselected[9].pollution_id, y: pselected[9].NO2 },
      ]
    }]
  });
  chart1.render();
  chart2.render();

}

window.onload = windowActions;
