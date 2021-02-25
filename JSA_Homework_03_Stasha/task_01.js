$(document).ready(function () {

    let buttonGetCities = $("#buttonCities");
    let list = $("#listOfCities");

    buttonGetCities.click(function () {
        $.ajax({
            // url: "https://api.openaq.org/v1/cities", // ne raboteshe
            url: " https://pokeapi.co/api/v2/pokemon ",
            success: function (response) {
                console.log(response); 
                // console.log(typeof(response));
                for (let i = 0; i < response.results.length; i++) {
                    if (i < 10) {
                        list.after(`<li>${i+1}. ${response.results[i].name}</li>`);
                    } else {
                        return;
                    }
                }
            },
            error: function (response) {
                console.log("There was an error:");
                console.log(response);

            }
            //ajax
        })
        //click
    })

    //JQ    
})