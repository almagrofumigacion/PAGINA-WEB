# Almagro Fumigación

Landing estática en React y TypeScript, con imágenes WebP locales. No requiere backend ni variables de entorno.

## Desarrollo

npm ci
npm run dev

## Producción

npm run build

La salida pública está en dist/client. Vercel utiliza vercel.json: build npm run build y directorio dist/client, sin framework preseleccionado.

## Contenido pendiente

- Agregar el enlace real de Google Maps en lib/business.ts.
- Reemplazar los tres textos ilustrativos por reseñas reales autorizadas. Actualmente están identificados como ejemplos.
- La puntuación 5.0 y las más de 170 opiniones fueron suministradas en el pedido; confirmar su vigencia antes de publicar al público.

Se conserva el logo original, comprimido sin rediseñarlo. El hero usa la foto aportada y comprimida a 122 KB. Los enlaces de WhatsApp apuntan al número y al mensaje suministrados.

En Windows se validó la compilación con Node 22.23.2. Node 24 presenta un error de cierre en el compilador; usar Node 22 en ese entorno.
