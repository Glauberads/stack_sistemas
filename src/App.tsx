import { useState } from 'react';
import { Play, CheckCircle2, ChevronDown, MonitorPlay, BarChart, Users, ChevronRight, MessageSquare, PlayCircle } from 'lucide-react';

const SENDER_COLOR = 'text-orange-500';
const SENDER_BG = 'bg-orange-500';

const SENDER_GLOW = 'group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]';

const SAAS_COLOR = 'text-emerald-500';
const SAAS_BG = 'bg-emerald-500';

const SAAS_GLOW = 'group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]';

const IA_COLOR = 'text-blue-500';
const IA_BG = 'bg-blue-500';

const IA_GLOW = 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]';

const WHATSAPP_LINK = "https://chat.whatsapp.com/BVhE8w0fW8qCNxBB4UACMN";

function App() {
  const handleJoinGroup = () => {
    window.open(WHATSAPP_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-200 font-sans selection:bg-blue-500/30">
      
      {/* HEADER / HERO */}
      <header className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#14161f] to-[#090a0f] -z-10" />
        
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-500/5 blur-[120px] -z-10 rounded-full" />
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-gray-300">LANÇAMENTO • STACK SISTEMAS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Três sistemas. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              Uma oportunidade para quem quer revender tecnologia.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Conheça o <span className="text-white font-medium">Stack Sender Pro</span>, o <span className="text-white font-medium">Stack SaaS</span> e o <span className="text-white font-medium">Stack IA</span>. Entre no grupo oficial para acompanhar as demonstrações, as novidades da revenda e as informações sobre seu próprio painel de licenças.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-3">
            <button 
              onClick={handleJoinGroup}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                QUERO ENTRAR NO GRUPO
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <span className="text-sm text-gray-500 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500/70" />
              Entrada gratuita no grupo de lançamento.
            </span>
          </div>
        </div>
      </header>

      {/* SYSTEMS SHOWCASE */}
      <section className="py-24 px-6 bg-[#0c0d13] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Conheça os sistemas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Três soluções robustas criadas para escalar operações, vendas e atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sender Pro */}
            <div className={`group relative bg-[#12141c] rounded-2xl p-8 border border-white/5 transition-all hover:bg-[#151822] hover:border-orange-500/30 ${SENDER_GLOW}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-bl-full blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-orange-500/10 ${SENDER_COLOR}`}>
                <MessageSquare className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                Stack Sender Pro
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/20">NOVO</span>
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Campanhas, prospecção, validação de números e recursos para grupos em uma única operação.
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-sm text-gray-300 mb-8 border border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Destaque: Status em Grupos com Anel Verde
              </div>
              
              <button onClick={() => document.getElementById('demo-sender')?.scrollIntoView({behavior: 'smooth'})} className={`flex items-center gap-2 font-medium ${SENDER_COLOR} hover:text-orange-400 transition-colors`}>
                <PlayCircle className="w-5 h-5" />
                Assistir demonstração
              </button>
            </div>

            {/* SaaS */}
            <div className={`group relative bg-[#12141c] rounded-2xl p-8 border border-white/5 transition-all hover:bg-[#151822] hover:border-emerald-500/30 ${SAAS_GLOW}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-emerald-500/10 ${SAAS_COLOR}`}>
                <BarChart className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Stack SaaS</h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                Atendimento, CRM, funis, automações, agendamentos e vendas organizados em um só ambiente.
              </p>
              
              <button onClick={() => document.getElementById('demo-saas')?.scrollIntoView({behavior: 'smooth'})} className={`flex items-center gap-2 font-medium ${SAAS_COLOR} hover:text-emerald-400 transition-colors mt-auto`}>
                <PlayCircle className="w-5 h-5" />
                Assistir demonstração
              </button>
            </div>

            {/* IA */}
            <div className={`group relative bg-[#12141c] rounded-2xl p-8 border border-white/5 transition-all hover:bg-[#151822] hover:border-blue-500/30 ${IA_GLOW}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-500/10 ${IA_COLOR}`}>
                <MonitorPlay className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Stack IA</h3>
              
              <p className="text-gray-400 mb-8 leading-relaxed">
                Automatize conversas, configure respostas com IA e acompanhe seus contatos com CRM e follow-ups.
              </p>
              
              <button onClick={() => document.getElementById('demo-ia')?.scrollIntoView({behavior: 'smooth'})} className={`flex items-center gap-2 font-medium ${IA_COLOR} hover:text-blue-400 transition-colors mt-auto`}>
                <PlayCircle className="w-5 h-5" />
                Assistir demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REVENDA SECTION */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1c29] via-[#090a0f] to-[#090a0f] -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Users className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Uma operação de revenda <br className="hidden md:block" /> para chamar de sua.
          </h2>
          
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Além de conhecer os três sistemas, você poderá acompanhar a proposta de revenda da Stack Sistemas. Cada revendedor terá seu próprio painel de licenças para gerenciar os clientes da sua operação.
          </p>
          
          <button 
            onClick={handleJoinGroup}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg border border-white/20 transition-all hover:scale-105 active:scale-95"
          >
            QUERO CONHECER A REVENDA
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* VIDEOS SECTION */}
      <section className="py-24 px-6 bg-[#0c0d13] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Demonstrações na Prática</h2>
            <p className="text-gray-400">Veja o funcionamento de cada sistema por dentro.</p>
          </div>

          <div className="space-y-16">
            {/* Video 1 */}
            <div id="demo-sender" className="scroll-mt-24">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className={`w-2 h-8 rounded-full ${SENDER_BG}`} />
                Demonstração do Stack Sender Pro
              </h3>
              <div className="aspect-video w-full bg-[#12141c] rounded-2xl border border-white/10 overflow-hidden relative group">
                <VideoPlayer src="/videos/Apresentacao_Stack_sender.mp4" poster="/videos/poster-sender.jpg" />
              </div>
            </div>

            {/* Video 2 */}
            <div id="demo-saas" className="scroll-mt-24">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className={`w-2 h-8 rounded-full ${SAAS_BG}`} />
                Demonstração do Stack SaaS
              </h3>
              <div className="aspect-video w-full bg-[#12141c] rounded-2xl border border-white/10 overflow-hidden relative group">
                <VideoPlayer src="/videos/Video_2_Voz_Hacker_G-ADS.mp4" poster="/videos/poster-saas.jpg" />
              </div>
            </div>

            {/* Video 3 */}
            <div id="demo-ia" className="scroll-mt-24">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className={`w-2 h-8 rounded-full ${IA_BG}`} />
                Demonstração do Stack IA
              </h3>
              <div className="aspect-video w-full bg-[#12141c] rounded-2xl border border-white/10 overflow-hidden relative group">
                <VideoPlayer src="/videos/Video_3_Voz_Hacker_G-ADS.mp4" poster="/videos/poster-ia.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Para quem é?</h2>
            <p className="text-gray-400">
              Conecte esses públicos à oportunidade de oferecer soluções de atendimento, automação e gestão aos próprios clientes.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Agências de marketing', 'Gestores de tráfego', 'Consultores', 'Prestadores de serviços digitais', 'Empreendedores que atendem empresas'].map((item, i) => (
              <div key={i} className="px-6 py-3 rounded-full bg-[#12141c] border border-white/5 text-gray-300 font-medium hover:border-white/20 transition-colors">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#0c0d13] border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            <FaqItem 
              question="Entrar no grupo é gratuito?" 
              answer="Sim. A entrada no grupo de lançamento é gratuita." 
            />
            <FaqItem 
              question="Posso revender os sistemas?" 
              answer="A Stack Sistemas está preparando uma operação de revenda. O funcionamento e as condições serão apresentados no grupo." 
            />
            <FaqItem 
              question="Os revendedores terão um painel próprio?" 
              answer="Sim. A proposta inclui um painel para cada revendedor gerenciar suas licenças e clientes. O estágio real de disponibilidade do painel será informado durante o lançamento." 
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d13] to-[#050608] -z-10" />
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Conheça os sistemas.<br />
            Acompanhe o lançamento.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Descubra a revenda.</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Entre no grupo oficial da Stack Sistemas para assistir às demonstrações e receber as informações sobre os produtos, a operação de revenda e o painel de licenças.
          </p>
          
          <button 
            onClick={handleJoinGroup}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 text-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              ENTRAR NO GRUPO DA STACK SISTEMAS
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </section>

      {/* FLOATING MOBILE CTA */}
      <div className="fixed bottom-6 left-0 w-full px-6 md:hidden z-50 pointer-events-none">
        <div className="max-w-sm mx-auto pointer-events-auto">
          <button 
            onClick={handleJoinGroup}
            className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-xl shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            ENTRAR NO GRUPO
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Stack Sistemas. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

function VideoPlayer({ src, poster }: { src: string, poster: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isPlaying) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#1a1c29] group-hover:bg-[#232635] transition-colors cursor-pointer" onClick={() => setIsPlaying(true)}>
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url(${poster})` }} />
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform z-10">
          <Play className="w-6 h-6 text-white ml-1" />
        </div>
      </div>
    );
  }

  return (
    <video 
      src={src} 
      controls 
      autoPlay 
      className="w-full h-full object-cover"
      controlsList="nodownload"
    />
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-[#12141c]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-medium text-white">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default App;
