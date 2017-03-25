// make API into an object, get latitude and longitude
$.getJSON('http://ip-api.com/json', function(ipAPI) {
  var latitude = ipAPI.lat;
  var longitude = ipAPI.lon;

// run latitude to the open weather map api, use variable in the function to access the objects from the API
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' +
    latitude + '&lon=' + longitude + '&APPID=98310c44c00378e11f092a57b0514137',
    function(ow) {
   $("#temperature").text(Math.round(ow.main.temp - 273.15));
    $("#city").text(ow.name + ", " + ow.sys.country);
     $("#status").text(ow.weather.description);
  }
            )})
          
