'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    // Add hidden class to all reveal elements initially
    elements.forEach(el => el.classList.add('hidden'))

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.remove('hidden')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
