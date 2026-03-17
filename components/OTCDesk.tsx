import styles from './OTCDesk.module.css'

const OTC_CARDS = [
  { num: '01', title: 'Pre-Confirmed Pricing', text: 'Account funding with verified counterparties and pre-confirmed pricing before execution.' },
  { num: '02', title: 'Full Documentation Trail', text: 'Every step from request to settlement is documented and auditable.' },
  { num: '03', title: 'Institutional Infrastructure', text: 'Built for large-value transactions with dedicated support and custom terms.' },
]

export default function OTCDesk() {
  return (
    <section id="otc" className={`pad ${styles.otc}`}>
      <div className="inner">
        <div className={styles.otcGrid}>
          <div className="reveal">
            <span className="section-label">OTC Desk for Large Trades</span>
            <h2 className={`${styles.sectionH2} reveal`}>Trade <em>Large.</em><br />Trade Smart.</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Dedicated desk for high-volume traders and institutional clients.
              Execute large INR orders without price impact.
            </p>
            <a href="#" className="btn-primary">Contact OTC Desk →</a>
          </div>
          <div className={`${styles.otcCards} reveal reveal-delay-1`}>
            {OTC_CARDS.map(c => (
              <div key={c.num} className={styles.otcCard}>
                <div className={styles.otcCardNum}>{c.num}</div>
                <div className={styles.otcCardText}>
                  <strong>{c.title}</strong>
                  {c.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
