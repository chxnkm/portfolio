import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Navbar() {
  return (
    <nav className="flex inset-x-0 top-0 z-20 bg-blue-300 shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          <Link className="flex items-center" href="#">
            {/* <MountainIcon className="h-6 w-6" /> */}
             <Avatar>
                <AvatarImage src="https://github.com/chxnkm.png" />
                <AvatarFallback>KM</AvatarFallback>
             </Avatar>
          </Link>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="ghost">
              <Link href ="/about-me">About Me</Link>
            </Button>
            <Button size="sm" variant="ghost">
              <Link href ="#">Projects</Link>
            </Button>
            <Button size="sm" variant="ghost">
              <Link href ="#">Hobbies</Link>
            </Button>
            <Button size="sm" variant="ghost">
              <Link href ="#">Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }