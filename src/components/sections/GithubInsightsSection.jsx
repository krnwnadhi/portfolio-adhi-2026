import {
    Anchor,
    Badge,
    Container,
    Group,
    Paper,
    SimpleGrid,
    Skeleton,
    Text,
    ThemeIcon,
    useMantineColorScheme,
} from "@mantine/core";
import {
    IconBrandGithub,
    IconExternalLink,
    IconFolderCode,
    IconStar,
    IconUsers,
} from "@tabler/icons-react";

import { GitHubCalendar } from "react-github-calendar";
import { PORTFOLIO_DATA } from "../../data/portfolioData.js";
import RevealOnScroll from "../common/RevealOnScroll.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import { useGithubData } from "../../hooks/useGithubData.js";

export default function GithubInsightsSection() {
    const { colorScheme } = useMantineColorScheme();
    const username = PORTFOLIO_DATA.githubUsername;
    const { profile, repos, loading } = useGithubData(username);

    const themeGraph = {
        light: ["#ebedf0", "#9ae6b4", "#48bb78", "#38a169", "#22543d"],
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    };

    const statItems = [
        {
            label: "Public Repositories",
            val: profile?.public_repos ?? 0,
            icon: IconFolderCode,
        },
        {
            label: "Followers / Network",
            val: profile?.followers ?? 0,
            icon: IconUsers,
        },
    ];

    return (
        <section id="github" style={{ padding: "4rem 0" }}>
            <Container size="lg">
                <SectionTitle
                    title="GitHub Insights"
                    subtitle={`Real-time contribution activity, open source metrics, and active repositories from @${username}.`}
                />

                {/* Metrik Statistik */}
                <RevealOnScroll direction="left" delay={0.3}>
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb="xl">
                        {statItems.map((item) => (
                            <Paper
                                key={item.label}
                                p="lg"
                                radius="md"
                                withBorder
                            >
                                <Group>
                                    <ThemeIcon
                                        size={44}
                                        radius="md"
                                        color="blue"
                                        variant="light"
                                    >
                                        <item.icon size={22} />
                                    </ThemeIcon>
                                    <div>
                                        <Text size="xs" c="dimmed">
                                            {item.label}
                                        </Text>
                                        {loading ? (
                                            <Skeleton
                                                height={24}
                                                width={50}
                                                mt={4}
                                            />
                                        ) : (
                                            <Text fw={700} size="xl">
                                                {item.val}
                                            </Text>
                                        )}
                                    </div>
                                </Group>
                            </Paper>
                        ))}
                    </SimpleGrid>
                </RevealOnScroll>

                {/* Heatmap */}
                <RevealOnScroll direction="left" delay={0.3}>
                    <Paper
                        p="xl"
                        radius="md"
                        withBorder
                        mb="xl"
                        style={{ overflowX: "auto" }}
                    >
                        <Group justify="space-between" mb="md">
                            <Group gap="xs">
                                <IconBrandGithub size={20} />
                                <Text fw={700} size="md">
                                    Annual Contribution Graph
                                </Text>
                            </Group>
                            <Anchor
                                href={`https://github.com/${username}`}
                                target="_blank"
                                size="xs"
                                c="blue"
                            >
                                View GitHub Profile →
                            </Anchor>
                        </Group>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                minWidth: "720px",
                            }}
                        >
                            <GitHubCalendar
                                username={username}
                                colorScheme={
                                    colorScheme === "dark" ? "dark" : "light"
                                }
                                theme={themeGraph}
                                blockSize={13}
                                blockMargin={4}
                                fontSize={12}
                            />
                        </div>
                    </Paper>
                </RevealOnScroll>

                {/* Repositori Terakhir Diperbarui */}
                <Text fw={700} size="lg" mb="md">
                    Recently Pushed Repositories
                </Text>
                <RevealOnScroll direction="left" delay={0.3}>
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                        {loading
                            ? Array(4)
                                  .fill(0)
                                  .map((_, i) => (
                                      <Skeleton
                                          key={i}
                                          height={105}
                                          radius="md"
                                      />
                                  ))
                            : repos.map((repo) => (
                                  <Paper
                                      key={repo.id}
                                      p="md"
                                      radius="md"
                                      withBorder
                                      component="a"
                                      href={repo.html_url}
                                      target="_blank"
                                      style={{ textDecoration: "none" }}
                                  >
                                      <Group justify="space-between" mb={4}>
                                          <Text
                                              fw={600}
                                              size="sm"
                                              c="blue"
                                              lineClamp={1}
                                          >
                                              {repo.name}
                                          </Text>
                                          <IconExternalLink
                                              size={14}
                                              color="gray"
                                          />
                                      </Group>
                                      <Text
                                          size="xs"
                                          c="dimmed"
                                          lineClamp={2}
                                          mb="xs"
                                      >
                                          {repo.description ||
                                              "No description provided."}
                                      </Text>
                                      <Group justify="space-between">
                                          <Badge
                                              size="xs"
                                              variant="light"
                                              color="blue"
                                          >
                                              {repo.language || "Code"}
                                          </Badge>
                                          <Group gap={4}>
                                              <IconStar
                                                  size={13}
                                                  color="orange"
                                              />
                                              <Text size="xs" c="dimmed">
                                                  {repo.stargazers_count}
                                              </Text>
                                          </Group>
                                      </Group>
                                  </Paper>
                              ))}
                    </SimpleGrid>
                </RevealOnScroll>
            </Container>
        </section>
    );
}
