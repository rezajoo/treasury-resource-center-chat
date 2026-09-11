import type { QuickAction } from "@/lib/types";

export type { QuickAction };

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: "one-view",
    label: "Truist One View",
    labelEs: "Truist One View",
    description: "Access, sign-in, admin, and mobile",
    descriptionEs: "Acceso, inicio de sesión, admin y móvil",
    prompt: "What is Truist One View, in simple terms?",
  },
  {
    id: "payables",
    label: "Payables",
    labelEs: "Cuentas por pagar",
    description: "Payments, approvals, and vendor payouts",
    descriptionEs: "Pagos, aprobaciones y pagos a proveedores",
    prompt: "Tell me about Payables.",
    disabled: true,
  },
  {
    id: "receivables",
    label: "Receivables",
    labelEs: "Cuentas por cobrar",
    description: "Collections, lockbox, and posting",
    descriptionEs: "Cobros, lockbox y registro",
    prompt: "Tell me about Receivables.",
    disabled: true,
  },
  {
    id: "fraud",
    label: "Fraud Mitigation",
    labelEs: "Mitigación de fraude",
    description: "Controls, alerts, and payment protection",
    descriptionEs: "Controles, alertas y protección de pagos",
    prompt: "Tell me about Fraud Mitigation.",
    disabled: true,
  },
  {
    id: "liquidity",
    label: "Liquidity",
    labelEs: "Liquidez",
    description: "Cash concentration and working capital",
    descriptionEs: "Concentración de efectivo y capital de trabajo",
    prompt: "Tell me about Liquidity.",
    disabled: true,
  },
  {
    id: "reporting",
    label: "Information Reporting",
    labelEs: "Informes de información",
    description: "Balances, activity, and exports",
    descriptionEs: "Saldos, actividad y exportaciones",
    prompt: "Tell me about Information Reporting.",
    disabled: true,
  },
];

export const FOLLOW_UP_ACTIONS: QuickAction[] = [
  {
    id: "registration",
    label: "First-time setup",
    labelEs: "Configuración inicial",
    description: "How new users get started",
    descriptionEs: "Cómo empiezan los usuarios nuevos",
    prompt: "How do I set up One View for the first time?",
  },
  {
    id: "signin",
    label: "Sign-in help",
    labelEs: "Ayuda para iniciar sesión",
    description: "Password, MFA, locked account",
    descriptionEs: "Contraseña, MFA, cuenta bloqueada",
    prompt: "I'm having trouble signing in to One View. What should I try?",
  },
  {
    id: "mobile",
    label: "Mobile app",
    labelEs: "App móvil",
    description: "Using One View on your phone",
    descriptionEs: "Usar One View en el teléfono",
    prompt: "How does the One View mobile app work?",
  },
  {
    id: "admin",
    label: "Admin basics",
    labelEs: "Aspectos básicos de admin",
    description: "Who can manage users and access",
    descriptionEs: "Quién administra usuarios y acceso",
    prompt: "Who manages users and permissions in One View?",
  },
  {
    id: "guides",
    label: "Show me a guide",
    labelEs: "Muéstrame una guía",
    description: "Official links and PDFs",
    descriptionEs: "Enlaces oficiales y PDFs",
    prompt:
      "Please share the most useful official One View guides and links for what we just talked about.",
  },
];

export function actionLabel(action: QuickAction, locale: "en" | "es") {
  return locale === "es" ? action.labelEs || action.label : action.label;
}

export function actionDescription(action: QuickAction, locale: "en" | "es") {
  return locale === "es"
    ? action.descriptionEs || action.description
    : action.description;
}
