import { ClipboardList, Wrench, GraduationCap, Headset } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01.",
    title: "Relevamiento",
    description:
      "Analizamos la realidad de tu empresa, sus procesos y objetivos para definir la mejor estrategia de implementación.",
  },
  {
    icon: Wrench,
    number: "02.",
    title: "Implementación",
    description:
      "Configuramos e implementamos la solución ERP adaptándola a las necesidades específicas de tu organización.",
  },
  {
    icon: GraduationCap,
    number: "03.",
    title: "Capacitación",
    description:
      "Capacitamos a tu equipo para que aproveche al máximo todas las funcionalidades del sistema.",
  },
  {
    icon: Headset,
    number: "04.",
    title: "Soporte continuo",
    description:
      "Brindamos acompañamiento permanente para resolver consultas y garantizar el correcto funcionamiento del ERP.",
  },
];

export default function WorkProcess() {
  return (
    <section id="proceso" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.2em] text-brandColor">
            Nuestro proceso
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
            Te acompañamos en cada etapa del proyecto.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Trabajamos con una metodología clara para lograr una implementación
            exitosa, minimizando riesgos y asegurando el máximo aprovechamiento
            de tu sistema ERP.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ icon: Icon, number, title, description }) => (
            <article
              key={number}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brandColor hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brandColor/10 text-brandColor transition-colors duration-300 group-hover:bg-brandColor group-hover:text-white">
                <Icon size={28} />
              </div>

              <span className="text-sm font-semibold tracking-[0.2em] text-brandColor">
                {number}
              </span>

              <h3 className="mt-2 mb-4 text-xl font-bold text-slate-900">
                {title}
              </h3>

              <p className="leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
