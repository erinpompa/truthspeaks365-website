/* =====================================================================
   SPEAKER PROFILE PAGE TruthSpeaks 365
   Reads ?id= from URL to show the right speaker
   ===================================================================== */

const SPEAKERS = {
  "christine-conti": {
    name: "Christine Conti",
    role: "Fear Into Courage Speaker",
    tagline: "Let's turn fear into courage and find your voice.",
    color: "var(--pink)",
    img: "/uploads/Christine+Conti+Full+Body+Shot+1.png.webp",
    bio: "Christine Conti helps students face their fears so they can discover their voice and take courageous action. An experienced educator, wellness advocate, and motivational speaker, Christine inspires students to practice the \"F It\" Framework: Face it. Feel it. Flip it. Through this simple and empowering approach, she guides students to strengthen resilience, speak up because their voice matters, and step forward with courage and confidence. Christine also helps students recognize that their hardships can become a source of strength, something they can use to inspire and help others in the world.",
    speaks: ["Finding your voice", "Facing fear with courage", "Building resilience", "Your voice matters", "Turning hardship into strength"],
    framework: "Face It. Feel It. Flip It.",
    ctaTitle: <span>Bring <HL color="var(--pink)">Christine</HL> to your school or event.</span>,
  },
  "nicolle-gonzalez": {
    name: "Nicolle Gonzalez",
    role: "Emotions & Resilience Speaker",
    tagline: "Name what you're carrying. Stop running from it. Learn to move through it.",
    sub: "I help students identify what they're feeling and give them real tools to process, manage, and regulate their emotions.",
    color: "var(--sky)",
    img: "/uploads/nicolle-gonzalez.jpg",
    bio: "Nicolle Gonzalez is a bilingual speaker and social work student who empowers students to navigate difficult emotions with honesty, courage, and hope. Combining her personal story with practical tools, she teaches young people how to recognize what they are feeling, build healthy support systems, and move through life's challenges without letting them define who they are. Students walk away with more than inspiration. They leave with practical tools to process, manage, and regulate their emotions in real time, and the belief that they matter, they are enough, and they are capable of creating a brighter future.",
    speaks: ["Naming and recognizing your emotions", "Asking for help without shame", "Moving through adversity", "Self-worth and belonging", "Grounding and emotional regulation"],
    framework: "Recognize It. Reach Out. Move Through It.",
    ctaTitle: <span>Bring <HL color="var(--sky)">Nicolle</HL> to your school or event.</span>,
  },
  "erin-pompa": {
    name: "Erin Pompa",
    role: "Founder & Speaker",
    tagline: "The shift starts here.",
    sub: "I'll help you embrace the power of a perspective shift.",
    color: "var(--lime)",
    img: "/uploads/NCSL+Carousel+post.png.webp",
    bio: "Erin Pompa founded TruthSpeaks 365 because she believes more women, especially women of color, need to be at the front of the room. A speaker, coach, and educator with decades of experience, Erin brings the kind of energy that makes a room go quiet and then loud again. She doesn't just inspire. She equips.",
    speaks: ["Perspective shift", "The power of your story", "Resilience and self-belief", "Leadership and voice"],
    ctaTitle: <span>Bring <HL color="var(--lime)">TruthSpeaks 365</HL> to your school or event.</span>,
  },
};

function App() {
  useLucide();
  const id = new URLSearchParams(window.location.search).get("id") || "christine-conti";
  const s = SPEAKERS[id] || SPEAKERS["christine-conti"];

  return (
    <React.Fragment>
      <NavBar active="Work With Us" />

      {/* Hero */}
      <section style={{ background: "var(--ink)", overflow: "hidden" }}>
        <div className="ts-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "stretch", minHeight: 560 }}>
          {/* Left text */}
          <div className="ts-reveal" style={{ padding: "80px 48px 80px 0", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: s.color, color: "var(--ink)", borderRadius: 999, padding: "6px 16px", marginBottom: 24, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid rgba(255,255,255,.2)", alignSelf: "flex-start" }}>
              <Icon name="mic" size={12} color="var(--ink)" /> {s.role}
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 0.92, margin: "0 0 24px", color: "var(--white)" }}>
              <HL color={s.color}>{s.name.split(" ")[0]}</HL><br />{s.name.split(" ").slice(1).join(" ")}
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(17px, 1.8vw, 20px)", lineHeight: 1.5, color: "var(--fg-on-dark1)", maxWidth: 480, margin: "0 0 10px", fontWeight: 600 }}>
              {s.tagline}
            </p>
            {s.sub && <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.5, color: "var(--fg-on-dark2)", maxWidth: 440, margin: "0 0 32px" }}>{s.sub}</p>}
            <div style={{ marginTop: s.sub ? 0 : 22 }}>
              <a href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--lime)", color: "var(--ink)", border: "2px solid var(--ink)", borderRadius: 999, padding: "14px 28px", fontFamily: "var(--font-body)", fontWeight: 900, fontSize: 17, textDecoration: "none", boxShadow: "4px 4px 0 var(--ink)", transition: "all .15s cubic-bezier(.2,.8,.2,1)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "6px 6px 0 var(--ink)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "4px 4px 0 var(--ink)"; }}>
                Book this speaker <Icon name="arrow-right" size={18} color="var(--ink)" />
              </a>
            </div>
          </div>
          {/* Right photo */}
          <div style={{ position: "relative", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
            <div style={{ width: "100%", height: "100%", minHeight: 500, position: "relative", overflow: "hidden", borderLeft: `4px solid ${s.color}` }}>
              {s.img
                ? <img src={s.img} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                : <div style={{ width: "100%", height: "100%", minHeight: 500, background: s.color, opacity: 0.25 }} />
              }
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(22,20,19,.3) 0%, transparent 40%)" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio + speaks on no color band */}
      <section style={{ background: "var(--paper)", padding: "80px 0" }}>
        <div className="ts-wrap" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "start" }}>
          <div className="ts-reveal">
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.05, color: "var(--ink)", margin: "0 0 22px" }}>
              {s.name.split(" ")[0]} <HL color={s.color}>{s.name.split(" ").slice(1).join(" ")}</HL>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.7, color: "var(--ink-500)", margin: 0 }}>{s.bio}</p>
          </div>
          <div className="ts-reveal">
            <div style={{ background: "var(--ink)", borderRadius: 22, padding: "32px 30px", border: "2px solid var(--ink)", boxShadow: `6px 6px 0 ${s.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <Icon name="mic" size={20} color={s.color} />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--white)", whiteSpace: "nowrap" }}>Topics</span>
              </div>
              {s.framework && (
                <div style={{ background: s.color, border: "2px solid var(--ink)", borderRadius: 14, padding: "14px 18px", marginBottom: 18 }}>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 4 }}>Her framework</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 19, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "-0.01em" }}>{s.framework}</div>
                </div>
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {s.speaks.map(topic => (
                  <div key={topic} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ width: 30, height: 30, borderRadius: 999, background: "var(--lime)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Icon name="check" size={16} color="var(--ink)" />
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15.5, color: "var(--white)", whiteSpace: "nowrap" }}>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow=""
        title={s.ctaTitle}
        body=""
        btn="Schedule my free call →"
        href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7"
      />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
