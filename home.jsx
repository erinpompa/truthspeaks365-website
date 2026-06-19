/* =====================================================================
   HOMEPAGE, TruthSpeaks 365
   ===================================================================== */

const Hero = () => (
  <section style={{ position: "relative", overflow: "hidden", minHeight: "min(880px, 92vh)", display: "grid", alignItems: "center", background: "var(--ink)" }}>
    {/* ---- background photo (drop assets/hero-video.mp4 to replace with video) ---- */}
    <div className="hero-bg-fallback" aria-hidden="true" style={{
      position: "absolute", inset: 0, zIndex: 0, background: "var(--ink)",
      backgroundImage: "url('/assets/photo-hs-crowd.jpg')",
      backgroundSize: "cover", backgroundPosition: "center 28%"
    }}></div>
    {/* When you have a hero video, set its filename here (e.g. src="assets/hero-video.mp4")
        and it will autoplay over the placeholder below. */}
    <video className="hero-vid" autoPlay muted loop playsInline poster="" style={{ position: "absolute", inset: 0, zIndex: 1, width: "100%", height: "100%", objectFit: "cover", background: "transparent" }}></video>
    {/* legibility scrim */}
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(180deg, rgba(22,20,19,.62) 0%, rgba(22,20,19,.42) 42%, rgba(22,20,19,.72) 100%)" }}></div>

    {/* ---- content ---- */}
    <div className="ts-wrap ts-reveal" style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "72px 28px" }}>
      <img src="/assets/logo-horizontal.png" alt="TruthSpeaks 365" style={{ width: "clamp(280px, 40vw, 520px)", height: "auto", display: "block", margin: "0 auto 30px", filter: "drop-shadow(0 10px 30px rgba(0,0,0,.5))" }} />
      <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.035em", fontSize: "clamp(52px, 8vw, 108px)", lineHeight: 0.9, margin: "0 0 26px", color: "var(--white)" }}>
        Women with courage.<br />Stories with <HL color="var(--pink)">impact.</HL>
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(20px, 2.2vw, 27px)", lineHeight: 1.4, color: "var(--white)", fontWeight: 700, maxWidth: 760, margin: "0 auto" }}>
        Empowering young people to build resilience, lead with confidence, and make healthy, responsible choices.
      </p>
    </div>
  </section>
);

const PARTNER_LOGOS = [
  "4-h-Logo.png","abraham-logo.png","Absurbypark-Logo.png","ASAP-logo.png","BayonneLogo.png",
  "BergenSchools-logo.png","Boys-and-girls-club-logo.png","Brick-schools-logo.png","CASL-logo.png",
  "CGTI-Logo.png","Charter-high-school-logo.png","Clearview-schools-logo.png","coalition-logo.png",
  "Cranford-high-school-logo.png","CT-Logo.png","deal-high-school-logo.png","Deptford-logo.png",
  "east-brunswick-logo.png","Edison-logo.png","ELKS-logo.png","empower-logo.png",
  "Girls-inc-logo.png","Glassboro-logo.png","HOSA-logo.png","John-p-logo.png",
  "Kawameh-logo.png","LMTI-logo.png","MASC-Logo.png","Michigan-Stuco-logo.png",
  "middlesex-college-logo.png","Milestone-logo.png","NA4SA-Logo.png","NH-College-logo.png",
  "NHASC-Logo.png","NJAC-LOGO.png","NJCDC-Logo.png","NM-FFA.png","North-Arlington-HS-logo.png",
  "North-Highschool-logo.png","OASC-logo.png","Passaic-logo.png","Passaic-schools-logo.png",
  "Paulsboro-logo.png","Penns-grove-logo.png","PPS-Logo.png","Prevention-logo.png",
  "River-Dell-logo.png","Rose-Hulman-Logo.png","RYLA-Logo.png","SCSCA-logo.png",
  "seeds-of-change-logo.png","Shepard-logo.png","Shore-regional-logo.png","Snowball-logo.png",
  "Sussex-tech-logo.png","Tenafly-logo.png","the-bridge-logo.jpg","Trenton-logo.png",
  "Umes-logo.png","Veterans-elementary-logo.png","Veterans-Md-logo.png","VT-hosa-logo.png",
  "waldwick-logo.jpg","Westfield-schools-logo.png","Willingboro-logo.png","Winslow-logo.png",
  "Woodbridge-Logo.png","York-college-logo.png","young-leaders-in-action-logo.png"
].map(f => `https://erinpompa.com/uploads/logos/${f}`);

const WhoWeServe = () => (
  <section style={{ background: "var(--lime)", padding: "62px 0 66px", borderBottom: "2px solid var(--ink)", borderTop: "2px solid var(--ink)", overflow: "hidden" }}>
    <div className="ts-wrap">
      <div className="ts-reveal" style={{ textAlign: "center", marginBottom: 34 }}>
        <Eyebrow style={{ marginBottom: 12 }}>Who we serve</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: "clamp(26px, 3.4vw, 38px)", lineHeight: 1.05, color: "var(--ink)", margin: 0 }}>
          Schools and partners who <HL>trust us</HL> with their kids.
        </h2>
      </div>
    </div>
    <style>{`
      @keyframes marquee { from { transform: translateX(-50%) } to { transform: translateX(0) } }
      .ts-marquee-track { display: flex; width: max-content; animation: marquee 90s linear infinite; }
      .ts-marquee-track:hover { animation-play-state: paused; }
    `}</style>
    <div style={{ overflow: "hidden", marginTop: 8 }}>
      <div className="ts-marquee-track">
        {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
          <div key={i} style={{ flexShrink: 0, width: 140, height: 80, margin: "0 10px", background: "var(--white)", borderRadius: 14, border: "2px solid var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 14px", boxSizing: "border-box" }}>
            <img src={src} alt="partner logo" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", filter: "grayscale(20%)" }} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Mission = () => (
  <section style={{ background: "var(--ink)", color: "var(--white)", padding: "84px 0 48px" }}>
    <div className="ts-wrap">
      <div className="ts-split" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 56, alignItems: "center" }}>
        <div className="ts-reveal">
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(96px, 13vw, 160px)", lineHeight: 0.86, color: "var(--lime)", letterSpacing: "-0.05em" }}>70%</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--white)", marginTop: 10 }}>of professional speakers are men.</div>
        </div>
        <div className="ts-reveal">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.05, margin: "0 0 20px" }}>
            We're changing <HL color="var(--pink)">who's at the front</HL> of the room.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55, color: "var(--fg-on-dark2)", margin: 0 }}>
            Young people need to see themselves in the person holding the mic. So we hire and train women with real stories of moving through adversity, and we build a teachable framework around every single one. Representation you can feel. Tools they can keep.
          </p>
        </div>
      </div>
      <div style={{ marginTop: 48 }}>
        <a href="https://www.mpi.org/media/blog/articles/article/where-are-all-the-female-speakers" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,.32)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,.14)", lineHeight: 1.5 }}>Source: Johnston, J. (2019). Where are all the female speakers? Meeting Professionals International.</a>
      </div>
    </div>
  </section>
);

const TRACKS = [
  { tag: "Grades 3-5", color: "var(--sky)", icon: "sprout", title: "Big Feelings, Brave Kids", body: "We combine movement, mindfulness, and social-emotional learning to reinforce what your school is already teaching. Students build confidence, resilience, and connection through their bodies and their minds.", href: "/work#g35" },
  { tag: "Grades 6-8", color: "var(--pink)", icon: "flame", title: "Real Topics. Real Growth.", body: "Each presentation goes all in on one concept rooted in resilience, social-emotional learning, and character development. We bring it to life through storytelling and real-time activities that meet students where they are.", href: "/work#g68", feat: true },
  { tag: "Grades 9-12", color: "var(--violet)", icon: "zap", title: "Real Talk. Real Tools.", body: "These are the conversations teenagers need to have. Honest, intentional presentations built around real stories of women who have overcome adversity paired with a framework they can carry with them.", href: "/work#g912" },
];

const TrackCard = ({ tag, color, icon, title, body, href, feat }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: "none",
        background: feat ? "var(--ink)" : "var(--white)",
        borderRadius: 20,
        padding: "32px 28px",
        border: `2px solid var(--ink)`,
        boxShadow: hover
          ? `8px 8px 0 ${feat ? "var(--pink)" : "var(--ink)"}`
          : `4px 4px 0 ${feat ? "var(--pink)" : "var(--ink-300)"}`,
        transform: hover ? "translate(-2px,-2px)" : "none",
        transition: "all .18s cubic-bezier(.2,.8,.2,1)",
        display: "flex", flexDirection: "column", gap: 18,
        height: "100%", boxSizing: "border-box"
      }}>
      <div style={{ width: 56, height: 56, borderRadius: 16, background: color, display: "grid", placeItems: "center", border: "2px solid var(--ink)", flexShrink: 0 }}>
        <Icon name={icon} size={28} color="var(--ink)" />
      </div>
      <Tag bg={color} style={{ alignSelf: "flex-start", border: "1.5px solid var(--ink)" }}>{tag}</Tag>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(20px, 1.8vw, 26px)", letterSpacing: "-0.02em", textTransform: "uppercase", color: feat ? "var(--white)" : "var(--ink)", margin: 0, lineHeight: 1.08 }}>{title}</h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: feat ? "var(--fg-on-dark2)" : "var(--ink-500)", margin: 0, flex: 1 }}>{body}</p>
      <span style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 14, color: feat ? "var(--lime)" : "var(--link)", display: "inline-flex", alignItems: "center", gap: 6, marginTop: "auto", paddingTop: 8, borderTop: feat ? "1px solid rgba(255,255,255,.12)" : "1px solid var(--ink-100)" }}>
        Explore this track <Icon name="arrow-right" size={15} />
      </span>
    </a>
  );
};

const Tracks = () => (
  <section style={{ background: "var(--paper)", padding: "84px 0" }}>
    <div className="ts-wrap">
      <SectionHead className="ts-reveal" eyebrow="Work with us" title={<span>One mission. <HL>Three rooms.</HL></span>} sub="Pick your audience. We'll bring the right woman, the right story, and the right framework built for that age group. Every presentation is tailored to fit the room, because a third grader and a tenth grader are not the same, and we wouldn't treat them like they are." style={{ marginBottom: 44 }} />
      <div className="ts-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "stretch" }}>
        {TRACKS.map((t, i) => (
          <div key={t.tag} className="ts-reveal" style={{ animationDelay: `${i * 80}ms`, display: "flex" }}>
            <TrackCard {...t} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const _FRAMEWORKS_REMOVED = [
  {
    n: "01",
    color: "var(--pink)",
    bg: "var(--white)",
    title: "The Black Dot",
    body: "Picture a white piece of paper with one small black dot right in the middle. That dot is the hard thing the loss, the fear, the mistake you can't stop replaying. We ask students: what do you keep staring at? Because here's the truth nobody says out loud the dot is real, but it is not the whole page. The white space around it is everything you still have. Every strength, every person who loves you, every door still open. We teach kids to widen the frame. The dot doesn't disappear. You just stop letting it be the only thing.",
    steps: ["Name the dot", "See the white space", "Widen the frame"],
    stepColor: "var(--pink)",
  },
  {
    n: "02",
    color: "var(--lime)",
    bg: "var(--ink)",
    light: true,
    title: "The Warrior Toolkit",
    body: "When life gets hard and it will most kids don't know what to do with themselves. They either blow up or shut down. The Warrior Toolkit gives them four real moves they can use in the next 24 hours, not someday when they're older and have it figured out.",
    steps: ["Power of the Pause", "Your Circle of Care", "One healthy action", "The Reframe"],
    stepColor: "var(--lime)",
  },
  {
    n: "03",
    color: "var(--sky)",
    bg: "var(--paper-2)",
    title: "Belief → Thought → Action",
    body: "Every behavior starts somewhere. A belief you picked up maybe from home, maybe from what happened to you feeds a thought. That thought drives an action. And the action becomes the pattern. We walk students through the whole chain so they can see it, name it, and interrupt it before it runs their life. You can't change what you can't see. We help them see it.",
    steps: ["Identify the belief", "Catch the thought", "Choose a different action"],
    stepColor: "var(--sky)",
  },
];

const _Frameworks_REMOVED = () => (
  <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--ink-100)" }}>
    <div className="ts-wrap" style={{ paddingTop: 84, paddingBottom: 20 }}>
      <SectionHead className="ts-reveal" eyebrow="What students take home" title={<span>Every story comes with <HL color="var(--pink)">a toolkit.</HL></span>} sub="We don't trauma-dump and leave. Each talk reduces to a framework kids can name, remember, and use the next time things get hard." style={{ marginBottom: 56 }} />
    </div>

    {FRAMEWORKS.map((f, i) => (
      <div key={f.n} className="ts-reveal" style={{
        background: f.bg,
        borderTop: "2px solid var(--ink-100)",
        padding: "56px 0",
      }}>
        <div className="ts-wrap" style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 48, alignItems: "start" }}>
          {/* Big number */}
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(80px, 10vw, 120px)", lineHeight: 1,
            color: f.color, WebkitTextStroke: f.light ? "2px rgba(255,255,255,.2)" : "2px var(--ink)",
            letterSpacing: "-0.04em", paddingTop: 4
          }}>{f.n}</div>

          {/* Title + body */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase",
              letterSpacing: "-0.03em", fontSize: "clamp(28px, 3vw, 42px)", lineHeight: 1.0,
              color: f.light ? "var(--white)" : "var(--ink)", margin: "0 0 20px"
            }}>{f.title}</h3>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.65,
              color: f.light ? "var(--fg-on-dark2)" : "var(--ink-500)", margin: 0
            }}>{f.body}</p>
          </div>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingTop: 6 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: f.color, marginBottom: 4 }}>The moves</div>
            {f.steps.map((s, si) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: f.color, border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14, color: "var(--ink)" }}>{si + 1}</span>
                </div>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16, color: f.light ? "var(--white)" : "var(--ink)" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}

    <div style={{ background: "var(--paper-2)", borderTop: "2px solid var(--ink-100)", padding: "48px 0" }}>
      <div className="ts-wrap" style={{ textAlign: "center" }}>
        <Button variant="lime" size="md" href="/resources">See the free youth resources →</Button>
      </div>
    </div>
  </section>
);

const REVIEWS = [
  {
    name: "Nina Powell",
    role: "School Counselor",
    time: "1 month ago",
    quote: "Katherine came and presented to our students. Her presentation was engaging, interactive and exciting. Our middle schoolers were able to see how some of them base their decisions on the crowd instead of their own free will. From the feedback received from my students, they all left that meeting with a stronger sense of self. Thank you TruthSpeaks 365.",
    initials: "NP",
    color: "var(--pink)",
  },
  {
    name: "Courtney Thomas",
    role: "Program Director",
    time: "6 months ago",
    quote: "Our program has had the honor of working with Denese Longsworth of TruthSpeaks 365 for about 3 years now and each time is better than the last! The topic of Boundaries and Healthy Relationships was highly received from our students! Our students walked away with a better understanding of how to be more firm with their boundaries and sense of self.",
    initials: "CT",
    color: "var(--violet)",
  },
  {
    name: "Michael Belh",
    role: "High School Teacher, Glassboro High School",
    time: "6 months ago",
    quote: "TruthSpeaks 365 had Christine Conti visit our school and speak to our leadership development club and it was simply amazing! Christine's story resonated with all of our students and her delivery and energy kept the crowd on their feet! I highly recommend TruthSpeaks 365 and Christine to come and add value to your organizations/school.",
    initials: "MB",
    color: "var(--sky)",
  },
  {
    name: "Tina Basile",
    role: "School Administrator",
    time: "6 months ago",
    quote: "Erin Pompa delivered a powerful and inspiring assembly to our high school students, sharing her personal story with honesty, vulnerability, and strength. Students walked away feeling empowered and motivated, carrying a renewed sense of hope and self-belief. Erin's presentation was not only impactful but also aligned with our mission to support the emotional well-being and personal growth of our students.",
    initials: "TB",
    color: "var(--lime)",
  },
];

const StarRow = () => (
  <div style={{ display: "flex", gap: 4, marginBottom: 14 }}>
    {[1,2,3,4,5].map(s => (
      <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#f5a623"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    ))}
    <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)", marginLeft: 6, display: "flex", alignItems: "center", gap: 5 }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
      Google
    </span>
  </div>
);

const ReviewCard = ({ name, role, time, quote, initials, color, light }) => (
  <div style={{
    background: light ? "rgba(255,255,255,.06)" : "var(--white)",
    border: light ? "1px solid rgba(255,255,255,.12)" : "2px solid var(--ink-100)",
    borderRadius: 24, padding: "28px 28px 24px",
    display: "flex", flexDirection: "column", gap: 0,
    boxShadow: light ? "none" : "4px 4px 0 var(--ink-100)"
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 44, height: 44, borderRadius: 999, background: color, border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 15, color: "var(--ink)" }}>{initials}</span>
      </div>
      <div>
        <div style={{ fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 15, color: light ? "var(--white)" : "var(--ink)", display: "flex", alignItems: "center", gap: 6 }}>
          {name}
          <svg width="14" height="14" viewBox="0 0 24 24" fill={light ? "rgba(255,255,255,.6)" : "var(--ink-300)"}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: light ? "var(--fg-on-dark2)" : "var(--ink-400)" }}>Google Review</div>
      </div>
    </div>
    <StarRow />
    <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: light ? "var(--fg-on-dark2)" : "var(--ink-600)", margin: "0 0 16px", flex: 1 }}>"{quote}"</p>
    <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: light ? color : "var(--ink-400)", borderTop: light ? "1px solid rgba(255,255,255,.1)" : "1px solid var(--ink-100)", paddingTop: 12 }}>{role}</div>
  </div>
);

const Impact = () => (
  <section style={{ background: "var(--ink)", padding: "84px 0" }}>
    <div className="ts-wrap">
      <div className="ts-reveal" style={{ textAlign: "center", marginBottom: 48 }}>
        <Eyebrow color="var(--lime)" style={{ marginBottom: 14 }}>What schools are saying</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(32px, 4.5vw, 54px)", lineHeight: 1.0, color: "var(--white)", margin: 0 }}>
          Real rooms. <HL color="var(--pink)">Real impact.</HL>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="ts-split ts-reveal">
        {REVIEWS.map(r => <ReviewCard key={r.name} {...r} light />)}
      </div>
      <div style={{ textAlign: "center", marginTop: 40 }} className="ts-reveal">
        <Button variant="lime" size="md" href="https://www.google.com/search?sca_esv=3750d84e3b6f83f6&hl=en-MA&sxsrf=APpeQnuEcq_ucde2mBMLa5Tnhx2A5nl-Dg:1781876399065&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_3Vbc7C1xe0ZWxyG43hb1YzzLbGLxPO3ffIusjOe2NNjI8hOT3w_SX80PVY2TvLYjK3_95EophBngZGRh4fjBVouQ4_8&q=TruthSpeaks+365+Reviews&sa=X&ved=2ahUKEwizzLLutpOVAxX4hv0HHc7YAcoQ0bkNegQIJBAF&biw=1242&bih=552&dpr=1.1" style={{}}>Read more reviews →</Button>
      </div>
    </div>
  </section>
);

const PresenterCTA = () => (
  <section style={{ background: "var(--lime)", padding: "80px 0", borderTop: "2px solid var(--ink)", borderBottom: "2px solid var(--ink)" }}>
    <div className="ts-wrap ts-split" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }} >
      <div className="ts-reveal">
        <Eyebrow color="var(--ink)" style={{ marginBottom: 14 }}>Are you a woman who feels called to share your story and change kids' lives?</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 0.96, color: "var(--ink)", margin: "0 0 16px" }}>
          Become a presenter.
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.5, color: "var(--ink)", margin: "0 0 10px", fontWeight: 500, maxWidth: 520 }}>
          We hire and train women with real stories of moving through adversity, and we build the framework with you. You bring the truth. We'll help you shape it, and get you in front of the rooms that need it.
        </p>
        <div style={{ display: "inline-block", marginTop: 18, background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 14, padding: "12px 20px", boxShadow: "3px 3px 0 var(--ink)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.4, color: "var(--ink)", margin: 0, fontWeight: 700 }}>
            Now hiring for the 2026-2027 season. Application deadline July 17th, 2026.
          </p>
        </div>
        <div style={{ marginTop: 28 }}>
          <Button variant="dark" size="lg" href="/presenter">Learn more</Button>
        </div>
      </div>
      <div className="ts-reveal" style={{ borderRadius: 20, overflow: "hidden", border: "3px solid var(--ink)", boxShadow: "6px 6px 0 var(--ink)", aspectRatio: "4/5", maxHeight: 500, position: "relative" }}>
        <img src="/assets/photo-presenter-gym.jpg" alt="TruthSpeaks 365 presenter with students" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0.65) saturate(0.8)" }} />
      </div>
    </div>
  </section>
);

function App() {
  useLucide();
  return (
    <React.Fragment>
      <NavBar active="Home" />
      <Hero />
      <WhoWeServe />
      <Mission />
      <Tracks />
      <BottomCTA
        eyebrow=""
        title={<span>Bring <HL color="var(--pink)">TruthSpeaks 365</HL> to your school or event.</span>}
        body=""
        btn="Schedule my free call →"
        href="https://calendar.app.google/3rMyUJt4Q6iRzvzW7"
      />
      <Impact />
      <PresenterCTA />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
