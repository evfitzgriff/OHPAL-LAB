/* OHPAL Lab — One‑Page Site (Next.js + Tailwind) */
import Image from "next/image";
import type { ReactNode } from "react";
import { ContactForm } from "./components/ContactForm";

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {(eyebrow || title || subtitle) && (
          <header className="mb-10">
            {eyebrow && <Badge>{eyebrow}</Badge>}
            {title && (
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-3xl text-base/7 text-gray-600">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

function PillarCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
      <div className="text-3xl font-bold tabular-nums">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-wide text-gray-600">
        {label}
      </div>
    </div>
  );
}

function ProgramCard({
  tag,
  title,
  bullets,
  imageSrc,
  imageAlt,
  caption,
}: {
  tag: string;
  title: string;
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {imageSrc && (
        <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 30vw, 100vw"
          />
        </div>
      )}
      {caption && imageSrc && (
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          {caption}
        </p>
      )}
      <div className="mt-3">
        <Badge>{tag}</Badge>
        <h3 className="mt-4 text-xl font-semibold leading-tight">{title}</h3>
      </div>
      {bullets && (
        <ul className="mt-3 flex-1 space-y-2 text-sm text-gray-700">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function CTA() {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold">Partner with the OHPAL Lab</h3>
      <p className="mt-2 max-w-2xl text-gray-600">
        We collaborate with governments, NGOs, universities, and community
        organizations to co‑design studies, pilot interventions, and translate
        evidence into action across pastoral drylands.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-xl border px-4 py-2 font-medium transition hover:bg-gray-50"
        >
          Start a collaboration
        </a>
        <a
          href="#initiatives"
          className="rounded-xl border px-4 py-2 font-medium transition hover:bg-gray-50"
        >
          Explore initiatives
        </a>
      </div>
    </div>
  );
}

const PARTNER_LOGOS = [
  { src: "/tufts-logo.png", alt: "Tufts University" },
  { src: "/uon-logo.svg", alt: "University of Nairobi" },
  { src: "/Turkana-logo.svg", alt: "Turkana County" },
  { src: "/pair-logo.svg", alt: "Pastoralist Adaptive Initiatives or Resilience" },
  
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-20 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-xl border bg-white shadow-sm">
              <img
                src="/OHPAL-logo-notext.jpeg"
                alt="OHPAL Lab logo"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight">OHPAL Lab</div>
              <div className="text-xs text-gray-500">
                One Health & Pastoral Livelihoods
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#research" className="hover:underline">
              Research
            </a>
            <a href="#initiatives" className="hover:underline">
              Initiatives
            </a>
            <a href="#impact" className="hover:underline">
              Impact
            </a>
            <a href="#partners" className="hover:underline">
              Partners
            </a>
            <a
              href="#contact"
              className="rounded-xl border px-3 py-1.5 font-medium hover:bg-gray-50"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_50%_-10%,rgba(13,148,136,0.08),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Badge>OHPAL Lab</Badge>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                Community‑led One Health for resilient pastoral futures
              </h1>
              <p className="mt-4 text-base/7 text-gray-700">
                We co‑create community-led solutions with pastoralist communities
                 to strengthen human, animal, and environmental health - translating evidence into equitable policy and practice.
                
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#initiatives"
                  className="rounded-xl border px-4 py-2 font-medium hover:bg-gray-50"
                >
                  See our initiatives
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border px-4 py-2 font-medium hover:bg-gray-50"
                >
                  Meet the lab
                </a>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border bg-white p-4 shadow-sm">
                <img
                  src="/IMG_3418.jpeg"
                  alt="Pastoral landscape where OHPAL collaborates with communities."
                  className="h-auto w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-gray-600">
                  <div className="rounded-xl border p-3">
                    <div className="text-sm font-semibold">Training future One Health leaders</div>
                    <div className="mt-1">Student supervision and mentorship</div>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-sm font-semibold">Transdisciplinary Research</div>
                    <div className="mt-1">Bringing together disciplines and communities to tackle complex challenges </div>
                  </div>
                  <div className="rounded-xl border p-3">
                    <div className="text-sm font-semibold">Actionable</div>
                    <div className="mt-1">Transforming community priorities and real-time data into measurable impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section
        id="about"
        eyebrow="About the Lab"
        title="Mission & Vision"
        subtitle="OHPAL is a research and innovation laboratory that combines participatory approaches and technical tools to strengthen pastoral livelihoods and train the next generation of One Health leaders."
      >
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:items-center">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Mission</h3>
                <p className="mt-2 text-sm text-gray-700">
                  We train future One Health leaders in systems thinking and transdisciplinary
                  approaches, working with communities to co-develop and pilot interventions that
                  inform policy and strengthen resilience across pastoral systems.
                </p>
              </div>
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Vision</h3>
                <p className="mt-2 text-sm text-gray-700">
                  Inclusive systems that connect communities and experts to co-create One Health
                  solutions for a healthy, just, and sustainable future.
                </p>
              </div>
            </div>
            <CTA />
          </div>
          <div>
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <img
                src="/IMG_3509.jpeg"
                alt="OHPAL team collaborating with pastoralist partners."
                className="h-auto w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Research */}
      <Section
        id="research"
        eyebrow="Research Approach"
        title="Innovative One Health Research"
        subtitle="OHPAL’s research takes a transdisciplinary approach that brings together disciplines and knowledge systems through participatory methods to tackle complex One Health challenges. Using a Living Lab model, our work links research, innovation, and spaces where communities, students, and decision-makers co-develop, test, and refine solutions in real-world settings. Each research area represents an active space for student engagement, community collaboration, and applied learning."
      >
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr]">
          <div>
            <div className="rounded-2xl border bg-white p-4 shadow-sm">
              <img
                src="/Final-Turkana-Map.png"
                alt="Researchers and community members reviewing One Health data together."
                className="h-auto w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <PillarCard
              title="Systems thinking and One Health"
              desc="Explores socioecological system dynamics to identify feedback loops, leverage points, and inform One Health governmence and interventions."
            />
            <PillarCard
              title="Climate resilience in pastoral drylands"
              desc="Investigates the impact of various climate-resilience policies and interventions (e.g., climate-smart agriculture, water infrastructure development) in pastoral drylands to improve policy and outcomes."
            />
            <PillarCard
              title="Real-time monitoring and decision tools"
              desc="Expands the Community One Health Index (COHI) to other socioecological context. Explores the development of AI-assisted dashboards for real-time data visualization and decision-making through the integration of COHI and climatic data."

            />
          </div>
        </div>
      </Section>

      {/* Initiatives */}
      <Section
        id="initiatives"
        eyebrow="Research to Acition"
        title="Flagship initiatives"
        subtitle="Core efforts you can collaborate on, fund, and help scale for impact."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <div className="h-full">
            <ProgramCard
              tag="COHI"
              title="Community One Health Index"
              bullets={[
                "40+ human, animal, & environmental health, and social indicators",
                "Single COHI score + domain scores for rapid assessment and targeted interventions",
                "Supports resource allocation and program monitoring",
                "Adaptable to specific programs and socio-ecological contexts",
              ]}
            />
          </div>
          <div className="h-full">
            <ProgramCard
              tag="Living Lab"
              title="OHPAL Living Laboratory"
              bullets={[
                "Real-time community and environmental data integrated into AI-assisted dashboards",
                "Pilot interventions co-designed with communities and based on data insights",
                "Feedback loops connecting pilots → policy and regional scale up",
              ]}
            />
          </div>
          <div className="h-full">
            <ProgramCard
              tag="Training"
              title="Education & Capacity Building"
              bullets={[
                "COHI data collection and analysis workshops",
                "Participatory epidemiology and community engagement training",
                "Graduate student supervision, field practicums, and co-learning opportunities",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Impact */}
      <Section
        id="impact"
        eyebrow="Impact"
        title="From data to decisions"
        subtitle="Illustrative metrics—you can replace with live numbers as projects launch."
      >
        <div className="grid gap-6 md:grid-cols-4">
          <Stat value="36" label="COHI community assessments" />
          <Stat value="3" label="Counties/regions piloting COHI" />
          <Stat value="120+" label="OH Enumerators & trainees" />
          <Stat value="> 10" label="Policy briefs & workshops" />
        </div>
        <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Data → Action Pathway</h3>
          <ol className="mt-3 list-decimal pl-6 text-sm text-gray-700">
            <li>Community‑led data collection (COHI, participatory methods)</li>
            <li>Analysis & visualization (dashboards, briefs)</li>
            <li>Pilot interventions in the Living Lab</li>
            <li>Evaluate, iterate, and scale through policy partnerships</li>
          </ol>
        </div>
      </Section>

      {/* Partners */}
      <Section
        id="partners"
        eyebrow="Partners"
        title="Collaborating for scale"
        subtitle="Key institutional collaborators supporting One Health research, innovation, and impact."
      >
        <div className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PARTNER_LOGOS.slice(0, 4).map((logo) => (
            <div
              key={logo.alt}
              className="grid h-16 place-items-center rounded-xl border bg-white shadow-sm"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <CTA />
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Interested in partnering, hosting a pilot, or joining the lab? Let’s talk."
      >
        <div className="grid items-start gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <ContactForm />
          </div>
          <div className="rounded-2xl border bg-white p-4 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/IMG_2614.JPG"
                alt="Portrait of Dr. Evan Griffith"
                className="h-14 w-14 rounded-full border object-cover shadow-sm"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-semibold">Principal Investigator</h3>
                <p className="text-sm text-gray-500">Dr. Evan Griffith, DVM, MPH, MS</p>
                <p className="text-sm text-gray-500">OHPAL Lab | Tufts University</p>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-700">
              <div>
                Email: <a href="mailto:evan.griffith@tufts.edu" className="font-medium text-gray-900 hover:underline">evan.griffith@tufts.edu</a>
              </div>
              <div>Regional Focus: East and Southern Africa — and beyond</div>
            </div>
            <div className="rounded-xl border bg-gray-50 p-3 text-sm text-gray-600">
              <p className="font-medium">Research Interests</p>
              <p className="mt-1">One Health/Ecohealth, pastoralism, transdisciplinary research.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-lg border bg-white shadow-sm">
              <img
                src="/OHPAL-logo-notext.jpeg"
                alt="OHPAL Lab logo"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
              <div>
                <div className="font-semibold">OHPAL Lab</div>
                <div className="text-xs">One Health & Pastoral Livelihoods</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#about" className="hover:underline">
                About
              </a>
              <a href="#initiatives" className="hover:underline">
                Initiatives
              </a>
              <a href="#impact" className="hover:underline">
                Impact
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </div>
          </div>
          <p className="mt-6 text-xs">
            © {new Date().getFullYear()} OHPAL Lab. 
          </p>
        </div>
      </footer>
    </div>
  );
}
