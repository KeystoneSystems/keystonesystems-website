import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Sections will be added in Phase 1 & 2 */}
        <div className="min-h-screen flex items-center justify-center bg-[#1A1A1B]">
          <div className="text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#CD5C36] mb-4">
              Coming Soon
            </p>
            <h1 className="text-4xl font-black text-white mb-4 font-heading">
              Keystone Systems
            </h1>
            <p className="text-[#C4BDB5] max-w-md mx-auto">
              The missing piece for your business. Site launching soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
