import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'

export const metadata = {
  title: 'FurkanPal',
  description: 'Generated by furkan',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className={`bg-black w-full h-full text-white ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html >
  )
}
