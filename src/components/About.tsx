import { profile } from '../data/content'

/**
 * About —— 个人介绍
 * 简介 + 教育背景时间线
 */
export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">关于我</h2>
        <p className="section-sub">About Me</p>

        <div className="about-grid">
          <div className="card reveal">
            <h3 className="about-h3">个人简介</h3>
            <p className="about-text">
              {profile.intro}
            </p>
            <p className="about-text">
              我是一名物联网工程专业的在校学生，对 AI 辅助软件开发、前端开发与嵌入式开发
              都有浓厚兴趣。习惯用「先跑通 MVP，再逐步迭代」的方式推进项目，
              擅长把想法快速变成可运行的产品。
            </p>
          </div>

          <div className="card reveal">
            <h3 className="about-h3">教育背景</h3>
            <ul className="timeline">
              <li>
                <span className="tl-dot" />
                <div>
                  <strong>{profile.education}</strong>
                  <p className="tl-desc">学号 2024132225 · 在校生</p>
                </div>
              </li>
              <li>
                <span className="tl-dot" />
                <div>
                  <strong>课程实践</strong>
                  <p className="tl-desc">
                    电子技术课程设计（Multisim 仿真）、单片机（Keil + Proteus）、
                    C 语言程序设计、AI 辅助软件开发综合实践
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
