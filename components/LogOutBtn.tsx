"use client"

import React from 'react'
import { Button } from './ui/button'
import { LogOut } from 'lucide-react'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'

const LogOutBtn = () => {
  const router = useRouter();
  const logOut = async () => {
    try {
      await signOut(auth);
      router.push("/")
    } catch(err) {
      console.log("Error logging out, ", err);
    }
  }
  return (
    <Button onClick={logOut}>
        <LogOut />
    </Button>
  )
}

export default LogOutBtn