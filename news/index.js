var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://community-hn-search.p.rapidapi.com/items/1",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-hn-search.p.rapidapi.com",
		"x-rapidapi-key": "c23dc5b874msh62f059df9b013aep19e24fjsnb59bc7d16dea"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

