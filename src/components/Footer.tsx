import { Mail, Phone, User, MapPin, ChevronRight } from "lucide-react";
import logo from "../assets/alpaLogo.png";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Calipso ERP", href: "#partner" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="ALPA Sistemas" className="mb-5 h-14 w-auto" />

            <p className="leading-7 text-slate-600">
              Más de 20 años acompañando a empresas en la implementación,
              consultoría y soporte de soluciones ERP para optimizar sus
              procesos de gestión.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Navegación</h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 transition hover:text-brandColor"
                  >
                    <ChevronRight size={16} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Contacto</h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brandColor" />
                <a
                  href="mailto:info@alpasistemas.com"
                  className="transition hover:text-brandColor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@alpasistemas.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brandColor" />
                <a
                  href="https://wa.me/5491133056461"
                  className="transition hover:text-brandColor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +54 9 11 3305-6461
                </a>
              </li>

              <li className="flex items-center gap-3">
                <User size={18} className="text-brandColor" />
                <a
                  href="https://www.linkedin.com/company/alpa-sistemas/"
                  className="transition hover:text-brandColor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brandColor" />
                Buenos Aires, Argentina
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} ALPA Sistemas. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
