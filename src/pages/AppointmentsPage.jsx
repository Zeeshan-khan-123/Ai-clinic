import { COLORS } from "../constants/colors";
import { MOCK } from "../data/mock";
import { Card } from "../components/common/Card";
import { Tag } from "../components/common/Tag";
import { statusColors } from "../config/statusColors";

export const AppointmentsPage = () => (
  <div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px",
      }}
    >
      <div>
        <h1 style={{ fontSize: "22px", fontWeight: 700 }}>Appointments</h1>
        <p style={{ color: COLORS.textMuted, fontSize: "13px" }}>
          Today — March 1, 2026
        </p>
      </div>
      <button
        style={{
          background: COLORS.accent,
          color: COLORS.bg,
          border: "none",
          borderRadius: "10px",
          padding: "10px 18px",
          fontSize: "13px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        + Book Appointment
      </button>
    </div>

    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      {["All", "Pending", "Confirmed", "Completed", "Cancelled"].map((f) => (
        <button
          key={f}
          style={{
            background: f === "All" ? COLORS.accent : "transparent",
            color: f === "All" ? COLORS.bg : COLORS.textDim,
            border: `1px solid ${
              f === "All" ? COLORS.accent : COLORS.border
            }`,
            borderRadius: "8px",
            padding: "7px 16px",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          {f}
        </button>
      ))}
    </div>

    <Card style={{ padding: 0, overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
            {["Patient", "Doctor", "Time", "Type", "Status", "Fee", "Actions"].map(
              (h) => (
                <th
                  key={h}
                  style={{
                    padding: "14px 16px",
                    textAlign: "left",
                    fontSize: "11px",
                    color: COLORS.textMuted,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  {h}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {MOCK.appointments.map((a, i) => (
            <tr
              key={a.id}
              style={{
                borderBottom:
                  i < MOCK.appointments.length - 1
                    ? `1px solid ${COLORS.border}`
                    : "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = COLORS.surfaceLight)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <td style={{ padding: "14px 16px", fontWeight: 500 }}>
                {a.patient}
              </td>
              <td
                style={{
                  padding: "14px 16px",
                  color: COLORS.textDim,
                  fontSize: "13px",
                }}
              >
                {a.doctor}
              </td>
              <td
                style={{
                  padding: "14px 16px",
                  color: COLORS.accent,
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                {a.time}
              </td>
              <td style={{ padding: "14px 16px" }}>
                <Tag color={COLORS.purple}>{a.type}</Tag>
              </td>
              <td style={{ padding: "14px 16px" }}>
                <Tag color={statusColors[a.status]}>{a.status}</Tag>
              </td>
              <td
                style={{
                  padding: "14px 16px",
                  color: COLORS.yellow,
                  fontWeight: 600,
                  fontSize: "13px",
                }}
              >
                PKR {a.fee.toLocaleString()}
              </td>
              <td style={{ padding: "14px 16px" }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button
                    style={{
                      background: COLORS.greenGlow,
                      border: `1px solid ${COLORS.green}40`,
                      color: COLORS.green,
                      borderRadius: "6px",
                      padding: "4px 10px",
                      cursor: "pointer",
                      fontSize: "11px",
                    }}
                  >
                    ✓
                  </button>
                  <button
                    style={{
                      background: COLORS.redGlow,
                      border: `1px solid ${COLORS.red}40`,
                      color: COLORS.red,
                      borderRadius: "6px",
                      padding: "4px 10px",
                      cursor: "pointer",
                      fontSize: "11px",
                    }}
                  >
                    ✕
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </div>
);
