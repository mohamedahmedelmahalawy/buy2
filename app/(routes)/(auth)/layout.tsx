//components
import FormLayout from "@/components/reusable_components/Form/FormLayout";
//-----------------------
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FormLayout>{children}</FormLayout>;
}
