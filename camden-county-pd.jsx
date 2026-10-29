/* =====================================================================
   CAMDEN COUNTY PD RESOURCE PAGE — TruthSpeaks 365
   Presenters: Erin Pompa, Christine Conti, Candice Beers
   Standalone page — not linked in main nav
   ===================================================================== */

const GOOGLE_FORM = "https://docs.google.com/forms/d/e/1FAIpQLScHyNtlViL-LoUuI1uClAFupbxBlB1HQfTk5SO3PV_SJyTT8A/viewform?usp=dialog";
const PIPEDRIVE_FORM = "https://webforms.pipedrive.com/f/clTep0VNxXRyL9v4qQAQH1MknN1K5SsbuThJFHcYabdZNS63Ki18JRtYVXQpC4UtRF";
const AMAZON_BOOK = "https://www.amazon.com/dp/1952654394";
const PURE_SKYS = "https://www.pureskys.com";

/* ---- Header ---- */
const CCHeader = () => (
  <header style={{ background: "var(--ink)", borderBottom: "3px solid var(--lime)", padding: "22px 0" }}>
    <div className="ts-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 52, height: 52, borderRadius: 12, background: "var(--lime)", border: "2px solid rgba(255,255,255,.2)", display: "grid", placeItems: "center", flexShrink: 0 }}>
          <Icon name="shield" size={26} color="var(--ink)" />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,.5)", marginBottom: 2 }}>Camden County</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--white)", lineHeight: 1 }}>Professional Development</div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--white)" }}>TruthSpeaks</div>
        <div style={{ background: "var(--lime)", color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, textTransform: "uppercase", letterSpacing: "-0.02em", borderRadius: 8, padding: "3px 10px" }}>365</div>
      </div>
    </div>
  </header>
);

/* ---- Hero ---- */
const CCHero = () => (
  <section style={{ background: "var(--ink)", padding: "72px 0 80px" }}>
    <div className="ts-wrap" style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--lime)", color: "var(--ink)", borderRadius: 999, padding: "7px 18px", marginBottom: 24, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", border: "2px solid var(--ink)" }}>
        <Icon name="star" size={13} color="var(--ink)" /> Your Resources
      </div>
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.04em", fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.92, color: "var(--white)", margin: "0 0 24px" }}>
        Thank you,<br /><HL color="var(--lime)">Camden County.</HL>
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(17px, 2vw, 20px)", lineHeight: 1.6, color: "var(--fg-on-dark2)", margin: "0 auto", maxWidth: 620 }}>
        Everything you need from today's sessions - resources, links, and ways to stay connected with each presenter - all in one place.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 48, flexWrap: "wrap" }}>
        {[
          { name: "Erin Pompa", img: "/uploads/NCSL+Carousel+post.png.webp", color: "var(--lime)", hasImg: true },
          { name: "Christine Conti", img: "/uploads/Christine+Conti+Full+Body+Shot+1.png.webp", color: "var(--pink)", hasImg: true },
          { name: "Candice Beers", img: null, color: "var(--sky)", hasImg: false },
        ].map(p => (
          <div key={p.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div style={{ width: 110, height: 110, borderRadius: 999, border: `3px solid ${p.color}`, overflow: "hidden", background: "var(--ink-500)", display: "grid", placeItems: "center" }}>
              {p.hasImg
                ? <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
                : <Icon name="user" size={44} color="rgba(255,255,255,.3)" />
              }
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--white)", textAlign: "center" }}>{p.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---- Survey Banner ---- */
const SurveyBanner = () => (
  <section style={{ background: "var(--lime)", borderTop: "3px solid var(--ink)", borderBottom: "3px solid var(--ink)", padding: "48px 0" }}>
    <div className="ts-wrap ts-reveal" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
      <div style={{ flex: 1, minWidth: 260 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
            <Icon name="heart" size={20} color="var(--lime)" />
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink)" }}>Your voice matters</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.0, color: "var(--ink)", margin: "0 0 12px" }}>
          Please fill out our survey.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--ink-500)", margin: 0, maxWidth: 480 }}>
          Your feedback means everything to us. It helps us grow, improve, and continue showing up for communities like yours. One survey covers all three presenters - it only takes a few minutes.
        </p>
      </div>
      <div style={{ flexShrink: 0 }}>
        <a href={GOOGLE_FORM} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--ink)", color: "var(--lime)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, textTransform: "uppercase", letterSpacing: "-0.01em", padding: "16px 28px", borderRadius: 14, border: "2px solid var(--ink)", textDecoration: "none", boxShadow: "4px 4px 0 rgba(0,0,0,.2)" }}>
          <Icon name="clipboard-list" size={18} color="var(--lime)" />
          Take the survey
        </a>
      </div>
    </div>
  </section>
);

/* ---- Erin Section ---- */
const ErinSection = () => (
  <section style={{ background: "var(--paper)", padding: "80px 0", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-reveal">
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
        <div style={{ width: 80, height: 80, borderRadius: 999, border: "3px solid var(--lime)", overflow: "hidden", flexShrink: 0 }}>
          <img src="/uploads/NCSL+Carousel+post.png.webp" alt="Erin Pompa" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        </div>
        <div>
          <div style={{ display: "inline-block", background: "var(--lime)", border: "2px solid var(--ink)", borderRadius: 8, padding: "4px 12px", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink)", marginBottom: 6 }}>Erin's Resources</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", textTransform: "uppercase", letterSpacing: "-0.03em", color: "var(--ink)", margin: 0 }}>Erin Pompa</h2>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Founder & CEO</div>
        </div>
      </div>
      <div style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 24, padding: "36px 40px", boxShadow: "6px 6px 0 var(--lime)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <Icon name="book-open" size={20} color="var(--lime)" />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-500)" }}>Coming Soon</span>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(22px, 2.5vw, 30px)", textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 14px", lineHeight: 1.05 }}>
            Erin Is Writing a Book.
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--ink-500)", margin: "0 0 10px" }}>
            Erin is writing a book for adults - a guide to living a truly great life. It's rooted in the same frameworks she shares on stage, built to help you apply them every single day.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--ink-500)", margin: 0 }}>
            Be the first to know when it drops. Sign up and you'll get updates on the release, behind-the-scenes details, and early access.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, background: "var(--ink)", borderRadius: 20, padding: "36px 28px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: 999, background: "var(--lime)", display: "grid", placeItems: "center", border: "2px solid rgba(255,255,255,.15)" }}>
            <Icon name="bell" size={28} color="var(--ink)" />
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--white)", lineHeight: 1.1 }}>Get notified when it's out.</div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,.6)", margin: 0 }}>Drop your info and we'll reach out the moment it's available.</p>
          <a href={PIPEDRIVE_FORM} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--lime)", color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: "-0.01em", padding: "14px 24px", borderRadius: 12, border: "2px solid rgba(255,255,255,.15)", textDecoration: "none" }}>
            <Icon name="mail" size={16} color="var(--ink)" /> Sign me up
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ---- Christine Section ---- */
const ChristineSection = () => (
  <section style={{ background: "var(--white)", padding: "80px 0", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-reveal">
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
        <div style={{ width: 80, height: 80, borderRadius: 999, border: "3px solid var(--pink)", overflow: "hidden", flexShrink: 0 }}>
          <img src="/uploads/Christine+Conti+Full+Body+Shot+1.png.webp" alt="Christine Conti" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        </div>
        <div>
          <div style={{ display: "inline-block", background: "var(--pink)", border: "2px solid var(--ink)", borderRadius: 8, padding: "4px 12px", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink)", marginBottom: 6 }}>Christine's Resources</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", textTransform: "uppercase", letterSpacing: "-0.03em", color: "var(--ink)", margin: 0 }}>Christine Conti</h2>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Presenter - Face It. Feel It. Flip It.</div>
        </div>
      </div>
      <div style={{ background: "var(--paper)", border: "2px solid var(--ink)", borderRadius: 24, padding: "36px 40px", boxShadow: "6px 6px 0 var(--pink)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <Icon name="book" size={20} color="var(--pink)" />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11.5, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-500)" }}>Christine's Book</span>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(22px, 2.5vw, 28px)", textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 6px", lineHeight: 1.05 }}>
            Split-Second Courage
          </h3>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, fontStyle: "italic", color: "var(--ink-500)", marginBottom: 16 }}>
            What if Your Fears Were the Key to Your Dreams?
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--ink-500)", margin: 0 }}>
            This book will teach you how to rethink the way you look at the world. Christine dives into the powerful stories and mindsets of real people who chose to recognize misfortune as a gift and charge headfirst into their fears. Learn how to grow your split-second courage and start truly living.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, background: "var(--ink)", borderRadius: 20, padding: "36px 28px", textAlign: "center" }}>
          <div style={{ width: 64, height: 64, borderRadius: 999, background: "var(--pink)", display: "grid", placeItems: "center", border: "2px solid rgba(255,255,255,.15)" }}>
            <Icon name="zap" size={28} color="var(--ink)" />
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 18, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--white)", lineHeight: 1.1 }}>Ready to face your fears?</div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,.6)", margin: 0 }}>Grab Christine's book on Amazon and keep the work going.</p>
          <a href={AMAZON_BOOK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--pink)", color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: "-0.01em", padding: "14px 24px", borderRadius: 12, border: "2px solid rgba(255,255,255,.15)", textDecoration: "none" }}>
            <Icon name="shopping-cart" size={16} color="var(--ink)" /> Order on Amazon
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ---- Candice Section ---- */
const CandiceSection = () => (
  <section style={{ background: "var(--paper)", padding: "80px 0" }}>
    <div className="ts-wrap ts-reveal">
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
        <div style={{ width: 80, height: 80, borderRadius: 999, border: "3px solid var(--sky)", overflow: "hidden", flexShrink: 0, background: "var(--ink-500)", display: "grid", placeItems: "center" }}>
          <Icon name="user" size={36} color="rgba(255,255,255,.3)" />
        </div>
        <div>
          <div style={{ display: "inline-block", background: "var(--sky)", border: "2px solid var(--ink)", borderRadius: 8, padding: "4px 12px", fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink)", marginBottom: 6 }}>Candice's Resources</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(24px, 3vw, 36px)", textTransform: "uppercase", letterSpacing: "-0.03em", color: "var(--ink)", margin: 0 }}>Candice Beers</h2>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--ink-500)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Presenter - Centering Through Yoga & Breathwork - RYT 500+</div>
        </div>
      </div>

      <div style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 24, overflow: "hidden", boxShadow: "6px 6px 0 var(--sky)" }}>
        <div style={{ background: "var(--sky)", padding: "24px 40px", borderBottom: "2px solid var(--ink)", display: "flex", alignItems: "center", gap: 14 }}>
          <Icon name="wind" size={22} color="var(--ink)" />
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 20, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)" }}>Your 3-Minute Reset</div>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, color: "var(--ink-500)" }}>Centering practices for every day - no mat, no experience needed</div>
          </div>
        </div>

        <div style={{ padding: "36px 40px", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 40, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--ink-500)", margin: "0 0 24px" }}>
              Candice's practice gives you a simple way to notice what stress feels like in your body, then use breath, gentle movement, and a chosen phrase to get steady again. No yoga experience. No mats. Just a chair.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "timer", label: "3-Minute Personal Routine", body: "A full reset you can do anytime - breathe, check in with your body, and reconnect with yourself before the next thing begins." },
                { icon: "zap", label: "1-Minute Classroom Version", body: "A quick version you can do with any group, any time. Use it to open a meeting, reset the room, or close out a hard day." },
                { icon: "pen-line", label: "Bullet Journal + \"I Am\" Prompts", body: "Quick reflection prompts to build awareness and reinforce a grounded mindset daily." },
                { icon: "calendar-check", label: "Plan When to Use It", body: "Identify the moments in your day where this practice fits best - and make it a habit that actually sticks." },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--sky)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    <Icon name={item.icon} size={16} color="var(--ink)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 14, color: "var(--ink)", marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--ink-500)" }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "var(--ink)", borderRadius: 20, padding: "28px 26px", textAlign: "center" }}>
              <div style={{ width: 52, height: 52, borderRadius: 999, background: "var(--sky)", display: "grid", placeItems: "center", margin: "0 auto 16px", border: "2px solid rgba(255,255,255,.15)" }}>
                <Icon name="cloud" size={24} color="var(--ink)" />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 17, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--white)", marginBottom: 8, lineHeight: 1.1 }}>Pure Skys</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55, color: "rgba(255,255,255,.65)", margin: "0 0 18px" }}>
                Visit Candice's spa and yoga studio for more resources, classes, and ways to continue your wellness practice beyond today.
              </p>
              <a href={PURE_SKYS} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--sky)", color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 13, textTransform: "uppercase", letterSpacing: "-0.01em", padding: "12px 20px", borderRadius: 10, border: "2px solid rgba(255,255,255,.15)", textDecoration: "none" }}>
                <Icon name="external-link" size={14} color="var(--ink)" /> Visit pureskys.com
              </a>
            </div>

            <div style={{ background: "color-mix(in srgb, var(--sky) 15%, white)", border: "2px solid var(--sky)", borderRadius: 16, padding: "20px 22px" }}>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--ink)", marginBottom: 8 }}>A note from Candice</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-500)", margin: 0, fontStyle: "italic" }}>
                "Steady yourself first, and you have more to give them. Three minutes is enough. You already have everything you need."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---- Footer ---- */
const CCFooter = () => (
  <footer style={{ background: "var(--ink)", borderTop: "3px solid var(--lime)", padding: "40px 0" }}>
    <div className="ts-wrap" style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--white)", marginBottom: 8 }}>
        TruthSpeaks <span style={{ color: "var(--lime)" }}>365</span>
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,.4)", margin: "0 0 16px" }}>
        Women with courage. Stories with impact.
      </p>
      <a href="https://truthspeaks365.com" style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--lime)", textDecoration: "none", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>truthspeaks365.com</a>
    </div>
  </footer>
);

function App() {
  useLucide();
  return (
    <React.Fragment>
      <CCHeader />
      <CCHero />
      <SurveyBanner />
      <ErinSection />
      <ChristineSection />
      <CandiceSection />
      <CCFooter />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
