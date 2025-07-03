"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--cac-blue)] shadow-md px-4 py-5 font-[family-name:var(--font-geist-mono)]">
<div className="mx-auto flex max-w-7xl items-center justify-center md:justify-between">
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="text-lg font-semibold text-white transition-opacity hover:opacity-80 whitespace-nowrap self-center"
          >
            🏠 CAC
          </a>

          <div className="hidden items-center space-x-4 md:flex">
            <a href="/">
              <img
                src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/344153355c22d8f969f31ff333468fd08b0f1c9c_image.png"
                alt="Logo 1"
                className="h-10 w-auto"
              />
            </a>
            <a href="/">
              <img
                src="https://assets.hackclub.com/flag-standalone.svg"
                alt="Logo 2"
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>

        {/*desktop*/}
        <ul className="hidden space-x-6 font-medium text-white md:flex">
          <li>
            <a href="/" className="hover:text-blue-300">
              Home
            </a>
          </li>
          <li>
            <a href="/overview" className="hover:text-blue-300">
              Docs
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:text-blue-300">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
