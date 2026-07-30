import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import before from "@/assets/before-carpet.jpg";
import after from "@/assets/after-carpet.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  return (
    <div
      ref={ref}
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
      className="relative aspect-[3/2] w-full cursor-ew-resize touch-none overflow-hidden rounded-3xl shadow-[var(--shadow-float)] select-none"
    >
      <img
        src={after}
        alt="Carpet after professional deep cleaning"
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt="Stained carpet before cleaning"
          loading="lazy"
          width={1200}
          height={800}
          className="absolute inset-0 h-full object-cover"
          style={{ width: ref.current?.clientWidth ?? "100%", maxWidth: "none" }}
        />
        <span className="absolute top-4 left-4 rounded-full bg-[color-mix(in_oklab,var(--navy-deep)_75%,transparent)] px-3 py-1 text-xs font-semibold tracking-widest text-primary-foreground uppercase backdrop-blur">
          Before
        </span>
      </div>
      <span className="absolute top-4 right-4 rounded-full bg-[color-mix(in_oklab,var(--sky)_85%,transparent)] px-3 py-1 text-xs font-semibold tracking-widest text-accent-foreground uppercase backdrop-blur">
        After
      </span>
      <div
        className="absolute inset-y-0 w-px bg-[color-mix(in_oklab,white_90%,transparent)] shadow-[var(--shadow-glow)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[image:var(--gradient-sky)] text-primary-foreground shadow-[var(--shadow-glow)]">
          <MoveHorizontal className="size-5" />
        </div>
      </div>
    </div>
  );
}
