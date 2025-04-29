import { MoreHorizontal, Plus, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { ServicesFilters } from "@/components/services-filters"
import { ServicesTable } from "@/components/services-table"

// Datos de servicios
const services = [
  {
    id: 1,
    name: "PICKLEBALL PINECREST AVALON",
    price: "$125",
    dateRange: "Mar 31, 2025 - May 5, 2025",
    icon: "/service-icon-1.png",
  },
  {
    id: 2,
    name: "VOLLEYBALL DEERWOOD",
    price: "$125",
    dateRange: "Mar 31, 2025 - May 5, 2025",
    icon: "/service-icon-2.png",
  },
  {
    id: 3,
    name: "VOLLEYBALL LAUREATE PARK",
    price: "$125",
    dateRange: "Mar 31, 2025 - May 5, 2025",
    icon: "/service-icon-3.png",
  },
  {
    id: 4,
    name: "VOLLEYBALL LIVING WORD ACADEMY",
    price: "$125",
    dateRange: "Mar 31, 2025 - May 5, 2025",
    icon: "/service-icon-4.png",
  },
  {
    id: 5,
    name: "VOLLEYBALL VILLAGE PARK",
    price: "$125",
    dateRange: "Mar 31, 2025 - May 5, 2025",
    icon: "/service-icon-5.png",
  },
  {
    id: 6,
    name: "VOLLEYBALLL PINECREST SPACE COAST",
    price: "$140",
    dateRange: "Apr 1, 2025 - May 6, 2025",
    icon: "/service-icon-6.png",
  },
  {
    id: 7,
    name: "ADVANCED TENNIS PINECREST AVALON",
    price: "$125",
    dateRange: "Apr 1, 2025 - May 6, 2025",
    icon: "/service-icon-7.png",
  },
  {
    id: 8,
    name: "VOLLEYBALL INDEPENDENCE",
    price: "$125",
    dateRange: "Apr 1, 2025 - May 6, 2025",
    icon: "/service-icon-8.png",
  },
  {
    id: 9,
    name: "VOLLEYBALL WATER SPRING",
    price: "$125",
    dateRange: "Apr 1, 2025 - May 6, 2025",
    icon: "/service-icon-9.png",
  },
]

export default function ServicesPage() {
  // Acciones del encabezado
  const headerActions = (
    <>
      <Button variant="ghost" size="icon">
        <MoreHorizontal className="h-5 w-5" />
      </Button>
      <Button variant="outline" className="gap-2">
        <Share2 className="h-4 w-4" />
        Compartir Servicios
      </Button>
      <Button className="gap-2">
        <Plus className="h-4 w-4" />
        Añadir un Nuevo Servicio
      </Button>
    </>
  )

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <Sidebar currentPath="/servicios" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header title="Servicios" subtitle="352" actions={headerActions} />

        <main className="p-6">
          <Card>
            <CardHeader>
              <CardTitle>Servicios</CardTitle>
              <CardDescription>Crea y edita cursos, clases o citas.</CardDescription>
            </CardHeader>
            <CardContent>
              <ServicesFilters />
              <ServicesTable services={services} />
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
