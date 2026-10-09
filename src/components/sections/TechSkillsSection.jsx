import {
    Badge,
    Container,
    Group,
    Paper,
    SimpleGrid,
    Title,
} from "@mantine/core";

import { PORTFOLIO_DATA } from "../../data/portfolioData.js";
import RevealOnScroll from "../common/RevealOnScroll.jsx";
import SectionTitle from "../common/SectionTitle.jsx";

export default function TechSkillsSection() {
    return (
        <section id="skills" style={{ padding: "4rem 0" }}>
            <Container size="lg">
                <SectionTitle
                    title="Tech Stack & Skills"
                    subtitle="Core programming languages, frameworks, and developer tools in my daily workflow."
                />
                <RevealOnScroll direction="left" delay={0.3}>
                    <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                        {Object.entries(PORTFOLIO_DATA.skills).map(
                            ([category, items]) => (
                                <Paper
                                    key={category}
                                    p="xl"
                                    radius="md"
                                    withBorder
                                >
                                    <Title
                                        order={4}
                                        mb="md"
                                        tt="capitalize"
                                        c="blue"
                                    >
                                        {category} Stack
                                    </Title>
                                    <Group gap="xs">
                                        {items.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="filled"
                                                color="dark"
                                                size="md"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </Group>
                                </Paper>
                            ),
                        )}
                    </SimpleGrid>
                </RevealOnScroll>
            </Container>
        </section>
    );
}
