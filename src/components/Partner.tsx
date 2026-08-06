import calipsoLogo from "../assets/LogoCalipso.png";
import { BadgeCheck } from "lucide-react";

const features = [
  "Implementación y puesta en marcha",
  "Consultoría especializada",
  "Capacitación y acompañamiento continuo",
  "Mesa de ayuda y soporte técnico",
];

export default function Partner() {
  return (
    <section id="partner" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-brandColor">
            Partner tecnológico
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
            Especialistas en CALIPSO ERP Full Web.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Contamos con amplia experiencia en la implementación,
            parametrización y soporte de Calipso ERP, acompañando a empresas en
            la optimización de sus procesos mediante una solución moderna,
            flexible y escalable.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <article className="flex justify-center">
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <BadgeCheck size={22} className="shrink-0 text-brandColor" />

                  <span className="leading-7 text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="flex justify-center">
            <img
              src={calipsoLogo}
              alt="Calipso ERP"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
