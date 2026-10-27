import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  speed: number // 闪烁速度
  phase: number // 相位
  depth: number // 视差深度
}

/**
 * Starfield —— Canvas 星空背景
 * 粒子缓慢闪烁（透明度正弦变化），鼠标移动产生视差
 * 移动端粒子数量减半，尊重 prefers-reduced-motion
 */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = canvasRef.current!
    const c = canvasEl.getContext('2d')!

    // 用户偏好减弱动效时直接不启动动画
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let stars: Star[] = []
    let raf = 0
    let mouseX = 0
    let mouseY = 0

    const isMobile = () => window.innerWidth < 768

    // 初始化粒子
    function initStars() {
      const w = canvasEl.width
      const h = canvasEl.height
      const count = isMobile() ? 70 : 150 // 移动端降粒子数
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.6 + 0.4,
        speed: Math.random() * 0.9 + 0.3,
        phase: Math.random() * Math.PI * 2,
        depth: Math.random() * 0.5 + 0.2,
      }))
    }

    // 调整画布尺寸（跟随窗口）
    function resize() {
      canvasEl.width = window.innerWidth
      canvasEl.height = window.innerHeight
      initStars()
    }

    // 绘制一帧
    function draw(t: number) {
      c.clearRect(0, 0, canvasEl.width, canvasEl.height)

      // 鼠标视差偏移（轻微）
      const px = mouseX * 0.02
      const py = mouseY * 0.02

      stars.forEach((s) => {
        // 透明度正弦变化实现闪烁
        const alpha = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.001 * s.speed + s.phase))
        c.beginPath()
        c.arc(s.x + px * s.depth, s.y + py * s.depth, s.size, 0, Math.PI * 2)
        c.fillStyle = `rgba(230, 234, 242, ${alpha})`
        c.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    // 鼠标监听
    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
