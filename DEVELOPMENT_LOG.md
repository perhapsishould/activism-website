# Development Log: Activism Website Prototype

## Project Overview
A grassroots political activism website prototype built to rally support opposing a government-proposed bill that would reduce access to a particular resource. The site targets multiple audience segments (farmers, veterans, and civil liberties advocates) with a unified call to action.

---

## Initial Consultation & Planning

### User Requirements
- **Platform**: Fedora Linux
- **Goal**: AI-assisted prototype development viewable in browser
- **Functionality**: Superficial (forms present but non-functional, links working, visual content placeholders)
- **Key Features**:
  - Multiple pages with navigation
  - Blog functionality
  - Audio/visual content placeholders
  - Forms for community building
  - User sign-in concept (Phase 2)
  - Strong UX and design direction

### Tech Stack Selected
- **Framework**: Next.js (React-based)
- **Styling**: Tailwind CSS
- **Runtime**: Node.js
- **Package Manager**: npm
- **Version Control**: Git + GitHub

### Installation Steps Completed
```bash
sudo dnf install nodejs npm
sudo dnf install gh -y
gh auth login
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Content Strategy & Site Architecture

### Campaign Details
- **Purpose**: Rally support opposing government bill to reduce access to specific resource
- **Timeline**: Vote in one year (creates urgency)
- **Target Audiences**:
  1. **Farmers**: Economic survival concern - reduction affects cash crop, threatens livelihoods
  2. **Veterans**: Health concern - reduction forces return to prescription opioid use for pain management
  3. **Politically Conscious**: Principle concern - government overreach into personal freedoms

### Primary Goals
1. Collect user information for volunteer recruitment
2. Enable users to contact representatives
3. Provide organizing toolkits and resources
4. Build community of activists

### Site Structure (Final)
```
Homepage
├── Hero with countdown timer
├── Three audience entry points (Farmers/Veterans/Freedom)
├── Primary CTA: "Join the Cause"
└── Secondary CTA: "Contact Your Representative"

Why This Matters
├── Case against the bill
├── Timeline and urgency
└── What's at stake

Audience-Specific Pages
├── For Farmers (economic impact)
├── For Veterans (health impact)
└── For Freedom (civil liberties)

Take Action
├── Contact Your Rep (freely accessible)
└── Volunteer Signup (multi-select options)

Blog/News
├── Campaign updates
├── Supporter stories
└── Media coverage

About
├── Mission and coalition
└── Who's organizing

Contact
└── Contact form and information
```

---

## UX Strategy

### Call-to-Action Flow

**Scenario 1: Homepage Landing**
- Two equally prominent CTAs:
  - "Contact Your Rep Now" (urgent, immediate action)
  - "Join the Movement" (community building)
- User chooses their own engagement path

**Scenario 2: Contact Rep First**
- User fills contact form
- Confirmation message with upsell: "Now join thousands fighting back"
- Conversion moment for volunteer signup

**Scenario 3: Sign Up First**
- After signup confirmation: "Next step: Contact your representative"
- Guide to immediate action while motivated

### UX Best Practices Implemented
1. **Minimize friction** - Essential form fields only
2. **Mobile-first** - Responsive design prioritizing phone screens
3. **Urgency indicators** - Countdown timer, supporter numbers
4. **Social proof** - Statistics, testimonials
5. **Clear hierarchy** - 3-second clarity on landing
6. **Progress indicators** - Visual feedback on multi-step processes
7. **Confirmation & next steps** - Post-action guidance

### Unique Engagement Features
1. **Confrontational Countdown**
   - Homepage hero with large countdown to vote date
   - "365 Days to Save [Resource]"
   - Updates daily

2. **Interactive Rep Contact Tool**
   - Pre-written customizable message
   - Lower barrier than writing from scratch

3. **"The Wall" / Voices of Resistance**
   - Visual supporter count by category
   - "12,847 farmers. 8,392 veterans. 23,441 freedom fighters."

4. **Bold, Unapologetic Hero Imagery**
   - Stark, powerful imagery (not stock photos)
   - Matches confrontational tone

5. **Scrolling Testimonial Ticker**
   - Real quotes from all three audiences
   - Constant movement = urgency

---

## Design Direction

### Tone & Voice
**"Urgent and confrontational. Borderline aggressive. Protect our freedoms."**

- **Headlines**: Short, punchy, declarative
  - "They're Coming for Your Livelihood"
  - "Your Freedom Is On the Ballot"
  - "One Year to Fight Back"
- **Language**: Active voice, second person
  - "They want to..."
  - "You can stop this"
  - "We won't back down"
- **Framing**: Us vs. them, government overreach vs. citizens

### Color Palette Strategy
**Core Requirements**:
- Avoid political affiliation colors
- Professional, not casual
- Strong contrast in somewhat monochromatic palette

**Solution**:
- **Primary**: Black backgrounds (#000000)
- **Secondary**: White text (#ffffff)
- **Accents**: Multiple versions created (see Design Variants)

### Typography
- **Mix approach**: Heavy sans-serif headlines + clean serif body text
- **Weight**: Bold (700) for headings
- **Line height**: Tight (1.2) for impact
- **Letter spacing**: Tight (-0.02em)

### Photography Treatment
- Mix of black & white and full color
- Full color images: Strong saturation
- Real photographic images (not illustrated/abstract)
- Creates dynamic contrast against black backgrounds

### Design Aesthetic Summary
"Serious. Professional. High-contrast. Bold but breathing."
- Generous white space despite bold elements
- Not minimalist, not maximalist - purposeful
- Visual references: High-end tech, luxury brands, documentary films

---

## Design Variants (Git Branches)

### Branch Strategy
```
main (redirects to design-amber)
├── design-amber (Amber/Gold accent)
├── design-white (White/Inverted accent)
└── design-steel (Steel Gray accent)
```

### Variant Details

**design-amber** (Default/Primary)
- Accent: `#d97706` (amber/gold)
- Accent Hover: `#b45309`
- Character: Warm, urgent, stands out strongly
- Use case: Maximum visual impact

**design-white**
- Accent: `#ffffff` (white)
- Accent Hover: `#e5e5e5`
- Character: Clean, stark, maximum contrast
- Use case: Inverted simplicity, bold minimalism

**design-steel**
- Accent: `#9ca3af` (steel gray)
- Accent Hover: `#6b7280`
- Character: Industrial, serious, restrained
- Use case: Professional, understated authority

---

## Technical Implementation

### Project Setup
```bash
cd /home/michael/workspaces
npx create-next-app@latest activism-website \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --eslint \
  --no-react-compiler \
  --yes
```

### Git & GitHub Setup
```bash
cd activism-website
git init
git add .
git commit -m "Initial Next.js setup"
git branch -m master main
gh repo create activism-website --public --source=. --remote=origin --push
```

Repository: https://github.com/perhapsishould/activism-website

### Component Architecture

**Reusable Components** (`/components`)
1. `Header.tsx` - Fixed navigation with mobile menu
2. `Footer.tsx` - Site footer with links and social
3. `Button.tsx` - CTA buttons (primary/secondary/outline variants)
4. `Countdown.tsx` - Real-time countdown to vote date
5. `TestimonialTicker.tsx` - Auto-scrolling testimonial ribbon
6. `ContactRepForm.tsx` - Representative contact form (non-functional)
7. `VolunteerSignupForm.tsx` - Volunteer signup with multi-select (non-functional)
8. `SupporterCount.tsx` - Visual stats display

**Pages** (`/app`)
1. `page.tsx` - Homepage
2. `why-this-matters/page.tsx` - Opposition case
3. `for-farmers/page.tsx` - Farmer-focused messaging
4. `for-veterans/page.tsx` - Veteran-focused messaging
5. `for-freedom/page.tsx` - Civil liberties messaging
6. `take-action/page.tsx` - Contact rep + volunteer signup
7. `blog/page.tsx` - News and updates
8. `about/page.tsx` - Mission and coalition
9. `contact/page.tsx` - Contact form

### Styling System

**CSS Variables** (`app/globals.css`)
```css
:root {
  --background: #000000;
  --foreground: #ffffff;
  --accent: #d97706; /* Changes per branch */
  --accent-hover: #b45309;
  --gray-dark: #171717;
  --gray-medium: #404040;
  --gray-light: #a3a3a3;
}
```

**Tailwind Integration**
- Custom color tokens mapped to CSS variables
- Responsive breakpoints (sm, md, lg)
- Font families (Geist Sans, Geist Mono)

---

## Features Implemented

### Phase 1 (Current - Prototype)
- ✅ Static pages with navigation
- ✅ Placeholder forms (visible but non-functional)
- ✅ Blog page structure (6 placeholder posts)
- ✅ "Contact Your Rep" flow (form visible, doesn't submit)
- ✅ "Join the Cause" signup (form visible, doesn't submit)
- ✅ Responsive design (mobile-first)
- ✅ Social share buttons (visible, non-functional)
- ✅ Countdown timer (real-time, 1 year to vote)
- ✅ Testimonial ticker (auto-scrolling)
- ✅ Supporter count display (placeholder stats)

### Phase 2 (Future Enhancements)
- ⏳ Actual form submissions (database integration)
- ⏳ User authentication / login system
- ⏳ Gated content area for registered users
- ⏳ User profile management
- ⏳ Representative lookup tool (by ZIP code)
- ⏳ Email integration (newsletters, confirmations)
- ⏳ Donation processing (if needed)
- ⏳ CMS for blog updates
- ⏳ Analytics and tracking

---

## Development Timeline

### Session 1: Initial Setup & Planning
1. Discussed tech requirements and installation
2. Defined campaign goals and target audiences
3. Mapped site architecture and content strategy
4. Planned UX flows and engagement features
5. Determined design direction and aesthetic

### Session 2: Implementation
1. Installed dependencies (Node.js, npm, gh CLI)
2. Created Next.js project
3. Set up Git repository
4. Created GitHub repository and pushed initial commit
5. Built global styling system with CSS variables
6. Created 8 reusable components
7. Built 9 complete pages with content
8. Implemented responsive design
9. Created 3 design variant branches

### Session 3: Bug Fixes & Deployment
1. Fixed smart quote parsing error in blog page
2. Applied fix across all design branches
3. Started development server
4. Verified functionality at localhost:3000

---

## Issues Encountered & Resolutions

### Issue 1: Git Authentication
**Problem**: SSH key verification failed when pushing to GitHub
```
ssh_askpass: exec(/usr/libexec/openssh/ssh-askpass): No such file or directory
Host key verification failed.
```

**Solution**: Switched to HTTPS with GitHub CLI credential helper
```bash
gh auth setup-git
git push -u origin main
```

### Issue 2: Parsing Error with Smart Quotes
**Problem**: Next.js failed to parse blog page
```
Expected ',', got 's'
./activism-website/app/blog/page.tsx (23:79)
```

**Cause**: Smart/curly quotes in string literals (`'` instead of `'`)

**Solution**: Replaced all single quotes with double quotes in blog post data
```javascript
// Before
excerpt: 'Here's what happened...'

// After
excerpt: "Here is what happened..."
```

Applied fix across all branches using git cherry-pick:
```bash
git cherry-pick 447ff05  # Applied to all design branches
```

---

## How to Use This Project

### View the Prototype
```bash
cd /home/michael/workspaces/activism-website
npm run dev
```
Open browser to: http://localhost:3000

### Switch Design Variants
```bash
# Stop dev server (Ctrl+C)
git checkout design-white   # or design-steel, or design-amber
npm run dev                 # Restart server
# Refresh browser to see new design
```

### Available Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Git Commit History

```
37d414b - Fix: Replace smart quotes with standard quotes in blog page
495c67c - Build complete activism website with all pages and components
7b72948 - Design variant: White/inverted accent colors
86f79a9 - Design variant: Steel gray accent colors
6aa9c15 - Initial Next.js setup
```

---

## File Structure

```
activism-website/
├── app/
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── for-farmers/page.tsx
│   ├── for-freedom/page.tsx
│   ├── for-veterans/page.tsx
│   ├── take-action/page.tsx
│   ├── why-this-matters/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Button.tsx
│   ├── ContactRepForm.tsx
│   ├── Countdown.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── SupporterCount.tsx
│   ├── TestimonialTicker.tsx
│   └── VolunteerSignupForm.tsx
├── public/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

---

## Key Design Decisions

### Why Black Background?
1. **Political Neutrality**: Avoids red/blue associations
2. **Professional**: Premium, serious aesthetic
3. **High Contrast**: Maximum readability and impact
4. **Memorable**: Unexpected for activism sites

### Why Next.js?
1. **Page Routing**: File-based routing simplifies structure
2. **React**: Component reusability
3. **Performance**: Fast page loads and navigation
4. **SEO Ready**: Server-side rendering capabilities
5. **Developer Experience**: Hot reload, TypeScript support

### Why Multiple Design Branches?
1. **Comparison**: Side-by-side evaluation of color schemes
2. **Client Choice**: Stakeholder can select preferred aesthetic
3. **A/B Testing Ready**: Can test variants with real users
4. **Flexibility**: Easy to merge preferred design to main

### Why Non-Functional Forms?
1. **Prototype Focus**: Visual and UX validation first
2. **No Backend**: Avoids database/server complexity
3. **Iteration Speed**: Faster to modify and test
4. **Phase 2 Ready**: Structure in place for implementation

---

## Content Highlights

### Homepage Hero Message
> "They're Coming for Your Freedom"
>
> In one year, the government will vote to restrict your access.
> This isn't about politics. It's about protecting what's yours.

### Testimonial Examples
- "I'm a farmer in Iowa and I won't go down without a fight" - Sarah M., Iowa
- "This bill will force me back onto opioids. We deserve better." - James T., Texas (Veteran)
- "Government has no place in our personal freedoms" - Alex R., Colorado

### Supporter Stats (Placeholder)
- **12,847** Farmers
- **8,392** Veterans
- **23,441** Freedom Fighters
- **44,680** Total Supporters

### Blog Post Categories
- News (breaking updates, coalition announcements)
- Events (rallies, town halls, gatherings)
- Updates (campaign progress)
- Research (economic impact, studies)
- Resources (how-to guides, toolkits)
- Stories (supporter profiles)

---

## Accessibility Considerations

### Implemented
- Semantic HTML structure
- High contrast ratios (black/white)
- Readable font sizes (responsive scaling)
- Keyboard navigation support (header menu)
- Descriptive link text
- Form labels and structure

### Future Enhancements
- ARIA labels for interactive elements
- Screen reader testing
- Focus indicators enhancement
- Skip navigation links
- Alt text for images (when real images added)

---

## Performance Optimizations

### Current
- Tailwind CSS purging (production builds)
- Next.js automatic code splitting
- Font optimization (Geist fonts)
- Minimal external dependencies

### Future
- Image optimization (Next.js Image component)
- Lazy loading for below-fold content
- Service worker for offline support
- CDN deployment

---

## Next Steps & Recommendations

### Immediate Review
1. Browse all pages in browser
2. Test mobile responsiveness (browser dev tools)
3. Compare all three design variants
4. Evaluate tone and messaging

### Content Refinement
1. Add real photography/imagery
2. Write authentic testimonials (with permission)
3. Develop blog posts with real content
4. Create downloadable resources (PDFs, toolkits)

### Technical Enhancement
1. Select preferred design variant
2. Implement form submission backend
3. Add email integration
4. Set up analytics tracking
5. Implement user authentication
6. Build representative lookup tool

### Marketing & Launch
1. SEO optimization (meta tags, descriptions)
2. Social media preview cards
3. Email campaign templates
4. Press kit materials
5. Analytics and conversion tracking

---

## Resources & Documentation

- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **GitHub Repository**: https://github.com/perhapsishould/activism-website
- **Deployment Options**: Vercel, Netlify, or custom server

---

## Credits

**Development**: AI-assisted (Claude Code)
**Design Direction**: User-guided collaborative process
**Framework**: Next.js 16.0.3
**Styling**: Tailwind CSS
**Fonts**: Geist Sans, Geist Mono

---

## License

[Add appropriate license based on project requirements]

---

## Contact

For questions about this codebase or to contribute, see the repository at:
https://github.com/perhapsishould/activism-website

---

*Last Updated: November 19, 2025*
