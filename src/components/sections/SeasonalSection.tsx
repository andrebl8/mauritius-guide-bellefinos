
interface Season {
  name: string;
  months: string;
  description: string;
  regions: Region[];
  emoji: string;
}

interface Region {
  name: string;
  description: string;
}

const seasons: Season[] = [
  {
    name: "Sommer (Høysesong)",
    months: "November - April",
    description: "Varm og fuktig med temperaturer mellom 25-35°C. Dette er den tropiske sommeren på Mauritius, med høyere sannsynlighet for regn og sykloner, spesielt i januar-februar. Perfekt for deg som elsker varme og ikke har noe imot en tropisk regnskur innimellom.",
    emoji: "☀️",
    regions: [
      {
        name: "Nordkysten (Grand Baie, Mont Choisy)",
        description: "Beskyttet mot vinder, med varmere og mindre regn enn andre deler av øya. Ideelt for bading og vannsport."
      },
      {
        name: "Østkysten (Belle Mare, Trou d'Eau Douce)",
        description: "Varmere temperaturer, men kan være vindutsatt. Fantastiske strender, men vær forberedt på passatvinder."
      },
      {
        name: "Vestkysten (Flic en Flac, Tamarin)",
        description: "Varmere og tørrere enn østkysten. Gode forhold for snorkling og dykking med roligere hav."
      },
      {
        name: "Sørkysten (Le Morne, Blue Bay)",
        description: "Varmere, men kan være vindutsatt. Dramatiske landskap og gode surfemuligheter ved Le Morne."
      }
    ]
  },
  {
    name: "Vinter (Lavsesong)",
    months: "Mai - Oktober",
    description: "Tørre, milde dager med behagelige temperaturer mellom 18-25°C. Dette er den ideelle tiden for de som vil unngå høy fuktighet og varme. Perfekt for utendørsaktiviteter og utforskning av øya.",
    emoji: "🌤️",
    regions: [
      {
        name: "Nordkysten (Grand Baie, Mont Choisy)",
        description: "Behagelige temperaturer og lite regn. Perfekt for alle typer aktiviteter og strandliv."
      },
      {
        name: "Østkysten (Belle Mare, Trou d'Eau Douce)",
        description: "Kjøligere med sterkere vinder. Ta med en genser for kveldene, spesielt i juli-august."
      },
      {
        name: "Vestkysten (Flic en Flac, Tamarin)",
        description: "Varmere og mer beskyttet enn østkysten. Juni og juli er perfekte måneder med tørre, milde dager og fine forhold for både strand og aktivitet."
      },
      {
        name: "Sørkysten (Le Morne, Blue Bay)",
        description: "Kjøligere, men fortsatt behagelig. Gode forhold for vandring og utforskning av nasjonalparker."
      }
    ]
  },
  {
    name: "Skuldersesong",
    months: "Mai-Juni og September-Oktober",
    description: "Disse månedene representerer overgangen mellom høy- og lavsesong, og tilbyr ofte den beste kombinasjonen av vær og priser. Temperaturer er behagelige (22-28°C) og det er mindre turister.",
    emoji: "🌈",
    regions: [
      {
        name: "Nordkysten (Grand Baie, Mont Choisy)",
        description: "Ideelle forhold med behagelige temperaturer, lite regn og roligere atmosfære enn i høysesongen."
      },
      {
        name: "Østkysten (Belle Mare, Trou d'Eau Douce)",
        description: "Mai-juni har mildere vinder enn midtvinters, mens september-oktober begynner å bli varmere. Gode tider for vannsport."
      },
      {
        name: "Vestkysten (Flic en Flac, Tamarin)",
        description: "Perfekte forhold med behagelige temperaturer og klart vann for snorkling og dykking."
      },
      {
        name: "Sørkysten (Le Morne, Blue Bay)",
        description: "Behagelige temperaturer for utforskning av naturreservater og vandring. September-oktober er spesielt bra for hvalsafari."
      }
    ]
  }
];

export function SeasonalSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-primary">🗓️ Beste Reisetid</h2>
        <p className="text-muted-foreground text-lg">
          Mauritius har et tropisk klima med to hovedsesonger. Her er en guide til når du bør besøke 
          basert på vær, aktiviteter og regionale forskjeller.
        </p>
      </div>

      <div className="space-y-8">
        {seasons.map((season) => (
          <div 
            key={season.name} 
            className="mauritius-card hover:shadow-md p-6 rounded-lg border border-primary/20"
          >
            <h3 className="font-semibold text-xl flex items-center text-primary">
              {season.emoji} <span className="ml-2">{season.name}</span>
              <span className="ml-auto text-sm font-normal text-muted-foreground">{season.months}</span>
            </h3>
            <p className="text-muted-foreground mt-2 mb-4">{season.description}</p>
            
            <h4 className="font-medium text-lg mb-2">Regionale forskjeller:</h4>
            <div className="grid gap-4 sm:grid-cols-2">
              {season.regions.map((region) => (
                <div 
                  key={region.name} 
                  className="bg-background p-4 rounded-md border border-primary/10"
                >
                  <h5 className="font-medium text-primary">{region.name}</h5>
                  <p className="text-sm text-muted-foreground mt-1">{region.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30 relative overflow-hidden">
        <div className="absolute top-2 right-3 text-2xl">💡</div>
        <h3 className="font-semibold mb-2 text-lg text-primary">Reisetips</h3>
        <p className="text-muted-foreground">
          Vil du ha tørre, milde dager med behagelige temperaturer og fine forhold for både strand og aktivitet? 
          Da er juni og juli perfekte måneder å besøke Mauritius – spesielt på vestlige og nordlige deler av øya.
          For de beste prisene, vurder å reise i skuldersesongene (mai-juni eller september-oktober).
        </p>
      </div>
    </div>
  )
}
