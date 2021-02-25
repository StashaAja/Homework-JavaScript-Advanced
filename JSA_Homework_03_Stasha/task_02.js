//Korrdinatite ne mi uspeaa, kako da gi zemam? //undefined

let button = document.getElementById("userOne");

let table = document.getElementById("userDetails");

button.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function (response) {
            console.log("Success!");
            console.log("Promise:");
            console.log(typeof (response));
            response.json().then(
                function (data) {
                    console.log("JavaScript Objekt:");
                    console.log(data);
                    // console.log(typeof(data));
                    table.innerHTML = `  <tr>
                    <th>Full name: </th>
                    <th>Username: </th> 
                    <th>Email: </th>
                    <th>Address: </th>
                    <th>Coordinates: </th>
                    <th>Phone: </th>
                    <th>Website: </th>
                    <th>Website: </th>
                  </tr>
                  <tr>
                    <td>${data.name}</td>
                    <td>${data.username}</td>
                    <td>${data.email}</td>
                    <td>Street: ${data.address.street}, Suite: ${data.address.suite}, City:${data.address.city}, Zipcode: ${data.address.zipcode} </td>
                    <td>${data.geo}</td>
                    <td>${data.phone}</td>
                    <td>${data.website}</td>
                    <td>${data.company.name}</td>
                    
                  </tr>`

                }
            )


            //then    
        })
        .catch(function (error) {
            console.log("There was an error:");
            console.log(error);

            //catch    
        })



    //click
})