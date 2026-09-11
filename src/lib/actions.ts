import type { QuickAction } from "@/lib/types";

export type { QuickAction };

export const QUICK_ACTIONS: QuickAction[] = [
  {
    id: "one-view",
    label: "Truist One View",
    description: "Access, sign-in, admin, and mobile",
    prompt: "What is Truist One View, in simple terms?",
  },
  {
    id: "payables",
    label: "Payables",
    description: "Payments, approvals, and vendor payouts",
    prompt: "Tell me about Payables.",
    disabled: true,
  },
  {
    id: "receivables",
    label: "Receivables",
    description: "Collections, lockbox, and posting",
    prompt: "Tell me about Receivables.",
    disabled: true,
  },
  {
    id: "fraud",
    label: "Fraud Mitigation",
    description: "Controls, alerts, and payment protection",
    prompt: "Tell me about Fraud Mitigation.",
    disabled: true,
  },
  {
    id: "liquidity",
    label: "Liquidity",
    description: "Cash concentration and working capital",
    prompt: "Tell me about Liquidity.",
    disabled: true,
  },
  {
    id: "reporting",
    label: "Information Reporting",
    description: "Balances, activity, and exports",
    prompt: "Tell me about Information Reporting.",
    disabled: true,
  },
];

export const FOLLOW_UP_ACTIONS: QuickAction[] = [
  {
    id: "registration",
    label: "First-time setup",
    description: "How new users get started",
    prompt: "How do I set up One View for the first time?",
  },
  {
    id: "signin",
    label: "Sign-in help",
    description: "Password, MFA, locked account",
    prompt: "I'm having trouble signing in to One View. What should I try?",
  },
  {
    id: "mobile",
    label: "Mobile app",
    description: "Using One View on your phone",
    prompt: "How does the One View mobile app work?",
  },
  {
    id: "admin",
    label: "Admin basics",
    description: "Who can manage users and access",
    prompt: "Who manages users and permissions in One View?",
  },
  {
    id: "guides",
    label: "Show me a guide",
    description: "Official links and PDFs",
    prompt:
      "Please share the most useful official One View guides and links for what we just talked about.",
  },
];
