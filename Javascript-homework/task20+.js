const urls = [
    'https://www.facebook.com',
    'http://google.com',
    'mailto:example@gmail.com',
    'tel:599999999',
    'invalid url',
    'ftp://ftp01.com/html/',
    'http://example.com'
    ];

    // for(let text of urls){
    //     if(text.includes('http')) console.log(text);
    // }


const httpUrls = urls
    .map ((url) => url.includes('http') && console.log(url))
