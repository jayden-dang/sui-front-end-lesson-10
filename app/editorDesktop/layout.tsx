import { Inter } from "next/font/google";

import EditorNav from "@/components/EditorNav";

const inter = Inter({ subsets: ["latin"] });
export default function LearnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-full flex justify-center bg-slate-100">
      <div className="w-3/5 justify-center flex-col pt-24 min-h-[80%] ">
        <EditorNav />
        <div className="bg-slate-100 mt-2">{children}</div>
      </div>
    </main>
  );
}
