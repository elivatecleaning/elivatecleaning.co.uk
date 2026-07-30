import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service: z.string().trim().min(1, "Please choose a service"),
  message: z.string().trim().max(1000).optional(),
});

const services = [
  "Deep Clean",
  "End of Tenancy",
  "Recurring Cleaning",
  "Carpet Cleaning",
  "Airbnb Turnover",
  "Office Cleaning",
  "Bathroom Cleaning",
  "Post-Construction Clean",
];

const field =
  "w-full rounded-xl border border-[color-mix(in_oklab,white_18%,transparent)] bg-[color-mix(in_oklab,white_8%,transparent)] px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/45 outline-none transition focus:border-[color-mix(in_oklab,var(--sky)_60%,transparent)] focus:ring-4 focus:ring-[color-mix(in_oklab,var(--sky)_20%,transparent)]";

export function BookingForm() {
  const [sending, setSending] = useState(false);

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const parsed = schema.safeParse(Object.fromEntries(fd));
        if (!parsed.success) {
          toast.error(parsed.error.issues[0].message);
          return;
        }
        setSending(true);
        setTimeout(() => {
          setSending(false);
          toast.success("Request received — we'll confirm your slot within the hour.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-medium tracking-wide text-primary-foreground/70 uppercase">
          Name
        </label>
        <input id="name" name="name" maxLength={100} className={field} placeholder="Jane Whitfield" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-xs font-medium tracking-wide text-primary-foreground/70 uppercase">
          Phone number
        </label>
        <input id="phone" name="phone" maxLength={30} className={field} placeholder="07000 000000" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-medium tracking-wide text-primary-foreground/70 uppercase">
          Email
        </label>
        <input id="email" name="email" type="email" maxLength={255} className={field} placeholder="you@email.com" />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-xs font-medium tracking-wide text-primary-foreground/70 uppercase">
          Service requested
        </label>
        <select id="service" name="service" defaultValue="" className={field}>
          <option value="" disabled className="text-ink">
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s} className="text-ink">
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium tracking-wide text-primary-foreground/70 uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          className={field}
          placeholder="Property size, postcode, preferred date…"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-sky)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] disabled:opacity-60 sm:col-span-2"
      >
        {sending ? "Sending…" : "Get Free Quote"}
        <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
