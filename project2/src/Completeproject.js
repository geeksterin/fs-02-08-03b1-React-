import React, { useState } from "react";
import axios from "axios";

const OPENAI_API_KEY = "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";

function Completeproject() {
  const [prompt, setPrompt] = useState("A cute baby horse");
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function generateImages() {
    setIsLoading(true);

    try {
      const options = {
        method: "GET",
        url: "https://text-to-image7.p.rapidapi.com/",
        params: {
          prompt: `${prompt}`,
          batch_size: "1",
          negative_prompt:
            "ugly, duplicate, morbid, mutilated, [out of frame], extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, bad anatomy, bad proportions",
        },
        headers: {
          "X-RapidAPI-Key":
            "20fc0f168emsh28e6b66271f5a1ap1d2ecdjsn626658d15f7c",
          "X-RapidAPI-Host": "text-to-image7.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);

      setGeneratedImages(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error generating images:", error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <label htmlFor="prompt">Enter a Prompt: </label>
        <input
          type="text"
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="border rounded px-2 py-1"
        />
      </div>
      <button
        onClick={generateImages}
        disabled={isLoading}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {isLoading ? "Generating..." : "Generate Images"}
      </button>
      {generatedImages.length > 0 && (
        <div className="mt-4">
          {generatedImages.map((image, index) => (
            <div key={index} className="mt-4">
              <img
                src={image}
                alt={`Generated Image ${index}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Completeproject;
