import { ActionIcon, Container, Group, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import { PORTFOLIO_DATA } from "../../data/portfolioData.js";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid var(--mantine-color-default-border)",
                padding: "2rem 0",
            }}
        >
            <Container size="lg">
                <Group justify="space-between">
                    <Text size="sm" c="dimmed">
                        © {new Date().getFullYear()}{" "}
                        {PORTFOLIO_DATA.profile.name}. Made by ❤️
                    </Text>
                    <Group gap="xs">
                        <ActionIcon
                            component="a"
                            href={PORTFOLIO_DATA.profile.githubUrl}
                            target="_blank"
                            variant="subtle"
                            color="gray"
                        >
                            <IconBrandGithub size={18} />
                        </ActionIcon>
                        <ActionIcon
                            component="a"
                            href={PORTFOLIO_DATA.profile.linkedinUrl}
                            target="_blank"
                            variant="subtle"
                            color="gray"
                        >
                            <IconBrandLinkedin size={18} />
                        </ActionIcon>
                    </Group>
                </Group>
            </Container>
        </footer>
    );
}
