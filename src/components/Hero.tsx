import { profile } from '../data/content'

/**
 * Hero —— 首页首屏
 * 头像（姓名首字母）、姓名、专业、一句话介绍、CTA 按钮
 */
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        {/* 头像：圆形 + 姓名首字母 */}
        <div className="avatar">{profile.name.charAt(0)}</div>

        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            查看项目
          </a>
          <a href="#contact" className="btn btn-ghost">
            联系我
          </a>
        </div>
      </div>
    </section>
  )
}
