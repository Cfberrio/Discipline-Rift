import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { AnalyticsSection } from "@/components/analytics-section"
import { ActivityFeed } from "@/components/activity-feed"
import { Schedule } from "@/components/schedule"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <Sidebar currentPath="/" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Header title="Bienvenido, Luis" />

        <main className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Analytics Section */}
          <AnalyticsSection />

          {/* Activity Feed */}
          <ActivityFeed />

          {/* Schedule/Agenda */}
          <Schedule />
        </main>
      </div>
    </div>
  )
}
