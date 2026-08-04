import { useState } from "react";
import { Menu, X, Send } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="ALPA Sistemas" className="h-12 w-auto" />
          ALPA Sistemas
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-slate-700 transition hover:text-brandColor"
            >
              {link.label}
            </a>
          ))}

          <a className="flex items-center gap-2 rounded-lg bg-brandColor px-5 py-3 font-semibold text-white transition hover:opacity-90">
            <Send size={18} />
            <span>Escribinos por WhatsApp</span>
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-slate-700 transition hover:text-brandColor"
              >
                {link.label}
              </a>
            ))}

            <a
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-brandColor px-5 py-3 font-semibold text-white"
            >
              <Send size={18} />
              <span>Escribinos por WhatsApp</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
