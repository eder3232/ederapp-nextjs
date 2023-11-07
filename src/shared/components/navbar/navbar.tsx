import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { AuthGoogleButtonServer } from "@/shared/auth/auth-button-server";

const Navbar = () => {
  return (
    <div className=" flex h-16 items-center justify-center border-b-2">
      <div className="container flex  items-center justify-between">
        <Link href="/">eder3232</Link>
        {/* <div>items</div> */}
        <div className="flex gap-2">
          <ModeToggle />
          <AuthGoogleButtonServer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
