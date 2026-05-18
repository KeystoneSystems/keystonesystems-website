export const SITE = {
  name: "Keystone Systems",
  tagline: "The missing piece for your business.",
  email: "info@keystonesystems.co.nz",
  phone: "+64 21 214 3368",
  url: "https://keystonesystems.co.nz",
  linkedin: "https://www.linkedin.com/company/keystonesystems-nz/",
} as const;

// ── Replace with your Cal.com username once account is set up ──
// e.g. "will-keystone/discovery" or "keystonesystems/30min"
export const CAL_LINK = "keystonesystems/discovery";

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const TRUST_SIGNALS = [
  "NZ-owned & operated",
  "Fixed-fee projects",
  "You own what we build",
  "PMP-qualified delivery",
] as const;

export const PAIN_POINTS = [
  {
    icon: "GitMerge",
    text: "Your team copies data between tools that should talk to each other.",
  },
  {
    icon: "Bell",
    text: "Leads come in and the follow-up depends on someone remembering.",
  },
  {
    icon: "TrendingDown",
    text: "You added more tools but the admin somehow keeps growing.",
  },
  {
    icon: "Users",
    text: "Growth keeps stalling because your best people are always full.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "30 minutes. We map your current operations and identify the biggest automation opportunities. No pitch deck.",
    duration: "30 min",
  },
  {
    step: 2,
    title: "Systems Audit",
    description:
      "We document your tools, workflows, and manual touchpoints. You get a written audit report regardless of whether we proceed.",
    duration: "1–2 weeks",
  },
  {
    step: 3,
    title: "Build",
    description:
      "We implement the agreed automations with a defined scope and fixed fee. Documented as we go.",
    duration: "2–6 weeks",
  },
  {
    step: 4,
    title: "Handover",
    description:
      "You own everything. Full documentation, training, and ongoing access. Retainer clients loop back to the audit — we find the next opportunity together.",
    duration: "Clean close",
  },
] as const;

export const SERVICES = [
  {
    icon: "Workflow",
    title: "Stop the manual glue work",
    service: "Workflow Automation",
    description:
      "Connect your tools and remove the manual steps between them. Built on Make, n8n, or Zapier.",
  },
  {
    icon: "Users2",
    title: "A CRM that works like your business",
    service: "CRM Setup & Integration",
    description:
      "Leads, follow-ups, and pipelines that run without chasing. GoHighLevel primary.",
  },
  {
    icon: "MessageSquare",
    title: "Never miss an after-hours lead",
    service: "AI Chatbots & Agents",
    description:
      "Lead qualification, FAQ responses, and enquiry handling. Built on Claude API.",
  },
  {
    icon: "Search",
    title: "Know exactly where time is leaking",
    service: "Systems Audit & Discovery",
    description:
      "A written map of where your operations are losing time. Useful regardless of what you do next.",
  },
  {
    icon: "Wrench",
    title: "A tool built for your specific problem",
    service: "Custom AI Tooling",
    description:
      "Proposal drafting, document processing, knowledge search — purpose-built for your operation.",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    icon: "Cpu",
    title: "Systems thinking first",
    description:
      "Mechatronics engineering background. We map how the whole operation fits together before recommending any tool.",
  },
  {
    icon: "ClipboardList",
    title: "PMP-structured delivery",
    description:
      "Defined scope, clear milestones, written documentation. Projects close on time with a proper handover.",
  },
  {
    icon: "ShieldCheck",
    title: "You own everything",
    description:
      "Every automation, every integration, every document. Full handover with no lock-in. No ongoing dependency.",
  },
  {
    icon: "MapPin",
    title: "NZ-based",
    description:
      "Local business hours, NZ context, no offshore hand-offs. We understand how NZ small businesses operate.",
  },
] as const;

export const OUTCOMES = [
  { value: 8, suffix: "hrs", label: "saved per week", context: "typical first-month admin reduction" },
  { value: 6, suffix: "wks", label: "to go-live", context: "from scoped brief to live system" },
  { value: 100, suffix: "%", label: "handover rate", context: "every engagement fully documented" },
] as const;

export const PRICING_TIERS = [
  {
    name: "Discovery Audit",
    price: "Free",
    priceNote: "while we build our portfolio",
    description: "We map your current tools, workflows, and manual processes. You leave with a written audit — no obligation.",
    includes: [
      "30-min discovery call",
      "Written systems audit",
      "Automation opportunity map",
      "Clear next-step recommendation",
    ],
    cta: "Book a Free Audit",
    highlight: false,
  },
  {
    name: "Foundation Build",
    price: "From $3,000",
    priceNote: "NZD · fixed fee",
    description: "Core workflow automation or CRM setup. Defined scope, fixed price, full documentation and handover.",
    includes: [
      "Everything in Discovery",
      "Scoped automation build",
      "Full documentation",
      "Training & handover session",
      "30-day post-launch support",
    ],
    cta: "Book a Discovery Call",
    highlight: true,
  },
  {
    name: "Ongoing Retainer",
    price: "From $500",
    priceNote: "NZD/month",
    description: "Continued iteration, maintenance, and expansion after your initial build is live.",
    includes: [
      "Monthly hours allocation",
      "Priority response",
      "Iteration & new automations",
      "Quarterly performance review",
    ],
    cta: "Talk to Us",
    highlight: false,
  },
] as const;

export const FAQS = [
  {
    question: "Do I need to know anything about AI or tech to work with you?",
    answer:
      "No. We explain everything in plain language. Our job is to understand your business — you don't need to understand the tech.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "From a scoped brief to a live system: 2–6 weeks depending on complexity. The discovery and audit phase (2–3 weeks) always comes first, and is fully scoped before any build begins.",
  },
  {
    question: "What does it cost?",
    answer:
      "Discovery audit: free while we build our first client portfolio. Build projects: fixed fee, starting from $3,000 NZD. Monthly retainer: from $500 NZD/month. Every project is scoped and priced before work begins — no open-ended billing.",
  },
  {
    question: "Who owns what you build?",
    answer:
      "You do. Every automation, every integration, every document. We don't retain access or set up dependency structures. Full documentation and handover is included in every engagement.",
  },
  {
    question: "What tools do you work with?",
    answer:
      "Make, n8n, and Zapier for workflow automation. GoHighLevel for CRM. Claude API for AI agents. We're tool-agnostic — we recommend based on what fits your situation, not what we prefer to build in.",
  },
  {
    question: "What if I'm not sure I'm ready?",
    answer:
      "That's exactly what the discovery call is for. If you're feeling the friction but aren't sure where to start, book the call. We'll tell you honestly whether automation is the right move right now — and if not, you'll still leave with a clearer picture of your operations.",
  },
  {
    question: "Is my business data safe?",
    answer:
      "Yes. We follow NZ Privacy Act requirements and don't store or retain client data beyond what's needed for the project. Data handling practices are documented in every engagement.",
  },
] as const;
