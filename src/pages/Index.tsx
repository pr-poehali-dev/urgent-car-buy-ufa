import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О компании", href: "#about" },
  { label: "Как это работает", href: "#how" },
  { label: "Оценка авто", href: "#estimate" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const STEPS = [
  {
    num: "01",
    title: "Оставьте заявку",
    desc: "Заполните форму онлайн или позвоните нам — займёт не более 2 минут.",
    icon: "FileText",
  },
  {
    num: "02",
    title: "Выезд оценщика",
    desc: "Наш специалист приедет в удобное для вас место и время — бесплатно.",
    icon: "Car",
  },
  {
    num: "03",
    title: "Мгновенный расчёт",
    desc: "Получите предложение на месте. Никаких скрытых вычетов после осмотра.",
    icon: "Calculator",
  },
  {
    num: "04",
    title: "Оплата в день сделки",
    desc: "Деньги на руки или на карту сразу после подписания документов.",
    icon: "Banknote",
  },
];

const REVIEWS = [
  {
    name: "Алексей М.",
    car: "Toyota Camry 2019",
    text: "Продал машину за 3 часа! Приехали вовремя, оценили честно, деньги перевели сразу на карту. Рекомендую всем.",
    rating: 5,
  },
  {
    name: "Ирина К.",
    car: "Hyundai Solaris 2021",
    text: "Очень профессиональная команда. Без лишних вопросов, без долгих ожиданий. Получила сумму, которую и ожидала.",
    rating: 5,
  },
  {
    name: "Дмитрий Р.",
    car: "Kia Rio 2020",
    text: "Обратился после неудачных попыток продать через объявления. Здесь всё чётко: оценили, предложили цену, оформили быстро.",
    rating: 5,
  },
];

const MARKS = ["Toyota", "Hyundai", "Kia", "Volkswagen", "BMW", "Mercedes", "Lada", "Nissan", "Ford", "Другая"];
const YEARS = Array.from({ length: 30 }, (_, i) => (2025 - i).toString());
const CONDITIONS = ["Отличное", "Хорошее", "Среднее", "Требует ремонта"];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ mark: "", year: "", condition: "", mileage: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-ibm bg-white text-navy-900 overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="font-oswald text-xl font-bold text-white tracking-wider">АВТО<span className="text-gold">ВЫКУП</span></span>
            <span className="text-white/40 text-sm font-ibm">УФА</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-white/70 hover:text-gold transition-colors duration-200 font-ibm tracking-wide"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <a
            href="tel:+79991309131"
            className="hidden md:flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-950 font-oswald font-semibold text-sm px-5 py-2 transition-colors duration-200 tracking-wider"
          >
            <Icon name="Phone" size={14} />
            +7 (999) 130-91-31
          </a>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-navy-950 border-t border-white/10 px-6 py-4 flex flex-col gap-4 animate-fade-in-fast">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-white/80 hover:text-gold text-left text-sm tracking-wide transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:+79991309131"
              className="mt-2 bg-gold text-navy-950 font-oswald font-semibold text-sm px-4 py-3 text-center tracking-wider"
            >
              +7 (999) 130-91-31
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/492458c1-b349-476b-861c-92a33a1621a9/files/f58547b8-1cee-4090-9e11-ee507da3f6ef.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold font-ibm text-sm tracking-widest uppercase">Уфа · Ежедневно</span>
            </div>
            <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
              СРОЧНЫЙ<br />
              <span className="text-gold">ВЫКУП</span><br />
              АВТОМОБИЛЕЙ
            </h1>
            <p className="text-white/70 text-lg font-ibm font-light leading-relaxed mb-8 max-w-md">
              Оплата в день обращения. Честная оценка без скрытых вычетов. Выезд оценщика — бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#estimate")}
                className="bg-gold hover:bg-gold-light text-navy-950 font-oswald font-semibold text-base px-8 py-4 tracking-widest transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                ОЦЕНИТЬ АВТО
              </button>
              <a
                href="tel:+79991309131"
                className="border border-white/30 hover:border-gold text-white hover:text-gold font-oswald font-medium text-base px-8 py-4 tracking-widest transition-all duration-200 text-center"
              >
                ПОЗВОНИТЬ
              </a>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in hidden md:block" style={{ animationDelay: "0.3s" }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "от 1 часа", label: "Время сделки" },
                { val: "100%", label: "Прозрачность оценки" },
                { val: "24/7", label: "Работаем без выходных" },
                { val: "0 ₽", label: "Выезд оценщика" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 p-6 hover:border-gold/40 transition-colors duration-300">
                  <div className="font-oswald text-3xl font-bold text-gold mb-1">{s.val}</div>
                  <div className="text-white/60 text-sm font-ibm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white/40" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-ibm text-sm tracking-widest uppercase">О компании</span>
              </div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-navy-950 mb-6 leading-tight">
                ВЫКУПАЕМ АВТО<br />
                <span className="text-navy-700">ЧЕСТНО И БЫСТРО</span>
              </h2>
              <p className="text-navy-800/70 font-ibm font-light leading-relaxed mb-6 text-lg">
                Мы специализируемся на срочном выкупе автомобилей в Уфе и Республике Башкортостан. Работаем с 2015 года: более 3 000 успешных сделок.
              </p>
              <p className="text-navy-800/70 font-ibm font-light leading-relaxed mb-8">
                Принимаем авто любого года, марки и состояния. Наши оценщики — сертифицированные специалисты с опытом от 8 лет. Предлагаем реальную рыночную стоимость без занижений.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Любой пробег", "Любое состояние", "Все марки", "Без ПТС"].map((tag) => (
                  <span key={tag} className="border border-navy-700/20 text-navy-700 text-sm font-ibm px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Award", val: "10+ лет", label: "На рынке Уфы" },
                { icon: "Users", val: "3 000+", label: "Выкупленных авто" },
                { icon: "Star", val: "4.9 / 5", label: "Средняя оценка" },
                { icon: "Clock", val: "1–3 часа", label: "До выплаты" },
              ].map((s) => (
                <div key={s.label} className="bg-navy-950 p-6 group hover:bg-navy-800 transition-colors duration-300">
                  <Icon name={s.icon as IconName} size={28} className="text-gold mb-3" />
                  <div className="font-oswald text-2xl font-bold text-white mb-1">{s.val}</div>
                  <div className="text-white/50 text-sm font-ibm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold font-ibm text-sm tracking-widest uppercase">Процесс</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white">КАК ЭТО РАБОТАЕТ</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-0">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="relative p-8 border-t border-white/10 md:border-t-0 md:border-l first:border-l-0 hover:bg-white/5 transition-colors duration-300 group"
              >
                <div className="font-oswald text-5xl font-bold text-white/10 group-hover:text-gold/20 transition-colors duration-300 mb-4 leading-none">
                  {s.num}
                </div>
                <Icon name={s.icon as IconName} size={28} className="text-gold mb-4" />
                <h3 className="font-oswald text-lg font-semibold text-white mb-3 tracking-wide">{s.title}</h3>
                <p className="text-white/50 font-ibm text-sm leading-relaxed">{s.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10 text-gold/40">
                    <Icon name="ChevronRight" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATE FORM */}
      <section id="estimate" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-ibm text-sm tracking-widest uppercase">Онлайн-оценка</span>
              </div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-navy-950 mb-6 leading-tight">
                УЗНАЙТЕ СТОИМОСТЬ<br />
                <span className="text-navy-700">ВАШЕГО АВТО</span>
              </h2>
              <p className="text-navy-800/60 font-ibm font-light leading-relaxed mb-8 text-lg">
                Заполните форму — и мы перезвоним в течение 15 минут с предварительной оценкой. Выезд и осмотр бесплатны.
              </p>

              <div className="space-y-4">
                {[
                  { icon: "MapPin", text: "Выезд в любую точку Уфы и РБ" },
                  { icon: "ShieldCheck", text: "Безопасное оформление документов" },
                  { icon: "Wallet", text: "Оплата наличными или на карту" },
                ].map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={f.icon as IconName} size={16} className="text-gold" />
                    </div>
                    <span className="text-navy-800/70 font-ibm text-sm">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={36} className="text-gold" />
                  </div>
                  <h3 className="font-oswald text-2xl font-bold text-navy-950 mb-2">ЗАЯВКА ПРИНЯТА!</h3>
                  <p className="text-navy-800/60 font-ibm text-sm">Наш специалист свяжется с вами в течение 15 минут.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-gold text-sm font-ibm hover:underline"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-navy-950 font-ibm text-xs font-semibold uppercase tracking-widest mb-2">
                      Марка автомобиля
                    </label>
                    <select
                      required
                      value={form.mark}
                      onChange={(e) => setForm({ ...form, mark: e.target.value })}
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-navy-950 font-ibm text-sm focus:outline-none focus:border-navy-700 transition-colors"
                    >
                      <option value="">Выберите марку</option>
                      {MARKS.map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-navy-950 font-ibm text-xs font-semibold uppercase tracking-widest mb-2">
                        Год выпуска
                      </label>
                      <select
                        required
                        value={form.year}
                        onChange={(e) => setForm({ ...form, year: e.target.value })}
                        className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-navy-950 font-ibm text-sm focus:outline-none focus:border-navy-700 transition-colors"
                      >
                        <option value="">Год</option>
                        {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-navy-950 font-ibm text-xs font-semibold uppercase tracking-widest mb-2">
                        Пробег (км)
                      </label>
                      <input
                        type="number"
                        required
                        placeholder="120 000"
                        value={form.mileage}
                        onChange={(e) => setForm({ ...form, mileage: e.target.value })}
                        className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-navy-950 font-ibm text-sm focus:outline-none focus:border-navy-700 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy-950 font-ibm text-xs font-semibold uppercase tracking-widest mb-2">
                      Состояние
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {CONDITIONS.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setForm({ ...form, condition: c })}
                          className={`border px-3 py-2 text-sm font-ibm transition-all duration-200 ${
                            form.condition === c
                              ? "border-navy-700 bg-navy-950 text-white"
                              : "border-gray-200 text-navy-800/60 hover:border-navy-700/40"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy-950 font-ibm text-xs font-semibold uppercase tracking-widest mb-2">
                      Ваш телефон
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-gray-200 bg-gray-50 px-4 py-3 text-navy-950 font-ibm text-sm focus:outline-none focus:border-navy-700 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-navy-950 font-oswald font-semibold text-base py-4 tracking-widest transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    ПОЛУЧИТЬ ОЦЕНКУ
                  </button>

                  <p className="text-center text-gray-400 font-ibm text-xs">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold font-ibm text-sm tracking-widest uppercase">Отзывы</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-navy-950">ЧТО ГОВОРЯТ КЛИЕНТЫ</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                className="bg-gray-50 border border-gray-100 p-8 hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-navy-800/70 font-ibm font-light leading-relaxed mb-6 text-sm">
                  «{r.text}»
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-oswald font-semibold text-navy-950 tracking-wide">{r.name}</div>
                  <div className="text-gold text-xs font-ibm mt-1">{r.car}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            ГОТОВЫ ПРОДАТЬ АВТО<br />
            <span className="text-gold">ПРЯМО СЕЙЧАС?</span>
          </h2>
          <p className="text-white/60 font-ibm font-light text-lg mb-8">
            Позвоните или оставьте заявку — перезвоним в течение 15 минут.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79991309131"
              className="bg-gold hover:bg-gold-light text-navy-950 font-oswald font-semibold text-lg px-10 py-4 tracking-widest transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-3"
            >
              <Icon name="Phone" size={18} />
              +7 (999) 130-91-31
            </a>
            <button
              onClick={() => scrollTo("#estimate")}
              className="border border-white/30 hover:border-gold text-white hover:text-gold font-oswald font-medium text-lg px-10 py-4 tracking-widest transition-all duration-200"
            >
              ОЦЕНИТЬ ОНЛАЙН
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="text-gold font-ibm text-sm tracking-widest uppercase">Контакты</span>
              </div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold text-navy-950 mb-8 leading-tight">
                МЫ НАХОДИМСЯ<br />
                <span className="text-navy-700">В УФЕ</span>
              </h2>

              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", val: "+7 (999) 130-91-31", sub: "Звонки с 8:00 до 22:00" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", val: "+7 (999) 130-91-31", sub: "Пишите в любое время" },
                  { icon: "MapPin", label: "Адрес", val: "г. Уфа, ул. Примерная, 1", sub: "Офис работает ежедневно" },
                  { icon: "Clock", label: "График работы", val: "Ежедневно с 8:00 до 22:00", sub: "Выезд оценщика — круглосуточно" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-navy-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={c.icon as IconName} size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-navy-800/40 font-ibm text-xs uppercase tracking-wider mb-1">{c.label}</div>
                      <div className="font-oswald font-semibold text-navy-950 text-lg tracking-wide">{c.val}</div>
                      <div className="text-navy-800/50 font-ibm text-xs mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-950 p-8 flex flex-col justify-center">
              <h3 className="font-oswald text-2xl font-bold text-white mb-2 tracking-wide">НАПИШИТЕ НАМ</h3>
              <p className="text-white/50 font-ibm text-sm mb-6">Ответим в течение 15 минут</p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 font-ibm text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 font-ibm text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <textarea
                  placeholder="Расскажите об автомобиле..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 font-ibm text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                />
                <button className="w-full bg-gold hover:bg-gold-light text-navy-950 font-oswald font-semibold py-4 tracking-widest transition-all duration-200 hover:scale-[1.01]">
                  ОТПРАВИТЬ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-950 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-oswald text-lg font-bold text-white tracking-wider">
            АВТО<span className="text-gold">ВЫКУП</span>
            <span className="text-white/30 text-sm ml-2 font-ibm font-normal">УФА</span>
          </span>
          <p className="text-white/30 font-ibm text-xs text-center">
            © 2025 АвтоВыкуп Уфа. Все права защищены.
          </p>
          <div className="flex gap-6">
            {NAV_LINKS.slice(0, 3).map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-white/30 hover:text-gold text-xs font-ibm transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}