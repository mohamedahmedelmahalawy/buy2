//components
import FormBannner from "@/components/Auth/Form/FormBannner";
import Logo from "@/components/reusable_components/Logo";
interface FormLayoutProps {
  children: React.ReactNode;
}
//--------------------------
export default function FormLayout({ children }: FormLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full h-full p-6 "
       style={{ border:"1px solid blue" }}>
      {/* content section */}
      <main className="flex flex-col justify-center items-center w-full h-full gap-4 md:gap-8"
      style={{ border:"1px solid red" }}>
        <Logo sizeClass="w-[167px]" />
        <div className="w-full px-32">
        {children}
        </div>
        </main>
      {/* ----------------------- */}
      {/* banner section */}
      <div className="hidden md:flex justify-center items-center">
        <FormBannner />
      </div>
       {/* ----------------------- */}
    </div>
  );
}
