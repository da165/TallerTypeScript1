import { series } from './Adata.js';

function renderSeries(): void {
  const tbody: HTMLElement | null = document.getElementById('series-body');
  const avgSeasonsElem: HTMLElement | null = document.getElementById('avg-seasons');
  if (!tbody || !avgSeasonsElem) return;

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  let totalSeasons = 0;
  series.forEach((serie) => {
    totalSeasons += serie.temporadas;
    const tr: HTMLTableRowElement = document.createElement('tr');
    tr.innerHTML = `
      <th scope="row">${serie.id}</th>
      <td><a href="${serie.imageUrl}" target="_blank">${serie.nombre}</a></td>
      <td>${serie.canal}</td>
      <td>${serie.temporadas}</td>
    `;
    tbody.appendChild(tr);
  });
  const average = series.length ? (totalSeasons / series.length) : 0;
  avgSeasonsElem.textContent = average.toFixed(2);
}

renderSeries();