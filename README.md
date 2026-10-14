# ATRÉVETE 29-N

Test que compara tu intención de voto con las **votaciones reales del Congreso de los Diputados** en la legislatura. Quince preguntas, una por tema, y al final te dice con qué partido coincides de verdad: con lo que votaron, no con lo que dicen. En línea en https://atrevete29n.netlify.app/

Publicada por [unoparatodos](https://unoparatodos.netlify.app/): gratis, sin anuncios, sin registro y sin rastro.

## Cómo funciona

- Primero eliges a quién piensas votar; después respondes a 15 preguntas (Sí / No / Abstención, con opción de marcar "me importa mucho").
- Cada pregunta corresponde a una votación real del Pleno. El voto de cada grupo se codifica como una cadena de 13 caracteres en este orden: `psoe pp vox sumar erc junts bildu pnv podemos bng compromis cc upn`, con `S` (sí), `N` (no), `A` (abstención) y `?` (sin dato fiable o grupo dividido).
- Puntuación: mismo voto = 1, abstención = 0,5, voto contrario = 0; ×2 si marcaste "me importa mucho". Una `?` excluye esa pregunta para ese partido.
- La tabla de votos de los partidos no se muestra hasta terminar el test, para no condicionar las respuestas.
- Las respuestas no se guardan ni se envían: todo ocurre en tu dispositivo. Al compartir, la imagen dice **cuánto** coincides con el partido que pensabas votar, nunca **cuál**.

## Datos y verificación

- Cada pregunta enlaza el acta oficial de la votación en los datos abiertos del Congreso (`congreso.es/webpublica/opendata/votaciones/...`).
- Los recuentos por grupo se verificaron con el conjunto de datos del repositorio [MarcoAnarmo/CongresoAbierto](https://github.com/MarcoAnarmo/CongresoAbierto) (`data/raw/votaciones/pleno.jsonl`), asignando los diputados del Grupo Mixto a su formación.
- Se evitan votaciones unánimes o puramente técnicas y se equilibran iniciativas del Gobierno, del PP, de Vox y populares.

## Qué hay aquí

- `index.html`: toda la app en un solo archivo (sin dependencias externas).
- `sw.js`: service worker para que funcione sin conexión (sube la versión de caché `atrevete-vNN` en cada cambio).
- `manifest.webmanifest`, iconos y `og.png`.
- `fonts/`: Archivo y Public Sans autoalojadas, con sus licencias OFL.
- `_headers`, `netlify.toml`: cabeceras de seguridad y configuración de Netlify.

## Publicar

Sitio estático: arrastra la carpeta a Netlify (Deploys) o sírvela desde cualquier servidor. Tras cada cambio, sube la versión de caché en `sw.js`.

## Contribuir

Errores en una votación, una fuente mejor o una pregunta mal planteada: abre un *issue* con el enlace al acta oficial. Se agradecen especialmente revisiones desde sensibilidades políticas distintas: el objetivo es que el test sea neutral y comprobable.

## Licencia

Código bajo licencia MIT (ver `LICENSE`). Las tipografías conservan su licencia SIL Open Font License (ver `fonts/`). Los datos de votaciones son públicos y pertenecen a sus fuentes.

Contacto: unoparatodos.app@proton.me
