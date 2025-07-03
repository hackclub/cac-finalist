"use client";

import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Hamburger (visible only on mobile) ─────────────────────── */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
        className="fixed top-4 left-4 z-50 rounded-lg bg-slate-800 p-2 text-white shadow sm:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* ── Backdrop (mobile) ─────────────────────────────────────── */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm sm:hidden"
        />
      )}

      {/* ── Sidebar ──────────────────────────────────────────────── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-60 overflow-y-auto border-r-4 border-dashed border-slate-800
          bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 p-4 font-mono text-slate-300
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}  sm:translate-x-0`}
      >
        {/* Title */}
        <a
          href="/"
          className="mb-4 block text-3xl font-bold text-white transition-colors hover:text-[--cac-blue]"
        >
          Home
        </a>

        {/* Section 1 */}
        <section className="space-y-1">
          <h2 className="mb-2 text-lg font-semibold text-white">
            Getting the finalist award
          </h2>
          <a
            href="/overview"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            Overview
          </a>
          <a
            href="/github"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            Github
          </a>
        </section>

        {/* Section 2 */}
        <section className="mt-4 space-y-1">
          <h2 className="mb-2 text-lg font-semibold text-white">
            The Congressional Hackathon
          </h2>
          <a
            href="/faq"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            FAQ
          </a>
          <a
            href="/travel-info"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            Travel Info
          </a>
          <a
            href="/parents"
            className="block rounded px-4 py-2 transition-all hover:bg-slate-200 hover:text-cyan-800"
          >
            For Parents
          </a>
        </section>
      </aside>
    </>
  );
};

export default SideBar;
