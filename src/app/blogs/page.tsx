import Blogs from "@/components/Blogs";

export const metadata = {
  title: "Blogs | Ravindu Dilhan",
  description: "Read the latest articles and technical blogs by Ravindu Dilhan.",
};

export default function BlogsPage() {
  return (
    <div className="flex flex-col min-h-full py-10 w-full relative z-10">
      <Blogs />
    </div>
  );
}
