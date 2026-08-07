import { Mail } from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/logoAlpa2.jpeg";

const links = [
  { label: "• Inicio", href: "#hero" },
  { label: "• Beneficios", href: "#beneficios" },
  { label: "• Servicios", href: "#servicios" },
  { label: "• Proceso", href: "#proceso" },
  { label: "• Calipso ERP", href: "#partner" },
  { label: "• Contacto", href: "#contacto" },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    content: "info@alpasistemas.com",
    href: "mailto:info@alpasistemas.com",
  },
  {
    icon: FaWhatsapp,
    label: "+54 9 11 3305-6461",
    href: "https://wa.me/5491133056461",
  },
  {
    icon: FaLinkedin,
    label: "ALPA Sistemas",
    href: "https://www.linkedin.com/company/alpa-sistemas/",
  },
  {
    icon: FaInstagram,
    label: "@alpasistemascalipso",
    href: "https://www.instagram.com/alpasistemascalipso/",
  },
  {
    icon: FaFacebook,
    label: "ALPA Sistemas",
    href: "https://www.facebook.com/profile.php?id=61561332731803",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid text-center lg:grid-cols-[1fr_1fr_1fr] lg:text-left">
          <div>
            <img
              src={logo}
              alt="ALPA Sistemas"
              className="mx-auto mb-4 h-16 w-auto lg:mx-0"
            />

            <p className="mx-auto max-w-md leading-6 text-slate-600 lg:mx-0 lg:max-w-sm">
              Más de 20 años implementando, consultando y brindando soporte
              sobre Calipso ERP Full Web, ayudando a empresas a optimizar su
              gestión mediante tecnología.
            </p>
          </div>

          <div className="hidden lg:block">
            <h3 className="mb-4 text-base font-bold text-slate-900">
              Navegación
            </h3>

            <ul className="grid grid-cols-2 gap-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-brandColor"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <h3 className="mb-4 text-base font-bold text-slate-900">
              Contacto
            </h3>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-3">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandColor/10 text-brandColor transition-all duration-300 hover:bg-brandColor hover:text-white"
                    >
                      <Icon size={17} />
                    </a>
                  ) : (
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brandColor/10 text-brandColor">
                      <Icon size={17} />
                    </div>
                  )}

                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 transition-colors duration-200 hover:text-brandColor"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-600">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ALPA Sistemas. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
