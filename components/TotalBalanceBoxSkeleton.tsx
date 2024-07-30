'use client'

import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: ['10'],
        backgroundColor: ['#0747b6']
      }
    ],
    labels: ['Account 0']
  }

  return <Doughnut
    data={data}
    options={{
      cutout: '60%',
      plugins: {
        legend: {
          display: false
        }
      }
    }}
  />
}

const TotalBalanceBoxSkeleton = () => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart />
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="header-2">
          Bank Accounts: 0
        </h1>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={0} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBoxSkeleton
