import { FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <section className="px-4 py-5 mt-6 sm:px-6 lg:px-8 lg:py-8 ">
      <div className="relative mx-auto flex min-h-75 max-w-350 overflow-hidden rounded-[28px] bg-[#eef2f7] sm:min-h-90 lg:min-h-107.5">

        {/* Decorative blur */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
        <div className="absolute -bottom-32 right-[25%] h-72 w-72 rounded-full bg-blue-100/30 blur-3xl" />

        {/* Content */}
        <div className="relative z-20 flex w-[58%] flex-col justify-center px-5 py-8 sm:w-[58%] sm:px-9 lg:w-1/2 lg:px-16">
          <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-xs">
            New season • NovaStore
          </span>

          <h1 className="max-w-150 text-[27px] font-bold leading-[1.08] tracking-[-0.04em] text-gray-950 sm:text-4xl lg:text-6xl">
            Find what you need,
            <br />
            all in one place.
          </h1>

          <p className="mt-4 max-w-150 text-[11px] leading-5 text-gray-500 sm:text-sm sm:leading-6 lg:mt-5 lg:text-base">
            Discover the latest tech, everyday essentials and more —
            carefully selected for you.
          </p>

          <button
            type="button"
            className="mt-5 flex w-fit items-center gap-2 rounded-full bg-black px-4 py-2.5 text-[11px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg sm:mt-7 sm:px-5 sm:py-3 sm:text-sm"
          >
            Shop Now
            <FiArrowRight size={14} />
          </button>
        </div>

        {/* Phones */}
        <div className="absolute -right-5 top-0 h-full w-[52%] sm:right-0 sm:w-[47%] lg:w-[50%]">

          {/* Glow behind phones */}
          <div className="absolute bottom-[-15%] left-[25%] h-[65%] w-[55%] rounded-full bg-white/70 blur-3xl" />

          {/* Back phone */}
          <div className="absolute bottom-[-8%] right-[22%] h-[92%] w-[36%] rotate-[-13deg] overflow-hidden rounded-[28px] border-[5px] border-gray-500/20 bg-gray-300 shadow-2xl sm:rounded-[35px] sm:border-[6px]">
            <img
              src="https://images.unsplash.com/photo-1592286927505-2fd3b9a5a2e0?auto=format&fit=crop&w=900&q=85"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          {/* Front phone */}
          <div className="absolute bottom-[-10%] right-[2%] h-[96%] w-[39%] rotate-[5deg] overflow-hidden rounded-[30px] border-[5px] border-gray-400/20 bg-gray-200 shadow-[0_25px_60px_rgba(0,0,0,0.18)] sm:rounded-[38px] sm:border-[6px]">
            <img
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85"
              alt="Smartphone"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;