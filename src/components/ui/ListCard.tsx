interface ListCardProps {
  title: string;
  items: string[];
  marker: string;
}

export function ListCard({ title, items, marker }: ListCardProps) {
  return (
    <div className="rounded-[20px] bg-white p-6 sm:p-8">
      <h3 className="text-t23 font-semibold text-ink">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3 text-t14 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true">{marker}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
