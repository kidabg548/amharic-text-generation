import React from "react";

interface PromptInputProps {
  prompt: string;
  setPrompt: (value: string) => void;
  onGenerate: () => void;
  disabled: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({
  prompt,
  setPrompt,
  onGenerate,
  disabled,
}) => (
  <div className="space-y-4">
    <textarea
      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition min-h-[120px] font-amharic"
      placeholder="የአማርኛ ፅሑፍ ያስገቡ..."
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      disabled={disabled}
    />
    <button
      className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onGenerate}
      disabled={disabled || !prompt.trim()}
    >
      Generate Text
    </button>
  </div>
);

export default PromptInput; 