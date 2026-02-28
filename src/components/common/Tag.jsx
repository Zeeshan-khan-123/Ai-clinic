import { COLORS } from "../../constants/colors";

export const Tag = ({ children, color = COLORS.accent }) => (
  <span
    style={{
      background: `${color}20`,
      color: color,
      border: `1px solid ${color}30`,
      padding: "2px 10px",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);
