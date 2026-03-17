'use client'
import { useEffect, useRef } from 'react'
import styles from './WhyChoose.module.css'

const WHY_ITEMS = [
  { title: 'Deep Liquidity Pools', text: 'Always find a match at competitive rates, even for large INR volumes.' },
  { title: 'Verified Counterparties', text: 'Every participant is KYC-verified. Trade with confidence.' },
  { title: 'Zero Market Slippage', text: 'OTC model eliminates order-book slippage. Price locked at confirmation.' },
  { title: 'Institutional Grade Rails', text: 'Infrastructure built for high-frequency, high-value transactions.' },
]

const METRICS = [
  { label: 'Transaction Success Rate', width: '99%', val: '99%' },
  { label: 'Liquidity Depth', width: '94%', val: '94%' },
  { label: 'Settlement Speed', width: '87%', val: '~2 min' },
  { label: 'User Satisfaction', width: '96%', val: '4.9★' },
  { label: 'Partner Network', width: '72%', val: '1,200+' },
]

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null)
  const fillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        fillRefs.current.forEach((el, i) => {
          if (el) el.style.width = METRICS[i].width
        })
        io.disconnect()
      }
    }, { threshold: .3 })
    io.observe(section)
    return () => io.disconnect()
  }, [])

  return (
    <section id="why" className={`pad ${styles.why}`} ref={sectionRef}>
      <div className="inner">
        <div className={styles.whyGrid}>
          <div className="reveal">
            <span className="section-label">Why NexPay OTC</span>
            <h2 className={`${styles.sectionH2} reveal`}>The Smarter Way<br />to <em>Trade OTC</em></h2>
            <p className="section-sub" style={{ marginBottom: 36 }}>
              Secure and transparent infrastructure for both institutional and individual trades.
            </p>
            <div className={styles.whyList}>
              {WHY_ITEMS.map(item => (
                <div key={item.title} className={styles.whyItem}>
                  <div className={styles.whyCheck}>✓</div>
                  <div>
                    <div className={styles.whyTitle}>{item.title}</div>
                    <div className={styles.whyText}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.whyVisualBox} reveal reveal-delay-1`}>
            <span className="section-label" style={{ marginBottom: 24, display: 'block' }}>Platform Metrics</span>
            {METRICS.map((m, i) => (
              <div key={m.label} className={styles.whyMetric}>
                <div>
                  <div className={styles.wmLabel}>{m.label}</div>
                  <div className={styles.wmBar}>
                    <div
                      className={styles.wmFill}
                      ref={el => { fillRefs.current[i] = el }}
                    />
                  </div>
                </div>
                <div className={styles.wmVal}>{m.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
