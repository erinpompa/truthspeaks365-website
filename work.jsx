/* =====================================================================
   WORK WITH US, tabbed by audience (Grades 3-5 / 6-12 / Adults)
   ===================================================================== */

const TABS = [
  {
    id: "g35", label: "Grades 3-5", short: "35", color: "var(--sky)", soft: "var(--sky-soft)",
    icon: "sprout",
    kicker: "Big Feelings, Brave Kids",
    headline: <span>Character <HL color="var(--sky)">Move</HL></span>,
    intro: "We combine movement, mindfulness, and character development to reinforce what your school is already teaching. Students build confidence, resilience, and connection through their bodies and their minds.",
    offers: [
      { icon: "music-2", title: "Creative movement sessions", body: "Students express emotion through guided dance and movement. Builds body awareness, confidence, and joy." },
      { icon: "heart", title: "Mindfulness & reflection", body: "After every movement session, kids pause, breathe, and name what they felt. Awareness before regulation." },
      { icon: "users-round", title: "Character development woven in", body: "Character, connection, and self-regulation built into every session, not added on top." },
    ],
    formats: ["Single class periods", "Gym class integration", "Full school assemblies", "Multi-session series"],
    outcomes: ["Confidence in their own body", "Words for big feelings", "Connection with classmates"],
    page: "/character-move",
  },
  {
    id: "g68", label: "Grades 6-8", short: "68", color: "var(--pink)", soft: "var(--pink-soft)",
    icon: "flame", feat: true,
    kicker: "Real Topics. Real Growth.",
    headline: <span>One concept. <HL color="var(--lime)">All in.</HL></span>,
    intro: "Each presentation goes all in on one concept rooted in resilience and character development. We bring it to life through storytelling and real-time activities that meet students where they are.",
    offers: [],
    formats: ["40-60 minute assembly", "School-wide assemblies", "Small groups", "Series of sessions"],
    outcomes: ["A framework they can name", "Tools to use that same day", "Representation at the front"],
    page: "/grades-6-8",
  },
  {
    id: "g912", label: "Grades 9-12", short: "912", color: "var(--violet)", soft: "var(--violet-soft)",
    icon: "zap",
    kicker: "Real Talk. Real Tools.",
    headline: <span>The conversations <HL color="var(--violet)">nobody else is having.</HL></span>,
    intro: <React.Fragment><p style={{margin:"0 0 16px",fontFamily:"var(--font-body)",fontSize:19,lineHeight:1.55,color:"var(--ink-500)"}}>These are the conversations teenagers need to have. During our presentations, we go there, honestly and intentionally. We share real stories of women who have overcome adversity, including experiences with substance abuse, incarceration, challenging relationships, and sexual assault. And if your school prefers, we can adjust the content accordingly.</p><p style={{margin:0,fontFamily:"var(--font-body)",fontSize:19,lineHeight:1.55,color:"var(--ink-500)"}}>This is not trauma dumping. Every story is paired with a framework that helps students understand that life happens on life's terms. We connect through the story, then show how we move through it. Students always leave knowing where to go for support, and we point them back to you first. We also provide resources and a practical framework they can carry with them.</p></React.Fragment>,
    offers: [
      { icon: "mic", title: "Keynote assemblies", body: "A real woman's story of adversity, told live and unfiltered. The room feels something and walks away with a tool." },
      { icon: "trending-up", title: "Belief to action framework", body: "We walk students through how a belief feeds a thought that drives a behavior, and how to interrupt the chain." },
      { icon: "shield", title: "The Warrior Toolkit", body: "Practical moves for hard moments. Power of the Pause, Circle of Care, healthy action in 24 hours, the Reframe." },
    ],
    formats: ["45-60 min keynote assemblies", "Half-day intensives", "Student leadership workshops"],
    outcomes: ["Language for hard things", "Tools they keep for life", "Honest conversations, finally"],
    page: "/grades-9-12",
  },
];

/* ---- Character Move extras (rendered inside g35 tab) ---- */
const CMVideoEmbed = () => (
  <div style={{ marginBottom: 48 }}>
    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)", marginBottom: 18 }}>See it in action</div>
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
);

const CMPillars = () => {
  const cards = [
    { icon: "music-2",  color: "var(--sky)",    title: "Creative Dance",                                   body: "Movement is the language. Students express emotions, build coordination, and discover the joy in their bodies, all while learning the concepts on a deeper level." },
    { icon: "heart",   color: "var(--pink)",   title: "Guided Reflection",                                body: "Every session connects the dots. We're always coming back to the concepts, helping students make the link between what they're feeling in their bodies and what they're learning in the room." },
    { icon: "users",   color: "var(--lime)",   title: "Character Development", body: "This is the core of everything. Every lesson is rooted in themes that help students understand themselves, their emotions, and how they show up in the world." },
    { icon: "shield",  color: "var(--violet)", title: "Anti-Bullying Principles",                         body: "Students learn to respect their own space and one another's, and to hold the room with love and care. Because how we move together matters just as much as what we learn." },
  ];
  return (
    <div style={{ background: "var(--pink)", border: "2px solid var(--ink)", borderRadius: 24, padding: "32px", marginBottom: 44 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)", marginBottom: 18 }}>What's included</div>
      {/* Featured card Expert Presenters */}
      <div style={{ background: "var(--sky)", border: "2px solid var(--ink)", borderRadius: 20, padding: "28px 32px", display: "grid", gridTemplateColumns: "56px 1fr", gap: 20, alignItems: "start", marginBottom: 18, boxShadow: "4px 4px 0 var(--ink)" }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: "var(--ink)", display: "grid", placeItems: "center", border: "2px solid var(--ink)", flexShrink: 0 }}>
          <Icon name="star" size={26} color="var(--sky)" />
        </div>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--ink)", margin: "0 0 10px", lineHeight: 1.1 }}>Expert Presenters</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink)", margin: 0 }}>Every session is led by a dance professional with real experience working with students. Depending on the size of your program, we bring in additional support presenters to make sure every student gets the attention they need. Our team includes dancers with degrees in dance education, professionals who have run dance programs, and performers with careers on the professional stage.</p>
        </div>
      </div>
      {/* 4 supporting cards */}
      <div className="ts-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
        {cards.map(item => (
          <div key={item.title} style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 20, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 14, boxShadow: "4px 4px 0 var(--ink-200)" }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: item.color, display: "grid", placeItems: "center", border: "2px solid var(--ink)", flexShrink: 0 }}>
              <Icon name={item.icon} size={24} color="var(--ink)" />
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17, textTransform: "uppercase", letterSpacing: "-0.01em", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>{item.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "var(--ink-500)", margin: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CMHowItWorks = () => {
  const steps = [
    {
      n: "01", color: "var(--sky)", title: "Choose your format",
      body: "Every school is different. Choose the experience that fits your budget, your time, your needs, and your space:",
      list: ["School-wide assembly", "Grade-level assemblies", "Single session per class or grade level", "Ongoing series of sessions over time"],
    },
    {
      n: "02", color: "var(--pink)", title: "We listen first",
      body: "We meet with your admin, counselor, and staff to identify the core character development concepts and themes you want your students to learn or reinforce.",
    },
    {
      n: "03", color: "var(--violet)", title: "We build around your goals for your students",
      body: "We design a program around those themes and the format you chose, integrating movement to bring every concept to life.",
    },
    {
      n: "04", color: "var(--lime)", title: "Students take the stage (optional)",
      body: "If you choose, the journey ends with a showcase. Students perform what they've learned, combining movement and character development into a presentation for friends, family, and your community.",
    },
  ];
  return (
    <div style={{ background: "var(--sky)", border: "2px solid var(--ink)", borderRadius: 24, padding: "32px", marginBottom: 44 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)", marginBottom: 18 }}>How it works</div>
      <div className="ts-split" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
        {steps.map(s => (
          <div key={s.n} style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 20, padding: "32px 28px", boxShadow: "4px 4px 0 var(--ink-200)", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 52, lineHeight: 1, color: s.color, WebkitTextStroke: "2px var(--ink)", letterSpacing: "-0.03em" }}>{s.n}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>{s.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink-500)", margin: 0 }}>{s.body}</p>
            {s.list && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {s.list.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 24, height: 24, borderRadius: 999, background: s.color, border: "2px solid var(--ink)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Icon name="check" size={13} color="var(--ink)" />
                    </span>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, color: "var(--ink)" }}>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CMLive = () => (
  <div className="ts-split" style={{ background: "var(--sky)", border: "2px solid var(--ink)", borderRadius: 22, padding: "32px 36px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
    <div>
      <Eyebrow color="var(--ink)" style={{ marginBottom: 12 }}>Currently running</Eyebrow>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(22px, 2.8vw, 34px)", lineHeight: 1.0, color: "var(--ink)", margin: "0 0 14px" }}>First series live at School 27, Paterson.</h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--ink)", margin: 0, fontWeight: 500 }}>Character Move is currently in its first series at School 27 in Paterson, NJ. We are seeing real results and we are ready to bring it to your school next.</p>
    </div>
    <div style={{ background: "var(--ink)", borderRadius: 18, padding: "26px 30px" }}>
      <div style={{ fontFamily: "var(--font-script)", fontWeight: 600, fontSize: 24, color: "var(--sky)", marginBottom: 10 }}>what those who serve youth are saying</div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6, color: "var(--fg-on-dark2)", margin: "0 0 14px", fontStyle: "italic" }}>
        "The kids are fully engaged. You can see them processing things they don't have words for yet, through movement."
      </p>
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--sky)" }}>School 27, Paterson NJ</div>
    </div>
  </div>
);

const CMAbout = () => (
  <div className="ts-split" style={{ background: "var(--ink)", borderRadius: 22, padding: "40px 44px", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "center", marginBottom: 44 }}>
    <div style={{ borderRadius: 20, border: "3px solid var(--sky)", overflow: "hidden", boxShadow: "8px 8px 0 var(--sky)", background: "var(--ink-800)", aspectRatio: "4/5" }}>
      <image-slot id="work-cm-erin" placeholder="Drop a photo of Erin" shape="rect" style={{ width: "100%", height: "100%", display: "block", "--bg": "#1e2a35" }}></image-slot>
    </div>
    <div>
      <Eyebrow color="var(--sky)" style={{ marginBottom: 14 }}>Created by</Eyebrow>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.03em", fontSize: "clamp(26px, 3vw, 40px)", lineHeight: 1.0, color: "var(--white)", margin: "0 0 18px" }}><HL color="var(--sky)">Erin Pompa.</HL></h3>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65, color: "var(--fg-on-dark2)", margin: "0 0 16px" }}>
        Erin Pompa, Founder of TruthSpeaks 365, designed Character Move drawing from her <strong style={{ color: "var(--white)" }}>15 years leading a high school dance program</strong>, her undergraduate degree from <strong style={{ color: "var(--white)" }}>Montclair State University</strong>, her <strong style={{ color: "var(--white)" }}>Master's in Dance Education from NYU</strong>, and her professional dance career.
      </p>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65, color: "var(--fg-on-dark2)", margin: 0 }}>
        Erin integrated movement, social awareness, and anti-bullying principles into a single program, helping students express themselves, respect one another, and grow as leaders from the inside out.
      </p>
    </div>
  </div>
);

const PresenterCard = ({ name, tagline, role, color, nameColor, img, href, circle }) => {
  const [hover, setHover] = React.useState(false);
  const handleEnter = () => setHover(true);
  const handleLeave = () => setHover(false);
  const isComingSoon = tagline === "Coming soon";
  const inner = (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{ display: "flex", flexDirection: "column" }}>
      <div style={{
        borderRadius: 16, overflow: "hidden", border: "2px solid var(--ink)",
        boxShadow: hover && href ? `6px 6px 0 ${color}` : `4px 4px 0 var(--ink)`,
        transform: hover && href ? "translate(-2px,-2px)" : "none",
        transition: "all .15s cubic-bezier(.2,.8,.2,1)",
        aspectRatio: "3/4", background: isComingSoon ? color : "var(--ink-800)"
      }}>
        {img && circle
          ? <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center", background: color }}><div style={{ width: "78%", aspectRatio: "1", borderRadius: 999, overflow: "hidden", border: "3px solid var(--ink)", background: "var(--white)" }}><img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} /></div></div>
          : img
          ? <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
          : <div style={{ width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
              <div style={{ textAlign: "center", padding: 24 }}>
                <div style={{ fontFamily: "var(--font-script)", fontSize: 28, color: "var(--ink)", opacity: 0.6 }}>coming soon</div>
              </div>
            </div>
        }
      </div>
      <div style={{ paddingTop: 18 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, letterSpacing: "-0.01em", color: nameColor || color, lineHeight: 1.1, marginBottom: 5 }}>{name}</div>
        {role && <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 7 }}>{role}</div>}
        {!isComingSoon && tagline && <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.45, color: "var(--ink)", fontStyle: "italic", marginBottom: 12 }}>"{tagline}"</div>}
        {href && (
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13.5, color: "var(--ink)", borderBottom: "2px solid var(--ink)", paddingBottom: 1 }}>
            Learn more <Icon name="arrow-right" size={14} color="var(--ink)" />
          </div>
        )}
      </div>
    </div>
  );
  return href
    ? <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>{inner}</a>
    : <div>{inner}</div>;
};

const G68Presenters = () => {
  const presenters = [
    { name: "Erin Pompa",       role: "Founder & Speaker",           tagline: "The shift starts here. Embrace the power of a perspective shift.",  color: "var(--lime)",   img: "/uploads/NCSL+Carousel+post.png.webp",                href: "https://erinpompa.com" },
    { name: "Christine Conti",  role: "Fear Into Courage Speaker",   tagline: "Let's turn fear into courage and find your voice.", color: "var(--pink)",   img: "/uploads/Christine+Conti+Full+Body+Shot+1.png.webp", href: "/speaker-profile?id=christine-conti" },
    { name: "Nicolle Gonzalez", role: "Emotions & Resilience Speaker", tagline: "Identify it. Process it. Move through it.", color: "var(--sky)", nameColor: "var(--orange)", img: "/uploads/nicolle-gonzalez.jpg", href: "/speaker-profile?id=nicolle-gonzalez" },
    { name: "Candice Beers", role: "Mind & Body Wellness Speaker", tagline: "Breathe. Move. Come back to yourself.", color: "var(--violet)", nameColor: "var(--ink)", img: "/uploads/cc-candice.jpg", circle: true, href: "/speaker-profile?id=candice-beers" },
    { name: "Janaïs Mia Roberts", role: "Connection & Confidence Speaker", tagline: "You are enough. No comparison needed.", color: "var(--lime)", nameColor: "var(--ink)", img: "/uploads/janais-portrait.jpg", circle: true, href: "/speaker-profile?id=janais-mia-roberts" },
  ];
  return (
    <div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)", marginBottom: 22 }}>Meet our presenters</div>
      <div className="ts-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {presenters.map(p => <PresenterCard key={p.name} {...p} />)}
      </div>
    </div>
  );
};

const G912_PRESENTERS = [
  {
    name: "Christine Conti", role: "Fear Into Courage Speaker", tagline: "Let's turn fear into courage and find your voice.",
    color: "var(--pink)", img: "/uploads/cc-christine.jpg", href: "/speaker-profile?id=christine-conti",
    abstract: "Helping students turn their fear into courage and find their voice.",
    bio: "Christine is an educator, wellness advocate, and best-selling author who helps people face their fears and take courageous action. After a life-changing diagnosis, she rebuilt her life step by step and created the F It Framework: Face it. Feel it. Flip it.",
    objectives: [
      "Name what fear feels like in their own lives and identify moments they stayed silent because of it.",
      "Learn and apply the F'it Framework: Face it, Feel it, Flip it.",
      "Practice the 5-Count technique to let fear in and move through it in real time.",
      "Analyze real stories of setback and comeback, and explain how each person turned fear into fuel.",
      "Commit to one action step for using their voice, whether that's speaking up, telling a trusted adult, or sharing their story to help someone else.",
    ],
    covers: ["Bullying & teasing", "Body image", "Feeling \"not enough\"", "Sexual assault", "Anxiety & depression", "Eating disorders", "Facing fear", "Finding your voice", "Setting boundaries", "Turning setbacks into fuel"],
  },
  {
    name: "Nicolle Gonzalez", role: "Emotions & Resilience Speaker", tagline: "Identify it. Process it. Move through it.",
    color: "var(--sky)", img: "/uploads/nicolle-gonzalez.jpg", href: "/speaker-profile?id=nicolle-gonzalez",
    abstract: "Helping students identify what they're feeling and giving them tools to process, manage, and regulate their emotions.",
    bio: "Nicolle is a bilingual speaker and social work student at Rutgers University. Drawing on her own lived experience and her Name It. Pause It. Say It. framework, she helps students understand the emotions they carry and find the words to talk about them. She presents in English and Spanish.",
    objectives: [
      "Define what feelings are and learn to name the emotion they're experiencing instead of pushing it away.",
      "Understand that avoided emotions don't disappear - they pile up and eventually show up as anger, anxiety, shutting down, or self-criticism.",
      "Practice the Five Senses grounding technique to pause between what they feel and what they do next.",
      "Identify at least one trusted adult or peer and learn concrete language for starting a hard conversation, including a text they can actually send.",
      "Recognize that emotions are information, not weakness, and commit to one self-compassion practice they can use daily.",
    ],
    covers: ["Naming your emotions", "Emotional regulation", "Grounding techniques", "Family pressure", "A parent's illness", "Loneliness & isolation", "Substance use & addiction", "Incarceration & second chances", "Asking for help", "Self-talk & self-worth"],
  },
  {
    name: "Candice Beers", role: "Mind & Body Wellness Speaker", tagline: "Breathe. Move. Come back to yourself.",
    color: "var(--violet)", img: "/uploads/cc-candice.jpg", href: "/speaker-profile?id=candice-beers",
    abstract: "Helping students connect with their bodies and use breath and movement to work through challenges.",
    bio: <React.Fragment>Candice became a mom at 14 and raised her son while she was still in high school. She knows what it's like to wonder where you belong and whether you're enough, and she shares how that season shaped her sense of belonging and self-worth. Today she is a yoga instructor, a licensed massage therapist, and the founder of <a href="https://www.pureskys.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ink)", fontWeight: 700, textDecoration: "underline" }}>Pure Skys Spa &amp; Yoga Studio</a>, where she creates wellness programs for adults and young people, including Girl Scouts and a mentorship program for young women. She teaches students how to connect with their bodies and use breath and movement to work through challenges, so they have something to reach for when life gets heavy.</React.Fragment>,
    objectives: [
      "Recognize how unexpected life events can affect how they feel, and notice the early signs of stress in their body.",
      "Practice a body scan, gentle movement, and breathing routine they can use in stressful moments.",
      "Name an emotion and choose a grounding image or phrase without judging it or pushing it away.",
      "Understand that their circumstances don't define their worth or where they belong.",
      "Build a three-minute reset routine they can use before a test, a game, or a hard conversation.",
    ],
    covers: ["Teen pregnancy & parenting", "Belonging", "Self-worth", "Stress in the body", "Breathwork", "Yoga & gentle movement", "Mind-body connection", "Grounding when life gets heavy"],
  },
  {
    name: "Janaïs Mia Roberts", role: "Connection & Confidence Speaker", tagline: "You are enough. No comparison needed.",
    color: "var(--lime)", img: "/uploads/janais-portrait.jpg", href: "/speaker-profile?id=janais-mia-roberts",
    abstract: "Helping students quiet comparison, find their self-worth, and build real connection.",
    bio: "Janaïs is an educator, mentor, and leadership facilitator who talks with students about comparison, the voice that says you're not good enough, and how to find your own self-worth. She believes strong groups are built on trust, and trust is built through real connection, so her sessions are hands-on and highly interactive. Through activities like Crossing the Line, Anchors & Wings, and Peeling the Onion, students share their perspectives, discover what they have in common, and see each other beyond labels and first impressions. Drawing on her background in youth mentorship, vocal coaching, and public speaking, she helps students stop measuring themselves against everyone else, find their voice, and recognize the strengths they bring. She holds a Master of Education in Educational Leadership from William Paterson University.",
    objectives: [
      "Take part in activities that build trust, reflection, and real connection with their classmates.",
      "Identify the strengths they bring and recognize the strengths in the people around them.",
      "Practice honest, respectful communication that helps a group work together.",
      "See how different perspectives make a team stronger, and look past first impressions to find common ground.",
      "Walk away with more confidence in their own voice and a shared sense of purpose with their peers.",
    ],
    covers: ["Comparison", "Self-worth", "\"Not good enough\" self-talk", "Confidence", "Finding your voice", "Trust & connection", "Seeing beyond labels", "Recognizing your strengths"],
  },
];

const G68_COVERS = {
  "Christine Conti": ["Bullying & teasing", "Body image", "Feeling \"not enough\"", "Facing fear", "Finding your voice", "Setting boundaries", "Turning setbacks into fuel"],
  "Nicolle Gonzalez": ["Naming your emotions", "Emotional regulation", "Grounding techniques", "Family pressure", "Loneliness", "Asking for help", "Self-talk & self-worth"],
  "Candice Beers": ["Belonging", "Self-worth", "Stress in the body", "Breathwork", "Yoga & movement", "Grounding"],
  "Janaïs Mia Roberts": ["Comparison", "Self-worth", "\"Not good enough\" self-talk", "Confidence", "Finding your voice", "Trust & connection", "Recognizing your strengths"],
};
const G68_PRESENTERS = G912_PRESENTERS.map(p => ({ ...p, covers: G68_COVERS[p.name] || p.covers, href: p.href + "&grade=68" }));

const G912Detail = ({ p, note }) => { const [open, setOpen] = React.useState(false); useLucide(); return (
  <div id={"sp-" + p.name.split(" ")[0].toLowerCase()} style={{ background: "var(--white)", border: "2px solid var(--ink)", borderRadius: 22, padding: "28px 26px", boxShadow: `5px 5px 0 var(--ink)`, marginTop: 24, scrollMarginTop: 150 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", marginBottom: p.objectives && open ? 22 : 0 }}>
      <div style={{ width: 120, height: 120, borderRadius: 999, border: `4px solid ${p.color}`, outline: "2px solid var(--ink)", overflow: "hidden", flexShrink: 0, background: "var(--white)" }}>
        <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
      </div>
      <div style={{ flex: 1, minWidth: 220 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 24, letterSpacing: "-0.01em", color: "var(--ink)", lineHeight: 1.1, marginBottom: 5 }}>{p.name}</div>
        <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 7 }}>{p.role}</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.45, color: "var(--ink)", fontStyle: "italic", marginBottom: 10 }}>"{p.tagline}"</div>
        <a href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13.5, color: "var(--ink)", borderBottom: "2px solid var(--ink)", paddingBottom: 1, textDecoration: "none" }}>
          {p.cta || ("Click here to learn more about " + p.name.split(" ")[0])} <Icon name="arrow-right" size={14} color="var(--ink)" />
        </a>
        {open && p.objectives && <a href={p.href} style={{ display: "inline-flex", marginLeft: 18, fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 13.5, color: "var(--ink)", borderBottom: "2px solid var(--ink)", paddingBottom: 1, textDecoration: "none" }}>{"See " + p.name.split(" ")[0] + "'s full page →"}</a>}
      </div>
    </div>
    {p.objectives && open && (p.abstract || p.bio) && <div style={{ marginBottom: 20 }}>
      {p.abstract && <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 17, lineHeight: 1.5, color: "var(--ink)", margin: "0 0 10px" }}>{p.abstract}</p>}
      {p.bio && <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65, color: "var(--ink-500)", margin: 0 }}>{p.bio}</p>}
    </div>}
    {p.objectives && open && <div className="ts-split" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 18, alignItems: "start" }}>
      <div style={{ background: "var(--ink)", borderRadius: 18, padding: "24px 22px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
          <Icon name="graduation-cap" size={18} color={p.color} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--white)" }}>Students will be able to</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {p.objectives.map((o, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <span style={{ width: 24, height: 24, borderRadius: 999, background: p.color, border: "2px solid rgba(255,255,255,.2)", display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                <Icon name="check" size={13} color="var(--ink)" />
              </span>
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, color: "var(--white)", lineHeight: 1.5 }}>{o}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: p.color, border: "2px solid var(--ink)", borderRadius: 18, padding: "24px 22px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <Icon name="message-circle" size={18} color="var(--ink)" />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)" }}>What this talk covers</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {p.covers.map(c => (
            <span key={c} style={{ background: "var(--white)", border: "1.5px solid var(--ink)", borderRadius: 999, padding: "6px 13px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--ink)" }}>{c}</span>
          ))}
        </div>
        {note && <div style={{ marginTop: 14, fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5, fontStyle: "italic", color: "var(--ink)" }}>{note}</div>}
      </div>
    </div>}
  </div>
); };

const G912Presenters = ({ list = G912_PRESENTERS, note }) => (
  <div>
    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink)", marginBottom: 22 }}>Meet our presenters</div>
    <G912Detail p={{ name: "Erin Pompa", role: "Founder & Speaker", tagline: "The shift starts here. Embrace the power of a perspective shift.", color: "var(--lime)", img: "/uploads/cc-erin.jpg", href: "https://erinpompa.com", cta: "Click here to learn more about Erin" }} />
    {list.map(p => <G912Detail key={p.name} p={p} note={note} />)}
  </div>
);

const CMVideoPlayer = () => {
  const [playing, setPlaying] = React.useState(false);
  const VID = "3-L3ulK3Ue0";
  return (
    <div style={{ borderRadius: 24, overflow: "hidden", border: "3px solid var(--ink)", boxShadow: "8px 8px 0 var(--sky)", position: "relative", paddingBottom: "56.25%", height: 0, background: "var(--ink)", cursor: playing ? "default" : "pointer" }}
      onClick={() => !playing && setPlaying(true)}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${VID}?autoplay=1`}
          title="Character Move by TruthSpeaks 365"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "block" }}
        ></iframe>
      ) : (
        <React.Fragment>
          <img
            src={`https://img.youtube.com/vi/${VID}/maxresdefault.jpg`}
            alt="Character Move preview"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "rgba(22,20,19,.35)", display: "grid", placeItems: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: 999, background: "var(--sky)", border: "3px solid var(--ink)", display: "grid", placeItems: "center", boxShadow: "4px 4px 0 var(--ink)", transition: "transform .15s" }}>
              <Icon name="play" size={30} color="var(--ink)" />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

const Pill = ({ children, color }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--white)", border: "1.5px solid var(--ink)", borderRadius: 999, padding: "9px 16px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--ink)" }}>
    <span style={{ width: 9, height: 9, borderRadius: 999, background: color, flex: "none" }}></span>{children}
  </div>
);

const OfferCard = ({ icon, title, body, color, feat }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: 20, padding: 24,
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)", transform: hover ? "translateY(-3px)" : "none",
      transition: "all .16s cubic-bezier(.2,.8,.2,1)", display: "flex", flexDirection: "column", gap: 12
    }}>
      <div style={{ width: 50, height: 50, borderRadius: 14, background: color, border: "2px solid var(--ink)", display: "grid", placeItems: "center" }}>
        <Icon name={icon} size={25} color="var(--ink)" />
      </div>
      <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 21, textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0, color: "var(--ink)", lineHeight: 1.05 }}>{title}</h4>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.5, color: "var(--ink-500)", margin: 0 }}>{body}</p>
    </div>
  );
};

const G68HowItWorks = () => {
  const steps = [
    { n: "01", color: "var(--pink)",   title: "Book a connection call",              body: "It starts with a free call. You learn about us, we learn about you. We'll talk about your students, your event, your school, and get crystal clear on your needs, your goals, and what you're hoping to create. From there, we suggest speakers who pair well with you and your audience. But you always get the final say." },
    { n: "02", color: "var(--lime)",   title: "We handle the details",              body: "If you decide to move forward, we make it easy. You'll receive an agreement that outlines all the logistics, along with your invoice, a W-9, and everything you need to promote your speaker. We want the process to feel seamless from start to finish." },
    { n: "03", color: "var(--sky)",    title: "Pre-event call and speaker intro",   body: "About a month to two weeks before your event, we'll reach out for a pre-event call. You'll also receive a personalized video from your speaker, made just for your students. Share it on social media, your school website, Google Classroom, wherever it reaches them best. It's a way for students to meet their speaker before they ever walk in the room." },
    { n: "04", color: "var(--violet)", title: "The event and beyond",               body: "Then we show up and we deliver. And when it's over, we don't just disappear. We schedule a post-event call to talk through how it went. Your feedback matters to us, and we want to make sure every experience is better than the last." },
  ];
  return (
    <div style={{ background: "var(--ink)", borderRadius: 24, padding: "36px", marginBottom: 44 }}>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--white)", marginBottom: 24 }}>How it works</div>
      <div className="ts-split" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
        {steps.map(s => (
          <div key={s.n} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 18, padding: "26px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 44, lineHeight: 1, color: s.color, letterSpacing: "-0.03em" }}>{s.n}</div>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 19, textTransform: "uppercase", letterSpacing: "-0.02em", color: "var(--white)", margin: 0, lineHeight: 1.1 }}>{s.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "var(--fg-on-dark2)", margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const TabContent = ({ t }) => (
  <div className="ts-reveal" key={t.id}>
    <div style={{ display: "grid", gridTemplateColumns: t.id === "g35" ? "1fr 1fr" : (t.id === "g68" || t.id === "g912") ? "1fr" : "1fr 0.78fr", gap: 48, alignItems: "center", marginBottom: 52 }} className="ts-split">
      <div style={{ maxWidth: (t.id === "g68" || t.id === "g912") ? 680 : "none" }}>
        <Eyebrow color="var(--ink)" style={{ marginBottom: 14 }}>{t.kicker}</Eyebrow>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "-0.02em", fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: 1.02, color: "var(--ink)", margin: "0 0 18px" }}>{t.headline}</h2>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55, color: "var(--ink-500)", margin: "0 0 26px", maxWidth: (t.id === "g68" || t.id === "g912") ? "none" : 520 }}>{t.intro}</div>
        <Button variant="primary" size="md" href={t.id === "g35" ? "https://calendar.app.google/3rMyUJt4Q6iRzvzW7" : "https://calendar.app.google/3rMyUJt4Q6iRzvzW7"}>Book this for your school →</Button>
      </div>
      {t.id === "g35" ? (
        <CMVideoPlayer />
      ) : (t.id === "g68" || t.id === "g912") ? null : (
        <Frame id={`work-${t.id}`} label={`Drop a ${t.label} program photo`} ratio="4 / 5" bg={t.color} radius={26} shadow="var(--shadow-hard)" />
      )}
    </div>

    {(() => {
      const band = {
        g68: { src: "/assets/photo-presenter-classroom.jpg", obj: "center center", h: "clamp(200px, 42vw, 480px)", scrim: "rgba(22,20,19,.15)" },
      }[t.id];
      return band ? (
        <div className="ts-reveal" style={{ borderRadius: 24, overflow: "hidden", border: "1px solid var(--ink-100)", marginBottom: 44, position: "relative" }}>
          <img src={band.src} alt={`${t.label} presentation in action`} style={{ width: "100%", height: band.h, objectFit: "cover", objectPosition: band.obj, display: "block" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: band.scrim }}></div>
        </div>
      ) : null;
    })()}

    {t.id === "g35" && <CMHowItWorks />}
    {(t.id === "g68" || t.id === "g912") && (
      <React.Fragment>
        <div style={{ background: "var(--sky)", border: "2px solid var(--ink)", borderRadius: 24, padding: "32px", marginBottom: 44 }}>
          {t.id === "g912" ? <G912Presenters /> : <G912Presenters list={G68_PRESENTERS} note="Every talk is adjusted for middle school. Heavier parts of a speaker's story are only shared with your school's approval." />}
        </div>
        <G68HowItWorks />
      </React.Fragment>
    )}

    {t.id === "g35" && (
      <div className="ts-reveal" style={{ marginTop: 52 }}>
        <CMPillars />
      </div>
    )}
  </div>
);

function App() {
  useLucide();
  const initial = (() => {
    const h = (window.location.hash || "").replace("#", "");
    return TABS.some(t => t.id === h) ? h : "g68";
  })();
  const [active, setActive] = React.useState(initial);
  const t = TABS.find(x => x.id === active) || TABS[1];
  const pick = (id) => { setActive(id); history.replaceState(null, "", "#" + id); };

  return (
    <React.Fragment>
      <NavBar active="Work With Us" />
      <PageHero
        chip="Programs by age"
        eyebrow="Work with us"
        title={<span>One mission.<br /><HL color="var(--pink)">Three rooms.</HL></span>}
        sub="Pick your audience. We'll bring the right woman, the right story, and the right framework built for that age group. Every presentation is tailored to fit the room, because a third grader and a tenth grader are not the same, and we wouldn't treat them like they are."
      />

      {active !== "g35" && <section style={{ background: "var(--paper)", padding: "32px 0 8px" }}>
        <div className="ts-wrap">
          <div style={{ maxWidth: 900, margin: "0 auto", background: "var(--sky)", border: "2px solid var(--ink)", borderRadius: 24, overflow: "hidden", paddingTop: 28, boxShadow: "6px 6px 0 var(--ink)" }}>
            <img src="/uploads/team-cutout.png" alt="The TruthSpeaks 365 presenters" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </section>}

      {/* sticky tab bar */}
      <div style={{ position: "sticky", top: 74, zIndex: 40, background: "var(--paper)", borderBottom: "1px solid var(--ink-100)" }}>
        <div className="ts-wrap" style={{ display: "flex", gap: 10, padding: "14px 28px", overflowX: "auto" }}>
          {TABS.map(tab => {
            const on = tab.id === active;
            return (
              <button key={tab.id} onClick={() => pick(tab.id)} style={{
                fontFamily: "var(--font-body)", fontWeight: 800, fontSize: 15.5, cursor: "pointer",
                display: "inline-flex", alignItems: "center", gap: 9, whiteSpace: "nowrap",
                padding: "11px 20px", borderRadius: 999, border: "2px solid var(--ink)",
                background: on ? tab.color : "var(--white)", color: "var(--ink)",
                boxShadow: on ? "3px 3px 0 var(--ink)" : "none",
                transform: on ? "translate(0,0)" : "none", transition: "all .14s"
              }}>
                <Icon name={tab.icon} size={18} color="var(--ink)" />{tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <section style={{ background: "var(--paper)", padding: "56px 0 84px" }}>
        <div className="ts-wrap"><TabContent t={t} /></div>
      </section>

      <BottomCTA
        eyebrow={t.id === "g35" ? "Want to learn more?" : ""}
        title={t.id === "g35"
          ? <span>Bring Character <HL color="var(--sky)">Move</HL> to your school.</span>
          : <span>Bring TruthSpeaks 365 to <HL color="var(--pink)">your school or event.</HL></span>}
        body={t.id === "g35"
          ? "Tell us about your school and we'll figure out the right fit together."
          : ""}
        btn={t.id === "g35" ? "Schedule my free call now →" : "Schedule my free call →"}
        href={t.id === "g35" ? "https://calendar.app.google/3rMyUJt4Q6iRzvzW7" : "https://calendar.app.google/3rMyUJt4Q6iRzvzW7"}
      />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
