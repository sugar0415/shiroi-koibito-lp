import React from 'react'

interface CardProps {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
}) => {
  const baseStyles = 'rounded-lg'

  const variantStyles = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border-2 border-gray-200',
  }

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`

  return <div className={combinedClassName}>{children}</div>
}
