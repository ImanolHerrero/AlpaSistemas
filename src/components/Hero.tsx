import { FaWhatsapp } from "react-icons/fa";
import alpaLogo from "../assets/logoAlpa2.jpeg";
import calipsoLogo from "../assets/LogoCalipso.png";
import systemSolutionsGroupLogo from "../assets/systemSolutionsGroupLogo.png";

function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-20 px-6 pt-32 pb-24 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-flex items-center gap-3 rounded-full bg-brandColor/10 px-4 py-2 text-sm font-semibold text-brandColor">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brandColor opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brandColor"></span>
            </span>
            +20 años de experiencia
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Potenciando tu gestión.{" "}
            <span className="text-brandColor">Simplificando tu futuro.</span>
            <span className="block text-md mt-2 font-semibold lg:text-lg">
              (Tenemos la habilidad de convertir lo difícil en fácil).
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            En ALPA SISTEMAS ayudamos a empresas a optimizar sus procesos
            mediante consultoría, implementación y soporte especializado en
            sistemas Calipso ERP Full Web, acompañando cada proyecto desde su
            planificación hasta su puesta en marcha.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/5491133056461"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brandColor px-6 py-4 font-semibold text-white shadow-xl shadow-brandColor/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
            >
              <FaWhatsapp size={18} />
              <span>Contáctanos por WhatsApp</span>
            </a>

            <a
              href="#servicios"
              className="w-full rounded-lg border border-brandColor px-6 py-4 text-center font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
            >
              Conocer nuestros servicios
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-brandColor">+20</h3>
              <p className="text-sm leading-6 text-slate-600">
                Años de experiencia
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-brandColor">100%</h3>
              <p className="text-sm leading-6 text-slate-600">
                Acompañamiento personalizado
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-brandColor">+500</h3>
              <p className="text-sm leading-6 text-slate-600">
                Clientes satisfechos
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex flex-col items-center">
            <img
              src={alpaLogo}
              alt="ALPA Sistemas"
              loading="eager"
              className="w-full max-w-md"
            />

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              Una empresa del grupo:
            </p>

            <div className="mt-5 flex items-center flex-col justify-center gap-10">
              <img
                src={systemSolutionsGroupLogo}
                alt="System Solutions Group"
                loading="eager"
                className="h-10 w-auto object-contain"
              />

              <img
                src={calipsoLogo}
                alt="Calipso ERP"
                loading="eager"
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
