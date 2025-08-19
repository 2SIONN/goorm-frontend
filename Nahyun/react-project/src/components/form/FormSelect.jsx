import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.jsx'
import React from 'react'

export default React.memo(function FormSelect({
  label,
  name,
  value,
  placeholder,
  options = [],
  onChange,
  className = '',
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium">{label}</label>
      <Select name={name} value={value} onChange={onChange}>
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
})
