import { Building2, Phone, Mail } from "lucide-react";
import logo from "@assets/icons/logo2.png";
export function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 text-orange-500" />
            {/* <img src={logo} alt="Logo Rénovation Pro" style={{ width: "100px" }}/> */}
            <div>
              <h1 className="text-white">Rénovation Pro</h1>
              <p className="text-sm text-slate-300">20 ans d'expérience</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-orange-500 transition-colors">Services</a>
            <a href="#realisations" className="hover:text-orange-500 transition-colors">Réalisations</a>
            <a href="#galerie" className="hover:text-orange-500 transition-colors">Galerie</a>
            <a href="#videos" className="hover:text-orange-500 transition-colors">Vidéos</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a href="tel:+330631632551" className="flex items-center gap-2 hover:text-orange-500 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Contactez-nous</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}