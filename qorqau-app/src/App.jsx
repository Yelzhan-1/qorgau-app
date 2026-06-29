import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Auth from './components/Auth'
import SosAnalyzer from './components/SosAnalyzer'
import ResourceChecker from './components/ResourceChecker'
import PreTrialGenerator from './components/PreTrialGenerator'
import LegalHub from './components/LegalHub'
import DropperRadar from './components/DropperRadar'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [theme, setTheme] = useState('dark')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  const isDark = theme === 'dark'
  const appBg = isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-150 ${appBg}`}>
      
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} setTheme={setTheme} user={user} setUser={setUser} />

      <main className="max-w-7xl w-full mx-auto px-6 py-8 flex-grow">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} theme={theme} />}
        {activeTab === 'auth' && <Auth setUser={setUser} setActiveTab={setActiveTab} theme={theme} />}
        {activeTab === 'sos' && <SosAnalyzer theme={theme} />}
        {activeTab === 'dropper' && <DropperRadar theme={theme} />}
        {activeTab === 'checker' && <ResourceChecker theme={theme} />}
        {activeTab === 'generator' && <PreTrialGenerator theme={theme} />}
        {activeTab === 'hub' && <LegalHub theme={theme} />}
      </main>

      <footer className={`border-t px-6 py-6 text-center text-[10px] tracking-widest font-mono ${
        isDark ? 'border-slate-800 text-slate-500 bg-slate-950' : 'border-slate-200 text-slate-400 bg-slate-50'
      }`}>
        QORQAU SECURE CORE SYSTEMS // LAWTECH PLATFORM РК // СБОРКА СТАБИЛЬНА
      </footer>
    </div>
  )
}