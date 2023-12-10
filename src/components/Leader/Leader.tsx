import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { getLeaderBoard } from "@/utils/apollo/queries";


type Props = {}
const renderLeaderBanner = () => {
    return (<>

    </>
    )
}
const Leader = (props: Props) => {
    const { loading, error, data } = useQuery(getLeaderBoard);
    console.log("apollo",data)
    
    return (
        <div> <li className="py-3 sm:py-4">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-800 font-semibold text-white leading-none dark:bg-white dark:text-gray-800">
  AC
</span>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@windster.com
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                </div>
            </div>
        </li>
        </div>
    )
}

export default Leader