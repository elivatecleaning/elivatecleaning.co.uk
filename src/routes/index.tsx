import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  MessageSquareText,
  Cpu,
  Star,
  Sofa,
  KeyRound,
  Repeat,
  Waves,
  Building2,
  Bath,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { BookingForm } from "@/components/BookingForm";
import { Toaster } from "@/components/ui/sonner";

import heroLiving from "@/assets/hero-living.jpg";
import cleanerKitchen from "@/assets/cleaner-kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import tenancy from "@/assets/tenancy.jpg";
import office from "@/assets/office.jpg";
import airbnb from "@/assets/airbnb.jpg";
import logo from "@/assets/elivate-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eli.Vate Cleaning Solutions | Premium London Cleaning" },
      {
        name: "description",
        content:
          "London's dependable team for Airbnb turnovers, end of tenancy, deep and office cleaning. Fully insured, DBS checked, scheduled around you.",
      },
      { property: "og:title", content: "Eli.Vate Cleaning Solutions | Premium London Cleaning" },
      {
        property: "og:description",
        content:
          "Airbnb turnovers, end of tenancy, deep cleans, carpets and offices across London. Fully insured and DBS checked.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Sparkles, title: "Deep Clean", copy: "Top-to-bottom detailing of every surface, edge and fitting — the reset your home deserves.", img: cleanerKitchen },
  { icon: KeyRound, title: "End of Tenancy", copy: "Inventory-standard cleans built to satisfy landlords and secure your full deposit back.", img: tenancy },
  { icon: Repeat, title: "Recurring Cleaning", copy: "Weekly or fortnightly visits from the same trusted cleaner, shaped around your schedule.", img: airbnb },
  { icon: Waves, title: "Carpet Cleaning", copy: "Hot-water extraction that lifts embedded grit, stains and odour from fibres.", img: heroLiving },
  { icon: Building2, title: "Office Cleaning", copy: "Out-of-hours workplace cleaning that keeps desks, kitchens and washrooms immaculate.", img: office },
  { icon: Bath, title: "Bathroom Cleaning", copy: "Limescale, grout and glass restored to a showroom-grade shine.", img: bathroom },
  { icon: Sofa, title: "Airbnb Turnovers", copy: "Rapid same-day resets with linen changes and photo-verified handovers between guests.", img: airbnb },
  { icon: BadgeCheck, title: "Post-Construction", copy: "Dust, residue and debris removed so a finished build is truly move-in ready.", img: tenancy },
];

const why = [
  { icon: Cpu, title: "AI-powered systems", copy: "Smart scheduling and digital checklists assign the right team and verify every room before sign-off." },
  { icon: CalendarCheck, title: "Easy online booking", copy: "Lock in a slot in under sixty seconds — no calls, no waiting on quotes." },
  { icon: MessageSquareText, title: "Fast communication", copy: "A real person replies within the hour, seven days a week, with live job updates." },
  { icon: ShieldCheck, title: "Trusted cleaners", copy: "Fully insured, DBS checked and trained in-house to our meticulous standard." },
];

const reviews = [
  { name: "Amelia R.", role: "Airbnb Host · Shoreditch", text: "Turnovers are flawless and photographed every time. My review scores climbed within a month of switching to Eli.Vate." },
  { name: "Daniel O.", role: "Tenant · Canary Wharf", text: "End of tenancy clean was immaculate — the agency signed off on the spot and I got the full deposit returned." },
  { name: "Priya S.", role: "Office Manager · Southwark", text: "They work around our hours and the office is spotless every morning. Communication is genuinely instant." },
  { name: "Marcus T.", role: "Homeowner · Richmond", text: "The deep clean transformed the kitchen and bathrooms. Attention to detail on a completely different level." },
];

const stats = [
  { v: "1,800+", l: "Homes elevated" },
  { v: "4.9★", l: "Average rating" },
  { v: "60 min", l: "Reply time" },
  { v: "100%", l: "Insured & DBS" },
];

function Home() {
  return (
    <div id="top" className="relative overflow-x-hidden">
      <Toaster />
      <SiteNav />

      {/* HERO */}
      <section className="surface-hero relative isolate min-h-[100svh] overflow-hidden pt-32 pb-24">
        <img
          src={heroLiving}
          alt="Immaculate luxury London living room with skyline views"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,color-mix(in_oklab,var(--navy-deep)_88%,transparent),color-mix(in_oklab,var(--navy)_65%,transparent))]" />
        <div className="orb animate-pulse-glow top-[-8rem] left-[-6rem] size-[26rem] bg-[var(--sky)]" />
        <div className="orb animate-pulse-glow right-[-8rem] bottom-[-10rem] size-[32rem] bg-[var(--glow)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-widest text-primary-foreground/85 uppercase">
                <Sparkles className="size-3.5 text-[var(--sky)]" />
                London · Fully insured · DBS checked
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 text-[clamp(2.6rem,6.6vw,5.2rem)] leading-[0.95] font-extrabold text-primary-foreground">
                Cleaning,
                <br />
                <span className="text-gradient">elevated</span> for London.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg text-primary-foreground/75">
                Eli.Vate is the capital's dependable choice for Airbnb turnovers, end of tenancy
                cleans and office care — vetted professionals, comprehensive insurance and
                scheduling that bends around your week, never the other way round.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-[image:var(--gradient-sky)] px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                >
                  Book Now
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="glass inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[color-mix(in_oklab,white_16%,transparent)]"
                >
                  Explore services
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <dl className="mt-12 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.l}>
                    <dt className="font-display text-2xl font-bold text-primary-foreground">{s.v}</dt>
                    <dd className="text-xs text-primary-foreground/60">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={140}>
              <div className="animate-float glass overflow-hidden rounded-[2rem] p-2">
                <img
                  src={cleanerKitchen}
                  alt="Professional cleaner polishing a marble kitchen worktop"
                  width={1200}
                  height={912}
                  className="h-[26rem] w-full rounded-[1.6rem] object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="glass absolute -bottom-8 -left-4 w-60 rounded-2xl p-4 sm:-left-10">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <ShieldCheck className="size-5 text-[var(--sky)]" />
                  <p className="text-sm font-semibold">Vetted & insured</p>
                </div>
                <p className="mt-1 text-xs text-primary-foreground/65">
                  Every cleaner DBS checked and covered up to £2m.
                </p>
              </div>
            </Reveal>
            <Reveal delay={420}>
              <div className="glass absolute -top-6 -right-2 w-52 rounded-2xl p-4 sm:-right-8">
                <div className="flex items-center gap-1 text-[var(--sky)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-primary-foreground/75">
                  “Best turnover team in London.”
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-28">
        <div className="orb top-24 right-0 size-[24rem] bg-[var(--sky)] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">Services</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold">
              Precision cleaning for every kind of London space
            </h2>
            <p className="mt-4 text-muted-foreground">
              Homes, rentals and workplaces — handled with meticulous attention to care and a
              standard we refuse to lower.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="card-3d group h-full overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--navy-deep)_75%,transparent),transparent_65%)]" />
                    <div className="glass absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-xl">
                      <s.icon className="size-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="surface-hero relative overflow-hidden py-28">
        <div className="orb animate-pulse-glow top-10 left-1/3 size-[28rem] bg-[var(--glow)] opacity-30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.3em] text-[var(--sky)] uppercase">Why Eli.Vate</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold text-primary-foreground">
                Intelligent systems. Human standards.
              </h2>
              <p className="mt-4 max-w-lg text-primary-foreground/70">
                Built on a vision to leave a lasting legacy in London through meticulous attention
                to care — technology handles the logistics so our people can focus on the detail.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {why.map((w, i) => (
                <Reveal key={w.title} delay={i * 70}>
                  <div className="glass card-3d h-full rounded-2xl p-5">
                    <w.icon className="size-6 text-[var(--sky)]" />
                    <h3 className="mt-3 text-base font-semibold text-primary-foreground">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-primary-foreground/65">{w.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal delay={80}>
              <img
                src={bathroom}
                alt="Spotless marble bathroom after a deep clean"
                loading="lazy"
                width={1200}
                height={900}
                className="animate-float h-72 w-full rounded-3xl object-cover shadow-[var(--shadow-float)]"
              />
            </Reveal>
            <Reveal delay={180}>
              <img
                src={office}
                alt="Immaculate London office workspace"
                loading="lazy"
                width={1200}
                height={900}
                className="h-72 w-full rounded-3xl object-cover shadow-[var(--shadow-float)] sm:mt-10"
              />
            </Reveal>
            <Reveal delay={260} className="sm:col-span-2">
              <img
                src={airbnb}
                alt="Freshly turned over Airbnb bedroom with crisp linens"
                loading="lazy"
                width={1200}
                height={900}
                className="h-56 w-full rounded-3xl object-cover shadow-[var(--shadow-float)]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section id="results" className="py-28">
        <div className="mx-auto max-w-6xl px-4">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">Transformations</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold">Drag to see the difference</h2>
            <p className="mt-4 text-muted-foreground">
              Real results from our carpet and deep cleaning teams across London.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative overflow-hidden bg-secondary py-28">
        <div className="orb bottom-0 left-10 size-[22rem] bg-[var(--sky)] opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">Reviews</p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold">Trusted across the capital</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <figure className="card-3d h-full rounded-3xl bg-card p-6 shadow-[var(--shadow-card)]">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING + CONTACT */}
      <section id="book" className="surface-hero relative overflow-hidden py-28">
        <div className="orb animate-pulse-glow top-0 right-1/4 size-[30rem] bg-[var(--glow)] opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 lg:grid-cols-[1fr_1.1fr]">
          <div id="contact">
            <Reveal>
              <p className="text-xs font-semibold tracking-[0.3em] text-[var(--sky)] uppercase">Book your cleaning</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-bold text-primary-foreground">
                Get a free quote today
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/70">
                Tell us about your space and we'll come back within the hour with a fixed price and
                available slots.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-10 space-y-3">
                {[
                  { icon: Phone, label: "Phone", value: "07858 228076" },
                  { icon: Mail, label: "Email", value: "hello@elivatecleaning.co.uk" },
                  { icon: MapPin, label: "Service area", value: "Greater London & M25, United Kingdom" },
                  { icon: Clock, label: "Business hours", value: "Mon–Sat 7am–8pm · Sun 9am–5pm" },
                ].map((c) => (
                  <li key={c.label} className="glass flex items-start gap-3 rounded-2xl p-4">
                    <c.icon className="mt-0.5 size-5 shrink-0 text-[var(--sky)]" />
                    <div>
                      <p className="text-xs tracking-wide text-primary-foreground/55 uppercase">{c.label}</p>
                      <p className="text-sm font-medium text-primary-foreground">{c.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="glass rounded-3xl p-6 sm:p-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-[var(--ink)] py-14">
        <div className="orb -bottom-24 left-1/2 size-[24rem] -translate-x-1/2 bg-[var(--sky)] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={logo.url}
                alt="Eli.Vate Cleaning Solutions"
                loading="lazy"
                width={220}
                height={55}
                className="h-12 w-auto"
              />
            </div>

            <p className="max-w-lg text-sm text-primary-foreground/55">
              Building a lasting legacy through meticulous attention to care. Residential and
              commercial cleaning across London, United Kingdom.
            </p>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
              <a href="#services" className="hover:text-[var(--sky)]">Services</a>
              <a href="#why" className="hover:text-[var(--sky)]">Why Us</a>
              <a href="#results" className="hover:text-[var(--sky)]">Results</a>
              <a href="#reviews" className="hover:text-[var(--sky)]">Reviews</a>
              <a href="#book" className="hover:text-[var(--sky)]">Book</a>
            </nav>
          </div>
          <div className="mt-10 border-t border-[color-mix(in_oklab,white_12%,transparent)] pt-6 text-center text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Eli.Vate Cleaning Solutions. Fully insured · DBS checked.
          </div>
        </div>
      </footer>
    </div>
  );
}
