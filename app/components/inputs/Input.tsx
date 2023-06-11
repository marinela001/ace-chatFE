'use client';

import { 
  FieldErrors, 
  FieldValues, 
  UseFormRegister 
} from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors,
  multiline?:boolean;
  maxLength?: number;
  centerText?:boolean;

  
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text", 
  disabled, 
  register,
  required,
  errors,
  multiline,
  maxLength,
  centerText
}) => {
  return (
    <div className="w-full relative">
     {multiline ? 
     (
      <textarea
  id={id}
  disabled={disabled}
  {...register(id, { required })}
  placeholder=" "
  className={`
    peer
    w-full
    p-4
    pt-6 
    font-light 
    bg-white 
    border-2
    rounded-md
    outline-none
    transition
    disabled:opacity-70
    disabled:cursor-not-allowed
    pl-4
    ${errors[id] ? 'border-rose-800' : 'border-neutral-300'}
    ${errors[id] ? 'focus:border-rose-800' : 'focus:border-violet-800'}
    ${centerText}
  `}
/>
     )
: (
<input
  id={id}
  maxlength={maxLength}
  disabled={disabled}
  {...register(id, { required })}
  placeholder=" "
  type={type}
  className={`
    peer
    w-full
    p-4
    pt-6 
    font-light 
    bg-white 
    border-2
    rounded-md
    outline-none
    transition
    disabled:opacity-70
    disabled:cursor-not-allowed
    pl-4
    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-violet-800'}
    ${centerText ? 'text-center' : ''}
  `}
/>)     
    
    }
    
      <label 
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          left-4
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
          

        `}
      >
        {label}
      </label>
    </div>
   );
}
 
export default Input;