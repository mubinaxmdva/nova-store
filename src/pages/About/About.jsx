function About() {
  return (
    <div className="mx-auto max-w-4xl py-10 mt-10">
      <div className="rounded-3xl border border-[#e8e8e8] bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          About NovaStore
        </p>
        <h1 className="mt-4 text-3xl font-bold text-[#111111]">
          Smart tech for everyday life
        </h1>
        <p className="mt-5 text-base leading-7 text-gray-600">
          NovaStore brings together premium electronics, everyday essentials,
          and modern lifestyle products in one clean shopping experience. We
          focus on reliable devices, honest pricing, and a simple browsing flow
          that keeps buying easy.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-[18px] bg-[#f3f4f6] p-5">
            <h2 className="text-lg font-semibold text-[#111111]">Quality</h2>
            <p className="mt-2 text-sm text-gray-600">
              Carefully selected products across top brands.
            </p>
          </div>
          <div className="rounded-[18px] bg-[#f3f4f6] p-5">
            <h2 className="text-lg font-semibold text-[#111111]">Value</h2>
            <p className="mt-2 text-sm text-gray-600">
              Competitive pricing and smart deals for everyday shopping.
            </p>
          </div>
          <div className="rounded-[18px] bg-[#f3f4f6] p-5">
            <h2 className="text-lg font-semibold text-[#111111]">Service</h2>
            <p className="mt-2 text-sm text-gray-600">
              Fast, simple, and easy to use across all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
