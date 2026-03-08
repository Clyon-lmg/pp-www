"use client";
import React, { useEffect, useState } from "react";
import {
  Calendar,
  ClipboardList,
  Package,
  FlaskConical as Flask,
  Syringe,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  BarChart3,
  Activity,
  Check,
  X,
  Zap,
} from "lucide-react";

export default function PeptidePlannerLanding() {
  const [dark, setDark] = useState(false);
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  // --- Runtime smoke tests (console-only assertions) ---
  useEffect(() => {
    try {
      console.assert(!document.body.innerHTML.includes("$1"), "Unexpected placeholder '$1' found in HTML.");

      const banner = document.querySelector('[data-testid="compliance-banner"]');
      console.assert(!!banner && banner.textContent?.toLowerCase().includes("not for human consumption"), "Compliance banner missing or incorrect.");

      console.assert(!document.querySelector('[data-testid="feature-orders"]'), "Orders feature should be removed.");
      console.assert(!document.querySelector('[data-testid="feature-providers"]'), "Provider feature should be removed.");
      console.assert(!document.querySelector('#providers'), "Provider section should be removed.");

      const styles = getComputedStyle(document.documentElement);
      console.assert(styles.getPropertyValue("--pp-accent-1").trim() !== "", "Missing --pp-accent-1 token");
    } catch (e) {
      console.warn("Smoke tests warning:", e);
    }
  }, []);

  const proMonthly = 9;
  const proAnnual = 79;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(var(--pp-surface-1))] to-[rgb(var(--pp-surface-2))] text-[rgb(var(--pp-foreground))] dark:text-[rgb(var(--pp-foreground))]">
      {/* Color tokens */}
      <style>{`
        :root{
          --pp-accent-1: 22, 163, 140;
          --pp-accent-2: 14, 165, 233;
          --pp-accent-3: 217, 70, 239;
          --pp-foreground: 17,24,39;
          --pp-muted: 100,116,139;
          --pp-border: 226,232,240;
          --pp-surface-1: 255,255,255;
          --pp-surface-2: 248,250,252;
          --pp-card: 255,255,255;
          --pp-card-contrast: 241,245,249;
          --pp-ring: 14,165,233;
        }
        .dark{
          --pp-foreground: 241,245,249;
          --pp-muted: 148,163,184;
          --pp-border: 51,65,85;
          --pp-surface-1: 2,6,23;
          --pp-surface-2: 15,23,42;
          --pp-card: 2,6,23;
          --pp-card-contrast: 3,7,18;
          --pp-ring: 22,163,140;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-[rgb(var(--pp-surface-1))]/80 dark:bg-[rgb(var(--pp-surface-1))]/40 border-b border-[rgb(var(--pp-border))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-3">
            <div className="size-9 grid place-items-center rounded-2xl shadow-sm bg-gradient-to-br from-[rgb(var(--pp-accent-1))] to-[rgb(var(--pp-accent-2))] text-white">
              <Flask className="size-5"/>
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight text-lg">Peptide Planner</div>
              <div className="text-xs text-[rgb(var(--pp-muted))] -mt-0.5">Plan • Track • Optimize</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#workflow" className="hover:opacity-80">How it works</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setDark(d => !d)} className="px-3 py-2 rounded-xl border border-[rgb(var(--pp-border))] text-sm hover:shadow-sm">
              {dark ? "Light" : "Dark"} mode
            </button>
            <a href="https://app.peptideplanner.info" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] via-[rgb(var(--pp-accent-2))] to-[rgb(var(--pp-accent-3))] shadow-sm hover:shadow transition">
              Launch App <ArrowRight className="size-4"/>
            </a>
          </div>
        </div>
      </header>

      {/* Compliance Banner */}
      <div data-testid="compliance-banner" className="bg-red-500/10 text-red-600 dark:text-red-400 border-y border-red-200/60 dark:border-red-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-center text-sm font-medium">
          Research use only — peptides are <span className="underline underline-offset-2">not for human consumption</span>.
        </div>
      </div>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(800px_400px_at_50%_-50%,rgba(var(--pp-accent-2),0.35),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[rgba(var(--pp-accent-1),0.12)] text-[rgb(var(--pp-accent-1))] mb-5">
                <Zap className="size-3.5"/> Free plan available — no credit card required
              </div>
              <h1 className="text-4xl/tight md:text-5xl/tight font-semibold tracking-tight">
                Your peptide research,<br/>finally organized.
              </h1>
              <p className="mt-4 text-base md:text-lg text-[rgb(var(--pp-muted))] max-w-prose">
                Plan doses, track history, manage inventory, and monitor your stats — all in one focused companion app. Built for real protocols, multi-peptide cycles, and day-to-day consistency.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://app.peptideplanner.info" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-white bg-[rgb(var(--pp-accent-1))] hover:brightness-110 shadow">
                  Start for Free <ChevronRight className="size-4"/>
                </a>
                <a href="#pricing" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium border border-[rgb(var(--pp-border))] hover:bg-[rgb(var(--pp-card-contrast))]">
                  View Pricing
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[rgb(var(--pp-muted))]">
                <div className="inline-flex items-center gap-1"><ShieldCheck className="size-4"/> Private by design</div>
                <div className="inline-flex items-center gap-1"><Activity className="size-4"/> Progress tracking</div>
                <div className="inline-flex items-center gap-1"><BarChart3 className="size-4"/> Run-out forecasting</div>
              </div>
            </div>

            {/* Device mock */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-[rgba(var(--pp-accent-1),0.15)] via-[rgba(var(--pp-accent-2),0.12)] to-[rgba(var(--pp-accent-3),0.15)] blur-2xl"/>
              <div className="rounded-[2rem] border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))] shadow-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-[rgb(var(--pp-border))] flex items-center justify-between">
                  <div className="text-sm font-medium">Today</div>
                  <div className="text-xs text-[rgb(var(--pp-muted))]">Sample Preview</div>
                </div>
                <ul className="p-5 space-y-4">
                  {[
                    {name:"Retatrutide", dose:"1.5 mg", units:"30 u", inv:"12 doses", status:"logged"},
                    {name:"BPC-157", dose:"250 mcg", units:"5 u", inv:"22 doses", status:"skipped"},
                    {name:"TB-500", dose:"2 mg", units:"40 u", inv:"8 doses", status:"pending"},
                  ].map((i, idx) => (
                    <li key={idx} className="rounded-xl border border-[rgb(var(--pp-border))] p-4">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{i.name}</div>
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg ${i.status==="logged"?"bg-[rgba(var(--pp-accent-1),0.12)] text-[rgb(var(--pp-accent-1))]":""} ${i.status==="skipped"?"bg-red-500/10 text-red-500":""} ${i.status==="pending"?"bg-[rgba(var(--pp-accent-2),0.12)] text-[rgb(var(--pp-accent-2))]":""}`}>
                          {i.status==="logged" && <CheckCircle2 className="size-4"/>}
                          {i.status==="skipped" && <XCircle className="size-4"/>}
                          {i.status==="pending" && <Clock className="size-4"/>}
                          {i.status}
                        </span>
                      </div>
                      <div className="mt-2 grid grid-cols-3 text-xs text-[rgb(var(--pp-muted))]">
                        <div>Dosage <span className="text-[rgb(var(--pp-foreground))] dark:text-white font-medium">{i.dose}</span></div>
                        <div>Units <span className="text-[rgb(var(--pp-foreground))] dark:text-white font-medium">{i.units}</span></div>
                        <div>Inventory <span className="text-[rgb(var(--pp-foreground))] dark:text-white font-medium">{i.inv}</span></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 lg:py-20 border-t border-[rgb(var(--pp-border))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Everything you need to run a real protocol</h2>
          <p className="mt-3 text-[rgb(var(--pp-muted))] max-w-2xl">A focused suite of tools designed for speed, clarity, and consistency. No bloat — just the features that matter.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Syringe className="size-5"/>}
              title="Daily Dose Logging"
              desc="Tap to log or skip each dose. Inventory auto-decrements, and visual state updates instantly — logged, skipped, or pending at a glance."
            />
            <FeatureCard
              icon={<Calendar className="size-5"/>}
              title="Calendar View"
              desc="See your full compliance history at a glance. Color-coded states across every day of the month, with a one-tap jump back to today."
            />
            <FeatureCard
              icon={<Package className="size-5"/>}
              title="Inventory Management"
              desc="Normalize peptide names, compute reconstituted concentration, and see projected run-out dates for every vial in your stack."
            />
            <FeatureCard
              icon={<ClipboardList className="size-5"/>}
              title="Protocol Builder"
              desc="Group peptides into named protocols with flexible schedules — every day, 5-on/2-off, or fully custom. Define on/off cycles and keep one protocol active at a time."
              pro
            />
            <FeatureCard
              icon={<Activity className="size-5"/>}
              title="Health Stats"
              desc="Log weight and key metrics alongside your protocol. Visualize how your stack correlates with measurable progress over time."
              pro
            />
            <FeatureCard
              icon={<BarChart3 className="size-5"/>}
              title="Run-out Forecasting"
              desc="Project when each vial runs dry — accounting for dosage, frequency, and your on/off cycle schedule — so you're never caught short."
              pro
            />
            <FeatureCard
              icon={<ShieldCheck className="size-5"/>}
              title="Privacy First"
              desc="Your research data stays yours. We collect only what's necessary to run the app — and will never sell or share it with anyone."
            />
          </div>
        </div>
      </section>

      {/* Workflow strip */}
      <section id="workflow" className="py-16 lg:py-20 bg-[rgb(var(--pp-card-contrast))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Simple, reliable workflow</h2>
          <p className="mt-3 text-[rgb(var(--pp-muted))] max-w-2xl">From setup to daily logging in minutes. No learning curve, no guesswork.</p>
          <ol className="mt-8 grid md:grid-cols-3 gap-6">
            <Step n="01" title="Set your protocol" body="Add your peptides, choose a schedule (ED, 5/2, or custom), and define on/off cycles. Takes less than two minutes to get started."/>
            <Step n="02" title="Log doses daily" body="One tap to log or skip. Cards auto-update inventory and status — no manual calculations, no spreadsheets."/>
            <Step n="03" title="Track your progress" body="Log weight and health metrics. Monitor depletion dates. Stay ahead of your next order, every cycle."/>
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 lg:py-24 border-t border-[rgb(var(--pp-border))]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
            <p className="mt-3 text-[rgb(var(--pp-muted))]">Start free, upgrade when you&apos;re ready. No hidden fees. Cancel anytime.</p>

            {/* Billing toggle */}
            <div className="mt-6 inline-flex items-center gap-1 rounded-2xl border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card-contrast))] p-1.5">
              <button
                onClick={() => setAnnual(false)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${!annual ? "bg-[rgb(var(--pp-card))] shadow text-[rgb(var(--pp-foreground))]" : "text-[rgb(var(--pp-muted))]"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition inline-flex items-center gap-2 ${annual ? "bg-[rgb(var(--pp-card))] shadow text-[rgb(var(--pp-foreground))]" : "text-[rgb(var(--pp-muted))]"}`}
              >
                Annual
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-[rgba(var(--pp-accent-1),0.15)] text-[rgb(var(--pp-accent-1))]">Save 27%</span>
              </button>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <PricingCard
              name="Free"
              price="$0"
              period="forever"
              description="The essentials to start tracking your research protocols. No credit card needed."
              cta="Get Started Free"
              ctaHref="https://app.peptideplanner.info"
              features={[
                { text: "Up to 3 peptides", included: true },
                { text: "Daily dose logging", included: true },
                { text: "Calendar view", included: true },
                { text: "Basic inventory tracking", included: true },
                { text: "Run-out forecasting", included: false },
                { text: "Health stats & progress tracking", included: false },
                { text: "Protocol groups & on/off cycles", included: false },
                { text: "Data export (CSV)", included: false },
              ]}
            />
            <PricingCard
              name="Pro"
              price={annual ? `$${(proAnnual / 12).toFixed(2)}` : `$${proMonthly}`}
              period={annual ? "/ month, billed annually" : "/ month"}
              description="The full toolkit for researchers running serious multi-peptide protocols."
              cta="Start Pro Free Trial"
              ctaHref="https://app.peptideplanner.info"
              popular
              features={[
                { text: "Unlimited peptides", included: true },
                { text: "Daily dose logging", included: true },
                { text: "Calendar view", included: true },
                { text: "Full inventory + concentration calculator", included: true },
                { text: "Run-out forecasting", included: true },
                { text: "Health stats & progress tracking", included: true },
                { text: "Protocol groups & on/off cycles", included: true },
                { text: "Data export (CSV)", included: true },
              ]}
            />
          </div>

          <p className="mt-6 text-center text-xs text-[rgb(var(--pp-muted))]">
            Pro trial requires no payment. Switch plans or cancel from your account settings at any time.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-20 border-t border-[rgb(var(--pp-border))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <Faq q="What's included in the free plan?" a="The free plan includes dose logging, calendar view, and basic inventory tracking for up to 3 peptides — everything you need to get started at no cost."/>
            <Faq q="What does Pro add?" a="Pro unlocks unlimited peptides, run-out forecasting, health stats tracking, protocol groups with on/off cycles, concentration calculators, and CSV data export. The complete toolkit for complex stacks."/>
            <Faq q="Can I cancel anytime?" a="Yes. Pro subscriptions are month-to-month (or annual, your choice). Cancel from your account settings at any time — your data remains accessible on the free plan."/>
            <Faq q="Does this replace my provider?" a="No. Peptide Planner is a research companion for planning, tracking, and inventory management — not a source of medical advice or a connection to peptide vendors."/>
            <Faq q="Can I track more than peptides?" a="Yes. With the Pro plan you can log weight and health stats alongside your protocol to correlate metrics with your research timeline."/>
            <Faq q="Is my data secure?" a="We use industry-standard security practices and collect only what's necessary to run the app. Your research data is never sold or shared with third parties."/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 lg:py-24 bg-[rgb(var(--pp-card-contrast))]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Start planning smarter — today</h2>
          <p className="mt-3 text-[rgb(var(--pp-muted))]">Free plan, no credit card required. Upgrade to Pro when you&apos;re ready for the full toolkit.</p>
          <div className="mt-6 flex justify-center flex-wrap gap-3">
            <a href="https://app.peptideplanner.info" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] via-[rgb(var(--pp-accent-2))] to-[rgb(var(--pp-accent-3))] shadow">
              Get Started Free <ChevronRight className="size-4"/>
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium border border-[rgb(var(--pp-border))] hover:bg-[rgb(var(--pp-card))]">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgb(var(--pp-border))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[rgb(var(--pp-muted))]">
            <div className="mb-2 text-xs text-red-600 dark:text-red-400">Research use only — peptides are not for human consumption.</div>
            <div className="mb-1 text-xs text-green-600 dark:text-green-400">We respect your privacy — we will never sell your data.</div>
            © {new Date().getFullYear()} Peptide Planner. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[rgb(var(--pp-muted))]">
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Terms</a>
            <a href="#" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({icon, title, desc, testId, pro}: {icon: React.ReactNode, title: string, desc: string, testId?: string, pro?: boolean}) {
  return (
    <div data-testid={testId} className="rounded-2xl border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))] p-4 hover:shadow-sm transition group relative">
      {pro && (
        <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-[rgba(var(--pp-accent-3),0.12)] text-[rgb(var(--pp-accent-3))] font-medium">Pro</span>
      )}
      <div className="inline-flex size-9 items-center justify-center rounded-xl bg-[rgba(var(--pp-accent-2),0.12)] text-[rgb(var(--pp-accent-2))] group-hover:scale-105 transition">{icon}</div>
      <div className="mt-3 font-medium">{title}</div>
      <p className="mt-1 text-sm text-[rgb(var(--pp-muted))]">{desc}</p>
    </div>
  );
}

function Step({n, title, body}: {n: string, title: string, body: string}) {
  return (
    <li className="rounded-2xl border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))] p-6">
      <div className="text-xs font-mono text-[rgb(var(--pp-muted))]">{n}</div>
      <div className="mt-1 font-medium">{title}</div>
      <p className="mt-2 text-sm text-[rgb(var(--pp-muted))]">{body}</p>
    </li>
  );
}

function Faq({q, a}: {q: string, a: string}) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))] p-5">
      <div className="font-medium">{q}</div>
      <p className="mt-2 text-sm text-[rgb(var(--pp-muted))]">{a}</p>
    </div>
  );
}

function PricingCard({name, price, period, description, cta, ctaHref, popular, features}: {
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  ctaHref: string;
  popular?: boolean;
  features: { text: string; included: boolean }[];
}) {
  return (
    <div className={`relative rounded-2xl border p-6 flex flex-col ${popular ? "border-[rgb(var(--pp-accent-2))] shadow-lg bg-[rgb(var(--pp-card))]" : "border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))]"}`}>
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] to-[rgb(var(--pp-accent-2))]">
            <Zap className="size-3"/> Most Popular
          </span>
        </div>
      )}
      <div className="text-lg font-semibold">{name}</div>
      <div className="mt-3 flex items-end gap-1.5">
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        <span className="text-sm text-[rgb(var(--pp-muted))] mb-1.5">{period}</span>
      </div>
      <p className="mt-2 text-sm text-[rgb(var(--pp-muted))]">{description}</p>

      <a
        href={ctaHref}
        className={`mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl text-sm font-medium transition ${
          popular
            ? "text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] via-[rgb(var(--pp-accent-2))] to-[rgb(var(--pp-accent-3))] shadow hover:shadow-md"
            : "border border-[rgb(var(--pp-border))] hover:bg-[rgb(var(--pp-card-contrast))]"
        }`}
      >
        {cta} <ChevronRight className="size-4"/>
      </a>

      <ul className="mt-6 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            {f.included
              ? <Check className="size-4 mt-0.5 shrink-0 text-[rgb(var(--pp-accent-1))]"/>
              : <X className="size-4 mt-0.5 shrink-0 text-[rgb(var(--pp-muted))] opacity-40"/>
            }
            <span className={f.included ? "" : "text-[rgb(var(--pp-muted))]"}>{f.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
