import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const banners = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&h=520&q=85",
    title: "Everything you need, in one place.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1800&h=520&q=85",
    title: "Discover the latest technology.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&h=520&q=85",
    title: "Smart choices for everyday life.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&h=520&q=85",
    title: "Style that fits your everyday.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1800&h=520&q=85",
    title: "Upgrade your setup.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1800&h=520&q=85",
    title: "Find something you'll love.",
  },
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="px-1.8 mt-6 py-1.75 sm:px-2 lg:px-2 lg:py-7">
      <div className="relative mx-auto max-w-350 overflow-hidden rounded-3xl bg-gray-100 sm:rounded-[28px]">
        {/* Slides */}
        <div className="relative aspect-16/5 min-h-45 w-full sm:min-h-55 lg:min-h-75">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current
                  ? "z-10 opacity-100"
                  : "z-0 opacity-0"
              }`}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="h-full w-full object-cover"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-black/45 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-14">
                <div className="max-w-125 text-white">
                  <span className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                    NovaStore
                  </span>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    {banner.title}
                  </h2>

                  <button
                    type="button"
                    className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-gray-100 sm:mt-6 sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Previous */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-gray-800 shadow-md backdrop-blur-sm transition hover:bg-white sm:left-5 sm:h-11 sm:w-11"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-gray-800 shadow-md backdrop-blur-sm transition hover:bg-white sm:right-5 sm:h-11 sm:w-11"
          >
            <FiChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
            {banners.map((banner, index) => (
              <button
                key={banner.id}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;