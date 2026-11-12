import { useState } from "react";

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backdropFilter: "blur(16px)", backgroundColor: "rgba(250,248,245,0.85)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "var(--sage)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="5" r="2.5" fill="white" />
              <path d="M3 11c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <span className="font-display font-medium text-lg tracking-tight" style={{ color: "var(--foreground)" }}>
            Skinly
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
          <a href="#how" className="hover:text-[--foreground] transition-colors">How It Works</a>
          <a href="#routine" className="hover:text-[--foreground] transition-colors">Your Routine</a>
          <a href="#progress" className="hover:text-[--foreground] transition-colors">Progress</a>
          <a href="#pricing" className="hover:text-[--foreground] transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-medium px-4 py-2 rounded-lg hover:bg-[--muted] transition-colors" style={{ color: "var(--muted-foreground)" }}>
            Sign In
          </button>
          <button
            className="text-sm font-medium px-4 py-2 rounded-lg transition-all hover:opacity-90"
            style={{ background: "var(--sage)", color: "var(--primary-foreground)" }}
          >
            Talk to Skinly →
          </button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: "var(--muted-foreground)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "var(--border)", backgroundColor: "rgba(250,248,245,0.97)" }}>
          {["How It Works", "Your Routine", "Progress", "Pricing"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium" style={{ color: "var(--muted-foreground)" }} onClick={() => setMobileOpen(false)}>{item}</a>
          ))}
          <button
            className="text-sm font-medium px-4 py-2.5 rounded-lg text-center mt-2"
            style={{ background: "var(--sage)", color: "var(--primary-foreground)" }}
          >
            Talk to Skinly →
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const [inputVal, setInputVal] = useState("");
  const pills = ["Breakouts", "Dryness", "Dark spots", "Build my routine"];

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(235,240,230,0.8) 0%, rgba(250,248,245,0) 70%), radial-gradient(ellipse 50% 40% at 70% 70%, rgba(242,217,204,0.4) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 30% 80%, rgba(228,223,239,0.4) 0%, transparent 60%), var(--warm-white)"
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-32 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #8FA87A, transparent)" }} />
      <div className="absolute bottom-24 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #E4DFEF, transparent)" }} />

      <div className="relative max-w-3xl w-full text-center mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-8 border"
          style={{ borderColor: "var(--border)", backgroundColor: "rgba(255,255,255,0.6)", color: "var(--muted-foreground)" }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--sage-mid)" }} />
          AI skincare guidance · not medical diagnosis
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
          Your skin changes.
          <br />
          <em className="not-italic" style={{ color: "var(--sage)" }}>Your routine should too.</em>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "var(--muted-foreground)" }}>
          Skinly is your personal AI skincare companion—helping you understand your skin, choose what fits, and build a routine that evolves with you.
        </p>

        {/* AI Composer */}
        <div className="max-w-xl mx-auto mb-4">
          <div
            className="relative rounded-2xl border ai-input-glow transition-all"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)"
            }}
          >
            {/* Placeholder cycling text */}
            {!inputVal && (
              <div
                className="prompt-cycle absolute left-5 top-1/2 -translate-y-1/2 text-sm pointer-events-none select-none"
                style={{ color: "var(--muted-foreground)", width: "calc(100% - 140px)" }}
              >
                <span>Why do I keep breaking out on my cheeks?</span>
                <span>My skin feels tight after cleansing...</span>
                <span>I want to fade my dark spots naturally</span>
                <span>Help me build a simple morning routine</span>
              </div>
            )}
            <textarea
              rows={3}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder=""
              className="w-full resize-none bg-transparent px-5 pt-4 pb-16 text-sm outline-none"
              style={{ color: "var(--foreground)" }}
            />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors hover:bg-[--muted]"
                style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="4" cy="4.5" r="1" fill="currentColor" />
                  <path d="M1 8l3-3 2.5 2.5L9 5l2 3" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
                Add a skin photo
              </button>
              <button
                className="text-xs font-medium px-4 py-2 rounded-xl transition-all hover:opacity-90 active:scale-95"
                style={{ background: "var(--sage)", color: "var(--primary-foreground)" }}
              >
                Start My Consultation →
              </button>
            </div>
          </div>
        </div>

        {/* Prompt pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {pills.map((p) => (
            <button
              key={p}
              onClick={() => setInputVal(p)}
              className="text-xs px-3.5 py-1.5 rounded-full border transition-all hover:border-[--sage] hover:text-[--sage]"
              style={{ borderColor: "var(--border)", color: "var(--muted-foreground)", backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              {p}
            </button>
          ))}
        </div>

        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
          No account needed to start · Skincare guidance, not medical diagnosis
        </p>
      </div>
    </section>
  );
}

// ─── Personalized Context ────────────────────────────────────────────────────

function PersonalizedContext() {
  const contextCards = [
    { label: "Skin Type", value: "Combination", icon: "◎", pos: "top-8 left-0 md:left-[-20px]" },
    { label: "Current Concern", value: "Reduce Breakouts", icon: "◈", pos: "top-0 right-0 md:right-[-20px]" },
    { label: "Uneven Tone", value: "Hyperpigmentation", icon: "◇", pos: "bottom-28 left-[-10px] md:left-[-40px]" },
    { label: "Sensitivity", value: "Fragrance-Free", icon: "◉", pos: "bottom-8 right-0 md:right-[-30px]" },
    { label: "Budget", value: "$20–40 / month", icon: "◌", pos: "bottom-0 left-1/2 -translate-x-1/2 -mb-4" },
  ];

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--beige)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>Personalized understanding</p>
          <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Skincare advice shouldn't start
            <br />
            <em className="not-italic" style={{ color: "var(--sage)" }}>with everyone else.</em>
          </h2>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Skinly considers the context behind your routine—from your skin type and concerns to your goals, products, sensitivities, and budget.
          </p>
        </div>

        {/* Central diagram */}
        <div className="relative flex items-center justify-center min-h-80">
          {/* Connecting paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5C6E4A" />
                <stop offset="100%" stopColor="#5C6E4A" stopOpacity="0" />
              </radialGradient>
            </defs>
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <line
                key={i}
                x1="50%" y1="50%"
                x2={`${50 + 40 * Math.cos((deg * Math.PI) / 180)}%`}
                y2={`${50 + 40 * Math.sin((deg * Math.PI) / 180)}%`}
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* Outer context cards */}
          {contextCards.map((card, i) => (
            <div
              key={i}
              className={`absolute ${card.pos} float-slow-${(i % 3) + 1} hidden md:block`}
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="px-4 py-3 rounded-xl border text-left min-w-36 shadow-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.85)", borderColor: "var(--border)", backdropFilter: "blur(8px)" }}>
                <div className="text-lg mb-1" style={{ color: "var(--sage)" }}>{card.icon}</div>
                <div className="text-xs font-medium mb-0.5" style={{ color: "var(--muted-foreground)" }}>{card.label}</div>
                <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{card.value}</div>
              </div>
            </div>
          ))}

          {/* Central profile card */}
          <div
            className="relative z-10 px-8 py-8 rounded-2xl border text-center shadow-xl"
            style={{ backgroundColor: "rgba(255,255,255,0.95)", borderColor: "var(--border)", minWidth: 220 }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "var(--sage-light)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="9" r="4" stroke="#5C6E4A" strokeWidth="1.5" />
                <path d="M5 20c0-3.86 3.13-7 7-7s7 3.14 7 7" stroke="#5C6E4A" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="font-display text-lg font-medium mb-1" style={{ color: "var(--foreground)" }}>Your Skin Profile</div>
            <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>Updated with every check-in</div>
            <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
              {["Combination", "Breakouts", "Uneven tone"].map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "var(--sage-light)", color: "var(--sage)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile grid of context cards */}
          <div className="md:hidden absolute -bottom-40 left-0 right-0 grid grid-cols-2 gap-3 mt-8">
            {contextCards.slice(0, 4).map((card, i) => (
              <div key={i} className="px-3 py-2.5 rounded-xl border"
                style={{ backgroundColor: "rgba(255,255,255,0.85)", borderColor: "var(--border)" }}>
                <div className="text-xs font-medium mb-0.5" style={{ color: "var(--muted-foreground)" }}>{card.label}</div>
                <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{card.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tell Skinly what's happening",
      body: "Describe your concerns, goals, and current routine. Add a photo if you want Skinly to consider visible characteristics.",
      preview: (
        <div className="rounded-xl border p-4" style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
          <div className="h-2 w-2/3 rounded mb-2" style={{ background: "var(--muted)" }} />
          <div className="h-2 w-full rounded mb-2" style={{ background: "var(--muted)" }} />
          <div className="h-2 w-1/2 rounded mb-4" style={{ background: "var(--muted)" }} />
          <div className="flex items-center gap-2">
            <div className="h-7 w-24 rounded-lg" style={{ background: "var(--sage)", opacity: 0.9 }} />
            <div className="h-7 w-16 rounded-lg border" style={{ borderColor: "var(--border)" }} />
          </div>
        </div>
      )
    },
    {
      num: "02",
      title: "Understand your skin",
      body: "Skinly organizes what you've shared into clear guidance around possible contributing factors and what may help.",
      preview: (
        <div className="rounded-xl border p-4 space-y-2" style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
          <div className="text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Possible factors</div>
          {["Routine consistency", "Product compatibility", "Barrier support"].map((f) => (
            <div key={f} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sage)" }} />
              <div className="text-xs" style={{ color: "var(--foreground)" }}>{f}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      num: "03",
      title: "Build your routine",
      body: "Get personalized product guidance and a structured AM/PM routine designed around your needs and budget.",
      preview: (
        <div className="rounded-xl border p-4" style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
          <div className="flex gap-2 mb-3">
            {["AM", "PM"].map((t, i) => (
              <div key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ backgroundColor: i === 0 ? "var(--peach)" : "var(--lavender)", color: "var(--foreground)" }}>
                {t}
              </div>
            ))}
          </div>
          {["Cleanse", "Treat", "Moisturize", "Protect"].map((s, i) => (
            <div key={s} className="flex items-center gap-2 py-1">
              <div className="text-xs w-5 font-medium" style={{ color: "var(--muted-foreground)" }}>0{i + 1}</div>
              <div className="text-xs font-medium" style={{ color: "var(--foreground)" }}>{s}</div>
            </div>
          ))}
        </div>
      )
    },
    {
      num: "04",
      title: "Check in and adapt",
      body: "Share how your skin is responding. Skinly helps you understand your progress and suggests routine adjustments when needed.",
      preview: (
        <div className="rounded-xl border p-4 space-y-2" style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
          <div className="text-xs font-medium mb-2" style={{ color: "var(--muted-foreground)" }}>Week 3 · Skinly suggests</div>
          <div className="text-xs p-2 rounded-lg" style={{ backgroundColor: "var(--sage-light)", color: "var(--sage)" }}>
            Reduce treatment frequency → 3 nights/week
          </div>
          <div className="flex gap-2 mt-1">
            <div className="text-xs px-2 py-1 rounded-lg" style={{ background: "var(--sage)", color: "white" }}>Apply</div>
            <div className="text-xs px-2 py-1 rounded-lg border" style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>Review</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="how" className="py-24 px-6" style={{ backgroundColor: "var(--warm-white)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>The process</p>
          <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Skincare guidance that grows with you.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-6 h-px z-10"
                  style={{ background: "var(--border)" }} />
              )}
              <div className="p-5 rounded-2xl h-full flex flex-col gap-4 border"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
                <div className="flex items-center gap-3">
                  <div className="text-xs font-mono font-semibold px-2 py-1 rounded-md"
                    style={{ backgroundColor: "var(--sage-light)", color: "var(--sage)" }}>
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-medium text-base mb-2" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{step.body}</p>
                </div>
                <div className="mt-auto">{step.preview}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AI Analysis ─────────────────────────────────────────────────────────────

function AIAnalysis() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--sage-light)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>AI Analysis</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Understand before you change.
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
              Skinly turns your conversation into clear, structured skincare guidance—so you can understand what may be affecting your skin before changing products or routines.
            </p>
            <p className="text-xs italic" style={{ color: "var(--muted-foreground)" }}>
              Based on the information you've shared. Skinly does not provide medical diagnosis.
            </p>
          </div>

          <div className="relative">
            {/* Background label */}
            <div className="absolute -top-8 -right-4 font-display text-7xl font-medium select-none pointer-events-none opacity-5"
              style={{ color: "var(--sage)", letterSpacing: "-0.04em" }}>
              UNDERSTAND
            </div>

            {/* Main analysis card */}
            <div className="relative z-10 rounded-2xl border shadow-xl p-6"
              style={{ backgroundColor: "white", borderColor: "var(--border)" }}>
              <div className="flex items-center justify-between mb-5">
                <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Skin Analysis</div>
                <div className="text-xs px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "var(--sage-light)", color: "var(--sage)" }}>Complete</div>
              </div>

              <div className="space-y-5">
                <div className="p-4 rounded-xl" style={{ backgroundColor: "var(--beige)" }}>
                  <div className="text-xs font-medium mb-1.5" style={{ color: "var(--muted-foreground)" }}>What I understood</div>
                  <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    Recurring breakouts + uneven skin tone
                  </div>
                </div>

                <div>
                  <div className="text-xs font-medium mb-2.5" style={{ color: "var(--muted-foreground)" }}>Possible contributing factors</div>
                  <div className="space-y-2">
                    {["Routine consistency", "Treatment frequency", "Product compatibility"].map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg border"
                        style={{ borderColor: "var(--border)" }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "var(--sage-light)" }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sage)" }} />
                        </div>
                        <span className="text-sm" style={{ color: "var(--foreground)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl border" style={{ borderColor: "var(--sage-mid)", borderWidth: 1.5, backgroundColor: "rgba(143,168,122,0.05)" }}>
                  <div className="text-xs font-medium mb-1.5" style={{ color: "var(--sage)" }}>Recommended approach</div>
                  <div className="text-sm leading-relaxed" style={{ color: "var(--foreground)" }}>
                    Simplify treatment frequency and support your skin barrier while maintaining daily sun protection.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Product Recommendations ──────────────────────────────────────────────────

function ProductGuidance() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--warm-white)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>Product Guidance</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Not just what to use.
            <br />
            <em className="not-italic" style={{ color: "var(--sage)" }}>Why it fits you.</em>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
          {/* Primary card */}
          <div className="w-full max-w-sm rounded-2xl border shadow-xl p-6 relative z-10"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}>
            <div className="w-full h-36 rounded-xl mb-5 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--beige), var(--sage-light))" }}>
              <div className="text-4xl">✦</div>
            </div>
            <div className="text-xs px-2.5 py-1 rounded-full inline-block mb-3"
              style={{ backgroundColor: "var(--sage-light)", color: "var(--sage)" }}>
              Daily cleanser
            </div>
            <h3 className="font-display text-xl font-medium mb-4" style={{ color: "var(--foreground)" }}>
              Gentle Hydrating Cleanser
            </h3>

            <div className="space-y-3 mb-5">
              <div className="p-3 rounded-xl" style={{ backgroundColor: "var(--beige)" }}>
                <div className="text-xs font-medium mb-1" style={{ color: "var(--muted-foreground)" }}>Why it may fit you</div>
                <div className="text-sm" style={{ color: "var(--foreground)" }}>
                  Supports cleansing without adding another active treatment step.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 p-3 rounded-xl border text-center" style={{ borderColor: "var(--border)" }}>
                  <div className="text-xs font-medium mb-0.5" style={{ color: "var(--muted-foreground)" }}>Best for</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>AM + PM</div>
                </div>
                <div className="flex-1 p-3 rounded-xl border text-center" style={{ borderColor: "var(--border)" }}>
                  <div className="text-xs font-medium mb-0.5" style={{ color: "var(--muted-foreground)" }}>Role</div>
                  <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Cleanse</div>
                </div>
              </div>
            </div>

            <button
              className="w-full py-3 rounded-xl text-sm font-medium transition-all hover:opacity-90 mb-2"
              style={{ background: "var(--sage)", color: "var(--primary-foreground)" }}>
              Add to Routine
            </button>
            <button className="w-full py-2.5 rounded-xl text-sm border transition-all hover:bg-[--muted]"
              style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>
              Already have something similar? Tell Skinly
            </button>
          </div>

          {/* Secondary cards partially visible */}
          <div className="hidden md:flex flex-col gap-4 opacity-50">
            {[
              { name: "Niacinamide Serum", role: "Treatment" },
              { name: "Barrier Moisturizer", role: "Hydration" }
            ].map((p) => (
              <div key={p.name} className="w-64 rounded-2xl border p-5"
                style={{ backgroundColor: "white", borderColor: "var(--border)" }}>
                <div className="w-full h-20 rounded-lg mb-3"
                  style={{ background: "linear-gradient(135deg, var(--lavender), var(--beige))" }} />
                <div className="text-xs mb-1" style={{ color: "var(--sage)" }}>{p.role}</div>
                <div className="font-display text-base font-medium" style={{ color: "var(--foreground)" }}>{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Personalized Routine ──────────────────────────────────────────────────────

function PersonalizedRoutine() {
  const [tab, setTab] = useState<"AM" | "PM">("AM");

  const am = [
    { step: "01", name: "Cleanse", product: "Gentle Hydrating Cleanser" },
    { step: "02", name: "Treat", product: "Niacinamide Serum" },
    { step: "03", name: "Moisturize", product: "Barrier Support Moisturizer" },
    { step: "04", name: "Protect", product: "SPF 50+" },
  ];

  const pm = [
    { step: "01", name: "Double Cleanse", product: "Oil Cleanser + Gentle Wash" },
    { step: "02", name: "Treat", product: "Retinol (3×/week)" },
    { step: "03", name: "Moisturize", product: "Barrier Repair Cream" },
  ];

  const steps = tab === "AM" ? am : pm;
  const tabColor = tab === "AM" ? "var(--peach)" : "var(--lavender)";

  return (
    <section id="routine" className="py-24 px-6" style={{ backgroundColor: "var(--beige)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>Daily Routine</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              A routine built around your skin—not a trend.
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
              Turn personalized recommendations into a simple routine you can actually follow. Your PM routine adapts treatment frequency around your current skin response.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setTab("AM")}
                className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  backgroundColor: tab === "AM" ? "var(--peach)" : "transparent",
                  color: "var(--foreground)",
                  border: `1.5px solid ${tab === "AM" ? "transparent" : "var(--border)"}`
                }}>
                ☀ Morning
              </button>
              <button
                onClick={() => setTab("PM")}
                className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                style={{
                  backgroundColor: tab === "PM" ? "var(--lavender)" : "transparent",
                  color: "var(--foreground)",
                  border: `1.5px solid ${tab === "PM" ? "transparent" : "var(--border)"}`
                }}>
                ☽ Evening
              </button>
            </div>
          </div>

          {/* Routine card */}
          <div className="rounded-2xl border shadow-xl overflow-hidden"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}>
            <div className="p-5" style={{ backgroundColor: tabColor }}>
              <div className="flex items-center justify-between">
                <div className="font-display text-base font-medium">{tab === "AM" ? "Morning Routine" : "Evening Routine"}</div>
                <div className="text-xs px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.6)", color: "var(--foreground)" }}>
                  {steps.length} steps
                </div>
              </div>
            </div>
            <div className="p-5 space-y-3">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border"
                  style={{ borderColor: "var(--border)" }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-mono font-semibold"
                    style={{ backgroundColor: "var(--sage-light)", color: "var(--sage)" }}>
                    {s.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium mb-0.5" style={{ color: "var(--muted-foreground)" }}>{s.name}</div>
                    <div className="text-sm font-medium truncate" style={{ color: "var(--foreground)" }}>{s.product}</div>
                  </div>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--sage)" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Progress ─────────────────────────────────────────────────────────────────

function Progress() {
  const weeks = [
    { week: "Week 1", event: "Routine started", note: null, active: false },
    { week: "Week 2", event: "Fewer new breakouts", note: null, active: false },
    { week: "Week 3", event: "Mild dryness reported", note: "Skinly suggestion ready", active: true },
    { week: "Today", event: "Check-in due", note: null, active: false },
  ];

  return (
    <section id="progress" className="py-24 px-6" style={{ backgroundColor: "var(--olive-deep)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage-mid)" }}>Progress & Adaptation</p>
          <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "white", letterSpacing: "-0.02em" }}>
            Your routine shouldn't stay static
            <br />
            <em className="not-italic" style={{ color: "var(--sage-mid)" }}>when your skin doesn't.</em>
          </h2>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Skinly keeps your routine connected to how your skin is actually responding.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12">
          <div className="absolute top-5 left-0 right-0 h-px" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {weeks.map((w, i) => (
              <div key={i} className="relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 mx-auto relative z-10 transition-all ${w.active ? "timeline-dot-active" : ""}`}
                  style={{
                    backgroundColor: w.active ? "var(--sage-mid)" : "rgba(255,255,255,0.1)",
                    border: `2px solid ${w.active ? "var(--sage-mid)" : "rgba(255,255,255,0.2)"}`
                  }}>
                  {w.active ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: i < 2 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)" }} />
                  )}
                </div>
                <div className="text-center">
                  <div className="text-xs font-medium mb-1" style={{ color: "var(--sage-mid)" }}>{w.week}</div>
                  <div className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>{w.event}</div>
                  {w.note && (
                    <div className="text-xs mt-1 px-2 py-0.5 rounded-md inline-block"
                      style={{ backgroundColor: "rgba(143,168,122,0.2)", color: "var(--sage-mid)" }}>
                      {w.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggestion card */}
        <div className="max-w-lg mx-auto rounded-2xl border overflow-hidden"
          style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.05)" }}>
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-xs font-medium mb-1" style={{ color: "var(--sage-mid)" }}>Skinly suggestion · Week 3</div>
                <div className="text-base font-medium" style={{ color: "white" }}>Reduce treatment frequency</div>
              </div>
              <div className="px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{ backgroundColor: "rgba(143,168,122,0.2)", color: "var(--sage-mid)" }}>
                Awaiting review
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl mb-3"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="text-sm font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>7 nights/week</div>
              <div style={{ color: "rgba(255,255,255,0.3)" }}>→</div>
              <div className="text-sm font-mono font-semibold" style={{ color: "var(--sage-mid)" }}>3 nights/week</div>
            </div>

            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
              Your recent check-in suggests your skin may benefit from more recovery time.
            </p>

            <div className="flex gap-3">
              <button className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--sage-mid)", color: "white" }}>
                Review Adjustment
              </button>
              <button className="flex-1 py-2.5 rounded-xl text-sm border transition-all"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}>
                Ask Why
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── AI Consultant ────────────────────────────────────────────────────────────

function AIConsultant() {
  const contextChips = ["Current Routine", "Skin Profile", "Latest Check-In", "Current Goal"];

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--warm-white)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>AI Consultant</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
              Ask about your skin.
              <br />
              <em className="not-italic" style={{ color: "var(--sage)" }}>Skinly already knows the context.</em>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
              Your AI Consultant stays connected to your skin profile, current routine, products, goals, and recent check-ins—so every conversation can start with more context.
            </p>

            {/* Context chips */}
            <div className="flex flex-wrap gap-2">
              {contextChips.map((chip) => (
                <div key={chip} className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-medium"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)", backgroundColor: "white" }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--sage)" }} />
                  {chip}
                </div>
              ))}
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium"
                style={{ backgroundColor: "var(--sage)", color: "white" }}>
                → Skinly AI
              </div>
            </div>
          </div>

          {/* Chat UI mockup */}
          <div className="rounded-2xl border shadow-xl overflow-hidden" style={{ backgroundColor: "white", borderColor: "var(--border)" }}>
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
              <div className="flex-1 mx-4 h-5 rounded-md text-center text-xs flex items-center justify-center"
                style={{ backgroundColor: "var(--muted)", color: "var(--muted-foreground)" }}>
                skinly.ai/consultant
              </div>
            </div>

            <div className="p-5 space-y-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-xs px-4 py-3 rounded-2xl rounded-br-md text-sm"
                  style={{ backgroundColor: "var(--sage)", color: "white" }}>
                  "Why has my skin been feeling dry lately?"
                </div>
              </div>

              {/* AI response */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs"
                  style={{ backgroundColor: "var(--sage-light)", color: "var(--sage)" }}>S</div>
                <div className="flex-1 space-y-3">
                  <div className="px-4 py-3 rounded-2xl rounded-tl-md text-sm"
                    style={{ backgroundColor: "var(--beige)", color: "var(--foreground)" }}>
                    Looking at your recent check-in and current routine...
                  </div>

                  <div className="rounded-xl border p-4 space-y-3" style={{ borderColor: "var(--border)" }}>
                    <div>
                      <div className="text-xs font-medium mb-1" style={{ color: "var(--muted-foreground)" }}>Possible reason</div>
                      <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>Treatment frequency too high</div>
                    </div>
                    <div>
                      <div className="text-xs font-medium mb-1" style={{ color: "var(--muted-foreground)" }}>Suggested adjustment</div>
                      <div className="text-xs p-2 rounded-lg font-mono"
                        style={{ backgroundColor: "var(--sage-light)", color: "var(--sage)" }}>
                        7 nights/week → 3 nights/week
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 rounded-lg text-xs font-medium"
                        style={{ backgroundColor: "var(--sage)", color: "white" }}>
                        Apply to Routine
                      </button>
                      <button className="flex-1 py-2 rounded-lg text-xs border"
                        style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>
                        Ask a Follow-Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input bar */}
            <div className="border-t px-4 py-3 flex gap-2" style={{ borderColor: "var(--border)" }}>
              <div className="flex-1 h-9 rounded-xl border text-xs px-3 flex items-center"
                style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}>
                Ask Skinly anything about your skin...
              </div>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "var(--sage)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Feature Bento ────────────────────────────────────────────────────────────

function FeatureBento() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--sage-light)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>Everything included</p>
          <h2 className="font-display text-4xl md:text-5xl" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Everything your skincare journey
            <br />
            needs to stay connected.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large - AI Consultant */}
          <div className="md:col-span-2 rounded-2xl border p-7 flex flex-col justify-between min-h-56"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}>
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--sage-light)" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 6h14M3 10h10M3 14h7" stroke="#5C6E4A" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium mb-2" style={{ color: "var(--foreground)" }}>AI Consultant</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Ask questions with your existing skin context already considered. Every conversation starts from where you are, not from scratch.
              </p>
            </div>
            <div className="flex gap-2 mt-6">
              {["Profile", "Routine", "Check-in"].map((t) => (
                <div key={t} className="text-xs px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: "var(--sage-light)", color: "var(--sage)" }}>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Small - Daily Routine */}
          <div className="rounded-2xl border p-6 flex flex-col justify-between"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--peach)" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7" stroke="#5C6E4A" strokeWidth="1.5" />
                <path d="M10 6v4l3 2" stroke="#5C6E4A" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium mb-2" style={{ color: "var(--foreground)" }}>Daily Routine</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Know what to use, when, and in what order.
              </p>
            </div>
          </div>

          {/* Small - Product Guidance */}
          <div className="rounded-2xl border p-6 flex flex-col justify-between"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--lavender)" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="5" width="14" height="12" rx="2" stroke="#5C6E4A" strokeWidth="1.5" />
                <path d="M7 5V4a3 3 0 016 0v1" stroke="#5C6E4A" strokeWidth="1.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium mb-2" style={{ color: "var(--foreground)" }}>Product Guidance</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                Understand why products may fit before adding them.
              </p>
            </div>
          </div>

          {/* Large - Progress */}
          <div className="md:col-span-2 rounded-2xl border p-7 flex flex-col justify-between"
            style={{ backgroundColor: "white", borderColor: "var(--border)" }}>
            <div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--beige)" }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <polyline points="3,14 7,9 10,12 14,6 17,9" stroke="#5C6E4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium mb-2" style={{ color: "var(--foreground)" }}>Progress & Check-Ins</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                See your routine history, feedback, and adjustments together. Weekly check-ins tell Skinly what's changing—so your routine can adapt with you.
              </p>
            </div>
            {/* Mini progress bar */}
            <div className="mt-6 flex gap-2 items-end">
              {[40, 55, 60, 70, 65, 80, 85].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm"
                  style={{ height: h * 0.5, backgroundColor: i === 6 ? "var(--sage)" : "var(--sage-light)" }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Pricing() {
  const plans = [
    {
      duration: "1 Month",
      desc: "Start building a routine that fits your skin.",
      featured: false,
    },
    {
      duration: "3 Months",
      desc: "Give your routine time to become consistent and adapt along the way.",
      featured: true,
    },
    {
      duration: "6 Months",
      desc: "Stay supported through a longer skincare journey.",
      featured: false,
    },
  ];

  const includes = [
    "Personalized AM/PM routine",
    "AI Consultant",
    "Weekly check-ins",
    "Progress tracking",
    "Routine adjustments",
  ];

  return (
    <section id="pricing" className="py-24 px-6" style={{ backgroundColor: "var(--warm-white)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>Choose your program</p>
          <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Choose how long you want
            <br />Skinly by your side.
          </h2>
          <p className="text-lg leading-relaxed max-w-lg mx-auto" style={{ color: "var(--muted-foreground)" }}>
            Start with personalized guidance, then continue with a structured program that tracks your routine and adapts with your check-ins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.duration}
              className="relative rounded-2xl border p-7 flex flex-col gap-5"
              style={{
                borderColor: plan.featured ? "var(--sage)" : "var(--border)",
                borderWidth: plan.featured ? 2 : 1,
                backgroundColor: plan.featured ? "white" : "var(--warm-white)",
                boxShadow: plan.featured ? "0 8px 32px rgba(92,110,74,0.12)" : "none"
              }}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3.5 py-1 rounded-full font-medium"
                  style={{ backgroundColor: "var(--sage)", color: "white" }}>
                  Most popular
                </div>
              )}
              <div>
                <h3 className="font-display text-2xl font-medium mb-2" style={{ color: "var(--foreground)" }}>{plan.duration}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{plan.desc}</p>
              </div>
              <button
                className="mt-auto w-full py-3 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                style={{
                  backgroundColor: plan.featured ? "var(--sage)" : "transparent",
                  color: plan.featured ? "white" : "var(--foreground)",
                  border: plan.featured ? "none" : "1.5px solid var(--border)"
                }}
              >
                Choose {plan.duration}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm font-medium mb-4" style={{ color: "var(--muted-foreground)" }}>Every program includes</p>
          <div className="flex flex-wrap justify-center gap-3">
            {includes.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm"
                style={{ color: "var(--foreground)" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3 3 6-6" stroke="#5C6E4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust & Privacy ──────────────────────────────────────────────────────────

function Trust() {
  const pillars = [
    {
      title: "Your photos are personal",
      body: "Skin images are handled with care. They're used only to support your consultation and are never shared or used for training."
    },
    {
      title: "Guidance, not diagnosis",
      body: "Skinly helps you understand skincare concerns and routines, but is not a replacement for professional medical care."
    },
    {
      title: "You're always in control",
      body: "Skinly can suggest routine changes, but you review every important adjustment before it's applied."
    }
  ];

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--beige)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--sage)" }}>Trust & Responsible AI</p>
          <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            Personal skincare guidance deserves
            <br />thoughtful AI.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl border" style={{ borderColor: "var(--border)", backgroundColor: "rgba(255,255,255,0.5)" }}>
              <div className="w-8 h-8 flex items-center justify-center mb-5 text-lg" style={{ color: "var(--sage)" }}>
                {["◎", "◈", "◉"][i]}
              </div>
              <h3 className="font-display text-lg font-medium mb-3" style={{ color: "var(--foreground)" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <blockquote className="font-display text-3xl md:text-4xl italic" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
            "Skinly recommends. You decide."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  const [inputVal, setInputVal] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const cycleWords = ["Understand.", "Build.", "Follow.", "Adapt."];

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(143,168,122,0.25) 0%, rgba(228,223,239,0.2) 60%, rgba(250,248,245,0) 100%), var(--warm-white)"
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, var(--sage-mid), transparent)" }} />
        <div className="absolute bottom-12 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, var(--lavender), transparent)" }} />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <p className="text-xs font-medium tracking-widest uppercase mb-8" style={{ color: "var(--sage)" }}>Begin your journey</p>
        <h2 className="font-display text-5xl md:text-6xl mb-5" style={{ color: "var(--foreground)", letterSpacing: "-0.02em" }}>
          Your skin has a story.
        </h2>
        <p className="font-display text-2xl italic mb-8" style={{ color: "var(--sage)" }}>
          Let's understand what it's telling you.
        </p>
        <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          Tell Skinly what's been happening and start with personalized skincare guidance tailored to you.
        </p>

        <div className="max-w-lg mx-auto mb-4">
          <div
            className="relative rounded-2xl border ai-input-glow transition-all"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(8px)"
            }}
          >
            <textarea
              rows={3}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask Skinly about your skin..."
              className="w-full resize-none bg-transparent px-5 pt-4 pb-14 text-sm outline-none"
              style={{ color: "var(--foreground)" }}
            />
            <div className="absolute bottom-3 left-4 right-4 flex justify-end">
              <button
                className="text-sm font-medium px-5 py-2.5 rounded-xl transition-all hover:opacity-90"
                style={{ background: "var(--sage)", color: "white" }}
              >
                Start My Consultation →
              </button>
            </div>
          </div>
        </div>

        <p className="text-xs mb-8" style={{ color: "var(--muted-foreground)" }}>
          No account needed to begin.
        </p>

        {/* Animated words */}
        <div className="flex justify-center gap-4 flex-wrap">
          {cycleWords.map((word, i) => (
            <span key={word} className="font-display text-sm"
              style={{ color: i === 0 ? "var(--sage)" : "var(--muted-foreground)" }}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-16 px-6 border-t" style={{ borderColor: "var(--border)", backgroundColor: "var(--warm-white)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "var(--sage)" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="4" r="2" fill="white" />
                  <path d="M2.5 9.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <span className="font-display font-medium text-base">Skinly</span>
            </div>
            <p className="text-sm leading-relaxed max-w-48" style={{ color: "var(--muted-foreground)" }}>
              Personalized skincare guidance that evolves with you.
            </p>
          </div>

          {[
            { heading: "Product", links: ["How It Works", "AI Consultant", "Routine", "Progress", "Pricing"] },
            { heading: "Company", links: ["About", "Contact"] },
            { heading: "Legal", links: ["Privacy", "Terms", "AI & Skincare Guidance"] },
          ].map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--foreground)" }}>
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors hover:text-[--foreground]"
                      style={{ color: "var(--muted-foreground)" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>© 2026 Skinly</p>
          <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
            Skincare guidance · not medical diagnosis
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-full">
      <Nav />
      <Hero />
      <PersonalizedContext />
      <HowItWorks />
      <AIAnalysis />
      <ProductGuidance />
      <PersonalizedRoutine />
      <Progress />
      <AIConsultant />
      <FeatureBento />
      <Pricing />
      <Trust />
      <FinalCTA />
      <Footer />
    </div>
  );
}
