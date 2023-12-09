import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Home from '@/views/Home/Home'
import Form from '@/components/Form/Form'
import { useState } from 'react'

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
      <button onClick={() => setCreateCompitionModal(true)} className="" data-modal-toggle="default-modal" type="button">
 
      </button>

      <button className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { 
        //@ts-ignore
        document.getElementById("my_modal_1")?.showModal() }}>Create Compition</button>
      

      {
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-transparent">
            <Form />
        </div>
      </dialog>
      }
    </>

  )
}
