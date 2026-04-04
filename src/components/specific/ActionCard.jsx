const ActionCard = ({ title, value, icon, color, glow, sub }) => {
  // fallback glow if not passed
  const glowColor = glow ?? `${color}22`;

  return (
    <div
      className="
        relative overflow-hidden
        bg-light-surface dark:bg-dark-surface
        border border-light-border dark:border-dark-border
        rounded-2xl px-[22px] py-5
        flex-1 basis-[200px] min-w-[160px]
        cursor-default
        transition-all duration-200
      "
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 4px 24px ${glowColor}`;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "none";
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />

      {/* Icon badge */}
      <div
        className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[20px] mb-[14px]"
        style={{ background: glowColor, color }}
      >
        {icon}
      </div>

      {/* Label */}
      <p className="
        m-0 mb-1.5
        text-[12px] font-bold uppercase tracking-[0.07em]
        text-light-subtle dark:text-dark-subtle
        font-['Roboto_Mono']
      ">
        {title}
      </p>

      {/* Main value */}
      <p
        className="m-0 mb-1 text-[24px] font-bold leading-[1.1] font-['Roboto']"
        style={{ color }}
      >
        {value ?? "—"}
      </p>

      {/* Optional sub text */}
      {sub && (
        <p className="
          m-0 text-[12px] leading-relaxed
          text-light-subtle dark:text-dark-subtle
          font-['Roboto_Mono']
        ">
          {sub}
        </p>
      )}
    </div>
  );
};

export default ActionCard;