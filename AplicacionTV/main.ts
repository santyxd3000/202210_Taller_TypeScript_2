import { dataSeries } from "./dataSeries.js";

var seriesTbody = document.getElementById('series');
var avgSeasons = document.getElementById("average-seasons");
renderSeriesInTable(dataSeries);
avgSeasons.innerHTML = "" + getAverageSeasons(dataSeries);
var cards = document.getElementById("cards");

function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + serie.id + "</td>\n   <td>" + serie.name + "</td>\n     <td>" + serie.channel + "</td>\n    <td>" + serie.seasons + "</td>";
        seriesTbody.appendChild(trElement);
    });
}


function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function(serie) {totalSeasons = totalSeasons + serie.seasons;})
    return totalSeasons/series.length;
}

function createCard(series) {
    series.forEach(function(serie) {
    var card = document.createElement("div");
    card.className = "card";
    card.style = "width: 18rem;";

    var image = document.createElement("img");
    image.className = "card-img-top";
    image.src = serie.image;

    var cardBody1 = document.createElement("div");
    cardBody1.className = "card-body";

    var cardBody2 = document.createElement("div");
    cardBody2.className = "card-body";

    var title = document.createElement("h5");
    title.className = "card-title";
    title.appendChild(serie.name);

    var text = document.createElement("p");
    text.className ="card-text";
    text.appendChild(serie.description);

    var link = document.createElement("a");
    link.href = series.link;
    link.className = "card-link";

    card.appendChild(image);
    card.appendChild(cardBody1);
    card.appendChild(cardBody2);
    cardBody1.appendChild(title);
    cardBody1.appendChild(text);
    cardBody2.appendChild(link);

    cards.appendChild(card);
});
}

