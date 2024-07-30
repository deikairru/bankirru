import HeaderBox from '@/components/HeaderBox'
import RecentTransactionsSkeleton from '@/components/RecentTransactionsSkeleton'
import { formatAmount } from '@/lib/utils'
import React from 'react'

const HistorySkeleton = () => {
  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox
          title="Loading Transaction History ..."
          subtext="Please wait for a moment."
        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">Loading Card...</h2>
            <p className="text-14 text-blue-25">
              Please wait a moment
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● ****
            </p>
          </div>

          <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">{formatAmount(0)}</p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <RecentTransactionsSkeleton history={true} />
        </section>
      </div>
    </div>
  )
}

export default HistorySkeleton
