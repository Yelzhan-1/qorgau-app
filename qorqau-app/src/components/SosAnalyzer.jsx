import React, { useState } from 'react'

const INCIDENTS_REGISTRY = {
  kaspi: {
    title: "Телефонное мошенничество (Социальная инженерия)",
    text: "Звонок в мессенджере со скрытого номера под видом сотрудника департамента безопасности Национального банка. Сообщение о критической компрометации счетов и требование перевода средств на временный безопасный ячейковый счёт через AnyDesk.",
    severity: "КРИТИЧЕСКИЙ РИСК",
    severityClass: "text-red-500 bg-red-500/5 border-red-500/20",
    techReport: "Вектор атаки: Voice Phishing (Vishing). Использование психологического давления и техник подмены авторитета для удалённого управления устройством в обход банковских систем фрод-мониторинга.",
    legalReport: "Квалификация: ст. 190 Уголовного кодекса РК (Мошенничество посредством информационных систем). Подлежит регистрации в ЕРДР.",
    documentText: "Начальнику Департамента полиции РК\n\nЗАЯВЛЕНИЕ\n\nНастоящим уведомляю, что 29 июня 2026 года неустановленные лица совершили попытку хищения денежных средств с моих банковских счетов под видом сотрудников монетарного регулятора. Руководствуясь статьей 181 УПК РК, прошу возбудить досудебное расследование по статье 190 УК РК."
  },
  olx: {
    title: "Фишинговые шлюзы под видом служб доставки",
    text: "Получение сторонней гиперссылки в обход официального чата OLX. Страница имитирует интерфейс авторизации АО 'Казпочта' и запрашивает CVV/CVC код под предлогом зачисления оплаты за проданный товар.",
    severity: "ВЫСОКИЙ РИСК",
    severityClass: "text-amber-500 bg-amber-500/5 border-amber-500/20",
    techReport: "Вектор атаки: Web Phishing / Typosquatting. Несанкционированный перехват конфиденциальных реквизитов карты (PAN, CVC) на фальсифицированном платёжном шлюзе.",
    legalReport: "Квалификация: ст. 190 ч. 2 п. 4 УК РК. Преступное деяние, направленное на хищение чужого имущества путём обмана пользователей информационных систем.",
    documentText: "В Районное Управление Полиции ОВД РК\n\nЗАЯВЛЕНИЕ\n\nПрошу провести проверку и заблокировать фишинговый интернет-ресурс, замаскированный под официальный сервис АО 'Казпочта', организованный с целью кражи конфиденциальных данных платежных карт граждан РК."
  }
}

export default function SosAnalyzer({ theme }) {
  const [sosInput, setSosInput] = useState('')
  const [sosStatus, setSosStatus] = useState('idle')
  const [sosData, setSosData] = useState(null)

  const handleAnalyze = (id) => {
    let target = INCIDENTS_REGISTRY[id] || { title: "Индивидуальный разбор", text: sosInput, severity: "АНАЛИЗ", severityClass: "text-indigo-400 bg-indigo-500/5 border-indigo-500/20", tech: "Потоковый семантический анализ текста на паттерны социальной инженерии.", legal: "Классификация по ст. 190 УК РК. Требуется верификация следственной группы.", documentText: `В Полицию РК\n\nЗАЯВЛЕНИЕ: ${sosInput}` }
    if (INCIDENTS_REGISTRY[id]) setSosInput(target.text)

    setSosStatus('loading')
    setTimeout(() => {
      setSosData(target)
      setSosStatus('done')
    }, 800)
  }

  const isDark = theme === 'dark'
  const cardBg = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
  const inputBg = isDark ? 'bg-slate-950 text-white border-slate-800' : 'bg-slate-50 border-slate-300 text-slate-900'

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono text-xs">
      <div className="lg:col-span-5 flex flex-col space-y-4">
        <div className={`border p-6 rounded-xl flex flex-col justify-between ${cardBg}`}>
          <div>
            <h2 className="text-xs uppercase tracking-wider mb-3 font-bold text-slate-400">Параметры входящего инцидента</h2>
            <textarea rows="4" className={`w-full border p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none ${inputBg}`} placeholder="Опишите хронологию инцидента..." value={sosInput} onChange={e => setSosInput(e.target.value)} />
          </div>
          <button onClick={() => handleAnalyze('custom')} className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-colors cursor-pointer uppercase">
            Запустить ИИ-экспертизу
          </button>
        </div>

        <div className={`border p-6 rounded-xl flex-grow ${cardBg}`}>
          <h2 className="text-xs uppercase tracking-wider mb-3 font-bold text-slate-400">Типовые киберугрозы в РК</h2>
          <div className="space-y-2">
            {Object.keys(INCIDENTS_REGISTRY).map(key => (
              <div key={key} onClick={() => handleAnalyze(key)} className={`border p-3 rounded-lg cursor-pointer transition-all ${inputBg} ${isDark ? 'hover:border-slate-700' : 'hover:border-slate-400'}`}>
                {INCIDENTS_REGISTRY[key].title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className={`border p-6 rounded-xl h-full min-h-[440px] flex flex-col justify-between ${cardBg}`}>
          <div>
            <h2 className="text-xs uppercase tracking-wider border-b pb-3 mb-4 border-slate-500/10 text-slate-400">Протокол автоматического разбора</h2>
            {sosStatus === 'idle' && <div className="py-20 text-center text-slate-500">Ожидание ввода параметров инцидента...</div>}
            {sosStatus === 'loading' && <div className="py-20 text-center text-indigo-500 animate-pulse">Инициализация экспертных модулей...</div>}
            {sosStatus === 'done' && sosData && (
              <div className="space-y-4">
                <div className={`border p-4 rounded-lg ${inputBg}`}>
                  <div className="flex justify-between items-center mb-2 border-b pb-1 border-slate-500/10">
                    <span className="text-indigo-500 dark:text-indigo-400 font-bold">1. ТЕХНИЧЕСКИЙ ВЕКТОР</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 border rounded ${sosData.severityClass}`}>{sosData.severity}</span>
                  </div>
                  <p className="font-sans leading-relaxed text-slate-300">{sosData.techReport}</p>
                </div>
                <div className={`border p-4 rounded-lg ${inputBg}`}>
                  <div className="text-indigo-500 dark:text-indigo-400 font-bold mb-2 border-b pb-1 border-slate-500/10">2. ЮРИДИЧЕСКАЯ КВАЛИФИКАЦИЯ</div>
                  <p className="font-sans leading-relaxed text-slate-300 mb-3">{sosData.legalReport}</p>
                  <textarea readOnly rows="4" className="w-full bg-black/20 p-3 text-slate-400 border border-slate-500/10 text-xs resize-none focus:outline-none rounded" value={sosData.documentText} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}