"use client";

import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1473186578172-c141e6798ee4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1528744639530-b975e75b1e81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const ExpandOnHover = () => {
  const [expandedImage, setExpandedImage] = useState(3);

  return (
    <div className="w-full py-12 sm:py-20 bg-transparent">
      <div className="relative flex flex-col items-center justify-center p-2 transition-all duration-300 ease-in-out lg:flex-row w-full">
        <div className="w-full max-w-6xl overflow-hidden rounded-3xl">
          {/* Mobile Grid View */}
          <div className="grid grid-cols-2 gap-2 sm:hidden px-4">
            {images.slice(0, 6).map((src, idx) => (
              <div key={idx} className="h-48 overflow-hidden rounded-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={src}
                  alt={`Image ${idx + 1}`}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* Desktop Expanded View */}
          <div className="hidden sm:flex h-full w-full items-center justify-center overflow-hidden bg-transparent">
            <div className="relative w-full px-5">
              <div className="flex w-full items-center justify-center gap-1">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out"
                    style={{
                      width: idx + 1 === expandedImage ? "24rem" : "5rem",
                      height: "24rem",
                    }}
                    onMouseEnter={() => setExpandedImage(idx + 1)}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={src}
                      alt={`Image ${idx + 1}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandOnHover;
