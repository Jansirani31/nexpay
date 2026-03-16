import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section id="final" className={`pad ${styles.final}`}>
      <div className={styles.finalBg} />
      <div className={styles.finalInner}>
        <span className="section-label reveal" style={{ display: 'block', textAlign: 'center' }}>
          The Future of Finance
        </span>
        <h2 className={`${styles.finalH2} reveal`}>
          Future of<br /><em>Fiat-Crypto</em><br />Interoperability
        </h2>
        <p className={`${styles.finalSub} reveal reveal-delay-1`}>
          NexPay bridges traditional finance and crypto with seamless fiat-to-crypto transactions —
          transparent, secure, and institutional-grade from day one.
        </p>
        <div className={`${styles.finalCtas} reveal reveal-delay-2`}>
          <a href="#" className="btn-primary">Get Started Now →</a>
          <a href="#otc" className="btn-ghost">Contact OTC Desk</a>
        </div>
      </div>
    </section>
  )
}
