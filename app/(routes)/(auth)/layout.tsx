
import FormLayout from "@/components/reusable_components/Form/FormLayout";

// import { createNavbarData } from "@/src/data/navbar-data";
import Logo from "@/components/reusable_components/Logo";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <Logo sizeClass="w-[50px]" />
      <FormLayout >
          {children}
      </FormLayout>
    </div>
  );
}
