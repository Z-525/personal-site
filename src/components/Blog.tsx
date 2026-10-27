import { posts } from '../data/content'

/**
 * Blog —— 博客列表
 * 标题、摘要、日期、标签
 */
export default function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <h2 className="section-title">博客</h2>
        <p className="section-sub">Blog</p>

        <div className="blog-list">
          {posts.map((post) => (
            <article key={post.id} className="card blog-card reveal">
              <div className="blog-head">
                <h3 className="blog-title">{post.title}</h3>
                <span className="blog-date">{post.date}</span>
              </div>
              <p className="blog-summary">{post.summary}</p>
              <div className="blog-tags">
                {post.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
