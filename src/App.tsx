import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FoodSection } from "@/components/sections/FoodSection"
import { NatureSection } from "@/components/sections/NatureSection"
import { ActivitiesSection } from "@/components/sections/ActivitiesSection"
import { HotelSection } from "@/components/sections/HotelSection"
import { SeasonalSection } from "@/components/sections/SeasonalSection"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Tropical-themed header with palm tree decorations */}
      <header className="tropical-header">
        <div className="container mx-auto px-4 py-2 relative">
          <div className="palm-decoration absolute top-2 left-6 hidden sm:block"></div>
          <div className="palm-decoration absolute top-1 right-10 hidden sm:block"></div>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground text-center">
            Mauritius Reiseguide
          </h1>
          <p className="text-primary-foreground/90 mt-1 sm:mt-2 text-center text-base sm:text-lg">
            Oppdag paradisøya i Det indiske hav 🏝️
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 pt-6 sm:pt-10 mt-4 sm:mt-0">
        {/* Mauritius-themed tabs */}
        <Tabs defaultValue="food" className="w-full mauritius-tabs">
          <TabsList className="flex flex-wrap sm:grid sm:grid-cols-3 md:grid-cols-5 w-full mb-8 bg-muted/80 sm:bg-muted/50 p-2 sm:p-1.5 rounded-lg gap-1 sm:gap-0">
            <TabsTrigger value="food" className="mauritius-tab-trigger flex-1 min-w-[40%] sm:min-w-0">
              🍽️ Mat
            </TabsTrigger>
            <TabsTrigger value="nature" className="mauritius-tab-trigger flex-1 min-w-[40%] sm:min-w-0">
              🏞️ Natur & Kultur
            </TabsTrigger>
            <TabsTrigger value="activities" className="mauritius-tab-trigger flex-1 min-w-[40%] sm:min-w-0">
              🏄‍♂️ Aktiviteter
            </TabsTrigger>
            <TabsTrigger value="hotel" className="mauritius-tab-trigger flex-1 min-w-[40%] sm:min-w-0">
              🏨 Hotell
            </TabsTrigger>
            <TabsTrigger value="seasonal" className="mauritius-tab-trigger flex-1 min-w-[40%] sm:min-w-0">
              🗓️ Reisetid
            </TabsTrigger>
          </TabsList>

          <TabsContent value="food" className={"sm:pt-5"}>
            <FoodSection />
          </TabsContent>

          <TabsContent value="nature">
            <NatureSection />
          </TabsContent>

          <TabsContent value="activities">
            <ActivitiesSection />
          </TabsContent>

          <TabsContent value="hotel">
            <HotelSection />
          </TabsContent>

          <TabsContent value="seasonal">
            <SeasonalSection />
          </TabsContent>
        </Tabs>
      </main>

      {/* Beach-themed footer */}
      <footer className="beach-footer">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Mauritius Reiseguide | Paradiset venter</p>
        </div>
      </footer>
    </div>
  )
}
