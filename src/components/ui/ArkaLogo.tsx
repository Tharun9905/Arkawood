import React from "react";

interface ArkaLogoProps {
  variant?: "transparent" | "white" | "gold" | "favicon" | "footer";
  className?: string;
}

export default function ArkaLogo({ variant = "transparent", className = "h-10" }: ArkaLogoProps) {
  // Brand Colors
  // Gold: #C89B5E
  // Dark Wood: #1E120D
  
  const iconColor = variant === "white" ? "#FFFFFF" : variant === "gold" ? "#C89B5E" : "#C89B5E";
  const textColor = variant === "white" ? "#FFFFFF" : variant === "gold" ? "#C89B5E" : "#1E120D";
  const subtextColor = variant === "white" ? "rgba(255, 255, 255, 0.7)" : variant === "gold" ? "#C89B5E" : "#7A6D65";

  if (variant === "favicon") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="46" stroke={iconColor} strokeWidth="3" fill="#1E120D" />
        {/* Geometric 'A' blended with wood layers */}
        <path
          d="M50 18L78 74H64L50 46L36 74H22L50 18Z"
          fill={iconColor}
        />
        <path
          d="M39 60H61L50 38L39 60Z"
          fill="#1E120D"
        />
        <rect x="44" y="52" width="12" height="3" fill={iconColor} />
      </svg>
    );
  }

  if (variant === "footer") {
    return (
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-3">
          <svg
            viewBox="0 0 100 100"
            className="w-10 h-10 flex-shrink-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="46" stroke={iconColor} strokeWidth="2" />
            <path d="M50 20L75 72H62L50 48L38 72H25L50 20Z" fill={iconColor} />
            <rect x="42" y="55" width="16" height="3" fill={iconColor} />
          </svg>
          <div>
            <span
              style={{ color: textColor }}
              className="text-xl font-bold tracking-widest font-serif block leading-none"
            >
              ARKA
            </span>
            <span
              style={{ color: subtextColor }}
              className="text-[9px] tracking-[0.25em] font-sans uppercase font-medium mt-1 block"
            >
              WOODTECH INTERIORS
            </span>
          </div>
        </div>
        <p className="text-[10px] tracking-wider text-stone-400 italic mt-2">
          CUSTOM BY CHOICE • TRUST BY DESIGN • BUILT FOR YOU
        </p>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 cursor-pointer ${className}`}>
      {/* Abstract premium woodtech geometric A icon */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto aspect-square flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon/Diamond luxury border */}
        <polygon
          points="50,5 90,28 90,72 50,95 10,72 10,28"
          stroke={iconColor}
          strokeWidth="3"
          fill="none"
        />
        {/* Core 'A' element */}
        <path
          d="M50 18 L73 68 H60 L50 44 L40 68 H27 L50 18 Z"
          fill={iconColor}
        />
        {/* Wood grain horizon line */}
        <path
          d="M30 54 H70 L65 58 H35 Z"
          fill={variant === "white" ? "rgba(255,255,255,0.3)" : "rgba(30,18,13,0.3)"}
        />
        {/* Bottom anchor block */}
        <rect x="45" y="62" width="10" height="3" fill={iconColor} />
      </svg>
      <div className="flex flex-col justify-center">
        <span
          style={{ color: textColor }}
          className="text-xl md:text-2xl font-bold tracking-widest font-serif leading-none"
        >
          ARKA
        </span>
        <span
          style={{ color: subtextColor }}
          className="text-[9px] md:text-[10px] tracking-[0.27em] font-sans uppercase font-semibold mt-1 block"
        >
          WOODTECH INTERIORS
        </span>
      </div>
    </div>
  );
}
