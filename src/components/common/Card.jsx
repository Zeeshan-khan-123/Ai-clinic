import { COLORS } from "../../constants/colors";

export const Card = ({ children, style = {} }) => (
  <div
    style={{
      background: COLORS.surface,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "14px",
      padding: "22px",
      ...style,
    }}
  >
    {children}
  </div>
);
