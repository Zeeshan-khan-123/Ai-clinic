import { COLORS } from "../constants/colors";

export const css = {
  app: {
    fontFamily: "'DM Sans', -apple-system, sans-serif",
    background: COLORS.bg,
    color: COLORS.text,
    minHeight: "100vh",
    display: "flex",
  },
  sidebar: {
    width: "260px",
    minWidth: "260px",
    background: COLORS.surface,
    borderRight: `1px solid ${COLORS.border}`,
    display: "flex",
    flexDirection: "column",
    padding: "0",
    position: "relative",
    overflow: "hidden",
  },
  sidebarGlow: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    height: "300px",
    background:
      "radial-gradient(ellipse at 50% -20%, rgba(0,212,255,0.08) 0%, transparent 70%)",
    pointerEvents: "none",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  topbar: {
    height: "64px",
    background: COLORS.surface,
    borderBottom: `1px solid ${COLORS.border}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 28px",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  content: {
    flex: 1,
    overflowY: "auto",
    padding: "28px",
  },
};
