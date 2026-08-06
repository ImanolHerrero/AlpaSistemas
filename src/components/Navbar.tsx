import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/alpaLogo.png";

const links = [
  { label: "Inicio", href: "#hero" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Calipso ERP", href: "#partner" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <a href="#hero">
            <img src={logo} alt="ALPA Sistemas" className="h-12 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-semibold text-slate-700 transition hover:text-brandColor"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5491133056461"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-brandColor px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              <FaWhatsapp size={18} />
              <span>Contáctanos</span>
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="transition-transform duration-300 lg:hidden"
            aria-label="Abrir menú"
          >
            <span
              className={`block transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </span>
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-900/50 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        className={`fixed left-0 top-20 z-50 w-full border-t border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 font-semibold text-slate-700 transition hover:text-brandColor"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://wa.me/5491133056461"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-brandColor px-5 py-3 font-semibold text-white transition hover:opacity-90"
          >
            <FaWhatsapp size={18} />
            <span>Contáctanos</span>
          </a>
        </div>
      </nav>
    </>
  );
}
