'use client';

import React, { useState } from 'react';
import {
  PageWrapper,
  Container,
  Section,
  Grid,
  Stack,
  Flex,
  Spacer,
  Display,
  Heading,
  Title,
  Subtitle,
  Body,
  Caption,
  Handwriting,
  Quote,
  Surface,
  GlassCard,
  FeatureCard,
  ContentCard,
  OverlayCard,
  MagicCard,
  AnimatedBorderCard,
  Button,
  IconButton,
  FloatingActionButton,
  ButtonGroup,
  TextInput,
  Slider,
  Toggle,
  VolumeSlider,
  Icon,
  VolumeIcon,
  MuteIcon,
  FullscreenIcon,
  ReplayIcon,
  ContinueIcon,
  HomeIcon,
  ChevronIcon,
  CloseIcon,
  CheckIcon,
  Divider,
  GradientDivider,
  GlassSeparator,
  GlowDot,
  Badge,
  Chip,
  Modal,
  Fade,
  Reveal,
  Scale,
} from '@/components/ui';

export default function DesignSystemPlayground() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toggleState, setToggleState] = useState(true);
  const [sliderVal, setSliderVal] = useState(70);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <PageWrapper>
      <Container maxWidth="xl" className="py-12">
        <Stack spacing="xl">
          {/* Header Section */}
          <Section padding="sm">
            <Stack spacing="sm" align="start">
              <Badge variant="gold">Phase 2 — Production Design System</Badge>
              <Display gradient="gold">Design System Playground</Display>
              <Subtitle>
                A unified showcase of luxury primitives, typography, surfaces, buttons, inputs, icons, overlays, and decorative components powering Project Varenya.
              </Subtitle>
            </Stack>
          </Section>

          <GradientDivider />

          {/* Typography Section */}
          <Section padding="sm">
            <Stack spacing="md">
              <Heading level={2} font="garamond" gradient="gold">
                1. Typography System
              </Heading>
              <Grid cols={2} gap="lg">
                <Surface variant="glass" className="p-6">
                  <Stack spacing="sm">
                    <Caption>Headings & Displays</Caption>
                    <Heading level={1}>Heading Level 1</Heading>
                    <Heading level={2} gradient="rose">Heading Level 2 Gradient</Heading>
                    <Heading level={3}>Heading Level 3</Heading>
                    <Title level={1}>Title Garamond</Title>
                    <Subtitle>Subtitle font sans lead styling</Subtitle>
                  </Stack>
                </Surface>
                <Surface variant="glass" className="p-6">
                  <Stack spacing="sm">
                    <Caption>Body & Handwriting</Caption>
                    <Body variant="body">
                      Standard body copy rendered with Inter typography, optimized for legibility and smooth line height.
                    </Body>
                    <Body variant="muted">
                      Muted body copy for secondary descriptions and metadata hints.
                    </Body>
                    <Handwriting>Handwritten Accent — For Someone Special</Handwriting>
                    <Quote author="Project Varenya">
                      Luxury is the harmony of emotion, simplicity, and attention to detail.
                    </Quote>
                  </Stack>
                </Surface>
              </Grid>
            </Stack>
          </Section>

          <GlassSeparator />

          {/* Buttons Section */}
          <Section padding="sm">
            <Stack spacing="md">
              <Heading level={2} font="garamond" gradient="gold">
                2. Button System
              </Heading>
              <Stack spacing="sm">
                <Caption>Button Variants & Sizes</Caption>
                <ButtonGroup spacing="md">
                  <Button variant="primary" size="md">
                    Primary Button
                  </Button>
                  <Button variant="secondary" size="md">
                    Secondary Button
                  </Button>
                  <Button variant="glass" size="md">
                    Glass Button
                  </Button>
                  <Button variant="ghost" size="md">
                    Ghost Button
                  </Button>
                  <Button variant="primary" isLoading size="md">
                    Loading
                  </Button>
                </ButtonGroup>
                <Spacer size="sm" />
                <Caption>Icon Buttons & Action Triggers</Caption>
                <Flex align="center" gap="md">
                  <IconButton icon={<VolumeIcon />} aria-label="Volume" variant="glass" />
                  <IconButton icon={<FullscreenIcon />} aria-label="Fullscreen" variant="primary" />
                  <IconButton icon={<HomeIcon />} aria-label="Home" variant="secondary" />
                  <IconButton icon={<ReplayIcon />} aria-label="Replay" variant="ghost" />
                  <Button variant="primary" leftIcon={<ContinueIcon />}>
                    Continue Journey
                  </Button>
                  <Button variant="glass" onClick={() => setModalOpen(true)}>
                    Open Modal Showcase
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Section>

          <GlassSeparator />

          {/* Surface & Card System */}
          <Section padding="sm">
            <Stack spacing="md">
              <Heading level={2} font="garamond" gradient="gold">
                3. Surface & Card System
              </Heading>
              <Grid cols={3} gap="lg">
                <GlassCard>
                  <Heading level={3} size="h4">Glass Card</Heading>
                  <Body variant="muted" className="mt-2">
                    Translucent backdrop blur container with glass borders and subtle ambient shadow.
                  </Body>
                </GlassCard>

                <FeatureCard
                  icon={<GlowDot color="gold" size="lg" />}
                  title="Feature Card"
                  description="Elevated card designed for highlighting core experiences and interactive callouts."
                />

                <MagicCard>
                  <Heading level={3} size="h4" gradient="gold">Magic Card</Heading>
                  <Body variant="muted" className="mt-2">
                    Luxury gradient aura backdrop designed for key cinematic interactive moments.
                  </Body>
                </MagicCard>

                <ContentCard>
                  <Heading level={3} size="h4">Content Card</Heading>
                  <Body variant="muted" className="mt-2">
                    Clean solid surface for structured content presentation.
                  </Body>
                </ContentCard>

                <OverlayCard>
                  <Heading level={3} size="h4">Overlay Card</Heading>
                  <Body variant="muted" className="mt-2">
                    Deep charcoal overlay surface formatted for floating dialogs.
                  </Body>
                </OverlayCard>

                <AnimatedBorderCard>
                  <Heading level={3} size="h4" gradient="rose">Animated Border</Heading>
                  <Body variant="muted" className="mt-2">
                    Card featuring animated gold accent border glow.
                  </Body>
                </AnimatedBorderCard>
              </Grid>
            </Stack>
          </Section>

          <GlassSeparator />

          {/* Input System */}
          <Section padding="sm">
            <Stack spacing="md">
              <Heading level={2} font="garamond" gradient="gold">
                4. Input & Control System
              </Heading>
              <Grid cols={2} gap="lg">
                <Surface variant="glass" className="p-6">
                  <Stack spacing="md">
                    <TextInput label="Recipient Name" placeholder="Enter name..." defaultValue="Varenya" />
                    <TextInput label="Custom Message" placeholder="Type a message..." error="" helperText="Optional custom greeting" />
                  </Stack>
                </Surface>

                <Surface variant="glass" className="p-6">
                  <Stack spacing="md">
                    <Toggle label="Enable Sound Effects" checked={toggleState} onChange={setToggleState} />
                    <Slider label={`Intensity Level (${sliderVal}%)`} value={sliderVal} onChange={(e) => setSliderVal(Number(e.target.value))} />
                    <div>
                      <Caption className="mb-2 block">Volume Control Component</Caption>
                      <VolumeSlider
                        volume={volume}
                        isMuted={isMuted}
                        onVolumeChange={setVolume}
                        onToggleMute={() => setIsMuted(!isMuted)}
                      />
                    </div>
                  </Stack>
                </Surface>
              </Grid>
            </Stack>
          </Section>

          <GlassSeparator />

          {/* Decorative & Icons */}
          <Section padding="sm">
            <Stack spacing="md">
              <Heading level={2} font="garamond" gradient="gold">
                5. Decorative Components & Icon Suite
              </Heading>
              <Surface variant="glass" className="p-6">
                <Stack spacing="md">
                  <Flex align="center" gap="md">
                    <GlowDot color="gold" size="lg" />
                    <GlowDot color="rose" size="lg" />
                    <GlowDot color="emerald" size="lg" />
                    <GlowDot color="lavender" size="lg" />
                    <Badge variant="gold">Gold Badge</Badge>
                    <Badge variant="rose">Rose Badge</Badge>
                    <Badge variant="emerald">Emerald Badge</Badge>
                    <Badge variant="glass">Glass Badge</Badge>
                    <Chip clickable>Interactive Chip</Chip>
                    <Chip onRemove={() => {}}>Dismissible Chip</Chip>
                  </Flex>
                  <Divider />
                  <Flex align="center" gap="lg" className="text-[#d4af37]">
                    <Icon size="lg"><VolumeIcon /></Icon>
                    <Icon size="lg"><MuteIcon /></Icon>
                    <Icon size="lg"><FullscreenIcon /></Icon>
                    <Icon size="lg"><ReplayIcon /></Icon>
                    <Icon size="lg"><ContinueIcon /></Icon>
                    <Icon size="lg"><HomeIcon /></Icon>
                    <Icon size="lg"><ChevronIcon /></Icon>
                    <Icon size="lg"><CloseIcon /></Icon>
                    <Icon size="lg"><CheckIcon /></Icon>
                  </Flex>
                </Stack>
              </Surface>
            </Stack>
          </Section>

          {/* Motion Architecture Wrapper Demo */}
          <Section padding="sm">
            <Stack spacing="md">
              <Heading level={2} font="garamond" gradient="gold">
                6. Motion Architecture Wrappers (Ready for GSAP)
              </Heading>
              <Grid cols={3} gap="md">
                <Fade><Surface variant="glass" className="p-4 text-center">Fade Wrapper</Surface></Fade>
                <Reveal><Surface variant="glass" className="p-4 text-center">Reveal Wrapper</Surface></Reveal>
                <Scale><Surface variant="glass" className="p-4 text-center">Scale Wrapper</Surface></Scale>
              </Grid>
            </Stack>
          </Section>
        </Stack>
      </Container>

      {/* Floating Action Button */}
      <FloatingActionButton position="bottom-right" onClick={() => setModalOpen(true)}>
        Demo Action
      </FloatingActionButton>

      {/* Modal Component Showcase */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Luxury Modal Component">
        <Stack spacing="md">
          <Body>
            This modal is rendered via client-side Portal architecture with focus trapping, Escape key handling, and backdrop blur.
          </Body>
          <Flex justify="end" gap="sm">
            <Button variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Confirm Action
            </Button>
          </Flex>
        </Stack>
      </Modal>
    </PageWrapper>
  );
}
