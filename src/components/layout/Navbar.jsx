import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi2";
import { Drawer } from "@mui/material";
import Sidebar from "../specific/Sidebar";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setIsAdmin } from "../../redux/reducer/adminCheck.slice";
import { toggleTheme } from "../../redux/reducer/theme.slice";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.adminCheck.isAdmin);
  const theme = useSelector((state) => state.theme.theme);
  const isDark = theme === "dark";

  const handleRoleChange = (adminValue) => {
    dispatch(setIsAdmin(adminValue));
    localStorage.setItem("fin_is_admin", JSON.stringify(adminValue));
  };

  return (
    <>
      <header className="
        sticky top-0 z-50 w-full h-[63px]
        flex items-center justify-between px-5
        bg-light-surface dark:bg-dark-nav
        border-b border-light-border dark:border-dark-border
        backdrop-blur-sm
        transition-colors duration-300
      ">

        {/* ── LEFT: Hamburger ── */}
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="
            flex items-center justify-center w-9 h-9 rounded-xl
            border border-light-border dark:border-dark-border
            text-light-muted dark:text-dark-muted
            hover:bg-light-hover dark:hover:bg-dark-hover
            hover:text-light-text dark:hover:text-dark-text
            transition-colors duration-150 cursor-pointer
          "
        >
          <HiMenuAlt2 size={20} />
        </button>

        {/* ── CENTER: Welcome text ── */}
        <div className="flex flex-col gap-0.5 absolute left-1/2 -translate-x-1/2">
          <span className="
            text-light-text dark:text-dark-text
            font-['Syne'] font-[750] text-xl leading-tight
          ">
            Welcome back, {isAdmin ? "Admin" : "Viewer"}
          </span>
          <span className="
            text-light-subtle dark:text-dark-subtle
            font-['DM_Mono'] text-[12px]
          ">
            {format(new Date(), "EEEE, d MMMM yyyy")}
          </span>
        </div>

        {/* ── RIGHT cluster ── */}
        <div className="flex items-center gap-3">

          {/* Role label */}
          <span className="text-[11px] font-bold uppercase tracking-widest text-light-muted dark:text-dark-muted select-none">
            Role:
          </span>

          {/* Role pill switcher */}
          <div className="
            flex items-center gap-[3px] p-[3px] rounded-[10px]
            border border-light-border dark:border-dark-border
            bg-light-pill dark:bg-dark-pill
          ">
            <button
              onClick={() => handleRoleChange(false)}
              className={`
                px-4 py-[5px] rounded-[7px] text-[11px] font-bold uppercase
                tracking-[0.07em] cursor-pointer transition-all duration-150
                ${!isAdmin
                  ? "bg-accent-cyan text-dark-bg shadow-[0_2px_10px_rgba(0,212,255,0.3)]"
                  : "bg-transparent text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text"
                }
              `}
            >
              Viewer
            </button>
            <button
              onClick={() => handleRoleChange(true)}
              className={`
                px-4 py-[5px] rounded-[7px] text-[11px] font-bold uppercase
                tracking-[0.07em] cursor-pointer transition-all duration-150
                ${isAdmin
                  ? "bg-accent-cyan text-dark-bg shadow-[0_2px_10px_rgba(0,212,255,0.3)]"
                  : "bg-transparent text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text"
                }
              `}
            >
              Admin
            </button>
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="
              flex items-center justify-center w-9 h-9 rounded-xl
              border border-light-border dark:border-dark-border
              bg-light-pill dark:bg-dark-pill
              text-light-muted dark:text-dark-muted
              hover:bg-light-hover dark:hover:bg-dark-hover
              hover:text-accent-amber dark:hover:text-accent-cyan
              transition-all duration-200 cursor-pointer
            "
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <HiSun size={17} /> : <HiMoon size={17} />}
          </button>

          {/* Avatar circle */}
          <div className={`
            w-9 h-9 rounded-full flex items-center justify-center
            text-[13px] font-extrabold text-dark-bg select-none
            cursor-pointer hover:scale-105 transition-transform duration-150
            ${isAdmin
              ? "bg-gradient-to-br from-accent-amber to-[#ff6b35]"
              : "bg-gradient-to-br from-accent-cyan to-accent-violet"
            }
          `}>
            {isAdmin ? "A" : "V"}
          </div>

        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <Drawer
        open={isMobile}
        onClose={() => setIsMobile(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            background: "var(--drawer-bg)",
            borderRight: "1px solid var(--drawer-border)",
          },
        }}
      >
        <Sidebar onClose={() => setIsMobile(false)} />
      </Drawer>
    </>
  );
}