import HeaderBox from '@/components/HeaderBox'
import RecentTransactionsSkeleton from '@/components/RecentTransactionsSkeleton'
import TotalBalanceBoxSkeleton from '@/components/TotalBalanceBoxSkeleton'
import RightSidebarSkeleton from '@/components/RightSidebarSkeleton'
import React from 'react'

const homeSkeleton = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='Loading'
            user={'Data ...'}
            subtext='Please wait for a moment'
          />

          <TotalBalanceBoxSkeleton />
        </header>

        <RecentTransactionsSkeleton />
      </div>
      <RightSidebarSkeleton />
    </section>
  )
}

export default homeSkeleton
