interface HStackProps {
  items: string[];
}

export function HStack({ items }: HStackProps) {
  return (
    <div className="mt-auto w-full flex flex-wrap gap-3">
      {items.map((n, index) => (
        <span
          key={index}
          className="dark:text-slate-800 bg-gradient-to-r from-teal-400 to-emerald-400 drop-shadow-md inline-block skill-pill text-white text-sm font-bold px-4 py-1 rounded-full"
        >
          {n}
        </span>
      ))}
    </div>
  );
}
