import Link from "next/link";
import { NavMenu } from "./ui/NavMenu";

export default function Navbar() {
  return (
    <nav className="w-full border-b-2 bg-background dark:bg-gray-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 h-20 items-center">

          <div className="flex items-center space-x-3">
            <Link href="/" rel="noopener noreferrer" passHref>
              <span className="font-msz col-span-1 text-3xl md:text-4xl font-extrabold hover:scale-110 duration-300">陈</span>
            </Link>
          </div>

          <div className="hidden md:block col-span-2 justify-self-end">
            <NavMenu />
          </div>
          <div className="md:hidden justify-self-end">
            <NavMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}