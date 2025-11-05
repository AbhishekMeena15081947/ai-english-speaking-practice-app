# Next.js + TypeScript + TailwindCSS Setup Guide

Complete step-by-step guide for initializing and deploying a Next.js project with TypeScript and TailwindCSS.

## Table of Contents
- [Initial Setup](#initial-setup)
- [Project Structure](#project-structure)
- [Homepage Implementation](#homepage-implementation)
- [Vercel Deployment](#vercel-deployment)

---

## Initial Setup

### 1. Create Next.js Project with TypeScript

```bash
npx create-next-app@latest my-app --typescript
# or
yarn create next-app my-app --typescript
```

### 2. Navigate to Project Directory

```bash
cd my-app
```

### 3. Install TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
# or
yarn add -D tailwindcss postcss autoprefixer
```

### 4. Initialize TailwindCSS

```bash
npx tailwindcss init -p
```

This creates:
- `tailwind.config.js`
- `postcss.config.js`

### 5. Configure TailwindCSS

Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 6. Add TailwindCSS Directives

Update `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Project Structure

### Recommended Folder Structure

```
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ...
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── ...
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── public/
│   ├── images/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── types/
│   └── index.ts
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

### Key Directories Explained

- **app/**: Next.js 13+ App Router files
- **components/**: Reusable React components
- **lib/**: Utility functions and constants
- **public/**: Static assets
- **styles/**: Global CSS files
- **types/**: TypeScript type definitions

---

## Homepage Implementation

### Basic Homepage (`app/page.tsx`)

```typescript
import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-indigo-600">Next.js</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get started by editing{' '}
            <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">
              app/page.tsx
            </code>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-16">
            <Link
              href="/about"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Get Started
            </Link>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
            >
              Documentation
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="⚡ Fast Performance"
            description="Built on React with optimized performance and automatic code splitting."
          />
          <FeatureCard
            title="🎨 TailwindCSS"
            description="Utility-first CSS framework for rapid UI development."
          />
          <FeatureCard
            title="📘 TypeScript"
            description="Type-safe code with excellent IDE support and fewer runtime errors."
          />
          <FeatureCard
            title="🚀 App Router"
            description="Next.js 13+ App Router with layouts, server components, and more."
          />
          <FeatureCard
            title="📱 Responsive"
            description="Mobile-first design that works seamlessly across all devices."
          />
          <FeatureCard
            title="🔧 Developer Experience"
            description="Hot reload, ESLint, TypeScript, and modern tooling out of the box."
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600">
        <p>Built with Next.js, TypeScript, and TailwindCSS</p>
      </footer>
    </div>
  )
}

// Feature Card Component
interface FeatureCardProps {
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Home
```

### Root Layout (`app/layout.tsx`)

```typescript
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Next.js App',
  description: 'Built with Next.js, TypeScript, and TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

### Global Styles (`app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom base styles */
@layer base {
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply bg-white text-gray-900;
  }
}

/* Custom component styles */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors;
  }
  
  .card {
    @apply bg-white p-6 rounded-xl shadow-md;
  }
}

/* Custom utility styles */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

## Vercel Deployment

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

#### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./ (default)
   - **Build Command**: `next build` (default)
   - **Output Directory**: .next (default)
5. Click **"Deploy"**

#### Step 3: Configure Environment Variables (if needed)

1. Go to Project Settings → Environment Variables
2. Add your variables:
   - `DATABASE_URL`
   - `API_KEY`
   - etc.

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI

```bash
npm i -g vercel
# or
yarn global add vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
# Development deployment
vercel

# Production deployment
vercel --prod
```

### Post-Deployment Configuration

#### Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS settings as instructed

#### Environment Variables

```bash
# Add environment variables via CLI
vercel env add VARIABLE_NAME
```

#### Deploy Hooks

1. Go to Project Settings → Git
2. Enable automatic deployments from branches
3. Configure deploy hooks for CI/CD

---

## Development Workflow

### Local Development

```bash
# Start development server
npm run dev
# or
yarn dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
# or
yarn build
```

### Run Production Build Locally

```bash
npm run start
# or
yarn start
```

### Lint Code

```bash
npm run lint
# or
yarn lint
```

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

## Troubleshooting

### Common Issues

#### TailwindCSS Styles Not Working

1. Check `tailwind.config.js` content paths
2. Ensure directives are in `globals.css`
3. Restart development server

#### TypeScript Errors

1. Run `npm run lint` to check for errors
2. Check `tsconfig.json` configuration
3. Install missing type definitions: `npm i -D @types/node @types/react`

#### Build Failures on Vercel

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify environment variables are set
4. Check Node.js version compatibility

---

## Best Practices

1. **Component Organization**: Keep components small and focused
2. **Type Safety**: Define interfaces for all props and data
3. **Performance**: Use Next.js Image component for images
4. **SEO**: Add metadata to all pages
5. **Accessibility**: Use semantic HTML and ARIA labels
6. **Code Quality**: Use ESLint and Prettier
7. **Git Workflow**: Commit frequently with clear messages
8. **Environment Variables**: Never commit secrets to git

---

## Quick Reference Commands

```bash
# Create new Next.js project
npx create-next-app@latest my-app --typescript

# Install TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

---

**Happy Coding! 🚀**
