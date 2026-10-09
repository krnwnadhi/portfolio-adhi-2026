import {
    Button,
    Container,
    CopyButton,
    Group,
    Paper,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconCheck,
    IconCopy,
} from "@tabler/icons-react";

import { PORTFOLIO_DATA } from "../../data/portfolioData.js";

export default function ContactSection() {
    const { profile } = PORTFOLIO_DATA;

    return (
        <section id="contact" style={{ padding: "4rem 0" }}>
            <Container size="sm">
                <Paper p="xl" radius="lg" withBorder ta="center">
                    <Stack gap="md" align="center">
                        <Title order={2}>Let's Connect</Title>
                        <Text c="dimmed">
                            To prevent bot scrapers and unsolicited spam, feel
                            free to reach out directly via my verified profiles
                            below:
                        </Text>
                        <Group gap="sm" mt="xs">
                            <Button
                                component="a"
                                href={profile.githubUrl}
                                target="_blank"
                                size="md"
                                variant="default"
                                leftSection={<IconBrandGithub size={18} />}
                            >
                                GitHub Profile
                            </Button>
                            <Button
                                component="a"
                                href={profile.linkedinUrl}
                                target="_blank"
                                size="md"
                                color="blue"
                                leftSection={<IconBrandLinkedin size={18} />}
                            >
                                LinkedIn Direct
                            </Button>
                        </Group>
                        <CopyButton value={profile.email} timeout={2000}>
                            {({ copied, copy }) => (
                                <Button
                                    variant="subtle"
                                    c="dimmed"
                                    size="xs"
                                    onClick={copy}
                                    leftSection={
                                        copied ? (
                                            <IconCheck size={14} color="blue" />
                                        ) : (
                                            <IconCopy size={14} />
                                        )
                                    }
                                >
                                    {copied
                                        ? "Email copied to clipboard!"
                                        : `Copy Email: ${profile.email}`}
                                </Button>
                            )}
                        </CopyButton>
                    </Stack>
                </Paper>
            </Container>
        </section>
    );
}
