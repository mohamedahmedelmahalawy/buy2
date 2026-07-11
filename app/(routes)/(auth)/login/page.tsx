"use client";
//lib
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
//components
import FormField from "@/components/reusable_components/Form/FormField";
import { Button } from "@/components/ui/button";
//validations
import { createLoginSchema } from "@/lib/validations/login.schema";
//next
import Link from "next/link";
//-----------------------
export default function LoginPage() {
  const schema = createLoginSchema();

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <div className="w-full text-center mt-2 mb-15 mt-[50px]">
        <h1 className="text-xl md:text-4xl font-bold mb-2">Welcome!</h1>
        <p className="text-md md:text-lg text-muted-foreground mt-2">
         Please login to continue 
          </p>
      </div>
      <FormField
        id="email"
        label="Email Address"
        placeholder="Enter your email address"
        register={register("identifier")}
        error={errors.identifier?.message}
      />

      <FormField
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register("password")}
        error={errors.password?.message}
      />
      <div className="w-full flex justify-between mt-2">

      <Link href="/forgot-password">
        <p className="text-sm text-blue-600 hover:underline">
          Forgot Password?
        </p>
      </Link>
      </div>
      <div className="w-full flex mt-7">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 rounded-xl bg-brand text-md text-white transition-colors duration-300 hover:bg-brand/90"
        >
          Log In
        </Button>
      </div>
    </form>
  );
}
