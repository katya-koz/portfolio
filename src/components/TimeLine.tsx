type Item = {
  title: string;
  role: string;
  date: string;
  logoSrc: string;
};

interface TimeLineProps {
  items: Item[];
}
export default function TimeLine({ items }: TimeLineProps) {
  return (
    <>
      <div className="relative space-y-12">
        {items.map((n, index) => (
          <>
            <div className="left-2 absolute rounded top-12 bottom-0 w-1 bg-teal-300 "></div>
            <div className="relative flex flex-col md:flex-row items-start">
              <div className="absolute w-5 h-5 bg-teal-300 rounded-full border-4 dark:border-slate-800 border-slate-50 z-10"></div>
              <div className="ml-6 md:ml-0 md:w-3/4 mt-4 md:mt-0 md:pl-8">
                <div className="dark:text-gray-400 text-gray-600 font-semibold">
                  <span className="leading-tight flex items-left p-top-0 w-full whitespace-nowrap">
                    {n.date}
                  </span>
                </div>
                <div className="flex items-center md:space-x-4 dark:bg-slate-700 bg-white rounded-lg m-2 p-4 shadow-md">
                  <img
                    src={n.logoSrc}
                    alt={`${n.title} Logo`}
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                  />
                  <div className="ml-6 md:ml-0">
                    <h2 className="font-semibold text-xl">{n.role}</h2>
                    <h3 className="dark:text-gray-400 text-gray-700 italic">
                      {n.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
