import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="library-hero-card mb-12">
        <div className="library-hero-content gap-8 lg:gap-12">
          <div className="library-hero-text">
            <h1 className="library-hero-title">Your Library</h1>
            <p className="library-hero-description">
              Convert your books into interactive AI conversations. Listen, learn, and discuss your favorite reads.
            </p>
            <Link href="/books/new" className="library-cta-primary flex items-center gap-2">
              <span>Add new book</span>
            </Link>
          </div>
          <div className="library-hero-illustration-desktop">
            <Image src="/assets/hero-illustration.png" alt="Library illustration" width={350} height={233} preload className="object-contain" />
          </div>
        </div>
      </div>
  );
};
export default HeroSection;