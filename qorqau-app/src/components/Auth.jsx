import React, { useState } from 'react'

export default function Auth({ setUser, setActiveTab, theme }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuth = (e) => {
    e.preventDefault()
    if (!email || !password) return
    setUser({ email: email })
    setActiveTab('home')
  }

  const isDark = theme === 'dark'
  const cardBg = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
  const inputBg = isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'

  return (
    <div className="max-w-md w-full mx-auto p-4 font-mono text-xs my-10">
      <div className={`border p-8 rounded-xl space-y-6 ${cardBg}`}>
        <div className="text-center space-y-1">
          <h2 className="text-xs font-black tracking-widest uppercase text-indigo-500 dark:text-indigo-400">ВХОД В ТЕРМИНАЛ СИСТЕМЫ</h2>
          <p className="text-[10px] text-slate-500 font-sans">Предоставьте учетные данные для верификации сессии</p>
        </div>

        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="text-[9px] font-bold text-slate-400 block mb-1 uppercase">EMAIL ИДЕНТИФИКАТОР</label>
            <input type="email" className={`w-full border p-3 rounded-lg focus:outline-none focus:border-indigo-500 ${inputBg}`} value={email} onChange={e => setEmail(e.target.value)} placeholder="username@qorqau.kz" required />
          </div>
          <div>
            <label className="text-[9px] font-bold text-slate-400 block mb-1 uppercase">ПАРОЛЬ ДОСТУПА</label>
            <input type="password" className={`w-full border p-3 rounded-lg focus:outline-none focus:border-indigo-500 ${inputBg}`} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-3.5 rounded-lg transition-colors cursor-pointer uppercase tracking-widest text-[11px] mt-2">
            АВТОРИЗОВАТЬ СЕССИЮ
          </button>
        </form>
      </div>
    </div>
  )
}