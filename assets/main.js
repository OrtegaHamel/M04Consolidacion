document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "https://swapi.dev/api/people/";

  // Función para cargar personajes
  async function fetchCharacter(id) {
    try {
      const response = await fetch(`${baseUrl}${id}/`);
      if (!response.ok) throw new Error(`Personaje ${id} no encontrado.`);
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  // Función para renderizar personajes en el DOM
  function renderCharacter(character, sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    const cardContainer = section.querySelector(".row");

    if (!cardContainer) return;

    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
    <div class="card h-100 bg-light shadow-sm">
      <div class="card-body">
        <h3 class="card-title">${character.name}</h3>
        <p class="card-text">Altura: ${character.height || 'N/D'} cm</p>
        <p class="card-text">Peso: ${character.mass || 'N/D'} kg</p>
      </div>
    `;
    cardContainer.appendChild(card);
  }

  // Secciones
  const sections = [
    { id: "primer-grupo", range: [1, 5], currentIndex: 1, shown: new Set() },
    { id: "segundo-grupo", range: [6, 10], currentIndex: 6, shown: new Set() },
    { id: "tercer-grupo", range: [11, 15], currentIndex: 11, shown: new Set() },
    { id: "cuarto-grupo", range: [16, 21], currentIndex: 16, shown: new Set() }
  ];

  // Función para manejar la carga de personajes
  async function handleMouseEnter(section) {
    const { range, currentIndex, shown } = section;
    if (currentIndex > range[1]) {
      return; 
    }
    if (shown.has(currentIndex)) {
      section.currentIndex++; 
      return;
    }

    const character = await fetchCharacter(currentIndex);
    if (character) {
      renderCharacter(character, section.id);
      shown.add(currentIndex); // Marcar el personaje como mostrado
      section.currentIndex = currentIndex + 1; 
      console.log(`Personaje ${currentIndex} mostrado en la sección ${section.id}`);
    } else {
      console.log(`No se pudo cargar el personaje ${currentIndex}`);
      section.currentIndex++; 
    }
  }

  // Configurar eventos para cada sección
  sections.forEach((section) => {
    const element = document.querySelector(`#${section.id}`);
    if (!element) return;

    element.addEventListener("mouseenter", async () => {
      if (section.currentIndex <= section.range[1]) {
        await handleMouseEnter(section); 
      }
    })
  })
});
