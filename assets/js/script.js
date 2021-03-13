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