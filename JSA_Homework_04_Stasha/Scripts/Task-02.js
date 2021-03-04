//the first 10 Planets:

$(document).ready(function () {
    let buttonClick = $("#myButton");
    let buttonNext = $("#myButtonNext").hide();
    let buttonPrevious = $("#myButtonPrevious").hide();
    let tablePlanets = $("#myTable").hide();
    let urlSwapiPage1 = "https://swapi.dev/api/planets/?page=1";
    let urlSwapiPage2 = "https://swapi.dev/api/planets/?page=2";

    let createTable = array => {
        tablePlanets.html("");
        tablePlanets.show();
        tablePlanets.append(`<tr><th>Number</th><th>Planet Name</th><th>Population</th><th>Climate</th><th>Gravity</th></tr>`);
        for (let i = 0; i < 10; i++) {

            tablePlanets.append(`<tr><th>${i + 1}</th><th>${array[i].name}</th><th>${array[i].population}</th><th>${array[i].climate}</th><th>${array[i].gravity}</th></tr>`)
        }


    }

    let callPlanets = urlSwapi => {
        $.ajax({
            method: "GET",
            url: urlSwapi,
            success: function (response) {
                console.log(response);

                // console.log(typeof (response));
                //QUESTION 1: Dali sekogash koga e aplication/json ne treba parse ili sekogash vo JQuery prepoznavashe samo?
                createTable(response.results);
            },
            error: function (error) {
                console.log("There was an error:");
                console.log(error);
            },
        })
    }


    //Prvite 10 Planeti:
    buttonClick.click(() => {

        callPlanets(urlSwapiPage1);
        buttonClick.hide();
        buttonNext.show();


    });

    //Vtorite 10 Planeti:
    buttonNext.click(() => {
        callPlanets(urlSwapiPage2);
        buttonNext.hide();
        buttonPrevious.show();
    })


    //Prethodnite 10 Planeti:
    buttonPrevious.click(() => {
        callPlanets(urlSwapiPage1);
        buttonNext.show();
        buttonPrevious.hide();
    })
    //jq
});