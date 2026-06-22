import { useEffect, useRef } from 'react'

// Aerodynamic particle flow field. Particles follow a curl-noise-style vector
// field and bend around the cursor like streamlines around a body.
export default function FlowField({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width, height, dpr
    let particles = []
    let raf
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(Math.floor((width * height) / 14000), 160)
      particles = Array.from({ length: count }, () => spawn(true))
    }

    const spawn = (anywhere = false) => ({
      x: anywhere ? Math.random() * width : -10,
      y: Math.random() * height,
      px: 0,
      py: 0,
      speed: 1.2 + Math.random() * 1.6,
      life: 400 + Math.random() * 500,
    })

    // Smooth pseudo-noise field built from layered sines — cheap and organic.
    const angleAt = (x, y, t) => {
      const s = 0.0016
      return (
        Math.sin(x * s * 1.3 + t * 0.00022) * 0.8 +
        Math.cos(y * s * 1.7 - t * 0.00017) * 0.8 +
        Math.sin((x + y) * s * 0.6 + t * 0.0001) * 0.5
      )
    }

    let t = 0
    const tick = () => {
      t += 16
      // translucent navy wash leaves fading trails
      ctx.fillStyle = 'rgba(11, 23, 48, 0.07)'
      ctx.fillRect(0, 0, width, height)

      for (const p of particles) {
        p.px = p.x
        p.py = p.y
        let a = angleAt(p.x, p.y, t) * 0.4 // mostly horizontal flow, like a wind tunnel
        let vx = Math.cos(a) * p.speed + p.speed * 1.4
        let vy = Math.sin(a) * p.speed * 0.45

        // deflect around cursor
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 16000) {
          const d = Math.sqrt(d2) || 1
          const push = (1 - d / 127) * 2.4
          vx += (dx / d) * push
          vy += (dy / d) * push
        }

        p.x += vx
        p.y += vy
        p.life -= 1

        const speed = Math.hypot(vx, vy)
        const alpha = Math.min(0.55, 0.12 + speed * 0.16)
        ctx.strokeStyle = `rgba(157, 193, 251, ${alpha})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(p.px, p.py)
        ctx.lineTo(p.x, p.y)
        ctx.stroke()

        if (p.x > width + 10 || p.y < -10 || p.y > height + 10 || p.life <= 0) {
          Object.assign(p, spawn())
        }
      }
      raf = requestAnimationFrame(tick)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }

    resize()
    window.addEventListener('resize', resize)
    canvas.parentElement.addEventListener('pointermove', onMove)
    canvas.parentElement.addEventListener('pointerleave', onLeave)

    if (prefersReduced) {
      // single static frame for reduced motion
      ctx.fillStyle = '#0B1730'
      ctx.fillRect(0, 0, width, height)
    } else {
      ctx.fillStyle = '#0B1730'
      ctx.fillRect(0, 0, width, height)
      raf = requestAnimationFrame(tick)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.parentElement?.removeEventListener('pointermove', onMove)
      canvas.parentElement?.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}
