import React, { forwardRef } from 'react'

interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'textarea'
  required?: boolean
  error?: string
  placeholder?: string
  className?: string
  rows?: number
}

export const FormField = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  (
    {
      label,
      name,
      type = 'text',
      required = false,
      error,
      placeholder,
      className = '',
      rows = 4,
    },
    ref
  ) => {
    const baseInputStyles = 'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors'
    const errorStyles = error
      ? 'border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'

    const combinedClassName = `${baseInputStyles} ${errorStyles} ${className}`

    return (
      <div className="mb-4">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {type === 'textarea' ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            id={name}
            name={name}
            rows={rows}
            placeholder={placeholder}
            className={combinedClassName}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            className={combinedClassName}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        )}
        {error && (
          <p id={`${name}-error`} className="mt-2 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'
