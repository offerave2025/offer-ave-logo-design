import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizes[size]} relative`}>
        <div className="absolute inset-0 bg-gradient-vibrant rounded-lg shadow-logo animate-pulse" />
        <div className="relative h-full w-full bg-gradient-rainbow rounded-lg flex items-center justify-center overflow-hidden">
          {/* QR-inspired pattern with multiple colors */}
          <div className="grid grid-cols-3 gap-[1px] w-3/4 h-3/4">
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-[1px] animate-pulse" />
            <div className="bg-transparent" />
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-[1px] animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="bg-transparent" />
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-[1px] animate-pulse" style={{ animationDelay: '0.4s' }} />
            <div className="bg-transparent" />
            <div className="bg-gradient-to-br from-rose-400 to-pink-600 rounded-[1px] animate-pulse" style={{ animationDelay: '0.6s' }} />
            <div className="bg-transparent" />
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[1px] animate-pulse" style={{ animationDelay: '0.8s' }} />
          </div>
        </div>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizes[size]} bg-gradient-vibrant bg-clip-text text-transparent leading-none animate-pulse`}>
            Swappos
          </span>
          <span className="text-xs text-muted-foreground tracking-wide">
            RETAIL REFERRAL NETWORK
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;