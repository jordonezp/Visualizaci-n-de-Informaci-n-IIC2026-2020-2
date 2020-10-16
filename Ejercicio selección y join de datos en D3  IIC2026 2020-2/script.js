data = [
  {date: '30/08', cases: 1965, tests: 34769},
  {date: '29/08', cases: 2037, tests: 32237},
  {date: '28/08', cases: 1870, tests: 30274},
  {date: '27/08', cases: 1737, tests: 27019}
];

colors = ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78'];


// Acá empieza el código
// Parte 1
d3.select("#title-cont")
    .append("h1")
    .text("Últimos datos del COVID en Chile");

d3.select("#day-head")
    .text("Día");
d3.select("#tests-head")
    .text("Tests");
d3.select("#cases-head")
    .text("Contagiados");

d3.selectAll(".day")
    .text((d, i) => data[i].date);
d3.selectAll(".tests")
    .text((d, i) => data[i].tests);
d3.selectAll(".cases")
    .text((d, i) => data[i].cases);

d3.selectAll(".odd")
    .style("background-color", '#cccccc');

// Parte 2
d3.select("#plot-title")
    .text("Número de Tests");

const svg = d3.select('#plot-cont').append("svg")
  .selectAll("rect") // es importante indicar que de ahora en adelate nos referiremos a los
    // elementos rect (a pesar de que no se han creado aún)
  .data(data)
  .enter()
  .append("rect")
  .attr("width", 30)
  .attr("y", (d, i) => 180 - d.tests / 200)
  .attr("x", (d, i) => i * 50)
  .attr("height", (d, i) => d.tests / 200)
  .style("fill", (d, i) => colors[i]);

const descripciones = d3.select('#plot-cont').append("svg") // Se está crando un nuevo objeto
    // svg para agregar las descripciones
  .selectAll("text")
  .data(data)
  .enter()
  .append("text")
  .attr("y", (d, i) => 20)
  .attr("x", (d, i) => i * 50)
  .text((d, i) => data[i].date);
