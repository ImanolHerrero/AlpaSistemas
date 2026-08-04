import calipsoLogo from "../assets/LogoCalipso.png";
import { BadgeCheck } from "lucide-react";

export default function Partner() {
  return (
    <section id="partner" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center lg:text-left">
          <span className="font-semibold uppercase tracking-[0.2em] text-brandColor">
            Partner tecnológico
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Especialistas en{" "}
            <span className="text-brandColor">CALIPSO ERP Full Web</span>
          </h2>

          <img
            src={calipsoLogo}
            alt="Calipso ERP"
            className="mx-auto mt-6 h-10 w-auto object-contain lg:mx-0"
          />

          <p className="mt-8 text-lg leading-8 text-slate-600">
            En ALPA Sistemas contamos con amplia experiencia en la
            implementación, parametrización y soporte de{" "}
            <strong>Calipso ERP</strong>, acompañando a empresas en la
            optimización de sus procesos mediante una solución moderna, flexible
            y escalable.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <BadgeCheck className="text-brandColor" size={22} />
              <span className="text-slate-700">
                Implementación y puesta en marcha
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <BadgeCheck className="text-brandColor" size={22} />
              <span className="text-slate-700">Consultoría especializada</span>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <BadgeCheck className="text-brandColor" size={22} />
              <span className="text-slate-700">
                Capacitación y acompañamiento continuo
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <BadgeCheck className="text-brandColor" size={22} />
              <span className="text-slate-700">
                Mesa de ayuda y soporte técnico
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
