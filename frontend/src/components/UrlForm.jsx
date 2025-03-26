import React, { useState } from "react";
import axios from "axios";

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const shortenUrl = async () => {
    if (!originalUrl) {
      alert("Please enter a URL");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/url/shorten", {
        originalUrl: originalUrl,
      });

      // Handle successful response
      setShortenedUrl(response.data.shortUrl); // Assuming shortUrl is returned from backend
    } catch (error) {
      console.error("Error shortening URL:", error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">URL Shortener</h2>
      <input
        type="text"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        placeholder="Enter URL to shorten"
        className="p-2 border rounded w-full mb-4"
      />
      <button
        onClick={shortenUrl}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Shorten URL
      </button>

      {shortenedUrl && (
        <div className="mt-4">
          <p className="text-lg">Shortened URL:</p>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default UrlShortener;
