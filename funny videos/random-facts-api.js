var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://random-facts1.p.rapidapi.com/fact/onthisday/died",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "random-facts1.p.rapidapi.com",
		"x-rapidapi-key": "c23dc5b874msh62f059df9b013aep19e24fjsnb59bc7d16dea"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});