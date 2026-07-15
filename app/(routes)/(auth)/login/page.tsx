"use client";
// Lib
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Components
import FormField from "@/components/reusable_components/Form/FormField";
import { Button } from "@/components/ui/button";
// Validation
import { createLoginSchema } from "@/components/Auth/validations/login.schema";
// Next
import Link from "next/link";
// -----------------------
const schema = createLoginSchema();
type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);


  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-148.5 space-y-4"
    >
      {/* Header */}
      <div className="mt-12.5 mb-17.25 w-full text-center">
        <h1 className="text-xl font-bold md:text-4xl">Welcome!</h1>
        <p className="mt-2 text-md text-muted-foreground md:text-lg">
          Please login to continue
        </p>
      </div>
      {/* Email / Phone */}
      <FormField
        id="identifier"
        label="Email Address"
        placeholder="Enter your email address"
        icon="mdi:email-outline"
        register={register("identifier")}
        error={errors.identifier?.message}
        autoComplete="username"
      />
      {/* Password */}
      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register("password")}
        error={errors.password?.message}
        autoComplete="current-password"
      />
      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <label htmlFor="rememberMe" className="flex items-center gap-2 text-sm">
          <input
            id="rememberMe"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300"
          />

          <span className="text-muted-foreground ">Remember me</span>
        </label>
        <Link
          href="/forgot-password"
          className="text-sm text-[#756EF3] transition hover:underline"
        >
          Forgot Password?
        </Link>
      </div>
      {/* Submit button */}
      <Button
        disabled={isSubmitting}
        className="mt-7 h-14 w-full rounded-xl bg-brand text-md text-white transition-colors hover:bg-brand/90"
      >
        {isSubmitting ? "Logging in..." : "Log In"}
      </Button>
    </form>
  );
}
