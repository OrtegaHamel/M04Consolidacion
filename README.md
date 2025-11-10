# M04Consolidacion – “Superhéroes Star Wars”

## Descripción

Este proyecto consiste en una página web interactiva desarrollada con **HTML**, **CSS** y **JavaScript**, que muestra información de personajes del universo **Star Wars** utilizando datos obtenidos desde la **API pública SWAPI** (Star Wars API).

El sitio carga los personajes dinámicamente al interactuar con distintas secciones de la página, permitiendo explorar los datos de manera progresiva sin recargar la página.

---

## Características principales

- Consumo de datos en tiempo real desde la API: [https://swapi.dev/api/people/](https://swapi.dev/api/people/)
- Renderizado dinámico de personajes mediante manipulación del DOM.
- Distribución de los personajes en distintas secciones de la interfaz.
- Carga paulatina de personajes según la interacción del usuario (evento `mouseenter`).
- Diseño responsivo y modular.

---

## Tecnologías utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- **Fetch API** para el consumo de datos externos.

---

## Estructura del proyecto

```
M04Consolidacion/
│
├── index.html          # Página principal
├── assets/
│   ├── css/            # Hojas de estilo
│   ├── js/             # Scripts JavaScript
│   └── img/            # Recursos gráficos
└── README.md           # Documentación del proyecto
```

---

## Funcionamiento

El script principal (`main.js` o similar) ejecuta el siguiente flujo:

1. **Carga inicial:**  
   Al cargarse el DOM, se define la URL base de la API de personajes (`https://swapi.dev/api/people/`).

2. **Obtención de datos:**  
   Cada vez que el usuario pasa el cursor sobre una sección (`mouseenter`), se invoca una función `fetchCharacter(id)` que realiza una petición `fetch()` a la API para obtener los datos del personaje correspondiente.

3. **Renderizado dinámico:**  
   Los datos obtenidos se insertan en el DOM dentro de un contenedor con formato de tarjeta (card), mostrando nombre, altura y peso.

4. **Control de carga:**  
   Cada sección tiene un rango de personajes y un contador interno para evitar repetir cargas o solicitudes innecesarias.

---

## Ejemplo de interacción con la API

```javascript
async function fetchCharacter(id) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    if (!response.ok) throw new Error(`Personaje ${id} no encontrado.`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
```

---

## Cómo ejecutar el proyecto localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/OrtegaHamel/M04Consolidacion.git
   ```

2. Ingresar a la carpeta del proyecto:
   ```bash
   cd M04Consolidacion
   ```

3. Abrir el archivo `index.html` directamente en el navegador.

---

## Posibles mejoras

- Agregar una barra de búsqueda de personajes.
- Mostrar más atributos (género, año de nacimiento, planeta de origen, etc.).
- Añadir animaciones o efectos visuales al cargar cada tarjeta.
- Implementar manejo de errores visual (mensajes amigables al usuario).
- Incluir paginación o carga infinita para explorar todos los personajes disponibles.

---

## Créditos

Desarrollado por **Álvaro Ortega Hamel** como parte del módulo 04 del Bootcamp de Desarrollo FullStack JavaScript.  
Proyecto enfocado en la consolidación de conocimientos sobre manipulación del DOM y consumo de APIs.

---

## Licencia

Este proyecto se distribuye bajo la licencia **MIT**.
