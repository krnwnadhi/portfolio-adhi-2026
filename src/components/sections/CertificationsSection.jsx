import {
    Badge,
    Card,
    Container,
    Image,
    Modal,
    SimpleGrid,
    Text,
} from "@mantine/core";

import { PORTFOLIO_DATA } from "../../data/portfolioData.js";
import RevealOnScroll from "../common/RevealOnScroll.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import { useState } from "react";

export default function CertificationsSection() {
    const [activeCert, setActiveCert] = useState(null);

    return (
        <section id="certifications" style={{ padding: "4rem 0" }}>
            <Container size="lg">
                <SectionTitle
                    title="Licenses & Certifications"
                    subtitle="Verified industry credentials and professional technical certifications."
                />

                <RevealOnScroll direction="left" delay={0.3}>
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                        {PORTFOLIO_DATA.certifications.map((cert) => (
                            <Card
                                key={cert.id}
                                padding="md"
                                radius="md"
                                withBorder
                                className="hover-lift"
                            >
                                <Card.Section style={{ overflow: "hidden" }}>
                                    <Image
                                        src={cert.image}
                                        height={200}
                                        alt={cert.title}
                                        style={{
                                            cursor: "pointer",
                                            transition: "transform 0.3s ease",
                                        }}
                                        onClick={() => setActiveCert(cert)}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.transform =
                                                "scale(1.04)")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.transform =
                                                "scale(1)")
                                        }
                                    />
                                </Card.Section>

                                <Text fw={700} size="md" mt="md">
                                    {cert.title}
                                </Text>
                                <Badge
                                    color="blue"
                                    variant="light"
                                    mt="xs"
                                    mb="md"
                                >
                                    {cert.date}
                                </Badge>
                            </Card>
                        ))}
                    </SimpleGrid>
                </RevealOnScroll>

                {/* Modal Lightbox Sertifikat */}
                <Modal
                    opened={Boolean(activeCert)}
                    onClose={() => setActiveCert(null)}
                    title={activeCert?.title}
                    size="lg"
                    centered
                >
                    {activeCert && (
                        <>
                            <Image src={activeCert.image} radius="md" />
                        </>
                    )}
                </Modal>
            </Container>
        </section>
    );
}
