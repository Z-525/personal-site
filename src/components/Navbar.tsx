import { useEffect, useState } from 'react'
import { profile } from '../data/content'

const NAV_ITEMS = [
  { label: '首页', href: '#home' },
  { label: '关于', href: '#about' },
  { label: '技能', href: '#skills' },
  { label: '项目', href: '#projects' },
  { label: '博客', href: '#blog' },
  { label: '联系', href: '#contact' },
]

/**
 * Navbar —— 吸顶毛玻璃导航栏
 * 桌面端横向导航，移动端折叠为汉堡菜单
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  // 滚动时给导航加背景
  useEffect(() => {
    const onScroll = () => {
      document.body.dataset.scrolled = window.scrollY > 10 ? 'true' : 'false'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="navbar">
      <div className="container nav-inner">
        {/* Logo */}
        <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="logo-dot" /> {profile.name}
        </a>

        {/* 桌面导航 */}
        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* 汉堡按钮 */}
        <button
          className={`burger ${open ? 'open' : ''}`}
          aria-label="菜单"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {open && (
        <nav className="nav-mobile">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
