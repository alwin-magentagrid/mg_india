import Image from "next/image";
import Link from "next/link";

interface BrandProps {
  priority?: boolean;
}

export function Brand({ priority = false }: BrandProps) {
  return (
    <Link href="/" className="flex h-8 items-center gap-[10px]" aria-label="MagentaGrid India, home">
      <span className="flex h-8 w-[168px] shrink-0 items-center">
        <Image
          src="/images/logo.png"
          alt=""
          width={153}
          height={44}
          priority={priority}
          className="h-8 w-auto"
        />
      </span>
      <span className="text-[10px] font-semibold text-muted" aria-hidden="true">
        INDIA
      </span>
    </Link>
  );
}
