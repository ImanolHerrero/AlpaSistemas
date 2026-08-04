import { MonitorCog, Headset, Check } from "lucide-react";

const services = [
  {
    icon: MonitorCog,
    title: "ERP Full Web",
    description:
      "Implementamos soluciones ERP para optimizar la gestión de tu empresa, acompañándote en cada etapa del proyecto.",
    items: [
      "Implementación",
      "Consultoría personalizada",
      "Capacitación",
      "Optimización de procesos",
    ],
  },
  {
    icon: Headset,
    title: "Help Desk ALPA",
    description:
      "Mesa de ayuda online con atención rápida y especializada para acompañarte en el uso diario del sistema.",
    items: [
      "Seguimiento de tickets",
      "Soporte especializado",
      "WhatsApp corporativo",
      "Email",
      "Plataforma online",
      "Documentación y manuales",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-brandColor">
            Servicios
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Soluciones pensadas para acompañar el crecimiento de tu empresa
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Brindamos servicios especializados en implementación de ERP y
            soporte técnico continuo para garantizar el éxito de cada proyecto.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, description, items }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-brandColor"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brandColor/10 text-brandColor">
                <Icon size={34} />
              </div>

              <h3 className="text-3xl font-bold text-slate-900">{title}</h3>

              <p className="mt-4 text-lg leading-7 text-slate-600">
                {description}
              </p>

              <ul className="mt-8 space-y-4">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brandColor/15 text-brandColor">
                      <Check size={16} />
                    </div>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
