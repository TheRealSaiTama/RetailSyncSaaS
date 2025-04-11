import React, { useEffect, useState } from "react";

const DARK_CLASS = "dark";
const STORAGE_KEY = "theme";

function setHtmlDarkMode(enabled: boolean) {
  const html = document.documentElement;
  if (enabled) {
    html.classList.add(DARK_CLASS);
  } else {
    html.classList.remove(DARK_CLASS);
  }
}

function getInitialDarkMode(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const DarkModeToggle: React.FC = () => {
  const [dark, setDark] = useState(getInitialDarkMode);

  useEffect(() => {
    setHtmlDarkMode(dark);
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    document.body.classList.add("transition-colors", "duration-700");
    return () => {
      document.body.classList.remove("transition-colors", "duration-700");
    };
  }, [dark]);

  return (
    <button
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        w-10 h-10 flex items-center justify-center rounded-full
        border border-border bg-transparent
        transition-colors duration-300
        hover:bg-muted
        focus:outline-none
      `}
      onClick={() => setDark((d) => !d)}
    >
      {}
      <span className="sr-only">{dark ? "Switch to light mode" : "Switch to dark mode"}</span>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        className="transition-all duration-300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dark ? (
          <path
            d="M17.5 13.5A7 7 0 0 1 8.5 4.5a.5.5 0 0 0-.6-.6A7 7 0 1 0 18.1 14.1a.5.5 0 0 0-.6-.6Z"
            fill="currentColor"
            className="text-foreground"
          />
        ) : (
          <>
            <circle cx="11" cy="11" r="5" fill="currentColor" className="text-foreground" />
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 11 + Math.cos(angle) * 7;
              const y1 = 11 + Math.sin(angle) * 7;
              const x2 = 11 + Math.cos(angle) * 9;
              const y2 = 11 + Math.sin(angle) * 9;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  className="text-foreground"
                />
              );
            })}
          </>
        )}
      </svg>
    </button>
  );
};

export default DarkModeToggle;