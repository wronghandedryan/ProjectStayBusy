$ curl 'http://openlibrary.org/query.json?type=/type/edition&authors=/authors/OL1A'
[
    {
        "key": "/books/OL1M"
    },
    {
        "key": "/books/OL4731M"
    },
    ...
]
$ curl -H 'Accept: application/json' 'https://openlibrary.org/query?type=/type/edition&authors=/authors/OL1A'
[
    {
        "key": "/books/OL1M"
    },
    {
        "key": "/books/OL4731M"
    },
    ...
]
$ curl 'http://openlibrary.org/query.json?type=/type/edition&works=/works/OL2040129W'
[
    {
        "key": "/books/OL9770407M"
    },
    {
        "key": "/books/OL21857767M"
    },
    ...
]

$ curl 'http://openlibrary.org/query.json?type=/type/edition&authors=/authors/OL1A&limit=2'
[
    {
        "key": "/books/OL1M"
    },
    {
        "key": "/books/OL4731M"
    }
]
# curl fails because it doesn't escape query parameter
$ wget -q -O - 'http://openlibrary.org/query.json?query={"type": "/type/edition", "authors": "/authors/OL1A", "title": null, "limit": 2}'
[
    {
        "key": "/books/OL1M",
        "title": "Kabit\u0101."
    },
    {
        "key": "/books/OL4731M",
        "title": "Sacci Ra\u0304utara\u0304y\u0307a grantha\u0304bal\u0323i\u0304."
    }
]