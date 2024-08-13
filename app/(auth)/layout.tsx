import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="overflow-hidden">
          <Image
            src='/icons/preview.png'
            width={800}
            height={600}
            alt="img auth"
            className="translate-x-[250px] border-[#00214F] border-[6px] rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
