/* =====================================================================
   BECOME A PRESENTER, TruthSpeaks 365
   ===================================================================== */

const LOOKING = [
  { icon: "heart", title: "A true story of adversity", body: "Recovery. Survival. Hard relationships. Perfectionism and people-pleasing. The body stuff. The thing you used to hide. We honor it, and we make it usable for kids." },
  { icon: "sparkles", title: "Willingness, not polish", body: "You do NOT need to be a 'speaker.' You need a real story and the courage to tell it. We'll handle the stagecraft together." },
  { icon: "users", title: "Heart for young people", body: "You light up around kids and teens. You want them to feel less alone, and to walk away with something they can actually use." },
];

const GET = [
  { icon: "drafting-compass", color: "var(--pink)",   title: "We build your framework",  body: "We sit down with your story and reduce it to a teachable structure, the parts, the names, the takeaway. You'll never wing it." },
  { icon: "mic",               color: "var(--lime)",   title: "Real speaker training",    body: "Stage presence, engagement, owning the room. No reading from slides, no talking heads. We rehearse until it's in your body." },
  { icon: "calendar-check",    color: "var(--sky)",    title: "We get you booked",        body: "Schools, leadership groups, staff trainings. We run the pipeline and put you in front of the rooms that need your story." },
  { icon: "banknote",          color: "var(--yellow)", title: "You get paid",             body: "This is a profession, not a favor. We pay our presenters to do meaningful work and treat it like the career it is." },
  { icon: "users-round",       color: "var(--violet)", title: "A real sisterhood",        body: "A circle of women doing the same brave thing. We show up for each other, on the road and off it." },
  { icon: "shield-check",      color: "var(--coral)",  title: "Support that lasts",       body: "Feedback, coaching, and a team behind you. You're never alone up there or after." },
];

const APP_STEPS = [
  {
    n: "01", color: "var(--pink)",
    title: "Tell us who you are",
    body: "Fill out this short form so we know you're interested. Once you submit, you'll be given access to the complete application.",
    btn: "Start here",
    href: "https://webforms.pipedrive.com/f/6Na9tudP4W1Zd45tKSj3nVqkVKBhKWA5iwwauydwnia1okUCzAfDi8XJMrhXraSLZx",
  },
  {
    n: "02", color: "var(--lime)",
    title: "Unlock the application",
    body: "After you complete step one, you'll be led to an application page where you'll receive an audio that walks you through what TruthSpeaks 365 is all about, who we're looking for, and what the process feels like from here.",
    btn: null, href: null,
  },
  {
    n: "03", color: "var(--sky)",
    title: "How to apply",
    body: "After you listen to the audio you will then get directions to record your video. We do video applications because we want to see you. We want to feel your energy. Don't stress, you'll get step-by-step directions.",
    btn: null, href: null,
  },
];

const PresentersInAction = () => (
  <section style={{ background: "var(--ink)", padding: "84px 0" }}>
    <div className="ts-wrap">
      <SectionHead className="ts-reveal" light eyebrow="This could be you" eyebrowColor="var(--lime)" title={<span>Real women. <HL color="var(--pink)">Real rooms.</HL></span>} sub="Our presenters are out there right now, telling the truth in gyms and classrooms across the country." style={{ marginBottom: 44 }} />
      <div className="ts-reveal ts-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
        {[
          { src: "assets/photo-denese.webp", alt: "Denese Longsworth presenting Building Boundaries", obj: "center 18%" },
          { src: "assets/photo-circle.jpg", alt: "A TruthSpeaks 365 presenter connecting with a circle of students", obj: "center 30%" },
          { src: "assets/photo-christine-selfie.jpg", alt: "Christine Conti before a presentation", obj: "center 30%" },
        ].map(p => (
          <div key={p.src} style={{ borderRadius: 20, overflow: "hidden", border: "2px solid var(--ink)", boxShadow: "6px 6px 0 var(--lime)", aspectRatio: "3/4", background: "var(--ink-800)" }}>
            <img src={p.src} alt={p.alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: p.obj, display: "block" }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Mission = () => (
  <section style={{ background: "var(--sky)", padding: "84px 0" }}>
    <div className="ts-wrap">
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "center" }} className="ts-split">
        <div className="ts-reveal">
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(96px, 13vw, 160px)", lineHeight: 0.86, color: "var(--ink)", letterSpacing: "-0.05em" }}>70%</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--ink)", marginTop: 10 }}>of professional speakers are men.</div>
        </div>
        <div className="ts-reveal">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.05, margin: "0 0 20px" }}>
            We're changing <HL color="var(--pink)">who's at the front</HL> of the room.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, color: "var(--ink)", margin: "0 0 18px" }}>
            We hire and train women with real stories of moving through adversity, and we build the framework with you. You bring the truth. We'll help you shape it, and get you in front of the rooms that need it.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>
            Young people need to see themselves in the person holding the mic. That's where you come in.
          </p>
        </div>
      </div>
      <div style={{ marginTop: 64 }}>
        <a href="https://www.mpi.org/media/blog/articles/article/where-are-all-the-female-speakers" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(0,0,0,.45)", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,.2)", lineHeight: 1.5 }}>Source: Johnston, J. (2019). Where are all the female speakers? Meeting Professionals International.</a>
      </div>
    </div>
  </section>
);

const Looking = () => (
  <section style={{ background: "var(--lime)", padding: "84px 0" }}>
    <div className="ts-wrap">
      <SectionHead className="ts-reveal" eyebrow="Who we're looking for" title={<span>Got a story that could <HL color="var(--pink)">change a kid's life?</HL></span>} sub="We hire and train women with powerful stories of adversity. Here's what matters to us." style={{ marginBottom: 44 }} />
      <div className="ts-grid-3 ts-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
        {LOOKING.map(l => (
          <div key={l.title} style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 22, padding: 28, boxShadow: "4px 4px 0 var(--ink)" }}>
            <div style={{ width: 54, height: 54, borderRadius: 15, background: "var(--lime)", border: "2px solid var(--ink)", display: "grid", placeItems: "center", marginBottom: 16 }}>
              <Icon name={l.icon} size={26} color="var(--ink)" />
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.01em", margin: "0 0 10px", color: "var(--ink)", lineHeight: 1.05 }}>{l.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.5, color: "var(--ink-500)", margin: 0 }}>{l.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Reassure = () => (
  <section style={{ background: "var(--ink)", color: "var(--white)", padding: "64px 0" }}>
    <div className="ts-wrap ts-reveal" style={{ maxWidth: 880, textAlign: "center" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.05, margin: 0 }}>
        You're not ready because you're <HL color="var(--pink)">scared</HL>, not because you're not <HL color="var(--lime)">good enough.</HL>
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55, color: "var(--fg-on-dark2)", maxWidth: 620, margin: "20px auto 0" }}>
        We've heard every version of "but my story isn't special." It is. Say the thing out loud, and watch what it does for a room full of kids.
      </p>
    </div>
  </section>
);

const LOOKING_NEW = [
  {
    color: "var(--pink)",
    title: "Women who own their energy",
    body: "You don't have to be a trained speaker. You just have to be willing. We are looking for women who show up authentically, own their energy, and naturally draw people in. If students lean in when you talk, you belong here.",
  },
  {
    color: "var(--lime)",
    title: "Women with a story worth telling and the courage to tell it",
    body: "Our speakers go there. They share real, personal stories and have the kinds of honest conversations most people avoid. If you have lived through something and come out the other side with something to say, we want to hear from you.",
  },
  {
    color: "var(--sky)",
    title: "Women committed to getting better",
    body: "We believe the best presenters never stop growing. We are looking for women who take their craft seriously, show up to training ready to learn, and are always working toward being the best version of themselves on and off the stage.",
  },
  {
    color: "var(--violet)",
    title: "Women who connect, not just speak",
    body: "There is a difference between talking at students and talking with them. We are looking for women who make students feel seen, heard, and safe. Approachability is not optional here. It is everything.",
  },
];

const WhatWereLookingFor = () => (
  <section style={{ background: "var(--paper)", padding: "84px 0" }}>
    <div className="ts-wrap">
      <SectionHead className="ts-reveal" eyebrow="What we're looking for" title={<span>The women we <HL color="var(--pink)">want on our team.</HL></span>} style={{ marginBottom: 44 }} />
      <div className="ts-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
        {LOOKING_NEW.map(item => (
          <div key={item.title} style={{ background: item.color, border: "2px solid var(--ink)", borderRadius: 22, padding: "32px 28px", boxShadow: "4px 4px 0 rgba(255,255,255,.12)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 14px", lineHeight: 1.1 }}>{item.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65, color: "var(--ink)", margin: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section style={{ background: "var(--ink)", padding: "84px 0" }}>
    <div className="ts-wrap">
      <div className="ts-reveal" style={{ marginBottom: 52 }}>
        <Eyebrow color="var(--lime)" style={{ marginBottom: 16 }}>What you get as a TruthSpeaks 365 speaker</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.96, color: "var(--white)", margin: "0 0 20px" }}>
          Your story.<br /><HL color="var(--pink)">Your impact.</HL>
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.65, color: "var(--fg-on-dark2)", maxWidth: 680, margin: 0 }}>
          You have a story worth telling. We help you share it in a way that is powerful, purposeful, and responsible. This is not just about getting on a stage. It is about connecting with young people in a way that actually moves them.
        </p>
      </div>

      <div className="ts-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Real Training */}
        <div style={{ background: "var(--lime)", border: "2px solid var(--ink)", borderRadius: 22, padding: "32px 30px", boxShadow: "4px 4px 0 rgba(255,255,255,.15)", gridRow: "span 2" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 28, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 16px" }}>Real Training</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65, color: "var(--ink)", margin: "0 0 22px" }}>
            We invest in you. Our extensive training program gives you the skills to show up as an optimal presenter for any audience, at any stage of your speaking journey. And these aren't just skills for our stage. They're yours to keep and carry with you for life.
          </p>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink)", marginBottom: 14 }}>You'll learn how to:</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {["Build a presentation that lands", "Deliver it with confidence and intention", "Speak to students at every age level", "Read a room and keep an audience engaged", "Handle the unexpected with grace"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 26, height: 26, borderRadius: 999, background: "var(--ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Icon name="check" size={14} color="var(--lime)" />
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15.5, color: "var(--ink)" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* We Get You Booked */}
        <div style={{ background: "var(--pink)", border: "2px solid var(--ink)", borderRadius: 22, padding: "28px 28px", boxShadow: "4px 4px 0 rgba(255,255,255,.15)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 24, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 12px" }}>We Get You Booked</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>You focus on showing up. We handle the rest. We work to connect you with schools, events, and opportunities that are the right fit for you and your story. Our team manages the outreach, the logistics, and the coordination so you can do what you do best.</p>
        </div>

        {/* You Get Paid */}
        <div style={{ background: "var(--sky)", border: "2px solid var(--ink)", borderRadius: 22, padding: "28px 28px", boxShadow: "4px 4px 0 rgba(255,255,255,.15)" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 24, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 12px" }}>You Get Paid</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>We operate as an agency, which means when you book, you earn. You keep the majority of your speaker fee, and we handle the business side so you never have to chase a check or negotiate alone.</p>
        </div>

        {/* Ongoing Support */}
        <div style={{ background: "var(--violet)", border: "2px solid var(--ink)", borderRadius: 22, padding: "28px 28px", boxShadow: "4px 4px 0 rgba(255,255,255,.15)", gridColumn: "2" }}>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 24, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 12px" }}>Ongoing Support</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>You are never out here on your own. We are with you before, during, and after every engagement.</p>
        </div>
      </div>
    </div>
  </section>
);

const MidApplyCTA = () => (
  <section style={{ background: "var(--pink)", borderTop: "2px solid var(--ink)", padding: "52px 0" }}>
    <div className="ts-wrap ts-reveal" style={{ display: "flex", justifyContent: "center" }}>
      <Button variant="dark" size="lg" href="https://webforms.pipedrive.com/f/6Na9tudP4W1Zd45tKSj3nVqkVKBhKWA5iwwauydwnia1okUCzAfDi8XJMrhXraSLZx">Apply now →</Button>
    </div>
  </section>
);

const ApplicationProcess = () => (
  <section style={{ background: "var(--paper)", padding: "84px 0" }}>
    <div className="ts-wrap">
      <SectionHead className="ts-reveal" eyebrow="How to apply" title={<span>The application <HL color="var(--pink)">process.</HL></span>} style={{ marginBottom: 44 }} />

      <div className="ts-reveal" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
        {APP_STEPS.map((s, i) => (
          <div key={s.n} style={{ background: s.color, border: "2px solid var(--ink)", borderRadius: 22, padding: "32px 28px", boxShadow: "4px 4px 0 var(--ink)", display: "flex", flexDirection: "column", gap: 14, gridColumn: i === 2 ? "1 / -1" : undefined }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 52, lineHeight: 1, color: "var(--ink)", letterSpacing: "-0.03em" }}>{s.n}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>{s.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink)", margin: 0, flex: 1 }}>{s.body}</p>
            {s.btn && s.href && (
              <a href={s.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--ink)", color: "var(--white)", border: "2px solid var(--ink)", borderRadius: 999, padding: "11px 22px", fontFamily: "var(--font-body)", fontWeight: 900, fontSize: 15, textDecoration: "none", boxShadow: "3px 3px 0 rgba(0,0,0,.3)", alignSelf: "flex-start", marginTop: "auto" }}>
                {s.btn} <Icon name="arrow-right" size={16} color="var(--white)" />
              </a>
            )}
          </div>
        ))}
      </div>
      <div className="ts-reveal" style={{ textAlign: "center", marginTop: 48 }}>
        <p style={{ fontFamily: "var(--font-script)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--ink)", margin: 0, lineHeight: 1.2 }}>We are excited to meet you.</p>
      </div>
    </div>
  </section>
);

function App() {
  useLucide();
  return (
    <React.Fragment>
      <NavBar active="Become a Presenter" />
      <PageHero
        chip=""
        eyebrow="Become a presenter"
        title={<span>Your story is <HL color="var(--pink)">the curriculum.</HL></span>}
        sub={<span>We hire and train women with real stories of moving through adversity, build a teachable framework around each one, and put them in front of the rooms that need them most. <strong style={{color:"var(--white)"}}>Now hiring for the 2026-2027 season. Deadline: July 17, 2026.</strong></span>}
      />
      <MidApplyCTA />
      <Mission />
      <PresentersInAction />
      <WhatWereLookingFor />
      <Benefits />
      <ApplicationProcess />
      <BottomCTA
        eyebrow=""
        title={<span>Ready to <HL color="var(--pink)">apply?</HL></span>}
        body="Application deadline: July 17, 2026."
        btn="Start your application →"
        href="https://webforms.pipedrive.com/f/6Na9tudP4W1Zd45tKSj3nVqkVKBhKWA5iwwauydwnia1okUCzAfDi8XJMrhXraSLZx"
      />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
