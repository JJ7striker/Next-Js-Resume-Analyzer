"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Loader } from 'lucide-react'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { useAuth } from '@/context/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { googleSignIn, loading } = useAuth();

  const signUserIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch(err) {
      console.log("Error logging user in - ", err)
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='w-full h-screen flex justify-center flex-col gap-2 items-center'>
      <div className='w-11/12 max-w-md h-auto shadow-md shadow-blue-500 bg-white rounded-lg px-5 py-3'>
        <h2 className='text-2xl font-bold rounded-lg text-center  bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-500'>
          Sign Up
        </h2>

        <Button className='w-3/5 text-lg mt-4 block mx-auto bg-blue-500 text-white hover:text-blue-600' variant='outline' onClick={googleSignIn}>
          Sign In With Google
        </Button>


        <form className='w-full mt-7 px-8 flex flex-col items-center gap-8' onSubmit={signUserIn}>
          <div className='flex items-start gap-1 flex-col w-full'>
            <label htmlFor='email' className='text-sm font-medium text-gray-700'>
              Email
            </label>
            <Input
              type='email'
              id='email'
              className=' w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex items-start gap-1 flex-col w-full'>
            <label htmlFor='password' className='text-sm font-medium text-gray-700'>
              Password
            </label>
            <Input
              type='password'
              id='password'
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
              placeholder='••••••••'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Button className='w-3/5 text-lg mt-4 block mx-auto bg-blue-500 text-white hover:text-blue-600' variant='outline' type='submit' disabled={isLoading}>
            {isLoading ? <Loader className='animate-spin' /> : "Sign In"}
          </Button>
        </form>
      </div>
      <Link href="/login" className='text-blue-500 hover:text-blue-800'>
        Already have an account? Log In
      </Link>
    </div>
  )
}

export default SignUp