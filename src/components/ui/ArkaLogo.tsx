"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArkaLogoProps {
  variant?: "transparent" | "white" | "gold" | "favicon" | "footer";
  className?: string;
}

export default function ArkaLogo({ variant = "transparent", className = "h-10" }: ArkaLogoProps) {
  if (variant === "favicon") {
    return (
      <img
        src="/image.png"
        alt="ARKA Logo Icon"
        className={`${className} object-contain`}
      />
    );
  }

  if (variant === "footer") {
    return (
      <div className="flex flex-col items-start space-y-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer"
        >
          <img
            src="/image.png"
            alt="ARKA WOODTECH INTERIORS Logo"
            className="h-16 w-auto object-contain"
          />
        </motion.div>
        <p className="text-[10px] tracking-wider text-stone-400 italic mt-2">
          CUSTOM BY CHOICE • TRUST BY DESIGN • BUILT FOR YOU
        </p>
      </div>
    );
  }

  // Standard Header Logo
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover="hover"
      className={`flex items-center cursor-pointer ${className}`}
    >
      <motion.img
        src="/image.png"
        alt="ARKA WOODTECH INTERIORS Logo"
        className="h-full w-auto object-contain"
        variants={{
          hover: {
            filter: "drop-shadow(0 0 8px rgba(200, 155, 94, 0.25))",
            scale: 1.02,
            transition: { duration: 0.3 }
          }
        }}
      />
    </motion.div>
  );
}
