import React, { useState } from 'react'

export default function DropperRadar({ theme }) {
  const [account, setAccount] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleScan = () => {
    if (!account.trim()) return
    setLoading(true)
    setResult(null)
    setTimeout(() => {
      setResult({
        score: 91,
        status: "ВЫСОКИЙ ТРАНЗАКЦИОННЫЙ РИСК // КАРТА-МУЛ",
        formula: "Risk_Score = (750,000 KZT / 12 hrs) * 1.45 = 91%",
        action: "Передано в комплаенс-контроль банков второго уровня для превентивного ограничения сессий."
      })
      setLoading(false)
    }, 800)
  }

  const isDark = theme === 'dark'
  const cardBg = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
  const inputBg = isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-slate-50 border-slate-300 text-slate-900'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono text-xs">
      <div className={`lg:col-span-5 border p-6 rounded-xl space-y-4 ${cardBg}`}>
        <div className="text-slate-400 font-bold uppercase tracking-wider border-b pb-2 border-slate-500/10">Скоринг транзакционных аномалий</div>
        <div>
          <label className="text-[10px] text-slate-400 block mb-1">Номер карт-счета или ИИН подозреваемого</label>
          <input type="text" className={`w-full border p-3 rounded-lg focus:outline-none focus:border-indigo-500 ${inputBg}`} value={account} onChange={e => setAccount(e.target.value)} placeholder="Внесите реквизиты..." />
        </div>
        <button onClick={handleScan} className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-colors cursor-pointer uppercase">
          Сканировать поток счета
        </button>
      </div>

      <div className="lg:col-span-7">
        <div className={`border p-6 rounded-xl h-full min-h-[300px] flex flex-col justify-between ${cardBg}`}>
          <div>
            <div className="text-slate-400 font-bold uppercase tracking-wider border-b pb-2 border-slate-500/10 mb-4">Результат математического скоринга</div>
            {loading && <div className="py-12 text-center text-indigo-500 animate-pulse">Анализ блокчейн-нод и транзакционных выписок...</div>}
            {!loading && !result && <div className="py-12 text-center text-slate-500">Система готова к проведению векторизации...</div>}
            {!loading && result && (
              <div className="space-y-4">
                <div className="flex justify-between items-center border border-red-500/20 bg-red-500/5 p-4 rounded-lg text-red-500 font-bold">
                  <span>{result.status}</span>
                  <span className="text-xl font-sans font-black">91%</span>
                </div>
                <div className={`border p-3 rounded-lg ${inputBg}`}>
                  <div className="text-[9px] text-slate-400 mb-1">МАТЕМАТИЧЕСКАЯ ФОРМУЛА СКОРИНГА:</div>
                  <div className="text-indigo-500 dark:text-indigo-400 font-bold tracking-wide">{result.formula}</div>
                </div>
                <p className="font-sans text-slate-400 leading-relaxed"><strong>Предписание комплаенса:</strong> {result.action}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}