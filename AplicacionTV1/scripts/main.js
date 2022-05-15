import { dataSeries } from "./dataSeries.js";
var seriesTable = document.getElementById("series");
getInfoSeries(dataSeries);
getAvgSeasons(dataSeries);
function getInfoSeries(series) {
    var tBodyElement = document.createElement("tBody");
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("id", serie.id.toString());
        trElement.onclick = function (event) {
            var cardId = event.path[1].id;
            var serieInd = series[Number(cardId) - 1];
            var cardSerie = document.getElementById("cardSerie");
            var img = document.getElementById("serieImage");
            img.setAttribute("src", serieInd.image);
            var nombre = document.getElementById("serieName");
            nombre.innerHTML = "".concat(serie.name);
            var descripcion = document.getElementById("serieDescription");
            descripcion.innerHTML = "".concat(serie.description);
            var url = document.getElementById("url");
            url.innerHTML = "".concat(serie.website);
            url.setAttribute("href", serieInd.website);
            cardSerie.style["display"] = "unset";
        };
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td class = \"name\">").concat(serie.name, "\"</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        tBodyElement.appendChild(trElement);
    };
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        _loop_1(serie);
    }
    seriesTable.appendChild(tBodyElement);
}
function getAvgSeasons(series) {
    var tBodyElement = document.createElement("tBody");
    var total = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        total = total + serie.seasons;
    }
    var avgSeasons = total / series.length;
    var text = "Average Seasons: " + avgSeasons;
    var trElement = document.createElement("tr");
    trElement.innerHTML =
        "<td>".concat(text, "</td>");
    tBodyElement.appendChild(trElement);
    seriesTable.appendChild(tBodyElement);
}
