This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
taskify
├─ app
│  ├─ (api)
│  │  └─ api
│  │     ├─ connect
│  │     │  └─ accounts
│  │     │     └─ create
│  │     │        └─ route.ts
│  │     ├─ login
│  │     │  └─ route.ts
│  │     ├─ payments
│  │     │  ├─ confirm
│  │     │  │  └─ route.ts
│  │     │  └─ create
│  │     │     └─ route.ts
│  │     ├─ signup
│  │     │  └─ route.ts
│  │     └─ users
│  │        ├─ route.ts
│  │        └─ [id]
│  │           └─ route.ts
│  ├─ (features)
│  │  ├─ (general)
│  │  │  ├─ (home)
│  │  │  │  ├─ home
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ _components
│  │  │  ├─ (jobs)
│  │  │  │  └─ browse-jobs
│  │  │  │     └─ page.tsx
│  │  │  ├─ (signin)
│  │  │  │  ├─ (schemas)
│  │  │  │  │  ├─ index.ts
│  │  │  │  │  ├─ signin.schema.ts
│  │  │  │  │  └─ signup.schema.ts
│  │  │  │  ├─ signin
│  │  │  │  │  ├─ layout.tsx
│  │  │  │  │  └─ page.tsx
│  │  │  │  └─ _components
│  │  │  │     ├─ ErrorMessage.tsx
│  │  │  │     ├─ index.ts
│  │  │  │     └─ Login.tsx
│  │  │  ├─ constants
│  │  │  │  ├─ api.ts
│  │  │  │  ├─ feats.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ types
│  │  │  │  ├─ index.ts
│  │  │  │  └─ user.ts
│  │  │  ├─ _assets
│  │  │  │  └─ imgs
│  │  │  │     └─ work-stress-XRGKF28WN7-w600.jpg
│  │  │  └─ _components
│  │  │     ├─ Features.tsx
│  │  │     ├─ Header.tsx
│  │  │     ├─ HeroSection.tsx
│  │  │     ├─ HowItWorks.tsx
│  │  │     ├─ index.ts
│  │  │     ├─ JoinToUs.tsx
│  │  │     ├─ NonLoggedInLinks.tsx
│  │  │     └─ Testmonials.tsx
│  │  ├─ (protected)
│  │  │  ├─ (dashboard)
│  │  │  │  ├─ (client)
│  │  │  │  │  ├─ constants
│  │  │  │  │  │  ├─ clientConstants.tsx
│  │  │  │  │  │  └─ index.ts
│  │  │  │  │  ├─ types
│  │  │  │  │  │  ├─ client.ts
│  │  │  │  │  │  └─ index.ts
│  │  │  │  │  └─ _components
│  │  │  │  │     ├─ ClientMessages.tsx
│  │  │  │  │     ├─ ClientOffers.tsx
│  │  │  │  │     ├─ EmptyStateResource.tsx
│  │  │  │  │     ├─ Header.tsx
│  │  │  │  │     ├─ index.ts
│  │  │  │  │     ├─ MessageItem.tsx
│  │  │  │  │     ├─ OfferDetails.tsx
│  │  │  │  │     ├─ OfferItem.tsx
│  │  │  │  │     ├─ OpenProjects.tsx
│  │  │  │  │     ├─ ProjectItem.tsx
│  │  │  │  │     ├─ StatCard.tsx
│  │  │  │  │     └─ StatsCard.tsx
│  │  │  │  ├─ (freelancer)
│  │  │  │  │  ├─ constants
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  └─ main.ts
│  │  │  │  │  └─ _components
│  │  │  │  │     ├─ EmptyStateResource.tsx
│  │  │  │  │     ├─ FreelancerOverview.tsx
│  │  │  │  │     ├─ index.ts
│  │  │  │  │     ├─ OpenProjects.tsx
│  │  │  │  │     ├─ OverviewSections.tsx
│  │  │  │  │     ├─ Porposals.tsx
│  │  │  │  │     └─ Projects.tsx
│  │  │  │  ├─ (shared)
│  │  │  │  │  ├─ types
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  ├─ main.ts
│  │  │  │  │  │  └─ project.ts
│  │  │  │  │  └─ _components
│  │  │  │  │     ├─ GridContainer.tsx
│  │  │  │  │     ├─ index.ts
│  │  │  │  │     ├─ ProjectItem.tsx
│  │  │  │  │     ├─ StatCard.tsx
│  │  │  │  │     └─ StatsCard.tsx
│  │  │  │  └─ dashboard
│  │  │  │     ├─ @client
│  │  │  │     │  └─ page.tsx
│  │  │  │     ├─ @freelancer
│  │  │  │     │  └─ page.tsx
│  │  │  │     ├─ layout.tsx
│  │  │  │     └─ page.tsx
│  │  │  └─ layout.tsx
│  │  └─ (users)
│  │     ├─ (service)
│  │     │  ├─ index.ts
│  │     │  └─ userService.ts
│  │     └─ models
│  │        ├─ index.ts
│  │        └─ user.model.ts
│  ├─ (lang)
│  │  ├─ ar.json
│  │  ├─ en.json
│  │  └─ index.ts
│  ├─ (shared)
│  │  ├─ constants
│  │  ├─ types
│  │  │  ├─ index.ts
│  │  │  └─ ui.ts
│  │  └─ _components
│  │     ├─ BodyContainer.tsx
│  │     ├─ HeaderMobile.tsx
│  │     ├─ index.ts
│  │     ├─ Logo.tsx
│  │     ├─ TitleSection.tsx
│  │     └─ Toast.tsx
│  ├─ css.css
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ [...catch]
│     └─ page.tsx
├─ CODEOWNERS
├─ components
│  ├─ base
│  │  └─ buttons
│  │     ├─ social-button.tsx
│  │     └─ social-logos.tsx
│  ├─ login-form.tsx
│  ├─ signup-form.tsx
│  └─ ui
│     ├─ badge.tsx
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ checkbox.tsx
│     ├─ dialog.tsx
│     ├─ field.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ separator.tsx
│     └─ sonner.tsx
├─ components.json
├─ eslint.config.mjs
├─ lib
│  ├─ db.ts
│  ├─ i18n.ts
│  ├─ index.ts
│  └─ utils.ts
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ public
│  ├─ assets
│  │  └─ fonts
│  │     ├─ Rubik-Black.ttf
│  │     ├─ Rubik-BlackItalic.ttf
│  │     ├─ Rubik-Bold.ttf
│  │     ├─ Rubik-BoldItalic.ttf
│  │     ├─ Rubik-Italic.ttf
│  │     ├─ Rubik-Light.ttf
│  │     ├─ Rubik-LightItalic.ttf
│  │     ├─ Rubik-Medium.ttf
│  │     ├─ Rubik-MediumItalic.ttf
│  │     └─ Rubik-Regular.ttf
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tsconfig.json
└─ utils
   └─ cx.ts

```