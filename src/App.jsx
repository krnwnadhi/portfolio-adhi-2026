import "./index.css";

import { AppShell } from "@mantine/core";
import CertificationsSection from "./components/sections/CertificationsSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
import ExperienceSection from "./components/sections/ExperienceSection.jsx";
import Footer from "./components/layout/Footer.jsx";
import GithubInsightsSection from "./components/sections/GithubInsightsSection.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import TechSkillsSection from "./components/sections/TechSkillsSection.jsx";

export default function App() {
    return (
        <AppShell header={{ height: 60 }}>
            <Navbar />
            <AppShell.Main>
                <HeroSection />
                <ExperienceSection />
                <TechSkillsSection />
                <ProjectsSection />
                <GithubInsightsSection />
                <CertificationsSection />
                <ContactSection />
            </AppShell.Main>
            <Footer />
        </AppShell>
    );
}
