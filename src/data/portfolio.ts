// CollabItem interface commented out - not currently used
// export interface CollabItem {
//   id: string;
//   partner: string;
//   partnerType: "Open Source Org" | "Startup" | "Tech Studio" | "Research Team";
//   title: string;
//   role: string;
//   period: string;
//   description: string;
//   contributions: string[];
//   techStack: string[];
//   link?: string;
//   status: "ACTIVE" | "COMPLETED" | "ONGOING";
//   asciiLogo?: string;
// }

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; experience: string; tag: string }[];
}

export type Max8Colors =
  | []
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string]
  | [string, string, string, string, string, string]
  | [string, string, string, string, string, string, string]
  | [string, string, string, string, string, string, string, string];

export const PORTFOLIO_DATA = {
  developer: {
    name: "Gabriel Fanto",
    handle: "gabrielfanto",
    title: "Senior Software Engineer",
    alias: "root@fanto",
    email: "fantoshellcli@.gmail.com",
    github: "https://github.com/F4NT0/fanto-tui-portfolio",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    location: "Porto Alegre, RS",
    status: " DISPONÍVEL PARA PROJETOS!",
    CLI_EMOJI: "🫐",
    palette: [
      "#0f0f0f",
      "#ef4444",
      "#22c55e",
      "#eab308",
      "#3b82f6",
      "#a855f7",
      "#06b6d4",
      "#f8fafc",
    ],
    bio: "Software Engineer com 6+ anos de experiência construindo soluções escaláveis para os setores financeiro e de gestão. Apaixonado por Linux, automação, arquiteturas distribuídas e produtividade via terminal. Entusiasta de ferramentas TUI, infraestrutura moderna e da filosofia \"keyboard-driven\", transformando complexidade em sistemas eficientes e confiáveis.",
    quote:
      '"Não substitua a sua inteligência mental por algo que se deve pagar para usar" - Gabriel Fanto',
    asciiBanner: `
  ___ _ _  _  _ _____ __
 | __| | || \\| |_   _/  \\
 | _||_  _|    | | || () |
 |_|   |_||_|\\_| |_| \\__/

`,
    specs: {
      OS: "Windows 11, Omarchy, Arch Linux, MacOSX",
      Kernel: "1996.04.26_matrix",
      Uptime: "30 years, 4 months, 8 days",
      Shell: "Zsh",
      Terminal: "Ghostty, Windows Terminal",
      WM: "Hyprland",
      Editor: "Neovim (custom), Devin",
      CPU: "AMD Ryzen Threadripper PRO 9995WX",
      Memory: "30TB / 100TB",
    },
  },

  skills: [
    {
      category: "Core Languages",
      icon: "⚡",
      skills: [
        {
          name: "Java", level: 95, experience: "8 yrs", tag: "EXPERT",
        },
        {
          name: "C#", level: 65, experience: "4 yrs", tag: "ADVANCED",
        },
        {
          name: "Go (Golang)", level: 40, experience: "3 yrs", tag: "BEGINNER",
        },
        {
          name: "HTML5 / CSS3 / Tailwind", level: 95, experience: "6 yrs", tag: "EXPERT",
        },
        {
          name: "Python (Script and Language)", level: 88, experience: "5 yrs", tag: "PRO",
        },
        {
          name: "SQL & NoSQL", level: 90, experience: "6 yrs", tag: "PRO",
        },
      ],
    },
    {
      category: "Frameworks & Frontend",
      icon: "🌐",
      skills: [
        { name: "Astro.js", level: 95, experience: "3 yrs", tag: "EXPERT" },
        { name: "React / Next.js", level: 92, experience: "3 yrs", tag: "PRO" },
        { name: "Tailwind CSS v4", level: 95, experience: "3 yrs", tag: "EXPERT",},
        { name: "Node.js", level: 90, experience: "3 yrs", tag: "PRO",},
        { name: "Vue / Next", level: 80, experience: "2 yrs", tag: "BEGINNER" },
        {name: "Angular.js", level: 75, experience: "3 yrs", tag: "INTERMEDIATE",},
      ],
    },
    {
      category: "DevOps, Cloud & Architecture",
      icon: "☁️",
      skills: [
        { name: "Docker / Containerization", level: 88, experience: "5 yrs", tag: "PRO",},
        { name: "Kubernetes", level: 40, experience: "0 yrs", tag: "BEGINNER",},
        { name: "Linux Administration & Bash", level: 92, experience: "6 yrs", tag: "PRO",},
        { name: "PostgreSQL/SQLite", level: 90, experience: "5 yrs", tag: "PRO",},
        { name: "Gitlab CI/CD", level: 88, experience: "5 yrs", tag: "PRO",},
        { name: "CI/CD Github Actions", level: 55, experience: "2 yrs", tag: "BEGINNER",},
      ],
    },
    {
      category: "Backend Development & Terminal",
      icon: "🔗",
      skills: [
        { name: "Windows Terminal", level: 95, experience: "5 yrs", tag: "PRO" },
        { name: "Linux Terminal", level: 90, experience: "7 yrs", tag: "ADVANCED" },
        { name: "Devin Local", level: 85, experience: "1 yrs", tag: "BEGINNER" },
        { name: ".NET", level: 90, experience: "5 yrs", tag: "PRO" },
        { name: "Spring Boot", level: 90, experience: "5 yrs", tag: "PRO" },
        { name: "TUI softwares", level: 85, experience: "4 yrs", tag: "PRO" },
      ],
    },
  ] as SkillCategory[],

  //collabs: [
  //  {
  //    id: "collab-hyper-edge",
  //    partner: "HyperEdge Foundation",
  //    partnerType: "Open Source Org",
  //    title: "Distributed Edge Cache Protocol (v2.0)",
  //    role: "Lead Protocol Architect & Contributor",
  //    period: "2024 - PRESENT",
  //    status: "ACTIVE",
  //    description:
  //      "Co-designed an open-source, ultra-low latency distributed edge cache protocol for multi-region serverless runtimes.",
  //    contributions: [
  //      "Architected lock-free data structures in Rust, reducing memory footprint by 35%.",
  //      "Co-authored RFC specs for async peer-to-peer buffer sync over QUIC.",
  //      "Mentored 12+ open-source contributors on core module development.",
  //    ],
  //    techStack: ["Rust", "Tokio", "QUIC Protocol", "WebAssembly"],
  //    link: "https://github.com",
  //    asciiLogo: `+--------------------+
//| HYPEREDGE PROTOCOL |
//| [STATUS: ACTIVE]   |
//+--------------------+`,
//    },
  //  {
  //    id: "collab-astrosynth",
  //    partner: "Aetheria Audio Labs",
  //    partnerType: "Tech Studio",
  //    title: "Browser WebAudio DSP Sequencer",
  //    role: "Senior Frontend Engineer & Audio Specialist",
  //    period: "2023 - 2024",
  //    status: "COMPLETED",
  //    description:
  //      "Joint collaboration to create a browser-based polyphonic synthesizer engine powered by Astro.js and WebAudio Worklets.",
  //    contributions: [
  //      "Implemented real-time audio wave visualization using HTML5 Canvas & WebGL shaders.",
  //     "Optimized audio buffer rendering latency down to sub-5ms across Chrome & Safari.",
  //     "Built responsive TUI modular controls using Tailwind CSS.",
  //    ],
  //    techStack: [
  //      "Astro.js",
  //      "TypeScript",
  //      "WebAudio API",
  //      "Tailwind CSS",
  //      "Canvas",
  //    ],
  //    link: "https://github.com",
   //   asciiLogo: `/\\_/\\   AETHERIA
//( o.o ) [AUDIO LABS]
 //> ^ <  ♪ ♫ ♩ ♬`,
 //   },
 //   {
 //     id: "collab-neural-cli",
 //     partner: "KernelAI Research Collective",
 //     partnerType: "Research Team",
 //     title: "Context-Aware Terminal AI Co-Pilot",
 //     role: "Core Systems Collaborator",
 //     period: "2023 - PRESENT",
 //     status: "ONGOING",
 //     description:
 //       "Partnered with AI researchers to build a lightweight, privacy-focused CLI co-pilot that translates intent to verified shell commands.",
 //     contributions: [
 //       "Designed local LLM token streaming pipeline via IPC socket sockets.",
 //       "Engineered strict command validation sandboxing for dangerous shell commands.",
 //     ],
 //     techStack: ["Node.js", "TypeScript", "Ollama API", "Inquirer.js"],
 //     link: "https://github.com",
 //     asciiLogo: `[KERNEL-AI COLLAB]
//Intent    --> [Local LLM]
//Execution --> bash -c`,
//    },
//  ] as CollabItem[],

  commands: [
    {
      name: "help",
      desc: "List all available terminal commands",
      descEn: "List all available terminal commands",
      descPt: "Listar todos os comandos disponíveis no terminal",
      usage: "help",
    },
    {
      name: "about",
      desc: "Display bio, engineering philosophy & summary",
      descEn: "Display bio, engineering philosophy & summary",
      descPt: "Exibir biografia, filosofia de engenharia e resumo",
      usage: "about [or cat bio.txt]",
    },
    {
      name: "skills",
      desc: "Display interactive skill proficiency meters",
      descEn: "Display interactive skill proficiency meters",
      descPt: "Exibir medidores interativos de proficiência de habilidades",
      usage: "skills [or cat skills.sh]",
    },
    {
      name: "contact",
      desc: "Display contact info and social handles",
      descEn: "Display contact info and social handles",
      descPt: "Exibir informações de contato e redes sociais",
      usage: "contact [or mail]",
    },
    {
      name: "links",
      desc: "Display interactive links to GitHub, LinkedIn, X/Twitter & Email",
      descEn: "Display interactive links to GitHub, LinkedIn, X/Twitter & Email",
      descPt: "Exibir links interativos para GitHub, LinkedIn, X/Twitter e Email",
      usage: "links [or socials, urls]",
    },
    {
      name: "github",
      desc: "Display live GitHub stats, stars, forks, and language metrics",
      descEn: "Display live GitHub stats, stars, forks, and language metrics",
      descPt: "Exibir estatísticas ao vivo do GitHub, estrelas, forks e métricas de linguagens",
      usage: "github [or gh, stats]",
    },
    {
      name: "repos",
      desc: "List featured GitHub repositories with star counts and links",
      descEn: "List featured GitHub repositories with star counts and links",
      descPt: "Listar repositórios em destaque do GitHub com contagem de estrelas e links",
      usage: "repos [or projects]",
    },
    {
      name: "matrix",
      desc: "Toggle digital rain overlay animation",
      descEn: "Toggle digital rain overlay animation",
      descPt: "Alternar animação de chuva digital",
      usage: "matrix",
    },
    {
      name: "clear",
      desc: "Clear terminal buffer screen",
      descEn: "Clear terminal buffer screen",
      descPt: "Limpar buffer do terminal",
      usage: "clear [or cls]",
    },
    {
      name: "download",
      desc: "Download Gabriel Stundner's CV (Curriculum Vitae)",
      descEn: "Download Gabriel Stundner's CV (Curriculum Vitae)",
      descPt: "Baixar CV de Gabriel Stundner (Currículo)",
      usage: "download [or cv]",
    },
    {
      name: "gui",
      desc: "Switch window layout to TUI Visual Dashboard",
      descEn: "Switch window layout to TUI Visual Dashboard",
      descPt: "Alternar layout para Painel Visual TUI",
      usage: "gui",
    },
    {
      name: "cli",
      desc: "Switch window layout to Interactive CLI Mode",
      descEn: "Switch window layout to Interactive CLI Mode",
      descPt: "Alternar layout para Modo CLI Interativo",
      usage: "cli",
    },
  ],
};
