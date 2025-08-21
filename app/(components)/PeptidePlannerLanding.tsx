"use client";
import React, { useEffect, useState } from "react";
import { Calendar, ClipboardList, ShoppingCart, Package, FlaskConical as Flask, Syringe, Wand2, CheckCircle2, XCircle, Clock, ChevronRight, ShieldCheck, Truck, ArrowRight, BarChart3 } from "lucide-react";

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
      <style>{`/* same styles as before */`}</style>

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
                <div className="inline-flex items-center gap-1"><Truck className="size-4"/> Discounts auto-applied</div>
                <div className="inline-flex items-center gap-1"><BarChart3 className="size-4"/> Run-out forecasting</div>
              </div>
            </div>

            {/* Device mock remains unchanged */}
            ...
          </div>
        </div>
      </section>

      {/* Features, Workflow, Providers, FAQ sections remain unchanged */}

      {/* Removed the CTA section */}

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

// FeatureCard, Step, Faq components unchanged
