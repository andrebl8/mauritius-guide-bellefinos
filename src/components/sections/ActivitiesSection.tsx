
interface Activity {
  name: string
  description: string
  emoji: string
}

const activities: Activity[] = [
  {
    name: "Katamarantur",
    description: "Katamaran med matservering innafor revet. Nyt en katamarantur med matservering inne i revet. Besøk: <a href='https://www.ileauxcerfsleisureisland.com/' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>ileauxcerfsleisureisland.com</a>",
    emoji: "⛵"
  },
  {
    name: "Bilutleie",
    description: "Leie bil og kjøre rundt på øya. Å leie bil er en flott måte å utforske øya i ditt eget tempo.",
    emoji: "🚗"
  },
  {
    name: "Romsmaking",
    description: "Romsmaking - kjøp flaskene med rom på supermarked (ikke den billigste). Mauritius er kjent for sin kvalitetsrom-produksjon.",
    emoji: "🥃"
  },
  {
    name: "Sega Show",
    description: "Opplev en tradisjonell Sega-danseforestilling, den livlige musikk- og danseformen som er innfødt på Mauritius.",
    emoji: "💃"
  },
  {
    name: "Dyptvannsfiske",
    description: "Dyptvannsfiske. Mauritius er et flott reisemål for entusiaster av dyptvannsfiske.",
    emoji: "🎣"
  },
  {
    name: "Dykking & Snorkling",
    description: "Dykking, gå under vann med hodeklokke, eller snorkling. Utforsk den livlige undervannsverdenen rundt øya.",
    emoji: "🤿"
  },
  {
    name: "Table du Château",
    description: "Et anbefalt sted for lunsj: <a href='https://www.tableduchateau.com/' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>tableduchateau.com</a>. Et anbefalt lunsjsted med utmerket mat.",
    emoji: "🍽️"
  },
  {
    name: "Resort Dagspass",
    description: "Tilbring en dag på et av søsterhotellene i hovedstaden eller i nærheten. En flott måte å oppleve luksusfasiliteter.",
    emoji: "🏨"
  }
]

export function ActivitiesSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-border">🏄‍♂️ Aktiviteter & Opplevelser</h2>
        <p className="text-muted-foreground text-lg">
          Fra vannaktiviteter til kulturelle opplevelser, Mauritius tilbyr et bredt spekter av ting å gjøre.
          Her er noen anbefalte aktiviteter for å gjøre reisen din minneverdig.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {activities.map((activity) => (
          <div 
            key={activity.name} 
            className="mauritius-card hover:shadow-md hover:-translate-y-1"
          >
            <h3 className="font-semibold text-lg flex items-center">
              {activity.emoji} <span className="ml-2">{activity.name}</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2">{activity.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-border/10 rounded-lg border border-border/30 relative overflow-hidden">
        <div className="absolute top-2 right-3 text-2xl">💡</div>
        <h3 className="font-semibold mb-2 text-lg text-border">Reisetips</h3>
        <p className="text-muted-foreground">
          Ikke bare bli på resortet ditt - utforsk øya! For hjelp med å bestille aktiviteter, 
          kan du kontakte lokale turoperatører som Horizon Holidays: <a href="https://m.facebook.com/horizonholidays/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://m.facebook.com/horizonholidays/</a>
        </p>
      </div>
    </div>
  )
}
