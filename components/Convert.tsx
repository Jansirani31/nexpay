import styles from './Convert.module.css'

export default function Convert() {
  return (
    <section id="convert" className={`pad ${styles.convert}`}>
      <div className={styles.convertBg} />
      <div className={styles.convertInner}>
        <span className="section-label reveal" style={{ display: 'block', textAlign: 'center' }}>
          Rupee In · USDT Out
        </span>
        <h2 className={`${styles.sectionH2} reveal ${styles.center}`}>Convert <em>₹ INR</em> to<br />USDT Seamlessly</h2>
        <div className={`${styles.convertFlow} reveal reveal-delay-1`}>
          <div className={`${styles.convPill} ${styles.inr}`}><span>🇮🇳</span>₹ INR</div>
          <div className={styles.convArrowBig}>→</div>
          <div className={styles.convPill} style={{ color: 'var(--muted2)', borderColor: 'var(--border)' }}><span>🏦</span>NexPay</div>
          <div className={styles.convArrowBig}>→</div>
          <div className={`${styles.convPill} ${styles.usdt}`}><span>₮</span>USDT</div>
        </div>
        <p className={`section-sub reveal reveal-delay-2`} style={{ textAlign: 'center', margin: '0 auto 36px' }}>
          Convert Indian Rupees into USDT with transparent rates and secure settlements. Fast, simple, safe.
        </p>
        <div className="reveal reveal-delay-3">
          <a href="#" className="btn-primary">Start Trading →</a>
        </div>
      </div>
    </section>
  )
}
