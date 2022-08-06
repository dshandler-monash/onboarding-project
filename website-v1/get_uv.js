function httpGet(theUrl) {
    // http request for a specific url, posts to console and return JSON response
    var request = new XMLHttpRequest();
    //Open URL
    request.open( "GET", theUrl, false ); // false for synchronous request
    request.send();
    if (request.status == 200){
        //If successful response log response and return
        response = JSON.parse(request.response)
        console.log(response)
        return response;
    } else {
        //If unsuccessful response log error code and text
        console.log(`error ${request.status} ${request.statusText}`);
    }
}

function get_data(){
    // placeholder function for specific location
    var lat = -37.93,
    lon = 145.12;
    var url_call = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,daily,alerts&appid=29f32a874ef287325631c36c8d516251';
    console.log(url_call)
    response = httpGet(url_call)

    return response
}

response = get_data()
