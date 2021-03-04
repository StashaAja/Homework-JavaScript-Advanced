$(document).ready(function () {

    let arrayFirstNames = ["Dunja", "Anja", "Asja", "Jan", "Vanja"];
    let arrayLastNames = ["Blazeska", "Ahrimenko", "Zabijakin", "Damovski", "Trpchev"];

    //Self Invoked for the List of Full Names:
    ((arrayOne, arrayTwo) => {
        for (let i = 0; i <= 4; i++) {
            $("#result").append(`<p>${i + 1}. Full Name: ${arrayOne[i]} ${arrayTwo[i]}</p>`)
        }
    })(arrayFirstNames, arrayLastNames);

    //jq   
})