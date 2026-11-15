"use client"

import React from 'react'
import { Menu } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

const MenuIcon = () => {
  const { setIsSideOpen } = useAuth();
  return (
    <Menu className='absolute top-4 left-3 size-5 text-blue-500' onClick={() => setIsSideOpen(true)} />
  )
}

export default MenuIcon