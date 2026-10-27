import { projects } from '../data/content'

/**
 * Projects —— 项目展示
 * 卡片列表：封面（渐变占位）、描述、技术标签、链接
 */
export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">项目</h2>
        <p className="section-sub">Projects</p>

        <div className="project-grid">
          {projects.map((p) => (
            <div key={p.id} className="card project-card reveal">
              {/* 封面：渐变占位 + 首字 */}
              <div className="project-cover">
                <span>{p.title.charAt(0)}</span>
              </div>
              <div className="project-body">
                <div className="project-head">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-year">{p.year}</span>
                </div>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                {p.link.startsWith('http') && (
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                    访问 →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
