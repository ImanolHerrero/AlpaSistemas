import { motion } from "motion/react";
import { Briefcase, Cog, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Consultoría personalizada",
    description:
      "Analizamos la realidad de tu empresa para implementar una solución adaptada a tus procesos y objetivos.",
  },
  {
    icon: Cog,
    title: "Implementación efectiva",
    description:
      "Te acompañamos desde la planificación hasta la puesta en marcha del ERP para asegurar una implementación exitosa.",
  },
  {
    icon: Users,
    title: "Equipo experto",
    description:
      "Contamos con consultores especializados en soluciones ERP Full Web, comprometidos con cada proyecto.",
  },
  {
    icon: TrendingUp,
    title: "Automatización y eficiencia",
    description:
      "Optimizá procesos, reducí tareas repetitivas y mejorá la productividad de toda tu organización.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="beneficios" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-semibold uppercase tracking-[0.2em] text-brandColor">
            ¿Por qué elegir ALPA?
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
            Experiencia, compromiso y tecnología para potenciar tu negocio.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Acompañamos a empresas en la implementación de soluciones ERP con
            consultoría, soporte continuo y un compromiso a largo plazo basado
            en la confianza y los resultados.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brandColor hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brandColor/10 text-brandColor transition-colors duration-300 group-hover:bg-brandColor">
                <Icon
                  size={28}
                  className="transition-colors duration-300 group-hover:text-white"
                />
              </div>

              <h3 className="mb-4 text-xl font-bold text-slate-900">{title}</h3>

              <p className="leading-7 text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
