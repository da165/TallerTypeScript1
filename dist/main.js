import { series } from "./data.js";
const tbody = document.getElementById("series-body");
const avgContainer = document.getElementById("average-seasons");
function renderTable() {
    tbody.innerHTML = "";
    let totalSeasons = 0;

    series.forEach((series) => {
        totalSeasons += series.temporadas;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th scope="row">${series.id}</th>
            <td>${series.nombre}</td>
            <td>${series.canal}</td>
            <td>${series.temporadas}</td>
        `;
        tbody.appendChild(tr);
    });
    const avg = (totalSeasons / series.length).toFixed(2);
    avgContainer.textContent = `Seasons average: ${avg}`;
}
renderTable();