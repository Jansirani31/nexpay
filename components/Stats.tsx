'use client'
import { useEffect, useRef } from 'react'
import styles from './Stats.module.css'

function animCounter(el: HTMLElement, target: number, dur: number) {
  let s = 0, step = target / (dur / 16)
  const t = setInterval(() => {
    s = Math.min(s + step, target)
    el.textContent = String(Math.floor(s))
    if (s >= target) clearInterval(t)
  }, 16)
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const c1 = useRef<HTMLSpanElement>(null)
  const c2 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (c1.current) animCounter(c1.current, 99, 1500)
        if (c2.current) animCounter(c2.current, 1200, 2000)
        io.disconnect()
      }
    }, { threshold: .3 })
    io.observe(section)
    return () => io.disconnect()
  }, [])

  return (
    <section id="stats" className={`pad ${styles.stats}`} ref={sectionRef}>
      <div className="inner">
        <div className={styles.statsGrid}>
          <div className={`${styles.statCard} reveal`}>
            <div className={styles.statNum}><span ref={c1}>0</span><span>%</span></div>
            <div className={styles.statLabel}>Success Rate</div>
            <div className={styles.statSub}>Secure and reliable trading infrastructure.</div>
          </div>
          <div className={`${styles.statCard} reveal reveal-delay-1`}>
            <div className={styles.statNum}><span ref={c2}>0</span><span>+</span></div>
            <div className={styles.statLabel}>Active Traders</div>
            <div className={styles.statSub}>Growing network of verified users and institutions.</div>
          </div>
          <div className={`${styles.statCard} reveal reveal-delay-2`}>
            <div className={styles.statNumAlt}>Fintech &<br /><em>Crypto</em></div>
            <div className={styles.statSub} style={{marginTop:8}}>Powering the future of digital finance.</div>
          </div>
          <div className={`${styles.statCard} reveal reveal-delay-3`}>
            <div className={styles.statNumTeal}>Multi<br />Liquidity</div>
            <div className={styles.statSub} style={{marginTop:8}}>Access multiple sources for best pricing.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
