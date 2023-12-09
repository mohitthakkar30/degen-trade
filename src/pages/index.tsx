import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Home from '@/views/Home/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Indexpage() {
  return (
    <div className='w-auto h-auto bg-gradient-to-tr from-red-400 to-lime-800'>
     <Header/>
     <Home/>
    </div>

  )
}
