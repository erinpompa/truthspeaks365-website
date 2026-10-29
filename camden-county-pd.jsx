/* =====================================================================
   CAMDEN COUNTY PD RESOURCE PAGE - TruthSpeaks 365
   Standalone page at /camden-county-pd (not linked in main nav)
   ===================================================================== */

const GOOGLE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLScHyNtlViL-LoUuI1uClAFupbxBlB1HQfTk5SO3PV_SJyTT8A/viewform?usp=dialog";
const PIPEDRIVE_FORM = "https://webforms.pipedrive.com/f/clTep0VNxXRyL9v4qQAQH1MknN1K5SsbuThJFHcYabdZNS63Ki18JRtYVXQpC4UtRF";
const AMAZON_BOOK = "https://www.amazon.com/dp/1952654394";
const PURE_SKYS = "https://www.pureskys.com";

const PRESENTERS = [
  { name: "Erin Pompa", role: "Founder & CEO", img: "/uploads/cc-erin.jpg", color: "var(--lime)" },
  { name: "Christine Conti", role: "Presenter", img: "/uploads/cc-christine.jpg", color: "var(--pink)" },
  { name: "Candice Beers", role: "Presenter", img: "/uploads/cc-candice.jpg", color: "var(--sky)" },
];

/* ---- Logo bar ---- */
const LogoBar = () => (
  <header style={{ background: "var(--white)", borderBottom: "3px solid var(--ink)", padding: "18px 0" }}>
    <div className="ts-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
      <img src="/uploads/camden-logo.png" alt="Camden City School District - Students 1st Always" style={{ height: 72, width: "auto", display: "block" }} onError={e => { e.currentTarget.style.display = "none"; }} />
      <img src="/uploads/truthspeaks-logo.png" alt="TruthSpeaks 365" style={{ height: 56, width: "auto", display: "block", borderRadius: 10 }} />
    </div>
  </header>
);

/* ---- Thank you ---- */
const ThankYou = () => (
  <section style={{ background: "var(--ink)", padding: "64px 0 56px" }}>
    <div className="ts-wrap" style={{ textAlign: "center", maxWidth: 780, margin: "0 auto" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(36px, 5.5vw, 68px)", lineHeight: 0.95, color: "var(--white)", margin: "0 0 20px" }}>
        Thank you,<br /><span style={{ color: "var(--lime)" }}>Camden County.</span>
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "clamp(16px, 2vw, 19px)", color: "var(--pink)", margin: "0 0 14px" }}>
        To the teachers, administrators, educators, and staff:
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.6, color: "var(--fg-on-dark2)", margin: "0 auto", maxWidth: 620 }}>
        We are so grateful for the gift to serve you, and we don't take that lightly. Here are some additional resources and links from our time together.
      </p>
    </div>
  </section>
);

/* ---- Survey ---- */
const Survey = () => (
  <section style={{ background: "var(--lime)", borderTop: "3px solid var(--ink)", borderBottom: "3px solid var(--ink)", padding: "40px 0" }}>
    <div className="ts-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 28, flexWrap: "wrap" }}>
      <div style={{ flex: 1, minWidth: 260 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1.0, color: "var(--ink)", margin: "0 0 10px" }}>
          First and foremost, your feedback matters to us.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--ink)", margin: 0, maxWidth: 560 }}>
          If you don't mind, please take 3-5 minutes to fill out our survey. One survey covers all of us.
        </p>
      </div>
      <a href={GOOGLE_FORM} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ink)", color: "var(--lime)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, textTransform: "uppercase", padding: "16px 28px", borderRadius: 14, textDecoration: "none", flexShrink: 0 }}>
        <Icon name="clipboard-list" size={18} color="var(--lime)" /> Take the survey
      </a>
    </div>
  </section>
);

/* ---- Presenter photos ---- */
const Presenters = () => (
  <section style={{ background: "var(--paper)", padding: "56px 0 24px" }}>
    <div className="ts-wrap" style={{ display: "flex", justifyContent: "center", gap: "clamp(12px, 4vw, 40px)" }}>
      {PRESENTERS.map(p => (
        <div key={p.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div style={{ width: "clamp(84px, 24vw, 130px)", height: "clamp(84px, 24vw, 130px)", borderRadius: 999, border: `4px solid ${p.color}`, outline: "2px solid var(--ink)", overflow: "hidden" }}>
            <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(12px, 3.4vw, 16px)", textTransform: "uppercase", color: "var(--ink)", textAlign: "center", lineHeight: 1.1 }}>{p.name}</div>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "clamp(10px, 2.6vw, 12px)", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-500)", marginTop: -4, textAlign: "center" }}>{p.role}</div>
        </div>
      ))}
    </div>
  </section>
);

/* ---- Resource card ---- */
const ResourceCard = ({ who, color, title, body, cta, href, icon }) => (
  <div style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 18, padding: "24px 22px", boxShadow: `5px 5px 0 ${color}`, display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ alignSelf: "flex-start", background: color, border: "2px solid var(--ink)", borderRadius: 8, padding: "3px 10px", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink)" }}>{who}</div>
    <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 20, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>{title}</h3>
    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "var(--ink-500)", margin: 0, flex: 1 }}>{body}</p>
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ink)", color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, textTransform: "uppercase", padding: "11px 18px", borderRadius: 10, textDecoration: "none", marginTop: 4 }}>
      <Icon name={icon} size={14} color={color} /> {cta}
    </a>
  </div>
);

const BOOKING = "https://calendar.app.google/3rMyUJt4Q6iRzvzW7";

const Band = ({ dark, bg, title, body, cta, href, icon, btnBg, external }) => (
  <div style={{ marginTop: 16, background: bg || (dark ? "var(--ink)" : "var(--white)"), border: "2px solid var(--ink)", borderRadius: 18, padding: "24px 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
    <div style={{ flex: 1, minWidth: 240 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 20, textTransform: "uppercase", letterSpacing: "-0.02em", color: dark ? "var(--white)" : "var(--ink)", marginBottom: 6 }}>{title}</div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: dark ? "var(--fg-on-dark2)" : "var(--ink-500)", margin: 0 }}>{body}</p>
    </div>
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: btnBg, color: "var(--ink)", border: "2px solid var(--ink)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, textTransform: "uppercase", padding: "12px 20px", borderRadius: 10, textDecoration: "none", flexShrink: 0 }}>
      <Icon name={icon} size={14} color="var(--ink)" /> {cta}
    </a>
  </div>
);

const Resources = () => (
  <section style={{ background: "var(--paper)", padding: "32px 0 72px" }}>
    <div className="ts-wrap">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22, alignItems: "start" }}>
        <ResourceCard
          who="Erin's resources" color="var(--lime)" icon="bell"
          title="Join Erin's Book Crew"
          body="This one's for the grown-ups! Like Erin's content? Get on the list to hear first when her book for adults releases. It's still in the draft stage with a long way to go. The working title is Quieting the Beast, with the subtitle Taking the Opposite Action. It's all about reframing and shifting your perspective so you can live a life you're truly proud of."
          cta="Join the crew" href={PIPEDRIVE_FORM}
        />
        <ResourceCard
          who="Christine's resources" color="var(--pink)" icon="book-open"
          title="Get Christine's Book"
          body="Loved Christine's session? Want to dive deeper into shifting your perspective and taking courageous action? Grab her book, Split-Second Courage, and keep that momentum going."
          cta="Grab it now" href={AMAZON_BOOK}
        />
        <ResourceCard
          who="Candice's resources" color="var(--sky)" icon="external-link"
          title="Pure Skys Spa & Yoga"
          body="Want to go deeper with your breathwork, yoga, massage, or Reiki? Check out Candice's spa and yoga studio for classes, wellness, and more."
          cta="Visit Pure Skys" href={PURE_SKYS}
        />
      </div>
      <div style={{ marginTop: 12 }} />
      <Band dark title="Extended Learning" icon="graduation-cap" btnBg="var(--lime)" cta="Explore the lessons" href="/extendedlearning/"
        body="Over time, we're building a library of extended lessons to support students after the presentations we give. Save this link and come back whenever you want inspiration or lessons to bring into your classroom." />
      <Band title="Support for your students" icon="heart-handshake" btnBg="var(--pink)" cta="Student resources" href="/resources/"
        body="Of course, we know you have counselors, SACs, admins, and so many beautiful people already in place. We just wanted you to know we also have a resource page for young people, in case it helps." />
      <Band bg="var(--lime)" title="Know someone who could use us?" icon="globe" btnBg="var(--white)" cta="Visit truthspeaks365.com" href="https://truthspeaks365.com" external
        body="Lastly, do you know a school, organization, or nonprofit that could benefit from our presentations? We do youth presentations for grades 3 to 12, plus professional development. We help humans shift negative thoughts and shift their perspective. Share our website with them!" />
    </div>
  </section>
);

/* ---- Footer ---- */
const CCFooter = () => (
  <footer style={{ background: "var(--ink)", borderTop: "3px solid var(--lime)", padding: "32px 0" }}>
    <div className="ts-wrap" style={{ textAlign: "center" }}>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--pink)", margin: "0 0 10px" }}>Women with courage. Stories with impact.</p>
      <a href="https://truthspeaks365.com" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--lime)", textDecoration: "none", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>truthspeaks365.com</a>
    </div>
  </footer>
);

function App() {
  useLucide();
  return (
    <React.Fragment>
      <LogoBar />
      <ThankYou />
      <Survey />
      <Presenters />
      <Resources />
      <CCFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
