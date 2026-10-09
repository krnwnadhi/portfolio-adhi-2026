import { Container, Paper, Text, Timeline } from "@mantine/core";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";

import { PORTFOLIO_DATA } from "../../data/portfolioData.js";
import RevealOnScroll from "../common/RevealOnScroll.jsx";
import SectionTitle from "../common/SectionTitle.jsx";

export default function ExperienceSection() {
    return (
        <section id="experience" style={{ padding: "4rem 0" }}>
            <Container size="md">
                <SectionTitle
                    title="Experience & Education"
                    subtitle="My professional background, career journey, and academic foundation."
                />
                <RevealOnScroll direction="left" delay={0.3}>
                    <Timeline
                        active={0}
                        bulletSize={32}
                        lineWidth={2}
                        color="blue"
                    >
                        {PORTFOLIO_DATA.experiences.map((exp, idx) => (
                            <Timeline.Item
                                key={idx}
                                bullet={
                                    exp.type === "edu" ? (
                                        <IconSchool size={16} />
                                    ) : (
                                        <IconBriefcase size={16} />
                                    )
                                }
                                title={
                                    <Text fw={700} size="lg">
                                        {exp.role}
                                    </Text>
                                }
                            >
                                <Paper withBorder p="md" radius="md" mt="xs">
                                    <Text size="sm" fw={600} c="blue">
                                        {exp.institution} • {exp.period}
                                    </Text>
                                    <Text size="sm" c="dimmed" mt={4}>
                                        {exp.desc}
                                    </Text>
                                </Paper>
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </RevealOnScroll>
            </Container>
        </section>
    );
}
