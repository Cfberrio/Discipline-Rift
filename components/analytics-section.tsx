import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, DollarSign, Users, FileText } from "lucide-react"

export function AnalyticsSection() {
  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Analíticas</CardTitle>
          <CardDescription>Estadísticas de los últimos 30 días</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          Ver detalles
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between">
              <CardTitle className="text-sm font-medium">Visitas</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold">264</div>
                <span className="text-xs text-green-600">+5.8%</span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">0 hoy • 7 ayer</div>
            </CardContent>
          </Card>
          <Card className="border shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between">
              <CardTitle className="text-sm font-medium">Ventas</CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold">$10,165</div>
                <span className="text-xs text-green-600">+4.9%</span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">$0.00 hoy • $0.00 ayer</div>
            </CardContent>
          </Card>
          <Card className="border shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between">
              <CardTitle className="text-sm font-medium">Reservas</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold">52</div>
                <span className="text-xs text-green-600">+6.1%</span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">0 hoy • 0 ayer</div>
            </CardContent>
          </Card>
          <Card className="border shadow-sm">
            <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between">
              <CardTitle className="text-sm font-medium">Formularios</CardTitle>
              <FileText className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold">12</div>
                <span className="text-xs text-green-600">+5.9%</span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">0 hoy • 1 ayer</div>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
