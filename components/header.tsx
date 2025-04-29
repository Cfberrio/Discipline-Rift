import type React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  title: string
  subtitle?: string
  actions?: React.ReactNode
}

export function Header({ title, subtitle, actions }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
      <div className="flex flex-1 items-center gap-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        {subtitle && <span className="text-muted-foreground bg-muted px-2 py-0.5 rounded-md text-sm">{subtitle}</span>}
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        {actions}
        <Avatar>
          <AvatarImage src="/vibrant-street-market.png" alt="Avatar" />
          <AvatarFallback>CM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
