import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { ThemeProviders } from "@/app/theme-providers"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Fran Padel Project - Mehodology",
  description: "Improve your padel",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <ThemeProviders>{children}</ThemeProviders>
        </main>
      </body>
    </html>
  )
}

// return (
//   <html lang="en" className={GeistSans.className} suppressHydrationWarning>
//     <body className="bg-background text-foreground min-h-screen flex flex-col items-center">
//       <ThemeProviders>
//         <div className="flex-1 w-full flex flex-col gap-20">
//           <Navbar />

//           <main className="max-w-screen-lg 2xl:max-w-screen-xl 3xl:max-w-screen-2xl m-auto animate-in z-0">
//             {children}
//           </main>

//           <Footer />
//         </div>
//       </ThemeProviders>
//     </body>
//   </html>
// )
