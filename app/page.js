'use client'
import { useState } from "react";

export default function Home() {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");

    async function shortURL(e) {
    e.preventDefault();
    const response = await fetch(
    `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
    );
    if (response.ok) {
    const data = await response.text();
    setShortenedUrl(data);
    } else {
    alert("Error shortening URL");
    }
    }
    return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-8">
    <div className="card">
    <h1 className="text-4xl font-bold text-white">Toprak | TPasha</h1>
    <h2 className="text-2xl text-gray-400">URL Shortener</h2>
    <form onSubmit={shortURL} className="space-y-4">
    <input
    type="text"
    placeholder="Enter URL"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    className="w-full p-3 border border-gray-600 bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
    type="submit"
    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
    >
    Shorten URL
    </button>
    </form>
    {shortenedUrl && (
    <div className="shortened-url mt-4">
    <p className="text-gray-400">Shortened URL:</p>
    <a
    href={shortenedUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:text-blue-700"
    >
    {shortenedUrl}
    </a>
    </div>
    )}
    <div className="qrcode-link mt-8">
    <h1 className="text-xl">
    <a
    href="https://qrcode.nivesoft.com"
    className="text-blue-500 hover:text-blue-700"
    >
    Generate QR Code?
    </a>
    </h1>
    </div>
    </div>
    </main>
    );
}
