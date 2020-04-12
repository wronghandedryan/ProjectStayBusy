$.get("https://api.hackerwebapp.com/news?page=1", function (data) {
    data.forEach(post => {
      if (!post.title.toUpperCase().includes("COVID")) {

        $("#news").append(buildLink(post));
      }
    });
  })

  function buildLink(post) {
    return $(`<div><a href="${post.url}">${post.title}</a></div>`)

  }