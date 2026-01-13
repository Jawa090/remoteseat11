import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "remoteseat helped us cut costs by 60% while delivering high-quality BIM models. Their team is highly skilled and works in sync with us!",
    name: "Carl T.",
    role: "General Contractor",
    avatar: "CT",
    image: "https://ezybuilds.com/wp-content/uploads/2025/03/Frame-33700-3.png",
  },
  {
    quote: "Outsourcing with remoteseat was a game-changer for us. We hired top 3D modelers at a fraction of the local cost!",
    name: "Sarah P.",
    role: "Principal Architect",
    avatar: "SP",
    image: "https://ezybuilds.com/wp-content/uploads/2025/03/Frame-33701.png",
  },
  {
    quote: "We scaled from 5 to 20 offshore engineers in 3 months. A game-changer!",
    name: "Jeff D.",
    role: "Project Manager",
    avatar: "JD",
    image: "https://ezybuilds.com/wp-content/uploads/2025/03/Frame-33702.png",
  },
];

const TestimonialsSection = () => {
  const [startIndex, setStartIndex] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
  const [snapCount, setSnapCount] = React.useState(testimonials.length);
  const [isPaused, setIsPaused] = React.useState(false);

  const items = React.useMemo(() => {
    const n = testimonials.length;
    const offset = ((startIndex % n) + n) % n;
    return [...testimonials.slice(offset), ...testimonials.slice(0, offset)];
  }, [startIndex]);

  const rotateRight = React.useCallback(() => {
    setStartIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  const rotateLeft = React.useCallback(() => {
    setStartIndex((i) => (i + 1) % testimonials.length);
  }, []);

  React.useEffect(() => {
    if (!api) return;

    setSnapCount(testimonials.length);
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    api.reInit();
    api.scrollTo(0, true);
  }, [api, items]);

  React.useEffect(() => {
    if (!api) return;
    if (isPaused) return;

    const interval = window.setInterval(() => {
      rotateLeft();
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [api, isPaused, rotateLeft]);

  return (
    <section className="bg-[#171717] py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#f2572b] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f2572b] rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="font-semibold tracking-[-1px] text-white mb-4"
            style={{
              fontFamily: "trap, Poppins, system-ui, sans-serif",
              fontSize: "42px",
              lineHeight: "50px",
            }}
          >
            WHAT OUR <span className="text-[#f2572b]">CLIENTS</span> SAY
          </h2>
          <p 
            className="text-gray-400 max-w-2xl mx-auto"
            style={{
              fontFamily: "Poppins, system-ui, sans-serif",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Trusted by industry leaders who have transformed their operations with our offshore AEC expertise
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mx-auto mt-12 max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerDown={() => setIsPaused(true)}
          onPointerUp={() => setIsPaused(false)}
          onPointerCancel={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="px-12"
          >
            <CarouselContent className="cursor-grab select-none touch-pan-y active:cursor-grabbing">
              {items.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full rounded-2xl bg-white px-8 py-8 shadow-xl border-2 border-[#f2572b]/10 hover:border-[#f2572b]/30 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    {/* Quote Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-[#f2572b] text-5xl leading-none font-bold opacity-20" style={{ fontFamily: "Georgia, serif" }}>
                        "
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-[#f2572b]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Quote Text */}
                    <p 
                      className="text-[15px] leading-relaxed mb-6"
                      style={{
                        fontFamily: "Poppins, system-ui, sans-serif",
                        color: "#171717",
                        lineHeight: "24px",
                      }}
                    >
                      {testimonial.quote}
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-[#f2572b]/20 to-transparent" />

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-2 border-[#f2572b]/20 ring-2 ring-[#f2572b]/10">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                        <AvatarFallback 
                          className="bg-gradient-to-br from-[#f2572b]/20 to-[#f2572b]/10 text-[#171717] font-bold text-lg"
                          style={{ fontFamily: "trap, Poppins, system-ui, sans-serif" }}
                        >
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p 
                          className="font-semibold mb-1"
                          style={{
                            fontFamily: "trap, Poppins, system-ui, sans-serif",
                            fontSize: "16px",
                            color: "#171717",
                          }}
                        >
                          {testimonial.name}
                        </p>
                        <p 
                          className="text-sm"
                          style={{
                            fontFamily: "Poppins, system-ui, sans-serif",
                            color: "#6b6b6b",
                          }}
                        >
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation Buttons */}
          <button
            type="button"
            aria-label="Previous"
            onClick={rotateLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-[#f2572b] text-white transition-all duration-300 hover:bg-[#e04a1f] hover:scale-110 shadow-lg hover:shadow-xl z-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={rotateRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-[#f2572b] text-white transition-all duration-300 hover:bg-[#e04a1f] hover:scale-110 shadow-lg hover:shadow-xl z-10"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Pagination Dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setStartIndex(i)}
                className={
                  "h-3 rounded-full transition-all duration-300 " +
                  (i === ((startIndex % snapCount) + snapCount) % snapCount
                    ? "w-10 bg-[#f2572b] shadow-lg"
                    : "w-3 bg-white/30 hover:bg-white/50 hover:w-6")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
