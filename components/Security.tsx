'use client'
import { useEffect, useRef } from 'react'
import styles from './Security.module.css'

const SEC_FEATURES = [
  { icon: '🔐', title: 'Authenticated Integrity', text: 'Secure multi-layer authentication ensures only verified participants can complete transactions.' },
  { icon: '📈', title: 'Real-Time Market Pricing', text: 'Fair pricing aggregated live from multiple liquidity providers with zero manipulation risk.' },
  { icon: '📋', title: 'Full Auditability', text: 'Every transaction is permanently recorded and fully verifiable — complete transparency.' },
]

export default function Security() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    for (let i = 0; i < 80; i++) {
      const h = document.createElement('div')
      h.className = styles.hex + (Math.random() < .12 ? ' ' + styles.hexActive : '')
      grid.appendChild(h)
    }
    const interval = setInterval(() => {
      const hexes = grid.querySelectorAll(`.${styles.hex}`)
      hexes[Math.floor(Math.random() * hexes.length)].classList.toggle(styles.hexActive)
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="security" className={`pad ${styles.security}`}>
      <div className="inner">
        <div className={styles.securityGrid}>
          <div className="reveal">
            <span className="section-label">Secure &amp; Transparent</span>
           <h2 className={`${styles.sectionH2} reveal`}>Built on<br /><em>Trust &amp; Proof</em></h2>
            <p className="section-sub" style={{ marginBottom: 36 }}>
              Every layer of NexPay is designed around security, auditability, and transparent market pricing.
            </p>
            <div className={styles.secFeatures}>
              {SEC_FEATURES.map(f => (
                <div key={f.title} className={styles.secFeat}>
                  <div className={styles.secFeatIcon}>{f.icon}</div>
                  <div>
                    <div className={styles.secFeatTitle}>{f.title}</div>
                    <div className={styles.secFeatText}>{f.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.secVisual} reveal reveal-delay-1`}>
            <div className={styles.secHexGrid} ref={gridRef} />
            <div className={styles.secBadge}>
              <div className={styles.secRing}>
                <div className={styles.secIconBig}>🛡️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
