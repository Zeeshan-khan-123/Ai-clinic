import { useState } from "react";
import { COLORS } from "../constants/colors";
import { Card } from "../components/common/Card";
import { Tag } from "../components/common/Tag";

export const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [aiAvailable, setAiAvailable] = useState(true);

  const analyze = () => {
    setLoading(true);
    setResult(null);

    // Simulate AI response (demo only)
    setTimeout(() => {
      setLoading(false);
      setAiAvailable(true);
      setResult({
        possible_conditions: [
          {
            name: "Upper Respiratory Infection",
            probability: "High",
            description:
              "Viral or bacterial infection of the upper respiratory tract",
          },
          {
            name: "COVID-19",
            probability: "Moderate",
            description: "SARS-CoV-2 infection — consider PCR test",
          },
          {
            name: "Influenza Type A",
            probability: "Moderate",
            description: "Seasonal flu with typical systemic symptoms",
          },
        ],
        risk_level: "Moderate",
        suggested_tests: [
          "Complete Blood Count (CBC)",
          "COVID-19 PCR",
          "Chest X-Ray",
          "CRP (Inflammation marker)",
        ],
        red_flags: [
          "Fever >39°C persisting >3 days",
          "Oxygen saturation <95%",
        ],
        confidence: 0.87,
      });
    }, 2000);
  };

  const inputStyle = {
    width: "100%",
    background: COLORS.surfaceLight,
    border: `1px solid ${COLORS.border}`,
    borderRadius: "8px",
    padding: "10px 14px",
    color: COLORS.text,
    fontSize: "13px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const statusColors = {
    High: COLORS.red,
    Moderate: COLORS.yellow,
    Low: COLORS.green,
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.purple})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
          }}
        >
          🤖
        </div>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: 700 }}>
            AI Symptom Checker
          </h1>
          <p style={{ color: COLORS.textMuted, fontSize: "13px" }}>
            Powered by Google Gemini 1.5 Flash
          </p>
        </div>
      </div>

      {!aiAvailable && (
        <div
          style={{
            background: `${COLORS.yellow}15`,
            border: `1px solid ${COLORS.yellow}40`,
            borderRadius: "10px",
            padding: "12px 16px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>⚠️</span>
          <span style={{ color: COLORS.yellow, fontSize: "13px" }}>
            AI service temporarily unavailable. Manual assessment mode active.
          </span>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* Left: Form */}
        <div>
          <Card>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "18px",
              }}
            >
              Patient Information
            </h3>

            <div style={{ marginBottom: "14px" }}>
              <label
                style={{
                  fontSize: "12px",
                  color: COLORS.textMuted,
                  display: "block",
                  marginBottom: "6px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Symptoms *
              </label>
              <textarea
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="e.g. fever, cough, sore throat, fatigue..."
                rows={3}
                style={{ ...inputStyle, resize: "none" }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "14px",
              }}
            >
              <div>
                <label
                  style={{
                    fontSize: "12px",
                    color: COLORS.textMuted,
                    display: "block",
                    marginBottom: "6px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Age
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="35"
                  style={inputStyle}
                />
              </div>
              <div>
                <label
                  style={{
                    fontSize: "12px",
                    color: COLORS.textMuted,
                    display: "block",
                    marginBottom: "6px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={inputStyle}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label
                style={{
                  fontSize: "12px",
                  color: COLORS.textMuted,
                  display: "block",
                  marginBottom: "6px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Medical History
              </label>
              <input
                value={history}
                onChange={(e) => setHistory(e.target.value)}
                placeholder="e.g. diabetes, hypertension..."
                style={inputStyle}
              />
            </div>

            <button
              onClick={analyze}
              disabled={loading || !symptoms}
              style={{
                width: "100%",
                background:
                  loading || !symptoms
                    ? COLORS.border
                    : `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.purple})`,
                color:
                  loading || !symptoms ? COLORS.textMuted : COLORS.bg,
                border: "none",
                borderRadius: "10px",
                padding: "13px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: loading || !symptoms ? "not-allowed" : "pointer",
                transition: "all 0.2s",
              }}
            >
              {loading ? "🔄 Analyzing..." : "🔍 Analyze Symptoms"}
            </button>
          </Card>

          <Card style={{ marginTop: "16px" }}>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              ⚠️ Risk Flagging Rules
            </h3>
            <div
              style={{
                fontSize: "12px",
                color: COLORS.textMuted,
                lineHeight: 1.8,
              }}
            >
              <div
                style={{
                  padding: "8px 0",
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              >
                🔴 Elderly (60+) + cardiac symptoms + diabetes →{" "}
                <strong style={{ color: COLORS.red }}>CRITICAL</strong>
              </div>
              <div
                style={{
                  padding: "8px 0",
                  borderBottom: `1px solid ${COLORS.border}`,
                }}
              >
                🟡 3+ infections in history →{" "}
                <strong style={{ color: COLORS.yellow }}>
                  Immunology referral
                </strong>
              </div>
              <div style={{ padding: "8px 0" }}>
                🟠 4+ visits in 3 months + symptoms →{" "}
                <strong style={{ color: COLORS.yellow }}>
                  Chronic screening
                </strong>
              </div>
            </div>
          </Card>
        </div>

        {/* Right: Results */}
        <div>
          {loading && (
            <Card
              style={{
                textAlign: "center",
                padding: "48px 22px",
              }}
            >
              <div style={{ fontSize: "42px", marginBottom: "16px" }}>
                🧠
              </div>
              <p
                style={{
                  color: COLORS.accent,
                  fontWeight: 600,
                }}
              >
                Gemini AI analyzing...
              </p>
              <p
                style={{
                  color: COLORS.textMuted,
                  fontSize: "13px",
                  marginTop: "6px",
                }}
              >
                Processing symptoms against medical knowledge base
              </p>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: COLORS.accent,
                      animation: "pulse 1.4s ease-in-out infinite",
                      animationDelay: `${i * 0.2}s`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            </Card>
          )}

          {result && !loading && (
            <div>
              <Card
                style={{
                  marginBottom: "14px",
                  border: `1px solid ${
                    result.risk_level === "High" ||
                    result.risk_level === "Critical"
                      ? COLORS.red
                      : result.risk_level === "Moderate"
                      ? COLORS.yellow
                      : COLORS.green
                  }40`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: COLORS.textMuted,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      Risk Level
                    </div>
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: 800,
                        color:
                          statusColors[result.risk_level] ||
                          COLORS.accent,
                      }}
                    >
                      {result.risk_level}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontSize: "11px",
                        color: COLORS.textMuted,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      AI Confidence
                    </div>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        color: COLORS.accent,
                      }}
                    >
                      {Math.round(result.confidence * 100)}%
                    </div>
                  </div>
                </div>
              </Card>

              <Card style={{ marginBottom: "14px" }}>
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: "14px",
                    color: COLORS.textDim,
                  }}
                >
                  Possible Conditions
                </h4>
                {result.possible_conditions.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      marginBottom: "12px",
                      padding: "12px",
                      background: COLORS.surfaceLight,
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "14px",
                        }}
                      >
                        {c.name}
                      </span>
                      <Tag
                        color={
                          c.probability === "High"
                            ? COLORS.red
                            : c.probability === "Moderate"
                            ? COLORS.yellow
                            : COLORS.green
                        }
                      >
                        {c.probability}
                      </Tag>
                    </div>
                    <p
                      style={{
                        fontSize: "12px",
                        color: COLORS.textMuted,
                        margin: 0,
                      }}
                    >
                      {c.description}
                    </p>
                  </div>
                ))}
              </Card>

              <Card style={{ marginBottom: "14px" }}>
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: "12px",
                    color: COLORS.textDim,
                  }}
                >
                  Suggested Tests
                </h4>
                {result.suggested_tests.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <span style={{ color: COLORS.accent }}>→</span> {t}
                  </div>
                ))}
              </Card>

              {result.red_flags.length > 0 && (
                <Card style={{ border: `1px solid ${COLORS.red}40` }}>
                  <h4
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "12px",
                      color: COLORS.red,
                    }}
                  >
                    🚨 Red Flags
                  </h4>
                  {result.red_flags.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        background: COLORS.redGlow,
                        borderRadius: "6px",
                        padding: "8px 12px",
                        marginBottom: "6px",
                        fontSize: "12px",
                        color: COLORS.red,
                      }}
                    >
                      {f}
                    </div>
                  ))}
                </Card>
              )}
            </div>
          )}

          {!loading && !result && (
            <Card
              style={{
                textAlign: "center",
                padding: "48px 22px",
                border: `2px dashed ${COLORS.border}`,
              }}
            >
              <div style={{ fontSize: "42px", marginBottom: "12px" }}>
                🤖
              </div>
              <p
                style={{
                  color: COLORS.textMuted,
                  fontSize: "14px",
                }}
              >
                Enter symptoms to get AI-powered diagnosis assistance
              </p>
              <p
                style={{
                  color: COLORS.textMuted,
                  fontSize: "12px",
                  marginTop: "8px",
                }}
              >
                Results are for clinical decision support only
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
