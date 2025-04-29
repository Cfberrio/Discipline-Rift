import { Mail, Activity } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function ActivityFeed() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Feed de actividades</CardTitle>
          <CardDescription>Actualizaciones recientes</CardDescription>
        </div>
        <Tabs defaultValue="priority" className="w-[200px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="priority">Prioridad</TabsTrigger>
            <TabsTrigger value="date">Fecha</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-blue-100 p-2">
              <Mail className="h-4 w-4 text-blue-600" />
            </div>
            <div className="grid gap-1">
              <div className="font-semibold">Campaña de Email</div>
              <div className="text-sm text-muted-foreground">"Oferta Especial" - Enviado el 13 de Abril, 2025</div>
              <div className="mt-2 flex gap-4 text-sm text-muted-foreground">
                <div>Entregados: 1.4k</div>
                <div>Tasa de apertura: 55%</div>
                <div>Tasa de clics: 1%</div>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-blue-100 p-2">
              <Activity className="h-4 w-4 text-blue-600" />
            </div>
            <div className="grid gap-1">
              <div className="font-semibold">Actualización de rendimiento</div>
              <div className="text-sm text-muted-foreground">Han pasado 15 días desde el último email enviado</div>
              <div className="mt-2">
                <Button size="sm">Crear nueva campaña</Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
