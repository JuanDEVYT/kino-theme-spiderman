// Tema "Araña" para Kino: la apariencia vive en kino-plugin.json (appThemes).
// Este archivo solo dibuja la pantalla de presentación, que activa el tema.

const THEME_ID = "spider";

export async function screen({ activeTheme }) {
  const on = activeTheme === THEME_ID;

  return {
    type: "Scaffold",
    appBar: {
      type: "AppBar",
      dense: true,
      title: "Araña",
      titleEn: "Spider",
      leading: {
        type: "IconButton",
        icon: "close",
        labelText: "Cerrar",
        labelTextEn: "Close",
        onPressed: { go: { close: true } },
      },
    },
    body: {
      type: "SingleChildScrollView",
      children: [
        {
          type: "Column",
          padding: 16,
          gap: 12,
          crossAxisAlignment: "stretch",
          children: [
            {
              type: "Text",
              text: "Araña",
              textEn: "Spider",
              style: "h1",
            },
            {
              type: "Text",
              text: "Rojo y azul sobre negro, telaraña en el menú, esquinas suaves y sombras hondas. El tema cambia Kino entero, en el celular y en el televisor.",
              textEn: "Red and blue over black, a web in the menu, soft corners and deep shadows. The theme restyles all of Kino, on the phone and on the TV.",
            },
            {
              type: "Text",
              text: "Qué toca",
              textEn: "What it changes",
              style: "h3",
            },
            {
              type: "Text",
              text: "Colores, fondo, esquinas, tamaños de letra, sombras, movimiento y los controles del reproductor. Los botones de Apariencia y las pantallas que te piden una decisión siguen con el aspecto de Kino.",
              textEn: "Colours, background, corners, type sizes, shadows, motion and the player controls. Appearance itself and every screen that asks you for a decision keep Kino's own look.",
            },
            {
              type: "ElevatedButton",
              key: "toggle",
              icon: on ? "check" : "magic",
              labelText: on ? "Desactivar el tema" : "Activar el tema",
              labelTextEn: on ? "Turn the theme off" : "Turn the theme on",
              onPressed: { go: { useTheme: { theme: on ? null : THEME_ID } } },
            },
            {
              type: "Text",
              text: "El rojo, el color del foco y las esquinas se ajustan en Ajustes ▸ Apariencia ▸ Personalizar. Tu elección es por perfil y se sincroniza entre tus aparatos.",
              textEn: "The red, the focus colour and the corners are yours to change in Settings ▸ Appearance ▸ Customise. Your choice is per profile and syncs between your devices.",
              style: "caption",
            },
          ],
        },
      ],
    },
  };
}

export async function screenEvent() {
  return null;
}
