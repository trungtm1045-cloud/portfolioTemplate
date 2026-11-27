import { useState } from "react";
import { profile, skills, projects, experience } from "./data";

const links = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#skills", label: "Kỹ năng" },
  { href: "#projects", label: "Dự án" },
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#contact", label: "Liên hệ" },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="text-sm font-medium uppercase tracking-widest text-violet-400">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  const initials = profile.name
    .split(" ")
    .slice(-2)
    .map((w) => w[0])
    .join("");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0b0b14]/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#home" className="text-lg font-bold text-white">
            {initials}
            <span className="text-violet-400">.</span>
          </a>
          <ul className="hidden gap-8 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate-400 transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Mở menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </nav>
        {open && (
          <ul className="space-y-1 border-t border-white/5 px-6 py-3 md:hidden">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden px-6 pt-36 pb-24">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/30 blur-[120px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Sẵn sàng nhận dự án mới
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                Xin chào, mình là{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="mt-3 text-xl font-medium text-slate-300">{profile.role}</p>
              <p className="mt-5 max-w-xl text-slate-400">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-900/40 transition hover:bg-violet-500"
                >
                  Xem dự án
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-white/15 px-6 py-3 font-medium text-slate-200 transition hover:bg-white/10"
                >
                  Liên hệ mình
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="animate-float flex h-64 w-64 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 p-1 shadow-2xl shadow-violet-900/50 sm:h-72 sm:w-72">
                <div className="flex h-full w-full items-center justify-center rounded-[2.3rem] bg-[#12121f] text-7xl font-extrabold text-white">
                  {initials}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Về mình" title="Giới thiệu bản thân" />
            <div className="grid gap-10 md:grid-cols-2">
              <p className="leading-relaxed text-slate-400">
                Mình yêu thích việc biến ý tưởng thành những giao diện mượt mà, dễ tiếp cận. Mình luôn chú trọng
                vào trải nghiệm người dùng, mã nguồn sạch và hiệu năng. Ngoài giờ làm việc, mình thích đọc sách,
                chụp ảnh và đóng góp cho các dự án mã nguồn mở.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  ["3+", "Năm kinh nghiệm"],
                  ["25+", "Dự án hoàn thành"],
                  ["15+", "Khách hàng"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                    <div className="text-3xl font-bold text-white">{n}</div>
                    <div className="mt-1 text-xs text-slate-400">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Chuyên môn" title="Kỹ năng" />
            <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-slate-200">{s.name}</span>
                    <span className="text-slate-500">{s.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <SectionTitle eyebrow="Công việc" title="Dự án nổi bật" />
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-violet-400/40"
                >
                  <div className={`h-40 bg-gradient-to-br ${p.gradient} opacity-90 transition group-hover:opacity-100`} />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <SectionTitle eyebrow="Hành trình" title="Kinh nghiệm & học vấn" />
            <ol className="relative space-y-10 border-l border-white/10 pl-8">
              {experience.map((e) => (
                <li key={e.title} className="relative">
                  <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full bg-violet-500 ring-4 ring-[#0b0b14]" />
                  <p className="text-sm text-violet-400">{e.time}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{e.title}</h3>
                  <p className="text-sm text-slate-400">{e.place}</p>
                  <p className="mt-2 text-slate-400">{e.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <SectionTitle eyebrow="Kết nối" title="Liên hệ với mình" />
            <p className="-mt-6 mb-8 text-slate-400">
              Có dự án hay ý tưởng thú vị? Hãy gửi tin nhắn hoặc email tới{" "}
              <a href={`mailto:${profile.email}`} className="text-violet-400 hover:underline">
                {profile.email}
              </a>
              .
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Họ và tên"
                  className="rounded-xl border border-white/10 bg-[#12121f] px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-violet-400"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border border-white/10 bg-[#12121f] px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-violet-400"
                />
              </div>
              <textarea
                required
                rows={5}
                placeholder="Nội dung tin nhắn"
                className="w-full rounded-xl border border-white/10 bg-[#12121f] px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-violet-400"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500 sm:w-auto"
              >
                Gửi tin nhắn
              </button>
              {sent && <p className="text-sm text-emerald-400">✓ Cảm ơn bạn! Mình sẽ phản hồi sớm nhất có thể.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </div>
  );
}
