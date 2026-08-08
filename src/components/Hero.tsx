import { FaWhatsapp } from "react-icons/fa";
import alpaLogo from "../assets/logoAlpa2.jpeg";
import calipsoLogo from "../assets/LogoCalipso.png";
import systemSolutionsGroupLogo from "../assets/systemSolutionsGroupLogo.png";

function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-5rem)] items-center px-6 py-10 lg:px-8 lg:py-6"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center rounded-full bg-brandColor/10 px-4 py-2 text-sm font-semibold text-brandColor">
              +20 años de experiencia
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Potenciando tu gestión.{" "}
              <span className="text-brandColor">Simplificando tu futuro.</span>
              <span className="mt-2 block text-base font-semibold lg:text-lg">
                (Tenemos la habilidad de convertir lo difícil en fácil).
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 lg:text-lg">
              En ALPA SISTEMAS ayudamos a empresas a optimizar sus procesos
              mediante consultoría, implementación y soporte especializado en
              sistemas Calipso ERP Full Web, acompañando cada proyecto desde su
              planificación hasta su puesta en marcha.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/5491133056461"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brandColor px-6 py-3 font-semibold text-white shadow-xl shadow-brandColor/20 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
              >
                <FaWhatsapp size={18} />
                <span>Contáctanos por WhatsApp</span>
              </a>

              <a
                href="#servicios"
                className="w-full rounded-lg border border-brandColor px-6 py-3 text-center font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
              >
                Conocer nuestros servicios
              </a>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-brandColor lg:text-3xl">
                  +20
                </h3>

                <p className="text-xs leading-5 text-slate-600 lg:text-sm">
                  Años de experiencia
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-brandColor lg:text-3xl">
                  100%
                </h3>

                <p className="text-xs leading-5 text-slate-600 lg:text-sm">
                  Acompañamiento personalizado
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-brandColor lg:text-3xl">
                  +500
                </h3>

                <p className="text-xs leading-5 text-slate-600 lg:text-sm">
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
                className="w-full max-w-sm lg:max-w-md"
              />

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 lg:text-sm">
                Una empresa del grupo:
              </p>

              <div className="mt-4 flex flex-col items-center justify-center gap-6">
                <img
                  src={systemSolutionsGroupLogo}
                  alt="System Solutions Group"
                  loading="eager"
                  className="h-8 w-auto object-contain lg:h-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-center lg:mt-5">
          <p className="text-center text-lg font-semibold text-slate-900 lg:text-lg">
            OFFICIAL CERTIFIED GOLD PARTNERS de Calipso.
          </p>
          <img
            src={calipsoLogo}
            alt="Calipso ERP"
            loading="eager"
            className=" mt-4 h-11 w-auto object-contain lg:h-14"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
