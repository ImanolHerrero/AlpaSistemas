import heroImage from "./assets/alpa.jpeg";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6 text-center">
      <img
        src={heroImage}
        alt="ALPA Sistemas"
        className="mb-8 w-96 shadow-lg"
      />

      <h1 className="text-4xl font-bold text-[#34CAB4]">
        Sitio en construcción
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Estamos trabajando para ofrecer una nueva experiencia web con
        información sobre nuestros servicios, experiencia y soporte de sistemas
        de gestión.
      </p>

      <div className="mt-8 rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm">
        <p className="font-medium text-slate-700">🚧 Próximamente disponible</p>
      </div>

      <p className="mt-10 text-sm text-slate-500">
        © {new Date().getFullYear()} ALPA Sistemas
      </p>
    </main>
  );
}

export default App;
