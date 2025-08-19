import { Input } from '@/components/ui/input.jsx'
import React from 'react'

export default React.memo(function FormEmojiPicker({
  label,
  name,
  value,
  emojis = [],
  onChange,
  className = '',
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium">{label}</label>
      <div className="flex gap-2 mt-2">
        {emojis.map((emoji, idx) => (
          <label
            key={idx}
            className={`w-12 h-12 flex items-center justify-center cursor-pointer border-2 rounded-md text-2xl ${
              value === emoji ? 'bg-gray-200 border-gray-300' : 'border-gray-200'
            }`}
          >
            <Input
              type="radio"
              name={name}
              value={emoji}
              checked={value === emoji}
              onChange={onChange}
              className="sr-only"
            />
            {emoji}
          </label>
        ))}
      </div>
    </div>
  )
})
