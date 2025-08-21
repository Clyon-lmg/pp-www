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
      <style>{`/* unchanged color tokens */`}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 ...">
        <div className="mx-auto max-w-7xl ...">
          <a href="#home" className="group inline-flex items-center gap-3">...</a>

          <nav className="hidden md:flex items-center gap-6 text-sm">...</nav>

          <div className="flex items-center gap-2">
            <button onClick={() => setDark(d => !d)} className="px-3 py-2 ...">
              {dark ? "Light" : "Dark"} mode
            </button>
            <a
              href="https://app.peptideplanner.info"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] via-[rgb(var(--pp-accent-2))] to-[rgb(var(--pp-accent-3))] shadow-sm hover:shadow transition"
            >
              Launch App <ArrowRight className="size-4"/>
            </a>
          </div>
        </div>
      </header>

      {/* Compliance Banner */}
      <div data-testid="compliance-banner" className="bg-red-500/10 ...">
        <div className="mx-auto max-w-7xl ...">
          Research use only — peptides are <span className="underline">not for human consumption</span>.
        </div>
      </div>

      {/* Hero ... */}

      {/* CTA */}
      <section id="cta" className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl ... text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Start planning smarter — today</h2>
          <p className="mt-3 text-[rgb(var(--pp-muted))]">Bring structure to your stack...</p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="https://app.peptideplanner.info"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-[rgb(var(--pp-accent-1))] via-[rgb(var(--pp-accent-2))] to-[rgb(var(--pp-accent-3))] shadow"
            >
              Launch the App <LogIn className="size-4"/>
            </a>
            <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium border">Explore Features</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgb(var(--pp-border))]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[rgb(var(--pp-muted))]">
            <div className="mb-2 text-xs text-red-600 dark:text-red-400">
              Research use only — peptides are not for human consumption.
            </div>
            <div className="mb-1 text-xs text-green-600 dark:text-green-400">
              We respect your privacy — we will never sell your data.
            </div>
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
