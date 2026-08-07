import { motion } from "motion/react";
import calipsoLogo from "../assets/LogoCalipso.png";
import { BadgeCheck } from "lucide-react";
import alpaRobot from "../assets/alpaRobot.jpeg";

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
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-semibold uppercase tracking-[0.2em] text-brandColor">
            Partner tecnológico
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
            Especialistas en CALIPSO ERP Full Web.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Contamos con amplia experiencia en la implementación,
            parametrización y soporte de Calipso ERP Full Web, acompañando a
            empresas en la optimización de sus procesos mediante una solución
            moderna, flexible y escalable.
          </p>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08 + 0.2,
                  }}
                  className="flex items-center gap-3"
                >
                  <BadgeCheck size={22} className="shrink-0 text-brandColor" />

                  <span className="leading-7 text-slate-700">{feature}</span>
                </motion.div>
              ))}
              <img
                src={calipsoLogo}
                alt="Calipso ERP"
                className="h-14 w-auto object-contain mt-6"
              />
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <img
              src={alpaRobot}
              alt="ALPA Robot"
              className="h-60 w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
