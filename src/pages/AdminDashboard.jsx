import { COLORS } from "../constants/colors";
import { MOCK } from "../data/mock";
import { Card } from "../components/common/Card";
import { StatCard } from "../components/common/StatCard";
import { BarChart } from "../components/charts/BarChart";

export const AdminDashboard = () => (
  <div>
    <h1 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "6px" }}>
      Admin Overview
    </h1>
    <p style={{ color: COLORS.textMuted, fontSize: "13px", marginBottom: "24px" }}>
      MediCore Clinic — March 2026
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      {MOCK.stats.admin.map((s, i) => (
        <StatCard key={i} {...s} />
      ))}
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      <Card>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "20px",
            color: COLORS.textDim,
          }}
        >
          Monthly Appointments
        </h3>
        <BarChart data={MOCK.monthlyData} dataKey="appointments" color={COLORS.accent} />
      </Card>
      <Card>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "20px",
            color: COLORS.textDim,
          }}
        >
          Revenue Trend (PKR)
        </h3>
        <BarChart data={MOCK.monthlyData} dataKey="revenue" color={COLORS.green} />
      </Card>
    </div>

    <Card>
      <h3
        style={{
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "16px",
          color: COLORS.textDim,
        }}
      >
        Top Diagnoses This Month
      </h3>
      {MOCK.topDiagnoses.map((d, i) => (
        <div key={i} style={{ marginBottom: "14px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "4px",
              fontSize: "13px",
            }}
          >
            <span>{d.name}</span>
            <span style={{ color: COLORS.textMuted }}>{d.count} cases</span>
          </div>
          <div
            style={{
              background: COLORS.border,
              borderRadius: "4px",
              height: "6px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${d.pct}%`,
                height: "100%",
                background: `linear-gradient(to right, ${COLORS.accent}, ${COLORS.purple})`,
                borderRadius: "4px",
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>
      ))}
    </Card>
  </div>
);
