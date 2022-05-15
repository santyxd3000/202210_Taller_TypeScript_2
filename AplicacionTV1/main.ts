import {dataSeries} from "./dataSeries.js"
import {Serie} from "./Serie.js"

let seriesTable: HTMLElement = document.getElementById("series")!;

getInfoSeries(dataSeries);
getAvgSeasons(dataSeries);

function getInfoSeries(series:Serie[]){
    let tBodyElement: HTMLElement = document.createElement("tBody");
    for (let serie of series)
    {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.setAttribute("id",serie.id.toString());
        trElement.onclick = (event) =>
        {
            let cardId = (event as MouseEvent & {path: {id: string}[]}).path[1].id
            let serieInd: Serie = series[Number(cardId)-1]
            let cardSerie: HTMLElement = document.getElementById("cardSerie")!;

            let img: HTMLElement = document.getElementById("serieImage")!;
            img.setAttribute("src",serieInd.image)
            let nombre: HTMLElement = document.getElementById("serieName")!;
            nombre.innerHTML = `${serie.name}`
            let descripcion: HTMLElement = document.getElementById("serieDescription")!;
            descripcion.innerHTML = `${serie.description}`
            let url: HTMLElement = document.getElementById("url")!;
            url.innerHTML = `${serie.website}`
            url.setAttribute("href",serieInd.website)
            cardSerie.style["display"] = "unset";
        }  
        trElement.innerHTML = `<td>${serie.id}</td>
        <td class = "name">${serie.name}"</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>`;
    tBodyElement.appendChild(trElement);
    }
    seriesTable.appendChild(tBodyElement);
}

function getAvgSeasons(series:Serie[]) {
   let tBodyElement: HTMLElement = document.createElement("tBody");
   let total: number = 0
   for (let serie of series){
    total = total + serie.seasons;
}
let avgSeasons: number = total/series.length;
let text: string = "Average Seasons: " + avgSeasons;
let trElement: HTMLElement = document.createElement("tr");
trElement.innerHTML = 
`<td>${text}</td>`
tBodyElement.appendChild(trElement);
seriesTable.appendChild(tBodyElement);
}



