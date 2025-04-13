import { partida } from "./model";

import {
  calcularNumeroAleatorio,
  obtenerValorCarta,
  obtenerValorUrlCarta,
  cartaUrl,
  obtenerMensajeFinal,
} from "./motor";

export const pedirCarta = () => {
  const numeroAleatorio = calcularNumeroAleatorio();

  const valorNuevaCarta = obtenerValorCarta(numeroAleatorio);
  aumentarPuntuacion(valorNuevaCarta);

  const valorUrlCarta = obtenerValorUrlCarta(numeroAleatorio);

  muestraCarta(valorUrlCarta);
  console.log("puntuacion: ", partida.puntuacion);

  if (partida.puntuacion >= 7.5) {
    mostrarEstado(partida.puntuacion);
    deshabilitarBotones();
  }
};

export const muestraCarta = (numeroAleatorio?: number) => {
  const imagen = document.getElementById("imagenCarta");
  const carta = cartaUrl(numeroAleatorio);
  if (
    imagen !== null &&
    imagen !== null &&
    imagen instanceof HTMLImageElement
  ) {
    imagen.src = carta;
  } else {
    console.error("No se ha encontrado la imagen");
  }
};
export function actualizarPuntuacion(valor: number) {
  partida.puntuacion += valor;
}
export const aumentarPuntuacion = (valor: number) => {
  actualizarPuntuacion(valor);

  const puntuacionElemento = document.getElementById("puntuacion");
  if (puntuacionElemento !== null) {
    puntuacionElemento.innerHTML = `${partida.puntuacion}`;
  } else {
    console.error("No se ha encontrado el elemento de puntuación");
  }
};

export const anularReinicio = () => {
  const botonReinicioContenedor = document.getElementById("botonReinicio");
  if (
    botonReinicioContenedor &&
    botonReinicioContenedor instanceof HTMLButtonElement
  )
    botonReinicioContenedor.disabled;
};
export const activarReinicio = () => {
  const botonReinicioContenedor = document.getElementById("botonReinicio");
  if (
    botonReinicioContenedor &&
    botonReinicioContenedor instanceof HTMLButtonElement
  )
    botonReinicioContenedor.disabled = false;
};
export const deshabilitarBotones = () => {
  const botonDarCartaContenedor = document.getElementById("botonDarCarta");
  const botonPlantarseContenedor = document.getElementById("botonPlantarse");
  const botonReinicioContenedor = document.getElementById("botonReinicio");
  if (
    botonDarCartaContenedor &&
    botonDarCartaContenedor instanceof HTMLButtonElement &&
    botonPlantarseContenedor &&
    botonPlantarseContenedor instanceof HTMLButtonElement &&
    botonReinicioContenedor &&
    botonReinicioContenedor instanceof HTMLButtonElement
  ) {
    botonDarCartaContenedor.disabled = true;
    botonPlantarseContenedor.disabled = true;
    botonReinicioContenedor.disabled = false;
  }
};

export const habilitarBotones = () => {
  const botonDarCartaContenedor = document.getElementById("botonDarCarta");
  const botonPlantarseContenedor = document.getElementById("botonPlantarse");
  const botonReinicioContenedor = document.getElementById("botonReinicio");
  if (
    botonDarCartaContenedor &&
    botonDarCartaContenedor instanceof HTMLButtonElement &&
    botonPlantarseContenedor &&
    botonPlantarseContenedor instanceof HTMLButtonElement &&
    botonReinicioContenedor &&
    botonReinicioContenedor instanceof HTMLButtonElement
  ) {
    botonDarCartaContenedor.disabled = false;
    botonPlantarseContenedor.disabled = false;
    botonReinicioContenedor.disabled = true;
  }
};
export const activarSguir = () => {
  const botonSguirContenedor = document.getElementById("botonSeguir");
  if (botonSguirContenedor && botonSguirContenedor instanceof HTMLButtonElement)
    botonSguirContenedor.disabled = false;
};
export const desactivarSguir = () => {
  const botonSguirContenedor = document.getElementById("botonSeguir");
  if (botonSguirContenedor && botonSguirContenedor instanceof HTMLButtonElement)
    botonSguirContenedor.disabled = true;
};

export const pintarMensaje = () => {
  const mensajeFinal = document.getElementById("mensaje");
  if (mensajeFinal !== null) {
    mensajeFinal.innerHTML = "¡pulsa dame cata para empezar!";
  } else {
    console.error("No se ha encontrado el elemento de mensaje");
  }
};

export const reinicio = () => {
  partida.puntuacion = 0;
  document.getElementById("puntuacion")!.innerHTML = `${partida.puntuacion}`;
  habilitarBotones();
  muestraCarta();
  desactivarSguir();
};

export const cargarEventos = () => {
  const botonSeguir = document.getElementById("botonSeguir");

  if (
    botonSeguir !== null &&
    botonSeguir !== undefined &&
    botonSeguir instanceof HTMLButtonElement
  ) {
    botonSeguir.disabled = true;

    botonSeguir.addEventListener("click", () => {
      pedirCarta();
    });
  } else {
    console.error("error al seguir");
  }

  const botonDarCarta = document.getElementById("botonDarCarta");

  if (
    botonDarCarta !== null &&
    botonDarCarta !== undefined &&
    botonDarCarta instanceof HTMLButtonElement
  ) {
    botonDarCarta.addEventListener("click", () => pedirCarta());
  } else {
    console.error("error al dar una carta");
  }
  const botonPlantarse = document.getElementById("botonPlantarse");

  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.addEventListener("click", () => {
      activarReinicio();
      activarSguir();
      deshabilitarBotones();
      mostrarEstado(partida.puntuacion);
    });
  } else {
    console.error("error al plantarte");
  }

  const botonReinicio = document.getElementById("botonReinicio");
  if (
    botonReinicio !== null &&
    botonReinicio !== undefined &&
    botonReinicio instanceof HTMLButtonElement
  ) {
    botonReinicio.disabled = true;
    botonReinicio.addEventListener("click", () => {
      reinicio();
      anularReinicio();
      mostrarEstado(partida.puntuacion);
    });
  } else {
    console.error("Error al inicializar el botón de reinicio");
  }
};
export const mostrarMensajeFinal = (mensaje: string) => {
  const mensajeFinal = document.getElementById("mensaje");
  if (mensajeFinal !== null) {
    mensajeFinal.innerHTML = mensaje;
  }
};

export const mostrarEstado = (puntuacion: number) => {
  const mensaje = obtenerMensajeFinal(puntuacion);
  mostrarMensajeFinal(mensaje);
};
