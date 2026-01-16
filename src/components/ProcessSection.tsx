const steps = [
  {
    number: "1",
    circle: "bg-[#f2572b]",
    title: "Tell Us Your Needs",
    description: "Share your construction estimating, BIM services, or project support requirements—we'll understand your bid deadlines and US standards.",
  },
  {
    number: "2",
    circle: "bg-[#f2572b]",
    title: "Get Pre-Screened Experts",
    description: "Receive handpicked resumes of skilled cost estimators, BIM technicians, and support staff ready for your projects.",
  },
  {
    number: "3",
    circle: "bg-[#f2572b]",
    title: "Choose Your Team",
    description: "Interview and select dedicated remote estimators who match your workflow and construction needs perfectly.",
  },
  {
    number: "4",
    circle: "bg-[#171717]",
    title: "We Handle Everything",
    description: "Onboarding, contracts, payroll, software setup—your remote construction team starts delivering bids immediately.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 
              className="text-center text-2xl font-semibold tracking-wide md:text-left"
              style={{ fontFamily: "trap, Poppins, system-ui, sans-serif", color: "#171717" }}
            >
              START IN <span className="text-[#f2572b]">4 SIMPLE STEPS</span>
            </h2>
            <p 
              className="mt-2 text-center text-sm md:text-left"
              style={{ fontFamily: "Poppins, system-ui, sans-serif", color: "#171717" }}
            >
              Get matched with top remote construction estimators and BIM experts in days, not months.
            </p>

            <div className="mt-10 space-y-7">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${step.circle} text-white font-semibold`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 
                      className="text-sm font-semibold"
                      style={{ fontFamily: "trap, Poppins, system-ui, sans-serif", color: "#171717" }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="mt-1 text-sm"
                      style={{ fontFamily: "Poppins, system-ui, sans-serif", color: "#171717" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col items-center lg:items-start lg:pt-16">
            <div className="w-full max-w-[600px]">
              <div className="w-full overflow-hidden rounded-2xl bg-[#2f2f2f]/10 p-4">
                <div className="relative w-full overflow-hidden rounded-xl aspect-[552/360]">
                  <img
                    src="/15.png"
                    alt="Blueprint rendering"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <p 
              className="mt-6 max-w-[460px] text-center text-[22px] font-semibold leading-tight lg:mt-auto lg:mb-4 lg:pt-4 lg:text-left"
              style={{ fontFamily: "trap, Poppins, system-ui, sans-serif", color: "#171717" }}
            >
              Build <span className="text-[#f2572b]">winning construction bids</span> by partnering
              <br />
              with RemoteSeat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
