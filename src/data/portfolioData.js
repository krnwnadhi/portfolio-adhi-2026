export const PORTFOLIO_DATA = {
    // Ganti ke username GitHub Anda
    githubUsername: "krnwnadhi",

    profile: {
        name: "ADHI",
        // role: "Fullstack Javascript Developer",
        roles: [
            "Fullstack Web & Mobile Developer",
            "React & Next.js Specialist",
            "Backend & Cloud Enthusiast",
            "UI/UX & Performance Focused",
        ],
        status: "Available For Projects",
        bio: "Dedicated to architecting high-performance, scalable web applications with responsive and engaging user experiences using React JS, Node.js, ExpressJS, MySQL, MongoDB, And React Native.",
        avatar: "https://res.cloudinary.com/degzbxlnx/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1791448683/Foto_3x4_Adhi_Kurniawan_chsasn.jpg",
        email: "adhikurniawan2108@gmail.com",
        githubUrl: "https://github.com/krnwnadhi",
        linkedinUrl: "https://www.linkedin.com/in/adhikrnwn/",
    },

    navLinks: [
        { label: "Home", href: "#home" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "GitHub Insights", href: "#github" },
        { label: "Certifications", href: "#certifications" },
        { label: "Connect", href: "#contact" },
    ],

    experiences: [
        {
            period: "2022 - Present",
            role: "IT Programmer - Staff",
            institution: "Dinas Komunikasi Informatika Provinsi Jambi",
            desc: "Led the frontend team in migrating a legacy monolith to Next.js and Mantine UI, improving load times by 40% and streamlining module architecture.",
            type: "work",
        },
        {
            period: "2021",
            role: "Javascript Developer - Online Course",
            institution: "PT Cilsy Digital Solusindo",
            desc: "Engineered internal ERP platforms, integrated payment gateways, and managed containerized microservices deployments with Docker.",
            type: "edu",
        },
        {
            period: "2012 - 2019",
            role: "B.S. in Computer Science",
            institution: "Sriwijaya University",
            desc: "",
            type: "edu",
        },
    ],

    skills: {
        frontend: [
            "React 19",
            "Next.js",
            "Mantine UI v9",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
        ],
        backend: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "Prisma ORM",
            "GraphQL",
            "RESTful APIs",
        ],
        tools: [
            "Git & GitHub",
            "Docker",
            "Vite",
            "Netlify / Vercel",
            "Figma",
            "Playwright",
        ],
    },

    projects: [
        {
            title: "Enterprise ERP Dashboard",
            desc: "Real-time inventory analytics and automated invoicing platform featuring fully adaptive dark and light themes.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            tags: ["React", "Mantine v9", "Node.js", "Zustand"],
            demo: "https://example.com",
            github: "https://github.com",
        },
        {
            title: "Fintech Smart Wallet",
            desc: "Mobile-first personal finance platform featuring end-to-end data encryption and real-time expense visualization.",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
            tags: ["React Native", "TypeScript", "PostgreSQL"],
            demo: "https://example.com",
            github: "https://github.com",
        },
        {
            title: "SaaS Task Management",
            desc: "Collaborative Kanban board application with instantaneous WebSocket synchronization and granular team permissions.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
            tags: ["Next.js", "Mantine UI", "Socket.io"],
            demo: "https://example.com",
            github: "https://github.com",
        },
    ],

    certifications: [
        {
            title: "AWS Certified Solutions Architect - Associate",
            issuer: "Amazon Web Services",
            date: "2024",
            id: "AWS-SAA-83921",
            verifyUrl: "https://aws.amazon.com/verification",
            image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Professional React & TypeScript Developer",
            issuer: "Meta / Coursera",
            date: "2023",
            id: "META-RTS-4410",
            verifyUrl: "https://coursera.org",
            image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=800&q=80",
        },
    ],
};
