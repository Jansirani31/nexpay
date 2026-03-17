'use client'
import { useState } from 'react'
import styles from './FAQ.module.css'

const FAQS = [
  {
    q: 'What is NexPay OTC?',
    a: 'NexPay OTC is a peer-to-peer over-the-counter trading platform that allows users to buy and sell cryptocurrencies directly using Indian Rupees (INR), without going through traditional exchanges. We connect verified buyers and sellers for seamless, transparent transactions.',
  },
  {
    q: 'How does OTC trading work?',
    a: 'In OTC trading, buyers and sellers negotiate directly rather than through an exchange order book. NexPay acts as the trusted intermediary — matching parties, locking prices, verifying payments, and ensuring secure settlement. This eliminates slippage and provides price certainty.',
  },
  {
    q: 'Is KYC required to trade?',
    a: 'Yes. All NexPay users must complete KYC verification before trading. This ensures a safe, compliant platform for all participants and protects against fraud. KYC typically completes within a few hours.',
  },
  {
    q: 'How long do settlements take?',
    a: 'Most settlements complete within 2–5 minutes after payment confirmation. Our automated verification processes transactions in real time, and crypto or fiat is delivered to your wallet immediately upon successful verification.',
  },
  {
    q: 'What are the fees involved?',
    a: 'NexPay charges a flat 0.1% network fee on all trades. There are no hidden spreads. Liquidity providers earn 2% on every swap executed through their pool. Large OTC desk trades may have custom fee structures — contact our desk for details.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className={`pad ${styles.faq}`}>
      <div className="inner">
        <div className={styles.faqLayout}>
          <div className={`${styles.faqSticky} reveal`}>
            <span className="section-label">FAQ</span>
            <h2 className={`${styles.finalH2} reveal`}>
  Frequently<br /><em>Asked</em>
</h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>
              Everything you need to know about NexPay OTC trading.
            </p>
            <a href="#" className="btn-ghost">View All FAQs →</a>
          </div>
          <div className={`${styles.faqList} reveal reveal-delay-1`}>
            {FAQS.map((item, i) => (
              <div key={i} className={`${styles.faqItem} ${open === i ? styles.open : ''}`}>
                <div className={styles.faqQ} onClick={() => setOpen(open === i ? null : i)}>
                  {item.q}
                  <div className={styles.faqIcon}>+</div>
                </div>
                <div className={styles.faqA}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
