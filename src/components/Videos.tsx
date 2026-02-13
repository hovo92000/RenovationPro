import { useState } from "react";
import { Play, X } from "lucide-react";
import video1 from "../assets/icons/video1.mp4";
import video2 from "../assets/icons/video2.mp4";
import video3 from "../assets/icons/video3.mp4";
import video4 from "../assets/icons/video4.mp4";
import video5 from "../assets/icons/video5.mp4";
import video6 from "../assets/icons/video6.mp4";

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
{
  title: "Rénovation complète d'un salon",
  src: video1,
  duration: "0:31",
  description: "Découvrez la transformation complète de ce salon, du début jusqu'au résultat final.",
},
{
  title: "Rénovation complète d'une cuisine",
  src: video2,
  duration: "0:41",
  description: "Suivez les étapes de rénovation de cette cuisine et son résultat moderne et fonctionnel.",
},
{
  title: "Rénovation complète d'une salle de bain",
  src: video3,
  duration: "0:28",
  description: "Voyez comment cette salle de bain a été entièrement rénovée avec un design moderne.",
},
{
  title: "Transformation d'une cuisine moderne",
  src: video4,
  duration: "0:19",
  description: "Découvrez la transformation de cette cuisine en un espace moderne et élégant.",
},
{
  title: "Rénovation complète d'une cuisine contemporaine",
  src: video5,
  duration: "0:39",
  description: "Explorez la rénovation de cette cuisine, pensée pour allier esthétique et praticité au quotidien.",
},
{
  title: "Transformation complète d'un couloir",
  src: video6,
  duration: "0:45",
  description: "Découvrez comment ce couloir a été transformé en un espace lumineux, moderne et accueillant.",
},
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
