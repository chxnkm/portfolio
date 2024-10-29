'use client'

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const menuItems = [
  { href: "/#experience", label: "Experience" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/contact", label: "Contact Me" },
  { href: "/resume/KANG_MING_RESUME.pdf", label: "Résumé", className: "bg-accentButton text-white sm:ml-2" },
]
function NavMenu() {
  return (
    <menu className="relative z-10">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="flex flex-row">
          {menuItems.map((item, index) => (
            <NavigationMenuItem key={index} className="md:my-0 my-1 hover:scale-110 hover:underline underline-offset-[0.5px] duration-300">
              <NavigationMenuLink asChild
                className={`${navigationMenuTriggerStyle()}  ${item.className || ''}`}>
                <a href={item.href}>{item.label}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </menu>
  )
}

export default function Navbar() {
  return (
    <nav className="w-full border-b-2 bg-background dark:bg-gray-950/90">
      <div className="sm:max-w-[75vw] mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-12 md:grid-cols-3 h-20 items-center">

          <div className="flex col-span-4 md:col-span-1 items-center space-x-3">
            <Link href="/" rel="noopener noreferrer" passHref>
              <span className="font-msz text-3xl md:text-4xl font-extrabold duration-300">陈</span>
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