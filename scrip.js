
// creamos una array con los colores
const colors = ["red", "green", "blue", "yellow", "pink",
    "purple", "orange", "black", "white", "gray", "brown",
    "violet", "indigo", "gold", "silver", "cyan", "magenta",
    "lime", "maroon", "navy", "olive", "teal", "aqua", "fuchsia",
    "crimson", "coral", "azure", "beige", "cornflowerblue", "darkkhaki"];

// llama a las clases e IDS de html
const btn = document.querySelector(".btn");
const color = document.querySelector("#color");

//genera un numero aleatorio para llamar a un color del array
const randonNumber = () => {
    return Math.floor(Math.random() * colors.length);
    
};


//se cambia el color de fondo y el texto
btn.addEventListener("click", () => {
    const num = randonNumber();
    document.body.style.backgroundColor = colors[num];
    color.textContent = colors[num];
});

