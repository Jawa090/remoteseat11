const steps = [
  {
    number: "1",
    circle: "bg-[#C95B4A]",
    title: "Tell Us Your Needs",
    description: "We begin by thoroughly discussing your requirements and processing your specific needs to understand your project goals.",
  },
  {
    number: "2",
    circle: "bg-[#C95B4A]",
    title: "Get Pre-Screened Candidates",
    description: "We provide you with a selection of pre-screened, vetted, and assessed resumes, allowing you to choose the best fit for your team.",
  },
  {
    number: "3",
    circle: "bg-[#C95B4A]",
    title: "Choose Your Team",
    description: "You conduct interviews with your chosen candidates, ensuring a perfect match for your project and company culture.",
  },
  {
    number: "4",
    circle: "bg-[#373737]",
    title: "We Handle the Rest",
    description: "We handle the onboarding process, contracts, payroll, and IT setup, seamlessly integrating your new team members into your workflow.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-center text-2xl font-semibold tracking-wide text-gray-900 md:text-left">
              START IN <span className="text-[#C95B4A]">4 SIMPLE STEPS</span>
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 md:text-left">
              Get matched with pre-vetted AEC talent in days, not months.
            </p>

            <div className="mt-10 space-y-7">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${step.circle} text-white font-semibold`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
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
                    src="https://ezybuilds.com/wp-content/uploads/2025/03/4bg.webp"
                    alt="Blueprint rendering"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-[460px] text-center text-[22px] font-semibold leading-tight text-gray-900 lg:mt-auto lg:mb-4 lg:pt-4 lg:text-left">
              Build a <span className="text-[#C95B4A]">winning team</span> by partnering
              <br />
              with EZYBUILDS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
