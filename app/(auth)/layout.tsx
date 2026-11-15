import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-linear-to-r from-white to-blue-200'>
        {children}
    </div>
  )
}

export default AuthLayout