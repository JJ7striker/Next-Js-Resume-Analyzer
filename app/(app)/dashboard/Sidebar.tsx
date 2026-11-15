"use client"

import { X } from "lucide-react"
import { useAuth } from "@/context/AuthContext"
import Image from "next/image"
import Logo from "@/app/favicon.ico"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
    const { setIsSideOpen, isSideOpen } = useAuth();
    const pathName = usePathname()
  return (
    <header className={`w-1/2 h-screen bg-slate-200 fixed left-0 shadow-sm shadow-slate-400 top-0 py-12 px-8 z-50 transition-all duration-200 ease-in-out sidebar-large ${isSideOpen ? "translate-x-0 visible opacity-100" : "-translate-x-full opacity-0 invisible"}`}>
        <X className="md:hidden size-5 text-blue-600 absolute top-3 left-4" onClick={() => setIsSideOpen(false)} />
            <div className="w-full flex items-center justify-center gap-2">
                <Image src={Logo} alt="Logo" width={30} height={30} className="w-7.5 h-7.5 rounded-full"></Image>
            <h2 className="text-lg bg-clip-text text-transparent bg-linear-to-r font-bold from-blue-500 to-blue-800">HuntAI</h2>
            </div>
            <div className="w-full h-auto flex flex-col gap-5 items-center py-10 text-sm font-medium">
                <Link href="/dashboard" className={`w-full text-center text-gray-800 ${pathName === "/dashboard" ? "side-link" : ""}`}>Dashboard</Link>
                <Link href="/resume-upload" className={`w-full text-center text-gray-800 ${pathName === "/resume-upload" ? "side-link" : ""}`}>Analyze Resume</Link>
                <Link href="/job-matching" className={`w-full text-center text-gray-800 ${pathName === "/job-matching" ? "side-link" : ""}`}>Job Matching</Link>
                <Link href="/history" className={`w-full text-center text-gray-800 ${pathName === "/history" ? "side-link" : ""}`}>History</Link>
                <Link href="/profile" className={`w-full text-center text-gray-800 ${pathName === "/profile" ? "side-link" : ""}`}>Profile</Link>
            </div>
    </header>
  )
}

export default Sidebar