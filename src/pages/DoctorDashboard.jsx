import { COLORS } from "../constants/colors";
import { MOCK } from "../data/mock";
import { Card } from "../components/common/Card";
import { StatCard } from "../components/common/StatCard";
import { Tag } from "../components/common/Tag";
import { statusColors } from "../config/statusColors";

export const DoctorDashboard = () => (
  <div>
    <h1 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "6px" }}>
      Good Morning, Dr. Ahmad 👋
    </h1>
    <p
      style={{
        color: COLORS.textMuted,
        fontSize: "13px",
        marginBottom: "24px",
      }}
    >
      Sunday, March 1, 2026 — 12 patients scheduled today
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      {MOCK.stats.doctor.map((s, i) => (
        <StatCard key={i} {...s} />
      ))}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: "16px",
      }}
    >
      <Card>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "16px",
            color: COLORS.textDim,
          }}
        >
          Today's Schedule
        </h3>
        {MOCK.appointments.slice(0, 4).map((a, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 0",
              borderBottom:
                i < 3 ? `1px solid ${COLORS.border}` : "none",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${COLORS.accent}40, ${COLORS.purple}40)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 700,
                color: COLORS.accent,
                flexShrink: 0,
              }}
            >
              {a.patient
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "13px",
                }}
              >
                {a.patient}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: COLORS.textMuted,
                }}
              >
                {a.type}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "13px",
                  color: COLORS.accent,
                  fontWeight: 600,
                }}
              >
                {a.time}
              </div>
              <Tag color={statusColors[a.status]}>{a.status}</Tag>
            </div>
          </div>
        ))}
      </Card>

      <Card>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "16px",
            color: COLORS.textDim,
          }}
        >
          Quick Actions
        </h3>
        {[
          { label: "Start AI Diagnosis", icon: "🤖", color: COLORS.accent },
          { label: "Write Prescription", icon: "💊", color: COLORS.green },
          { label: "View Patient Records", icon: "📋", color: COLORS.purple },
          { label: "Generate Report", icon: "📊", color: COLORS.yellow },
        ].map((action, i) => (
          <button
            key={i}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: COLORS.surfaceLight,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "10px",
              padding: "12px 14px",
              cursor: "pointer",
              marginBottom: "10px",
              color: COLORS.text,
              fontSize: "13px",
              fontWeight: 500,
              textAlign: "left",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = action.color)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = COLORS.border)
            }
          >
            <span style={{ fontSize: "20px" }}>{action.icon}</span>
            {action.label}
          </button>
        ))}
      </Card>
    </div>
  </div>
);
