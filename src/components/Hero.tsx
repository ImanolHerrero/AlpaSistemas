import { Send } from "lucide-react";
import alpaLogo from "../assets/alpaLogo.png";
import calipsoLogo from "../assets/LogoCalipso.png";
import systemSolutionsGroupLogo from "../assets/systemSolutionsGroupLogo.png";

function Hero() {
  return (
    <main className="min-h-screen" id="hero">
      <section className="mx-auto mt-8 flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-8 py-22 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <span className="rounded-full bg-brandColor/10 px-4 py-2 text-sm font-semibold text-brandColor">
            +20 años de experiencia
          </span>

          <h1 className="mt-6 text-2xl font-bold leading-tight text-slate-900 lg:text-4xl">
            Potenciando tu gestión.{" "}
            <span className="text-brandColor">Simplificando tu futuro</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            En ALPA SISTEMAS ayudamos a empresas a optimizar sus procesos
            mediante consultoría, implementación y soporte especializado en
            sistemas ERP Full Web, acompañando cada proyecto desde su
            planificación hasta su puesta en marcha.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="flex items-center gap-2 rounded-lg bg-brandColor px-6 py-4 font-semibold text-white transition hover:opacity-90">
              <Send size={18} />
              <span>Escribinos por WhatsApp</span>
            </button>

            <a href="#servicios">
              <button className="rounded-lg border border-brandColor bg-white px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
                Conocer nuestros servicios
              </button>
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-brandColor">+20</h3>
              <p className="text-sm text-slate-600">Años de experiencia</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-brandColor">100%</h3>
              <p className="text-sm text-slate-600">
                Acompañamiento personalizado
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-brandColor">+500</h3>
              <p className="text-sm text-slate-600">Clientes satisfechos</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex flex-col items-center">
            <img
              src={alpaLogo}
              alt="ALPA Sistemas"
              className="w-full max-w-md"
            />

            <p className="mt-8 text-sm font-medium uppercase tracking-widest text-slate-500">
              Partners tecnológicos
            </p>

            <div className="mt-4 flex items-center justify-center gap-10">
              <img
                src={calipsoLogo}
                alt="Calipso ERP"
                className="h-10 w-auto object-contain"
              />

              <img
                src={systemSolutionsGroupLogo}
                alt="System Solutions Group"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
