import { useEffect, useRef, useState } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currItem, setCurrItem] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePrev = () => {
    const prevIndex = currItem - 1 < 0 ? images.length - 1 : currItem - 1; // circular indexing
    setCurrItem(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = currItem + 1 >= images.length ? 0 : currItem + 1;
    setCurrItem(nextIndex);
  };
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currItem) {
        video.muted = true;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
    });
  }, [currItem]);

  return (
    <div className="flex-3 flex m-0 flex-col">
      <div className="justify-center relative">
        {images.length > 1 && (
          <>
            {" "}
            <i
              className="
            absolute
            pl-2
            z-10
            left-0
            top-[50%]
            -translate-y-1/2
            text-glow
            text-green
            font-bold
            text-3xl
            bi bi-chevron-compact-left"
              onClick={handlePrev}
            ></i>
            <i
              className="
            transition-colors
            duration-200
            right-0
            absolute
            z-10
            pr-2
            -translate-y-1/2
            top-[50%]
            font-bold
            text-green
            text-glow 
            text-3xl
            bi bi-chevron-compact-right"
              onClick={handleNext}
            ></i>
          </>
        )}
        {images.map((src, index) => {
          const isVideo = /\.(mp4|webm|mov)$/i.test(src);
          const isPdf = /\.pdf$/i.test(src);
          const isActive = index === currItem;

          return (
            <div
              key={index}
              className={`h-full w-full ${isActive ? "carousel-item" : "hidden"}`}
            >
              <div className="h-full shadow-lg rounded-lg overflow-hidden w-full ">
                {isVideo && (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={`images/projects/${src}`}
                    className="w-full aspect-video object-fill"
                    controls
                    loop
                    muted
                  />
                )}

                {isPdf && (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <iframe
                      src={`images/projects/${src}`}
                      className="w-full h-full"
                      title={`pdf-${index}`}
                    />
                  </div>
                )}

                {!isVideo && !isPdf && (
                  <img
                    src={`images/projects/${src}`}
                    className="w-full  aspect-video  object-cover"
                    alt=""
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-center gap-2 m-2">
        {images.length > 1 &&
          images.map((_, index) => (
            <span
              className={
                index == currItem
                  ? "h-2 w-2 bg-slate-400 rounded-full"
                  : "h-2 w-2 bg-slate-200 rounded-full"
              }
            ></span>
          ))}
      </div>
    </div>
  );
}
