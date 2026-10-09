import {
    Avatar,
    Badge,
    Button,
    Container,
    Grid,
    Group,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBriefcase,
} from "@tabler/icons-react";
import { useEffect, useRef } from "react";

import { PORTFOLIO_DATA } from "../../data/portfolioData.js";
import RevealOnScroll from "../common/RevealOnScroll.jsx";
import Typed from "typed.js";

export default function HeroSection() {
    const { profile } = PORTFOLIO_DATA;
    const roleTextRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(roleTextRef.current, {
            strings: profile.roles || [profile.role],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1800,
            startDelay: 300,
            loop: true,
            showCursor: true,
            cursorChar: "|",
            contentType: null,
            smartBackspace: true,
        });

        return () => {
            typed.destroy();
        };
    }, [profile.roles, profile.role]);

    return (
        <section
            id="home"
            className="fade-in-section"
            style={{ padding: "5rem 0" }}
        >
            <Container size="lg">
                <Grid align="center" gutter={40}>
                    <Grid.Col span={{ base: 12, md: 7 }}>
                        <Stack gap="md">
                            <RevealOnScroll direction="down" delay={0.1}>
                                <Badge
                                    variant="dot"
                                    color="teal"
                                    size="lg"
                                    radius="sm"
                                >
                                    {profile.status}
                                </Badge>
                            </RevealOnScroll>

                            <RevealOnScroll direction="up" delay={0.2}>
                                <Title
                                    order={1}
                                    style={{
                                        fontSize: "clamp(2.3rem, 5vw, 3.6rem)",
                                        lineHeight: 1.15,
                                    }}
                                >
                                    Hello, I'm{" "}
                                    <Text
                                        component="span"
                                        inherit
                                        variant="gradient"
                                        gradient={{
                                            from: "blue",
                                            to: "cyan",
                                            deg: 90,
                                        }}
                                    >
                                        {profile.name}
                                    </Text>
                                </Title>
                            </RevealOnScroll>

                            <RevealOnScroll direction="up" delay={0.3}>
                                <Text
                                    size="xl"
                                    fw={600}
                                    c="dimmed"
                                    style={{
                                        minHeight: "36px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <span ref={roleTextRef} />
                                </Text>
                            </RevealOnScroll>

                            <RevealOnScroll direction="up" delay={0.4}>
                                <Text c="dimmed" size="md">
                                    {profile.bio}
                                </Text>
                            </RevealOnScroll>

                            <RevealOnScroll direction="up" delay={0.5}>
                                <Group gap="sm" mt="sm">
                                    <Button
                                        component="a"
                                        href="#projects"
                                        size="md"
                                        color="blue"
                                        leftSection={
                                            <IconBriefcase size={18} />
                                        }
                                        style={{
                                            transition: "transform 0.2s ease",
                                        }}
                                    >
                                        View Projects
                                    </Button>
                                    <Button
                                        component="a"
                                        href={profile.githubUrl}
                                        target="_blank"
                                        size="md"
                                        variant="default"
                                        leftSection={
                                            <IconBrandGithub size={18} />
                                        }
                                        style={{
                                            transition: "transform 0.2s ease",
                                        }}
                                    >
                                        GitHub
                                    </Button>
                                    <Button
                                        component="a"
                                        href={profile.linkedinUrl}
                                        target="_blank"
                                        size="md"
                                        variant="default"
                                        leftSection={
                                            <IconBrandLinkedin size={18} />
                                        }
                                        style={{
                                            transition: "transform 0.2s ease",
                                        }}
                                    >
                                        LinkedIn
                                    </Button>
                                </Group>
                            </RevealOnScroll>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 5 }}>
                        <RevealOnScroll direction="left" delay={0.3}>
                            <Group justify="center">
                                <Avatar
                                    src={profile.avatar}
                                    size={275}
                                    radius="100%"
                                    className="hero-avatar-floating"
                                    style={{
                                        border: "2px solid var(--mantine-color-dark-6)",
                                    }}
                                />
                            </Group>
                        </RevealOnScroll>
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    );
}
