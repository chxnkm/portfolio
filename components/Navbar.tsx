import Link from "next/link";
import { NavMenu } from "./ui/NavMenu";


export default function Navbar() {
  return (
    <nav className="w-screen border-b-2bg-background dark:bg-gray-950/90">
      <div className="max-w-7xl container">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" passHref>
            <div className="flex items-center space-x-3">
              <span className="font-msz text-4xl font-extrabold">陈</span>
            </div>
          </Link>
          <div className="flex">
            <NavMenu/>
          </div>
        </div>
      </div>
    </nav>
  );
}
