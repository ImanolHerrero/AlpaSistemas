import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logoAlpa2.jpeg";

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
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#hero" className="shrink-0">
            <img
              src={logo}
              alt="ALPA Sistemas"
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-5 xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm font-semibold text-slate-700 transition hover:text-brandColor"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://wa.me/5491133056461"
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-lg bg-brandColor px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <FaWhatsapp size={18} />
              <span>Contáctanos</span>
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100 xl:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-slate-900/50 transition-opacity duration-300 xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <nav
        className={`fixed left-0 top-20 z-50 w-full border-t border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out xl:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-4 lg:px-8">
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
