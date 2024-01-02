import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="bg-gray-100 w-full text-sm py-1 flex justify-center lg:justify-end lg:px-80">
        Give it a Star ⭐. &nbsp;
        <Link
          href="https://github.com/ShafiWalsher/IEvnt-AnEventOrganizer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-500 font-medium"
        >
          Github Repository 🡵
        </Link>
      </div>
      <div className="wrapper flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/images/logo-dark.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
