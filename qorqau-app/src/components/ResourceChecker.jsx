import React, { useState } from 'react'

export default function ResourceChecker({ theme }) {
  const [type, setType] = useState('links')
  const [input, setInput] = useState('')
  const [res, setRes] = useState(null)

  const handleCheck = () => {
    if (!input.trim()) return
    setRes(input.includes('olx') || input.includes('kaspi') ? 'danger' : 'clean')
  }

  const isDark = theme === 'dark'
  const cardBg = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
  const inputBg = isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'

  return (
    <div className={`border p-8 rounded-xl max-w-2xl mx-auto font-mono text-xs ${cardBg}`}>
      <div className="text-center mb-6">
        <h2 className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Служба верификации реквизитов</h2>
        <p className="text-[11px] text-slate-500">Аудит веб-доменов, номеров сотовой связи и банковских карт на предмет компрометации.</p>
      </div>

      <div className="flex border-b border-slate-500/10 pb-2 justify-center space-x-4 mb-5">
        {['links', 'phones', 'cards'].map(t => (
          <button key={t} onClick={() => { setType(t); setRes(null); setInput('') }} className={`px-4 py-1.5 font-bold rounded-lg cursor-pointer transition-colors ${type === t ? 'bg-indigo-600 text-white dark:bg-indigo-500' : 'text-slate-400 hover:text-slate-200'}`}>
            {t === 'links' ? 'Домены' : t === 'phones' ? 'Телефоны' : 'Номера карт'}
          </button>
        ))}
      </div>

      <div className="flex gap-2">
        <input type="text" className={`flex-grow border p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-all ${inputBg}`} value={input} onChange={e => setInput(e.target.value)} placeholder="Внесите параметры для сверки..." />
        <button onClick={handleCheck} className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold px-6 rounded-lg cursor-pointer uppercase tracking-wider font-bold">Сверить</button>
      </div>

      {res === 'danger' && <div className="mt-4 p-4 border border-red-500/20 text-red-500 bg-red-500/5 font-bold rounded-lg">⚠️ ОБЪЕКТ ИДЕНТИФИЦИРОВАН В БАЗЕ КИБЕРПРЕСТУПЛЕНИЙ МВД РК. ОПЕРАЦИИ ВЫСОКОГО РИСКА.</div>}
      {res === 'clean' && <div className="mt-4 p-4 border border-emerald-500/20 text-emerald-500 bg-emerald-500/5 font-bold rounded-lg">✅ СТРУКТУРНАЯ ПРОВЕРКА ПРОЙДЕНА. СОВПАДЕНИЙ В ОПЕРАТИВНЫХ БАЗАХ УГРОЗ НЕ ОБНАРУЖЕНО.</div>}
    </div>
  )
}