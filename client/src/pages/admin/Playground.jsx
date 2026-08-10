import {
  SlidersHorizontal,
  Send,
  BarChart3,
  Settings2,
} from "lucide-react";

export default function Playground() {
  return (
    <div className="h-[calc(100vh-68px)] -m-6 bg-[#061321] text-slate-200 flex overflow-hidden">

      {/* Configuration */}
      <aside className="w-[345px] shrink-0 border-r border-[#33465C] bg-[#071625] overflow-y-auto">

        <div className="h-14 px-4 border-b border-[#33465C] flex items-center justify-between">
          <span className="text-sm font-mono font-semibold tracking-widest">
            CONFIGURATION
          </span>

          <SlidersHorizontal size={15} />
        </div>

        <div className="p-4">

          <label className="text-xs font-mono tracking-widest">
            System Prompt
          </label>

          <textarea
            placeholder="You are a helpful AI assistant..."
            className="w-full h-[138px] mt-2 rounded-md border border-[#40516A] bg-[#061321] p-3 text-sm text-slate-200 placeholder:text-slate-500 resize-none outline-none focus:border-indigo-500"
          />

          <div className="border-t border-[#263447] my-7" />

          {/* Model A */}
          <div>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-indigo-300" />
              <span className="text-sm font-mono font-semibold">
                Model A
              </span>
            </div>

            <select className="w-full h-10 rounded-md border border-[#40516A] bg-[#061321] px-3 text-sm outline-none">
              <option>GPT-4o</option>
              <option>GPT-4 Turbo</option>
              <option>GPT-3.5 Turbo</option>
            </select>

            <div className="mt-4">
              <div className="flex justify-between text-xs font-mono">
                <span>Temperature</span>
                <span>0.7</span>
              </div>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                defaultValue="0.7"
                className="w-full mt-2 accent-indigo-300"
              />
            </div>

            <div className="mt-5">
              <div className="flex justify-between text-xs font-mono">
                <span>Top P</span>
                <span>1.0</span>
              </div>

              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                defaultValue="1"
                className="w-full mt-2 accent-indigo-300"
              />
            </div>

          </div>

          <div className="border-t border-[#263447] my-7" />

          {/* Model B */}
          <div>

            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full bg-slate-300" />
              <span className="text-sm font-mono font-semibold">
                Model B
              </span>
            </div>

            <select className="w-full h-10 rounded-md border border-[#40516A] bg-[#061321] px-3 text-sm outline-none">
              <option>Claude 3.5 Sonnet</option>
              <option>Claude 3 Opus</option>
              <option>Claude 3 Haiku</option>
            </select>

            <div className="mt-4">
              <div className="flex justify-between text-xs font-mono">
                <span>Temperature</span>
                <span>0.7</span>
              </div>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                defaultValue="0.7"
                className="w-full mt-2 accent-slate-300"
              />
            </div>

          </div>

        </div>
      </aside>

      {/* Conversation */}
      <main className="flex-1 min-w-0 flex flex-col bg-[#061321]">

        {/* Model Header */}
        <div className="h-10 shrink-0 border-b border-[#33465C] flex items-center px-4">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-300 mr-2" />

          <span className="text-sm font-mono">
            GPT-4o
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5">

          {/* User Message */}
          <div className="flex justify-end">
            <div className="max-w-[70%] rounded-lg border border-[#40516A] bg-[#26374A] px-4 py-3 text-base leading-6">
              Write a brief python script to calculate the fibonacci sequence.
            </div>
          </div>

          {/* Assistant */}
          <div className="mt-6 max-w-[90%] rounded-lg border border-[#40516A] bg-[#071625]">

            <div className="px-4 py-3 border-b border-[#33465C] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-300" />

              <span className="text-sm font-mono">
                GPT-4o
              </span>
            </div>

            <div className="p-4">

              <p className="text-base leading-6">
                Here is a simple Python function to generate
                the Fibonacci sequence up to n terms:
              </p>

              <pre className="mt-4 rounded-md border border-[#40516A] bg-[#061321] p-4 overflow-x-auto text-xs font-mono leading-5 text-slate-300">
{`def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]

    sequence = [0, 1]

    while len(sequence) < n:
        next_val = sequence[-1] + sequence[-2]
        sequence.append(next_val)

    return sequence

print(fibonacci(10))`}
              </pre>

            </div>
          </div>

        </div>

        {/* Prompt Input */}
        <div className="shrink-0 border-t border-[#33465C] p-4">

          <div className="relative">

            <textarea
              placeholder="Enter your prompt to test both models..."
              className="w-full h-[104px] rounded-lg border border-[#40516A] bg-[#071625] p-4 pr-14 text-sm text-slate-200 placeholder:text-slate-500 resize-none outline-none focus:border-indigo-500"
            />

            <button className="absolute bottom-2 right-2 w-9 h-9 rounded-md bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center">
              <Send size={16} />
            </button>

          </div>

        </div>
      </main>

      {/* Telemetry */}
      <aside className="w-[335px] shrink-0 border-l border-[#33465C] bg-[#071625] overflow-y-auto">

        <div className="h-14 px-4 border-b border-[#33465C] flex items-center justify-between">
          <span className="text-sm font-mono font-semibold tracking-widest">
            TELEMETRY
          </span>

          <BarChart3 size={15} />
        </div>

        <div className="p-4">

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">

            <Metric
              model="GPT-4o"
              value="1.2s"
              label="Latency"
            />

            <Metric
              model="GPT-4o"
              value="142"
              label="Tokens"
            />

            <Metric
              model="Claude 3.5"
              value="0.8s"
              label="Latency"
            />

            <Metric
              model="Claude 3.5"
              value="98"
              label="Tokens"
            />

          </div>

          <div className="border-t border-[#263447] my-7" />

          {/* Raw Response */}
          <div className="flex items-center gap-2 mb-4">
            <Settings2 size={15} />

            <span className="text-sm font-mono font-semibold">
              Raw Response
            </span>
          </div>

          <pre className="rounded-md border border-[#40516A] bg-[#061321] p-4 text-[11px] leading-4 text-slate-300 whitespace-pre-wrap">
{`{
  "id": "chatcmpl-9X...",
  "object": "chat.completion",
  "created": 1717693245,
  "model": "gpt-4o-2024-05-13",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Here is a simple..."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 18,
    "completion_tokens": 124,
    "total_tokens": 142
  }
}`}
          </pre>

        </div>
      </aside>

    </div>
  );
}

function Metric({ model, value, label }) {
  return (
    <div className="h-[98px] rounded-md border border-[#40516A] bg-[#061321] p-3">

      <p className="text-xs font-mono text-indigo-200">
        {model}
      </p>

      <p className="text-2xl font-semibold mt-1">
        {value}
      </p>

      <p className="text-xs font-mono mt-2 text-slate-300">
        {label}
      </p>

    </div>
  );
}