import {
    Badge,
    Button,
    Card,
    Container,
    Group,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

import { PORTFOLIO_DATA } from "../../data/portfolioData.js";
import RevealOnScroll from "../common/RevealOnScroll.jsx";
import SectionTitle from "../common/SectionTitle.jsx";

export default function ProjectsSection() {
    return (
        <section id="projects" style={{ padding: "4rem 0" }}>
            <Container size="lg">
                <SectionTitle
                    title="Featured Projects"
                    subtitle="A showcase of real-world applications designed, developed, and deployed to production."
                />
                <RevealOnScroll direction="left" delay={0.3}>
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                        {PORTFOLIO_DATA.projects.map((proj) => (
                            <Card
                                key={proj.title}
                                shadow="sm"
                                padding="lg"
                                radius="md"
                                withBorder
                                className="hero-avatar-floating"
                            >
                                <Card.Section>
                                    <Image
                                        src={proj.image}
                                        height={180}
                                        alt={proj.title}
                                        style={{
                                            transition: "transform 0.3s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.transform =
                                                "scale(1.05)")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.transform =
                                                "scale(1)")
                                        }
                                    />
                                </Card.Section>
                                <Stack gap="xs" mt="md" mb="md">
                                    <Text fw={700} size="lg">
                                        {proj.title}
                                    </Text>
                                    <Text size="sm" c="dimmed" lineClamp={4}>
                                        {proj.desc}
                                    </Text>
                                </Stack>
                                <Group gap={6} mb="lg">
                                    {proj.tags.map((t) => (
                                        <Badge
                                            key={t}
                                            variant="light"
                                            color="blue"
                                            size="sm"
                                        >
                                            {t}
                                        </Badge>
                                    ))}
                                </Group>
                                <Group gap="xs" mt="auto">
                                    <Button
                                        component="a"
                                        href={proj.demo}
                                        target="_blank"
                                        variant="light"
                                        color="blue"
                                        size="xs"
                                        leftSection={
                                            <IconExternalLink size={14} />
                                        }
                                        flex={1}
                                    >
                                        Demo
                                    </Button>
                                </Group>
                            </Card>
                        ))}
                    </SimpleGrid>
                </RevealOnScroll>
            </Container>
        </section>
    );
}
