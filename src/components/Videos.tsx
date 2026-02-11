import { useState } from "react";
import { Play, X } from "lucide-react";
import video1 from "../assets/icons/video1.mp4";
import video2 from "../assets/icons/video2.mp4";
import video3 from "../assets/icons/video3.mp4";

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      title: "Rénovation complète d'une salon",
      src: video1,
      // poster:
      //   "https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "0:31",
      description: "Découvrez le processus complet de rénovation d'une salon",
    },
    {
      title: "Rénovation complète d'une cuisine",
      src: video2,
      // poster:
      //   "https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "0:41",
      description: "Découvrez le processus complet de rénovation d'une cuisine",
    },
    {
      title: "Rénovation complète d'une salle de bain",
      src: video3,
      // poster:
      //   "https://images.unsplash.com/photo-1760438492655-63efac635f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      duration: "0:28",
      description: "Découvrez le processus complet de rénovation d'une salle de bain",
    }
  ];

  return (
    <section id="videos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 mb-4">Nos Vidéos</h2>
          <p className="text-slate-600">Suivez nos projets en vidéo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden bg-slate-200">
                {/* poster thumbnail */}
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={video.src}
                  poster={video.poster}
                  preload="metadata"
                  playsInline
                  muted
                />

                {/* play overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>

                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-slate-900 mb-2">{video.title}</h3>
                <p className="text-slate-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup (like your image popup) */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideo(null);
            }}
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="text-white text-center mb-4">
              <h3>{selectedVideo.title}</h3>
            </div>

            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
              <video
                className="w-full h-full"
                controls
                autoPlay
                playsInline
                preload="metadata"
                poster={selectedVideo.poster}
              >
                <source src={selectedVideo.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
