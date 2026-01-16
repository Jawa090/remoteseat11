const ArchitecturalVisualizationSection = () => {
  const services = [
    {
      title: "3D\nInterior\nCost Visuals",
      description: "Lifelike interior renderings with accurate quantity takeoffs for client approvals and estimating.",
      image: "/12.png"
    },
    {
      title: "3D\nFixture & Furniture\nEstimating",
      description: "Production-ready 3D models including detailed material schedules and construction cost breakdowns.",
      image: "/13.png"
    },
    {
      title: "3D\nExterior\nBid Renderings",
      description: "Site-specific exteriors showing realistic materials, lighting, and complete cost estimation data.",
      image: "/14.png"
    }
  ];

  return (
    <section className="w-full bg-[#171717] py-28 px-6 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:items-start md:text-left">
        <div className="max-w-4xl">
          <h2 className="text-white text-4xl font-semibold leading-tight">
            Construction 3D Visualization
            <br />
            & <span className="text-[#f2572b]">Estimating Renderings</span>
          </h2>
        </div>
        <p className="max-w-[280px] text-sm text-gray-300 md:mt-2">
          Trusted by contractors for precise 3D models with material takeoffs and bid-ready photorealistic renders.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:mt-20 md:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="relative h-[520px] overflow-hidden rounded-2xl bg-black/10">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="whitespace-pre-line text-xl font-semibold leading-tight">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchitecturalVisualizationSection;
