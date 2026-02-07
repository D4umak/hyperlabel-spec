import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Link from 'next/link'
import { Package, MapPin, ShoppingCart, Settings, LayoutDashboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'
import { isClerkConfigured } from '@/lib/clerk-config'
import { MobileSidebar } from '@/components/dashboard/mobile-sidebar'
import { ThemeToggle } from '@/components/theme-toggle'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Shipments', href: '/shipments', icon: MapPin },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Check if Clerk is configured
  const clerkEnabled = isClerkConfigured()

  let firstName = 'User'

  if (clerkEnabled) {
    const user = await currentUser()

    if (!user) {
      redirect('/sign-in')
    }

    firstName = user.firstName || user.emailAddresses[0]?.emailAddress?.split('@')[0] || 'User'
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Sidebar - Desktop */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 border-r border-border bg-card lg:block">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b border-border px-6">
          <Package className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">TIP</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 p-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Buy Labels CTA */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border p-4">
          <Button asChild className="w-full">
            <Link href="/buy">Buy Labels</Link>
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-card px-4 lg:px-6">
          {/* Mobile menu button */}
          <MobileSidebar />

          {/* Mobile logo */}
          <Link href="/dashboard" className="flex items-center gap-2 lg:hidden">
            <Package className="h-6 w-6 text-primary" />
            <span className="font-bold">TIP</span>
          </Link>

          {/* Greeting - Desktop */}
          <div className="hidden lg:block">
            <p className="text-sm text-muted-foreground">
              Welcome back, <span className="font-medium text-foreground">{firstName}</span>
            </p>
          </div>

          {/* Theme toggle + User button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            {clerkEnabled ? (
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: 'h-9 w-9',
                  },
                }}
              />
            ) : (
              <div className="h-9 w-9 rounded-full bg-primary/10" />
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
