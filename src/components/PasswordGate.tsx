"use client";

import { FormEvent, useEffect, useState } from "react";
import { ChatExperience } from "@/components/ChatExperience";

const STORAGE_KEY = "trc-demo-unlocked";

export function PasswordGate() {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      setUnlocked(sessionStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setUnlocked(false);
    }
    setReady(true);
  }, []);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!password.trim() || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Incorrect password.");
      }

      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore storage failures; still unlock this visit
      }
      setUnlocked(true);
      setPassword("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to unlock.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!ready) {
    return <div className="gate-shell" aria-hidden="true" />;
  }

  if (unlocked) {
    return <ChatExperience />;
  }

  return (
    <div className="gate-shell">
      <form className="gate-card" onSubmit={onSubmit}>
        <p className="eyebrow">Treasury Resource Center</p>
        <h1>Enter password to continue</h1>
        <p className="gate-copy">
          This interactive guide is password protected for demo access.
        </p>

        <label className="sr-only" htmlFor="demo-password">
          Password
        </label>
        <input
          id="demo-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="current-password"
          autoFocus
          disabled={submitting}
        />

        {error && <p className="gate-error">{error}</p>}

        <button type="submit" disabled={submitting || !password.trim()}>
          {submitting ? "Checking…" : "Continue"}
        </button>
      </form>
    </div>
  );
}
