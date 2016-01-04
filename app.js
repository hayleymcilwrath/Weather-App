

function getLocation(){
	
	var location = document.getElementById("location").value;


	
	location = location.replace(" ", "%20");
	

	
	if (location == ""){
		


		document.getElementById("location").classList.add("error");
		
	}
	else {
		

		
		document.getElementById("location").classList.remove("error");
		getWeather(location);
		
	}
}



function getWeather(location){
	

	



	var ajax = new XMLHttpRequest();
	


	var json; 
	


	var apiKEY = "3521a940efd69dc5b6f3dd982d18c618";
	

	
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + location + " ,uk&appid=" + apiKEY;



	ajax.open("GET", url, true);


	
	ajax.send();
	

	
	ajax.onreadystatechange = function(){



		if (ajax.readyState == 4 && ajax.status == 200){
			 


			json = JSON.parse(ajax.responseText);
			


			document.getElementById("locationForm").style.display = "none";
			document.getElementById("weather").style.display = "block";
			


			if (json != undefined){
				


				var weather = json.weather[0].main
				setIconAndDescription(weather, location)
				
			}	
			else {
				


				description = "Oops, I couldn't find the weather in " + location;
				document.getElementById("description").innerHTML = description;
		
			}
		}
	}
}

function setIconAndDescription(weather, location){

	var icon;
	var description;
	


	weather = weather.toLowerCase();
		



    if (weather == "clear sky" || weather == "clear") {
        icon = "sunny.svg";
        description = "Yay, sunshine!";
        
         
				
		    
		    

    } else if (weather == "few clouds") {
        icon = "Windy-cloud.svg";
        description = "It's a little cloudy and windy today.";
				
				
				

    } else if (weather == "scattered clouds" || weather == "broken clouds" || weather == "clouds") {
        icon = "clouds.svg";
        description = "Looks like scattered clouds today.";
				
				
				

    } else if (weather == "rain" || weather == "light rain" || weather == "shower rain") {
        icon = "rain-cloud.svg";
        description = "Get your umberella, looks like rain."
		
				
				

    } else if (weather == "thunderstorm") {
        icon = "thunder-cloud.svg";
        description = "Yikes, looks like a storm's brewing!"
				
				
				

    } else if (weather == "snow") {
        icon = "snowing.svg";
        description = "Wrap up warm, it's going to snow!"
				
        

    } else {
        icon = "cant-load.svg";
        description = "Oops, I couldn't find the weather in " + location;
    }



    document.getElementById("location").textContent = getLocation;
    document.getElementById("weatherIcon").src = "images/" + icon;
    document.getElementById("description").innerHTML = description;

}



(function() {



	document.getElementById("btnGo").onclick = getLocation;
    
    
	


	document.getElementById("location").onkeypress = function(key){
		
		if (key.keyCode == "13"){
			
			getLocation();
			
		}
	}
    
   })();

function change() { 
    document.
        getElementById("background").
        getElementsByTagName("input").
        style.backgroundImage = "url(images/hero-image-2.svg)"
} 

