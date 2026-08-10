import { Bot, Send, Trash2, User } from "lucide-react";
import { useState } from "react";

export default function Playground({ agent }) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: `Hello! I'm ${agent?.name || "your AI agent"}. How can I help you today?`,
    },
    {
      id: 2,
      role: "user",
      text: "I need help understanding my account.",
    },
    {
      id: 3,
      role: "assistant",
      text: "Of course. I'd be happy to help you with your account.",
    },
  ]);

  const handleSend = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    const newMessage = {
      id: Date.now(),
      role: "user",
      text: trimmedMessage,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    // UI-only response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "Thanks for your message. This is a UI-only playground for now.",
        },
      ]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <section className="h-full bg-[#071321] flex flex-col">

      {/* Header */}
      <div className="h-[60px] px-5 border-b border-[#263447] flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center">
            <Bot size={17} className="text-indigo-400" />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">
              Playground
            </h2>

            <p className="text-xs text-slate-500">
              {agent?.name || "AI Agent"}
            </p>
          </div>

        </div>

        <button
          onClick={clearChat}
          className="text-slate-500 hover:text-white transition"
          title="Clear chat"
        >
          <Trash2 size={17} />
        </button>

      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-5">

        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">

              <div className="w-12 h-12 rounded-xl bg-[#132237] mx-auto flex items-center justify-center">
                <Bot size={24} className="text-slate-500" />
              </div>

              <p className="text-slate-400 mt-4 text-sm">
                Start a conversation with your agent.
              </p>

            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center shrink-0">
                <Bot size={16} className="text-indigo-400" />
              </div>
            )}

            <div
              className={`max-w-[75%] rounded-xl px-4 py-3 text-sm leading-6 ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-[#111E30] border border-[#263447] text-slate-300"
              }`}
            >
              {msg.text}
            </div>

            {msg.role === "user" && (
              <div className="w-8 h-8 rounded-lg bg-[#1A283B] flex items-center justify-center shrink-0">
                <User size={16} className="text-slate-400" />
              </div>
            )}

          </div>
        ))}

      </div>

      {/* Input */}
      <div className="p-4 border-t border-[#263447]">

        <div className="flex items-end gap-2 rounded-xl bg-[#0B1828] border border-[#334155] p-2 focus-within:border-indigo-500 transition">

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Ask the agent..."
            className="flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white placeholder:text-slate-500 outline-none"
          />

          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            <Send size={16} />
          </button>

        </div>

        <p className="text-[11px] text-slate-600 text-center mt-2">
          Press Enter to send
        </p>

      </div>

    </section>
  );
}