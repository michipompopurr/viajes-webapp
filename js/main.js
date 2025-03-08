document.getElementById('busquedaVuelos').addEventListener('submit', function(e) {
  e.preventDefault();
  const origen = document.getElementById('origen').value;
  const destino = document.getElementById('destino').value;
  const fecha = document.getElementById('fecha').value;
  
  // Llamada a función para buscar vuelos
  buscarVuelos(origen, destino, fecha);
});

function buscarVuelos(origen, destino, fecha) {
  // Mostrar mensaje inicial en el div de resultados
  const resultadosDiv = document.getElementById('resultadosVuelos');
  resultadosDiv.innerHTML = `<p>Buscando vuelos desde ${origen} hasta ${destino} para el ${fecha}...</p>`;
  
  // Simulación de búsqueda y resultados (este bloque se reemplazará por la lógica de integración con la API)
  setTimeout(() => {
    resultadosDiv.innerHTML += `
      <ul>
        <li>Vuelo 101: ${origen} a ${destino} - Precio: $250.000</li>
        <li>Vuelo 202: ${origen} a ${destino} - Precio: $300.000</li>
      </ul>
    `;
  }, 1000);
}
