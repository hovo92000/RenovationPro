import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import doImg1 from "@assets/icons/doBaxniq1.jpeg"
import posleImg1 from "@assets/icons/posleBaxniq.jpeg"
import doImg2 from "@assets/icons/doHayat.jpeg"
import doImg3 from "@assets/icons/doBaxniq2.jpeg"
import posleImg2 from "@assets/icons/posleHayat.jpeg"
import posleImg3 from "@assets/icons/posleBaxniq2.jpeg"

export function Projects() {
  const projects = [
    // {
    //   title: "Cuisine",
    //   description: "Ici nous avons effectué les travaux suivants: plomberie, électricité, création des faux plafonds, pose carrelage et assemblage des meubles.",
    //   beforeImage: "https://images.unsplash.com/photo-1610497421977-fc558dc4b5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBraXRjaGVuJTIwYmVmb3JlJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NjQ0OTAyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   afterImage: "https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbnxlbnwxfHx8fDE3NjQ0NzU2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    // },
    {
      title: "Salle de bain",
      description: "Travaux réalisés: plomberie, électricité, pose carrelage, création douche italienne.",
      beforeImage: doImg1,
      afterImage: posleImg1,
    }
  ];

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Nos Réalisations</h2>
          <p className="text-slate-600">Découvrez quelques-uns de nos projets récents</p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <h3 className="text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-600 mb-8">{project.description}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full">Avant</span>
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src={project.beforeImage}
                        alt={`${project.title} - Avant`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-full">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Après</span>
                      </div>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                        <ImageWithFallback
                          src={project.afterImage}
                          alt={`${project.title} - Après`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
