"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Volume2, Music } from "lucide-react";
import Image from "next/image";

export const NowPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Local audio file for "Vincent" by Don McLean
  const audioUrl = "/vincent.mp3"; 

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((e) => console.error("Playback failed", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border bg-white/50 dark:bg-black/50 backdrop-blur-xl overflow-hidden shadow-xl transition-all hover:shadow-2xl relative group border-white/10">
      <div className="relative z-10 flex flex-col sm:flex-row items-center p-4 gap-6">
        {/* Album Art - Smaller and rounded */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-white/10">
          <Image
            src="/starry-night.png"
            alt="Vincent - Don McLean"
            fill
            className={`object-cover transition-transform duration-[5000ms] ${isPlaying ? 'scale-110' : 'scale-100'}`}
          />
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <div className="flex gap-1 items-end h-6">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [6, 18, 6] }}
                    transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                    className="w-1 bg-white rounded-full shadow-sm"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info & Controls Area */}
        <div className="flex flex-col flex-1 w-full min-w-0 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold tracking-tight font-serif">Vincent</h3>
              <p className="text-muted-foreground font-medium text-[10px] uppercase tracking-widest">Don McLean</p>
            </div>

            {/* Controls - Minimal and centered/right */}
            <div className="flex items-center gap-6">
              <button className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 active:scale-90">
                <SkipBack size={20} fill="currentColor" />
              </button>
              <button 
                onClick={togglePlay}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-foreground text-background hover:scale-105 active:scale-95 transition-all shadow-md"
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 active:scale-90">
                <SkipForward size={20} fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Progress Bar - Very minimal */}
          <div className="w-full space-y-1.5">
            <div className="h-1 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden cursor-pointer group/progress">
              <motion.div 
                className="h-full bg-foreground relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", bounce: 0, duration: 0.2 }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-foreground rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 transition-opacity" />
              </motion.div>
            </div>
            <div className="flex justify-between text-[8px] text-muted-foreground tabular-nums font-bold tracking-tighter">
              <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
              <span>{audioRef.current ? formatTime(audioRef.current.duration) : "0:00"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

const formatTime = (time: number) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
