// Database
    async function windowActions() {
        const cityRequest = await fetch('/api/city')
        const cityData = await cityRequest.json();
       
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Top 5 City"
            },
            axisX:{
                axisX: "City"
            },
            axisY: {
                title: "Types of Pollution"
            },
            data: [{        
                type: "column",  
                showInLegend: true, 
                legendMarkerColor: "grey",
                name: "City Name",
                dataPoints: nameData
            },
            {        
                type: "column",  
                showInLegend: true, 
                legendMarkerColor: "red",
                name: "Pollution",
                dataPoints: pollutionData
            },
                          
                    
                ]
        });
        cityData.forEach((type) =>{
            nameData.push({label: type.city_name, y: type.O3});
            pollutionData.push({label: type.city_name, y: type.O3});

        });
        chart.render();
        }
      
      window.onload = windowActions;