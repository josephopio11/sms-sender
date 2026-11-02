import { EB_Garamond, Geist_Mono, Noto_Sans } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";
import "./globals.css";

const ebGaramondHeading = EB_Garamond({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", notoSans.variable, ebGaramondHeading.variable)}
    >
      <body>
        <ThemeProvider>{children}
          <ModeToggle/>
        </ThemeProvider>
      </body>
    </html>
  )
}
