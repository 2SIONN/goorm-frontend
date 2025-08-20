export default function InputField({
  label,
  type,
  id,
  name,
  value,
  handleChange,
  className,
  placeholder,
  error,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange ?? (() => {})}
        className={className}
        placeholder={placeholder}
      />
      {error && <small className="text-red-600">{error}</small>}
    </div>
  );
}
