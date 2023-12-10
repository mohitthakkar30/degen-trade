import Form from '@/components/Form/Form'
import React from 'react'
import { Toaster } from 'react-hot-toast'

type Props = {}

function Home({ }: Props) {
  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/financial-chart-globe-background-forex-trading-stock-market_1017-44838.jpg?w=1480&t=st=1702172333~exp=1702172933~hmac=2c9bfe9402a6956ef6a8bef89859f467058c35902f015ba582e1ccf338674334')] w-screen h-screen backdrop-blur-sm flex flex-col px-10 justify-center">
      <div className='text-8xl w-3/4 break-words'>
      Showcase your trading skills and earn rewards.
      </div>
      <div>

        <button className="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5" onClick={() => {
          //@ts-ignore
          document.getElementById("my_modal_1")?.showModal()
        }}>Create Compition</button>


        {
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-transparent">
              <Toaster />
              <Form />
            </div>
          </dialog>
        }
      </div>
    </div>
  )
}

export default Home