import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider, RedirectToSignIn } from '@clerk/nextjs'

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster';
import { ProModal } from '@/components/pro-modal';
import { Analytics } from '@vercel/analytics/react';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ANEMO AI',
  description: 'Your customized ai companion.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider afterSignInUrl='/dashboard' afterSignUpUrl='/dashboard'>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-secondary", inter.className)}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ProModal />
            {children}
            <Toaster />
            {/* <RedirectToSignIn afterSignInUrl='/dashboard' afterSignUpUrl='/dashboard' /> */}
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}