import { Activity, Calendar, Home, BarChart3, Settings, BookOpen, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface SidebarProps {
  currentPath?: string
}

export function Sidebar({ currentPath = "/" }: SidebarProps) {
  return (
    <div className="hidden border-r bg-white md:block w-64">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      <div className="px-3 py-4">
        <div className="space-y-1">
          <Button variant={currentPath === "/" ? "default" : "ghost"} className="w-full justify-start gap-3" asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
              Inicio
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <BarChart3 className="h-4 w-4" />
            Analíticas
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Calendar className="h-4 w-4" />
            Agenda
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Activity className="h-4 w-4" />
            Actividades
          </Button>
          <Button
            variant={currentPath === "/servicios" ? "default" : "ghost"}
            className="w-full justify-start gap-3"
            asChild
          >
            <Link href="/servicios">
              <BookOpen className="h-4 w-4" />
              Servicios
            </Link>
          </Button>
          <Button
            variant={currentPath === "/marketing" ? "default" : "ghost"}
            className="w-full justify-start gap-3"
            asChild
          >
            <Link href="/marketing">
              <Mail className="h-4 w-4" />
              Marketing
            </Link>
          </Button>
          <Separator className="my-4" />
          <Button variant="ghost" className="w-full justify-start gap-3">
            <Settings className="h-4 w-4" />
            Configuración
          </Button>
        </div>
      </div>
    </div>
  )
}
