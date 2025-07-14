"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "home" },
    { href: "/about", label: "about me" },
    { href: "/projects", label: "my work" },
    { href: "/cv", label: "cv" },
    { href: "/contact", label: "say hi!" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-2 md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-lg font-bold border-3 border-black transform transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${
                pathname === item.href
                  ? "bg-pink-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  : "bg-cyan-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-pink-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
