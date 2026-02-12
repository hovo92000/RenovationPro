import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">Contactez-nous</h2>
          <p className="text-slate-300">N'hésitez pas à nous contacter pour un devis gratuit</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg">
            <MapPin className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-white mb-2">Adresse</h3>
            <p className="text-slate-300">
              2 Square de la Moselle<br />
              7831 Maurepas
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg">
            <Phone className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-white mb-2">Téléphone</h3>
            <a href="tel:+330631632551" className="text-slate-300 hover:text-orange-500 transition-colors">
              +330631632551
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg">
            <Mail className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-white mb-2">Email</h3>
            <a href="mailto:hovakimyanh711@gmail.com" className="text-slate-300 hover:text-orange-500 transition-colors">
              hovakimyanh711@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg">
            <Clock className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-white mb-2">Horaires</h3>
            <p className="text-slate-300">
              Lun - Sam<br />
              8h00 - 18h00
            </p>
          </div>
        </div>
          <div className="mt-10 max-w-6xl mx-auto overflow-hidden rounded-xl border border-slate-800">
     <div className="mt-12 max-w-6xl mx-auto rounded-xl border border-slate-800 overflow-hidden">
        <div className="relative w-full" style={{ height: 450 }}>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d612.8460181850344!2d1.9395996696421234!3d48.773918198207554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6836617a5d1b5%3A0x46e8a67826d32971!2s2%20Sq.%20de%20la%20Moselle%207831%2C%2078310%20Maurepas%2C%20France!5e1!3m2!1sen!2sam!4v1764495559773!5m2!1sen!2sam"
          width="100%"
          height="450"
          allowfullscreen
          aria-hidden="false"
          frameBorder="0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>


        </div>

        <div className="mt-16 text-center">
          <a 
            href="tel:+330631632551" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors"
          >
            Appelez-nous maintenant
          </a>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-400">
        <p>&copy; 2025 Rénovation Pro. Tous droits réservés.</p>
      </footer>
    </section>
  );
}
