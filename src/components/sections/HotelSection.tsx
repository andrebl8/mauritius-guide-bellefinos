
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HotelFeature {
  title: string
  description: string
  emoji: string
}

interface ProCon {
  pro: string;
  con: string;
}

interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  stars: number;
  features: HotelFeature[];
  prosAndCons: ProCon[];
  recommendation: string;
}

const hotels: Hotel[] = [
  {
    id: "zilwa-attitude",
    name: "Zilwa Attitude Hotel",
    location: "Calodyne, Nord-Mauritius",
    description: "Zilwa Attitude er et 4-stjerners hotell som tilbyr en autentisk mauritisk opplevelse med fokus på lokal kultur, mat og tradisjoner. Navnet 'Zilwa' betyr 'islender' på kreolsk.",
    stars: 4,
    features: [
      {
        title: "Beliggenhet & omgivelser",
        description: "Beliggende på nordkysten av Mauritius med utsikt mot fem øyer, inkludert Coin de Mire. Hotellet er designet som en tradisjonell mauritisk landsby med rustikk arkitektur, naturlige materialer og kreolske detaljer som skaper en autentisk atmosfære.",
        emoji: "🏝️"
      },
      {
        title: "Rom og fasiliteter",
        description: "214 rom fordelt på forskjellige kategorier, alle med en blanding av moderne komfort og rustikk mauritisk design. Mange rom har havutsikt, og noen har direkte tilgang til stranden. Innredningen inkluderer lokalt håndverk, naturlige materialer og kreolske elementer.",
        emoji: "🛏️"
      },
      {
        title: "Mat og drikke",
        description: "Syv restauranter som tilbyr alt fra mauritisk gatemat til internasjonale retter. 'Dine Around' konseptet lar gjester prøve forskjellige restauranter. 'Kot Nou' restauranten er spesielt populær for sin autentiske kreolske mat, og 'Taba-J' serverer lokale gatemat-favoritter.",
        emoji: "🍽️"
      },
      {
        title: "Service & aktiviteter",
        description: "Fokus på kulturelle opplevelser med aktiviteter som kreolske språkkurs, sega-dansetimer og tradisjonell fisking. Fire svømmebassenger, to strender, vannsport, og utflukter til nærliggende øyer. Spa-senteret 'Spa Attitude' tilbyr behandlinger inspirert av lokale tradisjoner.",
        emoji: "🏄‍♂️"
      },
      {
        title: "Stemning & helhetsinntrykk",
        description: "Avslappet og autentisk atmosfære med fokus på å gi gjestene en ekte 'islender'-opplevelse. Hotellet har en sterk miljøprofil med bærekraftige praksiser og støtte til lokale samfunn. Perfekt for de som ønsker å oppleve den ekte mauritiske kulturen i komfortable omgivelser.",
        emoji: "🌺"
      }
    ],
    prosAndCons: [
      {
        pro: "Autentisk mauritisk opplevelse med fokus på lokal kultur",
        con: "Ikke like luksuriøst som noen av de andre 5-stjerners resortene"
      },
      {
        pro: "Fantastisk 'Dine Around' konsept med syv ulike restauranter",
        con: "Noen av strendene kan ha steinete områder ved lavvann"
      },
      {
        pro: "Familievennlig med aktiviteter for alle aldre",
        con: "Litt avsidesliggende, krever transport for å utforske andre deler av øya"
      },
      {
        pro: "Bærekraftig fokus med miljøvennlige praksiser",
        con: ""
      }
    ],
    recommendation: "Zilwa Attitude er perfekt for reisende som ønsker å oppleve den autentiske mauritiske kulturen og livsstilen, samtidig som de nyter komforten av et 4-stjerners resort. Hotellet passer spesielt godt for familier, par og grupper som verdsetter kulturelle opplevelser, god mat og en avslappet atmosfære. Hvis du ønsker å føle deg som en ekte 'zilwa' (islender) og ikke bare en turist, vil dette hotellet gi deg en minneverdig og autentisk mauritisk opplevelse."
  },
  {
    id: "veranda-grand-baie",
    name: "Veranda Grand Baie Hotel & Spa",
    location: "Grand Baie",
    description: "En oppsummering av hvordan det er å bo på Veranda Grand Baie Hotel & Spa i Grand Baie, Mauritius. Et 4-stjerners hotell med god beliggenhet og mange fasiliteter.",
    stars: 4,
    features: [
      {
        title: "Beliggenhet & omgivelser",
        description: "Ligger rett ved stranden i en rolig bukt, med kort gangavstand (5–10 minutter) til sentrum med butikker, restauranter og uteliv. Et eksotisk og frodig tropisk hageområde, designet i en \"Creole‑Chic\" stil med attekledninger og naturlige materialer.",
        emoji: "🌴"
      },
      {
        title: "Rom og fasiliteter",
        description: "95 rom/byhus med terrasse eller balkong, innredet med lyse farger, rattan og tre, og mulighet for å oppgradere til leiligheter med kjøkken/sofabed – fint for familier. Moderne, rene rom som rengjøres daglig, med dekor som ofte får skryt (f.eks. \"towel art\").",
        emoji: "🛏️"
      },
      {
        title: "Mat og drikke",
        description: "2 à la carte-restauranter, buffetrestaurant, strandbar og bassengbar. Frokostbuffet får god omtale: \"buffet breakfast for the champs\", variert og velsmakende. All-inclusive‑alternativ er tilgjengelig og virker populært blant gjestene.",
        emoji: "🍽️"
      },
      {
        title: "Service & aktiviteter",
        description: "Ansatte beskrives som vennlige, hyggelige og oppmerksomme, med høy servicenivå – omdømme: 8.4/10 på staff & service. Tilbyr en rekke aktiviteter: kajakk, stand-up paddle, glassbåt, tennis, sykling, volleyball, bibliotek, spa og barneklubb. Spa med spesialbehandlinger og privatstrand bidrar til avslapning.",
        emoji: "👨‍💼"
      },
      {
        title: "Stemning & helhetsinntrykk",
        description: "Oppleves som en idyllisk oase – koselig, intimt og vakkert, med blanding av rolig avslapning og nærhet til livlig lokalsamfunn. Gjesteanklager rapporterer en \"stunning\" eiendom, godt vedlikeholdt, perfekt for par og familier. Hotellstandard er 4 stjerner og gir virkelig verdi for pengene ifølge anmeldelser.",
        emoji: "✨"
      }
    ],
    prosAndCons: [
      {
        pro: "Fantastisk beliggenhet og utsikt",
        con: "Innsjekk kan være langsom, en vet at «island time» gjelder"
      },
      {
        pro: "Vennlig og imøtekommende personale",
        con: "Noen oppgraderingsbehov på rom, spesielt standardrom"
      },
      {
        pro: "God mat og drikke, all-inclusive mulig",
        con: "Spa har aldersbegrensning (<4 år ikke tillatt)"
      },
      {
        pro: "Mange aktiviteter for både barn og voksne",
        con: ""
      }
    ],
    recommendation: "Veranda Grand Baie passer svært godt for deg som ønsker en tropisk badeopplevelse i en avslappet, men levende ramme – ideelt for par, vennegjenger og familier som vil kombinere strandliv og lokale opplevelser. Servicen og de støttende fellesområdene gjør det til et svært behagelig opphold, selv om innsjekking og romstandarden kan variere litt."
  },
  {
    id: "lux-belle-mare",
    name: "LUX* Belle Mare",
    location: "Belle Mare",
    description: "LUX* Belle Mare er et luksuriøst 5-stjerners resort på østkysten av Mauritius, kjent for sin vakre strand og elegante design.",
    stars: 5,
    features: [
      {
        title: "Beliggenhet & omgivelser",
        description: "Beliggende ved den vakre Belle Mare-stranden på østkysten av Mauritius, omgitt av hvit sand og krystallklart vann. Resortets hager er frodige og velstelte, med en avslappende atmosfære som skaper en følelse av luksus og ro.",
        emoji: "🏝️"
      },
      {
        title: "Rom og fasiliteter",
        description: "174 suiter og villaer, alle med havutsikt og private terrasser eller balkonger. Rommene er designet av Kelly Hoppen i en lys og luftig stil med luksuriøse detaljer. Villaene har private bassenger og butler-service.",
        emoji: "🛏️"
      },
      {
        title: "Mat og drikke",
        description: "Flere restauranter med ulike internasjonale kjøkken, inkludert Beach Rouge (middelhavsinspirert), Duck Laundry (kinesisk), Amari by Vineet (indisk) og MIXE (internasjonalt). Resortets ICI isbar og kaffeverksted er populære blant gjestene.",
        emoji: "🍽️"
      },
      {
        title: "Service & aktiviteter",
        description: "Utmerket service med personlig preg. Tilbyr et bredt spekter av aktiviteter som vannsport, dykking, tennis, yoga og sykling. LUX* Me Spa er kjent for sine luksuriøse behandlinger og fasiliteter, inkludert sauna, dampbad og oppvarmet basseng.",
        emoji: "🏄‍♂️"
      },
      {
        title: "Stemning & helhetsinntrykk",
        description: "Elegant og sofistikert, men samtidig avslappet og uformelt. Resortets unike konsepter som 'Phone Home' (gratis telefonsamtaler fra en rød telefonkiosk), 'Message in a Bottle' (skattejakt) og 'Tree of Wishes' skaper en leken atmosfære.",
        emoji: "✨"
      }
    ],
    prosAndCons: [
      {
        pro: "Nydelig strand med hvit sand og krystallklart vann",
        con: "Høyere prisnivå enn mange andre hoteller på øya"
      },
      {
        pro: "Eksepsjonell mat og drikke med flere gourmetrestauranter",
        con: "Noen aktiviteter og restauranter krever forhåndsbestilling"
      },
      {
        pro: "Luksuriøse rom og suiter designet av Kelly Hoppen",
        con: "Litt isolert beliggenhet, krever transport for å utforske øya"
      },
      {
        pro: "Unike konsepter og opplevelser som skiller seg ut",
        con: ""
      }
    ],
    recommendation: "LUX* Belle Mare er perfekt for deg som søker en luksuriøs, avslappende ferie med høy standard på mat, service og fasiliteter. Hotellet passer spesielt godt for par som ønsker en romantisk getaway, men er også familievennlig med aktiviteter for barn. Hvis du verdsetter design, kvalitet og unike opplevelser, og har budsjett til det, vil dette resortets kombinasjon av luksus og avslappet atmosfære gi deg en uforglemmelig Mauritius-opplevelse."
  },
  {
    id: "constance-prince-maurice",
    name: "Constance Prince Maurice",
    location: "Poste de Flacq",
    description: "Constance Prince Maurice er et eksklusivt 5-stjerners luksushotell på østkysten av Mauritius, kjent for sin diskrete eleganse og eksepsjonelle service.",
    stars: 5,
    features: [
      {
        title: "Beliggenhet & omgivelser",
        description: "Beliggende i en beskyttet lagune på østkysten, omgitt av 60 hektar med frodig, grønn vegetasjon og palmer. Hotellet har en unik arkitektur med overvannsvillaer bygget på påler over en naturlig fiskedam, noe som skaper en magisk atmosfære.",
        emoji: "🌊"
      },
      {
        title: "Rom og fasiliteter",
        description: "89 suiter og villaer, inkludert overvannsvillaer med direkte tilgang til lagunen. Alle rom er luksuriøst innredet med elegante møbler, marmorbad og moderne bekvemmeligheter. Villaene har private bassenger og butler-service.",
        emoji: "🛏️"
      },
      {
        title: "Mat og drikke",
        description: "Tre gourmetrestauranter, inkludert den flytende restauranten 'Le Barachois' som er bygget på påler over lagunen. 'L'Archipel' serverer internasjonal og mauritisk mat, mens 'Asian' tilbyr japansk og asiatisk fusjonkjøkken. Vinbaren har en av de største vinkjellerne i Det indiske hav.",
        emoji: "🍷"
      },
      {
        title: "Service & aktiviteter",
        description: "Personlig og diskret service av høyeste standard. Tilbyr en rekke aktiviteter som golf (to 18-hulls baner), vannsport, dykking, og fiske. U Spa by Constance tilbyr luksuriøse behandlinger i en fredelig setting med utsikt over tropiske hager.",
        emoji: "⛳"
      },
      {
        title: "Stemning & helhetsinntrykk",
        description: "Sofistikert, rolig og eksklusivt. Hotellet har en intim atmosfære og er kjent for sin diskrete luksus og oppmerksomhet på detaljer. Perfekt for de som søker privatliv, ro og en følelse av å være i en verden for seg selv.",
        emoji: "👑"
      }
    ],
    prosAndCons: [
      {
        pro: "Eksepsjonell service og oppmerksomhet på detaljer",
        con: "Et av de dyreste hotellene på Mauritius"
      },
      {
        pro: "Unike overvannsvillaer og flytende restaurant",
        con: "Veldig formell atmosfære som kan føles stiv for noen gjester"
      },
      {
        pro: "Utmerket mat og en imponerende vinkjeller",
        con: "Begrenset natteliv og underholdning sammenlignet med større resorts"
      },
      {
        pro: "Fredelig og privat atmosfære, perfekt for par",
        con: "Mindre egnet for familier med små barn"
      }
    ],
    recommendation: "Constance Prince Maurice er ideelt for de som søker det ypperste innen luksus og diskret eleganse. Dette hotellet passer best for par som ønsker en romantisk, fredelig ferie med førsteklasses service og gastronomiske opplevelser. Hvis du verdsetter privatliv, eksklusive omgivelser og er villig til å betale for det beste, vil dette ikoniske hotellet gi deg en uforglemmelig opplevelse av Mauritius på sitt mest luksuriøse."
  }
]

export function HotelSection() {
  const [selectedHotelId, setSelectedHotelId] = useState<string>(hotels[0].id);

  // Function to render star rating
  const renderStars = (count: number) => {
    return Array(count).fill("⭐").join("");
  };

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-primary">🏨 Hoteller på Mauritius</h2>
        <p className="text-muted-foreground text-lg">
          Utforsk våre anbefalte hoteller på Mauritius, fra luksuriøse resorts til sjarmerende boutique-hoteller.
        </p>
      </div>

      <Tabs 
        value={selectedHotelId} 
        onValueChange={setSelectedHotelId}
        className="w-full"
      >
        <TabsList className="w-full mb-6">
          {hotels.map(hotel => (
            <TabsTrigger 
              key={hotel.id} 
              value={hotel.id}
              className="flex-1"
            >
              {hotel.name} ({renderStars(hotel.stars).slice(0, 1)})
            </TabsTrigger>
          ))}
        </TabsList>

        {hotels.map(hotel => (
          <TabsContent key={hotel.id} value={hotel.id} className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-tight text-primary">{hotel.name}</h3>
                <span className="text-amber-500">{renderStars(hotel.stars)}</span>
              </div>
              <p className="text-muted-foreground">
                <span className="font-medium">Beliggenhet:</span> {hotel.location}
              </p>
              <p className="text-muted-foreground">
                {hotel.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {hotel.features.map((feature) => (
                <div 
                  key={feature.title} 
                  className="mauritius-card hover:shadow-md hover:-translate-y-1"
                >
                  <h3 className="font-semibold text-lg flex items-center">
                    {feature.emoji} <span className="ml-2">{feature.title}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30 relative overflow-hidden">
              <div className="absolute top-2 right-3 text-2xl">⚖️</div>
              <h3 className="font-semibold mb-4 text-lg text-primary">Fordeler og ulemper</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {hotel.prosAndCons.map((item, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✅</span>
                      <p className="text-sm">{item.pro}</p>
                    </div>
                    {item.con && (
                      <div className="flex items-start">
                        <span className="text-red-500 mr-2">❌</span>
                        <p className="text-sm">{item.con}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30 relative overflow-hidden">
              <div className="absolute top-2 right-3 text-2xl">💡</div>
              <h3 className="font-semibold mb-2 text-lg text-primary">Anbefaling</h3>
              <p className="text-muted-foreground">
                {hotel.recommendation}
              </p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
