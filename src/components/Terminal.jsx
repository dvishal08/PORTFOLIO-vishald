import React, { useState, useEffect, useRef } from 'react';

export default function Terminal({ autoStart = true }) {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  const initialCommands = [
    { cmd: 'whoami', output: 'ꪜⅈડꫝꪖꪶ D' },
    { cmd: 'role', output: 'Full Stack Developer' },
    { cmd: 'department', output: 'Computer Science Engineering' },
    { cmd: 'college', output: 'Sri Ramakrishna Polytechnic College' },
    { cmd: 'focus', output: 'Web Development + UI/UX + Problem Solving' },
    { cmd: 'status', output: 'Learning • Building • Improving' },
    { cmd: 'mission', output: 'Build useful digital solutions.' }
  ];

  useEffect(() => {
    if (!autoStart) return;
    let isMounted = true;
    setIsTyping(true);
    setHistory([]);

    const runSequence = async () => {
      for (let i = 0; i < initialCommands.length; i++) {
        if (!isMounted) break;
        await new Promise((res) => setTimeout(res, 350));
        if (!isMounted) break;
        setHistory((prev) => [...prev, initialCommands[i]]);
      }
      if (isMounted) setIsTyping(false);
    };

    runSequence();
    return () => {
      isMounted = false;
    };
  }, [autoStart]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isTyping]);

  const handleCommand = (commandStr) => {
    const cleanCmd = commandStr.trim().toLowerCase();
    let response = '';

    switch (cleanCmd) {
      case 'whoami':
        response = 'ꪜⅈડꫝꪖꪶ D';
        break;
      case 'role':
        response = 'Full Stack Developer';
        break;
      case 'department':
        response = 'Computer Science Engineering (CSE)';
        break;
      case 'college':
        response = 'Sri Ramakrishna Polytechnic College';
        break;
      case 'focus':
        response = 'Web Development + UI/UX + Problem Solving';
        break;
      case 'status':
        response = 'Learning • Building • Improving';
        break;
      case 'mission':
        response = 'Build useful digital solutions.';
        break;
      case 'skills':
        response = 'Frontend: React, Tailwind CSS, JS | Backend: Node.js, Express | DB: MySQL, MongoDB, Supabase, Postgres | Prog: Java, Python, C';
        break;
      case 'projects':
        response = '1. MediVerse (Smart Medicine Platform) | 2. Uzhavar Sandhai (Live: https://uzhavar-santhai-eight.vercel.app/) | 3. Online Shopping Cart (E-Commerce) | 4. Real-Time Chat';
        break;
      case 'contact':
        response = 'Let\'s connect! Scroll to #contact section or email dvishal1145@gmail.com';
        break;
      case 'email':
        response = 'Email: dvishal1145@gmail.com';
        break;
      case 'linkedin':
        response = 'LinkedIn: https://www.linkedin.com/in/d-vishal-b91728372';
        break;
      case 'socials':
        response = 'LinkedIn: https://www.linkedin.com/in/d-vishal-b91728372 | GitHub: https://github.com/Vishal-1 | Email: dvishal1145@gmail.com';
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'help':
        response = 'Available commands: whoami, role, department, college, focus, status, mission, skills, projects, contact, email, linkedin, socials, clear';
        break;
      default:
        if (cleanCmd === '') return;
        response = `Command not recognized: "${cleanCmd}". Type "help" for available commands.`;
        break;
    }

    setHistory((prev) => [...prev, { cmd: cleanCmd, output: response }]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="w-full bg-slate-950/90 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 overflow-hidden font-mono text-xs sm:text-sm backdrop-blur-xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
          <span className="ml-2 text-slate-400 text-xs font-semibold tracking-wide">
            vishal@dev-terminal:~
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span className="px-2 py-0.5 rounded bg-slate-800 border border-white/5">zsh</span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">LIVE</span>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-4 sm:p-6 space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        <div className="text-slate-400 text-xs mb-2">
          // Type commands below or click quick action buttons (try: <span className="text-cyan-400">help</span>, <span className="text-cyan-400">skills</span>, <span className="text-cyan-400">projects</span>)
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-slate-400">$</span>
              <span className="font-semibold">{item.cmd}</span>
            </div>
            <div className="text-slate-200 pl-4 border-l-2 border-cyan-500/40 py-0.5 leading-relaxed">
              {item.output}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-cyan-400 animate-pulse">
            <span className="text-slate-400">$</span>
            <span>typing...</span>
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
          <span className="text-cyan-400">$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type a command..."
            className="flex-1 bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 font-mono text-xs sm:text-sm focus:ring-0"
          />
          <button
            type="submit"
            className="px-2.5 py-1 text-[11px] rounded bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30 transition-colors"
          >
            Run
          </button>
        </form>

        <div ref={bottomRef} />
      </div>

      {/* Quick Command Pills */}
      <div className="px-4 py-3 bg-slate-900/60 border-t border-white/5 flex flex-wrap items-center gap-2 text-[11px]">
        <span className="text-slate-400">Quick run:</span>
        {['whoami', 'role', 'skills', 'projects', 'contact', 'clear'].map((btnCmd) => (
          <button
            key={btnCmd}
            onClick={() => handleCommand(btnCmd)}
            className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-300 border border-white/10 transition-colors"
          >
            ${btnCmd}
          </button>
        ))}
      </div>
    </div>
  );
}
