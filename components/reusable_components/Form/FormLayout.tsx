//components
import FormBanner from "@/components/Auth/Form/FormBannner";
import Logo from "@/components/reusable_components/Logo";
interface FormLayoutProps {
  children: React.ReactNode;
}
//--------------------------
export default function FormLayout({ children }: FormLayoutProps) {
  return (
    <div className="flex flex-row justify-center gap-4 lg:gap-8 w-full h-full px-2 md:p-6 md:px-59 ">
      {/* content section */}
      <main className="flex flex-col justify-center items-center w-full max-w-148.5 h-full gap-0 md:gap-8">
        <Logo sizeClass="w-[167px]" />
        <div className="w-full px-4 md:px-8 lg:px-12">{children}</div>
      </main>

      {/* banner section */}
      <div className="hidden md:flex justify-center items-center w-full max-w-153.5 h-full">
        <FormBanner />
      </div>
  
    </div>
  );
}
