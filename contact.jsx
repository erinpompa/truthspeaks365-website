/* =====================================================================
   CONTACT, TruthSpeaks 365
   ===================================================================== */

const ACTION_CARDS = [
  { label: "Book a program", icon: "calendar-check", color: "var(--pink)", href: "https://calendar.app.google/3rMyUJt4Q6iRzvzW7", sub: "Schedule on our Google Calendar" },
  { label: "Become a Presenter", icon: "mic", color: "var(--lime)", href: "/presenter", sub: "Learn about joining our team" },
];

const InfoCard = ({ icon, label, value, sub, href }) => (
  <a href={href || "#"} onClick={e => { if (!href) e.preventDefault(); }} style={{
    textDecoration: "none", display: "flex", gap: 14, alignItems: "flex-start",
    background: "var(--surface-dark)", border: "1px solid var(--ink-700)", borderRadius: 16, padding: "18px 20px"
  }}>
    <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--lime)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", flex: "none" }}>
      <Icon name={icon} size={22} color="var(--ink)" />
    </div>
    <div>
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 4 }}>{label}</div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--white)", letterSpacing: "-0.01em" }}>{value}</div>
      {sub && <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--fg-on-dark2)", marginTop: 2 }}>{sub}</div>}
    </div>
  </a>
);

const ContactForm = () => (
  <div style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 28, boxShadow: "8px 8px 0 var(--pink)", padding: "38px 38px 42px" }}>
    <Eyebrow style={{ marginBottom: 12 }}>What would you like to do?</Eyebrow>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {ACTION_CARDS.map(card => (
        <a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
          style={{ textDecoration: "none", background: card.color, border: "2px solid var(--ink)", borderRadius: 18, padding: "24px 22px", boxShadow: "4px 4px 0 var(--ink)", display: "flex", alignItems: "center", gap: 18, transition: "transform .15s, box-shadow .15s" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "6px 6px 0 var(--ink)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "4px 4px 0 var(--ink)"; }}>
          <div style={{ width: 52, height: 52, borderRadius: 14, background: "var(--ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
            <Icon name={card.icon} size={26} color={card.color} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--ink)", lineHeight: 1.1 }}>{card.label}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink)", opacity: 0.7, marginTop: 4 }}>{card.sub}</div>
          </div>
          <Icon name="arrow-right" size={22} color="var(--ink)" />
        </a>
      ))}
    </div>
  </div>
);

const ContactSection = () => (
  <section style={{ background: "var(--sky)", padding: "72px 0 92px" }}>
    <div className="ts-wrap">
      <div className="ts-split" style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 40, alignItems: "start" }}>
        <div className="ts-reveal"><ContactForm /></div>
        <div className="ts-reveal" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* A note from Erin */}
          <div style={{ background: "var(--ink)", borderRadius: 22, padding: "28px 28px", border: "2px solid var(--ink)" }}>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 14 }}>A note from Erin</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.65, color: "var(--fg-on-dark2)", margin: 0 }}>
              Every message that comes through here is handled personally by me or my incredible assistant Shay, who has been holding things down for two years strong while I'm on the road and managing TruthSpeaks 365. <strong style={{ color: "var(--white)" }}>Responses may take a few days, but we promise every message gets the care it deserves.</strong>
            </p>
          </div>
          {/* Email card */}
          <a href="mailto:erin@erinpompa.com" style={{ textDecoration: "none", background: "var(--lime)", borderRadius: 22, padding: "22px 24px", border: "2px solid var(--ink)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", opacity: 0.6, marginBottom: 6 }}>Reach us directly</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(16px, 2vw, 22px)", color: "var(--ink)", letterSpacing: "-0.02em" }}>erin@erinpompa.com</div>
            </div>
            <Icon name="mail" size={26} color="var(--ink)" />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/truthspeaks365/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "var(--pink)", border: "2px solid var(--ink)", borderRadius: 22, padding: "16px 20px", textDecoration: "none", boxShadow: "4px 4px 0 var(--ink)" }}>
            <Social name="instagram" size={18} color="var(--ink)" />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 15, color: "var(--ink)" }}>@truthspeaks365</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  useLucide();
  return (
    <React.Fragment>
      <NavBar active="Contact" />
      <PageHero
        eyebrow="Contact us"
        bgImage="/assets/photo-hs-crowd.jpg"
        title={<span>Let's make an <HL color="var(--pink)">impact.</HL></span>}
        sub="We can't wait to impact your students and to learn more about you if you feel called to impact students. Tell us what you need."
      />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
