import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects | Ravindu Dilhan",
  description: "A showcase of full-stack and DevOps projects built by Ravindu Dilhan.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-full py-10 w-full relative z-10">
      <Projects />
    </div>
  );
}
