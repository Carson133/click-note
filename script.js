$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

var previousNotes = [];

function appendNoteAndDate(){
    $.ajax({
        url: "http://worldtimeapi.org/api/timezone/America/Los_Angeles" ,
        method: "GET"
    }) .then(function (response){
        let time = response.datetime.slice(0,16)
        let input = $('#note-area').val();
    
        function keyNumber(){
            if(localStorage.length === 0){
                return '0';
            } else {
                return localStorage.length / 2;
            } 
        }
        let key = keyNumber();

        console.log(key)
        console.log(keyNumber())

        localStorage.setItem(key, input)
        localStorage.setItem('time'+key, time.replace('T',' '))

        $(".list").append($("<p>").attr('class', 'list-items').attr('id', key).html(time.replace('T',' ')+" | "+ input));
    })
}

for(let i = 0; i < localStorage.length / 2; i++){
    let localTime = localStorage.getItem('time'+i.toString())
    let localInput = localStorage.getItem(i.toString())

    $(".list").append($("<p>").attr('class', 'list-items').attr('id', i.toString()).html(localTime +" | "+ localInput));
}

$('#submit-button').on("click", function() {
    appendNoteAndDate();
})

var previousNotes = [];

function appendNoteAndDate(){
    $.ajax({
        url: "http://worldtimeapi.org/api/timezone/America/Los_Angeles" ,
        method: "GET"
    }) .then(function (response){
        let time = response.datetime.slice(0,16)
        let input = $('#note-area').val();f
    
        function keyNumber(){
            if(localStorage.length === 0){
                return '0';
            } else {
                return localStorage.length / 2;
            } 
        }
        let key = keyNumber();

        console.log(key)
        console.log(keyNumber())

        localStorage.setItem(key, input)
        localStorage.setItem('time'+key, time.replace('T',' '))

        $(".list").append($("<p>").attr('class', 'list-items').attr('id', key).html(time.replace('T',' ')+" | "+ input));
    })
}

for(let i = 0; i < localStorage.length / 2; i++){
    let localTime = localStorage.getItem('time'+i.toString())
    let localInput = localStorage.getItem(i.toString())

    $(".list").append($("<p>").attr('class', 'list-items').attr('id', i.toString()).html(localTime +" | "+ localInput));
}


$('#submit-button').on("click", function() {
    appendNoteAndDate();
})

// Weather 

var previousNotes = [];

function appendNoteAndDate(){
    $.ajax({
        url: "http://worldtimeapi.org/api/timezone/America/Los_Angeles" ,
        method: "GET"
    }) .then(function (response){
        let time = response.datetime.slice(0,16)
        let input = $('#note-area').val();
    
        function keyNumber(){
            if(localStorage.length === 0){
                return '0';
            } else {
                return localStorage.length / 2;
            } 
        }
        let key = keyNumber();

        console.log(key)
        console.log(keyNumber())

        localStorage.setItem(key, input)
        localStorage.setItem('time'+key, time.replace('T',' '))

        $(".list").append($("<p>").attr('class', 'list-items').attr('id', key).html(time.replace('T',' ')+" | "+ input));
    })
}

for(let i = 0; i < localStorage.length / 2; i++){
    let localTime = localStorage.getItem('time'+i.toString())
    let localInput = localStorage.getItem(i.toString())

    $(".list").append($("<p>").attr('class', 'list-items').attr('id', i.toString()).html(localTime +" | "+ localInput));
}
$('#submit-button').on("click", function() {
    appendNoteAndDate();
})
$(document).ready(function(){
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }else{
            alert("Geolocation not supported by this browser");
        }
    }

function getWeather(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let API_KEY = "3c08c223f7924790dbebee106b70e779";
    let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

    $.get(baseURL,function(res){
        let data = res.current;
        let temp = Math.floor(data.temp - 273);
        let condition = data.weather[0].description;

        $('#temp-main').html(`${temp}°`);
        $('#condition').html(condition);
    })    
}

getLocation();
})