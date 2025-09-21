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



new ok

src/
 ├── app/                         # Next.js App Router entry
 │    ├── (auth)/                 # Auth-only layout
 │    │    ├── layout.tsx         # Auth layout (landing page, modals)
 │    │    └── page.tsx           # Landing page with login modal logic
 │    │
 │    ├── (admin)/                # Admin dashboard layout
 │    │    ├── layout.tsx         # Admin layout (sidebar + topbar)
 │    │    ├── dashboard/         # Future dashboard page
 │    │    └── contests/          # Contest feature pages
 │    │         ├── page.tsx      # Contest list (ongoing + archived + tabs)
 │    │         ├── [id]/page.tsx # View single contest
 │    │         └── new/page.tsx  # Create new contest
 │    │
 │    └── api/                    # API routes (dummy data)
 │         ├── auth/route.ts      # Mock login/reset endpoints
 │         └── contests/route.ts  # Mock contests CRUD
 │
 ├── components/                  # Reusable components
 │    ├── ui/                     # UI primitives
 │    │    ├── button.tsx
 │    │    ├── input.tsx
 │    │    ├── modal.tsx
 │    │    ├── checkbox.tsx
 │    │    └── form-field.tsx     # Input wrapper for Formik + Yup
 │    │
 │    ├── auth/                   # Auth specific
 │    │    ├── login-modal.tsx
 │    │    ├── forgot-password-modal.tsx
 │    │    └── reset-password-modal.tsx
 │    │
 │    ├── layout/                 # Layout-specific pieces
 │    │    ├── sidebar.tsx
 │    │    └── topbar.tsx
 │    │
 │    └── contests/               # Contest-specific components
 │         ├── contest-card.tsx
 │         ├── contest-form.tsx   # Create/Edit form (Formik + Yup)
 │         └── mcq-question.tsx   # Single MCQ UI (options, date, etc.)
 │
 ├── hooks/                       # Custom hooks
 │    ├── use-auth.ts             # Auth state logic
 │    └── use-contests.ts         # TanStack hooks for contests
 │
 ├── lib/                         # Utilities
 │    ├── axios.ts                # Axios instance (if using axios)
 │    └── validation.ts           # Yup schemas
 │
 ├── styles/
 │    └── globals.css             # Tailwind v4 (all-in-one config)
 │
 ├── theme/                       # Optional theming (colors, typography)
 │    └── index.ts                # central theme tokens
 │
 └── types/
      ├── auth.ts                 # Auth-related types
      └── contests.ts             # Contest-related types
