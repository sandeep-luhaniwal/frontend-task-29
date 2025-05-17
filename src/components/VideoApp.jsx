"use client";
import React from 'react';
import { useState } from 'react';

const VideoApp = () => {
  const [filename, setFilename] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleStream = (e) => {
    e.preventDefault();
    if (!filename) return;
    setVideoUrl(`https://backend-task-29.onrender.com/video/${filename}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Video Streaming App</h1>

      <form onSubmit={handleStream} className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="Enter video filename (e.g. sample.mp4)"
          className="px-4 py-2 border border-gray-300 rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Stream Video
        </button>
      </form>

      {videoUrl && (
        <div className="w-full max-w-2xl">
          <video controls className="w-full rounded-md shadow-md h-[500px]">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default VideoApp;
