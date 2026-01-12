import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "EzyBuilds Construction Estimators Who Turn Numbers Into Confidence",
      excerpt: "In today's fast-moving construction world, success starts long before the first brick is laid. It begins with...",
      image: "https://ezybuilds.com/wp-content/uploads/2025/10/freepik__the-style-is-candid-image-photography-with-natural__98915-e1760977781144-1024x577.webp",
      date: "20 Oct",
      category: "General",
      readTime: "2min",
      slug: "ezybuilds-construction-estimators-who-turn-numbers-into-confidence"
    },
    {
      id: 2,
      title: "EzyBuilds: Redefining Offshore Solutions for the Construction Industry",
      excerpt: "In today's fast-paced construction world, time and precision are critical. At EzyBuilds, we don't just provide offshore...",
      image: "https://ezybuilds.com/wp-content/uploads/2025/10/ChatGPT-Image-Oct-18-2025-03_47_03-AM-e1760741930453-1024x577.webp",
      date: "17 Oct",
      category: "General",
      readTime: "4min",
      slug: "ezybuilds-redefining-offshore-solutions-for-the-construction-industry"
    },
    {
      id: 3,
      title: "How EzyBuilds Streamlines Construction Outsourcing for Maximum Efficiency",
      excerpt: "Outsource Your Construction Staffing to Stay Ahead of the Competition Outsourcing is no longer a trend; it's...",
      image: "https://ezybuilds.com/wp-content/uploads/2025/10/ChatGPT-Image-Oct-18-2025-03_25_01-AM-e1760742160410-1024x577.webp",
      date: "17 Oct",
      category: "Featured",
      readTime: "2min",
      slug: "how-ezybuilds-streamlines-construction-outsourcing-for-maximum-efficiency"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest from Our
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in the AEC industry and offshore construction staffing.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <Link to={`/blogs/${post.slug}`} className="block relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {post.category === 'Featured' && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>•</span>
                  <span className="text-orange-500 font-medium">{post.category}</span>
                </div>

                {/* Title */}
                <Link to={`/blogs/${post.slug}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link 
                  to={`/blogs/${post.slug}`}
                  className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link 
            to="/blogs"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
