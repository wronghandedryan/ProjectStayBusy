$(document).ready(function() {



 var key ="AIzaSyD_ySkrWTg8iStQP2KbWnZzvPTw6w-4uZ4"
    var playlistId = "PLEZ1Wj7JN8F94auWhoDSKtt8d41L4oRAe"
    var URL =  https://www.googleapis.com/youtube/v3/playlistItems



)};

   

    var options = {
        part: SVGAnimatedPreserveAspectRatio;
        key: AIzaSyD_ySkrWTg8iStQP2KbWnZzvPTw6w-4uZ4;
        maxResults: 20;
        playlistId: playlistId;
    
}
loadVids();

function loadVids() {
    $.getJSON(URL, options, function(data) {
        console.log(data)
        var id = data
        mainVid(id);
    })
}

function mainVid( {
    $("#video").html(`
    <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/${id} " frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    `);
})