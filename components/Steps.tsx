import styles from './Steps.module.css'

const STEPS = [
  { num: '01', title: 'Select & Lock', text: 'Choose your pair and lock the current rate.' },
  { num: '02', title: 'Secure Payment', text: 'Transfer INR via NEFT, IMPS, or UPI.' },
  { num: '03', title: 'Rapid Verify', text: 'Automated multi-layer verification in real time.' },
  { num: '04', title: 'Instant Delivery', text: 'Crypto delivered to your wallet immediately.' },
]

export default function Steps() {
  return (
    <section id="steps" className={`pad ${styles.steps}`}>
      <div className="inner">
        <div className={`${styles.stepsHeader} reveal`}>
          <span className="section-label">Trade in 4 Simple Steps</span>
          <h2 className={`${styles.sectionH2} reveal`}>From INR to <em>Crypto</em><br />in Minutes</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>Streamlined process — maximum speed, minimum friction.</p>
        </div>
        <div className={styles.stepsTrack}>
          {STEPS.map((s, i) => (
            <div key={s.num} className={`${styles.stepItem} reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}>
              <div className={styles.stepNum}>{s.num}</div>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepText}>{s.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
