import Header from '@/components/Header/Header';
import { useTradingCompTime } from '@/hooks/useTradingComp';
import React from 'react'

type Props = {
    
}

const trade = (props: Props) => {

   const address = "0x261a85ecb4cdd0c1c3e0978f833c06c8a2252d77"
  const data = useTradingCompTime(address);
  console.log(data)

  return (
    <>
            <Header/>
    {/* trading comp info */}
    <div>
        {/* comp details */}
    <div className=''>
        <span></span>
    </div>
    {/* comp banner */}
    <div>

    </div>
    </div>
    {/* trading leader board */}
    </>
  )
}

export default trade