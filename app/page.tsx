import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold gold-gradient">
            Dr. Raju Kumar
          </h1>

          <p className="mt-6 text-gray-400 text-xl">
            Best Gastroenterologist in Lucknow
          </p>
        </div>
      </main>
    </>
  );
}