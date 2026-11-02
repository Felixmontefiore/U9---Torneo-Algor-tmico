let victoriasUsuario = 0;
let victoriasMaquina = 0;
let ronda = 1;

// CORRECCIÓN 1: usamos && para que el torneo siga MIENTRAS ninguno de los dos llegó a 3
while (victoriasUsuario < 3 && victoriasMaquina < 3) {

  let jugada = prompt(`Ronda ${ronda}. Elige: Piedra, Papel o Tijera`);
  // CORRECCIÓN 2: normalizamos el texto para que "PIEDRA", "piedra" o "Piedra" funcionen igual
  jugada = jugada.toLowerCase();

  let azar = Math.random();
  let jugadaMaquina = "";

  if (azar < 0.33) {
    jugadaMaquina = "piedra";
  } else if (azar < 0.66) {
    jugadaMaquina = "papel";
  } else {
    jugadaMaquina = "tijera";
  }

  // CORRECCIÓN 3: Template Literal en vez de concatenación con +
  console.log(`La máquina eligió: ${jugadaMaquina}`);

  // Lógica de victoria de la ronda
  if (jugada === jugadaMaquina) {
    alert(`Empate. Ambos eligieron ${jugadaMaquina}.`);
  } else if (
    (jugada === "piedra" && jugadaMaquina === "tijera") ||
    (jugada === "papel" && jugadaMaquina === "piedra") ||
    (jugada === "tijera" && jugadaMaquina === "papel")
  ) {
    // CORRECCIÓN 4: variables acumuladoras
    victoriasUsuario++;
    alert(`Ganaste esta ronda. Marcador: Vos ${victoriasUsuario} - Máquina ${victoriasMaquina}`);
  } else {
    victoriasMaquina++;
    alert(`Perdiste esta ronda. Marcador: Vos ${victoriasUsuario} - Máquina ${victoriasMaquina}`);
  }

  ronda++;
}

// CORRECCIÓN 5: operador ternario para anunciar al campeón final
let resultadoFinal = victoriasUsuario > victoriasMaquina
  ? `🏆 ¡Ganaste el torneo ${victoriasUsuario} a ${victoriasMaquina}!`
  : `🤖 La máquina ganó el torneo ${victoriasMaquina} a ${victoriasUsuario}.`;

alert(resultadoFinal);
