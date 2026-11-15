import Navbar from '@/components/Navbar'

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full min-h-screen'>
        <Navbar />
        <main className='w-full min-h-screen pt-13'>{children}</main>
    </div>
  )
}

export default LandingLayout