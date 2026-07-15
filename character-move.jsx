/* =====================================================================
   CHARACTER MOVE PAGE TruthSpeaks 365
   Grades 3-5 movement + mindfulness program by Erin Pompa
   ===================================================================== */

const CMHero = () => (
  <section style={{ background: "var(--ink)", padding: "80px 0 90px", position: "relative", overflow: "hidden" }}>
    {/* decorative shapes */}
    <span style={{ position: "absolute", top: 50, right: "6%", width: 80, height: 80, borderRadius: "50%", background: "var(--sky)", opacity: 0.18 }}></span>
    <span style={{ position: "absolute", bottom: 60, left: "4%", width: 48, height: 48, borderRadius: 14, background: "var(--pink)", opacity: 0.22, transform: "rotate(20deg)" }}></span>
    <span style={{ position: "absolute", top: "40%", right: "14%", width: 22, height: 22, borderRadius: 6, background: "var(--lime)", opacity: 0.35, transform: "rotate(-12deg)" }}></span>

    <div className="ts-wrap ts-reveal" style={{ maxWidth: 920 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--sky)", color: "var(--ink)", borderRadius: 999, padding: "7px 18px", marginBottom: 24, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid var(--ink)" }}>
        <Icon name="sprout" size={14} color="var(--ink)" /> Grades 3-5 Program
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(52px, 8vw, 100px)", lineHeight: 0.92, margin: "0 0 28px", color: "var(--white)" }}>
        Character<br /><HL color="var(--sky)">Move.</HL>
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5, color: "var(--fg-on-dark1)", maxWidth: 680, margin: "0 0 36px", fontWeight: 600 }}>
        We combine movement, mindfulness, and character development to reinforce what your school is already teaching. Students build confidence, resilience, and connection through their bodies and their minds.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
        <Button variant="lime" size="lg" href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7">Schedule a free call →</Button>
        <Button variant="ghost" size="lg" href="#about" style={{ color: "var(--white)", borderColor: "rgba(255,255,255,.4)" }}>Learn more ↓</Button>
      </div>
    </div>
  </section>
);

const CMVideo = () => (
  <section style={{ background: "var(--paper)", padding: "72px 0", borderBottom: "1px solid var(--ink-100)" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 860 }}>
      <SectionHead eyebrow="See it in action" title={<span>Watch Character <HL color="var(--sky)">Move.</HL></span>} style={{ marginBottom: 36 }} />
      <div style={{
        borderRadius: 24, overflow: "hidden", border: "3px solid var(--ink)",
        boxShadow: "8px 8px 0 var(--sky)", position: "relative", paddingBottom: "56.25%", height: 0, background: "var(--ink)"
      }}>
        <iframe
          src="https://www.youtube.com/embed/3-L3ulK3Ue0"
          title="Character Move by TruthSpeaks 365"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
        ></iframe>
      </div>
    </div>
  </section>
);

const Pillars = () => {
  const items = [
    { icon: "music-2",   color: "var(--sky)",    title: "Creative Dance",        body: "Movement as a language students express emotion, build coordination, and discover joy in their own bodies." },
    { icon: "heart",     color: "var(--pink)",   title: "Guided Reflection",     body: "After every movement session, students pause and name what they felt. Awareness before regulation." },
    { icon: "users",     color: "var(--lime)",   title: "Character Development", body: "Character, connection, and self-regulation woven into every session not bolted on after." },
    { icon: "shield",    color: "var(--violet)", title: "Anti-Bullying Principles", body: "Students learn to respect one another and grow as leaders through movement and community." },
  ];
  return (
    <section style={{ background: "var(--paper)", padding: "80px 0", borderBottom: "1px solid var(--ink-100)" }}>
      <div className="ts-wrap">
        <SectionHead className="ts-reveal" eyebrow="What every session includes" title={<span>Movement. Reflection. <HL color="var(--sky)">Connection.</HL></span>} sub="Each session combines these four elements to nurture the whole child not just their behavior." style={{ marginBottom: 48 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="ts-reveal">
          {items.map(item => (
            <div key={item.title} style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 20, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 14, boxShadow: "4px 4px 0 var(--ink-200)" }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: item.color, display: "grid", placeItems: "center", border: "2px solid var(--ink)", flexShrink: 0 }}>
                <Icon name={item.icon} size={24} color="var(--ink)" />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>{item.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "var(--ink-500)", margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" style={{ background: "var(--ink)", padding: "84px 0" }}>
    <div className="ts-wrap ts-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
      <div className="ts-reveal">
        <div style={{ borderRadius: 24, border: "3px solid var(--sky)", overflow: "hidden", boxShadow: "8px 8px 0 var(--sky)", background: "var(--ink-800)", aspectRatio: "4/5" }}>
          <image-slot id="erin-character-move" placeholder="Drop a photo of Erin" shape="rect" style={{ width: "100%", height: "100%", display: "block", "--bg": "#1e2a35" }}></image-slot>
        </div>
      </div>
      <div className="ts-reveal">
        <Eyebrow color="var(--sky)" style={{ marginBottom: 16 }}>Created by</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.0, color: "var(--white)", margin: "0 0 22px" }}>
          <HL color="var(--sky)">Erin Pompa.</HL>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--fg-on-dark2)", margin: "0 0 20px" }}>
          Erin Pompa, Founder of TruthSpeaks 365, designed Character Move drawing from her <strong style={{ color: "var(--white)" }}>15 years leading a high school dance program</strong>, her undergraduate degree from <strong style={{ color: "var(--white)" }}>Montclair State University</strong>, her <strong style={{ color: "var(--white)" }}>Master's in Dance Education from NYU</strong>, and her professional dance career.
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--fg-on-dark2)", margin: 0 }}>
          Erin integrated movement, social awareness, and anti-bullying principles into a single program, helping students express themselves, respect one another, and grow as leaders from the inside out.
        </p>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { n: "01", color: "var(--sky)",    title: "We customize to you",      body: "Character Move fits a single class period or fills a full school assembly. Gym classes, English classes, auditoriums we adapt to your space, schedule, and budget." },
    { n: "02", color: "var(--pink)",   title: "Sessions in action",       body: "Each session blends creative dance, guided reflection, and character development. Students move, feel, and connect every single time." },
    { n: "03", color: "var(--lime)",   title: "Showcase (optional)",      body: "Culminate the series with a student-and-family showcase that celebrates learning, connection, and growth." },
  ];
  return (
    <section style={{ background: "var(--paper-2)", padding: "84px 0", borderTop: "1px solid var(--ink-100)" }}>
      <div className="ts-wrap">
        <SectionHead className="ts-reveal" eyebrow="How it works" title={<span>Flexible, <HL color="var(--pink)">by design.</HL></span>} sub="Character Move fits into your school's world, not the other way around." style={{ marginBottom: 52 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="ts-reveal">
          {steps.map(s => (
            <div key={s.n} style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 20, padding: "32px 28px", boxShadow: "4px 4px 0 var(--ink-200)", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 52, lineHeight: 1, color: s.color, WebkitTextStroke: "2px var(--ink)", letterSpacing: "-0.03em" }}>{s.n}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-500)", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Live = () => (
  <section style={{ background: "var(--sky)", padding: "72px 0", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-split ts-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
      <div>
        <Eyebrow color="var(--ink)" style={{ marginBottom: 14 }}>Currently running</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.0, color: "var(--ink)", margin: "0 0 16px" }}>
          First series live at<br />School 27, Paterson.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, color: "var(--ink)", margin: 0, fontWeight: 500 }}>
          Character Move is currently in its first series at School 27 in Paterson, NJ. We are seeing real results and we are ready to bring it to your school next.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ background: "var(--ink)", borderRadius: 20, padding: "28px 32px", maxWidth: 340, width: "100%" }}>
          <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 26, color: "var(--sky)", marginBottom: 12 }}>what teachers are saying</div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--fg-on-dark2)", margin: "0 0 16px", fontStyle: "italic" }}>
            "The kids are fully engaged. You can see them processing things they don't have words for yet, through movement."
          </p>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--sky)" }}>School 27, Paterson NJ</div>
        </div>
      </div>
    </div>
  </section>
);

const CMCta = () => (
  <section style={{ background: "var(--lime)", padding: "84px 0", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 760, textAlign: "center" }}>
      <Eyebrow color="var(--ink)" style={{ marginBottom: 16 }}>Ready to bring Character Move to your school?</Eyebrow>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 0.96, color: "var(--ink)", margin: "0 0 20px" }}>
        Let's start with a free call.
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.5, color: "var(--ink)", margin: "0 auto 32px", fontWeight: 500, maxWidth: 520 }}>
        We'll talk through your school's needs, budget, and schedule, and figure out what a Character Move series looks like for your students.
      </p>
      <Button variant="dark" size="lg" href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7">Schedule a free call →</Button>
    </div>
  </section>
);

function App() {
  useLucide();
  return (
    <React.Fragment>
      <NavBar active="Work With Us" />
      <CMHero />
      <CMVideo />
      <Pillars />
      <About />
      <HowItWorks />
      <Live />
      <CMCta />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
