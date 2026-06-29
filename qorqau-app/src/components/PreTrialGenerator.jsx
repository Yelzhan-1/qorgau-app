import React, { useState } from 'react'

export default function PreTrialGenerator({ theme }) {
  const [form, setForm] = useState({ name: '', iin: '', sum: '', bank: '' })
  const [doc, setDoc] = useState('')

  const handleBuild = () => {
    if (!form.name || !form.iin || !form.sum) return
    setDoc(`В Следственный отдел Управления Полиции РК\n\nЗАЯВИТЕЛЬ: ${form.name}\nИИН: ${form.iin}\n\nЗАЯВЛЕНИЕ\n\nНастоящим сообщаю, что в отношении моих активов были совершены мошеннические действия. Путем обмана пользователей информационных систем, злоумышленники осуществили несанкционированный вывод денежных средств в размере ${form.sum} тенге со счета в ${form.bank || 'АО Kaspi Bank'}.\n\nНа основании изложенного и руководствуясь статьей 190 УК РК, ПРОШУ зарегистрировать настоящее обращение в ЕРДР.`)
  }

  const isDark = theme === 'dark'
  const cardBg = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
  const inputBg = isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'

  return (
    <div className={`border p-6 rounded-xl grid grid-cols-1 lg:grid-cols-12 gap-6 font-mono text-xs ${cardBg}`}>
      <div className="lg:col-span-5 space-y-3">
        <div className="text-slate-400 font-bold uppercase tracking-wider mb-2">Параметры правового обращения</div>
        <input type="text" className={`w-full border p-3 rounded-lg focus:outline-none focus:border-indigo-500 ${inputBg}`} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="ФИО пострадавшего полностью *" />
        <input type="text" className={`w-full border p-3 rounded-lg focus:outline-none focus:border-indigo-500 ${inputBg}`} value={form.iin} onChange={e => setForm({...form, iin: e.target.value})} placeholder="12-значный ИИН *" maxLength="12" />
        <input type="number" className={`w-full border p-3 rounded-lg focus:outline-none focus:border-indigo-500 ${inputBg}`} value={form.sum} onChange={e => setForm({...form, sum: e.target.value})} placeholder="Сумма материального ущерба *" />
        <input type="text" className={`w-full border p-3 rounded-lg focus:outline-none focus:border-indigo-500 ${inputBg}`} value={form.bank} onChange={e => setForm({...form, bank: e.target.value})} placeholder="Финансовая организация (например: Kaspi Bank)" />
        <button onClick={handleBuild} className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold py-3 rounded-lg transition-colors cursor-pointer uppercase tracking-wider font-bold">
          Скомпилировать заявление
        </button>
      </div>
      <div className="lg:col-span-7 flex flex-col">
        <div className="text-slate-400 font-bold uppercase tracking-wider mb-2">Выгрузка процессуального документа</div>
        <textarea readOnly className="w-full flex-grow bg-black/10 border p-4 text-[11px] text-slate-400 rounded-xl resize-none min-h-[260px] border-slate-500/10 focus:outline-none leading-relaxed" value={doc} placeholder="Заполните параметры спецификации слева..." />
      </div>
    </div>
  )
}