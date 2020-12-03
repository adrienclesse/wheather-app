let name= "brussels";
weatherBalloon(name);

document.getElementById("submit").addEventListener("click",function(){
        let name= document.getElementById("city").value;
        weatherBalloon(name);
});

        function weatherBalloon(name) {
            var key = '702246c8311d022c589bc7ec36af5fdf';
            
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=' + key)  
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
                console.log(data);
                drawWeather(data);
            })
            .catch(function() {
               // alert("Pleas check the spelling of the city");
            });
        }

        
        

        function drawWeather( data ) {
            var celcius = Math.round(parseFloat(data.main.temp)-273.15);
            var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
            
            document.getElementById('description').innerHTML = data.weather[0].description;
            document.getElementById('temp').innerHTML = celcius + '&deg;';
            document.getElementById('location').innerHTML = data.name;

            let weather = document.getElementById('description').innerHTML;
                if(weather==="mist"){document.getElementById("logo").src = "img/wind.png";}
                else if(weather==="broken clouds"){document.getElementById("logo").src = "img/cloud-sun.png";}
                else if(weather==="scattered clouds"){document.getElementById("logo").src = "img/cloud-sun.png";}
                else if(weather==="overcast clouds"){document.getElementById("logo").src = "img/cloud.png";}
                else if(weather==="snow"){document.getElementById("logo").src = "img/snow.png";}
                else if(weather==="shower rain"){document.getElementById("logo").src = "img/rain.png";}
                else if(weather==="light rain"){document.getElementById("logo").src = "img/rain.png";}
                else if(weather==="clear sky"){document.getElementById("logo").src = "img/sun.png";}
                else if(weather==="fog"){document.getElementById("logo").src = "img/wind.png";}
                else if(weather==="few clouds"){document.getElementById("logo").src = "img/cloud-sun.png";}


          }

(function(){
        let name1= "paris";
        weatherBalloon(name1);
        
        document.getElementById("submit1").addEventListener("click",function(){
                let name1= document.getElementById("city1").value;
                weatherBalloon(name1);
        });
        
                function weatherBalloon(name1) {
                    const key = '702246c8311d022c589bc7ec36af5fdf';
                    
                    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name1 + '&appid=' + key)  
                    .then(function(resp1) { return resp1.json() }) // Convert data to json
                    .then(function(data1) {
                        console.log(data1);
                        drawWeather(data1);
                    })
                    .catch(function() {
                        //alert("Pleas check the spelling of the city");
                    });
                }
        
                
                
        
                function drawWeather( d ) {
                    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
                    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
                    
                    document.getElementById('description1').innerHTML = d.weather[0].description;
                    document.getElementById('temp1').innerHTML = celcius + '&deg;';
                    document.getElementById('location1').innerHTML = d.name;
                    let weather1 = document.getElementById('description1').innerHTML;
                    
                            if(weather1==="clear sky"){document.getElementById("logo1").src = "img/sun.png";}
                            else if(weather1==="scattered clouds"){document.getElementById("logo1").src = "img/cloud-sun.png";}
                            else if(weather1==="broken clouds"){document.getElementById("logo1").src = "img/cloud-sun.png";}
                            else if(weather1==="overcast clouds"){document.getElementById("logo1").src = "img/cloud.png";}
                            else if(weather1==="shower rain"){document.getElementById("logo1").src = "img/rain.png";}
                            else if(weather1==="mist"){document.getElementById("logo1").src = "img/wind.png";}
                            else if(weather1==="light rain"){document.getElementById("logo1").src = "img/rain.png";}
                            else if(weather1==="fog"){document.getElementById("logo1").src = "img/wind.png";}
                            else if(weather1==="few clouds"){document.getElementById("logo1").src = "img/cloud-sun.png";}
                            else if(weather1.includes("snow")){document.getElementById("logo1").src = "img/snow.png";}
                }
})();










	
	

