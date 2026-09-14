import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-8 lg:px-12 lg:py-16">

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* About */}
          <div>
            <h3 className="text-base font-bold text-gray-900">
              About NovaStore
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                About us
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Careers
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Customers */}
          <div>
            <h3 className="text-base font-bold text-gray-900">
              For customers
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Delivery information
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                FAQ
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Returns
              </a>
            </div>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-base font-bold text-gray-900">
              For business
            </h3>

            <div className="mt-6 space-y-4">
              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Sell on NovaStore
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Partner with us
              </a>

              <a
                href="#"
                className="block text-sm text-gray-500 transition hover:text-gray-900"
              >
                Become a seller
              </a>
            </div>
          </div>

          {/* App + Social */}
          <div>
            <h3 className="text-base font-bold text-gray-900">
              Get the app
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#"
                className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <FaApple size={20} />
                <div>
                  <p className="text-[9px] text-gray-400">Download on the</p>
                  <p className="text-xs font-semibold text-gray-900">
                    App Store
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 transition hover:border-gray-300 hover:bg-gray-50"
              >
                <FaGooglePlay size={18} />
                <div>
                  <p className="text-[9px] text-gray-400">GET IT ON</p>
                  <p className="text-xs font-semibold text-gray-900">
                    Google Play
                  </p>
                </div>
              </a>
            </div>

            <h3 className="mt-9 text-base font-bold text-gray-900">
              Follow NovaStore
            </h3>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:bg-gray-900 hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Telegram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:bg-gray-900 hover:text-white"
              >
                <FaTelegramPlane size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:bg-gray-900 hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700 transition hover:bg-gray-900 hover:text-white"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-gray-200 pt-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="#"
                className="text-sm font-medium text-gray-800 transition hover:text-gray-500"
              >
                Terms of Service
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-800 transition hover:text-gray-500"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-sm font-medium text-gray-800 transition hover:text-gray-500"
              >
                Cookie Policy
              </a>
            </div>

            <p className="text-sm text-gray-400">
              © 2026 NovaStore. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-5 z-40 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-gray-800 sm:right-7 sm:h-14 sm:w-14"
      >
        <FiArrowUp size={22} />
      </button>
    </footer>
  );
}

export default Footer;