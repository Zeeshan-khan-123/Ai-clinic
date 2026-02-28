import { useState, useEffect } from "react";
import { css } from "./styles/layout";
import { COLORS } from "./constants/colors";
import { ROLES, MENUS } from "./config/roles";
import { AdminDashboard } from "./pages/AdminDashboard";
import { DoctorDashboard } from "./pages/DoctorDashboard";
import { PatientsPage } from "./pages/PatientsPage";
import { AppointmentsPage } from "./pages/AppointmentsPage";
import { SymptomChecker } from "./pages/SymptomChecker";
import { MedicalTimeline } from "./pages/MedicalTimeline";

export default function App() {
  const [role, setRole] = useState("admin");
  const [page, setPage] = useState("dashboard");
  const [showRolePicker, setShowRolePicker] = useState(false);

  const currentRole = ROLES[role];
  const menu = MENUS[role];

  useEffect(() => {
    setPage("dashboard");
  }, [role]);

  const renderPage = () => {
    if (page === "dashboard") {
      if (role === "admin") return <AdminDashboard />;
      if (role === "doctor") return <DoctorDashboard />;
      if (role === "receptionist") return <AppointmentsPage />;
      if (role === "patient") return <MedicalTimeline />;
    }
    if (page === "patients") return <PatientsPage />;
    if (page === "appointments") return <AppointmentsPage />;
    if (page === "symptom-checker") return <SymptomChecker />;
    if (page === "timeline") return <MedicalTimeline />;
    if (page === "analytics") return <AdminDashboard />;

    return (
      <div style={{ textAlign: "center", padding: "80px 20px" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🚧</div>
        <h2 style={{ color: COLORS.textDim }}>Coming Soon</h2>
        <p style={{ color: COLORS.textMuted }}>
          This section is under construction in the demo
        </p>
      </div>
    );
  };

  return (
    <div style={css.app}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #1e2d45; border-radius: 3px; }
        @keyframes pulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }
      `}</style>

      {/* Sidebar */}
      <div style={css.sidebar}>
        <div style={css.sidebarGlow} />

        {/* Logo */}
        <div
          style={{
            padding: "22px 20px",
            borderBottom: `1px solid ${COLORS.border}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.purple})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              🏥
            </div>
            <div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "15px",
                  letterSpacing: "-0.3px",
                }}
              >
                MediCore AI
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: COLORS.textMuted,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Clinic SaaS
              </div>
            </div>
          </div>
        </div>

        {/* Role Switcher */}
        <div
          style={{
            padding: "14px 16px",
            borderBottom: `1px solid ${COLORS.border}`,
            position: "relative",
          }}
        >
          <button
            onClick={() => setShowRolePicker(!showRolePicker)}
            style={{
              width: "100%",
              background: COLORS.surfaceLight,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "10px",
              padding: "10px 12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: COLORS.text,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: `${currentRole.color}30`,
                border: `2px solid ${currentRole.color}50`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 800,
                color: currentRole.color,
                flexShrink: 0,
              }}
            >
              {currentRole.avatar}
            </div>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={{ fontSize: "12px", fontWeight: 600 }}>
                {currentRole.name}
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: currentRole.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {currentRole.label}
              </div>
            </div>
            <span style={{ color: COLORS.textMuted, fontSize: "10px" }}>▾</span>
          </button>

          {showRolePicker && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "16px",
                right: "16px",
                background: COLORS.surfaceLight,
                border: `1px solid ${COLORS.border}`,
                borderRadius: "10px",
                zIndex: 100,
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              }}
            >
              {Object.entries(ROLES).map(([key, r]) => (
                <button
                  key={key}
                  onClick={() => {
                    setRole(key);
                    setShowRolePicker(false);
                  }}
                  style={{
                    width: "100%",
                    background: key === role ? `${r.color}15` : "transparent",
                    border: "none",
                    padding: "10px 14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: COLORS.text,
                    fontSize: "13px",
                    borderBottom: `1px solid ${COLORS.border}`,
                  }}
                >
                  <span
                    style={{
                      color: r.color,
                      fontWeight: 700,
                      fontSize: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    {r.label}
                  </span>
                  <span style={{ color: COLORS.textMuted, fontSize: "12px" }}>
                    {r.name}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav style={{ padding: "12px 12px", flex: 1 }}>
          <div
            style={{
              fontSize: "10px",
              color: COLORS.textMuted,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              padding: "6px 8px",
              marginBottom: "4px",
            }}
          >
            Navigation
          </div>
          {menu.map((item) => {
            const isActive = page === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 12px",
                  borderRadius: "10px",
                  border: "none",
                  background: isActive ? `${COLORS.accent}15` : "transparent",
                  color: isActive ? COLORS.accent : COLORS.textDim,
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 400,
                  marginBottom: "2px",
                  textAlign: "left",
                  transition: "all 0.15s",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = COLORS.surfaceLight;
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "20%",
                      bottom: "20%",
                      width: "3px",
                      borderRadius: "3px",
                      background: COLORS.accent,
                    }}
                  />
                )}
                <span style={{ fontSize: "16px" }}>{item.icon}</span>
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Plan badge */}
        <div
          style={{
            padding: "14px 16px",
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${COLORS.accent}15, ${COLORS.purple}15)`,
              border: `1px solid ${COLORS.accent}25`,
              borderRadius: "10px",
              padding: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: COLORS.accent,
                }}
              >
                PRO PLAN
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: COLORS.textMuted,
                  marginTop: "2px",
                }}
              >
                All AI features
              </div>
            </div>
            <span style={{ color: COLORS.accent, fontSize: "16px" }}>✦</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={css.main}>
        {/* Topbar */}
        <div style={css.topbar}>
          <div>
            <span style={{ fontSize: "13px", color: COLORS.textMuted }}>
              {menu.find((m) => m.id === page)?.icon}{" "}
              {menu.find((m) => m.id === page)?.label || "Dashboard"}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                background: `${COLORS.green}20`,
                border: `1px solid ${COLORS.green}40`,
                color: COLORS.green,
                borderRadius: "20px",
                padding: "4px 12px",
                fontSize: "11px",
                fontWeight: 600,
              }}
            >
              🟢 AI Online
            </div>
            <button
              style={{
                background: COLORS.surfaceLight,
                border: `1px solid ${COLORS.border}`,
                color: COLORS.textDim,
                borderRadius: "8px",
                padding: "7px 14px",
                cursor: "pointer",
                fontSize: "13px",
              }}
            >
              🔔
            </button>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${currentRole.color}, ${currentRole.color}80)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 800,
                color: COLORS.bg,
              }}
            >
              {currentRole.avatar}
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          style={css.content}
          onClick={() => showRolePicker && setShowRolePicker(false)}
        >
          {renderPage()}
        </div>
      </div>
    </div>
  );
}
