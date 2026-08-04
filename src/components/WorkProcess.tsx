import { ClipboardList, Settings, GraduationCap, Headset } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Relevamiento",
    description:
      "Analizamos la realidad de tu empresa, sus procesos y objetivos para definir la mejor estrategia de implementación.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Implementación",
    description:
      "Configuramos e implementamos la solución ERP adaptándola a las necesidades específicas de tu organización.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Capacitación",
    description:
      "Capacitamos a tu equipo para que aproveche al máximo todas las funcionalidades del sistema.",
  },
  {
    icon: Headset,
    number: "04",
    title: "Soporte continuo",
    description:
      "Brindamos acompañamiento permanente para resolver consultas y garantizar el correcto funcionamiento del ERP.",
  },
];

export default function WorkProcess() {
  return (
    <section id="proceso" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-brandColor">
            Nuestro proceso
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Te acompañamos en cada etapa del proyecto
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Nuestro objetivo es lograr una implementación exitosa, minimizando
            riesgos y asegurando que tu empresa obtenga el máximo valor de su
            sistema ERP.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-brandColor hover:shadow-xl">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brandColor/10 text-brandColor">
                    <Icon size={30} />
                  </div>

                  <span className="mt-6 inline-block text-sm font-bold tracking-widest text-brandColor">
                    PASO {step.number}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
