"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import 'tailwindcss/tailwind.css';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname()

  const navItems = [
    { name: 'NGOs', href: '/' },
    { name: 'Wydarzenia', href: '/events' },
    { name: 'Zarejestruj Wydarzenie', href: '/register_event' },
  ]

  return (
    <html>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href ? 'bg-gray-100' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main> {/*className="flex-grow container mx-auto px-4 py-8">*/}
        {children}
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © 2024 Gorilla squad. All rights reserved.
        </div>
      </footer>
    </div>
    </body>
    </html>
  )
}
