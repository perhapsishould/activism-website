import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded transition-colors inline-block text-center';

  const variantStyles = {
    primary: 'bg-accent hover:bg-accent-hover text-background',
    secondary: 'bg-foreground hover:bg-gray-light text-background',
    outline: 'border-2 border-foreground hover:bg-foreground hover:text-background',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
