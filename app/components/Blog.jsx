"use client";
import { useEffect, useState } from "react";

export default function Blog() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchMedium() {
      try {
        const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nikhsharma23`;
        const response = await fetch(rssUrl);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          const latest = data.items[0];
          setPost(latest);
        }
      } catch (error) {
        console.error("Medium fetch error", error);
      }
    }
    fetchMedium();
  }, []);

  return (
    <section id="blog" className="px-6 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10">Blog</h2>

      <p className="text-gray-300 max-w-2xl mb-8">
        Here's a preview of my latest Medium article:
      </p>

      {/* PREVIEW CARD */}
      {post ? (
        <a
          href={post.link}
          target="_blank"
          className="block max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-white/20 hover:scale-[1.01] transition"
        >
          <img
            src={post.thumbnail}
            alt="Medium Thumbnail"
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-semibold text-black mb-2">
              {post.title}
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
              {post.description.replace(/<[^>]+>/g, "")}
            </p>

            <button className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700">
              Read on Medium →
            </button>
          </div>
        </a>
      ) : (
        <p className="text-gray-500">Loading latest Medium post…</p>
      )}

      <div className="mt-10 text-center">
        <a
          href="https://medium.com/@nikhsharma23"
          target="_blank"
          className="inline-block bg-purple-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-600 transition"
        >
          View all posts on Medium →
        </a>
      </div>
    </section>
  );
}
