import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NexPay OTC — Trade Rupees. Receive Crypto.',
  description: 'A seamless OTC crypto trading platform enabling direct INR trades with deep liquidity, verified counterparties, and transparent pricing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
