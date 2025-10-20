import { series } from "./data.js";
const tbody = document.getElementById("series-body");
const avgContainer = document.getElementById("average-seasons");
function renderTable() {
    tbody.innerHTML = "";
    let totalSeasons = 0;

    series.forEach((serie) => {
        totalSeasons += serie.seasons;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tbody.appendChild(tr);
    });
    const avg = (totalSeasons / series.length).toFixed(2);
    avgContainer.textContent = `Seasons average: ${avg}`;
}
renderTable();