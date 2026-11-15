"use client";
import Image from "next/image";
import Logo from "@/app/favicon.ico";
import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  return (
    <header className="w-full h-13 shadow-sm shadow-gray-300 flex z-30 bg-white fixed top-0 left-0 items-center px-2 justify-between">
      <Link className="w-auto flex items-center gap-2" href="#home">
      <Image
        src={Logo}
        width={30}
        height={30}
        className="rounded-full"
        alt="Logo"
      />
      <h2 className="text-lg bg-clip-text text-transparent bg-linear-to-r font-bold from-blue-500 to-blue-800">HuntAI</h2>
      </Link>
      <MenuIcon onClick={() => setIsOpen(true)} className="md:hidden" />
      <nav
        className={`w-full h-screen fixed top-0 left-0 bg-white shadow-lg ${isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"} transition-all duration-300 ease-in-out font-medium flex flex-col items-center py-10  gap-6 z-50 large-screen `}
      >
        <X
          onClick={() => setIsOpen(false)}
          className="absolute md:hidden top-3 left-4 text-blue-600"
        />

        <Link href="#how-it-works" className={`link-hover ${pathName === "#how-it-works" ? "text-blue-600" : "text-gray-600"}`}>
        How It Works
        </Link>

         <Link href="#services" className={`link-hover ${pathName === "#services" ? "text-blue-600" : "text-gray-600"}`}>
          Services
        </Link>

        <Link href="#about" className={`link-hover ${pathName === "#about" ? "text-blue-600" : "text-gray-600"}`}>
          About
        </Link>
        <Link href="#contact" className={`link-hover ${pathName === "#contact" ? "text-blue-600" : "text-gray-600"}`}>
          Contact
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <Button
          className={"text-blue-600 hover:bg-blue-600 shadow-sm shadow-gray-300 hover:text-white"}
          variant={"outline"}
          onClick={() => router.push("/signup")}
        >
          Get Started
        </Button>
        <Button
          className={"text-blue-600 hover:bg-blue-600 shadow-sm shadow-gray-300 hover:text-white"}
          variant={"outline"}
          onClick={() => router.push("/login")}
        >
          Log In
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
