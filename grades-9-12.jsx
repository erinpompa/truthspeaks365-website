/* =====================================================================
   GRADES 912 PAGE TruthSpeaks 365
   Real Talk. Real Tools.
   ===================================================================== */

const G912Hero = () => (
  <section style={{ background: "var(--ink)", padding: "80px 0 90px", position: "relative", overflow: "hidden" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 920, textAlign: "center", margin: "0 auto" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--violet)", color: "var(--ink)", borderRadius: 999, padding: "7px 18px", marginBottom: 24, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid var(--ink)" }}>
        <Icon name="zap" size={14} color="var(--ink)" /> Grades 9-12 Program
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(48px, 7vw, 92px)", lineHeight: 0.92, margin: "0 0 28px", color: "var(--white)" }}>
        Real Talk.<br /><HL color="var(--violet)">Real Tools.</HL>
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5, color: "var(--fg-on-dark1)", maxWidth: 720, margin: "0 auto 16px", fontWeight: 600 }}>
        These are the conversations teenagers need to have. During our presentations, we go there, honestly and intentionally. We share real stories of women who have overcome adversity, including experiences with substance abuse, incarceration, challenging relationships, and sexual assault. And if your school prefers, we can adjust the content accordingly.
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5, color: "var(--fg-on-dark1)", maxWidth: 720, margin: "0 auto 36px", fontWeight: 600 }}>
        This is not trauma dumping. Every story is paired with a framework that helps students understand that life happens on life's terms. We connect through the story, then show how we move through it. Students always leave knowing where to go for support, and we point them back to you first. We also provide resources and a practical framework they can carry with them.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
        <Button variant="lime" size="lg" href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7">Book for your school →</Button>
        <Button variant="ghost" size="lg" href="#g912-why" style={{ color: "var(--white)", borderColor: "rgba(255,255,255,.4)" }}>Learn more ↓</Button>
      </div>
    </div>
  </section>
);

const G912Why = () => (
  <section id="g912-why" style={{ background: "var(--paper)", padding: "80px 0", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-split ts-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
      <div style={{ borderRadius: 24, border: "3px solid var(--ink)", overflow: "hidden", boxShadow: "8px 8px 0 var(--violet)", aspectRatio: "4/5" }}>
        <img src="/assets/photo-christine-selfie.jpg" alt="TruthSpeaks 365 presenter" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(1.4) contrast(0.9)" }} />
      </div>
      <div>
        <Eyebrow style={{ marginBottom: 14 }}>Why it works</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.0, color: "var(--ink)", margin: "0 0 20px" }}>
          The conversations<br /><HL color="var(--violet)">nobody else is having.</HL>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 16px" }}>
          High schoolers can smell inauthenticity from a mile away. They don't need polished presentations. They need a real person telling the truth about what happened to them and what they did about it.
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: 0 }}>
          Every TruthSpeaks 365 presenter brings a story of real adversity and a framework students can walk out the door using that same day.
        </p>
      </div>
    </div>
  </section>
);

const G912Frameworks = () => {
  const items = [
    { n: "01", color: "var(--violet)", title: "The Black Dot",       body: "One hard thing doesn't have to define everything. Students learn to see the white space around it, all the strength, support, and possibility they still have." },
    { n: "02", color: "var(--pink)",   title: "The Warrior Toolkit", body: "Power of the Pause. Circle of Care. Healthy action in 24 hours. The Reframe. Four moves for when life hits hard, no theory, just tools." },
    { n: "03", color: "var(--lime)",   title: "Belief to Action",    body: "How a belief you picked up feeds a thought that drives a behavior. We walk students through the whole chain so they can see it and interrupt it." },
  ];
  return (
    <section style={{ background: "var(--ink)", padding: "80px 0" }}>
      <div className="ts-wrap">
        <SectionHead className="ts-reveal" eyebrow="The frameworks" light title={<span>Tools they keep <HL color="var(--violet)">for life.</HL></span>} sub="Not just a good assembly. Every talk reduces to a framework students can name and use the next time things get hard." style={{ marginBottom: 52 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }} className="ts-reveal">
          {items.map((f, i) => (
            <div key={f.n} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 40, padding: "40px 0", borderTop: i > 0 ? "1px solid rgba(255,255,255,.1)" : "none", alignItems: "start" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 64, lineHeight: 1, color: f.color, WebkitTextStroke: "1px rgba(255,255,255,.2)", letterSpacing: "-0.04em" }}>{f.n}</div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--white)", margin: "0 0 12px" }}>{f.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--fg-on-dark2)", margin: 0 }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
  useLucide();
  return (
    <React.Fragment>
      <NavBar active="Work With Us" />
      <G912Hero />
      <G912Why />
      <G912Frameworks />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
