/* =====================================================================
   TRUTHSPEAKS 365 SHARED COMPONENTS
   Built on the Erin Pompa design system. School-facing register:
   bright, bold, real and faith-free throughout.
   Exported to window at the bottom for use across every page.
   ===================================================================== */

const Icon = ({ name, size = 20, color = "currentColor", style = {} }) => (
  <i data-lucide={name} style={{ width: size, height: size, color, display: "inline-flex", ...style }}></i>
);

// Eyebrow / kicker label wide-tracked all-caps
const Eyebrow = ({ children, color = "var(--violet-dark)", style = {} }) => (
  <div style={{
    fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13,
    letterSpacing: "0.16em", textTransform: "uppercase", color, ...style
  }}>{children}</div>
);

// Highlighter-swipe word the signature device
const HL = ({ children, color = "var(--lime)" }) => (
  <span style={{
    backgroundImage: `linear-gradient(transparent 8%, ${color} 8%, ${color} 86%, transparent 86%)`,
    padding: "0 0.1em", WebkitBoxDecorationBreak: "clone", boxDecorationBreak: "clone"
  }}>{children}</span>
);

// Handwritten accent
const Script = ({ children, color = "var(--pink)", style = {} }) => (
  <span style={{ fontFamily: "var(--font-script)", fontWeight: 600, color, textTransform: "none", ...style }}>{children}</span>
);

// Button handDrawn CTA (primary/lime) vs utility (dark/light/ghost)
const HAND_RADII = [
  "255px 18px 225px 22px / 22px 225px 18px 255px",
  "18px 235px 20px 225px / 220px 16px 235px 18px",
];
const Button = ({ children, variant = "primary", href, onClick, size = "md", style = {} }) => {
  const [press, setPress] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const handDrawn = variant === "primary" || variant === "lime";
  const variants = {
    primary: { bg: hover ? "var(--pink-dark)" : "var(--pink)", fg: "var(--ink)", border: "var(--ink)", shadow: true },
    lime:    { bg: hover ? "var(--lime-dark)" : "var(--lime)", fg: "var(--ink)", border: "var(--ink)", shadow: true },
    dark:    { bg: hover ? "var(--ink-800)" : "var(--ink)", fg: "var(--white)", border: "var(--ink)", shadow: false },
    light:   { bg: hover ? "var(--paper-2)" : "var(--white)", fg: "var(--ink)", border: "var(--ink)", shadow: false },
    ghost:   { bg: hover ? "var(--ink)" : "transparent", fg: hover ? "var(--white)" : "var(--ink)", border: "var(--ink)", shadow: false },
  };
  const v = variants[variant] || variants.primary;
  const pads = handDrawn
    ? (size === "lg" ? "12px 34px" : size === "sm" ? "7px 20px" : "10px 28px")
    : (size === "lg" ? "16px 32px" : size === "sm" ? "9px 18px" : "13px 26px");
  const fs = handDrawn
    ? (size === "lg" ? 30 : size === "sm" ? 22 : 26)
    : (size === "lg" ? 18 : size === "sm" ? 14 : 16);
  const baseShadow = v.shadow ? "5px 5px 0 var(--ink)" : "none";
  const radius = handDrawn ? (variant === "lime" ? HAND_RADII[1] : HAND_RADII[0]) : "999px";
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{
        fontFamily: handDrawn ? "var(--font-script)" : "var(--font-display)", fontWeight: handDrawn ? 700 : 800,
        textTransform: handDrawn ? "none" : "uppercase", letterSpacing: handDrawn ? 0 : "0.02em",
        fontSize: fs, padding: pads, lineHeight: 1, textDecoration: "none",
        background: v.bg, color: v.fg, border: `${handDrawn ? 2.5 : 2}px solid ${v.border}`, borderRadius: radius,
        cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", maxWidth: "100%",
        boxShadow: v.shadow ? (press ? "1px 1px 0 var(--ink)" : baseShadow) : "none",
        transform: v.shadow && press ? "translate(4px,4px)" : "translate(0,0)",
        transition: "transform .14s cubic-bezier(.2,.8,.2,1), box-shadow .14s, background .14s",
        ...style
      }} className="ts-btn">{children}</Tag>
  );
};

// Brand social glyphs (lucide latest dropped brand icons) inline SVG
const SOCIAL_PATHS = {
  instagram: <React.Fragment><rect x="2" y="2" width="20" height="20" rx="5.5"></rect><circle cx="12" cy="12" r="4.2"></circle><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"></circle></React.Fragment>,
  tiktok: <path d="M14 3v9.6a3.4 3.4 0 1 1-2.6-3.3M14 3c.4 2 1.9 3.6 4 3.9" strokeLinejoin="round"></path>,
  mail: <React.Fragment><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"></rect><path d="m3 6 9 6 9-6"></path></React.Fragment>,
};
const Social = ({ name, size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" style={{ display: "block" }}>
    {SOCIAL_PATHS[name] || SOCIAL_PATHS.mail}
  </svg>
);

// Tag / pill
const Tag = ({ children, bg = "var(--lime)", fg = "var(--ink)", style = {} }) => (
  <span style={{
    fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, textTransform: "uppercase",
    letterSpacing: "0.06em", background: bg, color: fg, borderRadius: 999, padding: "6px 14px",
    display: "inline-block", ...style
  }}>{children}</span>
);

// Image slot wrapper sticker-framed, user-fillable. Falls back to a
// hatched placeholder caption if image-slot.js isn't available.
const Frame = ({ id, label = "Drop a photo", ratio = "3 / 4", bg = "var(--violet)", radius = 24, rotate = 0, shadow = "var(--shadow-hard-pink)", style = {} }) => (
  <div style={{
    aspectRatio: ratio, borderRadius: radius, border: "2px solid var(--ink)",
    boxShadow: shadow, transform: rotate ? `rotate(${rotate}deg)` : "none", overflow: "hidden",
    background: bg, ...style
  }}>
    <image-slot id={id} placeholder={label} shape="rect"
      style={{ width: "100%", height: "100%", display: "block", "--bg": bg }}></image-slot>
  </div>
);

// Section heading block (eyebrow + big display title)
const SectionHead = ({ eyebrow, eyebrowColor, title, sub, align = "center", light = false, maxW = 760, style = {} }) => (
  <div style={{ textAlign: align, maxWidth: align === "center" ? maxW : "none", margin: align === "center" ? "0 auto" : 0, ...style }}>
    {eyebrow && <Eyebrow color={eyebrowColor || "var(--violet-dark)"} style={{ marginBottom: 14 }}>{eyebrow}</Eyebrow>}
    <h2 style={{
      fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase",
      letterSpacing: "-0.02em", fontSize: "clamp(32px, 4.4vw, 48px)", lineHeight: 1.06,
      color: light ? "var(--white)" : "var(--ink)", margin: 0
    }}>{title}</h2>
    {sub && <p style={{
      fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
      color: light ? "var(--fg-on-dark2)" : "var(--ink-500)", margin: "16px auto 0",
      maxWidth: align === "center" ? 620 : "none"
    }}>{sub}</p>}
  </div>
);

/* ---------------------------------------------------------------------
   NAV multi-page, sticky, frosted on scroll. Logo lockup + page links.
   --------------------------------------------------------------------- */
const NAV = [
  { label: "Work With Us", href: "/work", children: [
    { label: "For Youth", href: "/work" },
    { label: "For Adults", href: "/adults" },
  ]},
  { label: "Become a Presenter", href: "/presenter" },
  { label: "Youth Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const NavBar = ({ active = "Home" }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [hoveredNav, setHoveredNav] = React.useState(null);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 16);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <React.Fragment>
    <a href="#main-content" style={{
      position: "absolute", top: -100, left: 12, zIndex: 9999,
      background: "var(--sky)", color: "var(--ink)", padding: "10px 18px",
      fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 15,
      borderRadius: 8, textDecoration: "none", border: "2px solid var(--ink)",
      transition: "top .1s"
    }}
    onFocus={e => e.currentTarget.style.top = "12px"}
    onBlur={e => e.currentTarget.style.top = "-100px"}
    >Skip to main content</a>
    <header style={{
      position: "sticky", top: 0, zIndex: 60,
      background: scrolled ? "rgba(255,255,255,.9)" : "rgba(255,255,255,1)",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: `1px solid ${scrolled ? "var(--ink-100)" : "transparent"}`,
      transition: "all .2s"
    }}>
      <div style={{ maxWidth: 1220, margin: "0 auto", padding: "12px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", flex: "none" }}>
          <img src="/assets/ts-icon.png" alt="TruthSpeaks 365" style={{ height: 52, display: "block" }} />
        </a>
        <nav className="ts-nav-desk" style={{ display: "flex", alignItems: "center", gap: 26 }}>
          {NAV.map(l => {
            const isActive = active === l.label || (l.children && l.children.some(c => c.label === active));
            if (l.children) return (
              <div key={l.label} style={{ position: "relative" }}
                onMouseEnter={() => setHoveredNav(l.label)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15.5, color: "var(--ink)", cursor: "default", position: "relative", opacity: isActive ? 1 : 0.72, paddingBottom: 4, display: "inline-flex", alignItems: "center", gap: 5, userSelect: "none" }}>
                  {l.label}<Icon name="chevron-down" size={13} color="var(--ink)" />
                  {isActive && <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 3, background: "var(--pink)", borderRadius: 999 }}></span>}
                </span>
                {hoveredNav === l.label && (
                  <div style={{ position: "absolute", top: "100%", left: 0, background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 14, overflow: "hidden", boxShadow: "4px 4px 0 var(--ink)", minWidth: 170, zIndex: 100, marginTop: 4 }}>
                    {l.children.map((child, i) => (
                      <a key={child.label} href={child.href} style={{ display: "block", padding: "13px 18px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--ink)", textDecoration: "none", borderTop: i > 0 ? "1px solid var(--ink-100)" : "none", background: active === child.label ? "var(--lime)" : "transparent" }}>{child.label}</a>
                    ))}
                  </div>
                )}
              </div>
            );
            return (<a key={l.label} href={l.href} style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15.5, color: "var(--ink)", textDecoration: "none", position: "relative", opacity: isActive ? 1 : 0.72, paddingBottom: 4 }}>
              {l.label}{isActive && <span style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 3, background: "var(--pink)", borderRadius: 999 }}></span>}
            </a>);
          })}
          <Button variant="primary" size="sm" href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7">Book us →</Button>
        </nav>
        <button className="ts-nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open} aria-controls="ts-nav-mobile" style={{
          display: "none", background: "var(--ink)", border: "2px solid var(--ink)", borderRadius: 12,
          width: 46, height: 46, placeItems: "center", cursor: "pointer", color: "var(--white)"
        }}>
          <Icon name={open ? "x" : "menu"} size={22} color="var(--white)" />
        </button>
      </div>
      {open && (
        <div id="ts-nav-mobile" className="ts-nav-mobile" role="navigation" aria-label="Mobile menu" style={{ borderTop: "1px solid var(--ink-100)", background: "var(--paper)", padding: "10px 28px 20px" }}>
          {NAV.map(l => l.children ? (
            <React.Fragment key={l.label}>
              <div style={{ padding: "12px 0 4px", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-400)" }}>{l.label}</div>
              {l.children.map(child => (<a key={child.label} href={child.href} style={{ display: "block", padding: "10px 0 10px 14px", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 17, color: active === child.label ? "var(--pink-dark)" : "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--ink-100)" }}>{child.label}</a>))}
            </React.Fragment>
          ) : (
            <a key={l.label} href={l.href} style={{ display: "block", padding: "12px 0", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 18, color: active === l.label ? "var(--pink-dark)" : "var(--ink)", textDecoration: "none", borderBottom: "1px solid var(--ink-100)" }}>{l.label}</a>
          ))}
          <div style={{ marginTop: 16 }}>
            <Button variant="primary" size="md" href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7">Book us →</Button>
          </div>
        </div>
      )}
    </header>
    </React.Fragment>
  );
};

/* ---------------------------------------------------------------------
   MARQUEE scrolling phrase band
   --------------------------------------------------------------------- */
const Marquee = ({ items, bg = "var(--lime)", color = "var(--ink)", star = "var(--pink)", speed = 30 }) => (
  <div aria-hidden="true" style={{ background: bg, borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)", overflow: "hidden", padding: "13px 0" }}>
    <div style={{ display: "flex", whiteSpace: "nowrap", animation: `ts-marquee ${speed}s linear infinite`, width: "max-content" }}>
      {[...items, ...items, ...items].map((t, i) => (
        <span key={i} style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: 22, color, padding: "0 26px", display: "inline-flex", alignItems: "center", gap: 26 }}>
          {t}<span style={{ color: star }}>✦</span>
        </span>
      ))}
    </div>
  </div>
);

/* ---------------------------------------------------------------------
   FOOTER ink, light logo lockup, school-safe
   --------------------------------------------------------------------- */
const Footer = () => (
  <footer style={{ background: "var(--ink)", color: "var(--white)", padding: "64px 28px 40px", borderTop: "3px solid var(--lime)" }}>
    <div style={{ maxWidth: 1220, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: 40, alignItems: "start" }} className="ts-foot-grid">
        <div>
          <img src="/assets/logo-dark.png" alt="TruthSpeaks 365" style={{ height: 90, display: "block", marginLeft: -4 }} />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--lime)", marginBottom: 16 }}>Explore</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {NAV.flatMap(l => l.children ? l.children : [l]).map(l => (
              <a key={l.label} href={l.href} style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, color: "var(--white)", textDecoration: "none", opacity: 0.85 }}>{l.label}</a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--lime)", marginBottom: 16 }}>Connect</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            <a href="mailto:erin@erinpompa.com" style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, color: "var(--white)", textDecoration: "none", opacity: 0.85 }}>erin@erinpompa.com</a>
            <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
              <a href="https://www.instagram.com/truthspeaks365/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: 44, height: 44, borderRadius: 999, border: "2px solid var(--white)", display: "grid", placeItems: "center" }}>
                <Social name="instagram" size={19} color="var(--white)" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 44, paddingTop: 22, borderTop: "1px solid var(--ink-700)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--fg-on-dark2)" }}>© 2026 TruthSpeaks 365 · Women with courage. Stories with impact.</div>
        <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 22, color: "var(--lime)" }}>you belong here.</div>
      </div>
    </div>
  </footer>
);

// Inner-page hero band (ink) eyebrow + big title + sub, optional kicker chip
const PageHero = ({ eyebrow, title, sub, accent = "var(--lime)", chip, bgImage }) => (
  <section id="main-content" style={{ background: "var(--ink)", color: "var(--white)", padding: "64px 0 72px", position: "relative", overflow: "hidden" }}>
    {bgImage && <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: `url('${bgImage}')`, backgroundSize: "cover", backgroundPosition: "center 28%" }}></div>}
    {bgImage && <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(22,20,19,.88)" }}></div>}
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 920, position: "relative", zIndex: 2 }}>
      {chip && <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: accent, color: "var(--ink)", borderRadius: 999, padding: "7px 16px", marginBottom: 22, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid var(--ink)", whiteSpace: "nowrap" }}>{chip}</div>}
      {eyebrow && <Eyebrow color={accent} style={{ marginBottom: 16 }}>{eyebrow}</Eyebrow>}
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.035em", fontSize: "clamp(40px, 6vw, 76px)", lineHeight: 0.95, margin: 0 }}>{title}</h1>
      {sub && <p style={{ fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.5, color: "var(--fg-on-dark2)", maxWidth: 600, margin: "22px 0 0" }}>{sub}</p>}
    </div>
  </section>
);

// Bottom CTA band reused across inner pages
const BottomCTA = ({ eyebrow = "Ready when you are", title, body, btn, href, bg = "var(--lime)" }) => (
  <section style={{ background: bg, padding: "76px 0", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 800, textAlign: "center" }}>
      <Eyebrow color="var(--ink)" style={{ marginBottom: 14 }}>{eyebrow}</Eyebrow>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(32px, 4.8vw, 56px)", lineHeight: 0.98, color: "var(--ink)", margin: "0 0 18px" }}>{title}</h2>
      {body && <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.5, color: "var(--ink)", margin: "0 auto 30px", fontWeight: 500, maxWidth: 560 }}>{body}</p>}
      <Button variant="dark" size="lg" href={href}>{btn}</Button>
    </div>
  </section>
);

// ---- Form primitives (shared by Presenter + Contact) ----------------
const Field = ({ label, children, hint }) => (
  <label style={{ display: "block", marginBottom: 18, textAlign: "left" }}>
    <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13.5, color: "var(--ink)", display: "block", marginBottom: 7, letterSpacing: "0.01em" }}>{label}</span>
    {children}
    {hint && <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)", display: "block", marginTop: 6 }}>{hint}</span>}
  </label>
);
const inputStyle = (filled) => ({
  width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 16,
  padding: "13px 16px", border: `2px solid ${filled ? "var(--ink)" : "var(--ink-100)"}`,
  borderRadius: 14, background: "var(--white)", color: "var(--ink)", outline: "none", transition: "border-color .15s"
});
const Input = ({ value, onChange, placeholder, type = "text" }) => (
  <input type={type} value={value} placeholder={placeholder} onChange={onChange}
    onFocus={e => e.target.style.borderColor = "var(--pink)"}
    onBlur={e => e.target.style.borderColor = value ? "var(--ink)" : "var(--ink-100)"}
    style={inputStyle(value)} />
);
const Textarea = ({ value, onChange, placeholder, rows = 5 }) => (
  <textarea value={value} placeholder={placeholder} rows={rows} onChange={onChange}
    onFocus={e => e.target.style.borderColor = "var(--pink)"}
    onBlur={e => e.target.style.borderColor = value ? "var(--ink)" : "var(--ink-100)"}
    style={{ ...inputStyle(value), resize: "vertical", lineHeight: 1.5 }} />
);
const ChoiceRow = ({ options, value, onChange }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
    {options.map(o => (
      <button type="button" key={o} onClick={() => onChange(o)} style={{
        fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, padding: "9px 16px", borderRadius: 999,
        cursor: "pointer", border: "2px solid var(--ink)", transition: "all .14s",
        background: value === o ? "var(--pink)" : "var(--white)", color: "var(--ink)",
        boxShadow: value === o ? "2px 2px 0 var(--ink)" : "none"
      }}>{o}</button>
    ))}
  </div>
);
const Success = ({ name, lines }) => (
  <div style={{ textAlign: "center", padding: "16px 0" }}>
    <div style={{ width: 76, height: 76, borderRadius: 999, background: "var(--lime)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", margin: "0 auto 20px", boxShadow: "4px 4px 0 var(--ink)" }}>
      <Icon name="check" size={38} color="var(--ink)" />
    </div>
    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: 30, color: "var(--ink)", margin: "0 0 12px" }}>You're in{name ? `, ${name}` : ""}!</h3>
    {lines.map((l, i) => <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.5, color: "var(--ink-500)", margin: "0 0 8px" }}>{l}</p>)}
    <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--pink-dark)", marginTop: 14 }}>go now, baby.</div>
  </div>
);

// Re-run lucide whenever called (icons render after React commits)
const useLucide = () => { React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }); };

Object.assign(window, { Icon, Social, Eyebrow, HL, Script, Button, Tag, Frame, SectionHead, PageHero, BottomCTA, Field, Input, Textarea, ChoiceRow, Success, NavBar, Marquee, Footer, useLucide, TS_NAV: NAV });
