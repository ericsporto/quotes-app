import Header from "@components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <main>{children}</main>
    </div>
  );
}
