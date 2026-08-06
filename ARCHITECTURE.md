# Project Varenya Architecture Documentation

Version: 4.0  
Status: Phase 4 Shared Experience Systems Complete

---

## 1. Folder Tree

```text
src/
├── app/
│   ├── design-system/
│   │   └── page.tsx
│   ├── fonts.ts
│   ├── layout.tsx
│   └── page.tsx               <-- Renders <Experience /> master root
├── animations/                 <-- GSAP Animation Architecture & Motion Presets
│   ├── AnimationContext.tsx
│   ├── AnimationProvider.tsx
│   ├── controller.ts
│   ├── index.ts
│   ├── masterTimeline.ts
│   ├── MasterExperienceTimeline.ts
│   ├── presets/
│   └── registry.ts
├── components/
│   ├── ErrorBoundary.tsx
│   ├── index.ts
│   ├── loading/                <-- PreloaderExperience & LoadingOverlay
│   └── ui/                     <-- Design System & Text Effects (Phase 2 & 4)
│       └── typography/effects/ <-- LetterReveal, WordReveal, Typewriter, GlowText, SplitText
├── config/
│   ├── assets.ts              <-- Central Assets Manifest
│   ├── env.ts
│   ├── experience.ts          <-- Central Experience Configuration
│   ├── index.ts
│   ├── site.ts
│   └── tokens.ts
├── experience/                 <-- Master Orchestration Engine
│   ├── accessibility/         <-- AccessibilityManager (Reduced motion, high contrast)
│   ├── director/              <-- Director, SceneDirector, CameraDirector, AudioDirector, TransitionDirector
│   ├── presets/               <-- EmotionPresets (Wonder, Magic, Romantic, Dream, Peaceful, Celebration)
│   └── state/                 <-- ExperienceStateMachine & SaveResumeManager
├── features/
├── hooks/                      <-- Custom Hooks Suite
├── providers/
├── scenes/
├── styles/
├── three/                      <-- 3D Experience Engine & Shared Systems
│   ├── audio/                 <-- AudioEngine, MusicBus, SFXBus, AmbientBus
│   ├── camera/                <-- CameraRig, PhotoModeManager
│   ├── debug/                 <-- DebugControls, DebugProfiler
│   ├── effects/               <-- MasterEffectRegistry & Effect Profiles (cinematic, magic, romantic, minimal)
│   ├── environment/           <-- EnvironmentManager, WindSystem
│   ├── events/                <-- EventBus, InteractionManager, PointerManager, KeyboardManager, GestureManager
│   ├── lighting/              <-- LightingManager
│   ├── loaders/               <-- AssetLoader, Preloader, LoadingManager, AssetQueue
│   ├── materials/             <-- GlassMaterial, CrystalMaterial, GoldMaterial, RoseGoldMaterial, MagicMaterial, GlowMaterial
│   ├── particles/             <-- GPU ParticleEngine (Fireflies, FloatingDust, Sparkles, Petals, Stars, MagicOrbs, Bokeh)
│   ├── performance/           <-- PerformanceEngine & MobilePerformanceController
│   ├── postprocessing/        <-- PostProcessingPipeline & ColorGradingManager
│   ├── renderer/              <-- RendererManager
│   ├── resources/             <-- ResourceManager & ResourceGarbageCollector
│   ├── root/                  <-- CanvasRoot & Experience master layout
│   ├── runtime/               <-- SceneRuntime & ExperienceScene interface
│   ├── shaders/               <-- GLSL Shader Library (glow, gradient, fresnel, noise, dissolve, softEdge, aurora, glass)
│   ├── transition/            <-- TransitionManager
│   └── world/                 <-- World (Scene Graph container)
└── types/
```

---

## 2. Reusable Engine Core Principle

Every system created in Phase 4 is **story-independent, modular, performance-adaptive, and completely reusable**. Zero birthday-specific visuals, text content, personal assets, or scene animations are embedded inside the shared experience core.
