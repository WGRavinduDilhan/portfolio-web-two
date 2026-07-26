import Achievements from "@/components/Achievements";

export const metadata = {
  title: "Achievements | Ravindu Dilhan",
  description: "Certifications and professional achievements of Ravindu Dilhan.",
};

export default function AchievementsPage() {
  return (
    <div className="flex flex-col min-h-full py-10 w-full relative z-10">
      <Achievements />
    </div>
  );
}
