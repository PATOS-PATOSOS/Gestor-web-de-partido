Un pequeño club deportivo te encarga una página web sencilla para gestionar un partido amistoso. La aplicación debe permitir:

 Llevar el marcador del partido.

 Gestionar una lista de jugadores.

Mostrar información clara y actualizada durante el partido. 

Debe ser una solución funcional, clara y bien estructurada, hecha con HTML5, CSS y JavaScript.

Notas del desarrollo de la página web:

Buenas, esta web tiene un programa de gestión de partidos de esgrima. Esto es porque el esgrima era un deporte que solía practicar y lo echo mucho en falta.

Notas del desarrollo de la página web:

Buenas, esta web tiene un programa de gestión de partidos de esgrima. Esto es porque el esgrima era un deporte que solía practicar y lo echo mucho en falta. Una cosa a aclarar es que originalmente el gestor lo iba a diseñar como un gestor de partidas de Beyblade X, y por eso el máximo de puntos que puede alcanzar un jugador son 3 puntos, los mismos que puede conseguir un bey.

Los torneos por grupos en esgrima, al menos los de la Federación Española de Esgrima de Florete, que es lo que yo hacía, el máximo son 5 puntos por cada persona, sumando un total de 15 en el equipo. Igualmente, y como siempre, he puesto un botón que lo que hace es copiar en el portapapeles un resumen del partido. Lo que viene siendo el marcador y el historial del partido. Esto lo hago porque, al menos a mí, se me haría cómodo hacer un ^C para pegarlo en la base de datos del torneo. Una vez explicado esto, explicaré lo siguiente:

document.getElementById("copiar").addEventListener("click", () => { const eqA = document.getElementById("equipoA").value || "Equipo A";<-- Aqui lo que hago es atribuir el valor de la variable de equipo const eqB = document.getElementById("equipoB").value || "Equipo B";

let texto = `${eqA}: ${scoreA}\n${eqB}: ${scoreB}\n\nHistorial:\n`;<-aqui hago lo de los puntos con los nombre que ya puesto antes
historial.querySelectorAll("li span").forEach(l => texto += `- ${l.textContent}\n`);<-- aqui pongo las diferentes notificaciones del historial.
navigator.clipboard.writeText(texto);<--- Lo copio al portapapeles
Como no sabia si lo habia copiado le dige a chat gpt que me sugiera como hacer un feedback: const fb = document.getElementById("feedback"); fb.textContent = "Copiado"; setTimeout(() => fb.textContent = "", 2000); });
