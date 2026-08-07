import { motion } from "motion/react";
import { MonitorCog, Headset, Check } from "lucide-react";

const services = [
  {
    icon: MonitorCog,
    title: "ERP Calipso Full Web",
    description:
      "Implementamos soluciones Calipso ERP para optimizar la gestión de tu empresa, acompañándote en cada etapa del proyecto.",
    items: ["Implementación", "Consultoría", "Capacitación", "Optimización"],
  },
  {
    icon: Headset,
    title: "Help Desk ALPA",
    description:
      "Mesa de ayuda online con atención rápida y especializada para acompañarte en el uso diario del sistema.",
    items: [
      "Seguimiento de tickets",
      "Resolución ágil",
      "WhatsApp corporativo",
      "Email y plataforma online",
      "Prevención y mejora continua",
      "Documentación y manuales",
      "Soporte correctivo y evolutivo",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold uppercase tracking-[0.2em] text-brandColor">
            Servicios
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
            Soluciones para impulsar el crecimiento de tu empresa.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Brindamos implementación, consultoría y soporte especializado para
            ayudarte a optimizar la gestión de tu negocio con soluciones Calipso
            ERP.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, description, items }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brandColor hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brandColor/10 text-brandColor transition-colors duration-300 group-hover:bg-brandColor group-hover:text-white">
                <Icon size={28} />
              </div>

              <h3 className="mb-4 text-xl font-bold text-slate-900">{title}</h3>

              <p className="leading-7 text-slate-600">{description}</p>

              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                {items.map((item, itemIndex) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.15 + itemIndex * 0.05 + 0.25,
                    }}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brandColor/10 text-brandColor">
                      <Check size={14} />
                    </div>

                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
