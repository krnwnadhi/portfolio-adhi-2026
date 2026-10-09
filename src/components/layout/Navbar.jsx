import {
    ActionIcon,
    Burger,
    Button,
    Container,
    Drawer,
    Group,
    Stack,
    useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { PORTFOLIO_DATA } from "../../data/portfolioData.js";
import { useDisclosure } from "@mantine/hooks";

export default function Navbar() {
    const [opened, { toggle, close }] = useDisclosure(false);
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const isDark = colorScheme === "dark";

    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid var(--mantine-color-default-border)",
            }}
        >
            <Container size="lg" h={60}>
                <Group justify="space-between" h="100%">
                    <Button
                        variant="subtle"
                        color="blue"
                        component="a"
                        href="#home"
                        fw={800}
                        size="lg"
                        px={0}
                    >
                        {PORTFOLIO_DATA.profile.name}
                    </Button>

                    {/* Navigasi Layar Lebar */}
                    <Group gap="xs" visibleFrom="md">
                        {PORTFOLIO_DATA.navLinks.map((item) => (
                            <Button
                                key={item.label}
                                component="a"
                                href={item.href}
                                variant="subtle"
                                c="dimmed"
                                size="sm"
                            >
                                {item.label}
                            </Button>
                        ))}
                        <ActionIcon
                            onClick={toggleColorScheme}
                            variant="default"
                            size="lg"
                            radius="md"
                        >
                            {isDark ? (
                                <IconSun size={18} />
                            ) : (
                                <IconMoon size={18} />
                            )}
                        </ActionIcon>
                    </Group>

                    {/* Navigasi Layar Mobile */}
                    <Group hiddenFrom="md">
                        <ActionIcon
                            onClick={toggleColorScheme}
                            variant="default"
                            size="md"
                        >
                            {isDark ? (
                                <IconSun size={16} />
                            ) : (
                                <IconMoon size={16} />
                            )}
                        </ActionIcon>
                        <Burger opened={opened} onClick={toggle} size="sm" />
                    </Group>
                </Group>
            </Container>

            <Drawer
                opened={opened}
                onClose={close}
                size="xs"
                padding="md"
                title="Navigation"
            >
                <Stack gap="sm">
                    {PORTFOLIO_DATA.navLinks.map((item) => (
                        <Button
                            key={item.label}
                            component="a"
                            href={item.href}
                            variant="light"
                            color="blue"
                            justify="flex-start"
                            onClick={close}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Stack>
            </Drawer>
        </header>
    );
}
