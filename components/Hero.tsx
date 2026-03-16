'use client'
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const rateRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = rateRef.current
    if (!el) return
    const interval = setInterval(() => {
      const up = Math.random() > .3
      const p = (Math.random() * .3 + .05).toFixed(2)
      el.textContent = (up ? '▲ ' : '▼ ') + p + '%'
      el.style.color = up ? 'var(--teal)' : 'var(--red)'
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroGrid} />
        <div className={`${styles.heroOrb} ${styles.orb1}`} />
        <div className={`${styles.heroOrb} ${styles.orb2}`} />
        <div className={`${styles.heroOrb} ${styles.orb3}`} />
      </div>
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLabel}>
            <span className={styles.labelDot} />
            Live OTC Platform · INR ↔ Crypto
          </div>
          <h1 className={styles.heroH1}>
            Trade <em>Rupees.</em><br />
            <span className={styles.line2}>Receive Crypto.</span><br />
            Instantly.
          </h1>
          <p className={styles.heroSub}>
            A seamless OTC crypto trading platform enabling direct INR trades with deep liquidity,
            verified counterparties, and transparent pricing. No middlemen.
          </p>
          <div className={styles.heroCtas}>
            <a href="#" className="btn-primary">Get Started →</a>
            <a href="#features" className="btn-ghost">See How It Works</a>
          </div>
          <div className={styles.heroBadges}>
            {[['🔒','Secure Transactions'],['✓','Verified Partners'],['⚡','Instant Settlement'],['📊','Transparent Pricing']].map(([icon, label]) => (
              <div key={label} className={styles.badge}><span>{icon}</span>{label}</div>
            ))}
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={`${styles.floatCard} ${styles.float1}`}>
            <div className={styles.floatLabel}>Success Rate</div>
            <div className={`${styles.floatVal} ${styles.up}`}>99.0%</div>
          </div>
          <div className={`${styles.floatCard} ${styles.float2}`}>
            <div className={styles.floatLabel}>Avg. Settlement</div>
            <div className={`${styles.floatVal} ${styles.warn}`}>&lt; 2 min</div>
          </div>
          <div className={styles.conversionCard}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTitle}>OTC Swap</span>
              <div className={styles.liveBadge}><div className={styles.liveDot} />Live Rate</div>
            </div>
            <div className={styles.convFrom}>
              <div className={styles.convLabel}>You Send</div>
              <div className={styles.convRow}>
                <div className={styles.convAmount}>₹50,000</div>
                <div className={styles.convCurrency}>
                  <div className={`${styles.currencyFlag} ${styles.flagInr}`}>🇮🇳</div>INR
                </div>
              </div>
            </div>
            <div className={styles.convArrow}>
              <div className={styles.arrowLine} />
              <div className={styles.arrowIcon}>↓</div>
            </div>
            <div className={styles.convTo}>
              <div className={styles.convLabel}>You Receive</div>
              <div className={styles.convRow}>
                <div className={styles.convAmount}>596.42</div>
                <div className={styles.convCurrency}>
                  <div className={`${styles.currencyFlag} ${styles.flagUsdt}`}>₮</div>USDT
                </div>
              </div>
            </div>
            <div className={styles.convRate}>
              <span className={styles.rateLabel}>1 USDT = ₹83.85</span>
              <span className={styles.rateValue} ref={rateRef}>▲ 0.12%</span>
            </div>
            <div className={`${styles.convRate} ${styles.convRateNoTop}`}>
              <span className={styles.rateLabel}>Network Fee</span>
              <span className={styles.rateValue}>0.1%</span>
            </div>
            <button className={styles.convBtn}>Swap Now — Lock Rate</button>
          </div>
        </div>
      </div>
    </section>
  )
}
