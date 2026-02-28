import { COLORS } from "../constants/colors";

export const MOCK = {
  stats: {
    admin: [
      { label: "Total Patients", value: "2,847", change: "+12%", icon: "👥", color: COLORS.accent },
      { label: "Active Doctors", value: "24", change: "+2", icon: "🩺", color: COLORS.green },
      { label: "This Month Revenue", value: "PKR 847,200", change: "+8.3%", icon: "💰", color: COLORS.yellow },
      { label: "Monthly Appointments", value: "1,294", change: "+15%", icon: "📅", color: COLORS.purple },
    ],
    doctor: [
      { label: "Today's Patients", value: "12", change: "3 pending", icon: "🏥", color: COLORS.accent },
      { label: "This Month", value: "247", change: "+18%", icon: "📊", color: COLORS.green },
      { label: "Prescriptions", value: "89", change: "this month", icon: "💊", color: COLORS.yellow },
      { label: "Avg. Rating", value: "4.9/5", change: "↑ 0.2", icon: "⭐", color: COLORS.purple },
    ],
  },
  appointments: [
    { id: 1, patient: "Ayesha Malik", doctor: "Dr. Ahmad", time: "09:00 AM", date: "2026-03-01", status: "confirmed", type: "Consultation", fee: 1500 },
    { id: 2, patient: "Hassan Raza", doctor: "Dr. Fatima", time: "09:30 AM", date: "2026-03-01", status: "pending", type: "Follow-up", fee: 800 },
    { id: 3, patient: "Sana Khan", doctor: "Dr. Ahmad", time: "10:00 AM", date: "2026-03-01", status: "completed", type: "Emergency", fee: 3000 },
    { id: 4, patient: "Bilal Ahmed", doctor: "Dr. Usman", time: "10:30 AM", date: "2026-03-01", status: "cancelled", type: "Consultation", fee: 1500 },
    { id: 5, patient: "Nadia Hussain", doctor: "Dr. Fatima", time: "11:00 AM", date: "2026-03-01", status: "confirmed", type: "Consultation", fee: 1500 },
  ],
  patients: [
    { id: 1, name: "Ayesha Malik", age: 34, gender: "Female", blood: "A+", phone: "+92-300-1234567", visits: 8, lastVisit: "2026-02-28", risk: "Low" },
    { id: 2, name: "Hassan Raza", age: 67, gender: "Male", blood: "O-", phone: "+92-321-9876543", visits: 15, lastVisit: "2026-02-25", risk: "High" },
    { id: 3, name: "Sana Khan", age: 28, gender: "Female", blood: "B+", phone: "+92-333-5555555", visits: 3, lastVisit: "2026-03-01", risk: "Low" },
    { id: 4, name: "Bilal Ahmed", age: 45, gender: "Male", blood: "AB+", phone: "+92-345-2222222", visits: 6, lastVisit: "2026-02-20", risk: "Moderate" },
  ],
  timeline: [
    { date: "2026-03-01", type: "Appointment", title: "General Consultation", detail: "Fever, headache - confirmed COVID-19", doctor: "Dr. Ahmad", icon: "📅" },
    { date: "2026-03-01", type: "Prescription", title: "Prescription #RX-2847", detail: "Paracetamol 500mg, Azithromycin 250mg, Vitamin C", doctor: "Dr. Ahmad", icon: "💊" },
    { date: "2026-03-01", type: "Diagnosis", title: "AI Diagnosis Log", detail: "Risk: Moderate | COVID-19, Bacterial Infection", doctor: "Dr. Ahmad", icon: "🤖" },
    { date: "2026-02-10", type: "Appointment", title: "Follow-up Visit", detail: "Hypertension monitoring", doctor: "Dr. Fatima", icon: "📅" },
    { date: "2026-02-10", type: "Prescription", title: "Prescription #RX-2801", detail: "Amlodipine 5mg, Losartan 50mg", doctor: "Dr. Fatima", icon: "💊" },
    { date: "2026-01-15", type: "Appointment", title: "Emergency Visit", detail: "Chest pain — ECG performed, normal", doctor: "Dr. Ahmad", icon: "🚨" },
  ],
  monthlyData: [
    { month: "Sep", appointments: 980, revenue: 620000 },
    { month: "Oct", appointments: 1050, revenue: 710000 },
    { month: "Nov", appointments: 1120, revenue: 750000 },
    { month: "Dec", appointments: 890, revenue: 580000 },
    { month: "Jan", appointments: 1180, revenue: 790000 },
    { month: "Feb", appointments: 1240, revenue: 830000 },
    { month: "Mar", appointments: 1294, revenue: 847200 },
  ],
  topDiagnoses: [
    { name: "Hypertension", count: 234, pct: 82 },
    { name: "Diabetes Type 2", count: 189, pct: 66 },
    { name: "Upper Respiratory Infection", count: 156, pct: 55 },
    { name: "Gastroenteritis", count: 98, pct: 34 },
    { name: "Anxiety Disorder", count: 87, pct: 30 },
  ],
};
