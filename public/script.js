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

// Database
async function windowActions() {
  const data = await getInfo();

  const cityArray = [1, 2, 3, 4, 5];
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
      text: "Top 5 City",
    },
    axisX: {
      axisX: "City",
    },
    axisY: {
      title: "Types of Pollution",
    },
    data: [
      {
        type: "column",
        showInLegend: true,
        legendMarkerColor: "grey",
        name: "City Name",
        dataPoints: [
          { label: selected[0].city_name, y: selected[0].pop_denstiy },
          { label: selected[1].city_name, y: selected[1].pop_denstiy },
          { label: selected[2].city_name, y: selected[2].pop_denstiy },
          { label: selected[3].city_name, y: selected[3].pop_denstiy },
          { label: selected[4].city_name, y: selected[4].pop_denstiy },
        ],
      },
    ],
  });
  chart.render();
}


window.onload = windowActions;
