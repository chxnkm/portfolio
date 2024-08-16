'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const NavMenu = () => {
  const currentPath = usePathname()

  const menuItems = [
    { href: "/#experience", label: "Experience" },
    { href: "/hobbies", label: "Hobbies" },
    { href: "/contact", label: "Contact Me" },
    { href: "/resume/RESUME_KANG_MING.pdf", label: "Résumé", className: "bg-[#bc7b0b] text-white sm:ml-2" },
  ]

  return (
    <div className="relative z-10">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-row">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="md:my-0 my-1 hover:scale-110 duration-300">
                  <NavigationMenuLink asChild
                    className={`${navigationMenuTriggerStyle()} ${
                      currentPath === item.href ? "underline" : ""
                    } ${item.className || ''}`}
                  >
                    <a href={item.href}>{item.label}</a>
                  </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
  )
}

export default function Navbar() {
  return (
    <nav className="w-full border-b-2 bg-background dark:bg-gray-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 md:grid-cols-3 h-20 items-center">

          <div className="flex col-span-4 md:col-span-1 items-center space-x-3">
            <Link href="/" rel="noopener noreferrer" passHref>
              <span className="font-msz text-3xl md:text-4xl font-extrabold hover:scale-110 duration-300">陈</span>
            </Link>
          </div>

          <div className="block col-span-6 md:col-span-2 justify-center md:justify-self-end">
            <NavMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}