import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="text-sm font-black text-[#9b7138]">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-black leading-[1.45] text-zinc-950 md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-sm leading-7 text-zinc-600 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  );
}
