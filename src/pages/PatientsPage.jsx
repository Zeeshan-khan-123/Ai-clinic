import { useState } from "react";
import { COLORS } from "../constants/colors";
import { MOCK } from "../data/mock";
import { Card } from "../components/common/Card";
import { Tag } from "../components/common/Tag";
import { statusColors } from "../config/statusColors";

export const PatientsPage = () => {
  const [search, setSearch] = useState("");
  const filtered = MOCK.patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
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
          <h1 style={{ fontSize: "22px", fontWeight: 700 }}>Patients</h1>
          <p style={{ color: COLORS.textMuted, fontSize: "13px" }}>
            {MOCK.patients.length} registered patients
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
          + Add Patient
        </button>
      </div>

      <Card style={{ marginBottom: "16px" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search patients..."
          style={{
            width: "100%",
            background: COLORS.surfaceLight,
            border: `1px solid ${COLORS.border}`,
            borderRadius: "8px",
            padding: "10px 14px",
            color: COLORS.text,
            fontSize: "13px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </Card>

      <Card style={{ padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
              {[
                "Patient",
                "Age/Gender",
                "Blood",
                "Contact",
                "Visits",
                "Last Visit",
                "Risk",
                "",
              ].map((h) => (
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
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr
                key={p.id}
                style={{
                  borderBottom:
                    i < filtered.length - 1
                      ? `1px solid ${COLORS.border}`
                      : "none",
                  transition: "background 0.1s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = COLORS.surfaceLight)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                <td style={{ padding: "14px 16px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.purple})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: 700,
                        color: COLORS.bg,
                        flexShrink: 0,
                      }}
                    >
                      {p.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span style={{ fontWeight: 500 }}>{p.name}</span>
                  </div>
                </td>
                <td
                  style={{
                    padding: "14px 16px",
                    color: COLORS.textDim,
                    fontSize: "13px",
                  }}
                >
                  {p.age} / {p.gender}
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <Tag color={COLORS.red}>{p.blood}</Tag>
                </td>
                <td
                  style={{
                    padding: "14px 16px",
                    color: COLORS.textDim,
                    fontSize: "12px",
                  }}
                >
                  {p.phone}
                </td>
                <td style={{ padding: "14px 16px", color: COLORS.textDim }}>
                  {p.visits}
                </td>
                <td
                  style={{
                    padding: "14px 16px",
                    color: COLORS.textDim,
                    fontSize: "12px",
                  }}
                >
                  {p.lastVisit}
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <Tag color={statusColors[p.risk]}>{p.risk}</Tag>
                </td>
                <td style={{ padding: "14px 16px" }}>
                  <button
                    style={{
                      background: "transparent",
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.textDim,
                      borderRadius: "6px",
                      padding: "5px 12px",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
