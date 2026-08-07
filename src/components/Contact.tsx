import { motion } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    content: "info@alpasistemas.com",
    href: "mailto:info@alpasistemas.com",
  },
  {
    icon: FaWhatsapp,
    label: "Teléfono / WhatsApp",
    content: "+54 9 11 3305-6461",
    href: "https://wa.me/5491133056461",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    content: "ALPA Sistemas",
    href: "https://www.linkedin.com/company/alpa-sistemas/",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    content: "Buenos Aires, Argentina",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="max-w-xl text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
            }}
          >
            <span className="font-semibold uppercase tracking-[0.2em] text-brandColor">
              Contacto
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              ¿Listo para optimizar la gestión de tu empresa?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Nuestro equipo está preparado para asesorarte en la
              implementación, consultoría y soporte de soluciones Calipso ERP.
              Contactanos y conversemos sobre las necesidades de tu empresa.
            </p>

            <a
              href="https://wa.me/5491133056461"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-brandColor px-6 py-4 font-semibold text-white shadow-xl shadow-brandColor/20 transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              <FaWhatsapp size={18} />
              Contáctanos por WhatsApp
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-fit rounded-2xl bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-6 text-xl font-bold">
                Información de contacto
              </h3>

              <div className="space-y-5">
                {contactItems.map(
                  ({ icon: Icon, label, content, href }, index) => (
                    <motion.div
                      key={label}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.2 + index * 0.08,
                      }}
                    >
                      {href ? (
                        <a
                          href={href}
                          target={label === "LinkedIn" ? "_blank" : undefined}
                          rel={
                            label === "LinkedIn"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brandColor/15 transition hover:bg-brandColor/25"
                        >
                          <Icon className="text-brandColor" size={22} />
                        </a>
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brandColor/15">
                          <Icon className="text-brandColor" size={22} />
                        </div>
                      )}

                      <div>
                        <p className="text-sm text-slate-400">{label}</p>

                        {href ? (
                          <a
                            href={href}
                            target={label === "LinkedIn" ? "_blank" : undefined}
                            rel={
                              label === "LinkedIn"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="transition hover:text-brandColor"
                          >
                            {content}
                          </a>
                        ) : (
                          <p>{content}</p>
                        )}
                      </div>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
