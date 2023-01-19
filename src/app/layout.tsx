"use client"

import Providers from "../context/providers"
import "./globals.css"
import Navbar from "./components/navbar"

interface Props {
  children: React.ReactElement
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <Providers>
        <body>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
