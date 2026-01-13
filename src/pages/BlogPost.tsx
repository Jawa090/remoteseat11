import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type BlogPostData = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
  content?: Array<
    | { type: "h2" | "h3" | "p"; text: string }
    | { type: "ul" | "ol"; items: string[] }
    | { type: "img"; src: string; alt: string }
  >;
};

type CommentItem = {
  id: string;
  postSlug: string;
  name: string;
  email: string;
  website?: string;
  comment: string;
  createdAt: string;
};

const BlogPost = () => {
  const { slug } = useParams();

  const postSlug = slug ?? "";

  const posts: BlogPostData[] = [
    {
      id: 1,
      title: "remoteseat Construction Estimators Who Turn Numbers Into Confidence",
      excerpt:
        "In today's fast-moving construction world, success starts long before the first brick is laid. It begins with knowing the true cost of what you’re about to build.",
      image:
        "https://ezybuilds.com/wp-content/uploads/2025/10/freepik__the-style-is-candid-image-photography-with-natural__98915-e1760977781144-1024x577.webp",
      date: "20 Oct",
      category: "General",
      readTime: "2min",
      slug: "ezybuilds-construction-estimators-who-turn-numbers-into-confidence",
      content: [
        { type: "h2", text: "Know the Real Cost Before You Build" },
        {
          type: "p",
          text: "Imagine knowing the exact material and labor cost for your project, no guesswork, no hidden expenses. With remoteseat's construction cost estimating services, you can see every detail clearly: materials, quantities, labor hours, equipment, and overhead.",
        },
        {
          type: "p",
          text: "Our goal is simple eliminate financial uncertainty so your project runs on budget and on schedule. Whether you’re a builder, contractor, or developer, our quantity takeoff experts help you understand what you’ll spend and where you’ll save.",
        },
        { type: "h2", text: "Accurate Estimates That Save Time and Money" },
        {
          type: "p",
          text: "Accuracy is everything in construction. That's why remoteseat uses advanced digital takeoff tools and professional estimator expertise to deliver results you can trust. We compare your project's projected costs with current market rates, helping you identify cost-saving opportunities before you commit to suppliers or subcontractors.",
        },
        {
          type: "p",
          text: "Our clients consistently find that a remoteseat estimate doesn't just guide spending, it reduces it. With precise forecasting, you can bid smarter, plan better, and avoid unexpected overruns.",
        },
        { type: "h2", text: "Flexible, Project-Based Estimating" },
        {
          type: "p",
          text: "Every project is unique and your estimating service should be too. remoteseat offers task-based and project-based estimating options, so you only pay for what you need. Whether it's a full residential estimate, a single trade takeoff, or a specific drawing package, we tailor our services to match your project scope and budget.",
        },
        {
          type: "p",
          text: "This flexibility makes remoteseat ideal for contractors, architects, builders, and developers who want professional-grade estimating support without unnecessary costs or long-term commitments.",
        },
        { type: "h2", text: "Transparency That Builds Trust" },
        {
          type: "p",
          text: "We believe that construction should never involve surprises, especially financial ones. Each remoteseat estimate is transparent, itemized, and easy to understand. You'll know where every dollar goes, from foundation materials to finishing details. Our construction estimating consultants act as your cost partners helping you stay informed, competitive, and profitable throughout your project's lifecycle.",
        },
      ],
    },
    {
      id: 2,
      title: "remoteseat: Redefining Offshore Solutions for the Construction Industry",
      excerpt:
        "In today's fast-paced construction world, time and precision are critical. At remoteseat, we don't just provide offshore...",
      image:
        "https://ezybuilds.com/wp-content/uploads/2025/10/ChatGPT-Image-Oct-18-2025-03_47_03-AM-e1760741930453-1024x577.webp",
      date: "17 Oct",
      category: "General",
      readTime: "3min",
      slug: "ezybuilds-redefining-offshore-solutions-for-the-construction-industry",
      content: [
        {
          type: "p",
          text: "In today's fast-paced construction world, time and precision are critical. At remoteseat, we don't just provide offshore talent; we provide smart, reliable solutions that help construction professionals like you scale with ease, efficiency, and unmatched quality.",
        },
        { type: "h2", text: "Traditional Hiring Can Hold You Back" },
        {
          type: "p",
          text: "Local talent is expensive, hard to find, and often leads to project delays. Long hiring processes, training gaps, and high overhead can hinder your progress, resulting in missed deadlines, frustrated teams, and increased costs.",
        },
        {
          type: "p",
          text: "remoteseat takes this challenge head-on, providing a seamless offshore solution that empowers you to expand your workforce without the hassle.",
        },
        { type: "h2", text: "The remoteseat Solution: Offshore Teams, On-Point Execution" },
        {
          type: "p",
          text: "Imagine being able to scale your team instantly, no hiring delays, no training downtime, just high-quality professionals ready to integrate with your existing workflow.",
        },
        { type: "h3", text: "Here's what remoteseat offers:" },
        {
          type: "ul",
          items: [
            "Dedicated Offshore Experts: Highly trained professionals skilled in construction and architectural design using tools like Revit, AutoCAD, Bluebeam, and PlanSwift.",
            "Aligned with U.S. Construction Standards: Our team understands the complexities of construction documentation, structural layouts, and building codes.",
            "Quick Onboarding: Your offshore team is ready to start within 72 hours, aligned with your unique requirements.",
          ],
        },
        {
          type: "p",
          text: "We don’t just provide staff, we give you a strategic extension of your existing team, ready to tackle your toughest projects.",
        },
        { type: "h2", text: "Why remoteseat? The Competitive Advantage" },
        {
          type: "p",
          text: "At remoteseat, we combine construction industry expertise with business intelligence. We're not just a resource provider; we're your trusted offshore partner, helping you achieve greater project capacity, faster delivery times, and significant cost savings.",
        },
        {
          type: "img",
          src: "https://ezybuilds.com/wp-content/uploads/2025/10/ChatGPT-Image-Oct-18-2025-03_53_13-AM-e1760741905704.webp",
          alt: "remoteseat offshore solutions",
        },
        { type: "h3", text: "Why Choose Us:" },
        {
          type: "ul",
          items: [
            "End-to-End Project Support: From initial consultation to continuous performance reviews, we manage every detail so you don’t have to.",
            "Cost-Effective Solutions: Get offshore talent at $13/hr instead of $70/hr, without compromising quality.",
            "Performance Tracking: We ensure your offshore team delivers consistent, high-quality results every time.",
            "Flexible Scalability: Scale your team up or down as needed, no long-term contracts, just the flexibility to grow with your business.",
          ],
        },
        {
          type: "p",
          text: "remoteseat is more than just outsourcing; it's about building a better, more efficient construction process.",
        },
        { type: "h2", text: "Our Areas of Expertise: Specialized Support for Every Project" },
        {
          type: "p",
          text: "remoteseat serves a wide range of construction professionals, including contractors, architects, and estimators. Our team is skilled in the following areas:",
        },
        {
          type: "ul",
          items: [
            "Construction Documentation: Ready-to-submit plans, permit sets, and shop drawings.",
            "Quantity Takeoffs: Precise and cost-effective estimates for project bidding.",
            "Roofing & Envelope Detailing : Specialized detailing for commercial and residential projects.",
            "3D Modeling & BIM Coordination: Accurate and efficient visualizations and collaboration tools.",
          ],
        },
        {
          type: "img",
          src: "https://ezybuilds.com/wp-content/uploads/2025/10/bim.webp",
          alt: "BIM",
        },
        {
          type: "p",
          text: "Every professional we place is equipped with the skills and tools you need to get work done fast and accurately.",
        },
        { type: "h2", text: "How remoteseat Works: A Seamless Process for Growth" },
        {
          type: "p",
          text: "At remoteseat, we've streamlined the process to make it as easy as possible for you to integrate offshore talent into your team:",
        },
        {
          type: "ol",
          items: [
            "Consult: We review your needs and identify the right expertise for your project.",
            "Match: Our team handpicks professionals with the exact skills you require.",
            "Onboard: Your offshore team is fully onboarded and will start within 3 days.",
            "Deliver: Projects are completed on time, with regular progress checks to ensure your standards are met.",
          ],
        },
        {
          type: "p",
          text: "From start to finish, we handle it all, giving you the flexibility to focus on what matters most.",
        },
        { type: "h2", text: "The Impact: What You Gain with remoteseat" },
        {
          type: "p",
          text: "When you partner with remoteseat, you gain more than just skilled professionals; you gain the power to transform your business. Here's how:",
        },
        {
          type: "ul",
          items: [
            "50% Faster Project Turnarounds: Meet your deadlines with time to spare.",
            "60% Savings on Staffing Costs: Redirect funds toward growing your business.",
            "Zero Operational Stress: We manage all the backend, so you can focus on the front-end.",
            "Consistent, Reliable Quality: Every project is delivered to U.S. standards with full accountability.",
          ],
        },
        {
          type: "p",
          text: "You won’t just finish more projects, you’ll finish them faster, with higher quality, and without breaking your budget.",
        },
        { type: "h3", text: "The Future of Construction: Global Teams, Local Results" },
        {
          type: "p",
          text: "remoteseat is part of a larger movement in the construction industry: global teams for local results. With cloud-based tools and seamless communication, we believe the future of construction is borderless. That's why we bring you highly skilled offshore professionals who work like they're right down the street.",
        },
        {
          type: "p",
          text: "Whether you need help with construction documentation, 3D modeling, or specialized detailing, we have the expertise and the offshore infrastructure to help you scale quickly and efficiently.",
        },
      ],
    },
    {
      id: 3,
      title: "How remoteseat Streamlines Construction Outsourcing for Maximum Efficiency",
      excerpt:
        "Outsource Your Construction Staffing to Stay Ahead of the Competition Outsourcing is no longer a trend; it's...",
      image:
        "https://ezybuilds.com/wp-content/uploads/2025/10/ChatGPT-Image-Oct-18-2025-03_25_01-AM-e1760742160410-1024x577.webp",
      date: "17 Oct",
      category: "Featured",
      readTime: "2min",
      slug: "how-ezybuilds-streamlines-construction-outsourcing-for-maximum-efficiency",
      content: [
        { type: "h2", text: "Outsource Your Construction Staffing to Stay Ahead of the Competition" },
        {
          type: "p",
          text: "Outsourcing is no longer a trend; it's a necessity. As the construction industry faces increased project complexity, tight budgets, and tight deadlines, companies are turning to offshore staffing to stay competitive. remoteseat empowers construction firms to outsource their staffing needs, ensuring you never miss a beat when it comes to meeting client demands.",
        },
        {
          type: "p",
          text: "When you choose remoteseat for your construction staffing, you don't just get offshore help; you get a strategic extension of your team, fully equipped to deliver exceptional results.",
        },
        { type: "h3", text: "Why Outsource Construction Staffing to remoteseat?" },
        {
          type: "img",
          src: "https://ezybuilds.com/wp-content/uploads/2025/10/ChatGPT-Image-Oct-18-2025-03_31_13-AM-e1760742200176.webp",
          alt: "Why outsource construction staffing to remoteseat",
        },
        {
          type: "p",
          text: "For construction businesses, outsourcing staffing needs can offer several critical advantages:",
        },
        {
          type: "ul",
          items: [
            "Cost Savings: Offshore staffing provides a more affordable alternative to local hires, enabling your firm to stay competitive without incurring significant expenses.",
            "Increased Flexibility: Outsourcing allows you to scale your workforce based on project needs, whether you’re facing a busy season or need additional support for one-off projects.",
            "Expert Construction Professionals: At remoteseat, we provide highly skilled offshore workers trained in the latest industry tools and techniques, including AutoCAD, Revit, and PlanSwift. No matter the project type, we have the expertise you need.",
            "Faster Turnarounds: Our offshore teams can get started quickly, reducing lead times and enabling you to complete projects ahead of schedule.",
          ],
        },
        {
          type: "p",
          text: "With remoteseat, you get the best of both worlds: top-notch professionals who bring global expertise to your local projects.",
        },
        { type: "h3", text: "How Outsourcing to remoteseat Streamlines Your Operations" },
        {
          type: "p",
          text: "Construction projects come with unique challenges delays, budget constraints, and talent shortages. Outsourcing to remoteseat offers solutions that alleviate these problems:",
        },
        {
          type: "ul",
          items: [
            "Zero Staffing Gaps: We provide offshore talent to cover a range of roles, ensuring your team stays fully staffed at all times.",
            "Reduced Overhead: Instead of hiring locally, training, and managing payroll, you can rely on remoteseat to handle all the logistics while you focus on the bigger picture.",
            "Enhanced Productivity: With skilled professionals on board, you’ll notice quicker turnaround times and better overall project quality.",
          ],
        },
        { type: "h3", text: "The remoteseat Outsourcing Workflow: From Consultation to Completion" },
        {
          type: "ol",
          items: [
            "Consult: We discuss your specific construction staffing requirements, timelines, and objectives.",
            "Match: Our experts connect you with the most suitable offshore professionals.",
            "Onboard: Offshore teams begin working alongside your existing team, ensuring a smooth collaboration from day one.",
          ],
        },
      ],
    },
  ];

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20 bg-white">
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-gray-900">Post not found</h1>
              <div className="mt-6">
                <Link to="/blogs" className="text-orange-600 font-semibold hover:text-orange-700">
                  Back to Blogs
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const commentsStorageKey = useMemo(() => `blog_comments:${postSlug}`, [postSlug]);
  const commenterStorageKey = "blog_commenter_info";

  const [commentText, setCommentText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(commentsStorageKey);
      setComments(raw ? (JSON.parse(raw) as CommentItem[]) : []);
    } catch {
      setComments([]);
    }
  }, [commentsStorageKey]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(commenterStorageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { name?: string; email?: string; website?: string };
      if (parsed.name) setName(parsed.name);
      if (parsed.email) setEmail(parsed.email);
      if (parsed.website) setWebsite(parsed.website);
      setSaveInfo(true);
    } catch {
      // ignore
    }
  }, []);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const trimmedComment = commentText.trim();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedWebsite = website.trim();

    if (!trimmedComment || !trimmedName || !trimmedEmail) {
      setFormError("Please fill in all required fields (Comment, Name, Email). ");
      return;
    }

    const newComment: CommentItem = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      postSlug,
      name: trimmedName,
      email: trimmedEmail,
      website: trimmedWebsite || undefined,
      comment: trimmedComment,
      createdAt: new Date().toISOString(),
    };

    const next = [newComment, ...comments];
    setComments(next);

    try {
      localStorage.setItem(commentsStorageKey, JSON.stringify(next));
    } catch {
      // ignore
    }

    if (saveInfo) {
      try {
        localStorage.setItem(
          commenterStorageKey,
          JSON.stringify({ name: trimmedName, email: trimmedEmail, website: trimmedWebsite || "" })
        );
      } catch {
        // ignore
      }
    } else {
      try {
        localStorage.removeItem(commenterStorageKey);
      } catch {
        // ignore
      }
    }

    setCommentText("");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 bg-white">
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <nav className="text-[13px] text-gray-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-gray-700">
                    Home
                  </Link>
                </li>
                <li className="text-gray-300">/</li>
                <li>
                  <span className="hover:text-gray-700">{post.category}</span>
                </li>
                <li className="text-gray-300">/</li>
                <li className="text-gray-700 line-clamp-1">{post.title}</li>
              </ol>
            </nav>

            <h1 className="mt-6 text-[34px] leading-tight font-bold text-[#2F1C6A]">{post.title}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-[13px] font-semibold text-[#2F1C6A]">
              <span>{post.date}</span>
              <span>•</span>
              <span className="uppercase">{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <div className="mt-8 overflow-hidden rounded-[12px]">
              <img
                src={post.image.replace("-1024x577", "")}
                alt={post.title}
                className="w-full aspect-[16/9] object-cover"
                loading="eager"
              />
            </div>

            <article className="mt-10">
              {post.content?.map((block, idx) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={idx}
                      className="mt-10 text-[26px] font-bold text-[#2F1C6A] leading-snug"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "h3") {
                  return (
                    <h3 key={idx} className="mt-6 text-[18px] font-bold text-[#2F1C6A]">
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "ul") {
                  return (
                    <ul key={idx} className="mt-4 list-disc pl-6 text-[16px] leading-[1.8] text-gray-700">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "ol") {
                  return (
                    <ol key={idx} className="mt-4 list-decimal pl-6 text-[16px] leading-[1.8] text-gray-700">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ol>
                  );
                }

                if (block.type === "img") {
                  return (
                    <div key={idx} className="mt-8 overflow-hidden rounded-[12px]">
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  );
                }

                return (
                  <p key={idx} className="mt-4 text-[16px] leading-[1.8] text-gray-700">
                    {block.text}
                  </p>
                );
              })}
            </article>

            <div className="mt-12 border-t border-gray-200 pt-10">
              <h2 className="text-[24px] font-bold text-gray-900">Leave a Reply</h2>
              <p className="mt-2 text-[14px] text-gray-600">Your email address will not be published. Required fields are marked *</p>

              {comments.length > 0 && (
                <div className="mt-8 rounded-[12px] border border-gray-200 bg-white p-5">
                  <div className="text-[16px] font-bold text-gray-900">Comments</div>
                  <div className="mt-4 space-y-4">
                    {comments.map((c) => (
                      <div key={c.id} className="border-t border-gray-100 pt-4 first:border-t-0 first:pt-0">
                        <div className="flex flex-wrap items-center gap-2 text-[13px] font-semibold text-[#2F1C6A]">
                          <span>{c.name}</span>
                          <span className="text-gray-300">•</span>
                          <span className="text-gray-600">
                            {new Date(c.createdAt).toLocaleDateString(undefined, {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                            })}
                          </span>
                        </div>
                        <p className="mt-2 whitespace-pre-wrap text-[14px] leading-[1.8] text-gray-700">{c.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <form className="mt-6 space-y-5" onSubmit={handleSubmitComment}>
                {formError && (
                  <div className="rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">
                    {formError}
                  </div>
                )}
                <div>
                  <label className="block text-[14px] font-semibold text-gray-800">Comment *</label>
                  <textarea
                    className="mt-2 w-full rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] outline-none focus:border-[#C95B4A]"
                    rows={6}
                    required
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="block text-[14px] font-semibold text-gray-800">Name *</label>
                    <input
                      className="mt-2 w-full rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] outline-none focus:border-[#C95B4A]"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-semibold text-gray-800">Email *</label>
                    <input
                      className="mt-2 w-full rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] outline-none focus:border-[#C95B4A]"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-semibold text-gray-800">Website</label>
                  <input
                    className="mt-2 w-full rounded-[10px] border border-gray-300 px-4 py-3 text-[14px] outline-none focus:border-[#C95B4A]"
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="save-info"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                  />
                  <label htmlFor="save-info" className="text-[13px] text-gray-600">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#C95B4A] px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#b34e3f]"
                >
                  Post Comment
                </button>
              </form>
            </div>

            <div className="mt-14 border-t border-gray-200 pt-10">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <img
                  src="https://secure.gravatar.com/avatar/4ce0791f07dee740c9cd289eebcaac7a604bd7efea7b32214fcb4c4603e0ac10?s=300&d=mm&r=g"
                  alt="Picture of remoteseat"
                  className="h-16 w-16 rounded-full"
                  loading="lazy"
                />
                <div>
                  <div className="text-[18px] font-bold text-gray-900">remoteseat</div>
                  <div className="mt-1 text-[14px] text-gray-600">
                    We’re a leading pre-construction service provider, offering high-quality, accurate services and dedicated remote resources to the AEC industry.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <h2 className="text-[28px] font-bold text-gray-900">Related Posts</h2>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {relatedPosts.map((p) => (
                  <article
                    key={p.slug}
                    className="rounded-[12px] border border-[#E3E3E3] bg-white p-4 shadow-[0px_0px_28px_0px_rgba(0,0,0,0.03)]"
                  >
                    <Link to={`/blogs/${p.slug}`} className="block overflow-hidden rounded-[12px]">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full aspect-[16/9] object-cover"
                        loading="lazy"
                      />
                    </Link>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-[12px] font-semibold text-[#2F1C6A]">
                      <span>{p.date}</span>
                      <span>•</span>
                      <span className="uppercase">{p.category}</span>
                      <span>•</span>
                      <span>{p.readTime}</span>
                    </div>

                    <Link to={`/blogs/${p.slug}`} className="block">
                      <h3 className="mt-3 text-[20px] font-semibold leading-snug text-[#2F1C6A]">
                        {p.title}
                      </h3>
                    </Link>

                    <p className="mt-3 text-[14px] text-gray-600">{p.excerpt}</p>
                  </article>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/blogs" className="text-orange-600 font-semibold hover:text-orange-700">
                  View all
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
