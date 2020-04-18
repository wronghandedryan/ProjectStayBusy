$(document).ready(function() {
    var key ="AIzaSyD_ySkrWTg8iStQP2KbWnZzvPTw6w-4uZ4";
    var playlistId = "PLEZ1Wj7JN8F94auWhoDSKtt8d41L4oRAe";
    var URL = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&maxResults=20&playlistId=${playlistId}`;
    loadVids(URL);
});    
function loadVids(URL) {
    console.log(URL)
    $.ajax({
        method: 'GET',
        url: URL
    }).then(function(data){
        console.log(data)
        var id = data.items[0].snippet.resourceId.videoId;
        mainVid(id);
        appendVids(data.items.map(a=> a.snippet))
    })
}
function mainVid(id) {
    $('#video').html(`
    <iframe width="560" height="315" 
    src="https://www.youtube.com/embed/${id}" frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media;" allowfullscreen></iframe>
    `);
};

function appendVids(data){
    data.forEach(function(item){
        $('#youtubeResults').append(`<div class="detail" id=${item.resourceId.videoId}>
        <div class="w3-col m3">
          <img src=${item.thumbnails.default.url} alt="" class="thumb">
        </div>
        <div class="w3-col m9">
          <h4>${item.title}</h4>
          <p>${item.publishedAt}</p>
        </div>
      </div>`)
    })
}
$(document).on('click', '.detail', function(){
    mainVid($(this).attr('id'))
})
