"use client";
import React, { useEffect, useState } from "react";
import { Calendar, ClipboardList, ShoppingCart, Package, FlaskConical as Flask, Syringe, Wand2, CheckCircle2, XCircle, Clock, ChevronRight, ShieldCheck, Truck, LogIn, ArrowRight, BarChart3 } from "lucide-react";

export default function PeptidePlannerLanding() {
  const [dark, setDark] = useState(false);

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

      const orders = document.querySelector('[data-testid="feature-orders"]');
      const providers = document.querySelector('[data-testid="feature-providers"]');
      console.assert(orders?.textContent?.includes("Coming Soon"), "Orders feature should be marked Coming Soon.");
      console.assert(providers?.textContent?.includes("Coming Soon"), "Provider Suggestions should be marked Coming Soon.");

      console.assert(!document.body.innerHTML.toLowerCase().includes("affiliate"), "Found forbidden word 'affiliate'.");

      const styles = getComputedStyle(document.documentElement);
      console.assert(styles.getPropertyValue("--pp-accent-1").trim() !== "", "Missing --pp-accent-1 token");

      console.assert(document.body.innerText.includes("Order tracking is a future release"), "FAQ missing tracking status note.");
    } catch (e) {
      console.warn("Smoke tests warning:", e);
    }
  }, []);

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
              <div className="text-xs text-[rgb(var(--pp-muted))] -mt-0.5">Plan • Track • Reorder</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#workflow" className="hover:opacity-80">How it works</a>
            <a href="#providers" className="hover:opacity-80">For Providers</a>
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
              <h1 className="text-4xl/tight md:text-5xl/tight font-semibold tracking-tight">
                Your peptide journey, organized.
              </h1>
              <p className="mt-4 text-base md:text-lg text-[rgb(var(--pp-muted))] max-w-prose">
                Plan doses, track injections, manage inventory, and reorder — all in one companion app. Built for real protocols, cycles, and day-to-day compliance.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://app.peptideplanner.info" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium text-white bg-[rgb(var(--pp-accent-1))] hover:brightness-110 shadow">
                  Get Started Free <ChevronRight className="size-4"/>
                </a>
                <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium border border-[rgb(var(--pp-border))] hover:bg-[rgb(var(--pp-card-contrast))]">
                  See Features
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-xs text-[rgb(var(--pp-muted))]">
                <div className="inline-flex items-center gap-1"><ShieldCheck className="size-4"/> Private by design</div>
                <div className="inline-flex items-center gap-1"><Truck className="size-4"/> Discounts auto‑applied</div>
                <div className="inline-flex items-center gap-1"><BarChart3 className="size-4"/> Run‑out forecasting</div>
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
                  {[{name:"Retatrutide", dose:"1.5 mg", units:"30 u", inv:"12 doses", status:"logged"}, {name:"BPC-157", dose:"250 mcg", units:"5 u", inv:"22 doses", status:"skipped"}, {name:"TB-500", dose:"2 mg", units:"40 u", inv:"8 doses", status:"pending"}].map((i,idx)=> (
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
      <section id="features" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Everything you need to run a real protocol</h2>
          <p className="mt-3 text-[rgb(var(--pp-muted))] max-w-2xl">Seven focused modules mirror your current app’s feature set — redesigned for speed, clarity, and fewer clicks.</p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={<Syringe className="size-5"/>} title="Today" desc="Tap Log or Skip on dose cards. Auto‑decrement inventory; instant visual state (✓ / ✕)."/>
            <FeatureCard icon={<Calendar className="size-5"/>} title="Calendar" desc="Month grid with Today jump. Past/Today reflect ✓ / ✕ states from the log."/>
            <FeatureCard icon={<Package className="size-5"/>} title="Inventory" desc="Normalize names, compute concentration, show run‑out date, and surface best vendor prices with coupon logic."/>
            <FeatureCard icon={<ClipboardList className="size-5"/>} title="Protocol" desc="Build protocol groups, schedules (ED, 5/2, custom), and cycles. One active at a time."/>
            <FeatureCard testId="feature-cart" icon={<ShoppingCart className="size-5"/>} title="Cart" desc="Vendor‑grouped carts with coupon/discount prices already applied. Place orders on vendor sites; we keep a draft in your Orders."/>
            <FeatureCard testId="feature-orders" icon={<Truck className="size-5"/>} title="Order Tracking (Coming Soon)" desc="Save orders, attach tracking numbers, and see ETA via multi‑carrier lookup."/>
            <FeatureCard testId="feature-providers" icon={<Wand2 className="size-5"/>} title="Provider Suggestions (Coming Soon)" desc="Invite a provider to propose protocol edits and inventory adds — you approve what goes live."/>
            <FeatureCard icon={<ShieldCheck className="size-5"/>} title="Privacy" desc="You control access. Provider view is limited to protocol, inventory, and calendar."/>
            <FeatureCard icon={<BarChart3 className="size-5"/>} title="Forecasting" desc="Run‑out projections that respect dosage, frequency, and on/off cycles."/>
          </div>
        </div>
      </section>

      {/* Workflow strip */}
      <section id="workflow" className="py-16 lg:py-20 bg-[rgb(var(--pp-card-contrast))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Simple, reliable workflow</h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-6">
            <Step n="01" title="Set your protocol" body="Choose peptides from inventory, pick a schedule, and (optionally) define on/off cycles."/>
            <Step n="02" title="Log doses daily" body="One tap to log or skip. Cards update inventory and color state automatically."/>
            <Step n="03" title="Never run out" body="See projected depletion dates and reorder in a couple of clicks with vendor coupons applied."/>
          </ol>
        </div>
      </section>

      {/* Providers */}
      <section id="providers" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Provider collaboration, without chaos</h2>
              <p className="mt-3 text-[rgb(var(--pp-muted))] max-w-prose">
                Invite trusted providers to review your live protocol and calendar.
                <span className="ml-2 inline-flex items-center text-[10px] px-2 py-0.5 rounded-full bg-[rgba(var(--pp-accent-2),0.12)] text-[rgb(var(--pp-accent-2))]">Coming Soon</span>{" "}
                They can propose changes as "Suggestions" — you stay in control of what actually goes live.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Share by code or magic link",
                  "Provider can draft protocol edits and inventory additions",
                  "Accept suggestions with one click",
                ].map((t,i)=> (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 text-[rgb(var(--pp-accent-1))]"/>
                    <span className="text-[rgb(var(--pp-foreground))] dark:text-white">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-[rgba(var(--pp-accent-1),0.15)] via-[rgba(var(--pp-accent-2),0.12)] to-[rgba(var(--pp-accent-3),0.15)] rounded-3xl blur-2xl"/>
              <div className="rounded-3xl border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))] p-6 shadow-xl">
                <div className="text-sm font-medium">Suggestion Preview</div>
                <div className="mt-3 rounded-2xl border border-[rgb(var(--pp-border))] p-4">
                  <div className="text-sm font-medium">Add CJC/Ipamorelin</div>
                  <div className="mt-1 text-xs text-[rgb(var(--pp-muted))]">Daily, 100/100 mcg • 6 weeks on / 2 off</div>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-2 rounded-xl text-xs text-white bg-[rgb(var(--pp-accent-1))]">Accept</button>
                    <button className="px-3 py-2 rounded-xl text-xs border border-[rgb(var(--pp-border))]">Ask a question</button>
                  </div>
                </div>
                <div className="mt-3 rounded-2xl border border-[rgb(var(--pp-border))] p-4">
                  <div className="text-sm font-medium">Increase BPC‑157 to 300 mcg</div>
                  <div className="mt-1 text-xs text-[rgb(var(--pp-muted))]">Weekdays only • until symptoms resolve</div>
                  <div className="mt-3 flex gap-2">
                    <button className="px-3 py-2 rounded-xl text-xs text-white bg-[rgb(var(--pp-accent-1))]">Accept</button>
                    <button className="px-3 py-2 rounded-xl text-xs border border-[rgb(var(--pp-border))]">Decline</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-20 border-t border-[rgb(var(--pp-border))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">FAQ</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <Faq q="Does this replace my provider?" a="No. Peptide Planner is a companion for planning, tracking, and inventory — not medical advice."/>
            <Faq q="How do orders work?" a="You build a cart per vendor. When you checkout, we pass your selected items to the vendor site and save a draft order. Coupon or discount pricing is already applied in your cart. Order tracking is a future release."/>
            <Faq q="Can I use cycles?" a="Yes. Protocols can include X weeks on / X weeks off. Forecasting respects cycles when projecting run‑out."/>
            <Faq q="Light & dark mode?" a="Yep — toggle in the header. Colors follow your brand variables so both themes stay on‑brand."/>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Start planning smarter — today</h2>
          <p className="mt-3 text-[rgb(var(--pp-muted))]">Bring structure to your stack. Keep your color scheme. Keep your vendors. Lose the chaos.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="https://app.peptideplanner.info" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] via-[rgb(var(--pp-accent-2))] to-[rgb(var(--pp-accent-3))] shadow">
              Launch the App <LogIn className="size-4"/>
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium border border-[rgb(var(--pp-border))]">
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
            <a href="#" className="hover:opacity-80">Privacy</a>
            <a href="#" className="hover:opacity-80">Terms</a>
            <a href="#" className="hover:opacity-80">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({icon, title, desc, testId}:{icon:React.ReactNode, title:string, desc:string, testId?: string}){
  return (
    <div data-testid={testId} className="rounded-2xl border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))] p-4 hover:shadow-sm transition group">
      <div className="inline-flex size-9 items-center justify-center rounded-xl bg-[rgba(var(--pp-accent-2),0.12)] text-[rgb(var(--pp-accent-2))] group-hover:scale-105 transition">{icon}</div>
      <div className="mt-3 font-medium">{title}</div>
      <p className="mt-1 text-sm text-[rgb(var(--pp-muted))]">{desc}</p>
    </div>
  )
}

function Step({n,title,body}:{n:string,title:string,body:string}){
  return (
    <li className="rounded-2xl border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))] p-6">
      <div className="text-xs font-mono text-[rgb(var(--pp-muted))]">{n}</div>
      <div className="mt-1 font-medium">{title}</div>
      <p className="mt-2 text-sm text-[rgb(var(--pp-muted))]">{body}</p>
    </li>
  )
}

function Faq({q,a}:{q:string,a:string}){
  return (
    <div className="rounded-2xl border border-[rgb(var(--pp-border))] bg-[rgb(var(--pp-card))] p-5">
      <div className="font-medium">{q}</div>
      <p className="mt-2 text-sm text-[rgb(var(--pp-muted))]">{a}</p>
    </div>
  )
}
