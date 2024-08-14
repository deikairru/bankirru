import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const RecentTransactionsSkeleton = ({ history = false }: { history?: boolean }) => {
  return (
    <section className="recent-transactions">
      {
        !history ?
          <header className="flex items-center justify-between">
            <h2 className="recent-transactions-label">Loading Recent transactions ...</h2>
            <div className="view-all-btn">
              View all
            </div>
          </header> : <></>
      }
      <section className="tabs">
        <div className="flex flex-col gap-8 max-w-[95%] mx-auto animate-pulse">
          {
            !history ?
              <div className="flex flex-row justify-center items-center w-full gap-4 mt-4">
                <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 w-48"></div>
                <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 w-48"></div>
              </div>
              : <></>
          }

          <Table>
            <TableHeader className="bg-[#f9fafb]">
              <TableRow>
                <TableHead className="px-2">Transaction</TableHead>
                <TableHead className="px-2">Amount</TableHead>
                <TableHead className="px-2">Status</TableHead>
                <TableHead className="px-2">Date</TableHead>
                <TableHead className="px-2 max-md:hidden">Channel</TableHead>
                <TableHead className="px-2 max-md:hidden">Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 4 }, (v, k) => {
                return (
                  <TableRow key={k} className='bg-[#F6FEF9] over:bg-none border-b-DEFAULT'>
                    <TableCell className="max-w-[250px] pl-2 pr-10">
                      <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-full"></div>
                    </TableCell>

                    <TableCell className='pl-2 pr-10 font-semibold'>
                      <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-full"></div>
                    </TableCell>

                    <TableCell className="pl-2 pr-10">
                      <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-full"></div>
                    </TableCell>

                    <TableCell className="min-w-32 pl-2 pr-10">
                      <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-full"></div>
                    </TableCell>

                    <TableCell className="pl-2 pr-10 capitalize min-w-24 max-md:hidden">
                      <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-full"></div>
                    </TableCell>

                    <TableCell className="pl-2 pr-10 max-md:hidden">
                      <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-700 max-w-full"></div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </section>
  )
}

export default RecentTransactionsSkeleton
