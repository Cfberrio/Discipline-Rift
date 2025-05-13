import { Plus, Filter, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { MarketingTemplates } from "@/components/marketing-templates"
import { MarketingAutomations } from "@/components/marketing-automations"
import { MarketingMetrics } from "@/components/marketing-metrics"

export default function MarketingPage() {
  // Acciones del encabezado
  const headerActions = (
    <>
      <Button className="gap-2">
        <Plus className="h-4 w-4" />
        Nueva Campaña
      </Button>
    </>
  )

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <Sidebar currentPath="/marketing" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header title="Marketing" subtitle="Email" actions={headerActions} />

        <main className="p-6">
          <Tabs defaultValue="templates" className="space-y-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="templates">Plantillas</TabsTrigger>
                <TabsTrigger value="automations">Automatizaciones</TabsTrigger>
                <TabsTrigger value="metrics">Métricas</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrar
                </Button>
                <Button variant="outline" size="sm">
                  <BarChart2 className="h-4 w-4 mr-2" />
                  Reportes
                </Button>
              </div>
            </div>

            <TabsContent value="templates" className="space-y-6">
              <MarketingTemplates />
            </TabsContent>

            <TabsContent value="automations" className="space-y-6">
              <MarketingAutomations />
            </TabsContent>

            <TabsContent value="metrics" className="space-y-6">
              <MarketingMetrics />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
