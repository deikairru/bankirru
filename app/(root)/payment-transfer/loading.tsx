import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import { Button } from '@/components/ui/button'
import { FormControl } from '@/components/ui/form'
import { Input } from "@/components/ui/input"

const TransferSkeleton = () => {
  return (
    <section className="payment-transfer">
      <HeaderBox
        title="Loading Transfer..."
        subtext="Please wait a moment"
      />

      <section className="size-full pt-5">
        <div className="flex flex-col gap-8 max-w[850px]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-8 w-full max-w-[850px] mt-2 py-4 border-t-2 border-slate-100 ">
              <div className="flex flex-col gap-2 w-1/3">
                <div className="w-full h-3 mb-2 bg-slate-200 rounded-md"></div>
                <div className="w-full h-2 bg-slate-200 rounded-md"></div>
                <div className="w-full h-2 bg-slate-200 rounded-md"></div>
              </div>
              <div className="w-2/3 h-30 bg-slate-50 border-slate-200 border-2 rounded-md"></div>
            </div>
            <div className="flex flex-row gap-8 w-full max-w-[850px] mt-2 py-4 border-t-2 border-slate-100 ">
              <div className="flex flex-col gap-2 w-1/3">
                <div className="w-full h-3 mb-2 bg-slate-200 rounded-md"></div>
                <div className="w-full h-2 bg-slate-200 rounded-md"></div>
                <div className="w-full h-2 bg-slate-200 rounded-md"></div>
              </div>
              <div className="w-2/3 h-30 bg-slate-50 border-slate-200 border-2 rounded-md"></div>
            </div>
            <div className="flex flex-row gap-8 w-full max-w-[850px] mt-2 py-4 border-t-2 border-slate-100 ">
              <div className="flex flex-col gap-2 w-1/3">
                <div className="w-full h-3 mb-2 bg-slate-200 rounded-md"></div>
                <div className="w-full h-2 bg-slate-200 rounded-md"></div>
                <div className="w-full h-2 bg-slate-200 rounded-md"></div>
              </div>
              <div className="w-2/3 h-30 bg-slate-50 border-slate-200 border-2 rounded-md"></div>
            </div>
            <div className="flex flex-row gap-8 w-full max-w-[850px] mt-2 py-4 border-t-2 border-slate-100 ">
              <div className="flex flex-col gap-2 w-1/3">
                <div className="w-full h-3 mb-2 bg-slate-200 rounded-md"></div>
                <div className="w-full h-2 bg-slate-200 rounded-md"></div>
                <div className="w-full h-2 bg-slate-200 rounded-md"></div>
              </div>
              <div className="w-2/3 h-30 bg-slate-50 border-slate-200 border-2 rounded-md"></div>
            </div>
          </div>
          <div className="payment-transfer_btn-box">
            <Button type="submit" disabled={true} className="payment-transfer_btn">
              Loading
            </Button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default TransferSkeleton
