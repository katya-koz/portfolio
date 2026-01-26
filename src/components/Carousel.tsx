import { useState, useRef, useEffect } from "react";

interface CarouselProps {
  images: string[]; // can be image or video file paths
}

export default function Carousel({ images }: CarouselProps) {
  const [currItem, setCurrItem] = useState<number>(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePrev = (): void => {
    setCurrItem((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (): void => {
    setCurrItem((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currItem) {
        video.muted = false;
        video.play().catch(() => {});
      } else {
        video.muted = true;
        video.pause();
      }
    });
  }, [currItem]);

  return (
    <div className="relative rounded-lg overflow-hidden">
      {/* Slide container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currItem * 100}%)` }}
      >
        {images.map((src, index) => {
          const isVideo: boolean = /\.(mp4|webm|mov)$/i.test(src);

          return isVideo ? (
            <video
              key={index}
              ref={(el) => {
                videoRefs.current[index] = el; // assign, return nothing
              }}
              src={`images/projects/${src}`}
              className="w-full h-full flex-shrink-0 object-cover"
              controls
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              key={index}
              src={`images/projects/${src}`}
              className="w-full h-full flex-shrink-0 object-cover"
            />
          );
        })}
      </div>
      {images.length > 1 && (
        <>
          <i
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                       text-3xl text-teal-400 hover:text-teal-200 cursor-pointer bi bi-caret-left"
            onClick={handlePrev}
          />
          <i
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                       text-3xl text-teal-400 hover:text-teal-200 cursor-pointer bi bi-caret-right"
            onClick={handleNext}
          />
        </>
      )}

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currItem ? "bg-slate-400" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
