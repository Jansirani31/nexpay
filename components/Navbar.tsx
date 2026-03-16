'use client'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const close = () => setOpen(false)

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      close()
    }
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="nav">
        <a href="#" className={styles.navLogo}>
          <div className={styles.logoMark}>N</div>
          NexPay
        </a>
        <ul className={styles.navLinks}>
          <li><a href="#features" onClick={smoothScroll}>Features</a></li>
          <li><a href="#security" onClick={smoothScroll}>Security</a></li>
          <li><a href="#otc" onClick={smoothScroll}>OTC Desk</a></li>
          <li><a href="#faq" onClick={smoothScroll}>FAQ</a></li>
          <li><a href="#" className={styles.navCta}>Get Started</a></li>
        </ul>
        <button
          className={`${styles.navBurger} ${open ? styles.open : ''}`}
          aria-label="Open menu"
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.navDrawer} ${open ? styles.open : ''}`}>
        <a href="#features" onClick={smoothScroll}>Features</a>
        <a href="#security" onClick={smoothScroll}>Security</a>
        <a href="#otc" onClick={smoothScroll}>OTC Desk</a>
        <a href="#faq" onClick={smoothScroll}>FAQ</a>
        <a href="#" className={styles.navCta} onClick={close}>Get Started →</a>
      </div>
    </>
  )
}
