'use client'

import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Footer from './Footer'


const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname();

  return (
    <section className='w-full max-w-[400px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src='/icons/hamburger.svg'
            width={30}
            height={30}
            alt='Menu'
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-white w-screen min-[400px]:w-[370px] sm:w-[400px] h-full'>
          <Link href='/' className='cursor-pointer flex items-center gap-1 px-4'>
            <Image
              src='/icons/logo.svg'
              width={34}
              height={34}
              alt='Next Bank Logo'
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold font-black-1">Next Bank</h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-screen flex-col gap-4 pt-16 text-white">
                {
                  sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);
                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          href={item.route}
                          key={item.label}
                          className={cn('mobilenav-sheet_close w-full', {
                            'bg-bankGradient': isActive
                          })}
                        >
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              'brightness-[3] invert-0': isActive
                            })}
                          />
                          <p className={cn('text-16 font-semibold text-black-2', {
                            'text-white': isActive
                          })}>{item.label}</p>
                        </Link>
                      </SheetClose>
                    )
                  })
                }
                <Footer user={user} type='mobile' />
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

    </section>
  )
}

export default MobileNav
