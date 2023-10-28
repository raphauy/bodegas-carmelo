import { TailwindIndicator } from '@/components/shadcn/tailwind-indicator'
import { ThemeProvider } from '@/components/shadcn/theme-provider'
import { ThemeToggle } from '@/components/shadcn/theme-toggle'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bodegas de Carmelo',
  description: 'Somos un grupo de Bodegas de la ciudad de Carmelo en el Dpto. de Colonia, Uruguay🍇🍷🥂 ¡Te invitamos a conocer el tesoro del oeste!🤗',
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,    
  },
  authors: {name: "Raphael Carvalho", url: "https://rapha.uy"},
  publisher: "Tinta Wine",
  keywords: "tinta, wine, vino, carmelo, marketing, agencia, bodega, bodegas, vinos, vino"
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <body className={cn(inter.className, "dark:bg-black")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <div className="fixed bottom-0 right-0">
            <ThemeToggle />
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
