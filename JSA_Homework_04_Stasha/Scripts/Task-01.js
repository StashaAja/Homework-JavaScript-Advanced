$(document).ready(function () {
    let buttonClick = $("#myButton");
    let tablePlanets = $("#myTable");

    function createTable(array) {
        tablePlanets.append(`<tr><th>Number</th><th>Planet Name</th><th>Population</th><th>Climate</th><th>Gravity</th></tr>`);
        for (i = 0; i <= 10; i++) {
            tablePlanets.append(`<tr><th>${i + 1}</th><th>${array[i].name}</th><th>${array[i].population}</th><th>${array[i].climate}</th><th>${array[i].gravity}</th></tr>`)
        }
    }

    function callPlanets() {
        $.ajax({
            method: "GET",
            url: "https://swapi.dev/api/planets/?page=1",
            success: function (response) {
                console.log(response);

                // console.log(typeof (response));

                createTable(response.results);
            },
            error: function (error) {
                console.log("There was an error:");
                console.log(error);
            },
        })
    }



    buttonClick.click(function () {

        callPlanets();

    })




    //jq
});