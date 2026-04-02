import { HiMenuAlt2 } from "react-icons/hi";
import { HiMoon } from "react-icons/hi2";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full h-[60px] flex items-center justify-between px-5 bg-[#0f1729] border-b border-[#1e2d4a]">

      {/* ── LEFT: Hamburger ── */}
      <button className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#1e2d4a] text-[#8899b4] hover:bg-[#1a2540] hover:text-[#e8edf5] transition-colors duration-150 cursor-pointer">
        <HiMenuAlt2 size={20} />
      </button>

      {/* ── RIGHT cluster ── */}
      <div className="flex items-center gap-3">

        {/* Role label */}
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#8899b4] select-none">
          Role:
        </span>

        {/* Role pill switcher */}
        <div className="flex items-center gap-[3px] p-[3px] rounded-[10px] border bg-[#141e35] border-[#1e2d4a]">
          <button className="px-4 py-[5px] rounded-[7px] text-[11px] font-bold uppercase tracking-[0.07em] cursor-pointer bg-[#00d4ff] text-black shadow-[0_2px_10px_rgba(0,212,255,0.3)] transition-all duration-150">
            Viewer
          </button>
          <button className="px-4 py-[5px] rounded-[7px] text-[11px] font-bold uppercase tracking-[0.07em] cursor-pointer bg-transparent text-[#8899b4] hover:bg-[rgba(255,163,26,0.1)] hover:text-[#ffa31a] transition-all duration-150">
            Admin
          </button>
        </div>

        {/* Theme toggle */}
        <button className="flex items-center justify-center w-9 h-9 rounded-xl border bg-[#141e35] border-[#1e2d4a] text-[#8899b4] hover:bg-[#1a2540] hover:text-[#e8edf5] transition-colors duration-150 cursor-pointer">
          <HiMoon size={17} />
        </button>

        {/* Avatar circle */}
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-extrabold text-black select-none cursor-pointer bg-gradient-to-br from-[#00d4ff] to-[#a78bfa] hover:scale-105 transition-transform duration-150">
          V
        </div>

      </div>
    </header>
  );
}