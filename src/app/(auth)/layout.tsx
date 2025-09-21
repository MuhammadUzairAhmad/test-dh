import Navbar from "@/components/auth/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome — Contest App",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#010B28] text-white">
      <div className="px-4 md:px-8 xl:px-[72px] max-w-[1440px] mx-auto">
        <div className="pt-12">
          <Navbar />
        </div>
        {children}
      </div>
    </div>
  );
}
