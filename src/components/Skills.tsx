import { skills } from '../data/content'

/**
 * Skills —— 技能展示
 * 按分类分组，图标 + 名称 + 熟练度进度条
 */
export default function Skills() {
  // 按分类分组
  const groups = skills.reduce<Record<string, typeof skills>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = []
    acc[s.category].push(s)
    return acc
  }, {})

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">技能</h2>
        <p className="section-sub">Skills</p>

        {Object.entries(groups).map(([category, items]) => (
          <div key={category} className="skill-group">
            <h3 className="skill-cat">{category}</h3>
            <div className="skill-grid">
              {items.map((s) => (
                <div key={s.name} className="card skill-card reveal">
                  <div className="skill-head">
                    <span className="skill-icon">{s.icon}</span>
                    <span className="skill-name">{s.name}</span>
                  </div>
                  {/* 熟练度进度条 */}
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                  </div>
                  <span className="skill-level">{s.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
