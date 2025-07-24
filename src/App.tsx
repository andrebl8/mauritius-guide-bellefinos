import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FoodSection } from "@/components/sections/FoodSection"
import { NatureSection } from "@/components/sections/NatureSection"
import { ActivitiesSection } from "@/components/sections/ActivitiesSection"

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Tropical-themed header with palm tree decorations */}
      <header className="tropical-header">
        <div className="container mx-auto px-4 py-2 relative">
          <div className="palm-decoration absolute top-2 left-6"></div>
          <div className="palm-decoration absolute top-1 right-10"></div>
          <h1 className="text-4xl font-bold text-primary-foreground text-center">
            Mauritius Reiseguide
          </h1>
          <p className="text-primary-foreground/90 mt-2 text-center text-lg">
            Oppdag paradisøya i Det indiske hav 🏝️
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        {/* Mauritius-themed tabs */}
        <Tabs defaultValue="food" className="w-full mauritius-tabs">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1.5 rounded-lg">
            <TabsTrigger value="food" className="mauritius-tab-trigger">
              🍽️ Mat
            </TabsTrigger>
            <TabsTrigger value="nature" className="mauritius-tab-trigger">
              🏞️ Natur & Kultur
            </TabsTrigger>
            <TabsTrigger value="activities" className="mauritius-tab-trigger">
              🏄‍♂️ Aktiviteter
            </TabsTrigger>
          </TabsList>

          <TabsContent value="food">
            <FoodSection />
          </TabsContent>

          <TabsContent value="nature">
            <NatureSection />
          </TabsContent>

          <TabsContent value="activities">
            <ActivitiesSection />
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
