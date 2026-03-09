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
  Zap,
  TrendingUp,
  Pill,
} from "lucide-react";

export default function PeptidePlannerLanding() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgb(var(--pp-surface-1))] to-[rgb(var(--pp-surface-2))] text-[rgb(var(--pp-foreground))]">
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
          <a href="#home" className="inline-flex items-center gap-3">
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
                <Zap className="size-3.5"/> 30-day free trial — no credit card required
              </div>
              <h1 className="text-4xl/tight md:text-5xl/tight font-semibold tracking-tight">
                Your peptide research,<br/>finally organized.
              </h1>
              <p className="mt-4 text-base md:text-lg text-[rgb(var(--pp-muted))] max-w-prose">
                Log doses, track inventory, model serum levels, and monitor your progress — all in one focused companion app. Built for real protocols, multi-peptide stacks, and day-to-day consistency.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://app.peptideplanner.info" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-white bg-[rgb(var(--pp-accent-1))] hover:brightness-110 shadow">
                  Start Free Trial <ChevronRight className="size-4"/>
                </a>
                <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium border border-[rgb(var(--pp-border))] hover:bg-[rgb(var(--pp-card-contrast))]">
                  See Features
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[rgb(var(--pp-muted))]">
                <div className="inline-flex items-center gap-1"><ShieldCheck className="size-4"/> Private by design</div>
                <div className="inline-flex items-center gap-1"><TrendingUp className="size-4"/> Serum level modeling</div>
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
                    {name:"Retatrutide", dose:"1.5 mg", units:"30 u", site:"Abdomen", status:"logged"},
                    {name:"BPC-157", dose:"250 mcg", units:"5 u", site:"L. Thigh", status:"skipped"},
                    {name:"TB-500", dose:"2 mg", units:"40 u", site:"R. Thigh", status:"pending"},
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
                        <div>Dose <span className="text-[rgb(var(--pp-foreground))] dark:text-white font-medium">{i.dose}</span></div>
                        <div>Units <span className="text-[rgb(var(--pp-foreground))] dark:text-white font-medium">{i.units}</span></div>
                        <div>Site <span className="text-[rgb(var(--pp-foreground))] dark:text-white font-medium">{i.site}</span></div>
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
          <p className="mt-3 text-[rgb(var(--pp-muted))] max-w-2xl">A focused suite of tools built for the full research workflow — from setup and daily logging to forecasting and analysis. All features included.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Syringe className="size-5"/>}
              title="Daily Dose Logging"
              desc="One tap to log or skip each dose. Tracks dosage, syringe units, injection site, and time of day. Add unscheduled ad hoc doses whenever needed."
            />
            <FeatureCard
              icon={<Calendar className="size-5"/>}
              title="Calendar View"
              desc="A full month grid with color-coded day badges — green when all doses are taken, red if any were skipped. Tap any day to review its complete dose log."
            />
            <FeatureCard
              icon={<Package className="size-5"/>}
              title="Inventory Management"
              desc="Track both vials and capsules. Enter vial count, mg per vial, and BAC water volume to auto-calculate concentration and remaining doses for every compound."
            />
            <FeatureCard
              icon={<ClipboardList className="size-5"/>}
              title="Protocol Builder"
              desc="Build named protocol groups with flexible schedules: every day, specific days of the week, or custom on/off cycles. Generates a full 12-month dose plan automatically."
            />
            <FeatureCard
              icon={<TrendingUp className="size-5"/>}
              title="Serum Level Chart"
              desc="Visualize estimated serum concentrations using half-life decay modeling. Plots 21 days of history plus 14 days of projections at 12-hour resolution — one line per peptide."
            />
            <FeatureCard
              icon={<BarChart3 className="size-5"/>}
              title="Run-out Forecasting"
              desc="See weekly usage rate, days remaining, and projected depletion date for each compound. Status alerts (ok / low / empty) keep you ahead of your next reorder."
            />
            <FeatureCard
              icon={<Activity className="size-5"/>}
              title="Weight Tracking"
              desc="Log your weight with optional notes and visualize trends on a line chart. Track progress over time alongside your active protocol."
            />
            <FeatureCard
              icon={<Pill className="size-5"/>}
              title="Vials & Capsules"
              desc="First-class support for both injectable and oral peptide formats. Each inventory type has its own unit math so run-out estimates are always accurate."
            />
            <FeatureCard
              icon={<ShieldCheck className="size-5"/>}
              title="Privacy First"
              desc="Your research data stays yours. We collect only what's necessary to run the app and will never sell or share it with anyone."
            />
          </div>
        </div>
      </section>

      {/* Workflow strip */}
      <section id="workflow" className="py-16 lg:py-20 bg-[rgb(var(--pp-card-contrast))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Simple, reliable workflow</h2>
          <p className="mt-3 text-[rgb(var(--pp-muted))] max-w-2xl">From first setup to daily logging in minutes. No learning curve, no spreadsheets.</p>
          <ol className="mt-8 grid md:grid-cols-3 gap-6">
            <Step n="01" title="Build your protocol" body="Add peptides to inventory, set mg per vial and BAC volume, then create a protocol with your preferred schedule. Takes under two minutes."/>
            <Step n="02" title="Log doses daily" body="Tap to mark each dose taken, along with injection site. Skip when needed. Inventory, calendar, and forecasts all update automatically."/>
            <Step n="03" title="Analyze your data" body="Review serum level curves, run-out timelines, and weight trends on the Stats page. Know exactly when to reorder and how your stack is performing."/>
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 lg:py-24 border-t border-[rgb(var(--pp-border))]">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-[rgb(var(--pp-muted))]">One plan. Every feature. Cancel anytime.</p>

          <div className="mt-10 rounded-2xl border border-[rgb(var(--pp-accent-2))] bg-[rgb(var(--pp-card))] shadow-lg p-8">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] to-[rgb(var(--pp-accent-2))] mb-6">
              <Zap className="size-3"/> 30-Day Free Trial
            </div>

            <div className="flex items-end justify-center gap-1.5">
              <span className="text-5xl font-bold tracking-tight">$3.99</span>
              <span className="text-[rgb(var(--pp-muted))] mb-1.5">/ month</span>
            </div>
            <p className="mt-2 text-sm text-[rgb(var(--pp-muted))]">after your free trial. No credit card required to start.</p>

            <a
              href="https://app.peptideplanner.info"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] via-[rgb(var(--pp-accent-2))] to-[rgb(var(--pp-accent-3))] shadow hover:shadow-md transition"
            >
              Start Free Trial <ChevronRight className="size-4"/>
            </a>

            <ul className="mt-8 space-y-3 text-left">
              {[
                "Unlimited peptides",
                "Daily dose logging with injection site tracking",
                "Calendar view with compliance history",
                "Vial & capsule inventory with concentration calculator",
                "Protocol builder — ED, custom days, on/off cycles",
                "Serum level chart with half-life decay modeling",
                "Run-out forecasting with depletion alerts",
                "Weight tracking & trend chart",
                "30-day free trial, cancel anytime",
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <Check className="size-4 mt-0.5 shrink-0 text-[rgb(var(--pp-accent-1))]"/>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-20 border-t border-[rgb(var(--pp-border))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <Faq q="How does the free trial work?" a="You get 30 days of full access with no credit card required. At the end of your trial, you can subscribe for $3.99/month to keep your data and access. No surprise charges."/>
            <Faq q="What's included in the subscription?" a="Everything — daily logging, calendar, inventory (vials and capsules), protocol builder with cycles, serum level chart, run-out forecasting, and weight tracking. One plan, no feature gates."/>
            <Faq q="How does the serum level chart work?" a="The chart models estimated serum concentrations for each peptide using half-life decay. It plots 21 days of history and projects 14 days forward at 12-hour resolution, so you can see how compounds overlap and taper."/>
            <Faq q="Can I cancel anytime?" a="Yes. Cancel from your account settings at any time and you won't be charged again. Your data remains accessible for the rest of your billing period."/>
            <Faq q="Can I track both injections and oral peptides?" a="Yes. Inventory supports both vials (with BAC water volume and auto-calculated concentration) and capsules. Both types feed into your dose log and run-out forecasts."/>
            <Faq q="Does this replace my provider?" a="No. Peptide Planner is a research companion for planning, logging, and inventory management — not a source of medical advice or a connection to peptide vendors."/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 lg:py-24 bg-[rgb(var(--pp-card-contrast))]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Start your free trial today</h2>
          <p className="mt-3 text-[rgb(var(--pp-muted))]">30 days free, no credit card required. Then just $3.99/month — less than a cup of coffee.</p>
          <div className="mt-6 flex justify-center flex-wrap gap-3">
            <a href="https://app.peptideplanner.info" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] via-[rgb(var(--pp-accent-2))] to-[rgb(var(--pp-accent-3))] shadow">
              Start Free Trial <ChevronRight className="size-4"/>
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium border border-[rgb(var(--pp-border))] hover:bg-[rgb(var(--pp-card))]">
              Explore Features
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
            <a href="/privacy" className="hover:opacity-80">Privacy</a>
            <a href="mailto:peptideplanner@outlook.com" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({icon, title, desc, testId}: {icon: React.ReactNode, title: string, desc: string, testId?: string}) {
  return (
    <div data-testid={testId} className="rounded-2xl border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))] p-4 hover:shadow-sm transition group">
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
