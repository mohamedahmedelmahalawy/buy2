//components
import FormBannner from "@/components/Auth/Form/FormBannner";
interface FormLayoutProps {
  children: React.ReactNode;
}
//--------------------------
export default function FormLayout({ children }: FormLayoutProps) {
  return (
    <div className="flex ">
      {/* right section */}
      <main>
        {children}
        </main>
      {/* ----------------------- */}
      {/* left section */}
        <FormBannner />
       {/* ----------------------- */}
    </div>
  );
}
