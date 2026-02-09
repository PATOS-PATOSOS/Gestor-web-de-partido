let scoreA = 0;
let scoreB = 0;

const scoreADom = document.getElementById("scoreA");
const scoreBDom = document.getElementById("scoreB");
const historial = document.getElementById("historial");

const textos = {
    1: "ha jugado bien para su equipo y consiguió",
    2: "ha jugado muy bien para su equipo y consiguió",
    3: "ha jugado increíblemente bien para su equipo y consiguió"
};

document.querySelectorAll(".puntos").forEach(sel => {
    sel.addEventListener("change", () => {
        if (sel.value === "0") return;

        const jugador = sel.closest(".jugador").querySelector("input").value || "Jugador";
        const equipo = sel.dataset.equipo;
        const puntos = parseInt(sel.value);

        equipo === "A" ? scoreA += puntos : scoreB += puntos;
        actualizar();

        crearEvento("verde", equipo,
            `${jugador} ${textos[puntos]} ${puntos} punto(s)`,
            puntos, sel
        );
    });
});

document.querySelectorAll(".penal").forEach(sel => {
    sel.addEventListener("change", () => {
        if (sel.value === "0") return;

        const jugador = sel.closest(".jugador").querySelector("input").value || "Jugador";
        const equipo = sel.dataset.equipo;
        const p = parseInt(sel.value);

        equipo === "A" ? scoreB += p : scoreA += p;
        actualizar();

        crearEvento("rojo", equipo,
            `${jugador} cometió ${p} falta(s)`,
            p, sel
        );
    });
});

function crearEvento(color, equipo, texto, valor, select) {
    const li = document.createElement("li");
    li.className = color;
    li.innerHTML = `<span>${texto}</span>`;

    const btn = document.createElement("button");
    btn.textContent = "Eliminar";

    btn.onclick = () => {
        if (color === "verde") {
            equipo === "A" ? scoreA -= valor : scoreB -= valor;
        } else {
            equipo === "A" ? scoreB -= valor : scoreA -= valor;
        }
        actualizar();
        select.value = 0;
        li.remove();
    };

    li.appendChild(btn);
    historial.prepend(li);
}

function actualizar() {
    scoreADom.textContent = scoreA;
    scoreBDom.textContent = scoreB;
}

document.getElementById("fin").addEventListener("click", () => {
    scoreA = 0;
    scoreB = 0;
    actualizar();
    historial.innerHTML = "";
    document.querySelectorAll("select").forEach(s => s.value = 0);

    const fb = document.getElementById("feedback");
    fb.textContent = "Partido acabado";
    setTimeout(() => fb.textContent = "", 2000);
});

document.getElementById("copiar").addEventListener("click", () => {
    const eqA = document.getElementById("equipoA").value || "Equipo A";
    const eqB = document.getElementById("equipoB").value || "Equipo B";

    let texto = `${eqA}: ${scoreA}\n${eqB}: ${scoreB}\n\nHistorial:\n`;
    historial.querySelectorAll("li span").forEach(l => texto += `- ${l.textContent}\n`);

    navigator.clipboard.writeText(texto);

    const fb = document.getElementById("feedback");
    fb.textContent = "Copiado";
    setTimeout(() => fb.textContent = "", 2000);
});
