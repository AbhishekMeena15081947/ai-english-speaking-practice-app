'use client'

import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        {/* Header with Theme Toggle */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>

        {/* Hero Section */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              AI-Powered English Speaking & Communication Practice App
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              For Intermediate Learners
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Master fluency and confidence with AI-driven conversation practice,
            real-time feedback, and personalized progress tracking.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">🗣️ AI Conversation</h3>
              <p className="text-muted-foreground">
                Practice with Microsoft Copilot-style short, natural responses
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">📝 Writing Practice</h3>
              <p className="text-muted-foreground">
                Get instant feedback on grammar, vocabulary, and style
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="text-xl font-semibold mb-2">📊 Track Progress</h3>
              <p className="text-muted-foreground">
                Visualize your growth with detailed analytics and insights
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="mt-12 inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <p className="text-primary font-semibold">
              🚀 Initial Setup Complete - Ready for Development
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
