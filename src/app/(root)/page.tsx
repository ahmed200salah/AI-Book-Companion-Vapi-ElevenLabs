import BookCard from "@/components/BookCard";
import HeroSection from "@/components/hero-section";
import { sampleBooks } from "@/lib/constants";
import { auth } from "@clerk/nextjs/server";

export default async function LibraryPage() {
  await auth.protect();
  return (
    <main className="container wrapper">
      <HeroSection />
      <div className="library-books-grid">
        {sampleBooks.map((book) => (
          <BookCard
            key={book._id}
            title={book.title}
            author={book.author}
            coverURL={book.coverURL}
            slug={book.slug}
          />
        ))}
      </div>
    </main>
  );
}
