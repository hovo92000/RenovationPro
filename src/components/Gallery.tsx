import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { X } from "lucide-react";
import doImg1 from "@assets/icons/doBaxniq1.jpeg"
import posleImg1 from "@assets/icons/posleBaxniq.jpeg"
import doImg2 from "@assets/icons/doHayat.jpeg"
import doImg3 from "@assets/icons/doBaxniq2.jpeg"
import posleImg2 from "@assets/icons/posleHayat.jpeg"
import posleImg3 from "@assets/icons/posleBaxniq2.jpeg"



interface BeforeAfterImage {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; type: string } | null>(null);

  const galleryImages = [
    {
      title: "Salon moderne",
      category: "Salon",
      beforeImage: doImg1,
      afterImage: posleImg1
    },
    {
      title: "Salle de bain avec douche italienne",
      category: "Salle de bain",
      beforeImage: doImg1,
      afterImage: posleImg1
    },
    {
      title: "Salle de bain avec douche italienne",
      category: "Salle de bain",
      beforeImage: doImg3,
      afterImage: posleImg3
    },
    // {
    //   title: "Peinture et décoration",
    //   category: "Peinture",
    //   beforeImage: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50aW5nJTIwYmVmb3JlfGVufDF8fHx8MTc2NDQ5MDc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   afterImage: "https://images.unsplash.com/photo-1721395283816-48b567a9e4d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGVkJTIwcm9vbSUyMG1vZGVybnxlbnwxfHx8fDE3NjQ0OTA3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    // },
    // {
    //   title: "Pose de carrelage",
    //   category: "Carrelage",
    //   beforeImage: "https://images.unsplash.com/photo-1708919268841-27c120c45a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9vciUyMHRpbGluZyUyMHdvcmt8ZW58MXx8fHwxNzY0NDkwNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   afterImage: "https://images.unsplash.com/photo-1760259477563-90a12ff52b61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5pc2hlZCUyMHRpbGUlMjBmbG9vcnxlbnwxfHx8fDE3NjQ0OTA3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    // },
    // {
    //   title: "Rénovation complète salon",
    //   category: "Rénovation",
    //   beforeImage: "https://images.unsplash.com/photo-1763667083561-90f384685999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29tJTIwcmVub3ZhdGlvbiUyMGVtcHR5fGVufDF8fHx8MTc2NDQ5MDc3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   afterImage: "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0NDY2OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    // }
  ];

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Galerie Avant / Après</h2>
          <p className="text-slate-600">Découvrez la transformation de nos projets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div key={index} className="bg-slate-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-4">
                <h3 className="text-slate-900 mb-2">{item.title}</h3>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm mb-4">
                  {item.category}
                </span>
              </div>
              
              <div className="space-y-2 px-4 pb-4">
                <div 
                  className="cursor-pointer group"
                  onClick={() => setSelectedImage({ src: item.beforeImage, title: item.title, type: "Avant" })}
                >
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm">Avant</span>
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={item.beforeImage}
                      alt={`${item.title} - Avant`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div 
                  className="cursor-pointer group"
                  onClick={() => setSelectedImage({ src: item.afterImage, title: item.title, type: "Après" })}
                >
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Après</span>
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={item.afterImage}
                      alt={`${item.title} - Après`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full">
            <div className="text-white text-center mb-4">
              <h3>{selectedImage.title} - {selectedImage.type}</h3>
            </div>
            <ImageWithFallback
              src={selectedImage.src}
              alt={selectedImage.title}
               style={{ height: "90vh", width: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
