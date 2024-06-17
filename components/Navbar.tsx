import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="w-full inset-x-0 top-0 z-20 border-b-2 border-stone-400 bg-slate-200 shadow-sm dark:bg-gray-950/90">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          <Link className="flex items-center" href="/">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="https://github.com/chxnkm.png" />
                <AvatarFallback>KM</AvatarFallback>
              </Avatar>
              <span className="font-extrabold">KANG<br/>MING</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="ghost">
              <Link href="/about-me">About Me</Link>
            </Button>
            <Button size="sm" variant="ghost">
              <Link href="/projects">Projects</Link>
            </Button>
            <Button size="sm" variant="ghost">
              <Link href="#">Hobbies</Link>
            </Button>
            <Button size="sm" variant="ghost">
              <Link href="/resume/RESUME_KANG_MING.pdf">Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
