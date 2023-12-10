import Header from '@/components/Header/Header';
import Leader from '@/components/Leader/Leader';
import { useRegister, useTradingCompTime } from '@/hooks/useTradingComp';
import Image from 'next/image';
import React from 'react'

type Props = {

}



const trade = (props: Props) => {

    return (
        <>
            <Header />
            {/* trading comp info */}
            <div className='flex justify-around items-center bg-white border border-gray-200  shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full border-none p-12'>
                {/* comp details */}
                <div className='flex w-2/4 justify-center '>
                    <div className='flex flex-col'>
                        <span className='text-4xl font-extrabold'>DEMO NAME</span>
                        <span>Compitition Expiry - </span>
                    </div>
                </div>
                {/* comp banner */}
                <img className="object-cover flex-1 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://biswap.org/_next/image?url=https%3A%2F%2Fstatic.biswap.org%2Fhttps%3A%2F%2Fstatic.biswap.org%2Fcompetitions%2F1684840122324B-DayCompHeader.png&w=1200&q=75" height={507} width={207} alt="" />
            </div>
            {/* trading leader board */}
            <div className="w-full bg-white border border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                <div className="flow-root">
                    <ul  className="divide-y divide-gray-200 dark:divide-gray-700">
                        <Leader  />
                        <Leader />
                        <Leader />
                        <Leader />
                        <Leader />
                        <Leader />

                    </ul>
                </div>
            </div>
        </>
    )
}

export default trade