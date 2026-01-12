const ArchitecturalVisualizationSection = () => {
  const services = [
    {
      title: "3D\nInterior\nRendering",
      description: "Transform spaces with lifelike interior visuals for client approvals.",
      image: "https://ezybuilds.com/wp-content/uploads/2025/03/91c4506effdbbe878d63ca7acc066152-scaled.webp"
    },
    {
      title: "3D\nFurniture\nRendering",
      description: "Showcase designs with detailed, manufacturable 3D furniture models.",
      image: "/2.webp"
    },
    {
      title: "3D\nExterior\nRendering",
      description: "Present building exteriors with realistic lighting, textures, and environments.",
      image: "https://ezybuilds.com/wp-content/uploads/2025/03/238eb48f14730c589c8ff67a0d4b5841-scaled.webp"
    }
  ];

  return (
    <section className="w-full bg-[#3A3A3A] py-28 px-6 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:items-start md:text-left">
        <div className="max-w-4xl">
          <h2 className="text-white text-4xl font-semibold leading-tight">
            Architectural Visualization
            <br />
            and <span className="text-[#D9654B]">3D Rendering Services</span>
          </h2>
        </div>
        <p className="max-w-[280px] text-sm text-gray-300 md:mt-2">
          Trusted by AEC firms for high-quality 3D models and photorealistic renders.
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
