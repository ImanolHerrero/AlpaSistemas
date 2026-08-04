import { Mail, Phone, User, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="font-semibold uppercase tracking-[0.2em] text-brandColor">
              Contacto
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              ¿Listo para optimizar la gestión de tu empresa?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Nuestro equipo está preparado para asesorarte en la
              implementación, consultoría y soporte de soluciones ERP.
              Contactanos y conversemos sobre las necesidades de tu empresa.
            </p>

            <a
              href="https://wa.me/5491133056461"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brandColor px-6 py-4 font-semibold text-white transition hover:opacity-90"
            >
              <Send size={18} />
              Escribinos por WhatsApp
            </a>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 backdrop-blur">
            <h3 className="mb-8 text-2xl font-semibold">
              Información de contacto
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brandColor/15 p-3">
                  <Mail className="text-brandColor" size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href="mailto:info@alpasistemas.com"
                    className="transition hover:text-brandColor"
                  >
                    info@alpasistemas.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brandColor/15 p-3">
                  <Phone className="text-brandColor" size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Teléfono / WhatsApp</p>
                  <a
                    href="https://wa.me/5491133056461"
                    className="transition hover:text-brandColor"
                  >
                    +54 9 11 3305-6461
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brandColor/15 p-3">
                  <User className="text-brandColor" size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/company/alpa-sistemas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-brandColor"
                  >
                    ALPA Sistemas
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-brandColor/15 p-3">
                  <MapPin className="text-brandColor" size={22} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">Ubicación</p>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
