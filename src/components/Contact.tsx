import { useState } from 'react'
import { profile } from '../data/content'

/**
 * Contact —— 联系模块
 * 邮箱展示（可复制）+ 留言表单（前端校验 + 反馈）
 */
export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  // 复制邮箱到剪贴板
  function copyEmail() {
    navigator.clipboard
      .writeText(profile.email)
      .then(() => setStatus('邮箱已复制！'))
      .catch(() => setStatus('复制失败，请手动复制'))
    setTimeout(() => setStatus(''), 2000)
  }

  // 表单提交（仅前端模拟）
  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !message.trim()) {
      setStatus('请填写邮箱和留言内容')
      return
    }
    setStatus('提交成功！我会尽快联系你（演示环境，仅前端处理）')
    setEmail('')
    setMessage('')
    setTimeout(() => setStatus(''), 4000)
  }

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">联系我</h2>
        <p className="section-sub">Contact</p>

        <div className="contact-grid">
          <div className="card reveal">
            <h3 className="about-h3">联系方式</h3>
            <p className="about-text">{profile.education}</p>
            <button className="btn btn-ghost email-btn" onClick={copyEmail}>
              📧 {profile.email}（点击复制）
            </button>
          </div>

          <div className="card reveal">
            <h3 className="about-h3">留言</h3>
            <form onSubmit={onSubmit} className="contact-form">
              <input
                className="form-input"
                type="email"
                placeholder="你的邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="form-input"
                placeholder="想说的话…"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                发送留言
              </button>
            </form>
            {status && <p className="form-status">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
