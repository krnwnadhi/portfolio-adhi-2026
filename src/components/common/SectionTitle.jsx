import { Stack, Text, Title } from "@mantine/core";

export default function SectionTitle({ title, subtitle }) {
    return (
        <Stack align="center" gap="xs" mb="xl">
            <Title order={2} fw={800} style={{ letterSpacing: "-0.5px" }}>
                {title}
            </Title>
            {subtitle && (
                <Text c="dimmed" size="md" maw={640} ta="center">
                    {subtitle}
                </Text>
            )}
        </Stack>
    );
}
