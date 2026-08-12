export const siteConfig = {
  name: "Shaurya Agrawal",
  role: "AI Systems Engineer",
  tagline: "Building AI pipelines that hold up in production.",
  email: "shaurya.s.agrawal04@gmail.com",
  github: "https://github.com/Cranberry7",
  linkedin: "https://www.linkedin.com/in/shaurya-s-agrawal/",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroData = {
  headline: "AI Systems Engineer building systems that hold up in production.",
  subheadline:
    "I design RAG pipelines, multi-agent systems, and secure infrastructure — validated with real testing, not just demos.",
  trustLine: "Ex-Sarvaha Systems · Ex-DCDIUM Technologies · Manipal University Jaipur",
};

export const aboutData = {
  bio: `Computer Science undergraduate at Manipal University Jaipur (expected May 2027), with internship experience spanning AI systems engineering and cybersecurity operations. I've built production-style RAG pipelines, multi-agent systems, and security tooling — shipping features in enterprise environments, not just academic sandboxes.`,
  ieeeNote:
    "IEEE Student Branch — coordinated logistics for 5+ hackathons, bridging technical communities with hands-on event execution.",
};

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: ["Python", "TypeScript", "SQL", "JavaScript", "Bash"],
  },
  {
    title: "AI / ML Frameworks",
    icon: "Brain",
    skills: [
      "FastAPI",
      "NestJS",
      "React",
      "LangGraph",
      "LangChain",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "Streamlit",
    ],
  },
  {
    title: "Infrastructure & Tools",
    icon: "Server",
    skills: [
      "Linux",
      "Git",
      "Docker",
      "PostgreSQL",
      "Neo4j",
      "Milvus",
      "FAISS",
      "Redis",
      "RabbitMQ",
      "Celery",
      "AWS (S3, EC2)",
    ],
  },
  {
    title: "Core Competencies",
    icon: "Layers",
    skills: [
      "System Design",
      "Microservices",
      "Multi-Agent Systems",
      "RAG",
      "Knowledge Graphs",
      "Real-time Anomaly Detection",
      "DSA",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  summary: string;
  impact: string;
  // TODO: Add links when projects are publicly available
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "graphrag-security",
    title: "GraphRAG Security Reasoning Engine",
    description:
      "A 3-phase GraphRAG pipeline that reconstructs multi-hop attack chains from heterogeneous security logs.",
    stack: ["Python", "Neo4j", "GraphRAG", "Pydantic", "MITRE ATT&CK"],
    summary:
      "A 3-phase GraphRAG pipeline (Ingestion → Retrieval → Generation) that parses 5 log formats (Syslog, CEF, CloudTrail, K8s Audit) into a Neo4j knowledge graph and reconstructs multi-hop attack chains.",
    impact:
      "Hybrid vector + bounded 4-hop graph retrieval with confidence-tiered filtering; validated via CI-run pytest suite; integrates 3 threat-intel APIs (NVD, MITRE ATT&CK STIX, OTX AlienVault) for citation-grounded reasoning.",
  },
  {
    id: "autostream-agent",
    title: "AutoStream Social-to-Lead Agent",
    description:
      "A stateful conversational agent with multi-turn memory and automated lead-qualification via WhatsApp Business API.",
    stack: ["Python", "LangGraph", "LangChain", "FAISS", "Redis"],
    summary:
      "A stateful conversational agent with persistent multi-turn memory and automated lead-qualification via a strict state machine, integrated with WhatsApp Business API.",
    impact:
      "Load-tested RAG pipeline (FAISS, tuned chunking) for high-accuracy product queries; Python-level gating to prevent LLM hallucinations; Redis session storage with 24-hr TTL.",
    repoUrl: "https://github.com/Cranberry7/Autostream_Agent",
  },
  {
    id: "harmonicai",
    title: "HarmonicAI",
    description:
      "A hybrid ML audio recommendation engine with GenAI-powered therapy script generation and real-time content moderation.",
    stack: ["Python", "Scikit-Learn", "Streamlit", "GenAI"],
    summary:
      "A hybrid ML audio recommendation engine combining unsupervised intent clustering and Random Forest over acoustic features, paired with a GenAI pipeline generating personalized therapy scripts.",
    impact:
      "3-layer NLP safety system (regex, TF-IDF, semantic routing) stress-tested to 100% real-time content moderation; PII salting, audit logging, and rate-limit testing on the GenAI pipeline.",
    repoUrl: "https://github.com/Cranberry7/HarmonicAI",
  },
];

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "sarvaha",
    title: "AI Systems Engineer Intern",
    company: "Sarvaha Systems",
    period: "Jun – Aug 2025",
    type: "Internship",
    highlights: [
      "Built an enterprise AI customer-support platform using FastAPI/NestJS/React microservices with multi-agent orchestration.",
      "Designed and deployed a RAG pipeline over Milvus for high-accuracy knowledge retrieval across enterprise documents.",
      "Engineered async ingestion system with Celery/RabbitMQ, SSE + Redis Pub/Sub for real-time streaming responses.",
      "Instrumented full-stack observability using Langfuse, OpenTelemetry, and CloudWatch for production monitoring.",
      "Verified RBAC and multi-tenant isolation to ensure secure, role-based access across client organizations.",
    ],
  },
  {
    id: "dcdium",
    title: "Cybersecurity Operations Intern",
    company: "DCDIUM Technologies",
    period: "Jun – Aug 2024",
    type: "Internship",
    highlights: [
      "Triaged 20–50 weekly security alerts as part of the Blue Team, maintaining rapid incident response cadence.",
      "Ran vulnerability assessments on 15+ systems using Nessus and OpenVAS, cutting attack surface by 40%.",
      "Authored 8 incident-response playbooks, standardizing the team's approach to recurring threat patterns.",
      "Improved SIEM-based threat detection accuracy to 95% by tuning Splunk correlation rules and alert thresholds.",
    ],
  },
];
