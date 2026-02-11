import { Paintbrush, Zap, Wrench, Grid3x3, Hammer, Home, ShieldCheck } from "lucide-react";

export function Services() {
  const services = [
    { icon: Paintbrush, title: "Peinture et décoration", description: "Peinture intérieure et extérieure, papier peint" },
    { icon: Zap, title: "Électricité", description: "Installation et rénovation électrique" },
    { icon: Wrench, title: "Plomberie", description: "Sanitaires, chauffage, canalisations" },
    { icon: Grid3x3, title: "Carrelage", description: "Pose de carrelage sol et mur" },
    { icon: Hammer, title: "Menuiserie", description: "Portes, fenêtres, parquet, meubles sur mesure" },
    { icon: Home, title: "Maçonnerie", description: "Murs, dalles, terrasses" },
    { icon: ShieldCheck, title: "Isolation", description: "Isolation thermique et acoustique" },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Nos Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Vous avez une cuisine à rénover, une salle de bain, réparer des murs après un dégât des eaux, 
            peindre les murs ou coller du papier peint, faire couler une dalle pour la terrasse, 
            poser du parquet flottant ou contrecollé, faire un meuble sur mesure ou assembler un meuble acheté… 
            On peut réaliser tous vos projets de À à Z
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
