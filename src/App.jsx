import React, { useState } from 'react';
import { Mail, KeyRound, Crosshair, Youtube, MessageCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${activeTab === 'signin' ? 'Signing in' : 'Creating account'} for ${email}`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden select-none bg-[#050505] text-white">
      {/* Background Canvas Effect */}
      <canvas className="fixed inset-0 w-full h-full -z-10 bg-[#050505] pointer-events-none" />
      
      {/* Scanline Overlay */}
      <div className="fixed inset-0 scanline pointer-events-none opacity-30" />

      {/* Animated Bullet Trails */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[15%] left-0 w-20 h-[2.5px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent rounded-full shadow-[0_0_12px_#eab308] animate-bullet-1" />
        <div className="absolute top-[45%] left-0 w-28 h-[2.5px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent rounded-full shadow-[0_0_15px_#eab308] animate-bullet-2" />
        <div className="absolute top-[75%] left-0 w-20 h-[2.5px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-transparent rounded-full shadow-[0_0_12px_#eab308] animate-bullet-3" />
      </div>

      {/* Left Character (Hayato) */}
      <div className="hidden lg:block absolute left-[3%] bottom-[5%] w-[350px] h-[350px] z-10 select-none animate-entrance-left">
        <div className="w-full h-full animate-float-slow">
          <div className="relative w-full h-full pointer-events-auto cursor-crosshair group/hayato">
            <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-[80px]" />
            <img
              src="/images/freefire_left.png"
              alt="Free Fire Hayato Character"
              className="w-full h-full object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)] char-left-interactive"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/hayato:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="w-48 h-48 border-t-4 border-b-4 border-yellow-400 rounded-full blur-[1px] animate-sword-slash relative shadow-[0_0_30px_#eab308]">
                <div className="absolute inset-0 border-t-2 border-b-2 border-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Character (Kelly) */}
      <div className="hidden lg:block absolute right-[3%] bottom-[5%] w-[350px] h-[350px] z-10 select-none animate-entrance-right">
        <div className="w-full h-full animate-float-reverse">
          <div className="relative w-full h-full pointer-events-auto cursor-crosshair group/kelly">
            <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-[80px]" />
            <img
              src="/images/freefire_right.png"
              alt="Free Fire Kelly Character"
              className="w-full h-full object-contain mix-blend-screen opacity-90 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] char-right-interactive"
            />
            <div className="absolute top-[35%] left-[25%] w-12 h-12 bg-yellow-400 rounded-full blur-[1px] opacity-0 group-hover/kelly:opacity-100 transition-opacity duration-100 pointer-events-none animate-muzzle-flash shadow-[0_0_25px_#eab308]">
              <div className="absolute inset-2 bg-white rounded-full" />
            </div>
            <div className="absolute top-[38%] left-0 w-[120px] h-[1.5px] bg-gradient-to-r from-yellow-400 to-transparent shadow-[0_0_8px_#eab308] opacity-0 group-hover/kelly:opacity-100 transition-opacity duration-150 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Radial Ambient Glow Center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-500/10 to-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDuration: '6s' }}
      />

      {/* Main Glassmorphic Cyber Card */}
      <div className="w-full max-w-sm rounded-2xl p-8 relative border border-yellow-500/30 bg-[#09090b]/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(234,179,8,0.15)] transition-all duration-300 overflow-hidden z-20">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-500" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-500" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-500" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-500" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent animate-scan-up pointer-events-none" />

        {/* Card Header & Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full p-1 mb-3">
            <div className="absolute inset-0 rounded-full border border-dashed border-yellow-500/50 animate-spin" style={{ animationDuration: '16s' }} />
            <div className="absolute inset-1.5 rounded-full border border-dotted border-purple-500/30 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
            <div className="w-20 h-20 rounded-full overflow-hidden border border-yellow-500/40 shadow-[0_0_15px_rgba(234,179,8,0.4)] relative bg-black/50">
              <img src="/images/vali_mods_logo.jpg" alt="VALI MODS Logo" className="w-full h-full object-cover scale-105 hover:scale-115 transition-transform duration-300" />
            </div>
          </div>
          <h1 className="text-xl font-black tracking-[0.1em] text-white text-glow-yellow flex items-center gap-1.5 font-mono uppercase animate-pulse">
            VALI MODS <span className="text-yellow-500 font-sans">💀</span> PANEL
          </h1>
          <p className="text-[9px] text-zinc-500 tracking-[0.3em] font-mono mt-1 uppercase flex items-center gap-1">
            <Crosshair className="w-3 h-3 text-yellow-500/70" />
            Gaming reseller hub
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 mb-6">
          <a
            href="https://www.youtube.com/@VALIMODS786"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-950/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 hover:border-red-400 hover:text-white transition-all duration-300 text-[10px] font-mono font-semibold tracking-wider cursor-pointer shadow-[0_0_10px_rgba(239,68,68,0.15)]"
          >
            <Youtube className="w-3.5 h-3.5" />
            YOUTUBE
          </a>
          <a
            href="https://whatsapp.com/channel/0029Vb8Y7MyHbFUxcPtd0V3u"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 hover:border-emerald-400 hover:text-white transition-all duration-300 text-[10px] font-mono font-semibold tracking-wider cursor-pointer shadow-[0_0_10px_rgba(16,185,129,0.15)]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WHATSAPP
          </a>
        </div>

        {/* Sign in / Create Account Tab Selector */}
        <div className="flex p-1 rounded bg-[#050507] border border-yellow-950/45 mb-6 font-mono text-[10px]">
          <button
            type="button"
            onClick={() => setActiveTab('signin')}
            className={`flex-1 py-1.5 text-center rounded font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'signin'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.15)]'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            SIGN IN
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-1.5 text-center rounded font-semibold transition-all duration-300 cursor-pointer ${
              activeTab === 'register'
                ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.15)]'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            CREATE ACCOUNT
          </button>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono tracking-wider uppercase text-zinc-500 mb-1">
              Gmail Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-yellow-500/60 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="reseller@gmail.com"
                className="w-full bg-[#050507] border border-yellow-950/60 focus:border-yellow-500/70 focus:shadow-[0_0_10px_rgba(234,179,8,0.15)] rounded pl-9 pr-3 py-2 text-xs font-mono text-zinc-200 focus:outline-none placeholder-zinc-700 transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono tracking-wider uppercase text-zinc-500 mb-1">
              Password
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-yellow-500/60 pointer-events-none" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#050507] border border-yellow-950/60 focus:border-yellow-500/70 focus:shadow-[0_0_10px_rgba(234,179,8,0.15)] rounded pl-9 pr-3 py-2 text-xs font-mono text-zinc-200 focus:outline-none placeholder-zinc-700 transition-all duration-200"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full relative group flex items-center justify-center gap-3 py-2.5 px-4 rounded font-bold text-xs transition-all duration-300 border border-yellow-500/40 text-black bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 focus:outline-none disabled:opacity-50 cursor-pointer shadow-[0_0_15px_rgba(234,179,8,0.2)] hover:shadow-[0_0_25px_rgba(234,179,8,0.45)] active:scale-98 mt-6"
          >
            <span className="tracking-widest uppercase font-mono">LAUNCH RESELLER WORKSPACE</span>
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t-2 border-l-2 border-white/80" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b-2 border-r-2 border-white/80" />
          </button>
        </form>

        <div className="mt-4" />
        <div className="text-center mt-6 text-[9px] text-zinc-600 font-mono tracking-widest uppercase">
          © 2026 VALI MODS 💀 PANEL SYSTEM
        </div>
      </div>
    </div>
  );
}
