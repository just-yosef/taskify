# - Taskify

A modern freelance marketplace built with **Next.js 14**, **TypeScript**, and **Stripe Connect**,  
designed to connect **clients** and **freelancers** through a clean and scalable architecture.

---

## - Features

### - Client Side
- Client Dashboard with basic & stats  
- View and manage projects  
- Review freelancer offers  
- Messaging & notifications (UI base)  
- implement interactivity (ability client to create update delete projects its posts)

### - Freelancer Side
- Freelancer Dashboard (in progress)  
- View ongoing and completed projects  
- Manage proposals and earnings  
- Integration with Stripe Connect (Express accounts)

### - Payments
- Integrated **Stripe Connect** flow:
  - Create freelancer account
  - Secure payments between clients and freelancers
  - Platform fee system (commission support)
- Supports **Test Mode** for sandbox transactions

### - Authentication
- Sign up / Sign in using custom handlers  
- Route protection for client and freelancer dashboards  
- Toast notifications after auth actions  
- using important 
### - Routing Architecture
The project uses the **Next.js App Router** with **Parallel Routes**  
to handle multiple layouts and dashboards simultaneously (e.g., client and freelancer dashboards).  

This allows rendering different route trees in parallel — improving modularity and performance.  
Example:  
````
app/
 ├─ dashboard/
 │   ├─ @client/
 │   └─ @freelancer/
````


### - Public Pages
- Homepage with:
  - Hero section
  - Features
  - How it works
  - Testimonials (fake data)
  - Join us section

---

## - Tech Stack

| Layer | Tools |
|-------|--------|
| **Frontend** | Next.js 15 (App Router), React, TypeScript |
| **UI/UX** | Tailwind CSS, shadcn/ui, Lucide Icons |
| **Backend** | Next.js Route Handlers (API Routes) |
| **Database** | mongoDB |
| **Payments** | Stripe Connect (Express Connected Accounts) |
| **Auth** | Custom logic  API routes |

---

## Avillable Images 
### 1- Freelancer Page
<p align="center">
  <img src="https://res.cloudinary.com/dj4it3c61/image/upload/v1760458416/brave_screenshot_localhost_6_xjvxtn.png" width="600"/>
</p>

### 2- Client Page And Accept/Reject Porposal
<p align="center">
  <img src="https://res.cloudinary.com/dj4it3c61/image/upload/v1760458452/brave_screenshot_localhost_2_aovd4w.png" width="600"/>
</p>

### 3- Notifications/Messages
<p align="center">
  <img src="https://res.cloudinary.com/dj4it3c61/image/upload/v1760458415/brave_screenshot_localhost_5_ogsymp.png" height="300" width="300"/>
   <img src="https://res.cloudinary.com/dj4it3c61/image/upload/v1760458415/brave_screenshot_localhost_4_l1nwhg.png" height="300" width="300"/>
</p>

### 4- (create, update, delete) project 
#### **Create**
<div>
<img src="https://res.cloudinary.com/dj4it3c61/image/upload/v1760552255/brave_screenshot_localhost_9_jqgsuz.png" height="300" width="300"/>
<div/>

#### **Edit**
   <img src="https://res.cloudinary.com/dj4it3c61/image/upload/v1760552256/brave_screenshot_localhost_10_a4uy9t.png" height="300" width="300"/>

#### **Delete**
 <img src="https://res.cloudinary.com/dj4it3c61/image/upload/v1760552256/brave_screenshot_localhost_7_udfjr2.png" height="300" width="500"/>

## - Project Structure

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
│  │     ├─ projects
│  │     │  ├─ route.ts
│  │     │  └─ [id]
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
│  │  │  │  │  ├─ hooks
│  │  │  │  │  │  ├─ getClientProjects.ts
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  ├─ useaddNewProject.ts
│  │  │  │  │  │  ├─ useRemoveProject.ts
│  │  │  │  │  │  └─ useUpdateProject.ts
│  │  │  │  │  ├─ model
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  └─ project.model.ts
│  │  │  │  │  ├─ schema
│  │  │  │  │  │  ├─ AddProject.schema.ts
│  │  │  │  │  │  └─ index.ts
│  │  │  │  │  ├─ service
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  └─ project.service.ts
│  │  │  │  │  ├─ types
│  │  │  │  │  │  ├─ client.ts
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  └─ project.ts
│  │  │  │  │  └─ _components
│  │  │  │  │     ├─ AddNewProject.tsx
│  │  │  │  │     ├─ ClientMessages.tsx
│  │  │  │  │     ├─ ClientOffers.tsx
│  │  │  │  │     ├─ EditProject.tsx
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
│  │  │  │  │  ├─ types
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  └─ main.ts
│  │  │  │  │  └─ _components
│  │  │  │  │     ├─ EmptyStateResource.tsx
│  │  │  │  │     ├─ FreelancerOverview.tsx
│  │  │  │  │     ├─ index.ts
│  │  │  │  │     ├─ MessagesContent.tsx
│  │  │  │  │     ├─ Notifications.tsx
│  │  │  │  │     ├─ OpenProjects.tsx
│  │  │  │  │     ├─ OverviewSections.tsx
│  │  │  │  │     ├─ Porposals.tsx
│  │  │  │  │     └─ Projects.tsx
│  │  │  │  ├─ (shared)
│  │  │  │  │  ├─ helpers
│  │  │  │  │  │  ├─ getProjectVariant.ts
│  │  │  │  │  │  └─ index.ts
│  │  │  │  │  ├─ types
│  │  │  │  │  │  ├─ index.ts
│  │  │  │  │  │  ├─ main.ts
│  │  │  │  │  │  └─ project.ts
│  │  │  │  │  └─ _components
│  │  │  │  │     ├─ GridContainer.tsx
│  │  │  │  │     ├─ GridItem.tsx
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
│  │     ├─ ErrorMessage.tsx
│  │     ├─ HeaderMobile.tsx
│  │     ├─ index.ts
│  │     ├─ Loader.tsx
│  │     ├─ Logo.tsx
│  │     ├─ MoreButton.tsx
│  │     ├─ PendingFormLabel.tsx
│  │     ├─ TitleSection.tsx
│  │     └─ Toast.tsx
│  ├─ css.css
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ [...catch]
│     └─ page.tsx
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
│     ├─ dropdown-menu.tsx
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
