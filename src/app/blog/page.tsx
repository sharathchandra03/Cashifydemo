import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

const featuredPost = {
  title: "The Complete Guide to Selling Your Old Phone in 2024",
  excerpt: "Learn how to get the best price for your used smartphone with our comprehensive step-by-step guide covering everything from data backup to pickup.",
  image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
  date: "Jan 15, 2024",
  readTime: "8 min read",
  category: "Selling Guide",
};

const blogPosts = [
  { id: "1", title: "iPhone 15 vs iPhone 14: Is the Upgrade Worth It?", excerpt: "A detailed comparison of Apple&apos;s latest flagships.", image: "https://images.unsplash.com/photo-1696446702183-cbd13c0f90c1?w=400", date: "Jan 12, 2024", readTime: "5 min", category: "Reviews" },
  { id: "2", title: "Top 10 Refurbished Phones Under ₹30,000", excerpt: "Best value picks for budget-conscious buyers.", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400", date: "Jan 10, 2024", readTime: "6 min", category: "Buying Guide" },
  { id: "3", title: "How We Grade Our Devices: The U2U Process", excerpt: "Inside look at our quality inspection standards.", image: "https://images.unsplash.com/photo-1588515603068-48e855d27f70?w=400", date: "Jan 8, 2024", readTime: "4 min", category: "Process" },
  { id: "4", title: "5 Signs It&apos;s Time to Sell Your Old Laptop", excerpt: "Know when to upgrade your computing device.", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", date: "Jan 5, 2024", readTime: "5 min", category: "Tips" },
  { id: "5", title: "Android vs iPhone: Which Holds Value Better?", excerpt: "Depreciation analysis across major brands.", image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400", date: "Jan 3, 2024", readTime: "7 min", category: "Analysis" },
  { id: "6", title: "Sustainable Tech: The Environmental Impact of Refurbished", excerpt: "How buying used helps the planet.", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400", date: "Dec 28, 2023", readTime: "6 min", category: "Sustainability" },
];

const categories = ["All", "Selling Guide", "Buying Guide", "Reviews", "Tips", "News"];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.98_0.005_240)]">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <div className="bg-gradient-to-br from-[oklch(0.15_0.02_240)] to-[oklch(0.12_0.02_240)] py-16 px-4 text-center text-white">
          <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl mb-4">
            U2U Blog
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Expert tips, buying guides, and industry insights for tech enthusiasts
          </p>
        </div>

        {/* Categories */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-[oklch(0.6_0.18_195)] text-white"
                    : "bg-white border-2 border-border hover:border-[oklch(0.6_0.18_195)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <section className="max-w-6xl mx-auto px-4 pb-12">
          <Link href="#" className="block bg-white rounded-2xl border-2 border-border overflow-hidden hover:border-[oklch(0.6_0.18_195)] transition-colors">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-flex items-center gap-1 text-sm text-[oklch(0.6_0.18_195)] font-medium mb-3">
                  <TrendingUp className="h-4 w-4" /> Featured
                </span>
                <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-3">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {featuredPost.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-[oklch(0.6_0.18_195)] font-medium">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* Blog Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <h2 className="font-[family-name:var(--font-display)] font-bold text-xl mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href="#" className="bg-white rounded-2xl border-2 border-border overflow-hidden hover:border-[oklch(0.6_0.18_195)] transition-colors group">
                <div className="relative h-48">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-[oklch(0.6_0.18_195)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="px-6 py-3 border-2 border-border rounded-xl font-medium hover:bg-white transition-colors">
              Load More Articles
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
