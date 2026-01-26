interface HStackProps {
  items: string[];
}

export function HStack({ items }: HStackProps) {
  return (
    <div className="w-full flex flex-wrap gap-3">
      {items.map((n, index) => (
        <span
          key={index}
          className="bg-gradient-to-r from-teal-300 to-emerald-300 drop-shadow-md inline-block skill-pill text-white text-sm font-medium px-4 py-1 rounded-full"
        >
          {n}
        </span>
      ))}
    </div>
  );
}
