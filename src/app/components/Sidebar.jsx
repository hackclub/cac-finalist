const SideBar = () => {
  return (
    <div className="w-60">
      <aside className="bg-slate-600 space-y-4 max-w-prose p-4 h-screen border-r-4 border-slate-800 border-dashed hackclub-font text-slate-300">
        {/* Title */}
        <a
          href="/"
          className="block text-3xl font-bold text-white mb-4 hover:text-blue-400 transition-colors"
        >
          Home
        </a>

        {/* Section 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-white">Getting the finalist award</h2>
          <ul className="space-y-1">
            <li>
              <a href="/guide" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Overview
              </a>
            </li>
            <li>
              <a href="/resources" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Github
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2 text-white">The Congressional Hackathon</h2>
          <ul className="space-y-1">
            <li>
              <a href="/pcb-overview" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                FAQ
              </a>
            </li>
            <li>
              <a href="/pcb-resources" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                Travel Info
              </a>
            </li>
            <li>
              <a href="/jlcpcb-ordering" className="block py-2 px-4 rounded hover:bg-slate-200 hover:text-cyan-800 transition-all">
                For Parents
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
  