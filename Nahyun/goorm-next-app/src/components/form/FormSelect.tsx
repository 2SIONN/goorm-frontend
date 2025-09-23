import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'

interface SelectOption {
  value: string
  label: string
}

interface FormSelectProps {
  label: string
  name: string
  value: string
  placeholder?: string
  options?: SelectOption[]
  onChange: (e: { target: { name: string; value: string } }) => void
  className?: string
}

export default function FormSelect({
  label,
  name,
  value,
  placeholder,
  options = [],
  onChange,
  className = '',
}: FormSelectProps) {
  return (
    <div className={className}>
      <label className="text-sm font-medium">{label}</label>
      <Select name={name} value={value} onValueChange={(value) => onChange({ target: { name, value } })}>
        <SelectTrigger className="w-full mt-2">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, idx) => (
            <SelectItem key={idx} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
