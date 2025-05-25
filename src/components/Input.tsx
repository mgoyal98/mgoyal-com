export default function Input({
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  minLength,
  maxLength,
}: {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      className='bg-background text-foreground border border-transparent rounded-2xl px-5 py-4 focus:border-primary/80 ring-0 focus:ring-0 outline-none placeholder:text-foreground/60'
    />
  );
}
