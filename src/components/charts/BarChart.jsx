import { COLORS } from "../../constants/colors";

export const BarChart = ({ data, dataKey, color }) => {
  const max = Math.max(...data.map((d) => d[dataKey]));

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "8px",
          height: "120px",
        }}
      >
        {data.map((d, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: `${(d[dataKey] / max) * 100}px`,
                background: `linear-gradient(to top, ${color}, ${color}88)`,
                borderRadius: "4px 4px 0 0",
                transition: "opacity 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              title={`${d.month}: ${d[dataKey].toLocaleString()}`}
            />
            <div style={{ fontSize: "10px", color: COLORS.textMuted }}>{d.month}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
