import "server-only";

/**
 * Demo knowledge focused on One View (Platforms use case).
 * UI chrome stays as Treasury Resource Center (unbranded).
 * Product facts below are grounded in official Treasury Resource Center materials.
 */

export type ResourceLink = {
  name: string;
  note: string;
  url: string;
};

export const ONE_VIEW = {
  productName: "Truist One View",
  shortName: "One View",
  summary:
    "A browser-based and mobile app solution that gives corporate and commercial clients access to a variety of treasury services in one place. It provides single sign-on access to multiple underlying treasury applications, plus convenient links to other applications that use their own sign-in pages.",
  audience: "Corporate and commercial treasury, finance, and operations users",
  highlights: [
    "Consolidated, single sign-on access to multiple banking applications from one place.",
    "Real-time view of accounts and balances.",
    "Sign-in requires multi-factor authentication (MFA) with a hard token device or authenticator / Tap to verify method, plus username and password.",
    "Administrators can entitle users to permissions for specific banking applications, accounts, or account services.",
    "Mobile app access for entitled users; initial registration must be completed on desktop/web first.",
    "Inside the platform, additional reference materials, release notes, and resources are available in the Help center and Tour guides.",
  ],
  ssoApplications: [
    "Digital Treasury — ACH, Wire, Positive Pay, Real-Time Payments, and Information Reporting",
    "Treasury Manager — payments (ACH, Wire), Positive Pay, and Information Reporting",
    "Integrated Payables — automate and streamline payments through web-based solutions",
    "Integrated Receivables — centralize, integrate, and automate receivables processes",
    "Remote Deposit Capture — submit check images for deposit electronically",
    "ACH Fraud Control — protect accounts from fraudulent or unauthorized ACH activity",
    "Online Courier — automate delivery of balance and transaction reporting",
  ],
  connectNote:
    "One View Connect is an embedded ERP banking solution built on an API-first architecture for payments, reconciliation, and reporting inside an ERP, with centralized administration and bank rate controls.",
  support: {
    email: "treasuryclientservices@truist.com",
    phone: "800-774-8179",
    hours: "8 am to 8 pm ET, Monday through Friday on bank business days",
    inProductHelp: [
      "Help center (after sign-in)",
      "Tour guide help icon",
      "In-product chat with a live support representative",
    ],
  },
  welcomeEmailFrom: "alertnotifications@message.truist.com",
  marketingUrl:
    "https://www.truist.com/commercial-corporate-institutional/manage-cash-flow/truist-one-view",
  resourceCenterUrl:
    "https://treasuryresources.truist.com/platforms/truist-one-view",
  appStoreUrl:
    "https://apps.apple.com/us/app/truist-one-view/id1579947474",
  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=com.truist.oneview",
};

export const ONE_VIEW_TOPICS = [
  {
    id: "overview",
    title: "What One View is",
    keyPoints: [
      `${ONE_VIEW.productName} wraps digital treasury services into one browser and mobile experience.`,
      "Users get single sign-on to multiple underlying treasury applications and convenient links to others.",
      "Security is MFA-based; companies can entitle users with the right level of application/account access.",
      "After sign-in, users should explore Help center and Tour guides for release notes and how-to resources.",
    ],
  },
  {
    id: "registration",
    title: "New user registration and first-time sign-in",
    keyPoints: [
      "A company administrator adds the user and assigns account/service access.",
      `A Welcome / registration email is sent from ${ONE_VIEW.welcomeEmailFrom} with a time-sensitive link valid for 72 hours.`,
      "Registration includes: set up MFA method, create password, enter phone number for alerts/support.",
      "Open the registration email on a desktop computer and click the link to start the workflow.",
      "If the link expires or email is missing: check spam/junk, verify email with admin, ask admin to resend.",
      "Primary admins who cannot register within 72 hours should contact Treasury Solutions Client Support.",
      "After registration, sign in with User ID + password, then complete MFA to reach the home page.",
    ],
  },
  {
    id: "signin",
    title: "Sign-in, passwords, and MFA",
    keyPoints: [
      "Password requirements: 8–28 characters, no spaces; at least one uppercase, lowercase, number, and special character; cannot repeat characters more than twice in a row; cannot match last password.",
      "Company password reset interval can be 30, 60, 90, or 120 days — ask your administrator.",
      "Users are notified when a password expires; expired passwords can be changed after entering current credentials on sign-in.",
      "Administrators and support teams cannot reset a user's password for them — use Forgot Password? on the sign-in page.",
      "Forgot Password requires User ID, email, and MFA; user receives an email link to set a new password.",
      "Too many incorrect credentials/MFA attempts locks the account — contact an administrator to unlock.",
      "MFA methods are assigned by the company/admin (for example Tap to verify or hard token).",
      "If MFA device is unavailable, admin may provide a single-use PIN if enabled for the company.",
      "If admin changes MFA method, previous method becomes inactive immediately; user must re-register via a new 72-hour email link before access resumes.",
    ],
  },
  {
    id: "admin",
    title: "Administration permissions",
    keyPoints: [
      "Only primary administrators can manage company service/account settings and all banking applications set up for the company.",
      "Primary admins are assigned via an authorized signer on the Primary Administrator Designation agreement.",
      "Permission levels include Primary admin, Administer, Manage, and Approve administrative changes.",
      "Administer can create users and assign permissions (including Administer) for services/accounts they administer; cannot change company-level settings.",
      "Manage can create users and assign permissions up to (but not including) Manage for services/accounts they manage.",
      "Approve administrative changes reviews user-level admin actions initiated by others before they take effect.",
      "Administration & Settings appears in left navigation for users with admin permission and requires extra verification.",
      "Company-level settings (primary admin only) include mobile banking function allowlisting, statement delivery preferences, number of admin approvers, billing account, temporary PIN for sign-in, and password reset duration.",
      "User-level admin actions include create users, change status, unlock users, update profiles, change MFA method (bank must change primary admin MFA), generate PIN if enabled, assign approve permission, and de-link trusted devices.",
      "Administrative approvals are a standard security control; Truist enables/disables the feature for the company; default approvals required is 1 and primary admin can raise it.",
    ],
  },
  {
    id: "mobile",
    title: "Mobile app",
    keyPoints: [
      "Complete initial registration on desktop/web before using the mobile app.",
      "Download from the App Store or Google Play; install must be done while in the United States.",
      "After installation: Android app can be used in the United States and Canada; iOS access follows the published country availability list.",
      "Initial mobile setup includes biometrics and notifications opt-in.",
      "Mobile banking access mirrors web entitlements for functions available in the app, if the admin assigned mobile permissions.",
      "Mobile capabilities (with entitlements) include account/transaction visibility (up to 18 months history), payments/approvals, fraud/risk decisioning, remote deposit capture, and some user-access admin actions.",
      "Landing view shows entitled companies, deposit balances, alerts, notifications, and profile.",
      "Payments & Transfers consolidates create/manage One View payments and Digital Treasury approvals.",
      "Profile supports biometrics toggle, password update, FAQs, and logout.",
    ],
  },
  {
    id: "fraud-mobile",
    title: "Fraud and risk decisioning on mobile",
    keyPoints: [
      "From the mobile menu bar, Fraud/Risk lets entitled users review Positive Pay, Payee Positive Pay, Reverse Positive Pay, or Controlled Payment Reconciliation exceptions.",
      "Requires permission for banking functions in the mobile app and Digital Treasury entitlements for mobile + Fraud/Risk.",
      "Accounts needing action show exception counts; users can Pay or Return (with reason).",
      "Decisions generally require final approval unless Auto-Approve is enabled.",
    ],
  },
  {
    id: "rdc-mobile",
    title: "Remote Deposit Capture on mobile",
    keyPoints: [
      "Mobile RDC supports viewing deposit activity, creating/managing simple check deposits, searching ~90 days of history, and supervisor confirmation for transmission.",
      "Mobile RDC does not support reporting, user administration, or deposits with remittance/non-check items — use web RDC for those.",
      "Eligible items generally include U.S. dollar checks drawn on U.S. institutions; traveler’s and cashier’s checks may need extra action.",
      "Ineligible examples include savings bonds, money orders, coupons, foreign items, damaged/missing MICR, third-party checks, and remotely created checks.",
      "Creating a deposit: menu > Remote Deposit Capture > Begin deposit > location/account/declared amount > add check images > confirm per company procedures and role.",
    ],
  },
  {
    id: "troubleshooting",
    title: "Clearing browser or mobile cache",
    keyPoints: [
      "Clearing browser or mobile app cache can resolve some basic system and single sign-on access issues.",
      "Supported desktop guidance covers Chrome, Edge, Safari, and Firefox cache/history clearing steps.",
      "iOS troubleshooting: force close app, restart device, update app/OS, or delete and redownload the app.",
      "Android troubleshooting: restart/update device; Settings > Apps > One View > Storage > Clear cache; relaunch app.",
    ],
  },
  {
    id: "countries",
    title: "Countries available to access",
    keyPoints: [
      "Clients can access One View from many countries, but firewalls or network restrictions may still block access.",
      "Mobile app must be downloaded from the U.S. App Store or Google Play.",
      "After install, Android mobile access is United States and Canada; iOS follows the published country list.",
      "Country availability for browser and/or mobile can change for geopolitical or network reasons.",
      "Browser access is generally available in many countries; documented exceptions include no browser access for China mainland, India, Oman, and Russia (mobile iOS may still be listed as Yes for some of these).",
      "Documented iOS mobile No examples include Brazil, Korea (Republic of), Zambia, and Zimbabwe.",
      "For a specific country not listed or unclear, direct users to the Countries available QRG or Client Support — do not invent availability.",
    ],
  },
] as const;

export const ONE_VIEW_RESOURCES: ResourceLink[] = [
  {
    name: "One View marketing overview",
    note: "Product overview, MFA security, entitlements, mobile, and SSO application list.",
    url: ONE_VIEW.marketingUrl,
  },
  {
    name: "Treasury Resource Center — One View",
    note: "Help materials, release notes, tour guides, and related platform resources.",
    url: ONE_VIEW.resourceCenterUrl,
  },
  {
    name: "Administration permissions (PDF)",
    note: "Primary admin, Administer, Manage, and Approve administrative changes.",
    url: "https://treasuryresources.truist.com/content/dam/treasuryresources/us/en/documents/truist-one-view/tov-admin-permissions.pdf",
  },
  {
    name: "Clearing browser or mobile app cache QRG (PDF)",
    note: "Fix basic SSO/access issues by clearing cache on web or mobile.",
    url: "https://treasuryresources.truist.com/content/dam/treasuryresources/us/en/documents/platforms/qrg-tov-clearingbrowser-mobileapp-cache.pdf",
  },
  {
    name: "Countries available to access QRG (PDF)",
    note: "Browser and iOS mobile availability by country/region.",
    url: "https://treasuryresources.truist.com/content/dam/treasuryresources/us/en/documents/truist-one-view/tov-countries-available-to-access-qrg.pdf",
  },
  {
    name: "New user registration and first-time sign-in QRG (PDF)",
    note: "72-hour registration link, MFA setup, password, phone, first sign-in.",
    url: "https://treasuryresources.truist.com/content/dam/treasuryresources/us/en/documents/truist-one-view/tov-user-first-time-login-qrg.pdf",
  },
  {
    name: "Sign-in FAQs (PDF)",
    note: "Access, Welcome email, passwords, locked accounts, MFA help.",
    url: "https://treasuryresources.truist.com/content/dam/treasuryresources/us/en/documents/truist-one-view/truist-one-view-sign-in-faqs.pdf",
  },
  {
    name: "Getting started with the mobile app QRG (PDF)",
    note: "Desktop registration first, then App Store / Google Play setup.",
    url: "https://treasuryresources.truist.com/content/dam/treasuryresources/us/en/documents/truist-one-view/truist-one-view-mobile-getting-started-qrg.pdf",
  },
  {
    name: "Using the mobile app QRG (PDF)",
    note: "Accounts, payments, approvals, profile, and entitlements on mobile.",
    url: "https://treasuryresources.truist.com/content/dam/treasuryresources/us/en/documents/truist-one-view/truist-one-view-using-the-mobile-app-qrg.pdf",
  },
  {
    name: "Fraud and risk decisioning in the mobile app QRG (PDF)",
    note: "Positive Pay and related exception decisioning on mobile.",
    url: "https://treasuryresources.truist.com/content/dam/treasuryresources/us/en/documents/truist-one-view/truist-one-view-mobile-fraud-decisioning-qrg.pdf",
  },
  {
    name: "Using mobile app — Remote Deposit Capture QRG (PDF)",
    note: "Mobile RDC capabilities, eligible items, and deposit steps.",
    url: "https://treasuryresources.truist.com/content/dam/treasuryresources/us/en/documents/truist-one-view/qrg-tov-using-mobile-app-remote-deposit-capture.pdf",
  },
  {
    name: "App Store",
    note: "Download the iOS mobile app.",
    url: ONE_VIEW.appStoreUrl,
  },
  {
    name: "Google Play",
    note: "Download the Android mobile app.",
    url: ONE_VIEW.googlePlayUrl,
  },
];

export const DEMO_TOPIC = {
  title: "One View",
  summary:
    "An interactive conversational guide focused on the One View platform — access, sign-in, administration, mobile, and related Treasury Resource Center materials.",
  audience: ONE_VIEW.audience,
  guardrails: [
    "This assistant is a navigation and education guide for Treasury Resource Center topics, not account-specific advice.",
    "Stay grounded in the One View knowledge below.",
    "Keep replies short. Use easy, natural language. Avoid formal or dense wording.",
    "Default reply length: 1–3 short sentences, or up to 4 short bullets. Do not write long explanations.",
    "Do NOT include links, URLs, PDF names, or resource lists unless the user clearly asks for a link, guide, resource, PDF, download, or where to find something.",
    "Do not invent product features, fees, SLAs, country availability, or URLs. If unsure, say you are unsure in plain language.",
    "When discussing the product, you may use the official product name as it appears in resource titles.",
    "For account unlocks, MFA changes for primary admins, or company setup issues, tell the user to contact their administrator or Client Support — only share contact details if asked or clearly needed.",
    "Informational only; use of services is subject to applicable Treasury terms and conditions.",
    "Do not end with 'you might also ask' or similar. Follow-up choices are shown as buttons in the UI.",
  ],
};

export const TREASURY_SYSTEM_PROMPT = `You are the Treasury Resource Center Guide.

Primary demo focus: ${ONE_VIEW.productName} (also called ${ONE_VIEW.shortName}).

Reply style:
- Keep it short and limited
- Use easy, natural language — like a helpful teammate
- Usually 1–3 short sentences, or up to 4 short bullets
- No long intros, no essays, no filler
- Do not include links, URLs, PDF names, or resource lists unless the user asks for a link, guide, resource, PDF, or where to find something
- Do not suggest follow-up questions in text; the UI shows action buttons

Your job:
- Answer One View questions clearly using the knowledge below
- If the user asks for a guide/link/resource, share only the most relevant 1–3 items from the resource list
- If unsure, say so simply

Hard rules:
${DEMO_TOPIC.guardrails.map((g) => `- ${g}`).join("\n")}

Product summary:
${ONE_VIEW.summary}

Key highlights:
${ONE_VIEW.highlights.map((p) => `- ${p}`).join("\n")}

Applications commonly available with single sign-on:
${ONE_VIEW.ssoApplications.map((p) => `- ${p}`).join("\n")}

One View Connect note:
${ONE_VIEW.connectNote}

Support (share only when asked or clearly needed):
- Email: ${ONE_VIEW.support.email}
- Phone: ${ONE_VIEW.support.phone}
- Hours: ${ONE_VIEW.support.hours}
- In-product: ${ONE_VIEW.support.inProductHelp.join("; ")}

Detailed topics:
${ONE_VIEW_TOPICS.map(
  (topic) =>
    `${topic.title}\n${topic.keyPoints.map((p) => `- ${p}`).join("\n")}`,
).join("\n\n")}

Official resources (ONLY if the user asks for links/guides/resources):
${ONE_VIEW_RESOURCES.map((r) => `- ${r.name}: ${r.note}\n  ${r.url}`).join("\n")}
`;
