import { COLORS } from "../constants/colors";

export const ROLES = {
  admin: { label: "Admin", color: COLORS.purple, avatar: "AD", name: "Dr. Admin" },
  doctor: { label: "Doctor", color: COLORS.green, avatar: "DR", name: "Dr. Ahmad Khan" },
  receptionist: { label: "Receptionist", color: COLORS.accent, avatar: "RC", name: "Sara Malik" },
  patient: { label: "Patient", color: COLORS.yellow, avatar: "PT", name: "Ayesha Malik" },
};

export const MENUS = {
  admin: [
    { id: "dashboard", label: "Dashboard", icon: "⊞" },
    { id: "analytics", label: "Analytics", icon: "📊" },
    { id: "patients", label: "Patients", icon: "👥" },
    { id: "appointments", label: "Appointments", icon: "📅" },
    { id: "doctors", label: "Doctors", icon: "🩺" },
    { id: "settings", label: "Settings", icon: "⚙" },
  ],
  doctor: [
    { id: "dashboard", label: "Dashboard", icon: "⊞" },
    { id: "appointments", label: "My Schedule", icon: "📅" },
    { id: "patients", label: "Patients", icon: "👥" },
    { id: "symptom-checker", label: "AI Diagnosis", icon: "🤖" },
    { id: "prescriptions", label: "Prescriptions", icon: "💊" },
  ],
  receptionist: [
    { id: "dashboard", label: "Dashboard", icon: "⊞" },
    { id: "appointments", label: "Book Appointment", icon: "📅" },
    { id: "patients", label: "Patients", icon: "👥" },
    { id: "prescriptions", label: "Prescriptions", icon: "💊" },
  ],
  patient: [
    { id: "dashboard", label: "My Dashboard", icon: "⊞" },
    { id: "appointments", label: "My Appointments", icon: "📅" },
    { id: "timeline", label: "Medical History", icon: "📋" },
    { id: "prescriptions", label: "My Prescriptions", icon: "💊" },
  ],
};
