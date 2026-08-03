/* =====================================================================
   FOR ADULTS PAGE TruthSpeaks 365
   Educator Professional Development
   ===================================================================== */

const AdultsHero = () => (
  <section style={{ background: "var(--ink)", padding: "80px 0 90px", position: "relative", overflow: "hidden" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 920, textAlign: "center", margin: "0 auto" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--lime)", color: "var(--ink)", borderRadius: 999, padding: "7px 18px", marginBottom: 24, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid var(--ink)" }}>
        <Icon name="graduation-cap" size={14} color="var(--ink)" /> For Adults Who Serve Youth
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(48px, 7vw, 92px)", lineHeight: 0.92, margin: "0 0 28px", color: "var(--white)" }}>
        Educator<br /><HL color="var(--lime)">Professional</HL><br />Development
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.5, color: "var(--fg-on-dark1)", maxWidth: 720, margin: "0 auto 36px", fontWeight: 600 }}>
        Practical, immediately applicable tools that support the well-being of those who serve youth, strengthen relationships, and enhance the ability to support students academically, socially, and emotionally.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
        <Button variant="lime" size="lg" href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7">Book a PD session →</Button>
        <Button variant="ghost" size="lg" href="#pd-overview" style={{ color: "var(--white)", borderColor: "rgba(255,255,255,.4)" }}>Learn more ↓</Button>
      </div>
    </div>
  </section>
);

const AdultsOverview = () => (
  <section id="pd-overview" style={{ background: "var(--lime)", padding: "80px 0", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-split ts-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
      <div>
        <Eyebrow style={{ marginBottom: 14 }}>How it works</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.0, color: "var(--ink)", margin: "0 0 20px" }}>
          Built for the people<br /><HL color="var(--pink)">who give the most.</HL>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 16px" }}>
          Sessions are interactive, skills-based, and focused on real-world strategies educators can implement immediately in their classrooms and school communities.
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 16px" }}>
          Through reflection, discussion, and hands-on application, participants leave with concrete tools to manage challenges, build resilience, and create more supportive learning environments.
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: 0 }}>
          Training is designed for people across roles - classroom teachers, counselors, coaches, administrators, youth workers - with content that ensures relevance no matter how you show up for young people.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { icon: "users", label: "All roles welcome", body: "Classroom teachers, support staff, school leaders, youth workers - content is differentiated so it lands for everyone." },
          { icon: "zap", label: "Immediately applicable", body: "Every session ends with tools participants can use the next day, not theory to file away." },
          { icon: "heart", label: "Grounded in lived experience", body: "Our presenters combine real personal stories with professional frameworks - the combination that actually moves people." },
        ].map(item => (
          <div key={item.label} style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 18, padding: "22px 24px", display: "flex", gap: 18, alignItems: "flex-start", boxShadow: "4px 4px 0 var(--ink-200)" }}>
            <div style={{ width: 46, height: 46, borderRadius: 12, background: "var(--ink)", display: "grid", placeItems: "center", border: "2px solid var(--ink)", flexShrink: 0 }}>
              <Icon name={item.icon} size={22} color="var(--lime)" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--ink)", marginBottom: 6 }}>{item.label}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "var(--ink-500)" }}>{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PD_SESSIONS = [
  {
    presenter: "Erin Pompa",
    role: "Founder & Speaker",
    color: "var(--lime)",
    img: "/uploads/NCSL+Carousel+post.png.webp",
    title: "Awakening Your Warrior Spirit",
    subtitle: "Building Resilience for Those Who Serve",
    tagline: "A session for the people who give so much to others.",
    body: [
      "Those who dedicate their lives to supporting young people often carry the weight of their students' challenges while navigating their own personal and professional demands. This session creates space for those who serve youth to prioritize their own well-being as the foundation for meaningful impact.",
      "Through storytelling, reflection, and practical strategies, participants explore how to navigate stress, reconnect with their purpose, and build resilience in the moments that matter most. Rooted in Erin Pompa's PAG Framework (Perspective Shift through Acceptance and Gratitude), this session empowers participants to shift their mindset, restore emotional balance, and continue showing up with intention, compassion, and strength.",
    ],
    objectives: [
      "Reflect on their own well-being and identify strategies to maintain emotional balance throughout the school year.",
      "Understand how managing stress and strengthening resilience impacts their effectiveness with students and colleagues.",
      "Apply practical frameworks, including gratitude and acceptance, to navigate challenges and reconnect with purpose.",
      "Recognize that caring for themselves is not separate from their service - it is the foundation that allows them to support others fully.",
      "Leave with renewed perspective, actionable tools, and a deeper connection to the reason they chose this work.",
    ],
  },
  {
    presenter: "Christine Conti",
    role: "Fear Into Courage Speaker",
    color: "var(--pink)",
    img: "/uploads/Christine+Conti+Full+Body+Shot+1.png.webp",
    title: "Emotional Resilience & Courage in the Classroom",
    subtitle: null,
    tagline: null,
    body: [
      "This interactive session helps those who work with youth strengthen emotional resilience and develop practical tools to navigate fear, stress, conflict, and uncertainty in today's classrooms.",
      "Christine Conti introduces her F It Framework (Face it. Feel it. Flip it.) as a simple, actionable approach for processing challenges, regulating emotional responses, and responding with confidence during difficult moments with students, colleagues, and school communities. The session empowers participants to remain grounded, courageous, and effective while managing the emotional demands of serving young people.",
    ],
    objectives: [
      "Recognize how fear, stress, and emotional reactions impact decision-making and classroom interactions.",
      "Apply a practical framework to process and reframe challenging situations in real time.",
      "Strengthen emotional regulation skills during high-pressure classroom moments.",
      "Build confidence when responding to challenging student behaviors and situations.",
      "Develop a mindset of courage, adaptability, and proactive problem-solving.",
    ],
  },
  {
    presenter: "Nicolle Gonzalez",
    role: "Emotions & Resilience Speaker",
    color: "var(--sky)",
    img: "/uploads/nicolle-gonzalez.jpg",
    title: "Emotional Regulation & Student Support Strategies",
    subtitle: null,
    tagline: null,
    body: [
      "This session equips those who serve youth with practical tools to understand and support emotional regulation in themselves and their students.",
      "Nicolle Gonzalez combines lived experience with professional social work training to provide actionable strategies for identifying emotions, responding to student needs, and creating emotionally safe classroom environments. The session emphasizes trauma-informed practices, emotional awareness, and strengthening relationships to support positive experiences for young people.",
    ],
    objectives: [
      "Identify and understand emotional states in themselves and their students with greater awareness.",
      "Learn practical strategies for supporting emotional regulation during challenging classroom interactions.",
      "Strengthen understanding of trauma-informed responses in educational settings.",
      "Build skills for creating emotionally safe and supportive classroom environments.",
      "Help students develop healthy coping strategies through connection, empathy, and support.",
    ],
  },
];

const PDSessions = () => (
  <section style={{ background: "var(--paper)", padding: "80px 0" }}>
    <div className="ts-wrap">
      <SectionHead
        className="ts-reveal"
        eyebrow="PD Sessions"
        title={<span>What we <HL color="var(--lime)">offer.</HL></span>}
        sub="Each session is led by a TruthSpeaks 365 presenter and built around their lived experience and professional framework."
        style={{ marginBottom: 64 }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
        {PD_SESSIONS.map((pd, idx) => (
          <div key={pd.presenter} className="ts-reveal" style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 28, overflow: "hidden", boxShadow: `8px 8px 0 ${pd.color}` }}>
            <div style={{ background: "var(--ink)", padding: "28px 36px", display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: 100, height: 100, borderRadius: 999, border: `3px solid ${pd.color}`, overflow: "hidden", flexShrink: 0 }}>
                <img src={pd.img} alt={pd.presenter} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 20, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--white)", lineHeight: 1 }}>{pd.presenter}</div>
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12.5, color: "rgba(255,255,255,.55)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 5 }}>{pd.role}</div>
              </div>
            </div>
            <div style={{ padding: "36px 36px 40px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "start" }}>
              <div>
                <div style={{ display: "inline-block", background: pd.color, border: "2px solid var(--ink)", borderRadius: 10, padding: "6px 14px", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink)", marginBottom: 14 }}>
                  Session
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(22px, 2.5vw, 30px)", textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", lineHeight: 1.05, margin: "0 0 6px" }}>{pd.title}</h3>
                {pd.subtitle && <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--ink-500)", marginBottom: 16, fontStyle: "italic" }}>{pd.subtitle}</div>}
                {pd.tagline && <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15.5, color: "var(--ink)", marginBottom: 18, padding: "10px 16px", background: `color-mix(in srgb, ${pd.color} 30%, transparent)`, borderLeft: `4px solid ${pd.color}`, borderRadius: "0 10px 10px 0" }}>{pd.tagline}</div>}
                <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: pd.tagline ? 0 : 18 }}>
                  {pd.body.map((para, i) => (
                    <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--ink-500)", margin: 0 }}>{para}</p>
                  ))}
                </div>
              </div>
              <div style={{ background: "var(--ink)", borderRadius: 20, padding: "28px 26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <Icon name="graduation-cap" size={18} color={pd.color} />
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--white)" }}>Participants Will Be Able To</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {pd.objectives.map((obj, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span style={{ width: 26, height: 26, borderRadius: 999, background: pd.color, border: "2px solid rgba(255,255,255,.2)", display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                        <Icon name="check" size={14} color="var(--ink)" />
                      </span>
                      <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13.5, color: "var(--white)", lineHeight: 1.55 }}>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AdultsRosterNote = () => (
  <section style={{ background: "var(--ink)", padding: "60px 0" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
      <div style={{ width: 56, height: 56, borderRadius: 999, background: "var(--lime)", border: "2px solid rgba(255,255,255,.2)", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
        <Icon name="users" size={26} color="var(--ink)" />
      </div>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)", margin: "0 0 16px" }}>
        More presenters <HL color="var(--lime)">coming soon.</HL>
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--fg-on-dark2)", margin: "0 auto", maxWidth: 640 }}>
        TruthSpeaks 365 is continuing to expand its team of presenters. Following our recent presenter submission cycle, additional educators, mental health professionals, and youth-focused experts are currently being added to our speaker roster - allowing us to offer schools an even wider range of professional development experiences tailored to their specific needs.
      </p>
    </div>
  </section>
);

function App() {
  useLucide();
  return (
    <React.Fragment>
      <NavBar active="For Adults" />
      <AdultsHero />
      <AdultsOverview />
      <PDSessions />
      <AdultsRosterNote />
      <BottomCTA
        eyebrow=""
        title={<span>Ready to bring <HL color="var(--lime)">TruthSpeaks 365</HL> to your staff?</span>}
        body=""
        btn="Schedule my free call →"
        href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7"
      />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
