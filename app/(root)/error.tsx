'use client'

import HeaderBox from "@/components/HeaderBox"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex w-full h-screen justify-center items-center gap-4">
      <HeaderBox
        title="Something Wrong Happen!!"
        subtext={`Error : ${error}`}
      />
      <button className="w-[90px] h-[30px] text-slate-50 bg-bank-gradient" onClick={() => reset()}>Try again</button>
    </div>
  )
}