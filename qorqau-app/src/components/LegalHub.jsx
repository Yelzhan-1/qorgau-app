import React, { useState } from 'react'

export default function LegalHub({ theme }) {
  const [open, setOpen] = useState(null)
  const isDark = theme === 'dark'
  const cardBg = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
  const inputBg = isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'

  return (
    <div className="space-y-6 font-mono text-xs">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Защита интересов в ОВД РК", "Оспаривание займов в МФО", "Реестр подразделений Киберпол"].map((title, i) => (
          <div key={i} className={`border p-5 rounded-xl flex flex-col justify-between ${cardBg}`}>
            <div>
              <span className="text-[9px] text-indigo-500 dark:text-indigo-400 font-bold uppercase tracking-wider">Нормативный акт</span>
              <h3 className="text-xs font-bold mt-1 text-slate-300">{title}</h3>
              <p className="text-[11px] text-slate-500 mt-2 font-sans leading-relaxed">Официальный гайдлайн по ведению разбирательств в юридическом поле Казахстана.</p>
            </div>
            <button onClick={() => alert('Спецификация загружена')} className="mt-4 bg-slate-500/10 hover:bg-slate-500/20 py-2 rounded-lg font-bold transition-colors text-center w-full text-slate-300 cursor-pointer uppercase">Выгрузить акт</button>
          </div>
        ))}
      </div>

      <div className={`border p-6 rounded-xl ${cardBg}`}>
        <h3 className="text-slate-400 font-bold uppercase tracking-wider mb-4 border-b pb-2 border-slate-500/10 text-xs font-mono">Справочно-нормативный консалтинг (FAQ)</h3>
        <div className="space-y-2">
          {[
            { q: "Экстренный протокол действий при компрометации счетов", a: "1. Мгновенная инициализация блокировки карт через банковские интерфейсы.\n2. Фиксация логов входящих звонков, номеров транзакций и скриншотов диалогов." },
            { q: "Диспозиция и санкции статьи 190 Уголовного Кодекса РК", a: "В зависимости от квалифицирующих признаков наказание варьируется от крупных штрафов до лишения свободы на срок от 3 до 7 лет с конфискацией имущества." }
          ].map((faq, i) => (
            <div key={i} className={`border rounded-lg transition-colors ${inputBg} ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <div onClick={() => setOpen(open === i ? null : i)} className="p-4 flex justify-between items-center cursor-pointer select-none">
                <span className="font-bold text-xs">{faq.q}</span>
                <span className="text-xs">{open === i ? '▲' : '▼'}</span>
              </div>
              {open === i && <div className="p-4 pt-0 text-slate-400 leading-relaxed border-t border-slate-500/10 whitespace-pre-line font-sans">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}