import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationMenuDemo } from "./ui/NavMenu";


export default function Navbar() {
  return (
    <nav className="w-screen border-b-2 border-stone-400 bg-slate-200 shadow-sm dark:bg-gray-950/90">
      <div className="max-w-7xl container">
        <div className="flex justify-between h-20 items-center">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <Avatar className="w-12 h-12"> {/* Set fixed width and height */}
                <AvatarImage src="https://github.com/chxnkm.png" />
                <AvatarFallback>KM</AvatarFallback>
              </Avatar>
              <span className="font-extrabold">KANG MING</span>
            </div>
          </Link>
          <div className="flex">
            <NavigationMenuDemo/>
          </div>
        </div>
      </div>
    </nav>
  );
}
