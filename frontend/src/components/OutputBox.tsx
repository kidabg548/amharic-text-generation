import React from "react";

interface OutputBoxProps {
  output: string;
}

const OutputBox: React.FC<OutputBoxProps> = ({ output }) => (
  <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
    <h2 className="font-semibold text-indigo-600 mb-2">Generated Text:</h2>
    <div className="whitespace-pre-line text-gray-800 font-amharic">
      {output}
    </div>
  </div>
);

export default OutputBox; 