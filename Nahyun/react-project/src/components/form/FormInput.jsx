import { Input } from '@/components/ui/input.jsx'

export default function FormInput({
  label,
  name,
  value,
  placeholder,
  onChange,
  type = 'text',
  autoComplete,
  error,
  className = '',
  disabled = false,
  readOnly = false,
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete || 'off'}
        disabled={disabled}
        readOnly={readOnly}
        className={`mt-2 ${error ? 'border-red-500' : ''}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
