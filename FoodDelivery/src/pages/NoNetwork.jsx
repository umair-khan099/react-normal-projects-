import React from "react";

const NoNetwork = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black flex items-center justify-center px-4 overflow-hidden relative">
      {/* ===== Background Animated Blobs ===== */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />

      {/* ===== Floating Particles ===== */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5 animate-float"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 6 + 4}s`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* ===== Main Card ===== */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-10 max-w-md w-full text-center transition-all duration-500 hover:shadow-red-500/10 hover:border-white/20 group">
        {/* Glow on hover */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/0 via-red-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* ===== Icon with Pulse Rings ===== */}
        <div className="flex justify-center mb-8 relative">
          <div className="absolute w-28 h-28 rounded-full border border-red-500/20 animate-ping" />
          <div className="absolute w-24 h-24 rounded-full border border-red-500/10 animate-ping delay-300" />
          <div className="absolute w-20 h-20 rounded-full border border-red-400/10 animate-ping delay-700" />

          <div className="relative bg-gradient-to-br from-red-500/20 to-red-600/10 p-6 rounded-full border border-red-500/20 shadow-lg shadow-red-500/10 z-10">
            <svg
              className="w-12 h-12 text-red-400 animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M4.93 12.93a10 10 0 0114.14 0M1.394 9.393a15 15 0 0121.213 0"
              />
              <line
                x1="3"
                y1="3"
                x2="21"
                y2="21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-red-500"
              />
            </svg>
          </div>
        </div>

        {/* ===== Status Badge ===== */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            No Connection Detected
          </span>
        </div>

        {/* ===== Title ===== */}
        <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
          You're{" "}
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Offline
          </span>
        </h1>

        {/* ===== Subtitle ===== */}
        <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-xs mx-auto">
          It seems like your device isn't connected to the internet. Check your
          connection and try again.
        </p>

        {/* ===== Quick Fix Tips ===== */}
        <div className="bg-white/5 border border-white/5 rounded-2xl p-5 mb-8 text-left space-y-3">
          <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Quick Fixes
          </p>
          {[
            { icon: "📶", text: "Check your Wi-Fi or mobile data" },
            { icon: "✈️", text: "Turn off Airplane mode" },
            { icon: "🔄", text: "Restart your router or device" },
            { icon: "📡", text: "Move closer to your router" },
          ].map((tip, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-gray-400 text-sm hover:text-gray-200 transition-colors duration-300 group/tip"
            >
              <span className="text-base group-hover/tip:scale-110 transition-transform duration-300">
                {tip.icon}
              </span>
              <span>{tip.text}</span>
            </div>
          ))}
        </div>

        {/* ===== Retry Button ===== */}
        <button
          onClick={() => window.location.reload()}
          className="w-full relative overflow-hidden py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 transition-all duration-500"
        >
          {/* Shine sweep */}
          <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          <span className="flex items-center justify-center gap-2 relative z-10">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </span>
        </button>

        <p className="text-gray-600 text-xs mt-6">
          This page will auto-refresh when connection is restored
        </p>
      </div>

      {/* ===== Animations ===== */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          25%       { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
          50%       { transform: translateY(-40px) translateX(-10px); opacity: 0.3; }
          75%       { transform: translateY(-20px) translateX(15px); opacity: 0.5; }
        }
        .animate-float { animation: float ease-in-out infinite; }

        @keyframes shine {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine { animation: shine 2.5s ease-in-out infinite; }

        .delay-300  { animation-delay: 300ms; }
        .delay-500  { animation-delay: 500ms; }
        .delay-700  { animation-delay: 700ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
};

export default NoNetwork;
