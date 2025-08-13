import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Logo from './Logo';

const LogoShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <Logo size="xl" className="justify-center mb-8" />
          <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Brand Identity
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern logo design for Offer Ave - connecting physical retailers through QR code-based referral networks
          </p>
        </div>
      </section>

      {/* Logo Variations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Logo Variations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Logo */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <div className="flex flex-col items-center text-center space-y-4">
                <Badge variant="secondary" className="mb-2">Primary</Badge>
                <Logo size="lg" />
                <p className="text-sm text-muted-foreground">
                  Main logo with full branding
                </p>
              </div>
            </Card>

            {/* Icon Only */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <div className="flex flex-col items-center text-center space-y-4">
                <Badge variant="secondary" className="mb-2">Icon Only</Badge>
                <Logo size="lg" showText={false} />
                <p className="text-sm text-muted-foreground">
                  Compact version for small spaces
                </p>
              </div>
            </Card>

            {/* Small Version */}
            <Card className="p-8 bg-gradient-card border-border/50">
              <div className="flex flex-col items-center text-center space-y-4">
                <Badge variant="secondary" className="mb-2">Small</Badge>
                <Logo size="sm" />
                <p className="text-sm text-muted-foreground">
                  For navigation and compact layouts
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Usage Examples</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Business Card */}
            <Card className="p-8 bg-gradient-card border-border/50 h-64">
              <div className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Logo size="sm" />
                  <div className="text-right">
                    <div className="text-sm font-medium">John Smith</div>
                    <div className="text-xs text-muted-foreground">Network Manager</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">contact@offerave.com</div>
                  <div className="text-xs text-muted-foreground">+1 (555) 123-4567</div>
                  <div className="text-xs text-muted-foreground">www.offerave.com</div>
                </div>
              </div>
            </Card>

            {/* Mobile App Header */}
            <Card className="p-8 bg-gradient-card border-border/50 h-64">
              <div className="h-full">
                <Badge variant="secondary" className="mb-4">Mobile App</Badge>
                <div className="bg-secondary rounded-lg p-4 h-40">
                  <div className="flex justify-between items-center mb-6">
                    <Logo size="sm" />
                    <div className="w-6 h-6 bg-muted rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Brand Colors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="w-full h-20 bg-brand-primary rounded-lg mb-4 shadow-glow"></div>
              <h3 className="font-semibold mb-1">Primary Blue</h3>
              <p className="text-sm text-muted-foreground">Main brand color for logos and CTAs</p>
              <code className="text-xs bg-secondary px-2 py-1 rounded mt-2 inline-block">
                HSL(200, 100%, 50%)
              </code>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="w-full h-20 bg-brand-secondary rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-1">Accent Green</h3>
              <p className="text-sm text-muted-foreground">Secondary color for highlights</p>
              <code className="text-xs bg-secondary px-2 py-1 rounded mt-2 inline-block">
                HSL(142, 76%, 36%)
              </code>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/50">
              <div className="w-full h-20 bg-brand-tertiary rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-1">Gradient Purple</h3>
              <p className="text-sm text-muted-foreground">For gradient overlays and effects</p>
              <code className="text-xs bg-secondary px-2 py-1 rounded mt-2 inline-block">
                HSL(260, 100%, 80%)
              </code>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoShowcase;