import React from 'react'

export default function Navbar({ activeTab, setActiveTab, theme, setTheme, user, setUser }) {
  const isDark = theme === 'dark'
  const navItems = [
    { id: 'home', label: 'ГЛАВНАЯ' },
    { id: 'sos', label: 'ИИ-ЮРИСТ' },
    { id: 'dropper', label: 'ДРОППЕР-РАДАР' },
    { id: 'checker', label: 'ПРОВЕРКА РЕКВИЗИТОВ' },
    { id: 'generator', label: 'КОНСТРУКТОР' },
    { id: 'hub', label: 'НОРМАТИВНАЯ БАЗА' }
  ]

  return (
    <header className={`border-b sticky top-0 z-50 transition-colors duration-150 ${
      isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2 cursor-pointer select-none" onClick={() => setActiveTab('home')}>
          <span className="text-base font-black tracking-widest font-display text-indigo-500 dark:text-indigo-400">QORQAU</span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6 text-[11px] font-bold tracking-wider">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`py-1 cursor-pointer transition-colors relative ${
                activeTab === item.id 
                  ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <button onClick={() => setTheme(isDark ? 'light' : 'dark')} className="text-[10px] font-bold tracking-widest text-slate-400 hover:text-slate-600 cursor-pointer">
            {isDark ? 'LIGHT_MODE' : 'DARK_MODE'}
          </button>
          
          {user ? (
            <div className="flex items-center space-x-4 font-mono text-xs">
              <span className="opacity-60">{user.email}</span>
              <button onClick={() => setUser(null)} className="font-bold underline text-indigo-500 cursor-pointer">ВЫХОД</button>
            </div>
          ) : (
            <button 
              onClick={() => setActiveTab('auth')} 
              className="text-xs font-bold tracking-wider px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors cursor-pointer"
            >
              АВТОРИЗАЦИЯ
            </button>
          )}
        </div>
      </div>
    </header>
  )
}