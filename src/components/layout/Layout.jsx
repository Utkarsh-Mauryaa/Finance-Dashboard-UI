import Sidebar from "../specific/Sidebar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === "dark";

  // KEY FIX: apply .dark to <html> instead of a wrapper div.
  //
  // Previously: <div className={isDark ? "dark" : ""}> — this means:
  //   - MUI portals (DataGrid menus, Drawers) appended to <body> are OUTSIDE
  //     this div, so they never see .dark and CSS vars resolve to light values
  //   - The Suspense fallback in App.jsx renders before Layout mounts,
  //     so .dark doesn't exist on the DOM at all during that window
  //   - body:has(.dark) in CSS works in modern browsers but has spotty support
  //
  // By toggling .dark on <html>, every single element on the page —
  // including MUI portals, Suspense fallbacks, and anything else — is
  // a descendant of <html> and will correctly inherit the dark CSS variables.
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg font-sans transition-colors duration-300">
      <Navbar />

      <div className="flex h-screen overflow-hidden">

        {/* Desktop sidebar */}
        <aside className="
          hidden md:block
          w-[230px] shrink-0
          border-r border-light-border dark:border-dark-border
          bg-light-surface dark:bg-dark-surface
          overflow-y-auto
          transition-colors duration-300
        ">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-light-bg dark:bg-dark-bg transition-colors duration-300">
          <div className="p-6 min-h-full">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
};

export default Layout;