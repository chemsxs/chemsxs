const fraseElemento = document.getElementById('frase');
const nuevaFraseBtn = document.getElementById('nueva-frase');
const copiarBtn = document.getElementById('copiar');
const estadoSelector = document.getElementById('estado');

// Frases aleatorias generales
const frases = [
    "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello.",
    "Cree en ti mismo y todo será posible.",
    "Cada día es una nueva oportunidad para cambiar tu vida.",
    "No cuentes los días, haz que los días cuenten.",
    "No sueñes tu vida, vive tu sueño."
];

// Frases por estado de ánimo
const frasesEstado = {
    feliz: [
        "La felicidad no depende de lo que tengas, sino de cómo disfrutas lo que tienes.",
        "Sonríe y el mundo sonreirá contigo."
    ],
    motivado: [
        "No cuentes los días, haz que los días cuenten.",
        "Haz hoy lo que otros no hacen para lograr mañana lo que otros no pueden."
    ],
    triste: [
        "Después de la tormenta siempre llega la calma, confía en el mañana.",
        "Incluso los días más oscuros terminan y el sol vuelve a brillar."
    ],
    estresado: [
        "Respira, confía y continúa, todo pasa y mejorarás.",
        "La calma comienza con una respiración profunda."
    ]
};

// Función para mostrar frase aleatoria general
function mostrarFraseAleatoria() {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    fraseElemento.textContent = frase;
}

// Función para mostrar frase por estado
function mostrarFrasePorEstado(estado) {
    if(frasesEstado[estado]) {
        const lista = frasesEstado[estado];
        const frase = lista[Math.floor(Math.random() * lista.length)];
        fraseElemento.textContent = frase;
    }
}

// Eventos
nuevaFraseBtn.addEventListener('click', () => {
    const estado = estadoSelector.value;
    if(estado) {
        mostrarFrasePorEstado(estado);
    } else {
        mostrarFraseAleatoria();
    }
});

estadoSelector.addEventListener('change', () => {
    const estado = estadoSelector.value;
    if(estado) {
        mostrarFrasePorEstado(estado);
    } else {
        fraseElemento.textContent = "Haz clic en 'Nueva frase' o selecciona tu estado de ánimo.";
    }
});

copiarBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(fraseElemento.textContent);
    alert("Frase copiada al portapapeles!");
});