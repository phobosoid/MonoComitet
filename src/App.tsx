import { motion } from 'motion/react';
import { 
  MessageSquare, 
  EyeOff, 
  CircleOff, 
  ShieldCheck, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  ReceiptText,
  Snowflake,
  BarChart3,
  Calendar,
  Lock
} from 'lucide-react';
import { ReactNode } from 'react';

const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-15%" }}
    transition={{ duration: 0.8, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const PhoneFrame = ({ children, topBar = "БАЛАНС КЛАСУ: 42 500 ₴", hideHeader = false }: { children: ReactNode; topBar?: string; hideHeader?: boolean }) => (
  <div className="phone-frame no-scrollbar overflow-hidden">
    {!hideHeader && (
      <div className="px-6 py-4 flex justify-between items-center z-20 sticky top-0 bg-background/95 backdrop-blur-md border-b border-primary/10 w-full">
        <span className="text-[10px] font-mono text-primary">{topBar.split(':')[0]}:</span>
        <span className="text-sm font-bold font-mono">{topBar.split(':')[1]}</span>
      </div>
    )}
    <div className="relative h-full overflow-hidden">
      {children}
    </div>
  </div>
);

export default function App() {
  return (
    <div className="selection:bg-primary/30 min-h-screen bg-background relative overflow-x-hidden">
      {/* Global Background Accents */}
      <div className="fixed w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -top-96 -left-96 pointer-events-none -z-10" />
      <div className="fixed w-[600px] h-[600px] bg-primary/3 rounded-full blur-[100px] -bottom-48 -right-48 pointer-events-none -z-10" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 p-6 md:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="w-4 h-1 bg-background rotate-45 translate-y-[1px]"></div>
              <div className="w-4 h-1 bg-background -rotate-45 -translate-y-[1px]"></div>
            </div>
            <span className="font-bold tracking-tight text-xl uppercase italic">MonoКомітет</span>
          </div>
          <nav className="hidden md:flex gap-8 text-[11px] font-mono text-primary opacity-80">
            <a href="#problem" className="hover:opacity-100 transition-opacity">PROBLEM</a>
            <a href="#vision" className="hover:opacity-100 transition-opacity">VISION</a>
            <a href="#social" className="hover:opacity-100 transition-opacity">COMMUNITY</a>
          </nav>
        </div>
      </header>

      {/* Header / Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <Reveal>
          <span className="mono-label mb-6 block text-primary tracking-[0.2em] font-mono">FINTECH FOR SOCIETY</span>
          <h1 className="font-display text-5xl md:text-8xl font-extrabold mb-8 leading-[0.9] tracking-tighter">
            Більше ніж <br /><span className="text-primary italic font-serif font-light">картка.</span>
          </h1>
          <p className="max-w-2xl text-secondary text-lg md:text-xl font-light mb-12 mx-auto leading-relaxed">
            Цифровий мирний договір для мільйонів українців. Прозорі збори без хаосу в чатах.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#problem" 
              className="bg-primary text-background px-10 py-5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-[0_10px_30px_rgba(242,202,80,0.2)]"
            >
              Спробувати зараз
            </a>
            <button className="border border-primary/30 px-10 py-5 rounded-full font-bold text-sm hover:bg-primary/5 transition-colors">
              Переглянути демо
            </button>
          </div>
        </Reveal>

        {/* Hero Decoration: Floating Cards */}
        <div className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 w-64 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: 20, rotate: 3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 3 }}
            className="bg-surface/80 backdrop-blur-xl border border-white/5 p-5 rounded-2xl shadow-xl mb-6"
          >
            <div className="text-[10px] text-primary font-mono mb-1 uppercase">Довіра</div>
            <div className="text-xs font-light text-on-surface">21 з 35 батьків вже здали внески</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ delay: 0.2 }}
            className="bg-surface/80 backdrop-blur-xl border border-success/20 p-5 rounded-2xl shadow-xl"
          >
            <div className="text-[10px] text-success font-mono mb-1 uppercase">Економія</div>
            <div className="text-xs font-light text-on-surface">+750 ₴ залишку повернуто на баланс</div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 px-6 chaos-bg">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="mono-label text-error mb-4 block">The Problem</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-16 text-on-surface">Пекло в чатах — це не норма.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="glass-panel p-8 rounded-3xl h-full border-white/10">
                <div className="text-error mb-4"><MessageSquare size={40} /></div>
                <h3 className="text-xl font-bold mb-4 font-display">Хаос комунікації</h3>
                <p className="text-secondary text-sm">Пошук повідомлень "хто здав" триває годинами. Месенджери завалені шумом.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="glass-panel p-8 rounded-3xl h-full border-white/10">
                <div className="text-error mb-4"><EyeOff size={40} /></div>
                <h3 className="text-xl font-bold mb-4 font-display">Криза довіри</h3>
                <p className="text-secondary text-sm">Витрати без фото-доказів народжують конфлікти. Голова комітету завжди під підозрою.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="glass-panel p-8 rounded-3xl h-full border-white/10">
                <div className="text-error mb-4"><CircleOff size={40} /></div>
                <h3 className="text-xl font-bold mb-4 font-display">Фінмоніторинг</h3>
                <p className="text-secondary text-sm">Сотні переказів на особисту картку провокують блокування рахунків банку.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="mono-label mb-4 block text-primary">The Vision</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 italic">Суспільний договір 2.0</h2>
            <p className="text-xl text-secondary mb-12 font-light">
              MonoКомітет — це цифровий мирний договір між батьками. Ми автоматизували довіру, упакувавши її в преміальний фінтех-інтерфейс.
            </p>
            <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5">
              <p className="text-primary text-xl font-light italic">«Прозорість усуває потребу в контролі».</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Audit & Roles */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <Reveal>
              <PhoneFrame>
                <div className="pt-10 px-6 pb-32 h-full flex flex-col bg-background text-left">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono text-primary">БАЛАНС КЛАСУ:</span>
                    <span className="text-xs font-bold font-mono">42 500 ₴</span>
                  </div>
                  <div className="bg-primary rounded-2xl p-5 mb-6 text-background">
                    <div className="text-[10px] uppercase opacity-60 font-mono">Активний збір</div>
                    <div className="text-2xl font-bold mt-1 font-mono">15 000 ₴</div>
                    <div className="mt-3 w-full bg-background/10 h-1 rounded-full overflow-hidden">
                      <div className="bg-background w-[75%] h-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-surface p-3 rounded-xl border border-white/5 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#353534] flex items-center justify-center text-xs">🛒</div>
                        <div className="text-[10px] flex flex-col">
                          <span className="font-bold">Канцтовари</span>
                          <span className="opacity-40">12 травня</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-primary">-2 400 ₴</span>
                    </div>
                    <div className="bg-surface p-3 rounded-xl border border-white/5 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#353534] flex items-center justify-center text-xs">💧</div>
                        <div className="text-[10px] flex flex-col">
                          <span className="font-bold">Вода</span>
                          <span className="opacity-40">10 травня</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-primary">-800 ₴</span>
                    </div>
                    <div className="bg-primary/5 p-3 rounded-xl border border-primary/20 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-xs text-primary">✓</div>
                        <div className="text-[10px] flex flex-col">
                          <span className="font-bold">Звіт додано</span>
                          <span className="opacity-60 text-primary">Чек №452</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto flex gap-2 pt-4">
                    <div className="flex-1 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-background text-[10px]">Здати</div>
                    <div className="w-10 h-10 bg-[#353534] rounded-xl flex items-center justify-center text-on-surface">⋯</div>
                  </div>
                </div>
              </PhoneFrame>
            </Reveal>
          </div>
          <div className="order-1 md:order-2">
            <Reveal>
              <div className="max-w-md">
                <span className="mono-label mb-4 block">Audit & Roles</span>
                <h2 className="font-display text-4xl font-bold mb-6 text-primary">Прозорість без булінгу.</h2>
                <p className="text-xl text-secondary mb-8 leading-relaxed font-light">
                  Батьки бачать анонімний лічильник: <b>«21 із 35 здали»</b>. Голова бачить <b>реальні прізвища</b>. Повний баланс завжди закріплений зверху екрана.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Social Context */}
      <section id="social" className="py-32 px-6 bg-surface/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-1">
            <Reveal>
              <div className="max-w-md">
                <span className="mono-label mb-4 block">Social Context</span>
                <h2 className="font-display text-4xl font-bold mb-6 text-primary">Живі обговорення.</h2>
                <p className="text-xl text-secondary mb-8 leading-relaxed font-light">
                  Обговорюйте збори та ставте лайки ініціативам. Текст у телефоні тепер вирівняний зліва для максимальної зручності.
                </p>
                <div className="glass-panel p-8 rounded-3xl border-l-4 border-primary flex flex-col gap-6 shadow-2xl border-white/5">
                  <div className="flex justify-between items-center text-primary">
                    <h3 className="font-display font-bold text-lg">Підтримка ініціативи</h3>
                    <div className="flex items-center gap-1.5 bg-primary/10 px-4 py-2 rounded-full font-mono text-sm border border-primary/20">
                      <Heart size={18} fill="currentColor" />
                      <span className="font-bold">10</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-background py-5 rounded-2xl font-black text-xl btn-glow uppercase tracking-wider transition-all">
                    Задонатити
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex justify-center md:order-2">
            <Reveal>
              <PhoneFrame>
                <div className="pt-10 px-6 pb-12 h-full flex flex-col bg-background text-left">
                  <div className="font-display font-bold text-primary mb-6">Ініціатива</div>
                  <div className="bg-surface rounded-2xl p-5 mb-6 border border-white/5 relative text-left">
                    <div className="absolute -top-3 -right-3 flex items-center gap-1.5 bg-primary text-background px-2.5 py-1 rounded-full font-mono text-[10px] font-black shadow-lg">
                      <Heart size={12} fill="currentColor" /> 10
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-on-surface">Збір на кондиціонер</h4>
                    <div className="text-[10px] text-secondary mb-4 font-mono">Ціль: 15 000 ₴</div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-9 bg-primary rounded-lg flex items-center justify-center text-background font-bold text-[10px]">ТАК</div>
                      <div className="flex-1 h-9 bg-white/5 rounded-lg flex items-center justify-center text-[10px]">НІ</div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-3 text-left custom-scrollbar pr-1">
                    <div className="text-[10px] text-primary mono-label mb-1">Коментарі (4)</div>
                    <div className="bg-surface p-2.5 rounded-xl text-[9px] border border-white/5"><b>Мама Олега:</b> Давайте інверторний.</div>
                    <div className="bg-primary/5 p-2.5 rounded-xl text-[9px] border border-primary/20"><b>Голова:</b> Специфікація в доках.</div>
                    <div className="bg-surface p-2.5 rounded-xl text-[9px] border border-white/5"><b>Тато Максима:</b> Підтримую.</div>
                    <div className="bg-surface p-2.5 rounded-xl text-[9px] border border-white/5"><b>Мама Іри:</b> Проголосувала "За".</div>
                  </div>
                </div>
              </PhoneFrame>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <Reveal>
              <PhoneFrame>
                <div className="pt-10 px-6 pb-12 h-full flex flex-col bg-background text-left">
                  <div className="font-display font-bold text-success mb-4 flex items-center gap-2">
                    <CheckCircle size={20} /> Звіт про покупку
                  </div>
                  <div className="bg-surface rounded-2xl p-4 border border-white/5 mb-6">
                    <div className="text-[10px] text-secondary uppercase mb-2">Кондиціонер Mitsubishi</div>
                    <div className="flex justify-between items-end mb-4 font-mono">
                      <div className="text-xs">Витрачено: <br /><span className="text-on-surface">14 250 ₴</span></div>
                      <div className="text-xs text-right text-success">Заощаджено 5%: <br /><span>+750 ₴</span></div>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#353534] overflow-hidden">
                      <div className="h-full bg-success transition-all duration-1000" style={{ width: '95%' }} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="aspect-square bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center p-4 text-center">
                      <Snowflake className="text-primary/40 mb-2" size={24} />
                      <span className="text-[8px] text-secondary">Фото товару в класі</span>
                    </div>
                    <div className="aspect-square bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center p-4 text-center">
                      <ReceiptText className="text-primary/40 mb-2" size={24} />
                      <span className="text-[8px] text-secondary">Скан фіскального чека</span>
                    </div>
                  </div>
                </div>
              </PhoneFrame>
            </Reveal>
          </div>
          <div className="order-1 md:order-2">
            <Reveal>
              <div className="max-w-md">
                <span className="mono-label mb-4 block text-success">Transparency</span>
                <h2 className="font-display text-4xl font-bold mb-6 text-primary">Фінал закупівлі: Звіт.</h2>
                <p className="text-xl text-secondary mb-8 leading-relaxed font-light">
                  Звітність, що не потребує запитань. Фото товару та чека прикріплені назавжди. Економія автоматично повертається на загальний рахунок.
                </p>
                <div className="bg-success/5 border border-success/20 p-6 rounded-2xl">
                  <p className="text-success text-sm italic font-mono">+750 ₴ повернуто в бюджет класу.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-32 px-6 bg-surface/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-1">
            <Reveal>
              <div className="max-w-md">
                <span className="mono-label mb-4 block">Feature: Data</span>
                <h2 className="font-display text-4xl font-bold mb-6 text-primary">Куди йдуть гроші?</h2>
                <p className="text-xl text-secondary mb-10 leading-relaxed font-light">
                  Автоматична статистика за категоріями. Більше не потрібно вручну рахувати витрати наприкінці року. Повний звіт покаже все: від господарчих товарів до свят та ремонтів.
                </p>
                <div className="space-y-4 max-w-md">
                  <div className="glass-panel p-5 rounded-2xl flex justify-between text-sm font-mono border-white/5">
                    <span>Госппотреби</span>
                    <span className="text-primary">18 200 ₴</span>
                  </div>
                  <div className="glass-panel p-5 rounded-2xl flex justify-between text-sm font-mono opacity-60 border-white/5">
                    <span>Заходи</span>
                    <span>32 000 ₴</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex justify-center md:order-2">
            <Reveal>
              <PhoneFrame>
                <div className="pt-10 px-6 pb-12 h-full flex flex-col items-center bg-background">
                  <div className="font-display font-bold text-primary self-start mb-10">Аналітика</div>
                    <div className="w-48 h-48 relative flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_20px_rgba(242,202,80,0.1)]">
                      {/* Background circle */}
                      <circle 
                        cx="50" cy="50" r="38" 
                        fill="transparent" 
                        stroke="currentColor" 
                        strokeWidth="8" 
                        className="text-primary/10"
                      />
                      {/* Progress circle */}
                      <circle 
                        cx="50" cy="50" r="38" 
                        fill="transparent" 
                        stroke="currentColor" 
                        strokeWidth="8" 
                        strokeDasharray="238.76"
                        strokeDashoffset="59.69"
                        strokeLinecap="round"
                        className="text-primary"
                      />
                    </svg>
                    <div className="text-center relative z-10">
                      <div className="text-[10px] text-secondary uppercase font-mono tracking-[0.2em] mb-1 opacity-60">Разом</div>
                      <div className="text-2xl font-bold font-mono tracking-tighter">58.4k</div>
                    </div>
                  </div>
                    <div className="mt-12 w-full space-y-3 h-full overflow-y-auto custom-scrollbar pb-32">
                      <div className="flex items-center justify-between bg-surface p-3 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-blue"></div>
                          <span className="text-[10px]">Навчальні матеріали</span>
                        </div>
                        <span className="text-[10px] font-mono text-primary">12.5k</span>
                      </div>
                      <div className="flex items-center justify-between bg-surface p-3 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-orange"></div>
                          <span className="text-[10px]">Ремонт та обладнання</span>
                        </div>
                        <span className="text-[10px] font-mono text-primary">24.2k</span>
                      </div>
                      <div className="flex items-center justify-between bg-surface p-3 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                          <span className="text-[10px]">Свята та заходи</span>
                        </div>
                        <span className="text-[10px] font-mono text-primary">15.8k</span>
                      </div>
                      <div className="flex items-center justify-between bg-surface p-3 rounded-xl border border-white/5">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                          <span className="text-[10px]">Госппотреби</span>
                        </div>
                        <span className="text-[10px] font-mono text-primary">5.9k</span>
                      </div>
                    </div>
                </div>
              </PhoneFrame>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-32 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="mono-label mb-4 block text-primary">Automation</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">Технології спокою</h2>
            <p className="text-xl text-secondary mb-12 font-light">
              Ми додали функцію <b>автоплатежів</b> для регулярних зборів. Батьки один раз дають згоду — і банк сам робить переказ щомісяця. Жодних нагадувань та прострочок.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left mt-16">
              <Reveal delay={0.1}>
                <div className="glass-panel p-8 rounded-3xl border border-primary/10 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="text-primary" size={20} />
                    <h4 className="text-primary font-bold font-display uppercase text-sm tracking-widest">Автоплатежі</h4>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed font-light italic">Більше не треба пам'ятати про щомісячні внески на воду чи охорону. Все відбувається автоматично.</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="glass-panel p-8 rounded-3xl border border-white/5 h-full">
                   <div className="flex items-center gap-3 mb-3">
                    <Lock className="text-primary" size={20} />
                    <h4 className="text-primary font-bold font-display uppercase text-sm tracking-widest">Audit Log</h4>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed font-light italic">До кожної витрати прикріплюється фото чека. Історія незмінна та доступна для аудиту 24/7.</p>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Design System Section */}
      <section className="py-32 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <span className="mono-label mb-4 block">Design System</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-16 text-primary">Fintech Noir Aesthetic.</h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                <div>
                  <h3 className="font-display font-black uppercase text-sm tracking-widest mb-6 opacity-40">Brand Identity</h3>
                  <p className="text-secondary leading-relaxed font-light text-lg">
                    Fintech Noir поєднує <span className="text-on-surface font-medium">Glassmorphism</span> з висококонтрастним темним режимом. Це середовище, де безпека зустрічається з передовими технологіями через глибокі чорні кольори, напівпрозорі скляні панелі та фірмові золоті градієнти.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-mono text-[10px] text-primary uppercase mb-4 tracking-tighter">Colors</h4>
                    <div className="flex gap-2">
                      <div className="w-12 h-12 rounded-xl gold-gradient shadow-[0_0_15px_rgba(242,202,80,0.3)]"></div>
                      <div className="w-12 h-12 rounded-xl bg-background border border-white/10"></div>
                      <div className="w-12 h-12 rounded-xl bg-surface border border-white/10"></div>
                      <div className="w-12 h-12 rounded-xl glass-panel"></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] text-primary uppercase mb-4 tracking-tighter">Shapes</h4>
                    <div className="flex gap-2">
                      <div className="w-10 h-10 bg-white/10 rounded-sm"></div>
                      <div className="w-10 h-10 bg-white/10 rounded-md"></div>
                      <div className="w-10 h-10 bg-white/10 rounded-xl"></div>
                      <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel p-10 rounded-[2.5rem] border-white/5 space-y-8">
                <div>
                  <h3 className="font-display font-bold text-primary mb-2">Typography</h3>
                  <div className="space-y-4">
                    <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
                      <span className="font-display text-2xl font-bold">Sora</span>
                      <span className="font-mono text-[10px] opacity-40 uppercase">Headlines</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
                      <span className="font-body text-2xl">Inter</span>
                      <span className="font-mono text-[10px] opacity-40 uppercase">Body & UI</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
                      <span className="font-mono text-2xl">JetBrains</span>
                      <span className="font-mono text-[10px] opacity-40 uppercase">Data & Numeric</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Prototype Showcase */}
      <section className="py-32 px-6 bg-surface/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <span className="mono-label mb-4 block">Interactive Prototyping</span>
              <h2 className="font-display text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter italic">
                The App <span className="text-primary not-italic">Interfaces.</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Screen 1: Transaction Details */}
              <div className="flex flex-col items-center">
                <span className="mono-label mb-4 opacity-40">Transaction</span>
                <PhoneFrame hideHeader={true}>
                  <div className="pt-10 px-6 h-full flex flex-col bg-background text-left font-body">
                    <div className="flex items-center gap-3 mb-6">
                      <button className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-white/5">
                        <ArrowRight size={14} className="rotate-180" />
                      </button>
                      <div className="flex items-center gap-1.5 font-bold text-sm">
                        <div className="w-4 h-4 rounded-full gold-gradient" /> MonoCommittee
                      </div>
                    </div>
                    
                    <div className="bg-surface/50 p-5 rounded-2xl mb-6 flex flex-col items-center text-center">
                      <div className="bg-white/5 px-3 py-1 rounded-full text-[9px] font-mono mb-3 text-secondary/60">10 MAY 2026</div>
                      <div className="text-3xl font-mono font-bold text-primary mb-1">-750.00 ₴</div>
                      <div className="text-[10px] text-secondary opacity-40">Transaction Details</div>
                    </div>

                    <div className="glass-panel p-4 rounded-2xl mb-6 relative overflow-hidden">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center text-accent-orange text-sm">🛒</div>
                        <div>
                          <div className="text-[9px] text-secondary/50 uppercase font-mono tracking-tighter">Category</div>
                          <div className="text-xs font-bold">Household</div>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/5">
                        <div className="text-[9px] text-secondary/50 uppercase font-mono mb-1 tracking-tighter">Description</div>
                        <p className="text-[11px] text-on-surface/80 leading-snug">Drinking water (5 bottles) for the class meetings.</p>
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-[10px] text-secondary uppercase font-mono mb-3 tracking-widest">Receipt Photo</div>
                      <div className="aspect-[4/3] bg-surface rounded-2xl border border-white/5 overflow-hidden group cursor-pointer relative shadow-lg">
                         <img 
                          src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?q=80&w=800" 
                          className="w-full h-full object-cover transition-all"
                          alt="Receipt"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      </div>
                    </div>

                    <div className="mt-auto py-6">
                      <button className="w-full py-3.5 rounded-xl border border-white/10 text-secondary/60 text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
                        Add Comment
                      </button>
                    </div>
                  </div>
                </PhoneFrame>
              </div>

              {/* Screen 2: Dashboard */}
              <div className="flex flex-col items-center">
                <span className="mono-label mb-4 opacity-40">Dashboard</span>
                <PhoneFrame hideHeader={true}>
                  <div className="pt-10 px-6 h-full flex flex-col bg-background text-left">
                    <div className="flex justify-between items-center mb-8">
                       <div className="flex items-center gap-2 font-bold text-sm">
                        <div className="w-4 h-4 rounded-full gold-gradient" /> MonoCommittee
                      </div>
                      <ShieldCheck size={18} className="text-primary/40" />
                    </div>

                    <div className="w-full bg-primary/10 border border-primary/20 h-12 rounded-full flex items-center justify-center px-6 mb-10 overflow-hidden group">
                      <span className="text-[10px] font-mono text-primary font-black uppercase tracking-widest">10-B CLASS BALANCE</span>
                    </div>

                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-display font-black text-lg uppercase tracking-tight">Recent Spending</h3>
                      <span className="text-[10px] font-mono text-primary cursor-pointer hover:underline">All</span>
                    </div>

                    <div className="space-y-4 overflow-y-auto no-scrollbar pr-1 pb-20">
                      {[
                        { icon: '🚌', title: 'Zoo excursion', price: '32 000 ₴', date: '10.05.2026, 12:00' },
                        { icon: '💧', title: 'Drinking water (5 bottles)', price: '750 ₴', date: '09.05.2026, 14:30', active: true },
                        { icon: '📚', title: 'Extra textbooks', price: '4 750 ₴', date: '08.05.2026, 10:15' }
                      ].map((item, i) => (
                        <div key={i} className={`glass-panel p-4 rounded-2xl border-white/5 flex justify-between items-center ${item.active ? 'border-primary/20 bg-primary/5' : ''}`}>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center grayscale">{item.icon}</div>
                            <div>
                              <div className="text-[11px] font-bold">{item.title}</div>
                              <div className="text-[8px] text-secondary/40 font-mono italic">{item.date}</div>
                            </div>
                          </div>
                          <div className="text-xs font-mono font-bold text-primary">-{item.price}</div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[85%] glass-panel rounded-full h-14 border-white/10 flex items-center justify-between px-6 z-30 shadow-2xl">
                      <div className="text-primary bg-primary/10 p-2 rounded-lg"><BarChart3 size={18} /></div>
                      <ReceiptText size={18} className="opacity-20" />
                      <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center -mt-8 shadow-xl text-background"><ArrowRight size={24} className="-rotate-90" /></div>
                      <Calendar size={18} className="opacity-20" />
                      <Lock size={18} className="opacity-20" />
                    </div>
                  </div>
                </PhoneFrame>
              </div>

              {/* Screen 3: Collection */}
              <div className="flex flex-col items-center">
                <span className="mono-label mb-4 opacity-40">Collection</span>
                <PhoneFrame hideHeader={true}>
                  <div className="pt-10 px-6 h-full flex flex-col bg-background text-left">
                    <div className="flex items-center gap-3 mb-6">
                      <button className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-white/5">
                        <ArrowRight size={14} className="rotate-180" />
                      </button>
                      <div className="flex items-center gap-1.5 font-bold text-sm">
                        <div className="w-4 h-4 rounded-full gold-gradient" /> MonoCommittee
                      </div>
                    </div>

                    <div className="gold-gradient p-6 rounded-3xl text-background relative overflow-hidden mb-6 shadow-[0_20px_40px_rgba(212,175,55,0.2)]">
                      <div className="absolute top-4 right-4 bg-background/10 p-2 rounded-xl"><Snowflake size={14} /></div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] uppercase font-black tracking-widest opacity-60">Active Collection</span>
                      </div>
                      <h3 className="font-display font-bold text-lg mb-6 leading-tight">New Air Conditioner Fund</h3>
                      
                      <div className="flex justify-between mb-2">
                        <div className="text-[10px] uppercase font-mono opacity-60">Raised</div>
                        <div className="text-[10px] uppercase font-mono opacity-60">Goal</div>
                      </div>
                      <div className="flex justify-between items-baseline mb-4">
                         <div className="text-xl font-mono font-bold">18 000 ₴</div>
                         <div className="text-xs font-mono font-bold opacity-40">30 000 ₴</div>
                      </div>
                      <div className="w-full h-1.5 bg-background/20 rounded-full overflow-hidden">
                        <div className="h-full bg-background w-[60%] transition-all duration-1000" />
                      </div>
                    </div>

                    <div className="glass-panel p-4 rounded-2xl mb-8 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-white/5">
                        <ShieldCheck size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] text-secondary/60">Organized by chairperson</div>
                        <div className="text-[11px] font-bold">Ivanova A.</div>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto no-scrollbar space-y-4 pb-24">
                      <div className="flex justify-between items-center px-1">
                        <h4 className="text-[10px] uppercase font-mono text-primary font-black">Recent Donations</h4>
                        <span className="text-[10px] font-mono opacity-40">21/35</span>
                      </div>
                      {[
                        { name: 'Anonymous #1', amount: '1000 ₴', time: 'Today, 14:30' },
                        { name: 'Parent [Alexey M.]', amount: '1500 ₴', time: 'Today, 11:15' },
                        { name: 'Anonymous #2', amount: '500 ₴', time: 'Yesterday' }
                      ].map((don, j) => (
                        <div key={j} className="glass-panel p-3.5 rounded-2xl flex items-center justify-between border-white/5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-surface flex items-center justify-center text-secondary/40 text-xs">👤</div>
                            <div>
                               <div className="text-[10px] font-bold">{don.name}</div>
                               <div className="text-[8px] opacity-30 font-mono">{don.time}</div>
                            </div>
                          </div>
                          <div className="text-xs font-mono font-bold text-primary">{don.amount}</div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[85%] z-30 shadow-2xl">
                       <button className="gold-gradient w-full py-4 rounded-2xl flex items-center justify-center gap-3 text-background font-black text-xs uppercase tracking-widest shadow-xl">
                          <ReceiptText size={16} /> Donate
                       </button>
                    </div>
                  </div>
                </PhoneFrame>
              </div>

              {/* Screen 4: Voting */}
              <div className="flex flex-col items-center">
                <span className="mono-label mb-4 opacity-40">Voting</span>
                <PhoneFrame hideHeader={true}>
                  <div className="pt-10 px-6 h-full flex flex-col bg-background text-left">
                     <div className="flex items-center gap-2 font-bold text-sm mb-10">
                        <div className="w-4 h-4 rounded-full gold-gradient" /> MonoCommittee
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-primary">
                        <ReceiptText size={14} className="animate-bounce" />
                        <span className="text-[9px] uppercase font-black tracking-widest">Current Vote</span>
                    </div>

                    <h3 className="font-display font-bold text-xl mb-6 leading-tight">Initiative Voting: AC Replacement in the Classroom</h3>
                    
                    <p className="text-secondary/60 text-xs leading-relaxed mb-8">Mama Petrenko proposes replacing the old air conditioner for better air quality during summer.</p>

                    <div className="border border-white/5 p-5 rounded-2xl bg-surface/30 mb-8">
                       <div className="text-[9px] uppercase font-mono opacity-30 mb-2">Budget</div>
                       <div className="text-2xl font-mono font-black text-primary">15 000 ₴</div>
                    </div>

                    <div className="mb-10">
                       <div className="flex justify-between items-baseline mb-3">
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-xl font-mono font-black text-primary">18</span>
                            <span className="text-[10px] font-mono opacity-40 uppercase tracking-tighter">FOR</span>
                          </div>
                          <div className="flex items-baseline gap-1.5 text-right">
                            <span className="text-sm font-mono opacity-40 uppercase tracking-tighter">AGAINST</span>
                            <span className="text-xl font-mono font-black">10</span>
                          </div>
                       </div>
                       <div className="w-full h-2 bg-surface rounded-full overflow-hidden flex">
                          <div className="h-full gold-gradient" style={{ width: '65%' }} />
                          <div className="h-full bg-white/10" style={{ width: '35%' }} />
                       </div>
                       <p className="text-center text-[9px] italic opacity-40 mt-4 font-mono">Voting is ongoing...</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-10">
                      <button className="aspect-square rounded-2xl gold-gradient flex items-center justify-center text-background shadow-xl">
                        <Heart size={32} />
                      </button>
                      <button className="aspect-square rounded-2xl bg-surface-container border border-white/5 flex items-center justify-center opacity-40">
                         <div className="rotate-180"><Heart size={32} /></div>
                      </button>
                    </div>

                    <div className="mt-auto p-4 border border-error/10 rounded-2xl bg-error/5 border-dashed">
                       <div className="flex items-center gap-2 mb-2 text-error text-[10px] font-bold">
                          <Lock size={12} /> Chair Panel
                       </div>
                       <button className="w-full py-3 rounded-xl border border-error/20 text-error text-[9px] font-black uppercase tracking-widest hover:bg-error/10 transition-colors">
                          Block Initiative (Veto)
                       </button>
                    </div>
                  </div>
                </PhoneFrame>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}

      <section className="py-40 text-center relative">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl font-extrabold mb-10 leading-[0.9] tracking-tighter">
            Змінимо життя <br /><span className="text-primary italic font-serif font-light">мільйонів</span> батьків?
          </h2>
          <button className="group bg-primary text-background px-16 py-6 rounded-full font-bold text-xl btn-glow hover:scale-105 transition-all shadow-[0_20px_60px_rgba(242,202,80,0.3)] flex items-center gap-4 mx-auto">
            Подати ідею в Monobank
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#0e0e0e]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-secondary/40">
          <div>© 2026 MONOCOMMITTEE PROTOTYPE</div>
          <div className="flex gap-8 uppercase tracking-widest">
            <span>System Status: Online</span>
            <span>v 0.4.2-beta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

