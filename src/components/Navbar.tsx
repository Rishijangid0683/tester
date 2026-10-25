import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LogInIcon, Sprout, HomeIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { stackServerApp } from "@/stack/server"; // <-- Standard Stack Auth export

async function Navbar() {
  const user = await stackServerApp.getUser();

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              Plantventory
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2">
              <Link href="/plants">
                <Sprout className="w-4 h-4" />
                <span className="hidden lg:inline">Plant</span>
              </Link>
            </Button>

            <Button variant="ghost" className="flex items-center gap-2">
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>

            <ModeToggle />

            <Button variant="ghost" className="flex items-center gap-2">
              <Link href={stackServerApp.urls.signIn}>
                <LogInIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Sign In</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;