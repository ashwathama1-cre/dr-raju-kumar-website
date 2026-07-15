export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h3 className="text-2xl italic gold font-bold">
            Dr. Raju Kumar
          </h3>

          <p className="text-gray-500 mt-2">
            Gastroenterologist & Liver Specialist
          </p>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}