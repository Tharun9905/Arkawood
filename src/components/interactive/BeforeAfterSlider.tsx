"use client";

import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before / Raw Site",
  afterLabel = "After / Arka Finish",
  className = "h-[400px]",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMouseMove(e);
    const onMouseUp = () => handleMouseUp();
    const onTouchMove = (e: TouchEvent) => handleTouchMove(e);
    const onTouchEnd = () => handleMouseUp();

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchend", onTouchEnd);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const handleStart = (clientX: number) => {
    isDragging.current = true;
    handleMove(clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={(e) => handleStart(e.clientX)}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      className={`relative select-none overflow-hidden rounded-xl border border-stone-800 cursor-ew-resize ${className}`}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After finished space"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute top-4 right-4 bg-[#C89B5E] text-[#1E120D] text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md z-10">
        {afterLabel}
      </div>

      {/* Before Image (Overlay clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before raw site"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
        />
        <div className="absolute top-4 left-4 bg-stone-950/80 text-stone-300 text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow-md z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Drag Bar Slider Divider */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-[#C89B5E] cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1E120D] border-2 border-[#C89B5E] flex items-center justify-center shadow-lg">
          {/* Custom golden drag icons */}
          <div className="flex space-x-1">
            <span className="w-1 h-3 bg-[#C89B5E] rounded-full"></span>
            <span className="w-1 h-3 bg-[#C89B5E] rounded-full"></span>
          </div>
        </div>
      </div>

      {/* Touch drag instruction overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-stone-900/70 backdrop-blur-sm text-stone-300 text-[9px] px-3 py-1.5 rounded-full pointer-events-none tracking-wider uppercase font-semibold">
        Drag slider to compare transformation
      </div>
    </div>
  );
}
