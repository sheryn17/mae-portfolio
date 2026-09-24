import { useState, useRef, useEffect } from "react";
import Groq from "groq-sdk";
import { profile, about, techStack, projects } from "../data/info";
import mae from "../assets/mae.png";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;
const groq = apiKey ? new Groq({ apiKey, dangerouslyAllowBrowser: true }) : null;

const systemPrompt = `You are a friendly assistant answering questions about ${profile.name} for visitors to her portfolio site.
About her: ${about}
Tech stack: ${JSON.stringify(techStack)}
Projects: ${JSON.stringify(projects.map((p) => ({ title: p.title, description: p.description })))}
Keep answers short, friendly, and in first person as if you were speaking on her behalf ("she" is also fine). If you don't know something, say so instead of making it up.`;

const welcomeMessage = {
  role: "bot",
  text: `Hi! Ask me anything about ${profile.shortName}'s projects, skills, or background.`,
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    if (!groq) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Chat isn't set up yet — add a VITE_GROQ_API_KEY to your .env file to enable it (see README).",
        },
      ]);
      return;
    }

    setLoading(true);
    try {
      const result = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.map((m) => ({ role: m.role === "bot" ? "assistant" : "user", content: m.text })),
          { role: "user", content: userMessage.text },
        ],
      });
      const reply = result.choices[0]?.message?.content ?? "Sorry, I didn't catch that.";
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "bot", text: "Something went wrong reaching the chat API." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {open && (
        <div className="mb-3 w-80 h-96 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
            <div className="relative shrink-0">
              <img src={mae} alt={profile.name} className="w-9 h-9 rounded-full object-cover" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white dark:border-black" />
            </div>
            <div>
              <p className="text-sm font-medium leading-tight">{profile.name}</p>
              <p className="text-[11px] text-green-600 dark:text-green-500 font-mono leading-tight">Online</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 rounded-lg ${
                  m.role === "user"
                    ? "self-end bg-amber-500 text-black"
                    : "self-start bg-black/5 dark:bg-white/10"
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && <div className="self-start text-xs text-black/40 dark:text-white/40">typing…</div>}
            <div ref={bottomRef} />
          </div>
          <div className="p-2 border-t border-black/10 dark:border-white/10 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message…"
              className="flex-1 text-sm px-2 py-1.5 rounded border border-black/10 dark:border-white/10 bg-transparent outline-none"
            />
            <button
              onClick={sendMessage}
              className="text-sm px-3 py-1.5 rounded bg-amber-500 text-black font-medium"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle chat"
        className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-lg hover:bg-amber-400 transition-colors text-xl"
      >
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}
