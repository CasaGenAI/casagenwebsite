# CasaGen Design Guidelines

## Design Approach
**Reference-Based:** Modern SaaS platforms (Linear, Notion, Stripe) with real estate industry credibility. Professional, conversion-focused design emphasizing trust and technological sophistication.

## Core Design Principles
- **Video-First Storytelling:** Auto-playing demo video as primary hero visual
- **Narrative Scroll:** Progressive value reveal through distinct sections
- **Conversion Clarity:** Unmistakable CTAs at strategic touchpoints
- **Professional Trust:** Real estate industry credibility with modern tech polish

## Color Palette

**Primary Brand Colors:**
- Primary: 220 70% 45% (Professional blue - trust, technology)
- Primary Dark: 220 75% 35% (Depth, CTAs)
- Background: 0 0% 100% (Clean white)
- Surface: 220 15% 97% (Subtle gray backgrounds)

**Accent & Supporting:**
- Success Green: 142 70% 45% (Investment scores, positive metrics)
- Warning Amber: 38 92% 50% (Alert badges, hot leads)
- Text Primary: 220 15% 15% (Dark charcoal)
- Text Secondary: 220 10% 50% (Mid gray)

**Dark Mode:**
- Background: 220 20% 8%
- Surface: 220 18% 12%
- Text Primary: 220 15% 95%

## Typography

**Font Families:**
- Headings: Inter (600-700 weight) - modern, professional SaaS aesthetic
- Body: Inter (400-500 weight) - optimal readability
- Code/Data: JetBrains Mono - technical elements, property IDs

**Scale:**
- Hero H1: text-6xl lg:text-7xl (72-80px) - bold, immediate impact
- Section Headlines: text-4xl lg:text-5xl (48-60px) - clear hierarchy
- Feature Titles: text-2xl lg:text-3xl (30-36px)
- Body: text-base lg:text-lg (16-18px)
- Small/Meta: text-sm (14px)

## Layout System

**Spacing Units:** Consistent use of 4, 8, 12, 16, 20, 24, 32 (Tailwind: p-4, p-8, p-12, etc.)

**Container Strategy:**
- Hero/Full-width: w-full with max-w-7xl inner container
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-prose

**Section Padding:**
- Desktop: py-20 to py-32
- Mobile: py-12 to py-16
- Consistent vertical rhythm throughout

**Grid Patterns:**
- Feature sections: Two-column alternating (text/visual flip)
- Social proof logos: Grid-cols-3 md:grid-cols-6 (responsive logo bar)
- Testimonials: Grid-cols-1 md:grid-cols-3 (card layout)
- Footer: Grid-cols-2 md:grid-cols-4

## Component Specifications

### Navigation
- Fixed/sticky header with backdrop blur
- Logo: CasaGen wordmark + teacup tamarin icon
- Links: Features | Pricing | Blog (text-base, hover underline)
- Buttons: "Log In" (ghost/outline), "Start Free Trial" (primary solid)
- Mobile: Hamburger menu, full-screen overlay

### Hero Section (Section 1)
- Height: min-h-screen (full viewport impact)
- **Video Integration:** Auto-playing demo video (muted, loop) showing AI chat and property analysis - 16:9 aspect ratio, rounded corners (rounded-2xl), subtle shadow
- Headline: text-6xl lg:text-7xl, font-bold, max-w-4xl
- Sub-headline: text-xl lg:text-2xl, text-secondary, max-w-3xl
- CTA Layout: Flex row with gap-4, primary + secondary buttons
- Background: Subtle gradient overlay (white to light blue tint)

### Social Proof Bar (Section 2)
- Headline: text-sm uppercase tracking-wide text-secondary
- Logo treatment: Grayscale filter with hover color, height-12
- Infinite horizontal scroll animation (optional enhancement)

### Feature Sections (3, 4, 5)
**Two-Column Alternating Layout:**
- Section 3: Text left, visual right
- Section 4: Visual left, text right  
- Section 5: Text left, visual right

**Structure per feature:**
- Headline: text-4xl lg:text-5xl font-bold
- Description: text-lg lg:text-xl max-w-xl
- Checklist: List with checkmark icons (success green), text-base
- Visual: Rounded container (rounded-2xl) with shadow-xl, demo GIF/video or composite screenshot

### Testimonials (Section 6)
**Card Design:**
- Background: Surface color with border
- Quote: text-lg italic with quote marks
- Photo: Circular avatar (w-16 h-16 rounded-full)
- Name: font-semibold
- Title: text-sm text-secondary
- Spacing: p-8, gap-6 between elements

### Final CTA (Section 7)
- Full-width centered section with primary color gradient background
- Text: White on gradient
- Headline: text-5xl font-bold
- Button: Large size (px-10 py-5), high contrast white background
- Sub-text: "No credit card required" - text-sm opacity-90

### Footer (Section 8)
- Background: Dark surface (bg-gray-900 dark mode style)
- Four-column grid (responsive to single column mobile)
- Link styling: text-gray-400 hover:text-white transition
- Bottom bar: Copyright, social icons (LinkedIn, Twitter, YouTube)

## Mascot Integration

**Teacup Tamarin Usage:**
- Navigation logo: Small icon (h-8) next to wordmark
- Loading states: Animated GIF tamarin-generating-report (use provided asset)
- Empty states: Tamarin-default-spinner (use provided asset)
- 404 page: Large tamarin illustration with playful messaging
- Subtle: Small tamarin icon in footer tagline

## Animation Strategy

**Minimal, Purposeful Motion:**
- Scroll-triggered fade-ins: Opacity 0 to 100, translateY 20px to 0
- Hero video: Smooth autoplay with fade-in
- Button hovers: Scale 1.02, subtle shadow increase
- Nav scroll: Backdrop blur + shadow on scroll
- NO: Parallax effects, excessive scroll animations, distracting motion

## Images

**Video Assets:**
- Hero: Full demo video showing platform walkthrough (16:9, high quality)
- Feature visuals: GIF clips from casagen.mp4 showing specific features in action

**Static Images:**
- Brokerage logos: SVG format, consistent sizing, grayscale with color on hover
- Testimonial photos: Professional headshots, circular crop, consistent sizing
- Feature screenshots: Actual product UI, crisp resolution, contextual framing

**No custom illustrations needed** - product screenshots and video provide authenticity

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (reduced columns, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Adjustments:**
- Hero video: Reduce height, ensure playback works on mobile
- Feature sections: Stack text above visual
- Testimonials: Single column carousel
- Footer: Single column stack
- CTA buttons: Full width on mobile

## Conversion Optimization

**CTA Hierarchy:**
- Primary: "Start Free Trial" - always prominent, consistent styling
- Secondary: "Request Demo" - outline style, less visual weight
- Tertiary: "Log In" - ghost/text style for existing users

**Trust Signals:**
- "14-day free trial" messaging
- "No credit card required" under CTAs
- Real brokerage logos (Compass, Keller Williams, RE/MAX, eXp)
- Customer testimonials with real names, titles, locations
- Investment/risk score visualizations in product screenshots