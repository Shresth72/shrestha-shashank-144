import Providers from "@/components/Providers";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html
        lang="en"
        className="bg-white dark:bg-black text-slate-50 overflow-x-hidden"
      >
        <body className="bg-white dark:bg-black antialiased">
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    );
  }
  