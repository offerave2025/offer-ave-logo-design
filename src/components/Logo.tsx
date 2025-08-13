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
        <div className="absolute inset-0 bg-gradient-primary rounded-lg shadow-logo" />
        <div className="relative h-full w-full bg-gradient-primary rounded-lg flex items-center justify-center">
          {/* QR-inspired pattern */}
          <div className="grid grid-cols-3 gap-[1px] w-3/4 h-3/4">
            <div className="bg-background rounded-[1px]" />
            <div className="bg-transparent" />
            <div className="bg-background rounded-[1px]" />
            <div className="bg-transparent" />
            <div className="bg-background rounded-[1px]" />
            <div className="bg-transparent" />
            <div className="bg-background rounded-[1px]" />
            <div className="bg-transparent" />
            <div className="bg-background rounded-[1px]" />
          </div>
        </div>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${textSizes[size]} bg-gradient-primary bg-clip-text text-transparent leading-none`}>
            Offer Ave
          </span>
          <span className="text-xs text-muted-foreground tracking-wide">
            QR REFERRAL NETWORK
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;