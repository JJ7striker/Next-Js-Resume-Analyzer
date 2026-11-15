import React from 'react'
import Sidebar from './dashboard/Sidebar'
import { Menu } from 'lucide-react'
import MenuIcon from '@/components/MenuIcon'

const AppLayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-auto'>
      <Sidebar />
      <main className='w-full min-h-screen py-8 px-3 md:pl-64'>
        <MenuIcon />
        {children}
        </main>
    </div>
  )
}

export default AppLayout