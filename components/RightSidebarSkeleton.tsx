import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Progress } from "./ui/progress";

const RightSidebarSkeleton = () => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">L</span>
          </div>

          <div className="profile-details">
            <h1 className='profile-name'>
              Loading ...
            </h1>
            <p className="profile-email">
              load@mail.com
            </p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between items-center">
          <h2 className="header-2">My Banks</h2>
          <Button
            className='flex gap-2'
          >
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <h2 className="text-14 font-semibold text-gray-600">
              Add Bank
            </h2>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-5">
          <div className="container w-full h-40 rounded-lg bg-slate-200 animate-pulse"></div>
        </div>


        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>
          <div className='space-y-5 animate-pulse'>
            <div className="gap-[18px] flex p-4 rounded-xl">
              <figure className="flex-center size-10 rounded-full">
                <div className="w-8 h-8 rounded-full bg-slate-300"></div>
              </figure>
              <div className="flex w-full flex-1 flex-col gap-2">
                <div className="text-14 flex justify-between">
                  <h2 className="font-medium">Category 1</h2>
                  <h3 className="font-normal">0</h3>
                </div>
                <Progress
                  value={60}
                  className='bg-slate-200 h-2 '
                  indicatorClassName='bg-slate-300'
                />
              </div>
            </div>
            <div className="gap-[18px] flex p-4 rounded-xl">
              <figure className="flex-center size-10 rounded-full">
                <div className="w-8 h-8 rounded-full bg-slate-300"></div>
              </figure>
              <div className="flex w-full flex-1 flex-col gap-2">
                <div className="text-14 flex justify-between">
                  <h2 className="font-medium">Category 2</h2>
                  <h3 className="font-normal">0</h3>
                </div>
                <Progress
                  value={60}
                  className='bg-slate-200 h-2 '
                  indicatorClassName='bg-slate-300'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </aside >
  )
}

export default RightSidebarSkeleton