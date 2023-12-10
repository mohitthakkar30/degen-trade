import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Home from '@/views/Home/Home'
import Form from '@/components/Form/Form'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function Indexpage() {
  const [createCompitionModal, setCreateCompitionModal] = useState<boolean>(false);

  const handleCreateCompitionMadalClose = () => setCreateCompitionModal(false)
  return (
    <>
      <div className='w-auto h-auto bg-gradient-to-tr from-red-400 to-lime-800'>
        <Header />
        <Home />
      </div>
    </>

  )
}
