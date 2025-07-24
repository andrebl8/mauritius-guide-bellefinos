import React from 'react'

interface Attraction {
  name: string
  description: string
  emoji: string
}

const attractions: Attraction[] = [
  {
    name: "Chamarel",
    description: "Se det unike fargede jordsmonnet og fossefallene. De syv fargede jordsmonnet er et naturfenomen med sanddyner i syv forskjellige farger.",
    emoji: "🌈"
  },
  {
    name: "Black River Gorges nasjonalpark",
    description: "Gode fotturer og sjanse til å se sjeldne dyrearter. Denne beskyttede skogen tilbyr turstier og er hjemmet til utrydningstruede fuglearter.",
    emoji: "🌳"
  },
  {
    name: "Grand Bassin",
    description: "Hinduistisk hellig innsjø – imponerende statuer og rolig atmosfære. Også kjent som Ganga Talao, det er en hellig hinduistisk innsjø med templer og statuer.",
    emoji: "🛕"
  },
  {
    name: "Port Louis Marked",
    description: "Markedet i Port Louis: Krydder, lokal mat og håndverk. Opplev den livlige atmosfæren i hovedstadens sentrale marked.",
    emoji: "🛍️"
  },
  {
    name: "L'Aventure du Sucre",
    description: "Sukkermuseum: Lærerikt og interessant innblikk i øyas historie og sukkerproduksjon. Lær om øyas historie og sukkerproduksjon.",
    emoji: "🏛️"
  },
  {
    name: "Belle Mare",
    description: "De fineste strendene på hele øyen. Dette er hvor mange av postkortbildene er tatt. Ta med en genser i lavsesong på grunn av vind.",
    emoji: "🏖️"
  },
  {
    name: "Le Morne",
    description: "Ta turen opp til Le Morne for spektakulær utsikt. Dette UNESCO verdensarvstedet har historisk betydning og vakre utsikter.",
    emoji: "🏔️"
  }
]

export function NatureSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-accent">🏞️ Natur & Kultur</h2>
        <p className="text-muted-foreground text-lg">
          Mauritius er kjent for sine vakre naturlandskap og rike kulturarv. 
          Fra fargerike jordformasjoner til hellige innsjøer, er det mye å utforske.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {attractions.map((attraction) => (
          <div 
            key={attraction.name} 
            className="mauritius-card hover:shadow-md hover:-translate-y-1"
          >
            <h3 className="font-semibold text-lg flex items-center">
              {attraction.emoji} <span className="ml-2">{attraction.name}</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2">{attraction.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/30 relative overflow-hidden">
        <div className="absolute top-2 right-3 text-2xl">💡</div>
        <h3 className="font-semibold mb-2 text-lg text-accent">Kulturtips</h3>
        <p className="text-muted-foreground">
          Når du besøker templer som Grand Bassin, kle deg anstendig av respekt for lokale skikker. 
          Det kulturelle mangfoldet på Mauritius gjenspeiles i festivalene, matkulturen og religiøse steder.
        </p>
      </div>
    </div>
  )
}
