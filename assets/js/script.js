function appendNoteAndDate(){
    $(".list").append($("<p>").attr('class', 'list-items').html('Getting Date and Time - Please Wait'));
    $.ajax({
        url: "https://worldtimeapi.org/api/timezone/America/Los_Angeles" ,
        method: "GET"
    }) .then(function (response){
        let time = response.datetime.slice(0,16);
        time = time.replace('T',' ');
        let input = $('#note-area').val();
    
        function keyNumber(){
            if(localStorage.length === 0){
                return '0';
            } else {
                return localStorage.length + 1;
            }
        }
        let key = keyNumber();

        console.log(key);
        console.log(keyNumber());

        localStorage.setItem(key, time+" | "+input);
        // localStorage.setItem('time'+key, time.replace('T',' '))

        // $(".list").append($("<p>").attr('class', 'delete-button').attr('id', 'delButton').html('X'));
        $(".list").append($("<p>").attr('class', 'list-items').attr('id', key).html(time+" | "+ input));
        location.reload();
    })
}

for(let i = 0; i < localStorage.length; i++){
    let keyName = localStorage.key(i)
    let tempNum = localStorage.length
    let keyNum = tempNum.toString();
    console.log(keyNum)
    let localTimeInput = localStorage.getItem(keyName)
    console.log(localStorage)
    console.log(localTimeInput)
    // $(".list").append($("<p>").attr('class', 'delete-button').attr('id', 'delButton').html('X'));
    $(".list").append($("<p>").attr('class', 'list-items').attr('id', i.toString()).html(localTimeInput));
}


$('#submit-button').on("click", function() {
    appendNoteAndDate();
})

$('.list-items').on("click", function() {
    var clickedItem = $(this).attr('id');
    clickedItem = JSON.parse(clickedItem);
    let clickedKey = localStorage.key(clickedItem)
    console.log(clickedKey);
    localStorage.removeItem(clickedKey);
    location.reload();
})
