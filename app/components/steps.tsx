"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const CAROUSEL_INTERVAL_MS = 4000;

const steps = [
  {
    number: "1",
    title: "Kennismaking",
    description:
      "Bram komt langs voor een intakegesprek waarin we alles bespreken over de verzorging van uw dieren en eventuele extra wensen.",
  },
  {
    number: "2",
    title: "Verzorging",
    description:
      "Tijdens uw afwezigheid verzorgen wij dagelijks uw dieren, post en planten volgens afspraak.",
  },
  {
    number: "3",
    title: "Updates via de app",
    description:
      "We houden u via de app op de hoogte. Dit doen we via filmpjes en/of foto's.",
  },
];

// Replace these with your own vertical/portrait images (e.g. /steps/1.jpg)
const carouselImages = [
  { src: "/2023-07-02.webp", alt: "foto 1" },
  { src: "/2024-08-02.webp", alt: "foto 2" },
  { src: "/2025-06-02.webp", alt: "foto 3" },
  { src: "/2023-03-06.webp", alt: "foto 4"},
];

const Steps = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlayStopped, setAutoPlayStopped] = useState(false);

  const goTo = (index: number) => {
    setCurrentImageIndex((index + carouselImages.length) % carouselImages.length);
  };

  const stopAutoPlay = () => {
    setAutoPlayStopped(true);
  };

  useEffect(() => {
    if (autoPlayStopped) return;
    const id = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [autoPlayStopped]);

  return (
    <section className="w-full bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Zo werkt het
        </h2>

        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16 items-start">
          {/* Left: Steps (stacked on small, left on large) */}
          <div className="w-full lg:w-1/2 lg:max-w-xl shrink-0 mb-10 lg:mb-0">
            <div className="relative">
              <div
                className="absolute left-[19px] top-8 bottom-8 w-px bg-brand/20 hidden sm:block"
                aria-hidden
              />
              <ul className="space-y-0">
                {steps.map((step, index) => (
                  <li
                    key={index}
                    className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0"
                  >
                    <div className="relative z-10 flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-brand text-white font-semibold text-sm">
                      {step.number}
                    </div>
                    <div className="pt-0.5 min-w-0">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-20">
              <a
                href="/contact"
                className="inline-block bg-brand text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand/90 transition-colors shadow-lg"
              >
                Plan een afspraak
              </a>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed text-xs">
                Aan het intakegesprek zijn eenmalig kosten verbonden.{" "}
                <a
                  href="/tarieven"
                  className="text-blue-600 hover:text-blue-700 font-semibold underline"
                >
                  Zie tarieven
                </a>
              </p>
            </div>

          </div>

          {/* Right: Image carousel (stacked below on small, right on large) */}
          <div className="w-full lg:w-1/2 lg:min-w-0 flex flex-col items-center">
            <div className="w-full max-w-sm aspect-[3/4] relative rounded-xl overflow-hidden bg-gray-100">
              {carouselImages.map((img, index) => {
                const isActive = index === currentImageIndex;
                return (
                  <div
                    key={index}
                    className="absolute inset-0 transition-all duration-500 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "scale(1)" : "scale(1.02)",
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                );
              })}
            </div>

            {/* Carousel controls */}
            <div className="flex items-center gap-4 mt-4">
              <button
                type="button"
                onClick={() => {
                  stopAutoPlay();
                  goTo(currentImageIndex - 1);
                }}
                className="p-2 rounded-full border border-gray-300 text-foreground hover:bg-gray-50 transition-colors"
                aria-label="Vorige afbeelding"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <div className="flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      stopAutoPlay();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentImageIndex
                        ? "bg-brand"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ga naar afbeelding ${index + 1}`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  stopAutoPlay();
                  goTo(currentImageIndex + 1);
                }}
                className="p-2 rounded-full border border-gray-300 text-foreground hover:bg-gray-50 transition-colors"
                aria-label="Volgende afbeelding"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
