import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Cpu, 
  Zap, 
  User, 
  Layers, 
  BookOpen
} from 'lucide-react';

type SkillLevel = 'Udh Bisa' | 'Lumayan Bisa' | 'Belajar';

interface Skill {
  name: string;
  level: SkillLevel;
}

interface Profile {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: Skill[];
  accentColor: string;
}

const profiles: Profile[] = [
  {
    id: 'avin',
    name: 'Avin',
    role: 'Full Stack Developer',
    bio: 'Halo Bang.',
    accentColor: '#6366f1', 
    skills: [
      { name: 'React', level: 'Udh Bisa' },
      { name: 'TypeScript', level: 'Udh Bisa' },
      { name: 'Tailwind CSS', level: 'Udh Bisa' },
      { name: 'JavaScript', level: 'Udh Bisa' },
      { name: 'HTML & CSS', level: 'Udh Bisa' },
      { name: 'Python', level: 'Udh Bisa' },
      { name: 'C#', level: 'Udh Bisa' },
      { name: 'C++', level: 'Udh Bisa' },
      { name: 'Golang', level: 'Belajar' },
    ]
  },
  {
    id: 'apen',
    name: 'Apen',
    role: 'Software Engineer',
    bio: 'Apen Raja Iblis.',
    accentColor: '#8b5cf6', 
    skills: [
      { name: 'C++', level: 'Udh Bisa' },
      { name: 'C#', level: 'Udh Bisa' },
      { name: 'Python', level: 'Udh Bisa' },
      { name: 'CSS', level: 'Udh Bisa' },
      { name: 'Java', level: 'Lumayan Bisa' },
      { name: 'HTML', level: 'Belajar' },
      { name: 'JavaScript', level: 'Lumayan Bisa' },
    ]
  }
];

const Background = ({ accentColor }: { accentColor: string }) => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#030305]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,0.7),_rgba(5,5,5,1))]"></div>
    {}
    <div 
      className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-20 animate-blob mix-blend-screen"
      style={{ backgroundColor: accentColor, animationDelay: '0s' }}
    />
    <div 
      className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-20 animate-blob mix-blend-screen"
      style={{ backgroundColor: '#3b82f6', animationDelay: '2s' }} 
    />
    <div 
      className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full blur-[100px] opacity-20 animate-blob mix-blend-screen"
      style={{ backgroundColor: accentColor, animationDelay: '4s' }}
    />
  </div>
);

const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
  const levelColor = {
    'Udh Bisa': 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.4)]',
    'Lumayan Bisa': 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.4)]',
    'Belajar': 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.4)]'
  }[skill.level];

  return (
    <div 
      className="group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.05] p-4 rounded-xl flex items-center justify-between hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1"
      style={{ 
        animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
        animationDelay: `${100 + (index * 50)}ms`,
        opacity: 0,
        transform: 'translateY(20px)' 
      }}
    >
      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
        {skill.name}
      </span>
      <div className="flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-wider text-slate-600 font-bold group-hover:text-slate-400 transition-colors">
          {skill.level}
        </span>
        <div className={`w-2 h-2 rounded-full ${levelColor} transition-transform duration-500 group-hover:scale-125`} />
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('avin');
  const [isSwitching, setIsSwitching] = useState(false);
  const current = profiles.find(p => p.id === activeTab)!;

  const handleTabChange = (id: string) => {
    if (activeTab === id) return;
    setIsSwitching(true);
    setTimeout(() => {
      setActiveTab(id);
      setIsSwitching(false);
    }, 200); 
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans antialiased selection:bg-white/20">
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>

      <Background accentColor={current.accentColor} />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 lg:py-24">
        
        {}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="animate-[fadeInUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-xl text-[11px] font-semibold tracking-wider text-slate-400 mb-6 shadow-xl">
              <Terminal size={12} className="text-white" />
              <span>ENGINEERING PORTFOLIO</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 leading-[0.9]">
              Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 italic font-light">Showcase</span>
            </h1>
          </div>

          {}
          <div className="bg-black/20 backdrop-blur-2xl border border-white/[0.08] p-1.5 rounded-2xl flex relative animate-[fadeInUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            {profiles.map((p) => (
              <button
                key={p.id}
                onClick={() => handleTabChange(p.id)}
                className={`relative px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 z-10 ${
                  activeTab === p.id ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {p.name}
                {}
                {activeTab === p.id && (
                  <div 
                    className="absolute inset-0 bg-white/[0.1] border border-white/[0.05] rounded-xl -z-10 shadow-lg"
                    style={{ transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {}
        <div 
          className={`transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
            isSwitching ? 'opacity-0 scale-[0.98] translate-y-4' : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          {}
          <div key={activeTab} className="grid grid-cols-1 md:grid-cols-12 gap-5">
            
            {}
            <div className="md:col-span-7 bg-[#111] bg-opacity-40 backdrop-blur-xl border border-white/[0.08] p-8 rounded-[2rem] flex flex-col justify-between group hover:border-white/[0.15] transition-colors duration-500 shadow-2xl relative overflow-hidden">
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(600px circle at top right, ${current.accentColor}15, transparent 40%)` }} 
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/[0.1] to-white/[0.02] border border-white/[0.1] flex items-center justify-center relative z-10">
                      <User className="text-white" size={32} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{current.name}</h2>
                    <div className="inline-block px-3 py-1 rounded-lg bg-white/[0.05] border border-white/[0.05]">
                      <p className="text-xs font-mono tracking-wide text-slate-300">
                        {current.role}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
                  "{current.bio}"
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/[0.05] relative z-10">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase text-slate-600 font-bold tracking-widest block">Current Status</span>
                  <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 w-fit px-3 py-1.5 rounded-lg border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold">Aktif Belajar</span>
                  </div>
                </div>
              </div>
            </div>

            {}
            <div className="md:col-span-5 flex flex-col gap-5">
              <div 
                className="flex-1 bg-gradient-to-br from-indigo-500/[0.05] to-purple-500/[0.05] backdrop-blur-xl border border-white/[0.08] p-8 rounded-[2rem] hover:border-indigo-500/30 transition-all duration-500 relative group overflow-hidden"
              >
                 <div className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-500/20 rounded-full blur-[80px] group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
                 
                 <div className="relative z-10 h-full flex flex-col justify-between">
                   <div>
                    <Zap className="text-indigo-400 mb-4" size={28} />
                    <h3 className="text-xl font-bold text-white mb-2">Teknologi Utama</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      Stack andalan sehari-hari.
                    </p>
                   </div>
                   
                   <div className="flex flex-wrap gap-2">
                    {current.skills.filter(s => s.level === 'Udh Bisa').slice(0, 4).map(s => (
                      <span key={s.name} className="px-3 py-1.5 bg-[#1a1a1a] text-slate-200 text-xs font-medium rounded-lg border border-white/10 shadow-sm">
                        {s.name}
                      </span>
                    ))}
                   </div>
                 </div>
              </div>

              {}
              <div className="bg-[#111]/40 backdrop-blur-xl border border-white/[0.08] p-6 rounded-[2rem] flex items-center justify-between gap-4">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Focus</h4>
                      <p className="text-xs text-slate-500">Learning Path</p>
                    </div>
                 </div>
                 <div className="text-right">
                    {current.skills.filter(s => s.level === 'Belajar').length > 0 ? (
                       <span className="text-sm text-slate-300 font-medium">
                         {current.skills.find(s => s.level === 'Belajar')?.name}
                       </span>
                    ) : (
                      <span className="text-xs text-slate-500 italic">Exploring...</span>
                    )}
                 </div>
              </div>
            </div>

            {/* Full Skills Grid */}
            <div className="md:col-span-12 mt-4">
              <div className="flex items-center gap-3 mb-6 px-2">
                <Layers size={16} className="text-slate-500" />
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">All Capabilities</h3>
                <div className="h-px bg-white/[0.08] flex-1"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {current.skills.map((skill, idx) => (
                  <SkillCard key={skill.name} skill={skill} index={idx} />
                ))}
              </div>
            </div>

          </div>
        </div>

        <footer className="mt-24 text-center">
          <p className="text-[10px] text-slate-600 font-medium tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
            Built with React & Tailwind
          </p>
        </footer>
      </main>
    </div>
  );
}