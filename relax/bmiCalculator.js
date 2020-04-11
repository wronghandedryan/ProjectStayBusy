var settings = {
	"async": true,
	 
	"url": "https://bmi.p.rapidapi.com/",
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "bmi.p.rapidapi.com",
		"x-rapidapi-key": "83bf76534amshf115aa3d928cc20p1d7764jsn45e5da813e3a",
		"content-type": "application/json",
		"accept": "application/json"
	},
	"processData": false,
	"data": "{\"weight\":{\"value\":\"85.00\",\"unit\":\"kg\"},\"height\":{\"value\":\"170.00\",\"unit\":\"cm\"},\"sex\":\"m\",\"age\":\"24\",\"waist\":\"34.00\",\"hip\":\"40.00\"}"
}


$(document).ready(function () {
    function getBMI () {
    }
});
let searchHistory = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
makeBtns()
function makeBtns(){
    $('#searchHistory').empty();
    searchHistory.forEach(function(city){
        $('#searchHistory').append(`<button class='btn btn-warning' city-weather="${city}">${city}</button>`)
    })
}
//pascal casing LikeThisNow  camel casing thisIsCamel
$("#submit").on("click", function() {
    // In this case, the "this" keyword refers to the button that was clicked
    //$('# or . for id something or class something').method()  .val() method grabs the value of an input, .text() grabs the textContent in a div
    var city = $('#searchTerm').val().trim();
    //if not searchHistory includes city, AND city.length is truthy (NOT 0)
    if(!searchHistory.includes(city) && city.length){
         searchHistory.push(city);
    localStorage.setItem('history', JSON.stringify(searchHistory))
    makeBtns()
    }
    var queryURLCurrent = "https://bmi.p.rapidapi.com/&appid=83bf76534amshf115aa3d928cc20p1d7764jsn45e5da813e3a";
    
    $.ajax({
      url: queryURLCurrent,
      method: "POST"
      console.log(data)
    })
      
    })
    function appendWeather(currentData, forecastData){
        console.log(currentData,forecastData)
        //take data and put on page...
    }

$.ajax(settings).done(function (response) {
	console.log(response);
});