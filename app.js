//identification
let htmlObj = document.getElementById("identification");
htmlObj.innerHTML =
    `id: ${customer.id}<br>`+
    `Vorname: ${customer.firstname}<br>`+
    `Name: ${customer.lastname}<br>`+
    `Geschlecht: ${customer.gender}<br>`;

//Location
htmlObj = document.getElementById("location");
htmlObj.innerHTML =
    `Land: ${customer.location.country}<br>`+
    `Stadt: ${customer.location.city}<br>`+
    `Strasse: ${customer.location.street}`;

//Interessen darstellen
htmlObj = document.getElementById("interessen");
customer.Interessen.gruppe.forEach(gruppeid => {
    htmlObj.innerHTML += `Gruppe: ${gruppeid}<br>`;
})

//Talente vorstellen
htmlObj = document.getElementById("talente");
customer.talente.Beruf.forEach(Berufid => {
    htmlObj.innerHTML += `Beruf: ${Berufid}<br>`;
})