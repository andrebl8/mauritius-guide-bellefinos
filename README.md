# Mauritius Reiseguide

En omfattende reiseguide for Mauritius, med mat, natur, kultur og aktiviteter.

## Om prosjektet

Dette prosjektet er en reiseguide for Mauritius bygget med React, Vite, og shadcn/ui komponenter. Guiden inneholder informasjon om:

- Mat og lokale retter
- Natur og kulturattraksjoner
- Aktiviteter og opplevelser

## Teknologier

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui komponenter

## Utvikling

For å kjøre prosjektet lokalt:

```bash
# Installer avhengigheter
npm install

# Start utviklingsserver
npm run dev
```

## Bygging

For å bygge prosjektet for produksjon:

```bash
npm run build
```

Dette vil generere optimaliserte filer i `dist`-mappen.

## Deployment til GitHub Pages

### Automatisk deployment med GitHub Actions

Dette prosjektet er konfigurert med GitHub Actions for automatisk deployment til GitHub Pages. Hver gang du pusher til `main`-branchen, vil GitHub Actions:

1. Bygge prosjektet
2. Deploye det til GitHub Pages

Workflow-filen er lokalisert i `.github/workflows/deploy.yml`.

### Manuell deployment

Du kan også deploye manuelt ved å kjøre:

```bash
npm run deploy
```

Dette vil bygge prosjektet og publisere det til `gh-pages`-branchen i ditt repository.

## Konfigurering for GitHub Pages

Prosjektet er allerede konfigurert for GitHub Pages med følgende innstillinger:

1. `vite.config.ts` er konfigurert til å bruke riktig base path for GitHub Pages
2. `package.json` inneholder deploy-scripts for manuell deployment
3. En 404.html-side er lagt til for å håndtere feilsider på GitHub Pages
4. Client-side routing er konfigurert for å fungere med GitHub Pages

### Client-side routing på GitHub Pages

Siden dette er en single-page application (SPA), er det lagt til spesielle skript i både `index.html` og `404.html` for å håndtere client-side routing på GitHub Pages. Dette gjør at direkte navigering til ruter i applikasjonen fungerer korrekt, selv om GitHub Pages ikke støtter server-side routing.

## Lisens

Dette prosjektet er lisensiert under MIT-lisensen.
