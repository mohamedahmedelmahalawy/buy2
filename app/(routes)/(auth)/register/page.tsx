"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

import FormField from "@/components/reusable_components/Form/FormField";
import { Button } from "@/components/ui/button";
import { createRegisterSchema } from "@/lib/validations/register.schema";

export default function RegisterPage() {

  const schema = createRegisterSchema();

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full"
    >
      <FormField
        id="IdentityNumber"
        label="رقم الهوية"
        placeholder="أدخل رقم الهوية"
        register={register("IdentityNumber")}
        error={errors.IdentityNumber?.message}
      />

      <div className="w-full flex justify-around gap-2 mt-15">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-[50%] h-12 rounded-lg bg-secondary text-md text-white transition-colors duration-300 hover:bg-secondary/90"
        >
          {isSubmitting ? "جاري التسجيل..." : "تسجيل"}
        </Button>

        <Link
          href="/login"
          className="w-[50%] h-12 flex justify-center items-center"
        >
          <span className="w-full h-full text-sm md:text-md font-medium border border-secondary text-secondary hover:text-secondary/70 hover:border-secondary/70 flex items-center justify-center rounded-lg transition-colors duration-300">
            تسجيل الدخول
          </span>
        </Link>
      </div>
    </form>
  );
}