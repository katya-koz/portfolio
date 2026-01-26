import React from "react";

interface SkillCarouselProps {
  items: string[];
  speed?: number;
}

export const SkillCarousel: React.FC<SkillCarouselProps> = ({
  items,
  speed = 25,
}) => {
  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex w-max"
        style={{
          animation: `tech-scroll ${speed}s linear infinite`,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="mx-6 whitespace-nowrap text-lg font-medium text-gray-700"
          >
            <span className="inline-block bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
