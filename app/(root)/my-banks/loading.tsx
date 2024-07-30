import BankCard from '@/components/BankCard';
import Copy from '@/components/Copy';
import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const MyBanksSkeleton = () => {
  return (
    <section className='flex flex-col justify-start gap-4 items-start'>
      <div className="my-banks">
        <HeaderBox
          title="Loading Bank Accounts ..."
          subtext="Please wait a moment."
        />

        <div className="space-y-4">
          <h2 className="header-2">
            Loading Your cards ...
          </h2>
          <div className="flex flex-col">
            <div className="max-w-[320px] h-[190px] rounded-2xl bg-bank-gradient animate-pulse"></div>
            <Copy title='Copy your shareable bank id' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyBanksSkeleton