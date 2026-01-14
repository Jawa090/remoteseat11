const OutperformSection = () => {
  const stats = [
    {
      value: "Up to 70%",
      label: "Savings compared to hiring a US-based professional.",
    },
    {
      value: "Top 1%",
      label: "Every resource is college-educated, US-trained, rigorously tested.",
    },
    {
      value: "100%",
      subValue: "Managed",
      label: "Recruitment, payroll, and compliance handled.",
    },
    {
      value: "30+",
      subValue: "Years",
      label: "Combined experience and work in your time zone.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#dbd4ce] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative hidden lg:flex justify-start items-stretch h-full">
            <img
              src="/4.png"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h2
                className="font-semibold tracking-[-1px] text-[#171717]"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif",
                  fontSize: "48px",
                  lineHeight: "56px",
                }}
              >
                Outperform Your Competitors with{" "}
                <span style={{ color: "#f2572b" }}>Offshore AEC Experts</span>
              </h2>
            </div>

            <div>
              <h3
                className="font-semibold text-[#171717] mb-4"
                style={{
                  fontFamily: "trap, Poppins, system-ui, sans-serif",
                  fontSize: "28px",
                  lineHeight: "34px",
                }}
              >
                Expert Team Collaboration
              </h3>
            </div>

            <p
              className="text-[#171717]"
              style={{
                fontFamily: "Poppins, system-ui, sans-serif",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Think of us as a flexible extension of your team, ensuring your project's success from blueprint to reality. Access US-standard talent without hiring locally and save thousands on salaries, benefits, and training.
            </p>

            {/* Stats Boxes */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-[#f2572b] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="space-y-2">
                    <div className="flex flex-col">
                      <span
                        className="font-bold text-[#171717]"
                        style={{
                          fontFamily: "trap, Poppins, system-ui, sans-serif",
                          fontSize: "36px",
                          lineHeight: "42px",
                        }}
                      >
                        {stat.value}
                      </span>
                      {stat.subValue && (
                        <span
                          className="font-semibold text-[#f2572b] mt-1"
                          style={{
                            fontFamily: "trap, Poppins, system-ui, sans-serif",
                            fontSize: "20px",
                            lineHeight: "24px",
                          }}
                        >
                          {stat.subValue}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-[#171717] text-sm leading-relaxed"
                      style={{
                        fontFamily: "Poppins, system-ui, sans-serif",
                        fontSize: "14px",
                        lineHeight: "20px",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutperformSection;

