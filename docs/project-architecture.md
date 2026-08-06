# Project Varenya

# Software Architecture

Version: 1.0

---

# Architecture Philosophy

The application should be modular.

Every major feature should live independently.

No giant files.

No giant components.

No duplicated logic.

Every folder should have one clear responsibility.

---

# Overall Architecture

Next.js App Router

↓

Experience Manager

↓

Scene Manager

↓

Scene Components

↓

Reusable UI Components

↓

Animation Layer

↓

Three.js Layer

↓

Audio Layer

↓

Utilities

---

# High Level Structure

src/

    app/

    components/

    scenes/

    three/

    animations/

    hooks/

    providers/

    services/

    assets/

    lib/

    utils/

    config/

    constants/

    types/

---

# Scene Architecture

Each scene lives independently.

Example:

scenes/

    invitation/

    gift/

    magical-world/

    wishing-tree/

    birthday/

    letter/

    finale/

Each scene contains:

index.tsx

styles.ts

animations.ts

config.ts

types.ts

hooks.ts

assets.ts

---

# Component Architecture

Reusable Components

Button

GlassCard

FloatingParticles

MagicCursor

Lantern

Butterfly

Fireflies

Stars

Confetti

AudioPlayer

PageTransition

Everything reusable.

Nothing scene-specific.

---

# Three.js Architecture

three/

    camera/

    lights/

    materials/

    particles/

    environments/

    postprocessing/

    loaders/

    shaders/

Every feature should be isolated.

---

# GSAP Architecture

animations/

    masterTimeline.ts

    sceneTimelines.ts

    transitions.ts

    textAnimations.ts

    cameraAnimations.ts

    particleAnimations.ts

No animation logic inside components.

---

# Providers

Theme Provider

Audio Provider

Scene Provider

Animation Provider

Performance Provider

Cursor Provider

Everything centralized.

---

# State Management

Prefer:

React Context

Local Component State

Minimal Global State

Avoid unnecessary complexity.

---

# Asset Organization

assets/

    images/

    models/

    textures/

    music/

    sounds/

    icons/

    fonts/

Everything organized.

---

# Scene Lifecycle

Every scene follows:

Initialize

↓

Load Assets

↓

Play Intro

↓

Enable Interaction

↓

Wait for User

↓

Play Exit Animation

↓

Dispose Assets

↓

Load Next Scene

---

# Lazy Loading

Every heavy scene should load only when needed.

Three.js models

Textures

Music

Large animations

Must all be lazy loaded.

---

# Camera System

One reusable camera controller.

Scenes only define:

Start Position

End Position

Movement

Rotation

Focus Target

No duplicated camera code.

---

# Lighting System

Global lighting manager.

Each scene provides:

Environment

Intensity

Color

Fog

Bloom

Exposure

---

# Audio System

Single audio manager.

Supports:

Background Music

Ambient Loops

One-shot Sounds

Volume

Mute

Crossfade

---

# Performance Manager

Automatically detect:

Desktop

Tablet

Mobile

Reduce:

Particles

Bloom

Shadow Quality

Post Processing

Based on device capability.

---

# Error Handling

Every scene should fail gracefully.

If one asset fails,

the experience should continue.

Never show a broken page.

---

# Naming Conventions

Components

PascalCase

Hooks

camelCase

Folders

kebab-case

Constants

UPPER_CASE

Types

PascalCase

---

# Code Quality Rules

Strict TypeScript

Reusable Hooks

No Inline Styles

No Magic Numbers

Proper Comments

Consistent Imports

---

# Final Rule

The architecture should allow adding, removing, or rearranging scenes without affecting the rest of the application.

Every system should be modular, predictable, reusable, and production-ready.