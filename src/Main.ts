import { series } from './Data.js';

function renderSeriesSimplified(): void {
  const tbody: HTMLElement | null = document.getElementById('series-body');
  const avgSeasonsElem: HTMLElement | null = document.getElementById('avg-seasons');

  if (!tbody || !avgSeasonsElem) return;

  // 1. Calcular el total de temporadas y el promedio usando reduce.
  const totalSeasons: number = series.reduce(
    (acc: number, serie: Series) => acc + serie.temporadas,
    0
  );
  const average: number = series.length ? totalSeasons / series.length : 0;

  // 2. Generar todas las filas de la tabla como una cadena de texto usando map y join.
  const seriesRows: string = series
    .map(
      (serie: Series) => `
      <tr>
        <th scope="row">${serie.id}</th>
        <td><a href="${serie.imageUrl}" target="_blank">${serie.nombre}</a></td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>
      </tr>
    `
    )
    .join(''); // Unir todos los elementos del array de strings en una sola cadena.

  // 3. Insertar todas las filas de golpe, limpiando el cuerpo de la tabla previamente.
  // Esto es más eficiente que manipular el DOM elemento por elemento.
  tbody.innerHTML = seriesRows;

  // 4. Actualizar el promedio de temporadas.
  avgSeasonsElem.textContent = average.toFixed(2);
}

renderSeriesSimplified();
