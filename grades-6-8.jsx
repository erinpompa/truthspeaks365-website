/* =====================================================================
   GRADES 68 PAGE TruthSpeaks 365
   Real Topics. Real Growth.
   ===================================================================== */

const G68Hero = () => (
  <section style={{ background: "var(--ink)", padding: "80px 0 90px", position: "relative", overflow: "hidden" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 920, textAlign: "center", margin: "0 auto" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--pink)", color: "var(--ink)", borderRadius: 999, padding: "7px 18px", marginBottom: 24, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid var(--ink)" }}>
        <Icon name="flame" size={14} color="var(--ink)" /> Grades 6-8 Program
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(48px, 7vw, 92px)", lineHeight: 0.92, margin: "0 0 28px", color: "var(--white)" }}>
        Real Topics.<br /><HL color="var(--pink)">Real Growth.</HL>
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5, color: "var(--fg-on-dark1)", maxWidth: 680, margin: "0 auto 36px", fontWeight: 600 }}>
        Each presentation goes all in on one concept rooted in resilience and character development. We bring it to life through storytelling and real-time activities that meet students where they are.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
        <Button variant="lime" size="lg" href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7">Book for your school →</Button>
        <Button variant="ghost" size="lg" href="#g68-why" style={{ color: "var(--white)", borderColor: "rgba(255,255,255,.4)" }}>Learn more ↓</Button>
      </div>
    </div>
  </section>
);

const G68Why = () => (
  <section id="g68-why" style={{ background: "var(--sky)", padding: "80px 0", borderBottom: "2px solid var(--ink)" }}>
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


const G68SpeakerObjectives = () => {
  const speakers = [
    {
      name: "Christine Conti",
      role: "Fear Into Courage Speaker",
      color: "var(--pink)",
      img: "/uploads/Christine+Conti+Full+Body+Shot+1.png.webp",
      objectives: [
        "Name what fear feels like in their own lives and identify moments they stayed silent because of it.",
        "Learn and apply the F'it Framework: Face it, Feel it, Flip it.",
        "Practice the 5-Count technique to let fear in and move through it in real time.",
        "Analyze real stories of setback and comeback, and explain how each person turned fear into fuel.",
        "Commit to one action step for using their voice, whether that's speaking up, telling a trusted adult, or sharing their story to help someone else.",
      ],
    },
    {
      name: "Nicolle Gonzalez",
      role: "Emotions & Resilience Speaker",
      color: "var(--sky)",
      img: "/uploads/nicolle-gonzalez.jpg",
      objectives: [
        "Define what feelings are and learn to name the emotion they're experiencing instead of pushing it away.",
        "Understand that avoided emotions don't disappear — they pile up and eventually show up as anger, anxiety, shutting down, or self-criticism.",
        "Practice the Five Senses grounding technique to pause between what they feel and what they do next.",
        "Identify at least one trusted adult or peer and learn concrete language for starting a hard conversation, including a text they can actually send.",
        "Recognize that emotions are information, not weakness, and commit to one self-compassion practice they can use daily.",
      ],
    },
  ];
  return (
    <section style={{ background: "var(--paper)", padding: "80px 0", borderTop: "2px solid var(--ink)" }}>
      <div className="ts-wrap">
        <SectionHead className="ts-reveal" eyebrow="Our presenters" title={<span>Students will be <HL color="var(--pink)">able to.</HL></span>} sub="Here's exactly what students walk away with after each presentation." style={{ marginBottom: 56 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {speakers.map(sp => (
            <div key={sp.name} className="ts-reveal" style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 24, padding: "36px 40px", boxShadow: `6px 6px 0 ${sp.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <div style={{ width: 56, height: 56, borderRadius: 999, border: `3px solid ${sp.color}`, overflow: "hidden", flexShrink: 0 }}>
                  <img src={sp.img} alt={sp.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1 }}>{sp.name}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 4 }}>{sp.role}</div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {sp.objectives.map((obj, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 30, height: 30, borderRadius: 999, background: sp.color, border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, color: "var(--ink)" }}>{i + 1}</div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--ink-500)", margin: 0, paddingTop: 3 }}>{obj}</p>
                  </div>
                ))}
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
      <G68Hero />
      <G68Why />
      <G68Concepts />
      <G68SpeakerObjectives />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
