"use client";

import React, { useRef } from "react";

export function CertificateButton() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <a
      ref={btnRef}
      href="/certificate merged.pdf"
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      className="btn-lantern relative inline-block rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
    >
      <img
        src="/button_certificate.png"
        alt="View Certificates"
        className="w-auto h-32 md:h-48 object-contain relative z-10"
      />
    </a>
  );
}
