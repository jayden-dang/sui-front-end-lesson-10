import { Inter } from "next/font/google";

import ProfileNav from "@/components/ProfileNav";

const inter = Inter({ subsets: ["latin"] });
export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full w-full flex flex-col flex-start bg-slate-100">
      <ProfileNav />
      <div className="">{children}</div>
    </main>
  );
}
