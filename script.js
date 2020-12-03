let name= "brussels";
weatherBalloon(name);

document.getElementById("submit").addEventListener("click",function(){
        let name= document.getElementById("city").value;
        weatherBalloon(name);
});

        function weatherBalloon(name) {
            const key = 'b62a02d6293f4aed8aea1a05ad06be01';
            
            fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + name + '&key=' + key)  
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
           // var celcius = Math.round(parseFloat(data.main.temp)-273.15);
           // var fahrenheit = Math.round(((parseFloat(data.main.temp)-273.15)*1.8)+32); 
            
            document.getElementById('description').innerHTML = data.data[0].weather.description;
            document.getElementById('temp').innerHTML = data.data[0].temp + '&deg;';
            document.getElementById('location').innerHTML = data.city_name;

            document.getElementById('descriptionday1').innerHTML = data.data[1].weather.description;
            document.getElementById('descriptionday2').innerHTML = data.data[2].weather.description;
            document.getElementById('descriptionday3').innerHTML = data.data[3].weather.description;
            document.getElementById('descriptionday4').innerHTML = data.data[4].weather.description;
            document.getElementById('descriptionday5').innerHTML = data.data[5].weather.description;

            document.getElementById('tempday1').innerHTML = data.data[1].temp + '&deg;';
            document.getElementById('tempday2').innerHTML = data.data[2].temp + '&deg;';
            document.getElementById('tempday3').innerHTML = data.data[3].temp + '&deg;';
            document.getElementById('tempday4').innerHTML = data.data[4].temp + '&deg;';
            document.getElementById('tempday5').innerHTML = data.data[5].temp + '&deg;';




            function getLogo (logo,weather) {
               
                    if(weather==="Mist"){logo.src = "img/wind.png";}
                    else if(weather==="Broken clouds"){logo.src = "img/cloud-sun.png";}
                    else if(weather==="Scattered clouds"){logo.src = "img/cloud-sun.png";}
                    else if(weather==="Overcast clouds"){logo.src = "img/cloud.png";}
                    else if(weather.includes("snow")){logo.src = "img/snow.png";}
                    else if(weather==="Shower rain"){logo.src = "img/rain.png";}
                    else if(weather==="Light shower rain"){logo.src = "img/rain.png";}
                    else if(weather==="Clear sky"){logo.src = "img/sun.png";}
                    else if(weather==="Fog"){logo.src = "img/wind.png";}
                    else if(weather==="Few clouds"){logo.src = "img/cloud-sun.png";}
                    else if(weather==="Light shower rain"){logo.src = "img/rain.png";}
                    else if(weather==="Moderate rain"){logo.src = "img/rain.png";}
                    

                   
            }
            getLogo(document.getElementById("logo"),document.getElementById("description").innerHTML);
            getLogo(document.getElementById("logoday1"),document.getElementById("descriptionday1").innerHTML);
            getLogo(document.getElementById("logoday2"),document.getElementById("descriptionday2").innerHTML);
            getLogo(document.getElementById("logoday3"),document.getElementById("descriptionday3").innerHTML);
            getLogo(document.getElementById("logoday4"),document.getElementById("descriptionday4").innerHTML);
            getLogo(document.getElementById("logoday5"),document.getElementById("descriptionday5").innerHTML);
              


        }




(function(){
        let name1= "paris";
        weatherBalloon(name1);
        
        document.getElementById("submit1").addEventListener("click",function(){
                let name1= document.getElementById("city1").value;
                weatherBalloon(name1);
        });
        
                function weatherBalloon(name1) {
                    const key = 'b62a02d6293f4aed8aea1a05ad06be01';
                    
                    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + name1 + '&key=' + key)  
                    .then(function(resp1) { return resp1.json() }) // Convert data to json
                    .then(function(data1) {
                        console.log(data1);
                        drawWeather(data1);
                    })
                    .catch(function() {
                        //alert("Pleas check the spelling of the city");
                    });
                }
        
                
                
        
                function drawWeather( data1 ) {
                   // var celcius = Math.round(parseFloat(d.main.temp)-273.15);
                   // var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
                    
                    document.getElementById('description1').innerHTML =  data1.data[0].weather.description;
                    document.getElementById('temp1').innerHTML =data1.data[0].temp  + '&deg;';
                    document.getElementById('location1').innerHTML = data1.city_name;


                    document.getElementById('descriptionday1-1').innerHTML = data1.data[1].weather.description;
                    document.getElementById('descriptionday2-1').innerHTML = data1.data[2].weather.description;
                    document.getElementById('descriptionday3-1').innerHTML = data1.data[3].weather.description;
                    document.getElementById('descriptionday4-1').innerHTML = data1.data[4].weather.description;
                    document.getElementById('descriptionday5-1').innerHTML = data1.data[5].weather.description;

                    document.getElementById('tempday1-1').innerHTML = data1.data[1].temp + '&deg;';
                    document.getElementById('tempday2-1').innerHTML = data1.data[2].temp + '&deg;';
                    document.getElementById('tempday3-1').innerHTML = data1.data[3].temp + '&deg;';
                    document.getElementById('tempday4-1').innerHTML = data1.data[4].temp + '&deg;';
                    document.getElementById('tempday5-1').innerHTML = data1.data[5].temp + '&deg;';

                    function getLogo1(logo1,weather1){}
                    let weather1 = document.getElementById('description1').innerHTML;

                            if(weather1==="Clear sky"){document.getElementById("logo1").src = "img/sun.png";}
                            else if(weather1==="Scattered clouds"){document.getElementById("logo1").src = "img/cloud-sun.png";}
                            else if(weather1==="Broken clouds"){document.getElementById("logo1").src = "img/cloud-sun.png";}
                            else if(weather1==="Overcast clouds"){document.getElementById("logo1").src = "img/cloud.png";}
                            else if(weather1==="Shower rain"){document.getElementById("logo1").src = "img/rain.png";}
                            else if(weather1==="Mist"){document.getElementById("logo1").src = "img/wind.png";}
                            else if(weather1==="Light rain"){document.getElementById("logo1").src = "img/rain.png";}
                            else if(weather1==="Fog"){document.getElementById("logo1").src = "img/wind.png";}
                            else if(weather1==="Few clouds"){document.getElementById("logo1").src = "img/cloud-sun.png";}
                            else if(weather1.includes("Snow")){document.getElementById("logo1").src = "img/snow.png";}
                            else if(weather1==="Moderate rain"){document.getElementById("logo1").src = "img/rain.png";}
                    
                
                
                 }


})();









    document.getElementById("more").addEventListener("click",function() {
        
        if (document.getElementById("fivedays").style.display == "grid") {document.getElementById("fivedays").style.display = "none";}
        else if  (document.getElementById("fivedays").style.display = "none") {document.getElementById("fivedays").style.display = "grid";}
         
         if (document.getElementById("more").innerHTML=== "5 days forecast") {document.getElementById("more").innerHTML= "Back to normal"}
         else if (document.getElementById("more").innerHTML= "Back to normal") {document.getElementById("more").innerHTML= "5 days forecast"}

    });


    document.getElementById("more-1").addEventListener("click",function() {
        let display=document.getElementById("fivedays-1").style.display
        if (document.getElementById("fivedays-1").style.display == "grid") {document.getElementById("fivedays-1").style.display = "none";}
        else if  (document.getElementById("fivedays-1").style.display = "none") {document.getElementById("fivedays-1").style.display = "grid";}
         
         if (document.getElementById("more-1").innerHTML=== "5 days forecast") {document.getElementById("more-1").innerHTML= "Back to normal"}
         else if (document.getElementById("more-1").innerHTML= "Back to normal") {document.getElementById("more-1").innerHTML= "5 days forecast"}

    });

    
  

   








	
	

