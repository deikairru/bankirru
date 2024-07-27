import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {
  const LoggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={LoggedIn?.name || 'Guest'}
            subtext='Access and manage your account and transactions efficiently'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1230.45}
          />
        </header>

        RECENT TRANSACTIONS HERE
      </div>
      <RightSidebar user={LoggedIn} transactions={[]} banks={[{ currentBalance: 1200.45 }, { currentBalance: 3900.45 }]} />
    </section>
  )
}

export default Home;