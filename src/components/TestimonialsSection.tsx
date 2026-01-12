import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "EZYBUILDS helped us cut costs by 60% while delivering high-quality BIM models. Their team is highly skilled and works in sync with us!",
    name: "Carl T.",
    role: "General Contractor",
    avatar: "CT",
    image: "https://ezybuilds.com/wp-content/uploads/2025/03/Frame-33700-3.png",
  },
  {
    quote: "Outsourcing with EZYBUILDS was a game-changer for us. We hired top 3D modelers at a fraction of the local cost!",
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
    <section className="bg-[#3A3A3A] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[28px] font-semibold tracking-wide text-white md:text-[34px]">
            WHAT OUR <span className="text-[#C95B4A]">CLIENTS</span> SAY
          </h2>
        </div>

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
            className="px-10"
          >
            <CarouselContent className="cursor-grab select-none touch-pan-y active:cursor-grabbing">
              {items.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full rounded-lg bg-white px-7 py-7 shadow-sm">
                    <div className="text-[#C95B4A] text-3xl leading-none">❞</div>
                    <p className="mt-4 text-[13px] leading-relaxed text-[#5f5f5f]">
                      {testimonial.quote}
                    </p>

                    <div className="my-6 h-px w-full bg-[#e6e6e6]" />

                    <div className="flex items-center gap-3">
                      <Avatar className="h-[44px] w-[44px]">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-[#f2f2f2] text-[#3A3A3A] font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-[13px] font-semibold text-[#3A3A3A]">{testimonial.name}</p>
                        <p className="text-[12px] text-[#7a7a7a]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button
            type="button"
            aria-label="Previous"
            onClick={rotateLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[#C95B4A] text-white transition-colors hover:bg-[#b34e3f]"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={rotateRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[#C95B4A] text-white transition-colors hover:bg-[#b34e3f]"
          >
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setStartIndex(i)}
                className={
                  "h-2 w-2 rounded-full transition-colors " +
                  (i === ((startIndex % snapCount) + snapCount) % snapCount
                    ? "bg-[#C95B4A]"
                    : "bg-white/30 hover:bg-white/50")
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
