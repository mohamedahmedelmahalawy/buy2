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

      {/* Submit Button */}
      <div className="mt-7 flex flex-col">
        <Button
          disabled={isSubmitting}
          className="h-14 w-full rounded-[16px] bg-brand text-md text-white transition-colors hover:backdro"
        >
          {isSubmitting ? "Logging in..." : "Log In"}
        </Button>
        {/* Back Button */}
        <Link
          href="/login"
          className="h-14 w-full flex items-center justify-center rounded-[16px] border border-brand bg-white text-md text-brand transition-colors hover:bg-black/5"
        >
            Back
        </Link>
      </div>
    </form>
  );
}
