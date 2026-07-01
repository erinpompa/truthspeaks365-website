/* =====================================================================
   GRADES 68 PAGE TruthSpeaks 365
   Real Topics. Real Growth.
   ===================================================================== */

const G68Hero = () => (
  <section style={{ background: "var(--ink)", padding: "80px 0 90px", position: "relative", overflow: "hidden" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 920 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--pink)", color: "var(--ink)", borderRadius: 999, padding: "7px 18px", marginBottom: 24, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid var(--ink)" }}>
        <Icon name="flame" size={14} color="var(--ink)" /> Grades 6-8 Program
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(48px, 7vw, 92px)", lineHeight: 0.92, margin: "0 0 28px", color: "var(--white)" }}>
        Real Topics.<br /><HL color="var(--pink)">Real Growth.</HL>
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5, color: "var(--fg-on-dark1)", maxWidth: 680, margin: "0 0 36px", fontWeight: 600 }}>
        Each presentation goes all in on one concept rooted in resilience and character development. We bring it to life through storytelling and real-time activities that meet students where they are.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
        <Button variant="lime" size="lg" href="/work#g68">See what's included →</Button>
        <Button variant="ghost" size="lg" href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7" style={{ color: "var(--white)", borderColor: "rgba(255,255,255,.4)" }}>Book for your school →</Button>
      </div>
    </div>
  </section>
);

const G68Why = () => (
  <section style={{ background: "var(--sky)", padding: "80px 0", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-split ts-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
      <div>
        <Eyebrow style={{ marginBottom: 14 }}>Why it works</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.0, color: "var(--ink)", margin: "0 0 20px" }}>
          One concept.<br /><HL color="var(--pink)">All in.</HL>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 16px" }}>
          Middle school is where kids start figuring out who they are. That's exactly when they need real stories from real women who've been through hard things and came out the other side.
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: 0 }}>
          We don't do generic "be yourself" talks. Every assembly is built around one concept rooted in resilience, delivered through storytelling and interactive activities that make it land.
        </p>
      </div>
      <div style={{ borderRadius: 24, border: "3px solid var(--pink)", overflow: "hidden", boxShadow: "8px 8px 0 var(--pink)", aspectRatio: "4/3", maxHeight: 380 }}>
        <img src="/assets/photo-presenter-classroom.jpg" alt="TruthSpeaks 365 presenter with students" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }} />
      </div>
    </div>
  </section>
);

const G68Concepts = () => {
  const concepts = [
    { icon: "circle-dot", color: "var(--pink)",   title: "The Black Dot",        body: "The hard thing isn't the whole page. Students learn to see the white space around the dot, everything they still have, and widen the frame." },
    { icon: "shield",     color: "var(--lime)",   title: "The Warrior Toolkit",  body: "Four real moves for when life gets hard: Power of the Pause, Circle of Care, healthy action in 24 hours, and the Reframe." },
    { icon: "zap",        color: "var(--sky)",    title: "Belief to Action",     body: "How a belief feeds a thought that drives a behavior, and exactly how to interrupt the chain before it takes over." },
    { icon: "heart",      color: "var(--violet)", title: "Boundaries and Self",  body: "Honest conversations about knowing your worth, setting boundaries, and what healthy relationships actually look like." },
  ];
  return (
    <section style={{ background: "var(--lime)", padding: "80px 0", borderTop: "2px solid var(--ink)" }}>
      <div className="ts-wrap">
        <SectionHead className="ts-reveal" eyebrow="What we cover" title={<span>Concepts that <HL color="var(--pink)">actually stick.</HL></span>} sub="Each assembly focuses on one. Students leave with something they can name, remember, and use." style={{ marginBottom: 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="ts-reveal">
          {concepts.map(c => (
            <div key={c.title} style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 20, padding: "28px 26px", display: "flex", gap: 20, alignItems: "flex-start", boxShadow: "4px 4px 0 var(--ink-200)" }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: c.color, display: "grid", placeItems: "center", border: "2px solid var(--ink)", flexShrink: 0 }}>
                <Icon name={c.icon} size={24} color="var(--ink)" />
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--ink)", margin: "0 0 8px" }}>{c.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.55, color: "var(--ink-500)", margin: 0 }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const G68CTA = () => (
  <section style={{ background: "var(--pink)", padding: "80px 0", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-split ts-reveal" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }}>
      <div>
        <Eyebrow color="var(--ink)" style={{ marginBottom: 14 }}>Ready to bring this to your school?</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 0.96, color: "var(--ink)", margin: "0 0 16px" }}>
          See everything that's included.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.5, color: "var(--ink)", margin: 0, fontWeight: 500, maxWidth: 480 }}>
          Head to our Work With Us page to see formats, what students walk away with, and how to get on the calendar.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-end" }}>
        <Button variant="dark" size="lg" href="/work#g68">See what's included →</Button>
        <Button variant="ghost" size="md" href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7" style={{ borderColor: "var(--ink)" }}>Book directly →</Button>
      </div>
    </div>
  </section>
);

function App() {
  useLucide();
  return (
    <React.Fragment>
      <NavBar active="Work With Us" />
      <G68Hero />
      <G68Why />
      <G68Concepts />
      <G68CTA />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
