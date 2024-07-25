import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const LoggedIn = {
    firstName: 'Deika'
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={LoggedIn?.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1230.45}
          />
        </header>
      </div>
    </section>
  )
}

export default Home;