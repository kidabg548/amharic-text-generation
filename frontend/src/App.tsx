import { useState } from "react";
import PromptInput from "./components/PromptInput";
import OutputBox from "./components/OutputBox";
import Loader from "./components/Loader";

function App() {
  const [prompt, setPrompt] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleGenerate = async () => {
    setLoading(true);
    setError("");
    setOutput("");
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to generate text');
      }

      const data = await response.json();
      setOutput(data.generated_text);
    } catch (err: any) {
      console.error('Generation error:', err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Amharic Text Generator
        </h1>
        <PromptInput
          prompt={prompt}
          setPrompt={setPrompt}
          onGenerate={handleGenerate}
          disabled={loading}
        />
        {loading && <Loader />}
        {error && (
          <div className="text-red-500 text-center mt-4 p-3 bg-red-50 rounded-lg">
            {error}
          </div>
        )}
        {output && <OutputBox output={output} />}
      </div>
      <footer className="mt-8 text-gray-400 text-sm">
        Powered by GPT | Amharic Text Generation
      </footer>
    </div>
  );
}

export default App;
