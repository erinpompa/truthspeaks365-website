/* =====================================================================
   NEXT STEPS — TruthSpeaks 365 Speaker Application
   Shown after someone submits the application form
   ===================================================================== */

const SUBMIT_EMAIL = "erin@erinpompa.com";
const SUBMIT_SUBJECT = "TruthSpeaks365 Submission 2026";

/* ---- Audio Player ---- */
const AudioPlayer = () => {
  const audioRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  const fmt = (s) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play(); setPlaying(true); }
  };

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
    setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0);
  };

  const onLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const onEnded = () => setPlaying(false);

  const seek = (e) => {
    if (!audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * audioRef.current.duration;
  };

  return (
    <div style={{ background: "var(--ink)", border: "2px solid var(--sky)", borderRadius: 20, padding: "28px 28px 24px" }}>
      <audio
        ref={audioRef}
        src="/uploads/application-audio.m4a"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
        preload="metadata"
      />
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--sky)", marginBottom: 14 }}>A message from Erin</div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
        <button onClick={toggle} style={{
          width: 58, height: 58, borderRadius: 999, background: "var(--sky)",
          border: "2px solid var(--sky)", display: "grid", placeItems: "center",
          cursor: "pointer", flexShrink: 0, boxShadow: "4px 4px 0 rgba(255,255,255,.15)"
        }}>
          {playing
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--ink)"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--ink)"><polygon points="5,3 19,12 5,21"/></svg>
          }
        </button>
        <div style={{ flex: 1 }}>
          <div onClick={seek} style={{ height: 8, background: "rgba(255,255,255,.15)", borderRadius: 99, cursor: "pointer", position: "relative" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "var(--sky)", borderRadius: 99, transition: "width .1s linear" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,.5)" }}>
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---- Rubric Table ---- */
const RUBRIC = [
  {
    cat: "Part 1: Engagement",
    e4: "Activity is energizing, grounding, or centering and fits the presenter's style. Students are pulled in immediately. 30 sec to 1 min.",
    e3: "Engaging opener but energy or timing could be stronger.",
    e2: "Minimal student involvement or low energy.",
    e1: "No engagement activity or outside time limits.",
  },
  {
    cat: "Part 2: Presentation",
    e4: "Clear story rooted in lived experience. Strong lesson identified. All three steps executed with creativity, connection, and a goal of showing students how to move through adversity.",
    e3: "Most elements present but story, lesson, or activity lacks depth.",
    e2: "Story or lesson is vague. Presentation feels incomplete.",
    e1: "Missing key sections or no clear structure.",
  },
  {
    cat: "Part 3: Closing",
    e4: "Students leave with a clear takeaway and a follow-up action. Lesson lands. 30 sec to 1 min.",
    e3: "Effective wrap-up but the follow-up action or lesson could be clearer.",
    e2: "Abrupt or unclear ending. No follow-up action.",
    e1: "No clear closing.",
  },
  {
    cat: "Youth Connection",
    e4: "Feels like a live performance. Tone is conversational, relatable, and built for 9th to 12th graders.",
    e3: "Mostly youth-focused but slightly formal or scripted.",
    e2: "Disconnected or not age-appropriate.",
    e1: "Not suitable for a high school audience.",
  },
  {
    cat: "Core Values Alignment",
    e4: "Fully reflects TruthSpeaks 365: dynamic, personal, excellent, and approachable.",
    e3: "Shows most core values. One area weaker.",
    e2: "Few values present.",
    e1: "Missing all key values.",
  },
];

const RubricTable = () => (
  <div style={{ overflowX: "auto", borderRadius: 16, border: "2px solid var(--ink)" }}>
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: 14, minWidth: 580 }}>
      <thead>
        <tr style={{ background: "var(--ink)" }}>
          {["Category", "Excellent (4)", "Good (3)", "Needs Work (2)", "Incomplete (1)"].map((h, i) => (
            <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: i === 0 ? "var(--sky)" : "var(--white)", fontWeight: 800, fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", borderRight: i < 4 ? "1px solid rgba(255,255,255,.1)" : "none" }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {RUBRIC.map((r, i) => (
          <tr key={r.cat} style={{ background: i % 2 === 0 ? "var(--white)" : "var(--paper-2)", borderTop: "1px solid var(--ink-100)" }}>
            <td style={{ padding: "14px 16px", fontWeight: 800, color: "var(--ink)", borderRight: "1px solid var(--ink-100)", verticalAlign: "top", minWidth: 140 }}>{r.cat}</td>
            <td style={{ padding: "14px 16px", color: "var(--ink)", borderRight: "1px solid var(--ink-100)", verticalAlign: "top", lineHeight: 1.5 }}>{r.e4}</td>
            <td style={{ padding: "14px 16px", color: "var(--ink-500)", borderRight: "1px solid var(--ink-100)", verticalAlign: "top", lineHeight: 1.5 }}>{r.e3}</td>
            <td style={{ padding: "14px 16px", color: "var(--ink-500)", borderRight: "1px solid var(--ink-100)", verticalAlign: "top", lineHeight: 1.5 }}>{r.e2}</td>
            <td style={{ padding: "14px 16px", color: "var(--ink-500)", verticalAlign: "top", lineHeight: 1.5 }}>{r.e1}</td>
          </tr>
        ))}
        <tr style={{ background: "var(--ink)", borderTop: "2px solid var(--ink)" }}>
          <td colSpan={5} style={{ padding: "12px 16px", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, color: "var(--sky)", textAlign: "right", letterSpacing: "-0.01em" }}>Total Score: _____ / 20</td>
        </tr>
      </tbody>
    </table>
  </div>
);

/* ---- Page ---- */
function App() {
  useLucide();
  return (
    <React.Fragment>
      {/* Hero */}
      <section style={{ background: "var(--ink)", padding: "72px 0 80px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, backgroundImage: "url('/assets/photo-hs-crowd.jpg')", backgroundSize: "cover", backgroundPosition: "center 28%" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(22,20,19,.91)" }} />
        <div className="ts-wrap" style={{ maxWidth: 760, textAlign: "center", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--lime)", color: "var(--ink)", borderRadius: 999, padding: "7px 18px", marginBottom: 28, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12.5, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid var(--ink)" }}>
            <Icon name="calendar-clock" size={14} color="var(--ink)" /> Deadline: Friday, July 17th, 2026
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 0.92, margin: "0 0 24px", color: "var(--white)" }}>
            You're in.<br /><span style={{ color: "var(--sky)" }}>Here's what's next.</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(17px, 2vw, 20px)", lineHeight: 1.6, color: "var(--fg-on-dark2)", margin: 0 }}>
            Erin Pompa, the founder of TruthSpeaks 365, recorded a personal message for you. Start there, then follow the application instructions below and submit your video by the deadline.
          </p>
        </div>
      </section>

      {/* Deadline banner */}
      <div style={{ background: "var(--pink)", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)", padding: "16px 0" }}>
        <div className="ts-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <Icon name="calendar-clock" size={20} color="var(--ink)" />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--ink)" }}>
            Submission deadline: Friday, July 17th, 2026
          </span>
        </div>
      </div>

      {/* Steps */}
      <section style={{ background: "var(--paper)", padding: "80px 0 100px" }}>
        <div className="ts-wrap" style={{ maxWidth: 860 }}>

          {/* Step 1 */}
          <div style={{ marginBottom: 72 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "var(--sky)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0, boxShadow: "4px 4px 0 var(--ink)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, color: "var(--ink)" }}>01</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-500)", marginBottom: 4 }}>First</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 38px)", textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: 0, lineHeight: 1 }}>Listen to this audio</h2>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 24px", maxWidth: 640 }}>
              Before you do anything else, press play. Erin Pompa, the founder, recorded a personal message for you. It's everything you need to know going into this process.
            </p>
            <AudioPlayer />

            {/* Post-audio notes */}
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ background: "var(--white)", border: "1.5px solid var(--ink-100)", borderRadius: 14, padding: "16px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Icon name="mail" size={18} color="var(--ink)" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-500)", margin: 0 }}>
                  If you have questions before moving to Step 2, email Erin at <a href="mailto:erin@erinpompa.com" style={{ color: "var(--ink)", fontWeight: 700 }}>erin@erinpompa.com</a>.
                </p>
              </div>
              <div style={{ background: "var(--white)", border: "1.5px solid var(--ink-100)", borderRadius: 14, padding: "16px 20px", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Icon name="bookmark" size={18} color="var(--ink)" style={{ flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-500)", margin: 0 }}>
                  <strong style={{ color: "var(--ink)" }}>Bookmark or save this page</strong> so you don't lose it.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 2, background: "var(--ink-100)", marginBottom: 72 }} />

          {/* Step 2 */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, background: "var(--lime)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0, boxShadow: "4px 4px 0 var(--ink)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, color: "var(--ink)" }}>02</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-500)", marginBottom: 4 }}>Then</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 38px)", textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: 0, lineHeight: 1 }}>Record and submit your video</h2>
              </div>
            </div>

            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65, color: "var(--ink-500)", margin: "0 0 36px", maxWidth: 640 }}>
              We just want to see you do your thing. Any camera works, any background is fine. A microphone is a bonus but not required. Make sure we can see your full body, not just your face. <strong style={{ color: "var(--ink)" }}>Movement matters.</strong>
            </p>

            {/* The three parts */}
            {/* Part 1 */}
            <div style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 22, padding: "28px 30px", marginBottom: 20, boxShadow: "4px 4px 0 var(--ink-100)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-500)" }}>Part 1</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: 0 }}>Engagement</h3>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--white)", background: "var(--sky)", border: "1.5px solid var(--ink)", borderRadius: 999, padding: "3px 12px" }}>30 sec to 1 min</span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65, color: "var(--ink-500)", margin: 0 }}>
                Start with an activity that gets them involved. It could be grounding, it could be energizing. Match your teaching style and your energy. A call and response, a meditation, a question, a movement series. The goal: get the students to buy in, captivate them.
              </p>
            </div>

            {/* Part 2 */}
            <div style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 22, padding: "28px 30px", marginBottom: 20, boxShadow: "4px 4px 0 var(--ink-100)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-500)" }}>Part 2</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: 0 }}>The Presentation</h3>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--white)", background: "var(--pink)", border: "1.5px solid var(--ink)", borderRadius: 999, padding: "3px 12px" }}>4 to 5 min</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                {/* Step 1 */}
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "var(--pink)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, color: "var(--ink)" }}>1</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 15, color: "var(--ink)", marginBottom: 6 }}>Pick your story</div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--ink-500)", margin: "0 0 10px" }}>
                      Choose one story of overcoming adversity that you want to share. It could be living with addiction, navigating thoughts of suicide, healing after sexual assault, growing up with divorced parents, struggling with mental health, losing someone you loved, or anything else you have personally walked through.
                    </p>
                    <div style={{ background: "var(--paper-2)", border: "1.5px solid var(--ink-100)", borderRadius: 10, padding: "10px 14px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink)", lineHeight: 1.5 }}>
                      <strong>Example:</strong> I have parents who suffered from addiction.
                    </div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--ink-500)", margin: "10px 0 0", fontStyle: "italic" }}>
                      The goal is not to trauma dump, but to show students how you moved through it.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "var(--pink)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, color: "var(--ink)" }}>2</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 15, color: "var(--ink)", marginBottom: 6 }}>Identify the lesson</div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--ink-500)", margin: "0 0 10px" }}>
                      After identifying your story, identify the lesson you want students to walk away with. The lesson comes from your story. Everything builds from the lesson.
                    </p>
                    <div style={{ background: "var(--paper-2)", border: "1.5px solid var(--ink-100)", borderRadius: 10, padding: "10px 14px", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink)", lineHeight: 1.5 }}>
                      <strong>Example:</strong> My parents suffered from addiction. The lesson: you can't control what happens around you, but you can control how you move through it.
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "var(--pink)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0, fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, color: "var(--ink)" }}>3</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 15, color: "var(--ink)", marginBottom: 6 }}>Build your presentation</div>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--ink-500)", margin: 0 }}>
                      Introduce your topic through an activity to get students invested and help them connect. This activity should help them embrace one part of the lesson. Think about teaching them one part of a framework to help them embody the lesson you have identified.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Part 3 */}
            <div style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 22, padding: "28px 30px", marginBottom: 36, boxShadow: "4px 4px 0 var(--ink-100)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-500)" }}>Part 3</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: 0 }}>The Closing</h3>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--white)", background: "var(--violet)", border: "1.5px solid var(--ink)", borderRadius: 999, padding: "3px 12px" }}>30 sec to 1 min</span>
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65, color: "var(--ink-500)", margin: 0 }}>
                What do you want students to walk away with? What's their follow-up action?
              </p>
            </div>

            {/* Recording checklist */}
            <div style={{ background: "var(--ink)", borderRadius: 18, padding: "28px 30px", marginBottom: 40 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--white)", marginBottom: 20 }}>When you record, your video will include:</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Engagement", time: "30 seconds to 1 minute", color: "var(--sky)" },
                  { label: "The Presentation", time: "4 to 5 minutes", color: "var(--pink)" },
                  { label: "The Closing", time: "30 seconds to 1 minute", color: "var(--violet)" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: item.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16, color: "var(--white)" }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--fg-on-dark2)" }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rubric */}
            <div style={{ marginBottom: 48 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 16px" }}>How we score your video</h3>
              <RubricTable />
            </div>

            {/* Submit CTA */}
            <div style={{ background: "var(--lime)", border: "2px solid var(--ink)", borderRadius: 24, padding: "36px 36px", boxShadow: "6px 6px 0 var(--ink)", textAlign: "center" }}>
              <Icon name="send" size={32} color="var(--ink)" style={{ marginBottom: 16 }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(22px, 3vw, 32px)", textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 20px" }}>Ready? Send it in.</h3>
              <div style={{ background: "rgba(22,20,19,.08)", borderRadius: 16, padding: "20px 24px", marginBottom: 20, textAlign: "left" }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "var(--ink)" }}>
                  <div style={{ marginBottom: 10 }}><strong>Email your video as a shareable Google Drive link to:</strong> <a href="mailto:erin@erinpompa.com" style={{ color: "var(--ink)" }}>erin@erinpompa.com</a></div>
                  <div style={{ marginBottom: 10 }}><strong>Subject line:</strong> TruthSpeaks365 Submission 2026</div>
                  <div><strong>In the body of the email, include:</strong> the story you chose and the lesson you are focusing on from it.</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 24 }}>
                <Icon name="calendar-x-2" size={18} color="var(--ink)" />
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 17, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--ink)" }}>Deadline: Friday, July 17th, 2026</span>
              </div>
              <a href={`mailto:${SUBMIT_EMAIL}?subject=${encodeURIComponent(SUBMIT_SUBJECT)}`}
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ink)", color: "var(--white)", border: "2px solid var(--ink)", borderRadius: 999, padding: "14px 32px", fontFamily: "var(--font-body)", fontWeight: 900, fontSize: 17, textDecoration: "none", boxShadow: "4px 4px 0 rgba(0,0,0,.25)" }}>
                <Icon name="mail" size={18} color="var(--white)" />
                Submit my video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer signature */}
      <section style={{ background: "var(--ink)", padding: "52px 0" }}>
        <div className="ts-wrap" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-script)", fontSize: "clamp(28px, 4vw, 46px)", color: "var(--white)", margin: "0 0 10px", lineHeight: 1.2 }}>We are so excited to meet you.</p>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--sky)", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>Erin and the TruthSpeaks 365 team</p>
        </div>
      </section>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
