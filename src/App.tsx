import heroImage from "./assets/alpa.jpeg";
import calipsoLogo from "./assets/Calipso-1.avif";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-8 text-center">
      <img src={heroImage} alt="ALPA Sistemas" className="m-4 w-96 shadow-lg" />
      <img src={calipsoLogo} alt="Calipso" className="mb-4 w-40" />

      <h1 className="text-4xl font-bold text-[#34CAB4]">
        Sitio en construcción
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Estamos trabajando para ofrecer una nueva experiencia web con
        información sobre nuestros servicios, experiencia y soporte de sistemas
        de gestión.
      </p>

      <div className="mt-6 rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-sm">
        <p className="font-medium text-slate-700">🚧 Próximamente disponible</p>
      </div>

      <p className="mt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} ALPA Sistemas
      </p>
    </main>
  );
}

export default App;
