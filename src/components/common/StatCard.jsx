import { COLORS } from "../../constants/colors";

export const StatCard = ({ label, value, change, icon, color }) => (
  <div
    style={{
      background: COLORS.surface,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "14px",
      padding: "22px",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 0.2s",
      cursor: "default",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = color)}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "100px",
        height: "100px",
        background: `radial-gradient(circle at 70% 30%, ${color}15 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
    />
    <div style={{ fontSize: "28px", marginBottom: "12px" }}>{icon}</div>
    <div
      style={{
        fontSize: "26px",
        fontWeight: 700,
        letterSpacing: "-0.5px",
        color: COLORS.text,
      }}
    >
      {value}
    </div>
    <div style={{ fontSize: "12px", color: COLORS.textMuted, marginTop: "4px" }}>
      {label}
    </div>
    <div
      style={{
        fontSize: "12px",
        color: color,
        marginTop: "6px",
        fontWeight: 600,
      }}
    >
      {change}
    </div>
  </div>
);
