const datosCuriosos = [
  "Toy Story fue la primera película totalmente animada en computadora.",
  "El primer dibujo animado se creó en 1908 por Émile Cohl.",
  "Frozen fue traducida a más de 40 idiomas.",
  "La animación Stop Motion puede requerir más de 24 fotos por segundo."
];

function mostrarDato() {
  const curioso = document.getElementById("curioso");
  const random = Math.floor(Math.random() * datosCuriosos.length);
  curioso.textContent = datosCuriosos[random];
}
