import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact | Ravindu Dilhan",
  description: "Get in touch with Ravindu Dilhan for collaboration and opportunities.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-full py-10 w-full relative z-10">
      <Contact />
    </div>
  );
}
