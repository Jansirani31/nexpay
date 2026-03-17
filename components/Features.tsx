import styles from './Features.module.css'

const FEATURES = [
  { icon: '🔄', tag: 'Core', title: 'Direct OTC Trading', text: 'Trade crypto directly without exchange intermediaries. Deep liquidity pools ensure minimal slippage.', color: 'gold' },
  { icon: '⚡', tag: 'Speed', title: 'Instant Settlement', text: 'Automated engine processes and delivers crypto or fiat within minutes of confirmation.', color: 'teal' },
  { icon: '📊', tag: 'Pricing', title: 'Transparent Pricing', text: 'Real-time rates aggregated from multiple liquidity sources. No hidden spreads.', color: 'white' },
  { icon: '🔒', tag: 'Security', title: 'Authenticated Integrity', text: 'Multi-layer authentication and KYC verification ensures every counterparty is trusted.', color: 'gold' },
  { icon: '🏦', tag: 'Institutional', title: 'OTC Desk Access', text: 'Dedicated desk for high-volume institutional trades. Execute large orders without market impact.', color: 'teal' },
  { icon: '💧', tag: 'Liquidity', title: 'Multi-Source Liquidity', text: 'Aggregated liquidity from multiple providers ensures best execution across all pairs.', color: 'white' },
]

export default function Features() {
  return (
    <section id="features" className={`pad ${styles.features}`}>
      <div className="inner">
        <div className={styles.featuresHeader}>
          <div className="reveal">
            <span className="section-label">Core Features</span>
            <h2 className={`${styles.sectionH2} reveal`}>Explore Our<br /><em>Core Capabilities</em></h2>
          </div>
          <div className="reveal reveal-delay-1">
            <p className="section-sub">
              Decentralized and secure OTC infrastructure with transparent pricing, strong security,
              and direct counterparty trading.
            </p>
            <a href="#" className="btn-ghost" style={{ marginTop: 16, display: 'inline-block' }}>Explore More →</a>
          </div>
        </div>
        <div className={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`${styles.featCard} reveal${i % 3 !== 0 ? ` reveal-delay-${i % 3}` : ''}`}>
              <div className={`${styles.featIcon} ${styles[`fi${f.color.charAt(0).toUpperCase() + f.color.slice(1)}`]}`}>{f.icon}</div>
              <div className={styles.featTag}>{f.tag}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featText}>{f.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
