import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image
            src='icons/logo.svg'
            width={30}
            height={30}
            alt='logo'
          />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
