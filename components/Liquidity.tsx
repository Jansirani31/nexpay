import styles from './Liquidity.module.css'

const CARDS = [
  { num: '2%', label: 'Earned on every swap through your liquidity' },
  { num: 'Daily', label: 'Reward payouts directly to your wallet' },
  { num: 'Zero', label: 'Lock-up — withdraw anytime' },
  { num: 'Multi', label: 'Pair support — INR, USDT, BTC & more', teal: true },
]

export default function Liquidity() {
  return (
    <section id="liquidity" className={`pad ${styles.liquidity}`} style={{ overflow: 'hidden' }}>
      <div className={styles.liqBg} />
      <div className="inner">
        <div className={styles.liqGrid}>
          <div className="reveal">
            <div className={styles.liqPercent}><span>2</span>%</div>
            <span className="section-label">Liquidity Providers</span>
            <h2 className={`${styles.sectionH2} reveal`}>Earn on<br /><em>Every Swap</em></h2>
            <p className="section-sub" style={{ marginBottom: 36 }}>
              Provide liquidity to NexPay and earn 2% on every swap executed through your pool.
            </p>
            <a href="#" className="btn-primary">Become a Provider →</a>
          </div>
          <div className={`${styles.liqCards} reveal reveal-delay-1`}>
            {CARDS.map(c => (
              <div key={c.num} className={styles.liqCard}>
                <div className={`${styles.liqCardNum} ${c.teal ? styles.teal : ''}`}>{c.num}</div>
                <div className={styles.liqCardLabel}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
