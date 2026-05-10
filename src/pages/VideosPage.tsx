const videos = [
  {id: 1, src: "/videos/Video2EOG.mp4", titulo: "Un óptimo comienzo de clases"},
  { id: 2, src: "/videos/Video4EOG.mp4", titulo: "¿Te cuesta matemáticas? Probá estas clases" },
  { id: 2, src: "/videos/videoMatematicaJulio.mp4", titulo: "Aprobá en Julio" },
  
];

export default function VideosPage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white px-4 py-16">

      <h1 className="text-center text-2xl font-bold mb-8">
        Videos promocionales
      </h1>

      <div className="flex flex-col items-center gap-8">
        {videos.map((v) => (
          <VideoCard key={v.id} src={v.src} titulo={v.titulo} />
        ))}
      </div>

    </div>
  );
}

const VideoCard = ({
  src,
  titulo,
}: {
  src: string;
  titulo: string;
}) => {
  return (
    <div className="w-full max-w-sm">

      <div className="aspect-[9/16] bg-zinc-800 rounded-xl overflow-hidden">
        <video
          controls
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta video.
        </video>
      </div>

      <p className="mt-3 text-sm text-center text-gray-400">
        {titulo}
      </p>

    </div>
  );
};