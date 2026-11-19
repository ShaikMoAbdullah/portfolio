export const profile = {
  name: "Shaik Mohammad Abdullah",
  role: "Product owner for AI applications",
  email: "shaikmoabdullah@gmail.com",
  phoneDisplay: "+91 87480 57505",
  whatsapp: "https://wa.me/918748057505",
  linkedin: "https://linkedin.com/in/shaikmoabdullah",
  github: "https://github.com/shaikmoabdullah",
  x: "https://x.com/shaikmoabdullah",
  resume: "/Shaik_Mohammad_Abdullah_Product_Resume_ScaleAI.pdf",
};

export const heroMetrics = [
  { target: 65, suffix: "M+", label: "Tasks deployed", context: "Platform by Karya" },
  { target: 150, suffix: "K+", label: "Human evaluations", context: "Samiksha, Microsoft" },
  { target: 2, prefix: "$", suffix: "M", label: "Wages paid out", context: "Project Apollo" },
] as const;

export const partners = [
  "Google",
  "Microsoft",
  "Anthropic",
  "IISc",
  "Government of Maharashtra",
  "Government of India",
  "Karnataka Health Promotion Trust",
  "Kroger",
] as const;

export type DemoKind = "preview" | "health" | "query";

export type CaseStudy = {
  slug: string;
  name: string;
  org: string;
  featured?: boolean;
  founder?: boolean;
  metric: { value: string; label: string };
  summary: string;
  problem: string;
  context: string;
  did: string[];
  decision: string;
  call: string;
  result: string;
  stack: string[];
  liveUrl?: string;
  demo?: DemoKind;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "platform-by-karya",
    name: "Platform by Karya",
    org: "Karya",
    featured: true,
    metric: { value: "65M+", label: "Tasks deployed" },
    summary:
      "One product for audio, NLP, egocentric, and LLM-evaluation programs across 70+ languages and 6 countries.",
    problem:
      "Partners needed one product to run audio, NLP, egocentric, and LLM-evaluation programs across languages and countries.",
    context:
      "I am the product owner for Platform by Karya. Client discovery, scoping, and delivery sit with me, alongside AI engineers, software engineers, and operations coordinators, from the partner problem through deployment.",
    did: [
      "Owned the platform end to end. 30+ components so operations assemble a new program, including for low-bandwidth and low-literacy users, without a new build.",
      "Co-designed data pipelines with Google, IISc, Microsoft, and Anthropic and deployed them on the platform.",
      "Project Apollo: 100,000 hours across 22 languages, 60,000 workers, $2M in wages paid out.",
      "Project Vaani with Google and IISc: 6,000 hours, 24K+ speakers, 30 districts.",
      "Bi-weekly progress updates to partner leads and Karya leadership, including client talks in Maharashtra, Africa, and Indonesia.",
    ],
    decision:
      "Build a shared set of 30+ components, including audio transcription, image annotation, and fill-in-the-blanks, so operations can assemble a new program instead of waiting on a new build.",
    call:
      "A shared component set is slower to shape than a one-off build, and it limits a partner to what the platform can express. That was the point: one product, many programs, six countries.",
    result: "65M+ tasks, 70+ languages, and 6 countries.",
    stack: ["Product", "AI data", "Partner scoping"],
    liveUrl: "https://platform.karya.in",
  },
  {
    slug: "task-preview",
    name: "Task Preview",
    org: "Karya",
    metric: { value: "~90%", label: "Fewer task issues" },
    summary:
      "Tasks stay in Preview, payouts off, until operations approves them. A data operation takes more than 50% less time.",
    problem:
      "Tasks reached workers before operations had checked them, and a test run could pay workers.",
    context:
      "Operations and data were finding the same problems at different times. A coordinator needed a check that lived on the task, not in a chat thread with an engineer.",
    did: [
      "Owned Task Preview from the problem through launch.",
      "Wrote the PRD with user stories, acceptance criteria, and non-goals.",
      "Every task stays in Preview, payouts off, until operations approves it.",
      "Task Health adds 7 automated checks. Each one opens the screen that fixes the blocker: assignments, microtasks, completion policy, upstream tasks, avatar linking, rejected work, and boxes.",
    ],
    decision:
      "Payouts stay off until an internal check and an operations approval. That rule was an acceptance criterion, not a setting someone could skip.",
    call:
      "Workers see a new task later than they would have. The wait is the check. Task issues fell by close to 90%, and data and operations work from the same screen.",
    result:
      "Task issues fell by close to 90%, and a data operation takes more than 50% less time.",
    stack: ["PRD", "TypeScript", "React", "PostgreSQL"],
    demo: "preview",
  },
  {
    slug: "llm-evaluation",
    name: "LLM evaluation",
    org: "Karya",
    metric: { value: "150K+", label: "Human evaluations" },
    summary:
      "Rubrics and human review for public-service and frontier-lab models, then a read of the results with the partner.",
    problem:
      "Public-service and frontier-lab models needed human evaluation of real queries, with a rubric the partner could iterate.",
    context:
      "A score with no argument behind it does not help a partner change the model or the data. The evaluation had to be something they could sit with.",
    did: [
      "Designed the evaluation rubric with the AI teams and ran human evaluation of model output on the platform.",
      "Samiksha with Microsoft: 23,000+ real-world queries and 150,000+ human evaluations across public-service domains.",
      "An Anthropic evaluation: 10,000 community queries, 30,000+ tasks, 7 languages. Scoped the tasks and reviewed results with the partner so the set could be iterated.",
    ],
    decision:
      "Design the rubric with the AI team, run the human review on the platform, and review the set with the partner before calling it done.",
    call:
      "Human evaluation at this volume costs wages and calendar time. A rubric the partner can argue with is worth more than a one-shot score.",
    result: "Evaluation sets the partners could iterate.",
    stack: ["LLM evaluation", "Rubrics", "Human feedback"],
  },
  {
    slug: "mahavistaar",
    name: "MahaVISTAAR",
    org: "Karya · Public sector",
    metric: { value: "4", label: "Languages scoped" },
    summary:
      "Scoped agriculture data and language support with the Maharashtra government so farmers could use the apps.",
    problem:
      "Farmers who speak low-resource languages could not use Maharashtra government apps, and agriculture data collection needed local scoping.",
    context:
      "The apps already existed. The people they were for could not use them in the languages they speak. Collection of agriculture data had the same gap: it needed the officers and coordinators who actually run it.",
    did: [
      "Ran scoping with ministers, officers, and local coordinators on collecting agriculture data.",
      "Scoped adding Marathi, Dehwali Bhili, Mavachi, and Pawari so those farmers could use the apps.",
      "Also shipped language datasets for the Government of India and adolescent-health data with the Karnataka Health Promotion Trust.",
    ],
    decision:
      "Scope language support with the people who run the program before treating it as a localization ticket.",
    call:
      "Local scoping takes longer than shipping a single official language. It is what makes the apps usable for farmers who speak Dehwali Bhili, Mavachi, and Pawari.",
    result:
      "Government apps could serve farmers who speak those low-resource languages.",
    stack: ["Public sector", "Partner scoping", "Languages"],
  },
  {
    slug: "access-and-queries",
    name: "Access and plain-English queries",
    org: "Karya",
    metric: { value: "Seconds", label: "To provision access" },
    summary:
      "Roles in the product, not in the database. Operations ask for live numbers in plain English, inside an allow-list.",
    problem:
      "Access was edited in the database by hand, and operations could not pull live data without engineering.",
    context:
      "Internal PMs and operations, and external data workers and clients, do not share the same rights. Data privacy comes first for both. The reporting gap was the same shape: a queue of questions waiting on someone who can write SQL.",
    did: [
      "Added an authorization layer that admits only authorized users, and a user screen so teams manage access on the platform.",
      "4 global and 5 project roles across 100+ API routes. Permissions live in code. Inactive users are denied.",
      "Shipped an LLM-backed plain-English query tool over live PostgreSQL, with history and reusable templates.",
      "Guardrail tests limit every generated query to allowed tables.",
    ],
    decision:
      "Put roles in the product and put a hard allow-list in front of generated SQL. Operations get the numbers. They do not get the whole database.",
    call:
      "Fewer people can see everything. Provisioning went from hours to seconds, and a coordinator can pull live data without waiting on engineering.",
    result:
      "Provisioning went from hours to seconds. Operations pull live data without waiting on engineering.",
    stack: ["PostgreSQL", "TypeScript", "LLM"],
    liveUrl: "https://karya.in",
    demo: "query",
  },
  {
    slug: "umrain",
    name: "Umrain",
    org: "Umrain · Founder",
    founder: true,
    metric: { value: "$43K", label: "Revenue, bootstrapped" },
    summary:
      "A self-serve way to plan and book Umrah without an agent. I shut it down when the license, not the product, was the wall.",
    problem:
      "Pilgrims planning Umrah were dependent on agents for a trip they could have specified themselves: preferences, budget, and dates.",
    context:
      "I solo-founded it and owned product, pricing, vendors, operations, and support. It ran from 2023 to 2025.",
    did: [
      "Self-serve flow from preferences, budget, and schedule to a home-to-home itinerary.",
      "A written, itemised quote before booking.",
      "Drove $43K revenue over the period.",
    ],
    decision:
      "Show the full price in writing before anyone books, and let the traveler shape the trip without an agent in the middle.",
    call:
      "Stopped in 2025. Operations could not scale past IATA certification and Saudi Arabia travel regulations. The product worked. The operating license did not.",
    result: "$43K revenue. Shut down in 2025 on certification and regulation, not on demand.",
    stack: ["Founder", "Pricing", "Operations"],
    liveUrl: "https://umrain.in",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export type Principle = {
  id: string;
  label: string;
  title: string;
  body: string;
  proof: string;
  demo?: DemoKind;
};

export const principles: Principle[] = [
  {
    id: "discover",
    label: "Discover",
    title: "Sit with the people who run the work.",
    body: "For MahaVISTAAR I scoped with ministers, officers, and local coordinators before collection started. The gap was not a missing screen. Farmers who speak Dehwali Bhili, Mavachi, and Pawari could not use the government apps.",
    proof: "Marathi plus three low-resource languages, scoped with the state.",
  },
  {
    id: "scope",
    label: "Scope",
    title: "Write the decision down, including what you will not build.",
    body: "Task Preview started as a PRD: user stories, acceptance criteria, and non-goals. The locked rule was that every task stays in Preview, payouts off, until operations approves it.",
    proof: "Task issues fell by close to 90%.",
    demo: "preview",
  },
  {
    id: "ship",
    label: "Ship",
    title: "Give operations a product, not a ticket queue.",
    body: "Platform by Karya is 30+ components, so a new program, including for low-bandwidth and low-literacy users, does not need a new build. Access follows the same idea: 4 global and 5 project roles across 100+ API routes. Provisioning takes seconds, not a hand edit in the database.",
    proof: "Hours to seconds. A data operation takes more than 50% less time.",
  },
  {
    id: "measure",
    label: "Measure",
    title: "A number the partner can argue with.",
    body: "I design the evaluation rubric with the AI team, run human review on the platform, and read the results with the partner. Samiksha with Microsoft was 23,000+ real queries and 150,000+ human evaluations. Task Health is the same habit inside the product: 7 checks, each opening the screen that fixes the blocker.",
    proof: "150,000+ human evaluations.",
    demo: "health",
  },
];

export type Role = {
  company: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  highlights: string[];
  founder?: boolean;
};

export const experiences: Role[] = [
  {
    company: "Karya",
    url: "https://karya.in",
    role: "Senior Product Engineer, product owner",
    period: "2024 – Present",
    location: "Bengaluru",
    summary:
      "Product owner for Platform by Karya, an AI data and evaluation platform. Client discovery through deployment, with AI engineers, software engineers, and operations.",
    highlights: [
      "Platform: 65M+ tasks, 70+ languages, 6 countries. 30+ components so operations assemble a program, including for low-bandwidth and low-literacy users, without a new build.",
      "Partners: pipelines with Google, IISc, Microsoft, and Anthropic. Project Apollo, 100,000 hours, 22 languages, 60,000 workers, $2M in wages. Project Vaani with Google and IISc, 6,000 hours, 24K+ speakers, 30 districts.",
      "Public sector: MahaVISTAAR with the Maharashtra government. Language datasets for the Government of India. Adolescent-health data with the Karnataka Health Promotion Trust.",
      "Evaluation: Samiksha with Microsoft, 23,000+ queries and 150,000+ human evaluations. An Anthropic evaluation, 10,000 community queries, 30,000+ tasks, 7 languages.",
      "Task Preview and Task Health: issues down by close to 90%, a data operation more than 50% faster, 7 automated checks.",
      "Access and reporting: 4 global and 5 project roles across 100+ API routes, hours to seconds. Plain-English queries over live PostgreSQL, limited to allowed tables.",
    ],
  },
  {
    company: "Umrain",
    url: "https://umrain.in",
    role: "Founder",
    period: "2023 – 2025",
    location: "Bengaluru",
    founder: true,
    summary:
      "Bootstrapped product for planning and booking Umrah without agents. $43K revenue. Stopped in 2025.",
    highlights: [
      "Owned product, pricing, vendors, operations, and support.",
      "Self-serve flow from preferences, budget, and schedule to a home-to-home itinerary, with a written, itemised quote before booking.",
      "Stopped because operations could not scale past IATA certification and Saudi Arabia travel regulations.",
    ],
  },
  {
    company: "ZopSmart",
    url: "https://zopsmart.com",
    role: "Product Engineer",
    period: "2021 – 2024",
    location: "Bengaluru",
    summary:
      "Product scope on grocery and HR SaaS. Worked with the CTO, prioritized with stakeholders, and shipped from the backlog through launch.",
    highlights: [
      "Kroger, US grocery e-commerce: homepage and category-discovery redesign on the 2nd-largest US grocery e-commerce SaaS. Click-through rose 3× and product sales rose 12%.",
      "EazyUpdates, task-management SaaS: owned 50% of the product, including leave and payroll tracking for HR stakeholders.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Product",
    items: [
      "Problem framing",
      "Roadmapping",
      "PRDs",
      "User stories",
      "Acceptance criteria",
      "Partner scoping",
    ],
  },
  {
    title: "AI",
    items: [
      "LLM evaluation",
      "Evaluation rubrics",
      "Human feedback data",
      "Training-data pipelines",
      "LLM text-to-SQL",
    ],
  },
  {
    title: "Technical",
    items: ["SQL", "PostgreSQL", "JavaScript", "TypeScript", "React", "Node.js", "Figma", "Cursor", "Python"],
  },
  {
    title: "Languages",
    items: ["English", "Arabic (basic)"],
  },
];

export const navLinks = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#approach", id: "approach", label: "Approach" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;
