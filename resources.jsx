/* =====================================================================
   YOUTH RESOURCES, TruthSpeaks 365 (school-safe, faith-free)
   ===================================================================== */

const TOOLKIT = [
  { n: "1", title: "Power of the Pause", body: "A personal pause phrase + a few slow breaths to make space before you react. Name it. Use it. 'Pause, pause, pause.'" },
  { n: "2", title: "Circle of Care", body: "One trusted person who will really listen and act in your best interest. Pick yours before you need them." },
  { n: "3", title: "Healthy Actions", body: "Three things you can do within 24 hours of something hard happening. Small moves that keep you moving." },
  { n: "4", title: "The Reframe", body: "Shift the picture through gratitude and acceptance: What am I in control of? What am I grateful for in spite of this? What's one thing that's still okay?" },
];

const DOWNLOADS = [
  { icon: "circle-dot", color: "var(--pink)", title: "The Black Dot, one-pager", tag: "Student handout", body: "The dot, the white space, and how to widen the frame. Print it, post it, keep it." },
  { icon: "shield", color: "var(--lime)", title: "Warrior Toolkit card", tag: "Pocket card", body: "All four steps on one card students can fold up and carry." },
  { icon: "wind", color: "var(--sky)", title: "Power of the Pause guide", tag: "Quick guide", body: "Build your pause phrase and a 3-breath reset in under five minutes." },
  { icon: "messages-square", color: "var(--violet)", title: "Conversation starters", tag: "For educators", body: "Prompts to keep the assembly going in homeroom, advisory, or club." },
  { icon: "clipboard-list", color: "var(--yellow)", title: "Belief → Thought → Action map", tag: "Worksheet", body: "Walk the chain backward and find where to interrupt it." },
  { icon: "presentation", color: "var(--coral)", title: "Educator discussion guide", tag: "For educators", body: "A facilitation guide to reinforce the frameworks after we leave." },
];

const Blackdot = () => (
  <section style={{ background: "var(--sky)", padding: "84px 0", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap">
      <div className="ts-split" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 52, alignItems: "center" }}>
        <div className="ts-reveal" style={{ background: "var(--ink)", borderRadius: 28, border: "2px solid var(--ink)", aspectRatio: "1 / 1", display: "grid", placeItems: "center", position: "relative", overflow: "hidden", boxShadow: "8px 8px 0 var(--lime)" }}>
          <div style={{ position: "absolute", inset: 0, background: "var(--paper)", opacity: 0.06 }}></div>
          <div style={{ width: 86, height: 86, borderRadius: 999, background: "var(--ink)", border: "3px solid var(--white)", boxShadow: "0 0 0 14px rgba(255,255,255,0.04)", zIndex: 1 }}></div>
          <div style={{ position: "absolute", bottom: 26, left: 26, right: 26, textAlign: "center" }}>
            <span style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 28, color: "var(--lime)" }}>find the white space</span>
          </div>
        </div>
        <div className="ts-reveal">
          <Eyebrow style={{ marginBottom: 14 }}>Start here</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.02, color: "var(--ink)", margin: "0 0 18px" }}>
            The <HL color="var(--pink)">Black Dot.</HL>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55, color: "var(--ink-500)", margin: "0 0 16px" }}>
            Picture a big white page with one black dot in the middle. The black dot is the hard thing, the thought, the struggle, the thing you can't stop staring at. When you only look at the dot, your whole world gets small, dark, and cold.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55, color: "var(--ink-500)", margin: 0 }}>
            But look at all that <strong style={{ color: "var(--ink)" }}>white space</strong> around it. That's everything you still have. Seeing it, even in the middle of something hard, that's where you find your footing again.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Toolkit = () => (
  <section style={{ background: "var(--ink)", color: "var(--white)", padding: "84px 0" }}>
    <div className="ts-wrap">
      <SectionHead className="ts-reveal" light eyebrow="When life gets hard" eyebrowColor="var(--lime)" title={<span>The <HL color="var(--pink)">Warrior Toolkit.</HL></span>} sub="Four moves you can actually use the next time something knocks you sideways." style={{ marginBottom: 44 }} />
      <div className="ts-grid-4 ts-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
        {TOOLKIT.map(s => (
          <div key={s.n} style={{ background: "var(--surface-dark)", border: "1px solid var(--ink-700)", borderRadius: 20, padding: 24 }}>
            <div style={{ width: 48, height: 48, borderRadius: 999, background: "var(--lime)", color: "var(--ink)", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 24, border: "2px solid var(--ink)", marginBottom: 14 }}>{s.n}</div>
            <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 19, textTransform: "uppercase", letterSpacing: "-0.01em", margin: "0 0 8px", color: "var(--white)", lineHeight: 1.05 }}>{s.title}</h4>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.5, color: "var(--fg-on-dark2)", margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DownloadCard = ({ icon, color, title, tag, body }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={e => e.preventDefault()} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      textDecoration: "none", background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: 20, padding: 24,
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)", transform: hover ? "translateY(-3px)" : "none",
      transition: "all .16s cubic-bezier(.2,.8,.2,1)", display: "flex", flexDirection: "column", gap: 12
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ width: 50, height: 50, borderRadius: 14, background: color, border: "2px solid var(--ink)", display: "grid", placeItems: "center" }}>
          <Icon name={icon} size={25} color="var(--ink)" />
        </div>
        <Tag bg="var(--paper-2)" fg="var(--ink-500)" style={{ border: "1px solid var(--ink-100)" }}>{tag}</Tag>
      </div>
      <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0, color: "var(--ink)", lineHeight: 1.05 }}>{title}</h4>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.5, color: "var(--ink-500)", margin: 0, flex: 1 }}>{body}</p>
      <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 14.5, color: "var(--link)", display: "inline-flex", alignItems: "center", gap: 6 }}>
        <Icon name="download" size={16} /> Download
      </span>
    </a>
  );
};

const Downloads = () => (
  <section style={{ background: "var(--pink)", padding: "84px 0", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap">
      <SectionHead className="ts-reveal" eyebrow="Free to use" title={<span>Take the tools <HL>with you.</HL></span>} sub="Printable handouts and educator guides, for the classroom, the club, or the fridge at home. (Links are placeholders, drop in your real files anytime.)" style={{ marginBottom: 44 }} />
      <div className="ts-offers ts-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
        {DOWNLOADS.map(d => <DownloadCard key={d.title} {...d} />)}
      </div>
    </div>
  </section>
);

const Support = () => (
  <section style={{ background: "var(--lime)", padding: "64px 0", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 940 }}>
      <div style={{ background: "var(--ink)", color: "var(--white)", borderRadius: 26, border: "2px solid var(--ink)", padding: "36px 40px", boxShadow: "6px 6px 0 rgba(22,20,19,0.25)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <Icon name="life-buoy" size={26} color="var(--lime)" />
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24, textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0, color: "var(--white)" }}>If you need help right now</h3>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.55, color: "var(--fg-on-dark2)", margin: "0 0 22px", maxWidth: 640 }}>
          These tools are for everyday hard. If something feels bigger than everyday, if you're thinking about hurting yourself or you're in danger, please reach out to a trusted adult and one of these. You're worth it. You hear me?
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="ts-grid-3">
          {[
            { label: "988 Suicide & Crisis Lifeline", val: "Call or text 988", sub: "24/7, free & confidential" },
            { label: "Crisis Text Line", val: "Text HOME to 741741", sub: "24/7 text support" },
            { label: "Childhelp Hotline", val: "1-800-422-4453", sub: "For any young person" },
          ].map(c => (
            <div key={c.label} style={{ background: "var(--surface-dark)", border: "1px solid var(--ink-700)", borderRadius: 16, padding: "18px 20px" }}>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13.5, color: "var(--lime)", marginBottom: 6 }}>{c.label}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, color: "var(--white)", letterSpacing: "-0.01em" }}>{c.val}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--fg-on-dark2)", marginTop: 3 }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const YouthPortalFeature = () => (
  <section style={{ background: "var(--ink)", padding: "80px 0 90px", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 880 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="ts-split">
        <div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(32px, 5vw, 60px)", lineHeight: 0.95, color: "var(--white)", margin: "0 0 20px" }}>
            What are you <HL color="var(--lime)">going through?</HL>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.6, color: "var(--fg-on-dark2)", margin: "0 0 28px", fontWeight: 500 }}>
            Students pick a challenge that sounds like them and get pointed to a real, vetted resource. No sign-in, no judgment, no lecture. Just help.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Button variant="lime" size="lg" href="/youth-resource-quest">Open the Resource Portal →</Button>
          </div>
        </div>
        <div style={{ background: "var(--surface-dark)", border: "2px solid var(--ink-700)", borderRadius: 24, padding: "28px 28px 24px", boxShadow: "6px 6px 0 var(--lime)" }}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ background: "#ff1a6e", borderRadius: 10, padding: "9px 14px", fontSize: 12, fontWeight: 700, color: "#fff", marginBottom: 14 }}>
              🚨 Need help right now? Text HELLO to 741741 or call 988
            </div>
          </div>
          {[
            { emoji: "😰", text: "I feel anxious and can't make it stop.", color: "rgba(255,102,153,.15)" },
            { emoji: "💔", text: "My friend is struggling and I don't know how to help.", color: "rgba(50,140,255,.12)" },
            { emoji: "🍽️", text: "My relationship with food feels out of control.", color: "rgba(160,80,220,.12)" },
            { emoji: "💻", text: "I'm being bullied online and I can't escape it.", color: "rgba(255,160,30,.12)" },
          ].map(c => (
            <div key={c.text} style={{ background: c.color, borderRadius: 12, padding: "12px 14px", marginBottom: 8, display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ fontSize: 18, lineHeight: 1, paddingTop: 2 }}>{c.emoji}</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,.75)", lineHeight: 1.45, fontStyle: "italic" }}>"{c.text}"</span>
            </div>
          ))}
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)", marginTop: 12, textAlign: "center", fontWeight: 600, letterSpacing: "0.08em" }}>
            + 20 more challenges across two grade levels
          </div>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  useLucide();
  return (
    <React.Fragment>
      <NavBar active="Youth Resources" />
      <PageHero
        chip="For students & educators"
        eyebrow="Youth resources"
        title={<span>Tools you can <HL color="var(--pink)">use.</HL></span>}
      />
      <YouthPortalFeature />
      <Support />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
