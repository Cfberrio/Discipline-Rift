import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function Schedule() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Agenda</CardTitle>
          <CardDescription>Próximas sesiones y eventos</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          Ver todos
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="text-sm font-medium">Hoy, 29 de Abril</div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <div className="grid gap-1">
                <div className="font-semibold">VOLLEYBALL PINECREST</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  3:00 PM
                  <Badge variant="outline" className="ml-1">
                    19/20 participantes
                  </Badge>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <div className="grid gap-1">
                <div className="font-semibold">ADVANCED TENNIS PINECREST</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  3:15 PM
                  <Badge variant="outline" className="ml-1">
                    5/20 participantes
                  </Badge>
                </div>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-2">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <div className="grid gap-1">
                <div className="font-semibold">VOLLEYBALL INDEPENDENCE</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  3:15 PM
                  <Badge variant="outline" className="ml-1">
                    21/20 participantes
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
