'use client'
import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return
    const cur = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cur || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'; cur.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove)
    let rafId: number
    const anim = () => {
      rx += (mx - rx) * .12; ry += (my - ry) * .12
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(anim)
    }
    anim()
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId) }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  )
}
