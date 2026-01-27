import React from "react";
import { useState } from "react";

export default function ProjectsSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [seeMore, setSeeMore] = useState(false);
  const visibleProjects = 6;

  const childrenArray = React.Children.toArray(children);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap">
        {childrenArray
          .slice(0, seeMore ? childrenArray.length : visibleProjects)
          .map((child) => child)}
      </div>

      {childrenArray.length > visibleProjects && (
        <div
          className="dark:bg-white dark:text-slate-800 bg-gray-800 inline-block text-white text-lg m-4 font-bold button-glow px-4 py-1 rounded-full"
          //   className="mt-4 text-teal-400 hover:text-teal-600"
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "Show less" : "See more"}
        </div>
      )}
      {/* weird location for this border line, but this is how i could center it  */}
      <hr className="w-full border-slate-200 dark:border-slate-700" />
    </div>
  );
}
