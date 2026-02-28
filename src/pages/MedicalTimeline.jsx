import { COLORS } from "../constants/colors";
import { MOCK } from "../data/mock";
import { Card } from "../components/common/Card";
import { Tag } from "../components/common/Tag";

export const MedicalTimeline = () => (
  <div>
    <h1 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "6px" }}>
      Medical History
    </h1>
    <p
      style={{
        color: COLORS.textMuted,
        fontSize: "13px",
        marginBottom: "24px",
      }}
    >
      Ayesha Malik — Complete Medical Timeline
    </p>

    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "24px",
      }}
    >
      {["All", "Appointments", "Prescriptions", "Diagnoses"].map((f) => (
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

    <div style={{ position: "relative", paddingLeft: "30px" }}>
      <div
        style={{
          position: "absolute",
          left: "12px",
          top: 0,
          bottom: 0,
          width: "2px",
          background: `linear-gradient(to bottom, ${COLORS.accent}, ${COLORS.purple}40)`,
        }}
      />

      {MOCK.timeline.map((item, i) => (
        <div key={i} style={{ marginBottom: "20px", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-24px",
              top: "16px",
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              background: COLORS.surface,
              border: `2px solid ${
                item.type === "Appointment"
                  ? COLORS.accent
                  : item.type === "Prescription"
                  ? COLORS.green
                  : COLORS.purple
              }`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
            }}
          >
            {item.icon}
          </div>

          <Card
            style={{
              borderLeft: `3px solid ${
                item.type === "Appointment"
                  ? COLORS.accent
                  : item.type === "Prescription"
                  ? COLORS.green
                  : COLORS.purple
              }`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "4px",
                  }}
                >
                  <Tag
                    color={
                      item.type === "Appointment"
                        ? COLORS.accent
                        : item.type === "Prescription"
                        ? COLORS.green
                        : COLORS.purple
                    }
                  >
                    {item.type}
                  </Tag>
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    {item.title}
                  </span>
                </div>
                <p
                  style={{
                    color: COLORS.textDim,
                    fontSize: "13px",
                    margin: "4px 0",
                  }}
                >
                  {item.detail}
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    color: COLORS.textMuted,
                  }}
                >
                  {item.doctor}
                </span>
              </div>
              <div
                style={{
                  textAlign: "right",
                  flexShrink: 0,
                  marginLeft: "16px",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: COLORS.textMuted,
                  }}
                >
                  {item.date}
                </span>
                {item.type === "Prescription" && (
                  <div style={{ marginTop: "6px" }}>
                    <button
                      style={{
                        background: COLORS.accentGlow,
                        border: `1px solid ${COLORS.accent}40`,
                        color: COLORS.accent,
                        borderRadius: "6px",
                        padding: "4px 10px",
                        cursor: "pointer",
                        fontSize: "11px",
                      }}
                    >
                      ↓ PDF
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  </div>
);
