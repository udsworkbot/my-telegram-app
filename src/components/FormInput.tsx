import { FieldError, UseFormRegister } from 'react-hook-form';

interface FormInputProps {
  label: string;
  name: keyof WorkFormData;
  register: UseFormRegister<WorkFormData>;
  error?: FieldError;
  type?: string;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: string;
}

export const FormInput = ({
  label,
  name,
  register,
  error,
  type = 'text',
  placeholder,
  min,
  max,
  step
}: FormInputProps) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, {
        required: `${label} обязательно`,
        min: min ? { value: min, message: `Минимум ${min}` } : undefined,
        max: max ? { value: max, message: `Максимум ${max}` } : undefined,
      })}
      step={step}
    />
    {error && <span className="error">{error.message}</span>}
  </div>
);
