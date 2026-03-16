import styles from './Footer.module.css'

const LINKS = {
  Product: ['OTC Trading', 'Liquidity Pool', 'OTC Desk', 'API Access'],
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Legal: ['Terms of Service', 'Privacy Policy', 'KYC Policy', 'Contact'],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="inner">
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerLogo}>
              <div className={styles.logoMark}>N</div>
              NexPay OTC
            </div>
            <p className={styles.footerTagline}>
              Bridging traditional finance and crypto with transparent, secure,
              institutional-grade OTC infrastructure.
            </p>
          </div>
          {Object.entries(LINKS).map(([col, items]) => (
            <div key={col}>
              <div className={styles.footerColTitle}>{col}</div>
              <div className={styles.footerLinks}>
                {items.map(item => <a key={item} href="#">{item}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footerBottom}>
          <span>© 2026 NexPay OTC. All rights reserved.</span>
          <div className={styles.socialLinks}>
            {['𝕏', 'in', '✈', '◈'].map((s, i) => (
              <a key={i} href="#" className={styles.socialBtn}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
