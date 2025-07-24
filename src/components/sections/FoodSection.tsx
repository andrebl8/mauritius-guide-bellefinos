
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FoodItem {
  name: string
  description: string
  shortDescription?: string
  useHTML?: boolean
}

// Helper function to get food emojis
function getFoodEmoji(index: number): string {
  const emojis = ["🫓", "🥘", "🍲", "🍚", "🍜", "🥗", "🍱", "🥜"];
  return emojis[index % emojis.length];
}

const foodItems: FoodItem[] = [
  {
    name: "Gâteau Patate (Sweet Potato Cakes)",
    shortDescription: "Halvmåneformede kaker laget av most søtpotet – en søt og aromatisk dessertretning.",
    description: "Disse halvmåneformede kakene lages av most søtpotet tilsatt sukker, revet kokos og vanilje (noen ganger også kardemomme) før de friteres til gyllen perfeksjon. Resultatet er en søt og aromatisk dessertretning med en mild og tilfredsstillende smak.",
    useHTML: false
  },
  {
    name: "Gâteau Arouille (Taro Fritters)",
    shortDescription: "Sprø frityrstekte kaker laget av revet taro – en salt godbit med litt varme fra ingefær.",
    description: "Disse sprø kakene lages av revet taro (arouille) blandet med urter, ingefær og stivelse før fritering. Resultatet blir sprø utenpå og myk inni med litt varme fra ingefæren. De serveres ofte som en salt godbit eller snack sammen med chutney.",
    useHTML: false
  },
  {
    name: "Gâteau Bringelle (Auberginekaker)",
    shortDescription: "Tynne skiver aubergine dyppet i kikertmelrøre og fritert til gyllen sprøhet.",
    description: "Disse delikate kakene lages av tynne skiver aubergine som dyppes i en kikertmelrøre og friteres til de blir gylne og sprø. De serveres ofte med grønn koriander-chutney eller lokal chili-pasta (mazavarou) som gir et friskt, pikant tilskudd til smaken.",
    useHTML: false
  },
  {
    name: "Napolitaine / Gato Zinzli",
    shortDescription: "To søte kinesisk-mauritiske bakstvarianter – perfekte som dessert eller med te.",
    description: "Napolitaine er små sablé-kjeks med syltetøy og rosa glasur, populære i små bakerier og markeder. Gato Zinzli er søte sesamrullende kaker basert på rismel og røde bønner, med kinesiske røtter. Begge er populære søte godbiter som nytes som dessert eller med te.",
    useHTML: false
  },
  {
    name: "Dhal Puri",
    shortDescription: "Dhal puri fra Mauritius er en av øyas mest elskede gatematretter – og det med god grunn.",
    description: "En myk hvetepannekake fylt med moste gule splitterter, servert med kremet karri, frisk rougaille og syrlig chutney. Smaken er en nydelig balanse mellom mildt krydret varme, myke teksturer og en subtil sødme.",
    useHTML: false
  },
  {
    name: "Roti",
    shortDescription: "Mauritisk roti er en myk, delikat flatbrødvariant som har blitt en essensiell del av øyas gatemat-kultur.",
    description: "Denne indisk-inspirerte lefsevarianten har en perfekt balanse mellom seighet og mykhet. Den serveres med et utvalg av sauser og karriretter som kyllingkarri, vindaye (syrlig marinade) og achard (syltet grønnsaker).",
    useHTML: false
  },
  {
    name: "Gâteau Piment (Chili Cakes)",
    shortDescription: "Små, frityrstekte kuler laget av chana dal, chili, koriander, løk og kryddere – sprø utenpå og myke inni.",
    description: "Disse små, frityrstekte kulene lages av «chana dal» (split peas), chili, koriander, løk og kryddere. De friteres til de blir gylne og sprø utenpå, men forblir myke inni. Serveres varm, ofte med brød eller i baguette sammen med smør og chili-paté. Populært som frokost, ettermiddags-snack eller med en kopp te.",
    useHTML: false
  },
  {
    name: "Briani",
    shortDescription: "Den mauritiske versjonen av biryani er en festlig risrett med lag av smaksrike ingredienser – en kulinarisk arv fra øyas indiske innflytelse.",
    description: "Mauritisk briani tilberedes i lag med aromatisk basmatiris, marinert kjøtt, stekte poteter og friske urter. Den unike krydderblandingen inkluderer kardemomme, kanel, nellik og safran. Serveres med raita, achard og chutney.",
    useHTML: false
  },
  {
    name: "Mine frire",
    shortDescription: "Disse stekte nudlene er en mauritisk gatemat-favoritt med kinesiske røtter – perfekt å nyte på stranden med den karakteristiske hvitløksvannet.",
    description: "Tynne eggnudler stekes raskt med grønnsaker og kjøtt, smaksatt med soyasaus. Det spesielle er 'di leau lay' (hvitløksvann) – en blanding av presset hvitløk, chili og vann som serveres ved siden av og gir retten et friskt, pikant løft.",
    useHTML: false
  },
  {
    name: "Bol renversé",
    shortDescription: "Denne 'omvendte bollen' er en teatralsk kinesisk-mauritisk spesialitet som kombinerer ris, kjøtt og grønnsaker i en imponerende presentasjon.",
    description: "Også kjent som 'Magic Bowl', bygges denne retten opp i omvendt rekkefølge i en bolle – først saus og grønnsaker, deretter kjøtt, og til slutt ris. Når bollen snus på en tallerken, avdekkes et 'tårn' med ris på bunnen og ingrediensene på toppen, ofte pyntet med et stekt egg.",
    useHTML: false
  },
  {
    name: "Dim Sum",
    shortDescription: "Mauritisk dim sum reflekterer øyas kinesiske arv med en lokal vri på disse delikate, dampede småretter – en essensiell del av øyas helgebrunch-kultur.",
    description: "For mange mauritiske familier er dim sum-brunch på søndager en viktig tradisjon. Du finner klassiske retter som har gow (rekkedumplings), siu mai (dumplings med kjøtt) og char siu bao (boller med bbq-svinekjøtt), samt unike mauritiske varianter med lokale ingredienser og kreolske krydder.",
    useHTML: false
  },
  {
    name: "Kokte peanøtter",
    shortDescription: "Denne enkle, men uimotståelige gatemat-snacken er en mauritisk spesialitet – perfekt for å nyte mens du utforsker øyas markeder og strender.",
    description: "I motsetning til ristede peanøtter, blir mauritiske peanøtter kokt i saltvann med skallet på, ofte med tilsatt stjerneanis og kanel. Dette gir dem en myk, nesten kremet tekstur og en dyp, kompleks smak. De serveres varme i papirposer, ofte med et dryss av salt og chili.",
    useHTML: false
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

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "auto" }}>
        {foodItems.map((item, index) => (
          <div 
            key={item.name} 
            className="mauritius-card hover:shadow-md hover:-translate-y-1"
            style={{ alignSelf: "start" }}
          >
            {item.shortDescription ? (
              <Accordion type="single" collapsible className="border-none">
                <AccordionItem value={item.name} className="border-none">
                  <AccordionTrigger className="p-0 hover:no-underline">
                    <div>
                      <span className="font-semibold text-lg flex items-center">
                        {getFoodEmoji(index)} <span className="ml-2">{item.name}</span>
                      </span>
                      <p className="text-sm text-muted-foreground mt-2">{item.shortDescription}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.useHTML ? (
                      <div 
                        className="text-sm text-muted-foreground mt-2"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <>
                <h3 className="font-semibold text-lg flex items-center">
                  {getFoodEmoji(index)} <span className="ml-2">{item.name}</span>
                </h3>
                {item.useHTML ? (
                  <div 
                    className="text-sm text-muted-foreground mt-2"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                ) : (
                  <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                )}
              </>
            )}
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
        <h4 className="font-semibold mt-4 mb-2 text-secondary">Hvor finner du de beste gatekakene?</h4>
        <ul className="text-muted-foreground list-disc pl-5 space-y-2">
          <li><strong>Port Louis Central Market</strong> - Her finner du alle de nevnte gatekakene, spesielt gateau piment, patate, arouille og diverse samossas.</li>
          <li><strong>Chinatown, Port Louis</strong> - For Napolitaine, søte godbiter og Gato Zinzli, besøk små bakerier og asiatiske bakstboder.</li>
          <li><strong>Quatre Bornes Market (Rose Hill-området)</strong> - En livlig lokal markedsscene med fokus på fritters og desserter. Gâteau Patate og Arouille selges ofte her.</li>
          <li><strong>S&N Gateau Piment i Port Louis</strong> - Kjent for sine spesielt gode Gâteau Piment.</li>
        </ul>
      </div>
    </div>
  )
}
