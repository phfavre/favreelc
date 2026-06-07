# Planning Guide

A sophisticated, educational consulting website that builds trust and credibility while showcasing professional development services for early childhood educators in Washington State.

**Experience Qualities**:
1. **Professional yet Approachable** - The site should feel authoritative and credible while remaining warm and inviting, reflecting the human-centered nature of education.
2. **Clear and Purposeful** - Information should be organized intuitively with a clear path from discovery to action, helping educators quickly understand offerings and next steps.
3. **Inspiring and Growth-Oriented** - The design should evoke the transformative power of quality education and professional development, motivating educators to invest in their growth.

**Complexity Level**: Content Showcase (information-focused) - This is a professional services website presenting expertise, services, and establishing credibility with a clear call-to-action for booking or inquiries.

## Essential Features

**Hero Section with Value Proposition**
- Functionality: Immediately communicates the core value and establishes credibility
- Purpose: Captures attention and sets professional tone while inviting exploration
- Trigger: Page load
- Progression: Eye-catching headline → Professional subtitle → State-approved trainer badge → CTA button
- Success criteria: Visitors understand the offering within 3 seconds and feel compelled to explore

**About Section with Professional Bio**
- Functionality: Presents credentials, experience, and educational philosophy
- Purpose: Builds trust through international experience and academic credentials while highlighting practical approach
- Trigger: Scroll to section or navigation click
- Progression: Credentialing snapshot → International experience highlight → Educational philosophy → Personal approach to training
- Success criteria: Educators feel confident in the consultant's expertise and teaching methodology

**Services/Workshops Showcase**
- Functionality: Displays all five workshop offerings with expandable details
- Purpose: Helps educators identify relevant training for their needs and understand STARS eligibility
- Trigger: Scroll to section or navigation click
- Progression: Service overview → Workshop cards → Expand for full details → STARS hours badge visible
- Success criteria: Educators can quickly scan topics and dive deep into workshops of interest

**Resources Section with Downloadable Materials**
- Functionality: Showcases free downloadable resources for early childhood educators
- Purpose: Provides value to visitors and establishes expertise while encouraging workshop bookings
- Trigger: Scroll to section or navigation click
- Progression: View resource cards → Read descriptions → Click download button → Access materials (or learn about workshop-exclusive resources)
- Success criteria: Educators find valuable tools and understand the additional benefits of workshop participation

**Contact/Inquiry Form**
- Functionality: Enables educators or administrators to request information or book training
- Purpose: Converts interest into actionable leads
- Trigger: CTA button click throughout page
- Progression: Click CTA → Form appears (modal or section) → Fill details (name, organization, workshop interest, message) → Submit → Confirmation
- Success criteria: Low-friction submission with clear next steps communicated

**Sticky Navigation**
- Functionality: Provides quick access to all major sections
- Purpose: Improves usability and keeps CTAs accessible
- Trigger: Always visible or appears on scroll
- Progression: Scroll down → Nav becomes sticky → Click section link → Smooth scroll to content
- Success criteria: Users can navigate to any section within one click

## Edge Case Handling

- **Mobile responsiveness**: All sections adapt gracefully with mobile-first design, workshop cards stack vertically, resource cards stack vertically, and contact form optimizes for thumb interaction
- **Long workshop descriptions**: Use accordion/expandable cards to prevent overwhelming users while allowing deep dives
- **Resource downloads**: Display helpful message about access and availability for downloadable materials
- **Form validation**: Provide inline feedback for email format, required fields, and successful submission
- **Empty form submission**: Disable submit button until required fields are filled
- **Slow network loading**: Implement graceful loading states and skeleton screens for content

## Design Direction

The design should evoke trust, expertise, and warmth—like stepping into a thoughtfully arranged learning space. It should feel contemporary and professional without being corporate, educational without being academic, and inspiring without being overly aspirational. The aesthetic should appeal to both individual educators seeking growth and administrators making decisions for their teams.

## Color Selection

A sophisticated, educational palette with warm earth tones that feel grounded and trustworthy, accented with a fresh, hopeful color that represents growth and learning.

- **Primary Color**: Deep teal/sage (oklch(0.55 0.08 180)) - Conveys trust, growth, knowledge, and professionalism while feeling approachable
- **Secondary Colors**: Warm cream/ivory (oklch(0.96 0.01 85)) for backgrounds - Creates warmth and reduces eye strain; Soft terracotta (oklch(0.72 0.09 45)) for accents - Adds energy and approachability
- **Accent Color**: Vibrant coral-orange (oklch(0.68 0.15 35)) - Draws attention to CTAs and important elements, represents energy and action
- **Foreground/Background Pairings**: 
  - Primary Background (Warm Cream oklch(0.96 0.01 85)): Deep charcoal text (oklch(0.25 0.01 280)) - Ratio 12.8:1 ✓
  - Primary Teal (oklch(0.55 0.08 180)): White text (oklch(1 0 0)) - Ratio 5.2:1 ✓
  - Accent Coral (oklch(0.68 0.15 35)): Deep charcoal text (oklch(0.25 0.01 280)) - Ratio 5.8:1 ✓
  - Card backgrounds (White oklch(1 0 0)): Deep charcoal text (oklch(0.25 0.01 280)) - Ratio 15.1:1 ✓

## Font Selection

The typography should feel professional and refined while maintaining excellent readability for extended reading. A combination of a distinctive serif for headings (conveying expertise and tradition) paired with a clean sans-serif for body text (ensuring clarity and modern approachability).

- **Primary Font**: Crimson Pro (serif) - For headings and key messaging, conveys educational heritage and sophistication
- **Secondary Font**: Inter - For body text, UI elements, and workshop descriptions, ensures optimal readability

**Typographic Hierarchy**:
- H1 (Hero Title): Crimson Pro Bold / 48px / -0.02em letter spacing / 1.1 line height
- H2 (Section Titles): Crimson Pro SemiBold / 36px / -0.01em letter spacing / 1.2 line height
- H3 (Workshop Titles): Crimson Pro SemiBold / 24px / normal letter spacing / 1.3 line height
- Body (Paragraphs): Inter Regular / 16px / normal letter spacing / 1.6 line height
- Small (Captions, Badges): Inter Medium / 14px / 0.01em letter spacing / 1.4 line height
- Button Text: Inter SemiBold / 16px / 0.02em letter spacing

## Animations

Animations should feel purposeful and refined, enhancing the sense of a well-crafted experience. Use subtle motion to guide attention and provide feedback without creating distraction.

- **Scroll-triggered fade-ins**: Sections gently fade and slide up as they enter viewport, creating a sense of progressive revelation
- **Workshop card interactions**: Smooth hover elevation and border color changes, expand/collapse with fluid accordion animation
- **CTA button states**: Subtle scale on hover (1.02x) with smooth color transition, pressed state with slight scale down (0.98x)
- **Navigation transitions**: Smooth scroll behavior when clicking nav links, subtle background fade-in when nav becomes sticky
- **Form interactions**: Input fields gently highlight on focus with border color transition, success state with check icon fade-in
- **Badge micro-interactions**: STARS hours badge subtly pulses or gleams to draw attention without being distracting

## Component Selection

- **Components**: 
  - Card component for workshop showcase with hover states and expandable content areas
  - Button component with primary (accent coral) and secondary (outline teal) variants
  - Badge component for STARS hours eligibility indicators
  - Accordion or Collapsible for workshop details expansion
  - Dialog or Sheet for contact form modal
  - Form components (Input, Textarea, Label) for inquiry form
  - Separator for visual section breaks
  - Scroll-area for potentially long workshop descriptions if needed
  
- **Customizations**: 
  - Hero section as custom component with background pattern (subtle geometric education-themed pattern - perhaps books, circles, or grid)
  - Bio section with custom layout featuring credentials highlighted in card/badge format
  - Custom workshop card layout with icon system using Phosphor icons (Book, Users, Lightbulb, ChatCircle, ChalkboardTeacher)
  - Footer component with contact info and credentials
  
- **States**: 
  - Buttons: Default with shadow, hover with lift and color shift, active with pressed appearance, disabled with reduced opacity
  - Cards: Default with subtle border, hover with elevated shadow and border color change, expanded state showing full content
  - Form inputs: Default with light border, focus with accent border and subtle glow, error with destructive color, success with check icon
  - Navigation: Transparent initially, solid background when sticky, active section highlighted
  
- **Icon Selection**: 
  - Book (workshop materials/learning)
  - Users (collaboration/community)
  - Lightbulb (ideas/innovation) 
  - ChatCircle (communication)
  - ChalkboardTeacher (teaching)
  - GraduationCap (education/credentials)
  - Certificate (STARS hours)
  - Envelope (contact)
  - CaretDown (expand indicators)
  - DownloadSimple (resource downloads)
  - FileText (documentation templates)
  - ListChecks (checklists)
  - Article (articles/guides)
  
- **Spacing**: 
  - Section padding: py-20 (80px) on desktop, py-12 (48px) on mobile
  - Container max-width: max-w-6xl with px-6 (24px) horizontal padding
  - Card gaps: gap-6 (24px) between workshop cards
  - Content spacing: space-y-4 (16px) for related content, space-y-8 (32px) for distinct subsections
  - Button padding: px-8 py-3 for primary CTAs, px-6 py-2 for secondary
  
- **Mobile**: 
  - Navigation collapses to hamburger menu with slide-out drawer
  - Workshop cards stack vertically with full width
  - Hero text size reduces to H1: 36px, H2: 28px
  - Two-column layouts become single column
  - Contact form optimizes with larger touch targets (min 44px height for inputs)
  - Spacing reduces proportionally (section py-12 becomes py-8)
