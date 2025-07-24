import React from 'react'

interface FoodItem {
  name: string
  description: string
}

// Helper function to get food emojis
function getFoodEmoji(index: number): string {
  const emojis = ["🍛", "🥘", "🍲", "🍚", "🍜", "🥗", "🍱", "🥜"];
  return emojis[index % emojis.length];
}

const foodItems: FoodItem[] = [
  {
    name: "Dhal Puri",
    description: "Tynn lefse med linsefyll, servert med tomatsaus og butterbeans i currysaus. Be om uten chili hvis du er følsom for sterk mat."
  },
  {
    name: "Roti",
    description: "Myk lefse fylt med curry, chutney og pickles – finnes overalt."
  },
  {
    name: "Gateaux Piment",
    description: "Friterte linsesnacks, perfekt som mellommåltid."
  },
  {
    name: "Briani",
    description: "Mauritiansk versjon av biryani – gjerne fra en lokal bod."
  },
  {
    name: "Mine frire",
    description: "Stekte nudler. Spis det på stranda med hvitløksvann."
  },
  {
    name: "Bol renversé",
    description: "Omvendt bolle med ris, kjøtt og saus. Kinesisk inspirert rett som er en lokal favoritt."
  },
  {
    name: "Dim Sum",
    description: "Kinesisk inspirerte småretter som er populære på Mauritius."
  },
  {
    name: "Kokte peanøtter",
    description: "Enkelt og smakfullt snacks som kjøpes på gata."
  }
]

export function FoodSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-secondary">🍽️ Mauritisk Matkultur</h2>
        <p className="text-muted-foreground text-lg">
          Mauritius tilbyr en mangfoldig kulinarisk opplevelse påvirket av indisk, kinesisk, kreolsk og europeisk kjøkken. 
          Her er noen retter du må prøve under besøket ditt.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((item, index) => (
          <div 
            key={item.name} 
            className="mauritius-card hover:shadow-md hover:-translate-y-1"
          >
            <h3 className="font-semibold text-lg flex items-center">
              {getFoodEmoji(index)} <span className="ml-2">{item.name}</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-secondary/10 rounded-lg border border-secondary/30 relative overflow-hidden">
        <div className="absolute top-2 right-3 text-2xl">💡</div>
        <h3 className="font-semibold mb-2 text-lg text-secondary">Lokalt Tips</h3>
        <p className="text-muted-foreground">
          For en autentisk opplevelse, prøv å kjøpe mat fra de lokale matbilene og spis på stranden. 
          Gatemat på Mauritius er ikke bare velsmakende, men gir deg også en smak av den lokale kulturen.
        </p>
      </div>
    </div>
  )
}
