# Curso para Padres y Educadores (Vite + React + Tailwind)

Listo para **desplegar en Vercel**.

## Desarrollo local
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
```

## Despliegue en Vercel
1. Crea un repositorio en GitHub y sube estos archivos.
2. Ve a https://vercel.com/new y conecta tu repo.
3. Ajustes:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy.

### Formularios
- Cambia `FORM_ACTION` en `src/App.jsx` por tu endpoint (Formspree/Netlify/Zoho).
- Si no lo cambias, el formulario solo mostrará el mensaje de enviado sin mandar datos.
