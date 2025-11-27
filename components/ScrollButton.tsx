'use client';

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'link';
}

export default function ScrollButton({ targetId, children, className = '', variant = 'primary' }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const variantClasses = {
    primary: 'px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-200',
    secondary: 'px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-200 border border-slate-700',
    link: 'text-gray-400 hover:text-primary-400 transition-colors',
  };

  // If className is provided, use it; otherwise use variant classes
  const finalClassName = className || variantClasses[variant];

  return (
    <button
      onClick={handleClick}
      className={finalClassName}
    >
      {children}
    </button>
  );
}
