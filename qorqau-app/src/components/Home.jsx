import React from 'react'

export default function Home({ setActiveTab, theme }) {
  const isDark = theme === 'dark'
  const cardBg = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
  const widgetStyle = isDark ? 'bg-slate-950/50' : 'bg-slate-50'

  const metrics = [
    { title: "ИТ-ИНЦИДЕНТЫ ЗА СУТКИ", val: "4,821 КЕЙСОВ" },
    { title: "ФИШИНГ-СПИСОК АФМ", val: "312 ДОМЕНОВ" },
    { title: "ЗАМОРОЖЕНО КАРТ МУЛОВ", val: "1,249 СЧЕТОВ" },
    { title: "ПРАВОВЫЕ АКТЫ В ОВД", val: "8,432 ДОКУМЕНТА" }
  ]

  return (
    <div className="space-y-6 font-mono text-xs">
      <div className={`border p-8 rounded-xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 ${cardBg}`}>
        <div className="space-y-2 max-w-3xl">
          <div className="text-[10px] font-bold tracking-widest text-indigo-500 dark:text-indigo-400">РЕСПУБЛИКА КАЗАХСТАН // LAWTECH PLATFORM</div>
          <h1 className={`text-xl md:text-2xl font-black tracking-tight font-sans ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Секьюритизация цифровых и правовых процессов гражданского порядка
          </h1>
          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Автоматизированный комплекс QORQAU агрегирует паттерны киберугроз социальной инженерии, проводит математический скоринг подозрительной активности карт и компилирует иски согласно действующему законодательству РК.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto shrink-0">
          <button onClick={() => setActiveTab('sos')} className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold px-5 py-3 rounded-lg transition-colors cursor-pointer text-center uppercase tracking-wider text-[11px]">
            ИИ-ЮРИСТ
          </button>
          <button onClick={() => setActiveTab('dropper')} className="bg-transparent text-indigo-600 dark:text-indigo-400 border border-solid border-indigo-600 dark:border-indigo-500 hover:bg-indigo-500/10 font-bold px-5 py-3 rounded-lg transition-colors cursor-pointer text-center uppercase tracking-wider text-[11px]">
            ДРОППЕР-РАДАР
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className={`border p-5 rounded-lg flex flex-col justify-between ${cardBg}`}>
            <div className="text-[10px] text-slate-400 font-bold tracking-wider">{m.title}</div>
            <div className={`text-lg font-black font-sans mt-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{m.val}</div>
          </div>
        ))}
      </div>

      <div className={`border p-6 rounded-xl space-y-4 ${cardBg}`}>
        <div className="flex justify-between items-center border-b pb-2 border-slate-500/10 text-[10px] font-bold tracking-widest text-slate-400">
          <span>СИНХРОННЫЙ ЛОГ МОНИТОРИНГА СИСТЕМЫ</span>
          <span className="text-indigo-500 dark:text-indigo-400 animate-pulse">● LIVE LISTENING</span>
        </div>
        <div className="space-y-2 text-[11px]">
          <div className={`p-3 rounded-lg flex justify-between ${widgetStyle}`}>
            <span className="text-slate-400 font-sans">Автоматическая блокировка фишингового узла подмены АО "Казпочта"</span>
            <span className="text-red-500 font-bold">TERMINATED</span>
          </div>
          <div className={`p-3 rounded-lg flex justify-between ${widgetStyle}`}>
            <span className="text-slate-400 font-sans">Корреляция каскадных P2P транзакций по признакам дропперства</span>
            <span className="text-indigo-500 dark:text-indigo-400 font-bold">RISK_DETECTED</span>
          </div>
        </div>
      </div>
    </div>
  )
}