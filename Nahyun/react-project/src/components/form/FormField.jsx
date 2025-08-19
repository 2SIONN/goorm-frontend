import { Input } from '@/components/ui/input.jsx'

export function FormField({ 
  label, 
  name, 
  value, 
  placeholder, 
  onChange, 
  type = "text",
  className = "" 
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
        className="mt-2"
        autoComplete="off"
      />
    </div>
  )
}