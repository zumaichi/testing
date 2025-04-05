

export const calcularNumeroAleatorio = () => Math.floor(Math.random() * 10) + 1;

export const obtenerValorCarta = (numeroAleatorio: number) =>
  numeroAleatorio > 7 ? 0.5 : numeroAleatorio;

export const obtenerValorUrlCarta = (numeroAleatorio: number) =>
  numeroAleatorio > 7 ? numeroAleatorio + 2 : numeroAleatorio;

export const cartaUrl = (numeroAleatorio?: number) => {
  switch (numeroAleatorio) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";

    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";

    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};
export const obtenerMensajeFinal = (puntuacion: number): string => {
  if (puntuacion >= 0.5 && puntuacion <= 4) {
    return "Has sido muy conservador.";
  } else if (puntuacion >= 5 && puntuacion < 6) {
    return "Te ha entrado el canguelo eh?";
  } else if (puntuacion >= 6 && puntuacion < 7.5) {
    return "Casi casi...";
  } else if (puntuacion === 7.5) {
    return "¡Lo has clavado! ¡Enhorabuena!";
  } else if (puntuacion > 7.5) {
    return "Game Over";
  } else {
    return "¡pulsa dame cata para empezar!";
  }
};


