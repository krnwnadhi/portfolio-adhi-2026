export const PORTFOLIO_DATA = {
    // Ganti ke username GitHub Anda
    githubUsername: "krnwnadhi",

    profile: {
        name: "ADHI",
        roles: [
            "Fullstack Javascript",
            "Mobile Developer",
            "ReactJS Specialist",
            "Backend ExpressJS",
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
            desc: "Responsible for developing, integrating, and maintaining public service applications and provincial government information systems. Optimizing web performance, managing databases, and ensuring system security to accelerate regional digital transformation.",
            type: "work",
        },
        {
            period: "2021",
            role: "Fullstack Javascript Mentoring Program - Online Course",
            institution: "PT Cilsy Fiolution Indonesia",
            desc: "Completed an intensive end-to-end JavaScript web development program focused on modern React interfaces, RESTful API architecture with Node.js and Express, and database management e.g. MySQL dan MongoDB",
            type: "edu",
        },
        {
            period: "2012 - 2019",
            role: "B.S. in Computer Science",
            institution: "Sriwijaya University",
            desc: "Studied core algorithms, data structures, and software engineering, establishing a strong foundation in structured technical problem-solving.",
            type: "edu",
        },
    ],

    skills: {
        frontend: [
            "React Js",
            "Next js",
            "Mantine UI",
            "MUI",
            "AntDesign",
            "Tailwind CSS",
        ],
        backend: [
            "Node.js",
            "Express JS",
            "MySQL",
            "MongoDB",
            "Prisma ORM",
            "Sequelize",
            "RESTful APIs",
        ],
        tools: ["Git & GitHub", "Docker", "Vite", "Netlify / Vercel", "Figma"],
    },

    projects: [
        {
            title: "SILAT JAMBI",
            desc: "A healthcare reporting information system designed for community health centers (Puskesmas) to monitor, log, and streamline tuberculosis (TB) patient case tracking.",
            image: "https://res.cloudinary.com/degzbxlnx/image/upload/v1791779866/b6b47c04-13c6-4f84-858a-e6c82d02b9c6_mkxi3m.jpg",
            tags: ["React Native", "React Native Paper"],
            demo: "https://example.com",
            github: "https://github.com",
        },
        {
            title: "Biro Administrasi Pembangunan Provinsi Jambi",
            desc: "Official regional development administration portal for Jambi Provincial Government, streamlining developmental project monitoring, documentation, and reporting workflows.",
            image: "https://res.cloudinary.com/degzbxlnx/image/upload/v1791779840/4027bfc9-e118-406d-9a48-35b77eb8e5ca_xmgkzq.jpg",
            tags: [
                "ReactJS",
                "Mantine UI v7",
                "React-Redux",
                "Express",
                "Cloudinary",
                "MongoDB",
                "Mongoose",
            ],
            demo: "https://adpem.jambiprov.go.id/",
            github: "https://github.com",
        },
        {
            title: "Hibahku",
            desc: "A government grant management and tracking platform built to enhance transparency, proposal administration, and public funding disbursement monitoring.",
            image: "https://res.cloudinary.com/degzbxlnx/image/upload/v1791779858/2f7017a6-22ea-4a9b-8b24-45bc4700f1f1_vsajx5.jpg",
            tags: [
                "ReactJS",
                "Mantine v7",
                "React-Redux",
                "React Router",
                "Express",
                "MySQL",
                "Sequelize",
            ],
            demo: "https://hibahku.jambiprov.go.id/",
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
