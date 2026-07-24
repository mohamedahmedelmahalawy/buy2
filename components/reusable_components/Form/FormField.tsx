"use client";
// Hooks
import { useState } from "react";
// React Hook Form
import { UseFormRegisterReturn } from "react-hook-form";
// Icons
import { Icon, type IconifyIcon } from "@iconify/react";
// UI
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
// -----------------------

interface FormFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute | "textarea";
  register: UseFormRegisterReturn;
  error?: string;
  icon?: string | IconifyIcon;
  autoComplete?: string;
}

export default function FormField({
  id,
  label,
  placeholder,
  type = "text",
  register,
  error,
  icon,
  autoComplete,
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  const inputClass = `
    w-full  max-w-125 h-13 rounded-md border bg-white py-2 pl-3
    ${icon || type === "password" ? "pr-10" : "pr-3"}
    ${error ? "border-red-500 placeholder:text-red-500" : "border-gray-200 placeholder:text-gray-400"}
    text-black focus:outline-none
  `;

  return (
    <Field orientation="vertical">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>

      <FieldContent>
        {type === "textarea" ? (
          <textarea
            id={id}
            rows={5}
            placeholder={placeholder}
            {...register}
            aria-invalid={!!error}
            className={`w-full rounded-md border p-3 ${
              error ? "border-red-400" : "border-gray-300"
            } bg-white text-black focus:outline-none`}
          />
        ) : (
          <div className="relative">
            {icon && type !== "password" && (
              <Icon
                icon={icon}
                className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-400 ${error ? "text-red-400" : ""}`}
              />
            )}

            {type === "password" && (
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Icon
                  icon={
                    showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"
                  }
                  className={`text-xl ${error ? "text-red-400" : ""}`}  
                />
              </button>
            )}

            <input
              id={id}
              type={inputType}
              placeholder={placeholder}
              autoComplete={autoComplete}
              {...register}
              aria-invalid={!!error}
              className={inputClass}
            />
          </div>
        )}

        <FieldError errors={error ? [{ message: error }] : undefined} />
      </FieldContent>
    </Field>
  );
}
