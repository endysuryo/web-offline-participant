import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import '@/styles/globals.css'
import ReactQuery from '@/libs/providers/react-query'
import { ReactNode } from 'react'

type IRootLayout = {
  readonly children: ReactNode
}

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Populix',
  description: 'Populix Offline Survey',
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <main className='mx-auto w-full px-4 py-10 lg:w-1/3'>
          <ReactQuery>{children}</ReactQuery>
        </main>
      </body>
    </html>
  )
}
