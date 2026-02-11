import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1692166567037-4009225486ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQ0NDU1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction professionnelle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-white mb-6">Experts en Rénovation depuis 20 ans</h2>
        <p className="max-w-3xl mx-auto text-slate-200 mb-8">
          Nous sommes une équipe des professionnels avec 20 ans d'expérience dans le domaine. 
          Nous effectuons la plupart des travaux d'intérieur et extérieur: Peinture et décoration, 
          électricité, plomberie, carrelage, menuiserie, maçonnerie, isolation.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors"
        >
          Demander un devis gratuit
        </a>
      </div>
    </section>
  );
}
