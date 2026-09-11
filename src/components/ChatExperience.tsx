"use client";

import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  FOLLOW_UP_ACTIONS,
  QUICK_ACTIONS,
  type QuickAction,
} from "@/lib/actions";

type Role = "user" | "assistant";

type Message = {
  id: string;
  role: Role;
  content: string;
};

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function ChatExperience() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeActionId, setActiveActionId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const streamingRef = useRef(false);
  const messagesRef = useRef<Message[]>([]);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isStreaming]);

  async function sendMessage(text: string, actionId?: string) {
    const trimmed = text.trim();
    if (!trimmed || streamingRef.current) return;

    streamingRef.current = true;
    setIsStreaming(true);
    setError(null);
    setActiveActionId(actionId ?? null);

    const userMessage: Message = {
      id: uid(),
      role: "user",
      content: trimmed,
    };
    const assistantId = uid();
    const nextMessages = [...messagesRef.current, userMessage];

    setMessages([
      ...nextMessages,
      { id: assistantId, role: "assistant", content: "" },
    ]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${response.status})`);
      }

      if (!response.body) {
        throw new Error("No response stream returned.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split("\n\n");
        buffer = chunks.pop() || "";

        for (const chunk of chunks) {
          const line = chunk.split("\n").find((l) => l.startsWith("data: "));
          if (!line) continue;
          const payload = line.slice(6);
          if (payload === "[DONE]") continue;

          const parsed = JSON.parse(payload) as {
            text?: string;
            error?: string;
          };
          if (parsed.error) throw new Error(parsed.error);
          if (parsed.text) {
            assistantText += parsed.text;
            setMessages((prev) =>
              prev.map((m) =>
                m.id === assistantId ? { ...m, content: assistantText } : m,
              ),
            );
          }
        }
      }

      if (!assistantText.trim()) {
        throw new Error("The guide returned an empty reply.");
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setMessages((prev) =>
        prev.filter((m) => m.id !== assistantId || m.content.trim().length > 0),
      );
    } finally {
      streamingRef.current = false;
      setIsStreaming(false);
      setActiveActionId(null);
      inputRef.current?.focus();
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    void sendMessage(input);
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  function runAction(action: QuickAction) {
    if (action.disabled || streamingRef.current) return;
    void sendMessage(action.prompt, action.id);
  }

  const showWelcome = messages.length === 0;

  return (
    <div className={`shell${showWelcome ? " is-welcome" : ""}`}>
      <main className="stage">
        {!showWelcome && (
          <header className="stage-header">
            <div>
              <p className="eyebrow">Treasury Resource Center</p>
              <h2>Treasury services</h2>
            </div>
            <button
              type="button"
              className="ghost-btn"
              onClick={() => {
                setMessages([]);
                setError(null);
                setInput("");
              }}
              disabled={isStreaming}
            >
              Start over
            </button>
          </header>
        )}

        <section className="transcript" aria-live="polite">
          {showWelcome ? (
            <div className="welcome">
              <div className="welcome-hero">
                <img
                  src="/treasury-guide-hero.jpg"
                  alt="Treasury team collaborating around a tablet in a modern office"
                />
              </div>
              <div className="welcome-copy">
                <p className="eyebrow">Treasury Resource Center</p>
                <h2>
                  An interactive conversational guide for your Treasury services
                </h2>
                <p>
                  This demo focuses on <strong>Truist One View</strong>. Choose
                  that quick action below, or type your own question. Other
                  topics are shown for demo context only.
                </p>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <article
                key={message.id}
                className={`bubble ${message.role}`}
                data-role={message.role}
              >
                <p className="role-label">
                  {message.role === "user" ? "You" : "Guide"}
                </p>
                <div className="bubble-body">
                  {message.content || (isStreaming ? "…" : "")}
                </div>
              </article>
            ))
          )}
          <div ref={bottomRef} />
        </section>

        {error && <p className="error">{error}</p>}

        {!showWelcome && (
          <div className="follow-up-panel">
            <p className="eyebrow">Next steps</p>
            <div className="follow-up-row" role="group" aria-label="Next steps">
              {FOLLOW_UP_ACTIONS.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  className={`follow-up-btn${activeActionId === action.id ? " is-active" : ""}`}
                  onClick={() => runAction(action)}
                  disabled={isStreaming}
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="action-dock">
          {showWelcome && (
            <>
              <div className="action-heading">
                <p className="eyebrow">Quick actions</p>
              </div>
              <p className="demo-note">
                Demo only — Truist One View is available. Other topics are shown
                for context and are not clickable in this demo.
              </p>
              <div className="action-grid" role="group" aria-label="Quick actions">
                {QUICK_ACTIONS.map((action) => {
                  const isDisabled = Boolean(action.disabled) || isStreaming;
                  return (
                    <button
                      key={action.id}
                      type="button"
                      className={`action-card${activeActionId === action.id ? " is-active" : ""}${action.disabled ? " is-demo-disabled" : ""}`}
                      onClick={() => runAction(action)}
                      disabled={isDisabled}
                      aria-disabled={isDisabled}
                      title={
                        action.disabled
                          ? "Demo only — not available in this preview"
                          : undefined
                      }
                    >
                      <strong>{action.label}</strong>
                      <span>{action.description}</span>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          <form className="composer" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor="message">
              Ask a question
            </label>
            <input
              id="message"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask about One View sign-in, mobile, admin…"
              disabled={isStreaming}
              autoComplete="off"
            />
            <button type="submit" disabled={isStreaming || !input.trim()}>
              {isStreaming ? "…" : "Send"}
            </button>
          </form>

          <p className="attribution">
            Results generated by Claude. © {new Date().getFullYear()} Treasury
            Resource Center demo.
          </p>
        </div>
      </main>
    </div>
  );
}
