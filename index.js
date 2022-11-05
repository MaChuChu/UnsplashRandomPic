
const clientID = "Bs-_lKWb4kXg3ykHiwzQB7dT2jDTiMkqNg-HGTnPcrE";
const endPoint = 'https://api.unsplash.com/photos/random/?client_id=' + clientID;

let imageElement = document.querySelector("#unsplashImage");
let imageLink = document.querySelector("#imageLink");
let creator = document.querySelector("#creator");

fetch(endPoint)
    .then((response) => response.json())
    .then((jsonData) => {
        //console.log(jsonData);
        imageElement.src = jsonData.urls.regular;
        imageLink.setAttribute("href", jsonData.links.html);

        creator.innerHTML = jsonData.user.name;
        creator.setAttribute("href", jsonData.user.portfolio_url);
    })
    .catch((error) => {
        console.log("Error: " + error)
    });